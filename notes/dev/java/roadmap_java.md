---
layout: page
---
# Java Roadmap - Basics -> Advanced -> Java 26

## 1. Development Environment and Tools

### 1.1 JDK Installation and Management
- [ ] JDK
- [ ] JRE
- [ ] JVM
- [ ] `JAVA_HOME`
- [ ] `PATH`
- [ ] SDKMAN
- [ ] jEnv

### 1.2 Basic JDK Tools
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

### 1.3 Local Environment
- [ ] Project SDK configuration
- [ ] Compiler level configuration
- [ ] Language level configuration
- [ ] Run configuration
- [ ] Debug configuration
- [ ] Formatter
- [ ] Import optimization
- [ ] Code inspection

### 1.4 Build Tools
- [ ] Maven
- [ ] Project structure
- [ ] Dependency management
- [ ] Plugins
- [ ] Lifecycle
- [ ] Build profiles
- [ ] Multi-module project
- [ ] Maven/Gradle wrapper
- [ ] Local/remote repositories
- [ ] Maven BOM
- [ ] Dependency scope

### 1.5 Java Project Structure
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

## 2. Language Fundamentals

### 2.1 Basic Syntax
- [ ] Class
- [ ] Method
- [ ] `main` method
- [ ] Package declaration
- [ ] Import
- [ ] Statement
- [ ] Expression
- [ ] Block
- [ ] Comments
- [ ] Naming conventions
- [ ] Scope
- [ ] Variable lifetime

### 2.2 Primitive Types
- [ ] `byte`
- [ ] `short`
- [ ] `int`
- [ ] `long`
- [ ] `float`
- [ ] `double`
- [ ] `char`
- [ ] `boolean`
- [ ] Numeric literals
- [ ] Binary literal
- [ ] Underscores in numeric literals
- [ ] Overflow
- [ ] Underflow
- [ ] Implicit cast
- [ ] Explicit cast
- [ ] Numeric promotion
- [ ] Arithmetic operations

### 2.3 Wrapper Types
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
- [ ] Wrapper cache
- [ ] `==` on wrappers
- [ ] `.equals()` on wrappers
- [ ] Null pointer with unboxing

### 2.4 Variables and Constants
- [ ] Local variables
- [ ] Instance fields
- [ ] Static fields
- [ ] Constants
- [ ] `final`
- [ ] `static final`
- [ ] Initialization
- [ ] Shadowing
- [ ] Local `var`
- [ ] Local type inference

### 2.5 Operators
- [ ] Arithmetic
- [ ] Assignment
- [ ] Comparison
- [ ] Logical
- [ ] Bitwise
- [ ] Shift
- [ ] Ternary
- [ ] Increment/decrement
- [ ] Operator precedence
- [ ] Short-circuit
- [ ] `instanceof`

### 2.6 Control Flow
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

### 2.7 Arrays
- [ ] One-dimensional array
- [ ] Multidimensional array
- [ ] Array jagged
- [ ] Array initialization
- [ ] Index access
- [ ] `ArrayIndexOutOfBoundsException`
- [ ] Array of primitives
- [ ] Array of objects
- [ ] Array copy
- [ ] `Arrays`
- [ ] `System.arraycopy`

### 2.8 Strings
- [ ] `String`
- [ ] Immutability
- [ ] String pool
- [ ] Concatenation
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

## 3. Object-Oriented Programming

### 3.1 Classes and Objects
- [ ] Class
- [ ] Object
- [ ] Instance
- [ ] State
- [ ] Behavior
- [ ] Constructor
- [ ] Default constructor
- [ ] Constructor overloading
- [ ] Initializer block
- [ ] Static initializer block
- [ ] `this`
- [ ] Object references
- [ ] Mutability
- [ ] Object identity

### 3.2 Encapsulation
- [ ] Private fields
- [ ] Public methods
- [ ] Getter
- [ ] Setter
- [ ] Domain methods
- [ ] Invariants
- [ ] Constructor validation
- [ ] Defensive immutability
- [ ] Defensive copy
- [ ] Information hiding

### 3.3 Access Modifiers
- [ ] `public`
- [ ] `private`
- [ ] `protected`
- [ ] Package-private
- [ ] Visibility across packages
- [ ] Visibility in inheritance
- [ ] Public API
- [ ] Internal details
- [ ] Encapsulation boundary

### 3.4 Inheritance
- [ ] `extends`
- [ ] Superclass
- [ ] Subclass
- [ ] `super`
- [ ] Override
- [ ] Overload
- [ ] Polymorphism
- [ ] Dynamic dispatch
- [ ] Upcasting
- [ ] Downcasting
- [ ] `final class`
- [ ] `final method`
- [ ] Fragile base class problem
- [ ] Composition as an alternative

### 3.5 Abstract Classes
- [ ] `abstract class`
- [ ] Abstract method
- [ ] Concrete method
- [ ] Constructor in abstract class
- [ ] Template method
- [ ] Shared state
- [ ] Difference from interface

### 3.6 Interfaces
- [ ] `interface`
- [ ] Implementation
- [ ] Contract
- [ ] Abstract methods
- [ ] Default methods
- [ ] Static methods
- [ ] Private methods
- [ ] Constants in interfaces
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
- [ ] `equals` contract
- [ ] `hashCode` contract
- [ ] Hash collision
- [ ] Objects as keys in `HashMap`
- [ ] Mutability and hash code

### 3.8 Nested Classes
- [ ] Static nested class
- [ ] Inner class
- [ ] Local class
- [ ] Anonymous class
- [ ] Access to outer context
- [ ] Coupling cost
- [ ] Use with listeners
- [ ] Use with builders

### 3.9 Enum
- [ ] `enum`
- [ ] Enum constants
- [ ] Fields in enums
- [ ] Constructors in enums
- [ ] Methods in enums
- [ ] Per-constant override
- [ ] `values`
- [ ] `valueOf`
- [ ] `EnumSet`
- [ ] `EnumMap`
- [ ] Enums as state machines

---

## 4. Domain Modeling

### 4.1 Modeling Principles
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

### 4.2 Immutability
- [ ] Immutable class
- [ ] `final` field
- [ ] Unmodifiable state
- [ ] Copy constructor
- [ ] Defensive copy
- [ ] Immutable collections
- [ ] Thread safety through immutability
- [ ] Value-based class
- [ ] Records as value carriers

### 4.3 Record
- [ ] `record`
- [ ] Record components
- [ ] Canonical constructor
- [ ] Compact constructor
- [ ] Record validation
- [ ] Methods in records
- [ ] Static fields in records
- [ ] Nested records
- [ ] Records as DTOs
- [ ] Records as value objects
- [ ] Limitations with JPA
- [ ] Limitations with reflection-based frameworks

### 4.4 Sealed Types
- [ ] `sealed class`
- [ ] `sealed interface`
- [ ] `permits`
- [ ] `final`
- [ ] `non-sealed`
- [ ] `sealed` + `record`
- [ ] Closed hierarchies
- [ ] Domain states
- [ ] Domain errors
- [ ] Exhaustiveness checking
- [ ] Algebraic modeling

### 4.5 Pattern Matching for the Domain
- [ ] Pattern matching with `instanceof`
- [ ] Pattern matching in `switch`
- [ ] Record patterns
- [ ] Guarded patterns
- [ ] Exhaustive switch
- [ ] Null handling in switch
- [ ] Sealed domain + `switch`
- [ ] Primitive patterns
- [ ] Deconstruction pattern

---

## 5. Exception Handling

### 5.1 Fundamentals
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

### 5.2 Modern Handling
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
- [ ] Exception-to-response mapping

### 5.3 Strategies
- [ ] Fail fast
- [ ] Fail safe
- [ ] Recoverable errors
- [ ] Unrecoverable errors
- [ ] Exception logging
- [ ] Do not swallow exceptions
- [ ] Boundary exception handling
- [ ] Global exception handling
- [ ] Exception in async code
- [ ] Exception in stream pipeline

---

## 6. Collections Framework

### 6.1 Main Interfaces
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

### 6.2 `List` Implementations
- [ ] `ArrayList`
- [ ] `LinkedList`
- [ ] `Vector`
- [ ] `Stack`
- [ ] Random access
- [ ] Insertion
- [ ] Removal
- [ ] Iteration
- [ ] Big-O complexity
- [ ] Implementation choice

### 6.3 `Set` Implementations
- [ ] `HashSet`
- [ ] `LinkedHashSet`
- [ ] `TreeSet`
- [ ] `EnumSet`
- [ ] Uniqueness
- [ ] Natural ordering
- [ ] Custom ordering
- [ ] Hashing
- [ ] Collision
- [ ] Element mutability

### 6.4 `Map` Implementations
- [ ] `HashMap`
- [ ] `LinkedHashMap`
- [ ] `TreeMap`
- [ ] `EnumMap`
- [ ] `WeakHashMap`
- [ ] `IdentityHashMap`
- [ ] `ConcurrentHashMap`
- [ ] Keys
- [ ] Values
- [ ] Entry
- [ ] Hashing
- [ ] Ordering
- [ ] Null key
- [ ] Null value
- [ ] Key mutability

### 6.5 Queues and Deques
- [ ] `ArrayDeque`
- [ ] `PriorityQueue`
- [ ] `BlockingQueue`
- [ ] FIFO
- [ ] LIFO
- [ ] Priority ordering
- [ ] Producer/consumer
- [ ] Bounded queue
- [ ] Unbounded queue

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
- [ ] Migration from legacy workarounds

---

## 7. Generics and the Type System

### 7.1 Basic Generics
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

### 7.2 Bounds
- [ ] Upper bound
- [ ] Multiple bound
- [ ] Recursive bound
- [ ] F-bounded polymorphism
- [ ] Method bounds
- [ ] Class bounds
- [ ] Bounds with interfaces

### 7.3 Wildcards
- [ ] Unbounded wildcard
- [ ] Upper bounded wildcard
- [ ] Lower bounded wildcard
- [ ] Capture conversion
- [ ] PECS
- [ ] Producer extends
- [ ] Consumer super
- [ ] API design with wildcards

### 7.4 Type erasure
- [ ] Erasure
- [ ] Bridge method
- [ ] Reifiable type
- [ ] Non-reifiable type
- [ ] Heap pollution
- [ ] Generic array creation
- [ ] Varargs generics
- [ ] `@SafeVarargs`
- [ ] Runtime limitations

### 7.5 Advanced Generics
- [ ] Generic builder
- [ ] Generic repository
- [ ] Generic mapper
- [ ] Type token
- [ ] Super type token
- [ ] Generic constraints
- [ ] Covariance
- [ ] Contravariance
- [ ] Invariance

---

## 8. I/O, NIO, and File Systems

### 8.1 Classic I/O
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

### 8.3 Channels and Buffers
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

### 8.4 File System Watch and Monitoring
- [ ] `WatchService`
- [ ] File create event
- [ ] File modify event
- [ ] File delete event
- [ ] Directory monitoring
- [ ] Overflow event
- [ ] Cross-platform behavior

### 8.5 Data Serialization
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

## 9. Date, Time, Numbers, and Localization

### 9.1 Modern Date/Time
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
- [ ] Date parsing
- [ ] Date formatting
- [ ] Timezone
- [ ] DST
- [ ] Technical timestamp
- [ ] Business date

### 9.2 Legacy Date/Time
- [ ] `Date`
- [ ] `Calendar`
- [ ] `GregorianCalendar`
- [ ] `SimpleDateFormat`
- [ ] Thread-safety legacy formatter
- [ ] Migration to `java.time`

### 9.3 Numbers
- [ ] `BigDecimal`
- [ ] `BigInteger`
- [ ] Precision
- [ ] Scale
- [ ] Rounding mode
- [ ] `MathContext`
- [ ] `BigDecimal` comparison
- [ ] `equals` vs `compareTo`
- [ ] Money calculation
- [ ] Percentages
- [ ] Rates
- [ ] Numeric overflow

### 9.4 Localization
- [ ] `Locale`
- [ ] `Currency`
- [ ] `NumberFormat`
- [ ] `DecimalFormat`
- [ ] `MessageFormat`
- [ ] `ResourceBundle`
- [ ] Pluralization
- [ ] Country-specific formats
- [ ] Currency formats
- [ ] Percentage formats

---

## 10. Functional Java

### 10.1 Lambdas
- [ ] Lambda expression
- [ ] Lambda parameters
- [ ] Body expression
- [ ] Body block
- [ ] Variable capture
- [ ] Effectively final
- [ ] Target type
- [ ] Lambda vs anonymous class
- [ ] Lambdas and checked exceptions

### 10.2 Functional Interfaces
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

### 10.3 Method References
- [ ] Static method reference
- [ ] Instance method reference
- [ ] Constructor reference
- [ ] Bound receiver
- [ ] Unbound receiver
- [ ] Overload ambiguity

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

### 10.5 Collectors
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
- [ ] Anti-pattern: Optional field
- [ ] Anti-pattern: Optional parameter
- [ ] Optional as return type

### 10.7 Practical Functional Programming
- [ ] Pure function
- [ ] Side effect
- [ ] Referential transparency
- [ ] Function composition
- [ ] Pipeline
- [ ] Declarative style
- [ ] Imperative style
- [ ] Immutability
- [ ] Parallel streams
- [ ] Stream limitations
- [ ] Stream pipeline debugging

### 10.8 Stream Gatherers
- [ ] Gatherer
- [ ] Stateful transformation
- [ ] Windowing
- [ ] Batching
- [ ] Sliding window
- [ ] Custom pipeline
- [ ] Gatherer lifecycle
- [ ] Parallel compatibility
- [ ] Practical use cases
- [ ] Alternatives with collectors

---

## 11. Java Modules and Packaging

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
- [ ] Migration from classpath
- [ ] Legacy dependencies
- [ ] Automatic module name
- [ ] Multi-release JAR
- [ ] ServiceLoader
- [ ] Reflection with modules
- [ ] Frameworks and modules

### 11.3 Runtime Images
- [ ] `jlink`
- [ ] Custom runtime image
- [ ] Required modules
- [ ] Runtime size reduction
- [ ] Startup
- [ ] Container image
- [ ] App distribution
- [ ] `jpackage`

---

## 12. Classic Concurrency

### 12.1 Basic Threads
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
- [ ] Thread-safe immutability

### 12.3 Synchronization
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

### 12.5 Advanced Locks and Atomics
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
- [ ] Custom executor
- [ ] Error propagation
- [ ] Composition vs nesting

---

## 13. Modern Concurrency: Project Loom

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
- [ ] Thread dumps with virtual threads
- [ ] CPU-bound limitations
- [ ] Limitations with native locks

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
- [ ] Concurrency as a structured unit
- [ ] Structured error handling

### 13.3 Scoped Values
- [ ] Scoped value
- [ ] Immutable context
- [ ] Controlled propagation
- [ ] Alternative to `ThreadLocal`
- [ ] Use with virtual threads
- [ ] Bound scope
- [ ] Nested scope
- [ ] Request context
- [ ] Security context
- [ ] Tracing context

### 13.4 Enterprise Migration
- [ ] Virtual threads in web services
- [ ] Virtual threads with JDBC
- [ ] Virtual threads with HTTP client
- [ ] Virtual threads with Spring Boot
- [ ] ThreadLocal legacy
- [ ] Pool sizing
- [ ] Connection pool
- [ ] Backpressure
- [ ] Rate limiting
- [ ] Observability
- [ ] Load test

---

## 14. Networking and HTTP

### 14.1 Networking Basics
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

### 14.3 Client Resilience
- [ ] Retry
- [ ] Exponential backoff
- [ ] Timeout budget
- [ ] Circuit breaker
- [ ] Bulkhead
- [ ] Rate limiter
- [ ] Idempotency
- [ ] Correlation ID
- [ ] Request tracing
- [ ] Metrics
- [ ] Logging request/response
- [ ] Sensitive data redaction

---

## 15. Security and Cryptography

### 15.1 Security Fundamentals
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
- [ ] Security Manager deprecation
- [ ] Security Manager disabling
- [ ] Removal of legacy APIs
- [ ] Strong encapsulation
- [ ] Restrictions on `final` field reflection
- [ ] Deprecation of `Unsafe`
- [ ] Migration from internal JDK APIs

---

## 16. Reflection, Annotations, and Metaprogramming

### 16.1 Reflection
- [ ] `Class`
- [ ] `Field`
- [ ] `Method`
- [ ] `Constructor`
- [ ] `getDeclaredFields`
- [ ] `getDeclaredMethods`
- [ ] `setAccessible`
- [ ] Private access
- [ ] Reflection performance
- [ ] Reflection and modules
- [ ] Reflection and `final`
- [ ] Reflection and frameworks
- [ ] Reflection and security

### 16.2 Annotations
- [ ] Custom annotations
- [ ] `@Target`
- [ ] `@Retention`
- [ ] `@Inherited`
- [ ] `@Repeatable`
- [ ] Runtime annotation
- [ ] Source annotation
- [ ] Class annotation
- [ ] Annotations on type use
- [ ] Annotation processing
- [ ] Compile-time code generation

### 16.3 Dynamic proxy
- [ ] `Proxy`
- [ ] `InvocationHandler`
- [ ] Interface proxy
- [ ] AOP
- [ ] Logging proxy
- [ ] Transaction proxy
- [ ] JDK proxy limitations
- [ ] Proxy vs bytecode generation

### 16.4 MethodHandles and VarHandles
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
- [ ] Class file parsing
- [ ] Class file generation
- [ ] Class file transformation
- [ ] Tooling
- [ ] Framework integration

---

## 17. JVM internals

### 17.1 JVM Architecture
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

### 17.2 Memory
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

### 17.3 JIT and Optimization
- [ ] Interpreter
- [ ] C1 compiler
- [ ] C2 compiler
- [ ] Tiered compilation
- [ ] Runtime profiling
- [ ] Inlining
- [ ] Deoptimization
- [ ] Loop optimization
- [ ] Lock elimination
- [ ] Dead code elimination
- [ ] Intrinsics
- [ ] Warmup
- [ ] Benchmark pitfalls

### 17.4 Class Loading and Startup
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

### 17.5 Runtime Observability
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

## 18. Garbage Collection and Performance

### 18.1 GC Fundamentals
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

## 19. Foreign Function, Memory, and Native Interop

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

### 19.3 Off-Heap and Performance
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

## 20. Vector API and High-Performance Computing

### 20.1 SIMD
- [ ] SIMD
- [ ] Scalar operation
- [ ] Vector operation
- [ ] CPU vector register
- [ ] Lane
- [ ] Species
- [ ] Portability
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
- [ ] Numeric use cases
- [ ] AI/ML use cases
- [ ] Crypto use cases
- [ ] Image processing use cases

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

## 22. Logging, Monitoring, and Observability

### 22.1 Logging
- [ ] `java.util.logging`
- [ ] SLF4J
- [ ] Logback
- [ ] Log4j2
- [ ] Log level
- [ ] Structured logging
- [ ] MDC
- [ ] Correlation ID
- [ ] Sensitive data redaction
- [ ] Async logging
- [ ] Log rotation

### 22.2 Metrics
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

## 23. Enterprise Java and Microservices

### 23.1 JDBC and Databases
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
- [ ] Manual mapping
- [ ] Schema migration

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

### 23.4 Microservices
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

### 23.6 Containers and Cloud
- [ ] Dockerfile for Java
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

## 24. Java Evolution by Version

### 24.1 Java 1.0
- [ ] Classes
- [ ] Objects
- [ ] Interfaces
- [ ] Package
- [ ] Exception
- [ ] Thread
- [ ] Applet
- [ ] AWT
- [ ] Basic I/O
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
- [ ] JEP 500 - Prepare to Make Final Mean Final
- [ ] JEP 504 - Remove the Applet API
- [ ] JEP 516 - Ahead-of-Time Object Caching with Any GC
- [ ] JEP 517 - HTTP/3 for the HTTP Client
- [ ] JEP 522 - G1 GC: Improve Throughput by Reducing Synchronization
- [ ] JEP 524 - PEM Encodings of Cryptographic Objects
- [ ] JEP 525 - Structured Concurrency
- [ ] JEP 526 - Lazy Constants
- [ ] JEP 529 - Vector API
- [ ] JEP 530 - Primitive Types in Patterns, `instanceof`, and `switch`

---

## 25. Progressive Study Path

### 25.1 Phase 1 - Basic Java
- [ ] Setup JDK
- [ ] Basic syntax
- [ ] Primitive types
- [ ] Strings
- [ ] Array
- [ ] Control flow
- [ ] Classes
- [ ] Objects
- [ ] Methods
- [ ] Package
- [ ] Access modifier
- [ ] Basic exceptions

### 25.2 Phase 2 - Java Core
- [ ] Advanced OOP
- [ ] Collections
- [ ] Generics
- [ ] Advanced exception handling
- [ ] I/O
- [ ] NIO
- [ ] Date/time
- [ ] BigDecimal
- [ ] Enum
- [ ] Immutability
- [ ] Basic testing

### 25.3 Phase 3 - Java 8
- [ ] Lambda
- [ ] Functional interface
- [ ] Method reference
- [ ] Stream API
- [ ] Optional
- [ ] Collector
- [ ] Basic CompletableFuture
- [ ] Default methods
- [ ] `java.time`

### 25.4 Phase 4 - Java 9-17
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

### 25.5 Phase 5 - Java 18-21
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

### 25.6 Phase 6 - Java 22-26
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

### 25.7 Phase 7 - JVM and Performance
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

### 25.8 Phase 8 - Enterprise Java
- [ ] Advanced Maven/Gradle
- [ ] JDBC
- [ ] Spring Boot
- [ ] JPA/Hibernate
- [ ] REST API
- [ ] Microservices
- [ ] Messaging
- [ ] Integration testing
- [ ] Observability
- [ ] Docker
- [ ] Kubernetes
- [ ] Performance in containers

