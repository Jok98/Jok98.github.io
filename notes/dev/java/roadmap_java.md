# Roadmap Java — Basi → Avanzato → Java 26

## 1. Ambiente di sviluppo e strumenti

### 1.1 Installazione e gestione JDK
- [ ] JDK
- [ ] JRE
- [ ] JVM
- [ ] JDK 25 LTS
- [ ] JDK 26
- [ ] `JAVA_HOME`
- [ ] `PATH`
- [ ] SDKMAN
- [ ] jEnv
- [ ] Gestione multi-versione JDK
- [ ] Differenza tra release LTS e feature release

### 1.2 Tool base del JDK
- [ ] `java`
- [ ] `javac`
- [ ] `jshell`
- [ ] `jar`
- [ ] `javadoc`
- [ ] `javap`
- [ ] `jdeps`
- [ ] `jlink`
- [ ] `jpackage`
- [ ] `jcmd`
- [ ] `jps`
- [ ] `jmap`
- [ ] `jstack`
- [ ] `jfr`

### 1.3 IDE e ambiente locale
- [ ] IntelliJ IDEA
- [ ] Eclipse
- [ ] VS Code
- [ ] Configurazione SDK progetto
- [ ] Configurazione compiler level
- [ ] Configurazione language level
- [ ] Run configuration
- [ ] Debug configuration
- [ ] Formatter
- [ ] Import optimization
- [ ] Code inspection

### 1.4 Build tool
- [ ] Maven
- [ ] Gradle
- [ ] Project structure
- [ ] Dependency management
- [ ] Plugin
- [ ] Lifecycle
- [ ] Build profiles
- [ ] Multi-module project
- [ ] Wrapper Maven/Gradle
- [ ] Repository locali/remoti
- [ ] Version catalog Gradle
- [ ] BOM Maven
- [ ] Dependency scope

### 1.5 Struttura progetto Java
- [ ] Package
- [ ] Source folder
- [ ] Test folder
- [ ] Resource folder
- [ ] Classpath
- [ ] Module path
- [ ] JAR
- [ ] Fat JAR
- [ ] Executable JAR
- [ ] Multi-release JAR

---

## 2. Fondamenti del linguaggio

### 2.1 Sintassi base
- [ ] Classe
- [ ] Metodo
- [ ] Metodo `main`
- [ ] Package declaration
- [ ] Import
- [ ] Statement
- [ ] Expression
- [ ] Block
- [ ] Commenti
- [ ] Naming convention
- [ ] Scope
- [ ] Lifetime delle variabili

### 2.2 Tipi primitivi
- [ ] `byte`
- [ ] `short`
- [ ] `int`
- [ ] `long`
- [ ] `float`
- [ ] `double`
- [ ] `char`
- [ ] `boolean`
- [ ] Literal numerici
- [ ] Binary literal
- [ ] Underscore nei literal numerici
- [ ] Overflow
- [ ] Underflow
- [ ] Cast implicito
- [ ] Cast esplicito
- [ ] Promozione numerica
- [ ] Operazioni aritmetiche

### 2.3 Wrapper type
- [ ] `Byte`
- [ ] `Short`
- [ ] `Integer`
- [ ] `Long`
- [ ] `Float`
- [ ] `Double`
- [ ] `Character`
- [ ] `Boolean`
- [ ] Boxing
- [ ] Unboxing
- [ ] Autoboxing
- [ ] Cache degli wrapper
- [ ] `==` su wrapper
- [ ] `.equals()` su wrapper
- [ ] Null pointer con unboxing

### 2.4 Variabili e costanti
- [ ] Variabili locali
- [ ] Campi di istanza
- [ ] Campi statici
- [ ] Costanti
- [ ] `final`
- [ ] `static final`
- [ ] Inizializzazione
- [ ] Shadowing
- [ ] `var` locale
- [ ] Type inference locale

### 2.5 Operatori
- [ ] Aritmetici
- [ ] Assegnazione
- [ ] Comparazione
- [ ] Logici
- [ ] Bitwise
- [ ] Shift
- [ ] Ternario
- [ ] Incremento/decremento
- [ ] Precedenza operatori
- [ ] Short-circuit
- [ ] `instanceof`

### 2.6 Controllo di flusso
- [ ] `if`
- [ ] `else`
- [ ] `else if`
- [ ] `switch` statement
- [ ] `switch` expression
- [ ] `for`
- [ ] Enhanced `for`
- [ ] `while`
- [ ] `do while`
- [ ] `break`
- [ ] `continue`
- [ ] `return`
- [ ] Labelled break
- [ ] Labelled continue

### 2.7 Array
- [ ] Array monodimensionale
- [ ] Array multidimensionale
- [ ] Array jagged
- [ ] Inizializzazione array
- [ ] Accesso per indice
- [ ] `ArrayIndexOutOfBoundsException`
- [ ] Array di primitivi
- [ ] Array di oggetti
- [ ] Copia array
- [ ] `Arrays`
- [ ] `System.arraycopy`

### 2.8 Stringhe
- [ ] `String`
- [ ] Immutabilità
- [ ] String pool
- [ ] Concatenazione
- [ ] `StringBuilder`
- [ ] `StringBuffer`
- [ ] `String.format`
- [ ] `formatted`
- [ ] `substring`
- [ ] `contains`
- [ ] `startsWith`
- [ ] `endsWith`
- [ ] `replace`
- [ ] `split`
- [ ] `join`
- [ ] Text blocks
- [ ] Escape sequence
- [ ] Charset
- [ ] Unicode
- [ ] UTF-8

---

## 3. Programmazione orientata agli oggetti

### 3.1 Classi e oggetti
- [ ] Classe
- [ ] Oggetto
- [ ] Istanza
- [ ] Stato
- [ ] Comportamento
- [ ] Costruttore
- [ ] Costruttore di default
- [ ] Overload costruttori
- [ ] Initializer block
- [ ] Static initializer block
- [ ] `this`
- [ ] Riferimenti oggetto
- [ ] Mutabilità
- [ ] Identità oggetto

### 3.2 Incapsulamento
- [ ] Campi privati
- [ ] Metodi pubblici
- [ ] Getter
- [ ] Setter
- [ ] Metodi di dominio
- [ ] Invarianti
- [ ] Validazione costruttore
- [ ] Immutabilità difensiva
- [ ] Defensive copy
- [ ] Information hiding

### 3.3 Access modifier
- [ ] `public`
- [ ] `private`
- [ ] `protected`
- [ ] Package-private
- [ ] Visibilità tra package
- [ ] Visibilità in ereditarietà
- [ ] API pubblica
- [ ] Dettagli interni
- [ ] Encapsulation boundary

### 3.4 Ereditarietà
- [ ] `extends`
- [ ] Superclasse
- [ ] Sottoclasse
- [ ] `super`
- [ ] Override
- [ ] Overload
- [ ] Polimorfismo
- [ ] Dynamic dispatch
- [ ] Upcasting
- [ ] Downcasting
- [ ] `final class`
- [ ] `final method`
- [ ] Fragile base class problem
- [ ] Composizione come alternativa

### 3.5 Classi astratte
- [ ] `abstract class`
- [ ] Metodo astratto
- [ ] Metodo concreto
- [ ] Costruttore in classe astratta
- [ ] Template method
- [ ] Stato condiviso
- [ ] Differenza con interfaccia

### 3.6 Interfacce
- [ ] `interface`
- [ ] Implementazione
- [ ] Contratto
- [ ] Metodi astratti
- [ ] Metodi default
- [ ] Metodi statici
- [ ] Metodi privati
- [ ] Costanti in interfaccia
- [ ] Multiple inheritance of type
- [ ] Functional interface
- [ ] Marker interface

### 3.7 `Object`
- [ ] `toString`
- [ ] `equals`
- [ ] `hashCode`
- [ ] `getClass`
- [ ] `clone`
- [ ] `finalize`
- [ ] Contratto `equals`
- [ ] Contratto `hashCode`
- [ ] Hash collision
- [ ] Oggetti come chiavi in `HashMap`
- [ ] Mutabilità e hash code

### 3.8 Classi annidate
- [ ] Static nested class
- [ ] Inner class
- [ ] Local class
- [ ] Anonymous class
- [ ] Accesso al contesto esterno
- [ ] Costo di accoppiamento
- [ ] Uso con listener
- [ ] Uso con builder

### 3.9 Enum
- [ ] `enum`
- [ ] Costanti enum
- [ ] Campi in enum
- [ ] Costruttori in enum
- [ ] Metodi in enum
- [ ] Override per costante
- [ ] `values`
- [ ] `valueOf`
- [ ] `EnumSet`
- [ ] `EnumMap`
- [ ] Enum come state machine

---

## 4. Modellazione del dominio

### 4.1 Principi di modellazione
- [ ] Entity
- [ ] Value object
- [ ] Aggregate
- [ ] Domain service
- [ ] Application service
- [ ] Repository
- [ ] Factory
- [ ] DTO
- [ ] Command
- [ ] Query
- [ ] Event
- [ ] Invariant
- [ ] Ubiquitous language

### 4.2 Immutabilità
- [ ] Classe immutabile
- [ ] Campo `final`
- [ ] Stato non modificabile
- [ ] Copy constructor
- [ ] Defensive copy
- [ ] Collection immutabili
- [ ] Thread-safety per immutabilità
- [ ] Value-based class
- [ ] Record come value carrier

### 4.3 Record
- [ ] `record`
- [ ] Componenti record
- [ ] Canonical constructor
- [ ] Compact constructor
- [ ] Validazione record
- [ ] Metodi in record
- [ ] Campi statici in record
- [ ] Record annidati
- [ ] Record come DTO
- [ ] Record come value object
- [ ] Limiti con JPA
- [ ] Limiti con framework reflection-based

### 4.4 Sealed types
- [ ] `sealed class`
- [ ] `sealed interface`
- [ ] `permits`
- [ ] `final`
- [ ] `non-sealed`
- [ ] `sealed` + `record`
- [ ] Gerarchie chiuse
- [ ] Stati di dominio
- [ ] Errori di dominio
- [ ] Exhaustiveness checking
- [ ] Modellazione algebrica

### 4.5 Pattern matching per dominio
- [ ] Pattern matching con `instanceof`
- [ ] Pattern matching in `switch`
- [ ] Record patterns
- [ ] Guarded patterns
- [ ] Exhaustive switch
- [ ] Null handling in switch
- [ ] Dominio sealed + switch
- [ ] Primitive patterns
- [ ] Deconstruction pattern

---

## 5. Exception handling

### 5.1 Fondamenti
- [ ] `try`
- [ ] `catch`
- [ ] `finally`
- [ ] `throw`
- [ ] `throws`
- [ ] Stack trace
- [ ] Exception propagation
- [ ] Checked exception
- [ ] Unchecked exception
- [ ] `RuntimeException`
- [ ] `Error`
- [ ] `Throwable`

### 5.2 Gestione moderna
- [ ] Try-with-resources
- [ ] Multi-catch
- [ ] Rethrow
- [ ] Suppressed exception
- [ ] Exception wrapping
- [ ] Cause chain
- [ ] Custom exception
- [ ] Business exception
- [ ] Technical exception
- [ ] Validation exception
- [ ] Mapping exception → response

### 5.3 Strategie
- [ ] Fail fast
- [ ] Fail safe
- [ ] Errori recuperabili
- [ ] Errori non recuperabili
- [ ] Logging exception
- [ ] Non ingoiare eccezioni
- [ ] Boundary exception handling
- [ ] Global exception handling
- [ ] Exception in async code
- [ ] Exception in stream pipeline

---

## 6. Collections Framework

### 6.1 Interfacce principali
- [ ] `Iterable`
- [ ] `Collection`
- [ ] `List`
- [ ] `Set`
- [ ] `SortedSet`
- [ ] `NavigableSet`
- [ ] `Queue`
- [ ] `Deque`
- [ ] `Map`
- [ ] `SortedMap`
- [ ] `NavigableMap`
- [ ] `Iterator`
- [ ] `ListIterator`

### 6.2 Implementazioni `List`
- [ ] `ArrayList`
- [ ] `LinkedList`
- [ ] `Vector`
- [ ] `Stack`
- [ ] Accesso casuale
- [ ] Inserimento
- [ ] Rimozione
- [ ] Iterazione
- [ ] Complessità Big-O
- [ ] Scelta implementazione

### 6.3 Implementazioni `Set`
- [ ] `HashSet`
- [ ] `LinkedHashSet`
- [ ] `TreeSet`
- [ ] `EnumSet`
- [ ] Unicità
- [ ] Ordinamento naturale
- [ ] Ordinamento custom
- [ ] Hashing
- [ ] Collisione
- [ ] Mutabilità elementi

### 6.4 Implementazioni `Map`
- [ ] `HashMap`
- [ ] `LinkedHashMap`
- [ ] `TreeMap`
- [ ] `EnumMap`
- [ ] `WeakHashMap`
- [ ] `IdentityHashMap`
- [ ] `ConcurrentHashMap`
- [ ] Chiavi
- [ ] Valori
- [ ] Entry
- [ ] Hashing
- [ ] Ordering
- [ ] Null key
- [ ] Null value
- [ ] Mutabilità chiavi

### 6.5 Queue e Deque
- [ ] `ArrayDeque`
- [ ] `PriorityQueue`
- [ ] `BlockingQueue`
- [ ] FIFO
- [ ] LIFO
- [ ] Priority ordering
- [ ] Producer/consumer
- [ ] Queue bounded
- [ ] Queue unbounded

### 6.6 Utility collections
- [ ] `Collections`
- [ ] `Arrays`
- [ ] `Comparator`
- [ ] `Comparable`
- [ ] Sorting
- [ ] Searching
- [ ] Shuffling
- [ ] Unmodifiable collections
- [ ] Immutable factory methods
- [ ] Synchronized wrappers
- [ ] Checked wrappers

### 6.7 Sequenced Collections
- [ ] `SequencedCollection`
- [ ] `SequencedSet`
- [ ] `SequencedMap`
- [ ] First element
- [ ] Last element
- [ ] Reverse view
- [ ] Ordered collection API
- [ ] Migrazione da workaround legacy

---

## 7. Generics e type system

### 7.1 Generics base
- [ ] Generic class
- [ ] Generic interface
- [ ] Generic method
- [ ] Type parameter
- [ ] Type argument
- [ ] Diamond operator
- [ ] Raw type
- [ ] Type safety
- [ ] Compile-time check
- [ ] Runtime type

### 7.2 Bound
- [ ] Upper bound
- [ ] Multiple bound
- [ ] Recursive bound
- [ ] F-bounded polymorphism
- [ ] Bound su metodo
- [ ] Bound su classe
- [ ] Bound con interfacce

### 7.3 Wildcard
- [ ] Unbounded wildcard
- [ ] Upper bounded wildcard
- [ ] Lower bounded wildcard
- [ ] Capture conversion
- [ ] PECS
- [ ] Producer extends
- [ ] Consumer super
- [ ] API design con wildcard

### 7.4 Type erasure
- [ ] Erasure
- [ ] Bridge method
- [ ] Reifiable type
- [ ] Non-reifiable type
- [ ] Heap pollution
- [ ] Generic array creation
- [ ] Varargs generics
- [ ] `@SafeVarargs`
- [ ] Limiti runtime

### 7.5 Generics avanzati
- [ ] Generic builder
- [ ] Generic repository
- [ ] Generic mapper
- [ ] Type token
- [ ] Super type token
- [ ] Generic constraints
- [ ] Covarianza
- [ ] Controvarianza
- [ ] Invarianza

---

## 8. I/O, NIO e file system

### 8.1 I/O classico
- [ ] `InputStream`
- [ ] `OutputStream`
- [ ] `Reader`
- [ ] `Writer`
- [ ] `BufferedInputStream`
- [ ] `BufferedOutputStream`
- [ ] `BufferedReader`
- [ ] `BufferedWriter`
- [ ] `FileInputStream`
- [ ] `FileOutputStream`
- [ ] `PrintWriter`
- [ ] Encoding
- [ ] Buffering

### 8.2 NIO
- [ ] `Path`
- [ ] `Files`
- [ ] `FileSystem`
- [ ] `FileSystems`
- [ ] `StandardOpenOption`
- [ ] `FileVisitOption`
- [ ] `FileVisitor`
- [ ] `SimpleFileVisitor`
- [ ] Directory walking
- [ ] File attributes
- [ ] Symbolic link
- [ ] Temporary file
- [ ] Temporary directory

### 8.3 Channel e buffer
- [ ] `Channel`
- [ ] `FileChannel`
- [ ] `SocketChannel`
- [ ] `ServerSocketChannel`
- [ ] `ByteBuffer`
- [ ] `CharBuffer`
- [ ] Direct buffer
- [ ] Heap buffer
- [ ] Selector
- [ ] Non-blocking I/O
- [ ] Memory-mapped file

### 8.4 Watch e monitoring file system
- [ ] `WatchService`
- [ ] File create event
- [ ] File modify event
- [ ] File delete event
- [ ] Directory monitoring
- [ ] Overflow event
- [ ] Cross-platform behavior

### 8.5 Serializzazione dati
- [ ] Java serialization
- [ ] `Serializable`
- [ ] `serialVersionUID`
- [ ] `transient`
- [ ] Deserialization filtering
- [ ] JSON
- [ ] XML
- [ ] CSV
- [ ] Binary format
- [ ] Schema evolution

---

## 9. Date, time, numeri e localizzazione

### 9.1 Date/time moderna
- [ ] `LocalDate`
- [ ] `LocalTime`
- [ ] `LocalDateTime`
- [ ] `ZonedDateTime`
- [ ] `OffsetDateTime`
- [ ] `Instant`
- [ ] `Duration`
- [ ] `Period`
- [ ] `ZoneId`
- [ ] `ZoneOffset`
- [ ] `Clock`
- [ ] `DateTimeFormatter`
- [ ] Parsing date
- [ ] Formatting date
- [ ] Timezone
- [ ] DST
- [ ] Timestamp tecnico
- [ ] Data business

### 9.2 Date/time legacy
- [ ] `Date`
- [ ] `Calendar`
- [ ] `GregorianCalendar`
- [ ] `SimpleDateFormat`
- [ ] Thread-safety legacy formatter
- [ ] Migrazione a `java.time`

### 9.3 Numeri
- [ ] `BigDecimal`
- [ ] `BigInteger`
- [ ] Precisione
- [ ] Scala
- [ ] Rounding mode
- [ ] `MathContext`
- [ ] Comparazione `BigDecimal`
- [ ] `equals` vs `compareTo`
- [ ] Money calculation
- [ ] Percentuali
- [ ] Tassi
- [ ] Overflow numerico

### 9.4 Localizzazione
- [ ] `Locale`
- [ ] `Currency`
- [ ] `NumberFormat`
- [ ] `DecimalFormat`
- [ ] `MessageFormat`
- [ ] `ResourceBundle`
- [ ] Pluralizzazione
- [ ] Formati paese-specifici
- [ ] Formati valuta
- [ ] Formati percentuale

---

## 10. Java funzionale

### 10.1 Lambda
- [ ] Lambda expression
- [ ] Parametri lambda
- [ ] Body expression
- [ ] Body block
- [ ] Variable capture
- [ ] Effectively final
- [ ] Target type
- [ ] Lambda vs anonymous class
- [ ] Lambda e checked exception

### 10.2 Functional interface
- [ ] `@FunctionalInterface`
- [ ] `Predicate`
- [ ] `Function`
- [ ] `BiFunction`
- [ ] `Consumer`
- [ ] `BiConsumer`
- [ ] `Supplier`
- [ ] `UnaryOperator`
- [ ] `BinaryOperator`
- [ ] Primitive functional interfaces
- [ ] Custom functional interface

### 10.3 Method reference
- [ ] Static method reference
- [ ] Instance method reference
- [ ] Constructor reference
- [ ] Bound receiver
- [ ] Unbound receiver
- [ ] Ambiguità overload

### 10.4 Stream API
- [ ] Stream source
- [ ] Intermediate operation
- [ ] Terminal operation
- [ ] Lazy evaluation
- [ ] `map`
- [ ] `flatMap`
- [ ] `filter`
- [ ] `peek`
- [ ] `sorted`
- [ ] `distinct`
- [ ] `limit`
- [ ] `skip`
- [ ] `takeWhile`
- [ ] `dropWhile`
- [ ] `reduce`
- [ ] `collect`
- [ ] `forEach`
- [ ] `findFirst`
- [ ] `findAny`
- [ ] `anyMatch`
- [ ] `allMatch`
- [ ] `noneMatch`
- [ ] `count`
- [ ] Short-circuit operation
- [ ] Infinite stream

### 10.5 Collector
- [ ] `Collectors.toList`
- [ ] `Collectors.toSet`
- [ ] `Collectors.toMap`
- [ ] `Collectors.groupingBy`
- [ ] `Collectors.partitioningBy`
- [ ] `Collectors.mapping`
- [ ] `Collectors.flatMapping`
- [ ] `Collectors.filtering`
- [ ] `Collectors.reducing`
- [ ] `Collectors.joining`
- [ ] `Collectors.summarizingInt`
- [ ] Custom collector
- [ ] Downstream collector
- [ ] Merge function
- [ ] Collector characteristics

### 10.6 Optional
- [ ] `Optional`
- [ ] `OptionalInt`
- [ ] `OptionalLong`
- [ ] `OptionalDouble`
- [ ] `of`
- [ ] `ofNullable`
- [ ] `empty`
- [ ] `map`
- [ ] `flatMap`
- [ ] `filter`
- [ ] `orElse`
- [ ] `orElseGet`
- [ ] `orElseThrow`
- [ ] `ifPresent`
- [ ] `ifPresentOrElse`
- [ ] Anti-pattern: campo Optional
- [ ] Anti-pattern: parametro Optional
- [ ] Optional come return type

### 10.7 Programmazione funzionale pratica
- [ ] Pure function
- [ ] Side effect
- [ ] Referential transparency
- [ ] Function composition
- [ ] Pipeline
- [ ] Declarative style
- [ ] Imperative style
- [ ] Immutabilità
- [ ] Stream paralleli
- [ ] Limiti degli stream
- [ ] Debug pipeline stream

### 10.8 Stream Gatherers
- [ ] Gatherer
- [ ] Stateful transformation
- [ ] Windowing
- [ ] Batching
- [ ] Sliding window
- [ ] Custom pipeline
- [ ] Gatherer lifecycle
- [ ] Parallel compatibility
- [ ] Casi d'uso pratici
- [ ] Alternative con collector

---

## 11. Moduli Java e packaging

### 11.1 JPMS
- [ ] Module system
- [ ] `module-info.java`
- [ ] Named module
- [ ] Unnamed module
- [ ] Automatic module
- [ ] `requires`
- [ ] `requires transitive`
- [ ] `exports`
- [ ] `opens`
- [ ] `opens to`
- [ ] `uses`
- [ ] `provides with`
- [ ] Strong encapsulation
- [ ] Split package
- [ ] Module graph
- [ ] Readability
- [ ] Accessibility

### 11.2 Classpath vs module path
- [ ] Classpath
- [ ] Module path
- [ ] Migrazione da classpath
- [ ] Dipendenze legacy
- [ ] Automatic module name
- [ ] Multi-release JAR
- [ ] ServiceLoader
- [ ] Reflection con moduli
- [ ] Framework e moduli

### 11.3 Runtime image
- [ ] `jlink`
- [ ] Custom runtime image
- [ ] Moduli richiesti
- [ ] Riduzione dimensione runtime
- [ ] Startup
- [ ] Container image
- [ ] Distribuzione app
- [ ] `jpackage`

---

## 12. Concorrenza classica

### 12.1 Thread base
- [ ] `Thread`
- [ ] `Runnable`
- [ ] Thread lifecycle
- [ ] `start`
- [ ] `run`
- [ ] `join`
- [ ] `sleep`
- [ ] `interrupt`
- [ ] Daemon thread
- [ ] Thread priority
- [ ] Context class loader
- [ ] Thread naming

### 12.2 Memory model
- [ ] Java Memory Model
- [ ] Happens-before
- [ ] Visibility
- [ ] Atomicity
- [ ] Ordering
- [ ] Race condition
- [ ] Data race
- [ ] Safe publication
- [ ] Final field semantics
- [ ] Escape
- [ ] Immutabilità thread-safe

### 12.3 Sincronizzazione
- [ ] `synchronized`
- [ ] Monitor
- [ ] Intrinsic lock
- [ ] Reentrant lock behavior
- [ ] `volatile`
- [ ] `wait`
- [ ] `notify`
- [ ] `notifyAll`
- [ ] Deadlock
- [ ] Livelock
- [ ] Starvation
- [ ] Lock contention
- [ ] Lock granularity

### 12.4 `java.util.concurrent`
- [ ] `Executor`
- [ ] `ExecutorService`
- [ ] `ScheduledExecutorService`
- [ ] Thread pool
- [ ] `Future`
- [ ] `Callable`
- [ ] `CompletableFuture`
- [ ] `CompletionStage`
- [ ] `ForkJoinPool`
- [ ] `RecursiveTask`
- [ ] `RecursiveAction`
- [ ] `BlockingQueue`
- [ ] `ConcurrentHashMap`
- [ ] `CopyOnWriteArrayList`
- [ ] `CountDownLatch`
- [ ] `CyclicBarrier`
- [ ] `Semaphore`
- [ ] `Phaser`
- [ ] `Exchanger`

### 12.5 Lock avanzati e atomics
- [ ] `Lock`
- [ ] `ReentrantLock`
- [ ] `ReadWriteLock`
- [ ] `StampedLock`
- [ ] `Condition`
- [ ] `AtomicInteger`
- [ ] `AtomicLong`
- [ ] `AtomicReference`
- [ ] `LongAdder`
- [ ] `LongAccumulator`
- [ ] CAS
- [ ] ABA problem
- [ ] False sharing

### 12.6 Async programming
- [ ] `CompletableFuture.supplyAsync`
- [ ] `thenApply`
- [ ] `thenCompose`
- [ ] `thenCombine`
- [ ] `allOf`
- [ ] `anyOf`
- [ ] `exceptionally`
- [ ] `handle`
- [ ] `whenComplete`
- [ ] Timeout
- [ ] Cancellation
- [ ] Executor custom
- [ ] Error propagation
- [ ] Composition vs nesting

---

## 13. Concorrenza moderna: Project Loom

### 13.1 Virtual threads
- [ ] Platform thread
- [ ] Virtual thread
- [ ] Carrier thread
- [ ] Scheduler
- [ ] Blocking I/O
- [ ] Mount
- [ ] Unmount
- [ ] Pinning
- [ ] Thread-per-request
- [ ] `Executors.newVirtualThreadPerTaskExecutor`
- [ ] `Thread.ofVirtual`
- [ ] Debug virtual threads
- [ ] Thread dump con virtual threads
- [ ] Limiti CPU-bound
- [ ] Limiti con lock nativi

### 13.2 Structured Concurrency
- [ ] Structured task scope
- [ ] Task group
- [ ] Parent-child lifecycle
- [ ] Fork
- [ ] Join
- [ ] Shutdown
- [ ] Cancellation
- [ ] Failure propagation
- [ ] Result aggregation
- [ ] Timeout
- [ ] Concorrenza come unità strutturata
- [ ] Error handling strutturato

### 13.3 Scoped Values
- [ ] Scoped value
- [ ] Contesto immutabile
- [ ] Propagazione controllata
- [ ] Alternativa a `ThreadLocal`
- [ ] Uso con virtual threads
- [ ] Bound scope
- [ ] Nested scope
- [ ] Request context
- [ ] Security context
- [ ] Tracing context

### 13.4 Migrazione enterprise
- [ ] Virtual threads in web service
- [ ] Virtual threads con JDBC
- [ ] Virtual threads con HTTP client
- [ ] Virtual threads con Spring Boot
- [ ] ThreadLocal legacy
- [ ] Pool sizing
- [ ] Connection pool
- [ ] Backpressure
- [ ] Rate limiting
- [ ] Observability
- [ ] Load test

---

## 14. Networking e HTTP

### 14.1 Networking base
- [ ] Socket
- [ ] ServerSocket
- [ ] TCP
- [ ] UDP
- [ ] DNS
- [ ] Timeout
- [ ] Connection refused
- [ ] Connection reset
- [ ] Keep-alive
- [ ] TLS
- [ ] Proxy
- [ ] Firewall

### 14.2 HTTP Client
- [ ] `HttpClient`
- [ ] `HttpRequest`
- [ ] `HttpResponse`
- [ ] HTTP/1.1
- [ ] HTTP/2
- [ ] HTTP/3
- [ ] Synchronous send
- [ ] Asynchronous send
- [ ] BodyPublisher
- [ ] BodyHandler
- [ ] Headers
- [ ] Timeout
- [ ] Redirect
- [ ] Authentication
- [ ] CookieHandler
- [ ] SSLContext
- [ ] Connection reuse
- [ ] Error handling

### 14.3 Resilienza client
- [ ] Retry
- [ ] Exponential backoff
- [ ] Timeout budget
- [ ] Circuit breaker
- [ ] Bulkhead
- [ ] Rate limiter
- [ ] Idempotenza
- [ ] Correlation ID
- [ ] Request tracing
- [ ] Metrics
- [ ] Logging request/response
- [ ] Redazione dati sensibili

---

## 15. Sicurezza e crittografia

### 15.1 Fondamenti security
- [ ] Secure coding
- [ ] Input validation
- [ ] Output encoding
- [ ] Secrets management
- [ ] Password hashing
- [ ] TLS
- [ ] Certificate chain
- [ ] Trust model
- [ ] Keystore
- [ ] Truststore
- [ ] JCA
- [ ] JCE

### 15.2 Crypto API
- [ ] `SecureRandom`
- [ ] Hash
- [ ] HMAC
- [ ] Symmetric encryption
- [ ] Asymmetric encryption
- [ ] Signature
- [ ] KeyPair
- [ ] KeyGenerator
- [ ] KeyFactory
- [ ] Cipher
- [ ] MessageDigest
- [ ] Mac
- [ ] Signature API
- [ ] KEM API
- [ ] KDF API
- [ ] PEM API
- [ ] ML-KEM
- [ ] ML-DSA

### 15.3 Serialization security
- [ ] Java serialization risks
- [ ] Deserialization attack
- [ ] Serialization filtering
- [ ] ObjectInputFilter
- [ ] Allow-list
- [ ] Deny-list
- [ ] Alternative JSON
- [ ] Alternative protobuf
- [ ] Alternative Avro
- [ ] Backward compatibility

### 15.4 Platform security evolution
- [ ] Security Manager
- [ ] Deprecazione Security Manager
- [ ] Disabilitazione Security Manager
- [ ] Rimozione API legacy
- [ ] Strong encapsulation
- [ ] Restrizioni `final` field reflection
- [ ] Deprecazione `Unsafe`
- [ ] Migrazione da API interne JDK

---

## 16. Reflection, annotation e metaprogramming

### 16.1 Reflection
- [ ] `Class`
- [ ] `Field`
- [ ] `Method`
- [ ] `Constructor`
- [ ] `getDeclaredFields`
- [ ] `getDeclaredMethods`
- [ ] `setAccessible`
- [ ] Accesso privato
- [ ] Performance reflection
- [ ] Reflection e moduli
- [ ] Reflection e `final`
- [ ] Reflection e framework
- [ ] Reflection e security

### 16.2 Annotation
- [ ] Annotation custom
- [ ] `@Target`
- [ ] `@Retention`
- [ ] `@Inherited`
- [ ] `@Repeatable`
- [ ] Runtime annotation
- [ ] Source annotation
- [ ] Class annotation
- [ ] Annotation su type use
- [ ] Annotation processing
- [ ] Compile-time code generation

### 16.3 Dynamic proxy
- [ ] `Proxy`
- [ ] `InvocationHandler`
- [ ] Interface proxy
- [ ] AOP
- [ ] Logging proxy
- [ ] Transaction proxy
- [ ] Limiti proxy JDK
- [ ] Proxy vs bytecode generation

### 16.4 MethodHandles e VarHandles
- [ ] `MethodHandle`
- [ ] `MethodHandles.Lookup`
- [ ] `invoke`
- [ ] `invokeExact`
- [ ] `CallSite`
- [ ] `VarHandle`
- [ ] Field access
- [ ] Array access
- [ ] Memory ordering
- [ ] Reflection replacement
- [ ] Performance

### 16.5 Class-File API
- [ ] Class file structure
- [ ] Constant pool
- [ ] Method descriptor
- [ ] Field descriptor
- [ ] Attribute
- [ ] Bytecode instruction
- [ ] Parsing class file
- [ ] Generating class file
- [ ] Transforming class file
- [ ] Tooling
- [ ] Framework integration

---

## 17. JVM internals

### 17.1 Architettura JVM
- [ ] Bytecode
- [ ] Class file
- [ ] Class loader
- [ ] Bootstrap class loader
- [ ] Platform class loader
- [ ] Application class loader
- [ ] Custom class loader
- [ ] Linking
- [ ] Verification
- [ ] Preparation
- [ ] Resolution
- [ ] Initialization
- [ ] Runtime data areas

### 17.2 Memoria
- [ ] Heap
- [ ] Stack
- [ ] Metaspace
- [ ] Code cache
- [ ] Native memory
- [ ] Thread stack
- [ ] Eden
- [ ] Survivor
- [ ] Old generation
- [ ] TLAB
- [ ] Object header
- [ ] Compressed OOPs
- [ ] Compact object headers
- [ ] Escape analysis
- [ ] Scalar replacement

### 17.3 JIT e ottimizzazione
- [ ] Interpreter
- [ ] C1 compiler
- [ ] C2 compiler
- [ ] Tiered compilation
- [ ] Profiling runtime
- [ ] Inlining
- [ ] Deoptimization
- [ ] Loop optimization
- [ ] Lock elimination
- [ ] Dead code elimination
- [ ] Intrinsics
- [ ] Warmup
- [ ] Benchmark pitfalls

### 17.4 Class loading e startup
- [ ] Class loading cost
- [ ] CDS
- [ ] AppCDS
- [ ] Dynamic CDS
- [ ] AOT class loading
- [ ] AOT linking
- [ ] AOT object caching
- [ ] Lazy constants
- [ ] Startup profiling
- [ ] Startup optimization
- [ ] Container startup

### 17.5 Osservabilità runtime
- [ ] Thread dump
- [ ] Heap dump
- [ ] GC log
- [ ] JFR
- [ ] JMX
- [ ] MBeans
- [ ] Native memory tracking
- [ ] Safepoint logging
- [ ] Allocation profiling
- [ ] Lock profiling
- [ ] CPU profiling

---

## 18. Garbage Collection e performance

### 18.1 Fondamenti GC
- [ ] Allocation
- [ ] Reachability
- [ ] Root set
- [ ] Young generation
- [ ] Old generation
- [ ] Minor GC
- [ ] Major GC
- [ ] Full GC
- [ ] Stop-the-world
- [ ] Concurrent phase
- [ ] Parallel phase
- [ ] Compaction
- [ ] Fragmentation
- [ ] Promotion
- [ ] Allocation rate

### 18.2 Garbage collector
- [ ] Serial GC
- [ ] Parallel GC
- [ ] G1 GC
- [ ] ZGC
- [ ] Generational ZGC
- [ ] Shenandoah GC
- [ ] Epsilon GC
- [ ] GC selection
- [ ] Throughput goal
- [ ] Latency goal
- [ ] Memory footprint goal
- [ ] Pause time goal

### 18.3 GC tuning
- [ ] Heap sizing
- [ ] `-Xms`
- [ ] `-Xmx`
- [ ] GC logging
- [ ] G1 region size
- [ ] Pause target
- [ ] String deduplication
- [ ] Humongous allocation
- [ ] ZGC configuration
- [ ] Container memory limit
- [ ] CPU limit
- [ ] Native memory
- [ ] Memory leak analysis

### 18.4 Performance engineering
- [ ] JMH
- [ ] Warmup
- [ ] Measurement iteration
- [ ] Fork
- [ ] Blackhole
- [ ] Dead-code elimination
- [ ] Escape analysis impact
- [ ] Allocation benchmark
- [ ] CPU-bound benchmark
- [ ] I/O-bound benchmark
- [ ] Profiling
- [ ] Regression benchmark

---

## 19. Foreign Function, Memory e native interop

### 19.1 JNI
- [ ] JNI basics
- [ ] Native method
- [ ] Header generation
- [ ] Native library loading
- [ ] Marshaling
- [ ] Crash risk
- [ ] Memory safety
- [ ] Performance overhead
- [ ] Legacy use cases

### 19.2 Foreign Function & Memory API
- [ ] `MemorySegment`
- [ ] `Arena`
- [ ] `Linker`
- [ ] `SymbolLookup`
- [ ] `FunctionDescriptor`
- [ ] `ValueLayout`
- [ ] Native call
- [ ] Off-heap memory
- [ ] Bounds checking
- [ ] Lifetime management
- [ ] Segment scope
- [ ] Native interop
- [ ] Replacement for JNI in common cases

### 19.3 Off-heap e performance
- [ ] Direct memory
- [ ] Off-heap allocation
- [ ] Memory layout
- [ ] Native buffer
- [ ] Zero-copy
- [ ] Memory mapping
- [ ] Resource cleanup
- [ ] Cleaner
- [ ] Native memory tracking

---

## 20. Vector API e calcolo ad alte prestazioni

### 20.1 SIMD
- [ ] SIMD
- [ ] Scalar operation
- [ ] Vector operation
- [ ] CPU vector register
- [ ] Lane
- [ ] Species
- [ ] Portabilità
- [ ] Fallback
- [ ] Auto-vectorization
- [ ] Manual vectorization

### 20.2 Vector API
- [ ] Vector species
- [ ] Vector mask
- [ ] Load
- [ ] Store
- [ ] Arithmetic operation
- [ ] Reduction
- [ ] Comparison
- [ ] Blend
- [ ] Performance benchmark
- [ ] Incubator module
- [ ] Use cases numerici
- [ ] Use cases AI/ML
- [ ] Use cases crypto
- [ ] Use cases image processing

---

## 21. Testing

### 21.1 Unit testing
- [ ] JUnit 5
- [ ] Test lifecycle
- [ ] Assertions
- [ ] Parameterized tests
- [ ] Nested tests
- [ ] Test naming
- [ ] Test fixture
- [ ] Test isolation
- [ ] Boundary tests
- [ ] Negative tests
- [ ] Exception tests

### 21.2 Mocking
- [ ] Mockito
- [ ] Mock
- [ ] Stub
- [ ] Spy
- [ ] ArgumentCaptor
- [ ] Verification
- [ ] Strict stubbing
- [ ] Mocking final classes
- [ ] Mocking static methods
- [ ] Test double
- [ ] Fake
- [ ] In-memory implementation

### 21.3 Integration testing
- [ ] Integration test
- [ ] Testcontainers
- [ ] Database container
- [ ] Kafka container
- [ ] WireMock
- [ ] MockWebServer
- [ ] HTTP contract test
- [ ] Database migration test
- [ ] Transactional test
- [ ] Environment isolation

### 21.4 Quality gates
- [ ] JaCoCo
- [ ] Coverage line
- [ ] Coverage branch
- [ ] Mutation testing
- [ ] PIT
- [ ] Static analysis
- [ ] Checkstyle
- [ ] SpotBugs
- [ ] PMD
- [ ] Error Prone
- [ ] SonarQube

---

## 22. Logging, monitoring e observability

### 22.1 Logging
- [ ] `java.util.logging`
- [ ] SLF4J
- [ ] Logback
- [ ] Log4j2
- [ ] Log level
- [ ] Structured logging
- [ ] MDC
- [ ] Correlation ID
- [ ] Redazione dati sensibili
- [ ] Async logging
- [ ] Log rotation

### 22.2 Metriche
- [ ] Counter
- [ ] Gauge
- [ ] Timer
- [ ] Histogram
- [ ] Percentile
- [ ] Throughput
- [ ] Latency
- [ ] Error rate
- [ ] Saturation
- [ ] JVM metrics
- [ ] GC metrics
- [ ] Thread metrics

### 22.3 Tracing
- [ ] Distributed tracing
- [ ] Span
- [ ] Trace ID
- [ ] Parent span
- [ ] Context propagation
- [ ] OpenTelemetry
- [ ] Sampling
- [ ] Baggage
- [ ] Error trace
- [ ] Performance trace

### 22.4 JVM diagnostics
- [ ] JFR
- [ ] JMC
- [ ] VisualVM
- [ ] JConsole
- [ ] Async Profiler
- [ ] Flame graph
- [ ] CPU profiling
- [ ] Allocation profiling
- [ ] Lock profiling
- [ ] Safepoint profiling

---

## 23. Java enterprise e microservizi

### 23.1 JDBC e database
- [ ] JDBC
- [ ] Driver
- [ ] Connection
- [ ] PreparedStatement
- [ ] ResultSet
- [ ] Transaction
- [ ] Isolation level
- [ ] Connection pool
- [ ] Batch insert
- [ ] SQL injection prevention
- [ ] Mapping manuale
- [ ] Migrazione schema

### 23.2 Spring Boot
- [ ] Dependency injection
- [ ] Bean lifecycle
- [ ] Configuration properties
- [ ] REST controller
- [ ] Service layer
- [ ] Repository layer
- [ ] Validation
- [ ] Exception handler
- [ ] Actuator
- [ ] Profiles
- [ ] Testing Spring
- [ ] Virtual threads in Spring
- [ ] Observability Spring

### 23.3 Persistence
- [ ] JPA
- [ ] Hibernate
- [ ] Entity
- [ ] Value object
- [ ] Repository
- [ ] Lazy loading
- [ ] Eager loading
- [ ] N+1 query
- [ ] Transaction boundary
- [ ] Dirty checking
- [ ] Optimistic locking
- [ ] Pessimistic locking
- [ ] Projection
- [ ] DTO mapping

### 23.4 Microservizi
- [ ] REST API
- [ ] OpenAPI
- [ ] JSON serialization
- [ ] Validation
- [ ] Idempotency
- [ ] Retry
- [ ] Circuit breaker
- [ ] Rate limiting
- [ ] API versioning
- [ ] Distributed tracing
- [ ] Health check
- [ ] Readiness
- [ ] Liveness
- [ ] Graceful shutdown

### 23.5 Messaging
- [ ] Queue
- [ ] Topic
- [ ] Producer
- [ ] Consumer
- [ ] Consumer group
- [ ] Offset
- [ ] Acknowledgement
- [ ] Retry topic
- [ ] Dead letter queue
- [ ] Ordering
- [ ] Idempotent consumer
- [ ] Exactly-once semantics
- [ ] At-least-once semantics
- [ ] Backpressure

### 23.6 Container e cloud
- [ ] Dockerfile per Java
- [ ] Layered JAR
- [ ] JVM in container
- [ ] Memory limits
- [ ] CPU limits
- [ ] Startup time
- [ ] Image size
- [ ] Distroless image
- [ ] Alpine caveats
- [ ] Kubernetes deployment
- [ ] ConfigMap
- [ ] Secret
- [ ] Horizontal scaling
- [ ] Resource request
- [ ] Resource limit

---

## 24. Evoluzione Java per versione

### 24.1 Java 1.0
- [ ] Classi
- [ ] Oggetti
- [ ] Interfacce
- [ ] Package
- [ ] Exception
- [ ] Thread
- [ ] Applet
- [ ] AWT
- [ ] I/O base
- [ ] JVM
- [ ] Bytecode

### 24.2 Java 1.1
- [ ] Inner classes
- [ ] Reflection
- [ ] JDBC
- [ ] RMI
- [ ] JavaBeans
- [ ] Object serialization
- [ ] Event model
- [ ] Internationalization

### 24.3 Java 1.2
- [ ] Collections Framework
- [ ] Swing
- [ ] Java 2 platform
- [ ] `strictfp`
- [ ] JIT improvements
- [ ] Security policy
- [ ] Accessibility API

### 24.4 Java 1.3
- [ ] HotSpot JVM
- [ ] JNDI
- [ ] Dynamic proxy
- [ ] Java Sound
- [ ] RMI over IIOP
- [ ] Performance VM improvements

### 24.5 Java 1.4
- [ ] `assert`
- [ ] Regular expressions
- [ ] NIO
- [ ] Logging API
- [ ] Preferences API
- [ ] XML processing
- [ ] XSLT
- [ ] Exception chaining
- [ ] IPv6 support

### 24.6 Java 5
- [ ] Generics
- [ ] Enhanced for
- [ ] Autoboxing/unboxing
- [ ] Enum
- [ ] Annotations
- [ ] Varargs
- [ ] Static import
- [ ] `java.util.concurrent`
- [ ] Formatter
- [ ] Scanner
- [ ] Instrumentation API
- [ ] Metadata

### 24.7 Java 6
- [ ] Scripting API
- [ ] Compiler API
- [ ] Annotation processing
- [ ] JDBC 4.0
- [ ] Web services APIs
- [ ] Monitoring improvements
- [ ] Management improvements
- [ ] Desktop API
- [ ] Performance improvements

### 24.8 Java 7
- [ ] String in `switch`
- [ ] Try-with-resources
- [ ] Diamond operator
- [ ] Multi-catch
- [ ] Precise rethrow
- [ ] Binary literals
- [ ] Underscore in numeric literals
- [ ] Fork/Join Framework
- [ ] NIO.2
- [ ] `Path`
- [ ] `Files`
- [ ] WatchService
- [ ] `invokedynamic`

### 24.9 Java 8
- [ ] Lambda expressions
- [ ] Method references
- [ ] Functional interfaces
- [ ] Stream API
- [ ] Default methods
- [ ] Static methods in interfaces
- [ ] `Optional`
- [ ] `java.time`
- [ ] CompletableFuture
- [ ] Nashorn JavaScript engine
- [ ] Repeating annotations
- [ ] Type annotations
- [ ] Base64 API
- [ ] Parallel array sorting
- [ ] Compact profiles

### 24.10 Java 9
- [ ] Java Platform Module System
- [ ] `module-info.java`
- [ ] JShell
- [ ] Collection factory methods
- [ ] Private interface methods
- [ ] Multi-release JAR
- [ ] Process API improvements
- [ ] Stack-Walking API
- [ ] VarHandles
- [ ] Compact Strings
- [ ] G1 default GC
- [ ] Unified JVM logging
- [ ] HTTP/2 Client incubator
- [ ] Reactive Streams Flow API
- [ ] DRBG `SecureRandom`
- [ ] Serialization filtering
- [ ] `jlink`
- [ ] Runtime images

### 24.11 Java 10
- [ ] Local-variable type inference `var`
- [ ] Time-based release versioning
- [ ] Application Class-Data Sharing
- [ ] Parallel Full GC for G1
- [ ] Garbage-Collector Interface
- [ ] Thread-local handshakes
- [ ] Heap allocation on alternative memory devices
- [ ] Root certificates
- [ ] Experimental Java-Based JIT Compiler

### 24.12 Java 11
- [ ] HTTP Client standard
- [ ] Single-file source-code launcher
- [ ] `var` in lambda parameters
- [ ] Flight Recorder
- [ ] Epsilon GC
- [ ] ZGC experimental
- [ ] TLS 1.3
- [ ] ChaCha20 and Poly1305
- [ ] Unicode 10
- [ ] Dynamic class-file constants
- [ ] Nest-based access control
- [ ] Removal of Java EE modules
- [ ] Removal of CORBA modules
- [ ] Deprecation of Nashorn
- [ ] Deprecation of Pack200

### 24.13 Java 12
- [ ] Switch expressions preview
- [ ] JVM Constants API
- [ ] Shenandoah experimental
- [ ] Abortable mixed collections for G1
- [ ] Promptly return unused committed memory from G1
- [ ] Default CDS archives
- [ ] Microbenchmark suite
- [ ] One AArch64 port

### 24.14 Java 13
- [ ] Text Blocks preview
- [ ] Switch expressions second preview
- [ ] Dynamic CDS archives
- [ ] ZGC uncommit unused memory
- [ ] Reimplementation of legacy Socket API
- [ ] FileSystems new file system methods

### 24.15 Java 14
- [ ] Switch expressions standard
- [ ] Records preview
- [ ] Pattern matching for `instanceof` preview
- [ ] Helpful NullPointerExceptions
- [ ] JFR Event Streaming
- [ ] Packaging tool incubator
- [ ] NUMA-aware memory allocation for G1
- [ ] Non-volatile mapped byte buffers
- [ ] Removal of CMS GC
- [ ] Removal of Pack200
- [ ] ZGC on macOS
- [ ] ZGC on Windows

### 24.16 Java 15
- [ ] Text Blocks standard
- [ ] Sealed Classes preview
- [ ] Hidden Classes
- [ ] ZGC production
- [ ] Shenandoah production
- [ ] Records second preview
- [ ] Pattern matching for `instanceof` second preview
- [ ] Foreign-Memory Access API second incubator
- [ ] EdDSA
- [ ] Reimplementation of DatagramSocket API
- [ ] Disable biased locking
- [ ] Removal of Nashorn
- [ ] Removal of rmic

### 24.17 Java 16
- [ ] Records standard
- [ ] Pattern matching for `instanceof` standard
- [ ] `jpackage` standard
- [ ] Vector API incubator
- [ ] Foreign Linker API incubator
- [ ] Foreign-Memory Access API third incubator
- [ ] Unix-domain socket channels
- [ ] Elastic Metaspace
- [ ] Strong encapsulation by default
- [ ] Warnings for value-based classes
- [ ] Alpine Linux port
- [ ] Windows/AArch64 port

### 24.18 Java 17
- [ ] Sealed Classes standard
- [ ] Pattern matching for `switch` preview
- [ ] Strongly encapsulate JDK internals
- [ ] Context-specific deserialization filters
- [ ] Enhanced pseudo-random number generators
- [ ] Foreign Function & Memory API incubator
- [ ] Vector API second incubator
- [ ] Deprecate Security Manager for removal
- [ ] Removal of RMI Activation
- [ ] Removal of experimental AOT and JIT compiler
- [ ] macOS/AArch64 port

### 24.19 Java 18
- [ ] UTF-8 by default
- [ ] Simple Web Server
- [ ] Code snippets in Java API documentation
- [ ] Core reflection reimplemented with MethodHandles
- [ ] Internet-Address Resolution SPI
- [ ] Pattern matching for `switch` second preview
- [ ] Vector API third incubator
- [ ] Foreign Function & Memory API second incubator
- [ ] Deprecate finalization for removal

### 24.20 Java 19
- [ ] Virtual Threads preview
- [ ] Structured Concurrency incubator
- [ ] Record Patterns preview
- [ ] Pattern matching for `switch` third preview
- [ ] Foreign Function & Memory API preview
- [ ] Vector API fourth incubator
- [ ] Linux/RISC-V port

### 24.21 Java 20
- [ ] Virtual Threads second preview
- [ ] Scoped Values incubator
- [ ] Structured Concurrency second incubator
- [ ] Record Patterns second preview
- [ ] Pattern matching for `switch` fourth preview
- [ ] Foreign Function & Memory API second preview
- [ ] Vector API fifth incubator

### 24.22 Java 21
- [ ] Virtual Threads standard
- [ ] Sequenced Collections
- [ ] Record Patterns standard
- [ ] Pattern Matching for `switch` standard
- [ ] Generational ZGC
- [ ] String Templates preview
- [ ] Unnamed Patterns and Variables preview
- [ ] Unnamed Classes and Instance Main Methods preview
- [ ] Scoped Values preview
- [ ] Structured Concurrency preview
- [ ] Key Encapsulation Mechanism API
- [ ] Foreign Function & Memory API third preview
- [ ] Vector API sixth incubator

### 24.23 Java 22
- [ ] Foreign Function & Memory API standard
- [ ] Unnamed Variables and Patterns standard
- [ ] Launch multi-file source-code programs
- [ ] Class-File API preview
- [ ] Stream Gatherers preview
- [ ] Structured Concurrency second preview
- [ ] Scoped Values second preview
- [ ] Statements before `super(...)` preview
- [ ] Vector API seventh incubator
- [ ] Region pinning for G1

### 24.24 Java 23
- [ ] Markdown documentation comments
- [ ] Primitive types in patterns preview
- [ ] Class-File API second preview
- [ ] Stream Gatherers second preview
- [ ] Module Import Declarations preview
- [ ] Structured Concurrency third preview
- [ ] Scoped Values third preview
- [ ] Flexible Constructor Bodies second preview
- [ ] Vector API eighth incubator
- [ ] ZGC generational mode by default
- [ ] Deprecate memory-access methods in `Unsafe` for removal

### 24.25 Java 24
- [ ] Stream Gatherers standard
- [ ] Class-File API standard
- [ ] Synchronize Virtual Threads without Pinning
- [ ] AOT Class Loading and Linking
- [ ] Compact Object Headers experimental
- [ ] KDF API preview
- [ ] ML-KEM
- [ ] ML-DSA
- [ ] Scoped Values fourth preview
- [ ] Structured Concurrency fourth preview
- [ ] Simple Source Files and Instance Main Methods fourth preview
- [ ] Module Import Declarations second preview
- [ ] Flexible Constructor Bodies third preview
- [ ] Primitive Types in Patterns second preview
- [ ] Vector API ninth incubator
- [ ] Warn upon use of memory-access methods in `Unsafe`
- [ ] Security Manager disabled
- [ ] Remove non-generational ZGC mode

### 24.26 Java 25
- [ ] Scoped Values standard
- [ ] Compact Source Files and Instance Main Methods standard
- [ ] Module Import Declarations standard
- [ ] Flexible Constructor Bodies standard
- [ ] Stable Values preview
- [ ] Compact Object Headers
- [ ] JFR Cooperative Sampling
- [ ] Structured Concurrency fifth preview
- [ ] Primitive Types in Patterns third preview
- [ ] Vector API tenth incubator
- [ ] Ahead-of-Time Method Profiling
- [ ] Key Derivation Function API

### 24.27 Java 26
- [ ] JEP 500 — Prepare to Make Final Mean Final
- [ ] JEP 504 — Remove the Applet API
- [ ] JEP 516 — Ahead-of-Time Object Caching with Any GC
- [ ] JEP 517 — HTTP/3 for the HTTP Client
- [ ] JEP 522 — G1 GC: Improve Throughput by Reducing Synchronization
- [ ] JEP 524 — PEM Encodings of Cryptographic Objects
- [ ] JEP 525 — Structured Concurrency
- [ ] JEP 526 — Lazy Constants
- [ ] JEP 529 — Vector API
- [ ] JEP 530 — Primitive Types in Patterns, `instanceof`, and `switch`

---

## 25. Percorso di studio progressivo

### 25.1 Fase 1 — Java base
- [ ] Setup JDK
- [ ] Sintassi base
- [ ] Tipi primitivi
- [ ] Stringhe
- [ ] Array
- [ ] Controllo di flusso
- [ ] Classi
- [ ] Oggetti
- [ ] Metodi
- [ ] Package
- [ ] Access modifier
- [ ] Exception base

### 25.2 Fase 2 — Java Core
- [ ] OOP avanzata
- [ ] Collections
- [ ] Generics
- [ ] Exception handling avanzato
- [ ] I/O
- [ ] NIO
- [ ] Date/time
- [ ] BigDecimal
- [ ] Enum
- [ ] Immutabilità
- [ ] Testing base

### 25.3 Fase 3 — Java 8
- [ ] Lambda
- [ ] Functional interface
- [ ] Method reference
- [ ] Stream API
- [ ] Optional
- [ ] Collector
- [ ] CompletableFuture base
- [ ] Default methods
- [ ] `java.time`

### 25.4 Fase 4 — Java 9-17
- [ ] Module system
- [ ] JShell
- [ ] Collection factory methods
- [ ] `var`
- [ ] HTTP Client
- [ ] Text Blocks
- [ ] Switch expressions
- [ ] Records
- [ ] Pattern matching `instanceof`
- [ ] Sealed classes
- [ ] JFR
- [ ] Strong encapsulation

### 25.5 Fase 5 — Java 18-21
- [ ] UTF-8 by default
- [ ] Simple Web Server
- [ ] Virtual Threads
- [ ] Sequenced Collections
- [ ] Record Patterns
- [ ] Pattern Matching for `switch`
- [ ] Generational ZGC
- [ ] Scoped Values preview
- [ ] Structured Concurrency preview
- [ ] KEM API

### 25.6 Fase 6 — Java 22-26
- [ ] Foreign Function & Memory API
- [ ] Class-File API
- [ ] Stream Gatherers
- [ ] Scoped Values
- [ ] Structured Concurrency
- [ ] Compact Source Files
- [ ] Instance Main Methods
- [ ] Module Import Declarations
- [ ] Flexible Constructor Bodies
- [ ] Stable Values
- [ ] Compact Object Headers
- [ ] AOT Class Loading
- [ ] AOT Object Caching
- [ ] HTTP/3
- [ ] PEM API
- [ ] Lazy Constants
- [ ] Vector API
- [ ] Primitive Types in Patterns
- [ ] Final field restrictions

### 25.7 Fase 7 — JVM e performance
- [ ] Bytecode
- [ ] Class loading
- [ ] JIT
- [ ] Heap
- [ ] Stack
- [ ] Metaspace
- [ ] GC
- [ ] GC logs
- [ ] JFR
- [ ] Profiling
- [ ] Benchmarking
- [ ] Thread dump
- [ ] Heap dump
- [ ] Memory leak analysis

### 25.8 Fase 8 — Enterprise Java
- [ ] Maven/Gradle avanzato
- [ ] JDBC
- [ ] Spring Boot
- [ ] JPA/Hibernate
- [ ] REST API
- [ ] Microservizi
- [ ] Messaging
- [ ] Testing integration
- [ ] Observability
- [ ] Docker
- [ ] Kubernetes
- [ ] Performance in container

