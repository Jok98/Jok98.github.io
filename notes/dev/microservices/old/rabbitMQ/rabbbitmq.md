## 🐰 Che cos’è RabbitMQ?

RabbitMQ è un **broker di messaggistica** open-source che permette a diverse applicazioni o microservizi di comunicare in modo **asincrono** tramite messaggi.

In altre parole, invece che comunicare direttamente tramite chiamate HTTP sincrone, i servizi scambiano messaggi che RabbitMQ riceve, smista e distribuisce.

---

## 🔍 Quando e perché usarlo?

Lo usi quando:

* Vuoi comunicazione asincrona tra servizi (maggiore resilienza).
* Devi scalare facilmente (se hai tanti servizi/produttori-consumatori).
* Vuoi separare nettamente i servizi, riducendo l'accoppiamento (loose coupling).
* Devi gestire code affidabili e garantire la delivery dei messaggi.

---

## 🎯 Concetti fondamentali di RabbitMQ

Questi sono i concetti chiave per iniziare:

1. **Producer (publisher)**
   Invia messaggi verso RabbitMQ.

2. **Consumer (subscriber)**
   Riceve e processa messaggi da RabbitMQ.

3. **Exchange**
   Smista i messaggi ricevuti dai producer verso una o più code, secondo delle regole chiamate "bindings".

4. **Queue (coda)**
   Struttura che memorizza i messaggi in attesa di essere processati dai consumer.

5. **Binding**
   Regole che determinano come i messaggi passano dagli exchange alle code.

---

## 📬 Tipi principali di exchange

RabbitMQ ha 4 tipi principali di exchange:

| Tipo        | Uso pratico                                              |
| ----------- | -------------------------------------------------------- |
| **Direct**  | Routing esatto tramite routing-key                       |
| **Topic**   | Routing tramite pattern                                  |
| **Fanout**  | Broadcast a tutte le code collegate                      |
| **Headers** | Routing tramite intestazioni del messaggio (meno comune) |

Per iniziare, **Direct** e **Topic** sono i più frequenti in ambito Java/Spring.

---

## 🚀 RabbitMQ con Java e Spring (Spring AMQP)

Spring fornisce **Spring AMQP**, un modulo facilissimo per gestire RabbitMQ nelle applicazioni Java.

**Dipendenze Maven di base:**

```xml
<dependency>
  <groupId>org.springframework.boot</groupId>
  <artifactId>spring-boot-starter-amqp</artifactId>
</dependency>
```

Questa dipendenza include già tutto ciò che ti serve per comunicare con RabbitMQ.

---

## 📌 Configurare RabbitMQ con Spring

Ecco una configurazione minima in Spring:

```java
@Configuration
public class RabbitConfig {

    public static final String QUEUE_NAME = "taskete-queue";
    public static final String EXCHANGE_NAME = "taskete-exchange";
    public static final String ROUTING_KEY = "taskete.key";

    @Bean
    Queue queue() {
        return new Queue(QUEUE_NAME, true);
    }

    @Bean
    DirectExchange exchange() {
        return new DirectExchange(EXCHANGE_NAME);
    }

    @Bean
    Binding binding(Queue queue, DirectExchange exchange) {
        return BindingBuilder.bind(queue)
            .to(exchange)
            .with(ROUTING_KEY);
    }
}
```

Qui hai configurato:

* una coda (`Queue`)
* un exchange di tipo direct (`DirectExchange`)
* un binding (con routing-key) tra exchange e coda

---

## 🎈 Inviare messaggi (Producer)

Usando `RabbitTemplate`:

```java
@Service
public class TasketeProducer {

    private final RabbitTemplate rabbitTemplate;

    public TasketeProducer(RabbitTemplate rabbitTemplate) {
        this.rabbitTemplate = rabbitTemplate;
    }

    public void sendMessage(String message) {
        rabbitTemplate.convertAndSend("taskete-exchange", "taskete.key", message);
    }
}
```

---

## 📥 Ricevere messaggi (Consumer)

Semplicissimo con `@RabbitListener`:

```java
@Service
public class TasketeConsumer {

    @RabbitListener(queues = "taskete-queue")
    public void handleMessage(String message) {
        System.out.println("Ricevuto: " + message);
        // Logica di business qui
    }
}
```

---

## 📋 Buone pratiche con RabbitMQ e Java/Spring

* **Gestione errori**: usa Dead-Letter Queue (DLQ) per messaggi non processati.
* **Logging e monitoraggio**: monitora dimensioni code e rate di elaborazione messaggi.
* **Resilienza**: configura connessioni, retries, acknowledgements manuali (quando necessario).
* **Dockerizzazione**: RabbitMQ può facilmente essere containerizzato con Docker.

Esempio di Docker Compose:

```yaml
rabbitmq:
  image: rabbitmq:3-management
  container_name: taskete-rabbitmq
  ports:
    - "5672:5672"
    - "15672:15672"  # UI di gestione
  networks:
    - taskete-net
```

---