## 🔍 Servlet: Le Fondamenta del Web Java

### Cosa sono le Servlet?

Le **Servlet** sono la tecnologia fondamentale di Java per gestire le richieste HTTP. Introdotte negli anni '90, rappresentano il modo "tradizionale" di sviluppare applicazioni web in Java.

#### Caratteristiche delle Servlet:

1. **Modello Thread-per-Request**: Ogni richiesta HTTP viene gestita da un thread dedicato
2. **Bloccante (Blocking I/O)**: Quando una servlet fa una chiamata al database o a un servizio esterno, il thread rimane "bloccato" in attesa della risposta
3. **Pool di Thread**: Il server mantiene un pool di thread (es. 200 thread) per gestire le richieste concurrent

```java
// Esempio di Servlet tradizionale
@WebServlet("/users")
public class UserServlet extends HttpServlet {
    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response) {
        // Questo thread si blocca qui
        User user = userService.findById(123); // Chiamata bloccante al DB
        
        // Il thread resta "occupato" finché il DB non risponde
        response.getWriter().write(user.toJson());
    }
}
```


#### Problemi del Modello Servlet:
- **Scalabilità limitata**: Con 200 thread max, puoi gestire max 200 richieste simultanee
- **Memory overhead**: Ogni thread consuma ~1MB di memoria
- **Context switching**: Cambio frequente tra thread è costoso
- **Thread starvation**: Se tutte le richieste sono lente, i thread si esauriscono

---

## 🌸 Spring MVC: L'Evoluzione delle Servlet

Spring MVC è costruito **sopra le Servlet**, ma le semplifica enormemente.

### Architettura Spring MVC:

```
Richiesta HTTP → DispatcherServlet → Controller → Service → Repository → Database
                     ↑                    ↓
                 (1 Thread)          (Stesso Thread)
```


#### Caratteristiche:
- **Basato su Servlet**: Usa internamente le Servlet Java
- **Thread-per-Request**: Mantiene il modello 1 thread = 1 richiesta
- **Sincrono e Bloccante**: Le operazioni I/O bloccano il thread
- **Annotation-based**: `@Controller`, `@RequestMapping`, `@Service`

```java
@RestController
public class UserController {
    
    @GetMapping("/users/{id}")
    public User getUser(@PathVariable Long id) {
        // Questo thread si blocca qui
        return userService.findById(id); // Chiamata sincrona al DB
    }
}
```


---

## ⚡ Spring WebFlux: La Rivoluzione Reattiva

Spring WebFlux rappresenta un **paradigma completamente diverso**: la **programmazione reattiva**.

### Concetti Fondamentali:

#### 1. **Non-Blocking I/O**
```java
@RestController
public class UserController {
    
    @GetMapping("/users/{id}")
    public Mono<User> getUser(@PathVariable Long id) {
        // Il thread NON si blocca qui!
        return userService.findById(id); // Ritorna immediatamente un "Mono"
    }
}
```


#### 2. **Event Loop**
WebFlux usa un **Event Loop** (simile a Node.js):
- Pochi thread (di solito CPU cores * 2)
- Ogni thread gestisce migliaia di richieste
- Quando c'è I/O, il thread passa alla prossima richiesta

```
Thread 1: Richiesta A → aspetta DB → gestisce Richiesta B → aspetta API → gestisce Richiesta C
                           ↑                                      ↑
                    (non si blocca)                        (non si blocca)
```


#### 3. **Mono e Flux**
- **Mono**: Contenitore per 0 o 1 elemento
- **Flux**: Contenitore per 0 o N elementi
- Entrambi rappresentano **stream asincroni**

```java
// WebFlux
public Mono<User> findUser(Long id) {
    return webClient.get()
        .uri("/users/{id}", id)
        .retrieve()
        .bodyToMono(User.class)
        .doOnNext(user -> log.info("User found: {}", user))
        .doOnError(error -> log.error("Error: {}", error));
}
```


---

## 🔄 Confronto Pratico: MVC vs WebFlux

### Scenario: 1000 richieste simultanee che attendono 2 secondi per una risposta dal database

#### **Spring MVC (Servlet)**:
```
Threads necessari: 1000
Memoria utilizzata: ~1000MB (1MB per thread)
Comportamento: Ogni thread aspetta bloccato per 2 secondi
Limite: Se hai solo 200 thread → 800 richieste in coda
```


#### **Spring WebFlux**:
```
Threads necessari: 8-16 (in base ai CPU cores)
Memoria utilizzata: ~20MB
Comportamento: I thread gestiscono altre richieste mentre aspettano
Limite: Migliaia di richieste concorrenti senza problemi
```


---

## 🚪 Spring Cloud Gateway: Perché WebFlux?

Un **API Gateway** deve:
1. **Gestire migliaia di richieste simultanee**
2. **Fare proxy verso altri servizi** (I/O intensivo)
3. **Applicare filtri** (autenticazione, rate limiting)
4. **Essere altamente performante**

### Gateway con Spring MVC:
```java
// Ogni richiesta blocca un thread
@RequestMapping("/api/**")
public ResponseEntity<String> proxy(HttpServletRequest request) {
    // Thread si blocca qui per chiamata a microservizio
    String response = restTemplate.getForObject(targetUrl, String.class);
    return ResponseEntity.ok(response);
}
```


### Gateway con Spring WebFlux:
```java
// Migliaia di richieste con pochi thread
@Override
public Mono<Void> filter(ServerWebExchange exchange, GatewayFilterChain chain) {
    return webClient.get()
        .uri(targetUrl)
        .retrieve()
        .bodyToMono(String.class)
        .flatMap(response -> {
            // Thread non si è mai bloccato!
            return chain.filter(exchange);
        });
}
```


---

## 📊 Quando Usare Cosa?

### **Usa Spring MVC quando:**
- ✅ Applicazioni CRUD tradizionali
- ✅ Team familiare con programmazione sincrona
- ✅ Molte operazioni CPU-intensive
- ✅ Integrazione con librerie blocking (JDBC tradizionale)
- ✅ Debugging più semplice

### **Usa Spring WebFlux quando:**
- ✅ **API Gateway** (come nel tuo caso)
- ✅ Applicazioni con molte chiamate I/O
- ✅ Microservizi che devono scalare
- ✅ Real-time applications (WebSocket, SSE)
- ✅ Streaming di dati

---