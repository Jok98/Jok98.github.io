---
layout: page
---
# Spring & Spring Boot Roadmap - Basics -> Advanced

## 1. Technical Prerequisites

### 1.1 Required Java
- [ ] Java Core
- [ ] OOP
- [ ] Generics
- [ ] Collections
- [ ] Stream API
- [ ] Optional
- [ ] Exception handling
- [ ] Basic concurrency
- [ ] Virtual threads
- [ ] Reflection
- [ ] Annotations
- [ ] Records
- [ ] Sealed classes
- [ ] Pattern matching
- [ ] Maven
- [ ] Gradle
- [ ] JUnit

### 1.2 Web and HTTP
- [ ] HTTP request
- [ ] HTTP response
- [ ] HTTP method
- [ ] HTTP status code
- [ ] Header
- [ ] Query parameter
- [ ] Path variable
- [ ] Body
- [ ] JSON
- [ ] XML
- [ ] REST
- [ ] Idempotency
- [ ] Caching HTTP
- [ ] Content negotiation
- [ ] CORS
- [ ] Cookie
- [ ] Session
- [ ] TLS
- [ ] Proxy
- [ ] Reverse proxy

### 1.3 Database
- [ ] SQL
- [ ] JDBC
- [ ] Transaction
- [ ] Isolation level
- [ ] Index
- [ ] Join
- [ ] Constraint
- [ ] Migration
- [ ] Connection pool
- [ ] ORM
- [ ] JPA
- [ ] Hibernate
- [ ] R2DBC
- [ ] NoSQL
- [ ] Redis
- [ ] MongoDB

### 1.4 Application Architecture
- [ ] Layered architecture
- [ ] Hexagonal architecture
- [ ] Clean architecture
- [ ] Basic domain-driven design
- [ ] Dependency inversion
- [ ] DTO
- [ ] Mapper
- [ ] Repository
- [ ] Service
- [ ] Controller
- [ ] Use case
- [ ] Boundary
- [ ] Adapter
- [ ] Configuration
- [ ] Cross-cutting concern

---

## 2. Spring Ecosystem

### 2.1 Spring Framework
- [ ] Core Container
- [ ] Beans
- [ ] Context
- [ ] Expression Language
- [ ] AOP
- [ ] Data Access
- [ ] Transaction Management
- [ ] Spring MVC
- [ ] Spring WebFlux
- [ ] Validation
- [ ] Integration
- [ ] Testing
- [ ] Observability
- [ ] AOT
- [ ] Native support

### 2.2 Spring Boot
- [ ] Auto-configuration
- [ ] Starter dependencies
- [ ] Embedded server
- [ ] Externalized configuration
- [ ] Profiles
- [ ] Actuator
- [ ] DevTools
- [ ] Production-ready features
- [ ] Dependency management
- [ ] Build plugins
- [ ] Docker Compose integration
- [ ] Service connections
- [ ] Native image
- [ ] AOT processing
- [ ] Modularized starters
- [ ] Spring Boot 4.x structure

### 2.3 Spring Data
- [ ] Spring Data Commons
- [ ] Spring Data JPA
- [ ] Spring Data JDBC
- [ ] Spring Data R2DBC
- [ ] Spring Data MongoDB
- [ ] Spring Data Redis
- [ ] Spring Data Elasticsearch
- [ ] Repository abstraction
- [ ] Query derivation
- [ ] Pagination
- [ ] Sorting
- [ ] Auditing
- [ ] Projections
- [ ] Specifications

### 2.4 Spring Security
- [ ] Authentication
- [ ] Authorization
- [ ] Security filter chain
- [ ] Password encoding
- [ ] Session security
- [ ] CSRF
- [ ] CORS
- [ ] OAuth2 Login
- [ ] OAuth2 Client
- [ ] OAuth2 Resource Server
- [ ] JWT
- [ ] OIDC
- [ ] Method Security
- [ ] Authorization Server
- [ ] Security testing

### 2.5 Spring Cloud
- [ ] Config Server
- [ ] Service discovery
- [ ] Gateway
- [ ] LoadBalancer
- [ ] OpenFeign
- [ ] CircuitBreaker
- [ ] Retry
- [ ] Stream
- [ ] Bus
- [ ] Kubernetes support
- [ ] Contract testing
- [ ] Distributed tracing
- [ ] Cloud-native configuration

### 2.6 Spring Integration
- [ ] Message
- [ ] Channel
- [ ] Endpoint
- [ ] Gateway
- [ ] Transformer
- [ ] Router
- [ ] Splitter
- [ ] Aggregator
- [ ] Service Activator
- [ ] Adapter
- [ ] Poller
- [ ] Error channel
- [ ] Integration flow

### 2.7 Spring Batch
- [ ] Job
- [ ] Step
- [ ] JobRepository
- [ ] JobLauncher
- [ ] ItemReader
- [ ] ItemProcessor
- [ ] ItemWriter
- [ ] Chunk processing
- [ ] Tasklet
- [ ] Restartability
- [ ] Skip
- [ ] Retry
- [ ] Partitioning
- [ ] Remote chunking

### 2.8 Spring for GraphQL
- [ ] Schema
- [ ] Query
- [ ] Mutation
- [ ] Subscription
- [ ] Controller
- [ ] DataFetcher
- [ ] DataLoader
- [ ] Error handling
- [ ] Security
- [ ] Testing
- [ ] Pagination
- [ ] Federation basics

### 2.9 Spring Modulith
- [ ] Application modules
- [ ] Module boundaries
- [ ] Published events
- [ ] Event publication registry
- [ ] Architecture verification
- [ ] Documentation generation
- [ ] Integration testing
- [ ] Modular monolith
- [ ] Modulith vs microservices

### 2.10 Spring AI
- [ ] Chat client
- [ ] Prompt template
- [ ] Embedding
- [ ] Vector store
- [ ] RAG
- [ ] Tool calling
- [ ] Advisors
- [ ] Chat memory
- [ ] Structured output
- [ ] Model abstraction
- [ ] Observability AI
- [ ] Testing AI integrations

---

## 3. Spring Framework Core

### 3.1 Inversion of Control
- [ ] IoC
- [ ] Dependency Injection
- [ ] Dependency Lookup
- [ ] Container
- [ ] BeanFactory
- [ ] ApplicationContext
- [ ] Bean definition
- [ ] Bean metadata
- [ ] Object graph
- [ ] Dependency graph
- [ ] Constructor injection
- [ ] Setter injection
- [ ] Field injection
- [ ] Method injection

### 3.2 ApplicationContext
- [ ] `AnnotationConfigApplicationContext`
- [ ] `ClassPathXmlApplicationContext`
- [ ] `FileSystemXmlApplicationContext`
- [ ] `WebApplicationContext`
- [ ] Parent context
- [ ] Child context
- [ ] Context hierarchy
- [ ] Context refresh
- [ ] Context close
- [ ] Environment access
- [ ] Resource loading
- [ ] Event publishing
- [ ] Internationalization

### 3.3 Bean definition
- [ ] Bean name
- [ ] Bean alias
- [ ] Bean class
- [ ] Bean scope
- [ ] Constructor arguments
- [ ] Property values
- [ ] Lazy initialization
- [ ] Primary bean
- [ ] Fallback bean
- [ ] Depends-on
- [ ] Init method
- [ ] Destroy method
- [ ] Factory method
- [ ] FactoryBean

### 3.4 Bean scope
- [ ] Singleton
- [ ] Prototype
- [ ] Request
- [ ] Session
- [ ] Application
- [ ] WebSocket
- [ ] Custom scope
- [ ] Scoped proxy
- [ ] Singleton state management
- [ ] Prototype injection
- [ ] Thread safety per scope

### 3.5 Dependency injection
- [ ] Constructor injection
- [ ] Setter injection
- [ ] Field injection
- [ ] Required dependency
- [ ] Optional dependency
- [ ] Circular dependency
- [ ] `@Autowired`
- [ ] `@Qualifier`
- [ ] `@Primary`
- [ ] `@Fallback`
- [ ] `@Lazy`
- [ ] `ObjectProvider`
- [ ] `Provider`
- [ ] Collection injection
- [ ] Map injection
- [ ] Generic type injection

### 3.6 Component scanning
- [ ] `@Component`
- [ ] `@Service`
- [ ] `@Repository`
- [ ] `@Controller`
- [ ] `@RestController`
- [ ] `@Configuration`
- [ ] `@ComponentScan`
- [ ] Include filter
- [ ] Exclude filter
- [ ] Base package
- [ ] Bean naming strategy
- [ ] Stereotype annotation
- [ ] Custom composed annotation

### 3.7 Java configuration
- [ ] `@Configuration`
- [ ] `@Bean`
- [ ] Full configuration mode
- [ ] Lite configuration mode
- [ ] Proxy bean methods
- [ ] `proxyBeanMethods`
- [ ] Static bean method
- [ ] Conditional bean
- [ ] Import configuration
- [ ] Configuration composition
- [ ] Configuration ordering

### 3.8 XML configuration
- [ ] Bean XML
- [ ] XML namespace
- [ ] Constructor arg
- [ ] Property injection
- [ ] Context namespace
- [ ] AOP namespace
- [ ] TX namespace
- [ ] Legacy XML migration
- [ ] XML + annotation mixed config

### 3.9 Bean lifecycle
- [ ] Instantiation
- [ ] Dependency population
- [ ] Aware callbacks
- [ ] BeanPostProcessor before init
- [ ] InitializingBean
- [ ] `@PostConstruct`
- [ ] Init method
- [ ] BeanPostProcessor after init
- [ ] DisposableBean
- [ ] `@PreDestroy`
- [ ] Destroy method
- [ ] Context shutdown
- [ ] SmartLifecycle
- [ ] Lifecycle phase

### 3.10 Container extension points
- [ ] `BeanPostProcessor`
- [ ] `BeanFactoryPostProcessor`
- [ ] `BeanDefinitionRegistryPostProcessor`
- [ ] `ImportBeanDefinitionRegistrar`
- [ ] `ImportSelector`
- [ ] `DeferredImportSelector`
- [ ] `FactoryBean`
- [ ] `ApplicationContextInitializer`
- [ ] `ApplicationListener`
- [ ] `BeanNameAware`
- [ ] `BeanFactoryAware`
- [ ] `ApplicationContextAware`
- [ ] `EnvironmentAware`

---

## 4. Configuration, Environment, and Properties

### 4.1 Environment abstraction
- [ ] `Environment`
- [ ] `ConfigurableEnvironment`
- [ ] Property source
- [ ] System properties
- [ ] Environment variables
- [ ] Command-line arguments
- [ ] Servlet config properties
- [ ] Servlet context properties
- [ ] Custom property source
- [ ] Property source ordering

### 4.2 Profiles
- [ ] `@Profile`
- [ ] Active profile
- [ ] Default profile
- [ ] Profile groups
- [ ] Profile-specific configuration
- [ ] Profile-specific properties
- [ ] Multi-environment deployment
- [ ] Local profile
- [ ] Test profile
- [ ] Production profile

### 4.3 Externalized configuration
- [ ] `application.properties`
- [ ] `application.yml`
- [ ] Environment variable binding
- [ ] Command-line override
- [ ] Config tree
- [ ] Config import
- [ ] Optional config import
- [ ] Profile document
- [ ] Property precedence
- [ ] Secrets externalization
- [ ] Kubernetes ConfigMap
- [ ] Kubernetes Secret

### 4.4 Configuration properties
- [ ] `@ConfigurationProperties`
- [ ] Constructor binding
- [ ] JavaBean binding
- [ ] Record binding
- [ ] Nested properties
- [ ] List binding
- [ ] Map binding
- [ ] Duration binding
- [ ] DataSize binding
- [ ] Enum binding
- [ ] Validation
- [ ] Metadata generation
- [ ] IDE completion
- [ ] Custom converter

### 4.5 Conditional configuration
- [ ] `@Conditional`
- [ ] `@ConditionalOnClass`
- [ ] `@ConditionalOnMissingClass`
- [ ] `@ConditionalOnBean`
- [ ] `@ConditionalOnMissingBean`
- [ ] `@ConditionalOnProperty`
- [ ] `@ConditionalOnResource`
- [ ] `@ConditionalOnWebApplication`
- [ ] `@ConditionalOnNotWebApplication`
- [ ] `@ConditionalOnExpression`
- [ ] Custom condition
- [ ] Condition evaluation report

### 4.6 Spring Expression Language
- [ ] SpEL syntax
- [ ] Literal expression
- [ ] Property access
- [ ] Method invocation
- [ ] Collection access
- [ ] Safe navigation
- [ ] Elvis operator
- [ ] Type reference
- [ ] Bean reference
- [ ] Expression parser
- [ ] Evaluation context
- [ ] SpEL in `@Value`
- [ ] SpEL security considerations

### 4.7 `@Value`
- [ ] Property placeholder
- [ ] Default value
- [ ] SpEL expression
- [ ] Type conversion
- [ ] List injection
- [ ] Map injection
- [ ] Limitations
- [ ] Alternatives with `@ConfigurationProperties`

---

## 5. AOP and Cross-Cutting Concerns

### 5.1 AOP Concepts
- [ ] Aspect
- [ ] Join point
- [ ] Pointcut
- [ ] Advice
- [ ] Target object
- [ ] Proxy
- [ ] Weaving
- [ ] Cross-cutting concern
- [ ] Interceptor
- [ ] Invocation chain

### 5.2 Spring AOP
- [ ] Proxy-based AOP
- [ ] JDK dynamic proxy
- [ ] CGLIB proxy
- [ ] Interface proxy
- [ ] Class proxy
- [ ] Self-invocation problem
- [ ] Final class limitation
- [ ] Final method limitation
- [ ] Proxy exposure
- [ ] AOP ordering

### 5.3 Advice types
- [ ] `@Before`
- [ ] `@After`
- [ ] `@AfterReturning`
- [ ] `@AfterThrowing`
- [ ] `@Around`
- [ ] ProceedingJoinPoint
- [ ] Return value handling
- [ ] Exception handling
- [ ] Argument inspection

### 5.4 Pointcut expression
- [ ] `execution`
- [ ] `within`
- [ ] `this`
- [ ] `target`
- [ ] `args`
- [ ] `@annotation`
- [ ] `@within`
- [ ] `@target`
- [ ] `@args`
- [ ] Named pointcut
- [ ] Pointcut composition

### 5.5 Use cases AOP
- [ ] Transaction management
- [ ] Security method interceptor
- [ ] Logging
- [ ] Metrics
- [ ] Tracing
- [ ] Auditing
- [ ] Caching
- [ ] Retry
- [ ] Rate limiting
- [ ] Idempotency
- [ ] Feature flag
- [ ] Validation

---

## 6. Validation, Binding, and Conversion

### 6.1 Bean Validation
- [ ] Jakarta Validation
- [ ] `@Valid`
- [ ] `@Validated`
- [ ] `@NotNull`
- [ ] `@NotBlank`
- [ ] `@NotEmpty`
- [ ] `@Size`
- [ ] `@Min`
- [ ] `@Max`
- [ ] `@Positive`
- [ ] `@Email`
- [ ] `@Pattern`
- [ ] Custom constraint
- [ ] ConstraintValidator
- [ ] Validation group
- [ ] Cross-field validation

### 6.2 Spring Validator
- [ ] `Validator`
- [ ] `Errors`
- [ ] `BindingResult`
- [ ] Field error
- [ ] Object error
- [ ] Nested path
- [ ] Programmatic validation
- [ ] Web validation
- [ ] Service validation

### 6.3 Data binding
- [ ] `DataBinder`
- [ ] `WebDataBinder`
- [ ] Property editor
- [ ] Allowed fields
- [ ] Disallowed fields
- [ ] Binding errors
- [ ] Type mismatch
- [ ] Form binding
- [ ] Request parameter binding
- [ ] Model attribute binding

### 6.4 Type conversion
- [ ] `ConversionService`
- [ ] `Converter`
- [ ] `ConverterFactory`
- [ ] `GenericConverter`
- [ ] Formatter
- [ ] Date formatter
- [ ] Number formatter
- [ ] Enum converter
- [ ] Custom converter
- [ ] ApplicationConversionService

---

## 7. Spring MVC

### 7.1 Servlet stack
- [ ] Servlet API
- [ ] Servlet container
- [ ] Tomcat
- [ ] Jetty
- [ ] Undertow
- [ ] DispatcherServlet
- [ ] HandlerMapping
- [ ] HandlerAdapter
- [ ] ViewResolver
- [ ] HandlerExceptionResolver
- [ ] MultipartResolver
- [ ] LocaleResolver
- [ ] ThemeResolver

### 7.2 Controller
- [ ] `@Controller`
- [ ] `@RestController`
- [ ] `@RequestMapping`
- [ ] `@GetMapping`
- [ ] `@PostMapping`
- [ ] `@PutMapping`
- [ ] `@PatchMapping`
- [ ] `@DeleteMapping`
- [ ] Request mapping conditions
- [ ] URI pattern
- [ ] Path pattern parser
- [ ] API versioning mapping
- [ ] Controller method signature

### 7.3 Request input
- [ ] `@PathVariable`
- [ ] `@RequestParam`
- [ ] `@RequestHeader`
- [ ] `@CookieValue`
- [ ] `@RequestBody`
- [ ] `@ModelAttribute`
- [ ] `@RequestPart`
- [ ] `HttpServletRequest`
- [ ] `Principal`
- [ ] `UriComponentsBuilder`
- [ ] Optional parameter
- [ ] Default value
- [ ] Required parameter

### 7.4 Response output
- [ ] `@ResponseBody`
- [ ] `ResponseEntity`
- [ ] `HttpHeaders`
- [ ] Status code
- [ ] Location header
- [ ] `@ResponseStatus`
- [ ] Streaming response
- [ ] File download
- [ ] Content negotiation
- [ ] Message converter
- [ ] JSON serialization
- [ ] XML serialization

### 7.5 REST API design
- [ ] Resource modeling
- [ ] URI design
- [ ] HTTP method semantics
- [ ] Status code semantics
- [ ] Pagination
- [ ] Sorting
- [ ] Filtering
- [ ] Partial update
- [ ] Idempotency key
- [ ] Optimistic locking
- [ ] ETag
- [ ] Cache-Control
- [ ] API versioning
- [ ] Error contract

### 7.6 Error handling
- [ ] `@ExceptionHandler`
- [ ] `@ControllerAdvice`
- [ ] `@RestControllerAdvice`
- [ ] `ProblemDetail`
- [ ] `ErrorResponse`
- [ ] Validation error response
- [ ] Business error response
- [ ] Technical error response
- [ ] Global error handling
- [ ] Error attributes
- [ ] Error path
- [ ] Trace ID in error
- [ ] Security-safe error response

### 7.7 Interceptors and Filters
- [ ] Servlet Filter
- [ ] `OncePerRequestFilter`
- [ ] `HandlerInterceptor`
- [ ] Pre-handle
- [ ] Post-handle
- [ ] After-completion
- [ ] Filter ordering
- [ ] Interceptor ordering
- [ ] Request logging
- [ ] Correlation ID
- [ ] Authentication pre-processing
- [ ] Rate limiting

### 7.8 Multipart and Files
- [ ] Multipart upload
- [ ] `MultipartFile`
- [ ] File size limit
- [ ] Content type validation
- [ ] Temporary storage
- [ ] Streaming upload
- [ ] File download
- [ ] Range request
- [ ] Static resources
- [ ] Resource handler

### 7.9 View rendering
- [ ] Thymeleaf
- [ ] FreeMarker
- [ ] JSP legacy
- [ ] Model
- [ ] ModelAndView
- [ ] Form binding
- [ ] Template layout
- [ ] Static resources
- [ ] WebJars
- [ ] Server-side rendering

---

## 8. Spring WebFlux and Reactive Programming

### 8.1 Reactive fundamentals
- [ ] Reactive Streams
- [ ] Publisher
- [ ] Subscriber
- [ ] Subscription
- [ ] Backpressure
- [ ] Non-blocking I/O
- [ ] Event loop
- [ ] Scheduler
- [ ] Operator
- [ ] Cold publisher
- [ ] Hot publisher

### 8.2 Project Reactor
- [ ] `Mono`
- [ ] `Flux`
- [ ] `map`
- [ ] `flatMap`
- [ ] `concatMap`
- [ ] `switchMap`
- [ ] `filter`
- [ ] `zip`
- [ ] `merge`
- [ ] `then`
- [ ] `doOnNext`
- [ ] `doOnError`
- [ ] `onErrorResume`
- [ ] `retry`
- [ ] `timeout`
- [ ] `subscribe`
- [ ] `block`
- [ ] Context
- [ ] Testing with StepVerifier

### 8.3 WebFlux server
- [ ] Reactive controller
- [ ] `@RestController` reactive
- [ ] Functional endpoints
- [ ] RouterFunction
- [ ] HandlerFunction
- [ ] ServerRequest
- [ ] ServerResponse
- [ ] Reactive validation
- [ ] Reactive error handling
- [ ] Streaming response
- [ ] Server-Sent Events
- [ ] WebSocket reactive

### 8.4 WebClient
- [ ] `WebClient`
- [ ] Builder
- [ ] Base URL
- [ ] Header
- [ ] Query parameter
- [ ] Body inserter
- [ ] Retrieve
- [ ] Exchange
- [ ] Error handling
- [ ] Timeout
- [ ] Retry
- [ ] Filter
- [ ] Codec
- [ ] Connection pool
- [ ] Load-balanced WebClient
- [ ] OAuth2 WebClient

### 8.5 Reactive data access
- [ ] R2DBC
- [ ] Reactive repository
- [ ] Reactive transaction
- [ ] Reactive MongoDB
- [ ] Reactive Redis
- [ ] Backpressure data stream
- [ ] Blocking call isolation
- [ ] Scheduler boundary
- [ ] Transactional operator

### 8.6 MVC vs WebFlux
- [ ] Blocking stack
- [ ] Non-blocking stack
- [ ] Thread-per-request
- [ ] Event loop
- [ ] Virtual threads alternative
- [ ] I/O-bound workload
- [ ] CPU-bound workload
- [ ] Debug complexity
- [ ] Library compatibility
- [ ] Operational complexity

---

## 9. Modern REST Clients

### 9.1 RestTemplate
- [ ] Legacy client
- [ ] Blocking calls
- [ ] Message converters
- [ ] Interceptors
- [ ] Error handler
- [ ] Migration planning
- [ ] Evolution limitations
- [ ] Replacement with RestClient
- [ ] Replacement with HTTP Interface

### 9.2 RestClient
- [ ] Blocking HTTP client
- [ ] Fluent API
- [ ] Request builder
- [ ] Response handling
- [ ] Error handling
- [ ] Message converters
- [ ] Interceptors
- [ ] Observability
- [ ] Testing
- [ ] Migration from RestTemplate

### 9.3 HTTP Interface
- [ ] Declarative HTTP client
- [ ] Interface contract
- [ ] `@HttpExchange`
- [ ] `@GetExchange`
- [ ] `@PostExchange`
- [ ] `@PutExchange`
- [ ] `@PatchExchange`
- [ ] `@DeleteExchange`
- [ ] Proxy factory
- [ ] Request parameters
- [ ] Headers
- [ ] Body
- [ ] Error handling
- [ ] API versioning integration
- [ ] Testing

### 9.4 Client resiliency
- [ ] Timeout
- [ ] Retry
- [ ] Backoff
- [ ] Circuit breaker
- [ ] Rate limiter
- [ ] Bulkhead
- [ ] Fallback
- [ ] Idempotency
- [ ] Connection pool
- [ ] DNS cache
- [ ] Client metrics
- [ ] Client tracing

---

## 10. Spring Boot Fundamentals

### 10.1 Bootstrapping
- [ ] `@SpringBootApplication`
- [ ] `SpringApplication`
- [ ] Main class
- [ ] Auto-configuration
- [ ] Component scanning
- [ ] Configuration properties scan
- [ ] Application arguments
- [ ] Banner
- [ ] Startup logging
- [ ] Application type
- [ ] Web application type

### 10.2 `@SpringBootApplication`
- [ ] `@Configuration`
- [ ] `@EnableAutoConfiguration`
- [ ] `@ComponentScan`
- [ ] Base package scanning
- [ ] Exclude auto-configuration
- [ ] Exclude name
- [ ] Proxy bean methods
- [ ] Best package placement

### 10.3 Auto-configuration
- [ ] Auto-configuration class
- [ ] Auto-configuration import
- [ ] Conditional annotations
- [ ] Auto-configuration ordering
- [ ] Auto-configuration report
- [ ] Custom auto-configuration
- [ ] Auto-configuration metadata
- [ ] Starter integration
- [ ] Back-off behavior
- [ ] Override strategy
- [ ] Testing auto-configuration

### 10.4 Starters
- [ ] Starter concept
- [ ] Dependency aggregation
- [ ] `spring-boot-starter`
- [ ] `spring-boot-starter-web`
- [ ] `spring-boot-starter-webflux`
- [ ] `spring-boot-starter-data-jpa`
- [ ] `spring-boot-starter-security`
- [ ] `spring-boot-starter-validation`
- [ ] `spring-boot-starter-actuator`
- [ ] `spring-boot-starter-test`
- [ ] Custom starter
- [ ] Starter naming convention
- [ ] Starter modularization

### 10.5 Embedded server
- [ ] Embedded Tomcat
- [ ] Embedded Jetty
- [ ] Embedded Undertow
- [ ] Netty
- [ ] Port configuration
- [ ] Context path
- [ ] Compression
- [ ] Access log
- [ ] Thread pool
- [ ] Graceful shutdown
- [ ] HTTP/2
- [ ] TLS
- [ ] SSL bundle

### 10.6 Application lifecycle
- [ ] Startup phase
- [ ] Application events
- [ ] ApplicationRunner
- [ ] CommandLineRunner
- [ ] SmartLifecycle
- [ ] Readiness state
- [ ] Liveness state
- [ ] Graceful shutdown
- [ ] Exit code
- [ ] Failure analyzer
- [ ] Startup actuator endpoint
- [ ] ApplicationStartup

### 10.7 DevTools
- [ ] Automatic restart
- [ ] LiveReload
- [ ] Property defaults
- [ ] Restart classloader
- [ ] Exclude resources
- [ ] Remote devtools
- [ ] Development-only dependency
- [ ] Limitations

---

## 11. Advanced Spring Boot Configuration

### 11.1 Dependency management
- [ ] Spring Boot parent
- [ ] Spring Boot BOM
- [ ] Maven dependency management
- [ ] Gradle dependency management
- [ ] Version override
- [ ] Dependency alignment
- [ ] Managed dependency
- [ ] Third-party dependency
- [ ] Plugin management
- [ ] Build reproducibility

### 11.2 Maven plugin
- [ ] Repackage
- [ ] Executable JAR
- [ ] Executable WAR
- [ ] Layered JAR
- [ ] Build image
- [ ] AOT processing
- [ ] Native image
- [ ] Build info
- [ ] Start/stop integration tests

### 11.3 Gradle plugin
- [ ] `bootJar`
- [ ] `bootWar`
- [ ] `bootRun`
- [ ] Dependency management
- [ ] Layered JAR
- [ ] Build image
- [ ] AOT task
- [ ] Native image task
- [ ] Build info
- [ ] Configuration cache

### 11.4 Logging in Boot
- [ ] Default logging
- [ ] Logback
- [ ] Log4j2
- [ ] JUL bridge
- [ ] Log levels
- [ ] Logging groups
- [ ] File logging
- [ ] Rolling policy
- [ ] Structured logging
- [ ] JSON logs
- [ ] Profile-specific logging
- [ ] Correlation ID
- [ ] Trace ID
- [ ] Span ID

### 11.5 JSON handling
- [ ] Jackson auto-configuration
- [ ] ObjectMapper
- [ ] Module registration
- [ ] JavaTimeModule
- [ ] Record serialization
- [ ] Enum serialization
- [ ] Property naming strategy
- [ ] Include non-null
- [ ] Custom serializer
- [ ] Custom deserializer
- [ ] Mixins
- [ ] JSON views
- [ ] ProblemDetail serialization
- [ ] Jackson 3 migration

### 11.6 Task execution
- [ ] TaskExecutor
- [ ] TaskScheduler
- [ ] Async executor
- [ ] ApplicationTaskExecutor
- [ ] Scheduling thread pool
- [ ] Virtual thread executor
- [ ] Executor customization
- [ ] Rejection policy
- [ ] Queue capacity
- [ ] Thread naming
- [ ] Context propagation

---

## 12. Data Access and Transactions

### 12.1 JDBC with Spring
- [ ] `JdbcTemplate`
- [ ] `NamedParameterJdbcTemplate`
- [ ] DataSource
- [ ] RowMapper
- [ ] ResultSetExtractor
- [ ] PreparedStatementCreator
- [ ] Batch update
- [ ] Generated keys
- [ ] SQL exception translation
- [ ] Transaction management
- [ ] Connection pool
- [ ] HikariCP
- [ ] SQL logging

### 12.2 Spring Data JDBC
- [ ] Aggregate mapping
- [ ] Repository
- [ ] Entity callbacks
- [ ] ID generation
- [ ] One-to-one
- [ ] One-to-many
- [ ] Embedded value
- [ ] Custom query
- [ ] Domain events
- [ ] Optimistic locking
- [ ] Auditing
- [ ] JDBC vs JPA

### 12.3 JPA and Hibernate
- [ ] Entity
- [ ] Table mapping
- [ ] ID strategy
- [ ] Column mapping
- [ ] Relationship mapping
- [ ] One-to-one
- [ ] One-to-many
- [ ] Many-to-one
- [ ] Many-to-many
- [ ] Embedded
- [ ] ElementCollection
- [ ] Inheritance mapping
- [ ] Entity lifecycle
- [ ] Persistence context
- [ ] Dirty checking
- [ ] Flush
- [ ] Lazy loading
- [ ] Eager loading
- [ ] N+1 problem
- [ ] Fetch join
- [ ] Entity graph
- [ ] Batch fetching
- [ ] Second-level cache

### 12.4 Spring Data JPA
- [ ] JpaRepository
- [ ] CrudRepository
- [ ] PagingAndSortingRepository
- [ ] Query method
- [ ] Derived query
- [ ] `@Query`
- [ ] Native query
- [ ] JPQL
- [ ] Specification
- [ ] Example matcher
- [ ] Projection interface
- [ ] DTO projection
- [ ] Pagination
- [ ] Sorting
- [ ] Auditing
- [ ] Entity callback
- [ ] Custom repository implementation

### 12.5 Transaction management
- [ ] `PlatformTransactionManager`
- [ ] `@Transactional`
- [ ] Declarative transaction
- [ ] Programmatic transaction
- [ ] TransactionTemplate
- [ ] Propagation REQUIRED
- [ ] Propagation REQUIRES_NEW
- [ ] Propagation NESTED
- [ ] Propagation SUPPORTS
- [ ] Isolation READ_COMMITTED
- [ ] Isolation REPEATABLE_READ
- [ ] Isolation SERIALIZABLE
- [ ] Read-only transaction
- [ ] Timeout
- [ ] Rollback rules
- [ ] Checked exception rollback
- [ ] Self-invocation problem
- [ ] Transaction boundary
- [ ] Open Session in View
- [ ] Transactional event listener

### 12.6 Database migration
- [ ] Flyway
- [ ] Liquibase
- [ ] Versioned migration
- [ ] Repeatable migration
- [ ] Baseline
- [ ] Repair
- [ ] Rollback strategy
- [ ] Migration naming
- [ ] Environment-specific migration
- [ ] Test migration
- [ ] Zero-downtime migration
- [ ] Expand-contract pattern

### 12.7 R2DBC
- [ ] R2DBC driver
- [ ] ConnectionFactory
- [ ] DatabaseClient
- [ ] R2dbcEntityTemplate
- [ ] ReactiveCrudRepository
- [ ] Reactive transaction
- [ ] Connection pool
- [ ] Backpressure
- [ ] Blocking boundary
- [ ] Testing R2DBC

### 12.8 NoSQL
- [ ] MongoTemplate
- [ ] MongoRepository
- [ ] RedisTemplate
- [ ] RedisRepository
- [ ] ElasticsearchRepository
- [ ] CassandraRepository
- [ ] Document mapping
- [ ] Key-value mapping
- [ ] Indexing
- [ ] TTL
- [ ] Cache integration
- [ ] Reactive NoSQL access

---

## 13. Caching

### 13.1 Cache abstraction
- [ ] `@EnableCaching`
- [ ] `@Cacheable`
- [ ] `@CachePut`
- [ ] `@CacheEvict`
- [ ] Cache name
- [ ] Cache key
- [ ] Key generator
- [ ] Condition
- [ ] Unless
- [ ] CacheManager
- [ ] CacheResolver
- [ ] Self-invocation problem
- [ ] Transaction-aware cache

### 13.2 Cache provider
- [ ] ConcurrentMapCache
- [ ] Caffeine
- [ ] Redis Cache
- [ ] Ehcache
- [ ] JCache
- [ ] Hazelcast
- [ ] In-memory cache
- [ ] Distributed cache
- [ ] TTL
- [ ] Max size
- [ ] Eviction policy
- [ ] Cache metrics

### 13.3 Cache design
- [ ] Cache-aside
- [ ] Read-through
- [ ] Write-through
- [ ] Write-behind
- [ ] Stale data
- [ ] Stampede protection
- [ ] Cache invalidation
- [ ] Multi-level cache
- [ ] Serialization format
- [ ] Key design

---

## 14. Scheduling and Async

### 14.1 Scheduling
- [ ] `@EnableScheduling`
- [ ] `@Scheduled`
- [ ] Fixed rate
- [ ] Fixed delay
- [ ] Initial delay
- [ ] Cron expression
- [ ] Time zone
- [ ] Scheduler thread pool
- [ ] Error handling
- [ ] Distributed scheduling
- [ ] ShedLock
- [ ] Quartz integration

### 14.2 Async
- [ ] `@EnableAsync`
- [ ] `@Async`
- [ ] Async executor
- [ ] Return `void`
- [ ] Return `Future`
- [ ] Return `CompletableFuture`
- [ ] Exception handling
- [ ] Self-invocation problem
- [ ] Context propagation
- [ ] Security context propagation
- [ ] MDC propagation
- [ ] Virtual threads

### 14.3 Background jobs
- [ ] Fire-and-forget
- [ ] Retryable job
- [ ] Idempotent job
- [ ] Job locking
- [ ] Job status
- [ ] Job cancellation
- [ ] Job observability
- [ ] Queue-based job
- [ ] Batch job

---

## 15. Messaging and Event-Driven Architecture

### 15.1 Spring events
- [ ] ApplicationEvent
- [ ] ApplicationEventPublisher
- [ ] `@EventListener`
- [ ] TransactionalEventListener
- [ ] Synchronous listener
- [ ] Asynchronous listener
- [ ] Event ordering
- [ ] Domain event
- [ ] Integration event
- [ ] Event payload
- [ ] Event error handling

### 15.2 JMS
- [ ] JMS template
- [ ] Queue
- [ ] Topic
- [ ] Listener
- [ ] Message converter
- [ ] Transaction
- [ ] Acknowledgement
- [ ] Durable subscription
- [ ] Error handler
- [ ] Dead letter queue

### 15.3 RabbitMQ / AMQP
- [ ] Exchange
- [ ] Queue
- [ ] Binding
- [ ] Routing key
- [ ] Direct exchange
- [ ] Topic exchange
- [ ] Fanout exchange
- [ ] RabbitTemplate
- [ ] Listener container
- [ ] Acknowledgement
- [ ] Retry
- [ ] Dead letter exchange
- [ ] Publisher confirm
- [ ] Message converter
- [ ] Delayed message

### 15.4 Kafka
- [ ] Topic
- [ ] Partition
- [ ] Offset
- [ ] Consumer group
- [ ] Producer
- [ ] Consumer
- [ ] KafkaTemplate
- [ ] `@KafkaListener`
- [ ] Serialization
- [ ] Deserialization
- [ ] Error handler
- [ ] Retry topic
- [ ] Dead letter topic
- [ ] Idempotent producer
- [ ] Transactional producer
- [ ] Exactly-once semantics
- [ ] At-least-once semantics
- [ ] Ordering
- [ ] Rebalancing

### 15.5 Spring Cloud Stream
- [ ] Binder
- [ ] Binding
- [ ] Supplier
- [ ] Function
- [ ] Consumer
- [ ] Functional model
- [ ] Kafka binder
- [ ] Rabbit binder
- [ ] Partitioning
- [ ] Error channel
- [ ] DLQ
- [ ] Content type negotiation
- [ ] Schema registry
- [ ] StreamBridge

### 15.6 Event-driven architecture
- [ ] Event
- [ ] Command
- [ ] Message envelope
- [ ] Correlation ID
- [ ] Causation ID
- [ ] Idempotent consumer
- [ ] Outbox pattern
- [ ] Inbox pattern
- [ ] Saga
- [ ] Choreography
- [ ] Orchestration
- [ ] Eventual consistency
- [ ] Poison message

---

## 16. Spring Security

### 16.1 Fundamentals
- [ ] Authentication
- [ ] Authorization
- [ ] Principal
- [ ] Credential
- [ ] GrantedAuthority
- [ ] Role
- [ ] Permission
- [ ] SecurityContext
- [ ] SecurityContextHolder
- [ ] AuthenticationManager
- [ ] AuthenticationProvider
- [ ] UserDetails
- [ ] UserDetailsService
- [ ] PasswordEncoder

### 16.2 Filter chain
- [ ] SecurityFilterChain
- [ ] DelegatingFilterProxy
- [ ] FilterChainProxy
- [ ] Filter ordering
- [ ] OncePerRequestFilter
- [ ] Authentication filter
- [ ] Authorization filter
- [ ] ExceptionTranslationFilter
- [ ] AnonymousAuthenticationFilter
- [ ] LogoutFilter
- [ ] CSRF filter
- [ ] CORS filter

### 16.3 Modern Configuration
- [ ] Bean SecurityFilterChain
- [ ] Lambda DSL
- [ ] Request matcher
- [ ] Authorization rules
- [ ] Form login
- [ ] HTTP Basic
- [ ] Logout
- [ ] Remember-me
- [ ] Session management
- [ ] Stateless API
- [ ] Password storage
- [ ] Security headers
- [ ] Custom filter

### 16.4 CSRF, CORS, and Sessions
- [ ] CSRF token
- [ ] CSRF repository
- [ ] Cookie CSRF token
- [ ] Stateless CSRF strategy
- [ ] CORS configuration
- [ ] Preflight request
- [ ] Session fixation
- [ ] Concurrent sessions
- [ ] Session creation policy
- [ ] SameSite cookie
- [ ] Secure cookie
- [ ] HttpOnly cookie

### 16.5 Method security
- [ ] `@EnableMethodSecurity`
- [ ] `@PreAuthorize`
- [ ] `@PostAuthorize`
- [ ] `@PreFilter`
- [ ] `@PostFilter`
- [ ] AuthorizationManager
- [ ] PermissionEvaluator
- [ ] Role hierarchy
- [ ] SpEL security
- [ ] Domain object security

### 16.6 OAuth2 Client
- [ ] Client registration
- [ ] Authorized client
- [ ] Authorization code flow
- [ ] Client credentials flow
- [ ] Refresh token
- [ ] OAuth2AuthorizedClientManager
- [ ] OAuth2 WebClient
- [ ] Token relay
- [ ] Multi-provider login
- [ ] OIDC login
- [ ] UserInfo endpoint

### 16.7 Resource Server
- [ ] Bearer token
- [ ] JWT
- [ ] Opaque token
- [ ] JWK Set URI
- [ ] Issuer URI
- [ ] JwtDecoder
- [ ] JwtAuthenticationConverter
- [ ] Scope mapping
- [ ] Authority mapping
- [ ] Multi-tenant issuer
- [ ] Token validation
- [ ] Custom claim mapping

### 16.8 Authorization Server
- [ ] Registered client
- [ ] Authorization endpoint
- [ ] Token endpoint
- [ ] JWK endpoint
- [ ] OIDC provider metadata
- [ ] Authorization code grant
- [ ] Client credentials grant
- [ ] Refresh token grant
- [ ] Device code grant
- [ ] PKCE
- [ ] Consent page
- [ ] Token customization

### 16.9 Security testing
- [ ] `spring-security-test`
- [ ] `@WithMockUser`
- [ ] `@WithUserDetails`
- [ ] MockMvc security
- [ ] WebTestClient security
- [ ] CSRF test
- [ ] JWT test
- [ ] OAuth2 client test
- [ ] Method security test
- [ ] Authorization failure test

---

## 17. Testing Spring and Spring Boot

### 17.1 Unit testing
- [ ] JUnit 5
- [ ] Mockito
- [ ] AssertJ
- [ ] Unit test service
- [ ] Unit test mapper
- [ ] Unit test validator
- [ ] Mock dependency
- [ ] Fake repository
- [ ] Test fixture
- [ ] Test data builder

### 17.2 Spring TestContext
- [ ] TestContext Framework
- [ ] Context caching
- [ ] Context hierarchy
- [ ] `@ContextConfiguration`
- [ ] `@ActiveProfiles`
- [ ] `@TestPropertySource`
- [ ] `@DynamicPropertySource`
- [ ] `@DirtiesContext`
- [ ] Test execution listener
- [ ] Dependency injection in test

### 17.3 Spring Boot testing
- [ ] `@SpringBootTest`
- [ ] Web environment MOCK
- [ ] Web environment RANDOM_PORT
- [ ] Web environment DEFINED_PORT
- [ ] `@MockBean`
- [ ] `@SpyBean`
- [ ] `@TestConfiguration`
- [ ] Test properties
- [ ] Application context test
- [ ] Full integration test
- [ ] Startup failure test

### 17.4 Test slice
- [ ] `@WebMvcTest`
- [ ] `@WebFluxTest`
- [ ] `@DataJpaTest`
- [ ] `@JdbcTest`
- [ ] `@DataJdbcTest`
- [ ] `@DataMongoTest`
- [ ] `@DataRedisTest`
- [ ] `@JsonTest`
- [ ] `@RestClientTest`
- [ ] Custom test slice
- [ ] Auto-configuration in slice
- [ ] Import extra beans

### 17.5 Web testing
- [ ] MockMvc
- [ ] WebTestClient
- [ ] TestRestTemplate
- [ ] RestClient test
- [ ] HTTP Interface test
- [ ] JSON path assertions
- [ ] Header assertions
- [ ] Status assertions
- [ ] Error response assertions
- [ ] Security assertions
- [ ] Multipart test

### 17.6 Database testing
- [ ] In-memory database
- [ ] Testcontainers
- [ ] PostgreSQL container
- [ ] MySQL container
- [ ] MongoDB container
- [ ] Redis container
- [ ] Flyway test
- [ ] Liquibase test
- [ ] Transaction rollback
- [ ] SQL scripts
- [ ] Data cleanup
- [ ] Repository test

### 17.7 Messaging testing
- [ ] Embedded Kafka
- [ ] Kafka Testcontainers
- [ ] RabbitMQ Testcontainers
- [ ] JMS test
- [ ] Spring Cloud Stream test binder
- [ ] Message assertion
- [ ] DLQ test
- [ ] Retry test
- [ ] Idempotency test
- [ ] Consumer contract test

### 17.8 Contract testing
- [ ] Spring Cloud Contract
- [ ] Producer contract
- [ ] Consumer contract
- [ ] Stub generation
- [ ] Stub runner
- [ ] HTTP contract
- [ ] Messaging contract
- [ ] Contract versioning
- [ ] Backward compatibility
- [ ] API breaking changes

### 17.9 Performance testing
- [ ] Load test
- [ ] Startup time test
- [ ] Memory footprint test
- [ ] JVM profiling
- [ ] JFR recording
- [ ] SQL query count test
- [ ] N+1 detection
- [ ] Web latency benchmark
- [ ] Virtual threads benchmark
- [ ] Native image benchmark

---

## 18. Actuator and Production-Ready Features

### 18.1 Actuator Basics
- [ ] Enable actuator
- [ ] Endpoint exposure
- [ ] HTTP endpoint
- [ ] JMX endpoint
- [ ] Endpoint security
- [ ] Management port
- [ ] Management base path
- [ ] Endpoint include
- [ ] Endpoint exclude
- [ ] Custom endpoint

### 18.2 Main Endpoints
- [ ] `/actuator/health`
- [ ] `/actuator/info`
- [ ] `/actuator/metrics`
- [ ] `/actuator/prometheus`
- [ ] `/actuator/loggers`
- [ ] `/actuator/env`
- [ ] `/actuator/configprops`
- [ ] `/actuator/beans`
- [ ] `/actuator/conditions`
- [ ] `/actuator/mappings`
- [ ] `/actuator/threaddump`
- [ ] `/actuator/heapdump`
- [ ] `/actuator/scheduledtasks`
- [ ] `/actuator/startup`

### 18.3 Health
- [ ] HealthIndicator
- [ ] ReactiveHealthIndicator
- [ ] Composite health
- [ ] Health group
- [ ] Liveness probe
- [ ] Readiness probe
- [ ] Database health
- [ ] Redis health
- [ ] Rabbit health
- [ ] Kafka health
- [ ] Custom health
- [ ] Health status mapping
- [ ] Kubernetes probes

### 18.4 Info endpoint
- [ ] Build info
- [ ] Git info
- [ ] Custom info contributor
- [ ] Application version
- [ ] Commit hash
- [ ] Build time
- [ ] Runtime info
- [ ] Environment info

### 18.5 Metrics
- [ ] Micrometer
- [ ] MeterRegistry
- [ ] Counter
- [ ] Gauge
- [ ] Timer
- [ ] Distribution summary
- [ ] Long task timer
- [ ] Tags
- [ ] Common tags
- [ ] JVM metrics
- [ ] HTTP server metrics
- [ ] HTTP client metrics
- [ ] Database metrics
- [ ] Cache metrics
- [ ] Custom metrics

### 18.6 Tracing
- [ ] Trace ID
- [ ] Span ID
- [ ] Span
- [ ] Parent span
- [ ] Baggage
- [ ] Context propagation
- [ ] Sampling
- [ ] OpenTelemetry
- [ ] Zipkin
- [ ] Tempo
- [ ] Jaeger
- [ ] Logs correlation
- [ ] Metrics correlation

### 18.7 Audit
- [ ] AuditEvent
- [ ] AuditEventRepository
- [ ] Authentication audit
- [ ] Authorization audit
- [ ] Custom audit event
- [ ] Security event
- [ ] Compliance logging

---

## 19. Native, AOT, and Startup Optimization

### 19.1 AOT processing
- [ ] AOT engine
- [ ] BeanFactory initialization
- [ ] Runtime hints generation
- [ ] Reflection hints
- [ ] Resource hints
- [ ] Serialization hints
- [ ] Proxy hints
- [ ] Initialization hints
- [ ] Generated code
- [ ] AOT test processing
- [ ] AOT limitations
- [ ] AOT debugging

### 19.2 GraalVM Native Image
- [ ] Native image
- [ ] Closed-world assumption
- [ ] Reflection configuration
- [ ] Dynamic proxy configuration
- [ ] Resource configuration
- [ ] JNI configuration
- [ ] Build-time initialization
- [ ] Run-time initialization
- [ ] Native memory
- [ ] Startup time
- [ ] Memory footprint
- [ ] Native image testing
- [ ] Native image tracing agent
- [ ] Container native image

### 19.3 Runtime hints
- [ ] `RuntimeHints`
- [ ] `RuntimeHintsRegistrar`
- [ ] `@RegisterReflectionForBinding`
- [ ] Reflection hints
- [ ] Resource pattern hints
- [ ] Serialization hints
- [ ] Proxy hints
- [ ] Conditional hints
- [ ] Library hints
- [ ] Starter hints

### 19.4 CRaC and Checkpoint Restore
- [ ] JVM checkpoint
- [ ] JVM restore
- [ ] Resource lifecycle
- [ ] Connection cleanup
- [ ] File descriptor handling
- [ ] Network connection handling
- [ ] Cache warmup
- [ ] Spring lifecycle integration
- [ ] Startup optimization
- [ ] Compatibility issues

### 19.5 Startup optimization
- [ ] Lazy initialization
- [ ] Bean count reduction
- [ ] Auto-configuration exclusions
- [ ] Classpath reduction
- [ ] Conditional beans
- [ ] Functional bean registration
- [ ] Layered JAR
- [ ] CDS/AppCDS
- [ ] AOT class loading
- [ ] Native image
- [ ] Startup actuator endpoint
- [ ] ApplicationStartup profiling

---

## 20. Docker, Kubernetes, and Deployment

### 20.1 Container image
- [ ] Dockerfile
- [ ] Multi-stage build
- [ ] JAR image
- [ ] Layered JAR
- [ ] Buildpacks
- [ ] Paketo
- [ ] `bootBuildImage`
- [ ] Distroless image
- [ ] Alpine caveats
- [ ] JVM flags
- [ ] Non-root user
- [ ] Image scanning
- [ ] SBOM

### 20.2 JVM in container
- [ ] Container memory awareness
- [ ] MaxRAMPercentage
- [ ] InitialRAMPercentage
- [ ] ActiveProcessorCount
- [ ] CPU limit
- [ ] Memory limit
- [ ] Heap sizing
- [ ] Native memory
- [ ] GC selection
- [ ] GC logging
- [ ] OOM handling
- [ ] Exit on OOM

### 20.3 Docker Compose
- [ ] Compose services
- [ ] Spring Boot Docker Compose support
- [ ] Service connection
- [ ] Database service
- [ ] Redis service
- [ ] RabbitMQ service
- [ ] Kafka service
- [ ] Local development
- [ ] Testcontainers alternative
- [ ] Profile-based compose

### 20.4 Kubernetes
- [ ] Deployment
- [ ] Service
- [ ] Ingress
- [ ] ConfigMap
- [ ] Secret
- [ ] Readiness probe
- [ ] Liveness probe
- [ ] Startup probe
- [ ] Resource requests
- [ ] Resource limits
- [ ] Horizontal Pod Autoscaler
- [ ] Rolling update
- [ ] Graceful shutdown
- [ ] PreStop hook
- [ ] Service account
- [ ] Network policy

### 20.5 Cloud-native configuration
- [ ] Environment variables
- [ ] Mounted config
- [ ] Config tree
- [ ] Secret management
- [ ] Vault
- [ ] Spring Cloud Config
- [ ] Kubernetes ConfigMap reload
- [ ] Feature flags
- [ ] Externalized endpoints
- [ ] Twelve-factor app

---

## 21. Spring Cloud and Microservices

### 21.1 Config Server
- [ ] Centralized configuration
- [ ] Git backend
- [ ] Vault backend
- [ ] Native backend
- [ ] Encryption
- [ ] Refresh scope
- [ ] Config client
- [ ] Profile-based config
- [ ] Label
- [ ] Fail-fast
- [ ] Retry
- [ ] Security

### 21.2 Service discovery
- [ ] Discovery client
- [ ] Eureka
- [ ] Consul
- [ ] Kubernetes discovery
- [ ] Service registration
- [ ] Health check
- [ ] Instance metadata
- [ ] Client-side discovery
- [ ] Server-side discovery

### 21.3 Spring Cloud Gateway
- [ ] Route
- [ ] Predicate
- [ ] Filter
- [ ] Global filter
- [ ] Path rewrite
- [ ] Header manipulation
- [ ] Rate limiting
- [ ] Circuit breaker
- [ ] Load balancing
- [ ] Security integration
- [ ] Observability
- [ ] CORS
- [ ] Retry
- [ ] Timeout

### 21.4 OpenFeign
- [ ] Declarative client
- [ ] Contract
- [ ] Encoder
- [ ] Decoder
- [ ] ErrorDecoder
- [ ] Interceptor
- [ ] Timeout
- [ ] Retryer
- [ ] Load balancing
- [ ] Circuit breaker
- [ ] Logging
- [ ] Metrics
- [ ] Migration to HTTP Interface

### 21.5 Resilience
- [ ] Resilience4j
- [ ] Circuit breaker
- [ ] Retry
- [ ] Rate limiter
- [ ] Bulkhead
- [ ] Time limiter
- [ ] Fallback
- [ ] Metrics
- [ ] Event publisher
- [ ] Failure threshold
- [ ] Sliding window
- [ ] Half-open state

### 21.6 Distributed systems patterns
- [ ] API Gateway
- [ ] Backend for frontend
- [ ] Service discovery
- [ ] Externalized configuration
- [ ] Circuit breaker
- [ ] Saga
- [ ] Outbox
- [ ] CQRS
- [ ] Event sourcing
- [ ] Idempotency
- [ ] Retry storm prevention
- [ ] Timeout budget
- [ ] Distributed tracing
- [ ] Centralized logging

---

## 22. API Design and Documentation

### 22.1 API contract
- [ ] OpenAPI
- [ ] Swagger UI
- [ ] Springdoc
- [ ] Request schema
- [ ] Response schema
- [ ] Error schema
- [ ] Security schema
- [ ] Example payload
- [ ] Operation ID
- [ ] Tags
- [ ] API grouping
- [ ] Versioned documentation

### 22.2 DTOs and Mapping
- [ ] Request DTO
- [ ] Response DTO
- [ ] Command DTO
- [ ] Query DTO
- [ ] Projection DTO
- [ ] Entity exposure avoidance
- [ ] MapStruct
- [ ] Manual mapper
- [ ] Record DTO
- [ ] Validation DTO
- [ ] Nullability contract
- [ ] Backward compatibility

### 22.3 API versioning
- [ ] URL versioning
- [ ] Header versioning
- [ ] Media type versioning
- [ ] Query parameter versioning
- [ ] Version range
- [ ] Version deprecation
- [ ] Version sunset
- [ ] Controller method versioning
- [ ] Client versioning
- [ ] Documentation versioning
- [ ] Compatibility tests

### 22.4 Error contract
- [ ] ProblemDetail
- [ ] RFC 9457-style response
- [ ] Error code
- [ ] Error message
- [ ] Error details
- [ ] Field validation errors
- [ ] Trace ID
- [ ] Timestamp
- [ ] Path
- [ ] Localization
- [ ] Security-safe errors
- [ ] Machine-readable errors

---

## 23. Advanced Spring internals

### 23.1 Auto-configuration internals
- [ ] AutoConfiguration import file
- [ ] AutoConfiguration metadata
- [ ] Import selector
- [ ] Condition evaluation
- [ ] Bean back-off
- [ ] Ordering
- [ ] AutoConfigurationPackages
- [ ] Custom starter
- [ ] Custom actuator endpoint
- [ ] Custom health indicator
- [ ] Custom metrics binder
- [ ] Custom failure analyzer

### 23.2 Advanced Bean Registration
- [ ] Functional bean registration
- [ ] BeanDefinition
- [ ] BeanDefinitionRegistry
- [ ] GenericBeanDefinition
- [ ] RootBeanDefinition
- [ ] Programmatic registration
- [ ] Conditional registration
- [ ] Dynamic registration
- [ ] Bean name generation
- [ ] Bean definition overriding

### 23.3 Proxy internals
- [ ] AOP proxy creation
- [ ] JDK proxy
- [ ] CGLIB proxy
- [ ] ProxyFactory
- [ ] Advisor
- [ ] MethodInterceptor
- [ ] Invocation chain
- [ ] TargetSource
- [ ] AutoProxyCreator
- [ ] Transaction proxy
- [ ] Security proxy
- [ ] Cache proxy
- [ ] Async proxy

### 23.4 Annotation model
- [ ] Merged annotations
- [ ] Composed annotations
- [ ] Annotation attributes
- [ ] AliasFor
- [ ] Meta-annotations
- [ ] Repeatable annotations
- [ ] Annotation scanning
- [ ] Classpath scanning
- [ ] ASM metadata reading
- [ ] Reflection vs metadata reader

### 23.5 Spring Factories and Imports
- [ ] Legacy `spring.factories`
- [ ] AutoConfiguration imports
- [ ] Bootstrap registry
- [ ] Environment post-processor
- [ ] Application context initializer
- [ ] Application listener
- [ ] Failure analyzer
- [ ] Config data loader
- [ ] Config data location resolver

### 23.6 Runtime performance internals
- [ ] Startup bottleneck
- [ ] Bean creation cost
- [ ] Classpath scanning cost
- [ ] Reflection cost
- [ ] Proxy cost
- [ ] Conditional evaluation cost
- [ ] Configuration properties binding cost
- [ ] Jackson initialization cost
- [ ] Hibernate initialization cost
- [ ] AOT optimization
- [ ] Lazy initialization trade-off

---

## 24. Migrations

### 24.1 Spring Framework 5 -> 6
- [ ] Java 17 baseline
- [ ] Jakarta EE namespace
- [ ] `javax.*` to `jakarta.*`
- [ ] Servlet 6 baseline
- [ ] Hibernate 6 compatibility
- [ ] Deprecated API removal
- [ ] AOT support
- [ ] Native hints
- [ ] Observability changes
- [ ] ProblemDetail adoption

### 24.2 Spring Boot 2 -> 3
- [ ] Java 17 baseline
- [ ] Spring Framework 6
- [ ] Jakarta migration
- [ ] Dependency upgrades
- [ ] Security configuration changes
- [ ] Actuator changes
- [ ] Micrometer tracing migration
- [ ] Native image support
- [ ] Configuration properties changes
- [ ] Removed deprecated APIs
- [ ] Test updates
- [ ] Third-party compatibility

### 24.3 Spring Framework 6 -> 7
- [ ] Spring Framework 7 baseline
- [ ] Jakarta EE 11 alignment
- [ ] Null-safety evolution
- [ ] API versioning support
- [ ] HTTP interface evolution
- [ ] Deprecation review
- [ ] RestTemplate migration planning
- [ ] Testing updates
- [ ] Observability updates
- [ ] Web stack changes

### 24.4 Spring Boot 3 -> 4
- [ ] Spring Boot 4 modularization
- [ ] Spring Framework 7
- [ ] Jakarta EE 11 alignment
- [ ] JSpecify null-safety
- [ ] Java 25 support
- [ ] Java 17 compatibility
- [ ] Starter/module changes
- [ ] Dependency upgrades
- [ ] Jackson 3 migration
- [ ] API versioning support
- [ ] HTTP service clients
- [ ] Configuration migration
- [ ] Test migration
- [ ] Actuator migration
- [ ] Security migration

### 24.5 Legacy migration
- [ ] XML to Java config
- [ ] Field injection to constructor injection
- [ ] RestTemplate to RestClient
- [ ] RestTemplate to HTTP Interface
- [ ] WebSecurityConfigurerAdapter to SecurityFilterChain
- [ ] JUnit 4 to JUnit 5
- [ ] `javax` to `jakarta`
- [ ] Old actuator endpoints to new actuator
- [ ] Sleuth to Micrometer Tracing
- [ ] Spring Cloud legacy to current release train
- [ ] Manual Dockerfile to buildpacks
- [ ] Blocking design to virtual threads
- [ ] Blocking design to reactive stack

---

## 25. Spring Framework Evolution by Version

### 25.1 Spring Framework 1.x
- [ ] IoC container
- [ ] BeanFactory
- [ ] ApplicationContext
- [ ] Dependency Injection
- [ ] AOP support
- [ ] DAO abstraction
- [ ] Transaction abstraction
- [ ] JDBC support
- [ ] ORM integration
- [ ] Basic Web MVC

### 25.2 Spring Framework 2.x
- [ ] XML namespaces
- [ ] AspectJ integration
- [ ] Annotation-based configuration
- [ ] `@Autowired`
- [ ] `@Component`
- [ ] Component scanning
- [ ] Stereotype annotations
- [ ] Declarative transactions
- [ ] MessageSource improvements
- [ ] Web MVC improvements

### 25.3 Spring Framework 3.x
- [ ] Java 5 baseline
- [ ] `@Configuration`
- [ ] `@Bean`
- [ ] Environment abstraction
- [ ] Profiles
- [ ] SpEL
- [ ] REST support in MVC
- [ ] `RestTemplate`
- [ ] Validation improvements
- [ ] ConversionService
- [ ] Formatter SPI
- [ ] Async support
- [ ] Cache abstraction
- [ ] JPA 2 support

### 25.4 Spring Framework 4.x
- [ ] Java 8 support
- [ ] Lambda-friendly APIs
- [ ] Conditional beans
- [ ] `@Conditional`
- [ ] WebSocket support
- [ ] STOMP support
- [ ] CORS support
- [ ] Testing improvements
- [ ] Groovy bean definitions
- [ ] Annotation composition
- [ ] REST controller improvements
- [ ] Messaging abstraction improvements

### 25.5 Spring Framework 5.x
- [ ] Java 8 baseline
- [ ] Reactive stack
- [ ] Spring WebFlux
- [ ] WebClient
- [ ] Functional endpoints
- [ ] Reactive adapters
- [ ] Kotlin support
- [ ] JUnit 5 support
- [ ] Core container refinements
- [ ] HTTP/2 readiness
- [ ] Functional bean registration
- [ ] Nullability annotations
- [ ] Observability foundations

### 25.6 Spring Framework 6.x
- [ ] Java 17 baseline
- [ ] Jakarta EE 9+ namespace
- [ ] AOT processing
- [ ] Native image support
- [ ] ProblemDetail support
- [ ] HTTP Interface clients
- [ ] RestClient
- [ ] Observability integration
- [ ] Virtual thread alignment
- [ ] Declarative HTTP services
- [ ] Testing improvements
- [ ] Security hardening
- [ ] Modernized baseline dependencies

### 25.7 Spring Framework 7.x
- [ ] Spring Framework 7 baseline
- [ ] Jakarta EE 11 alignment
- [ ] JSpecify null-safety adoption
- [ ] API versioning support
- [ ] HTTP service client improvements
- [ ] RestTemplate migration path
- [ ] Web MVC enhancements
- [ ] WebFlux enhancements
- [ ] Core container refinements
- [ ] Observability refinements
- [ ] AOT refinements
- [ ] Testing refinements
- [ ] Compatibility with modern Java releases

---

## 26. Spring Boot Evolution by Version

### 26.1 Spring Boot 1.x
- [ ] Auto-configuration
- [ ] Starter dependencies
- [ ] Embedded Tomcat
- [ ] Executable JAR
- [ ] SpringApplication
- [ ] Externalized configuration
- [ ] Profiles
- [ ] Actuator
- [ ] Boot CLI
- [ ] DevTools
- [ ] Initial production-ready model

### 26.2 Spring Boot 2.x
- [ ] Spring Framework 5 baseline
- [ ] Java 8 baseline
- [ ] WebFlux support
- [ ] Reactive auto-configuration
- [ ] Micrometer metrics
- [ ] Actuator endpoint model redesign
- [ ] Configuration properties binder redesign
- [ ] Gradle plugin improvements
- [ ] Data integrations update
- [ ] Security auto-configuration changes
- [ ] Buildpacks support
- [ ] Layered JAR support
- [ ] Config Data API
- [ ] Kubernetes probe support
- [ ] Graceful shutdown

### 26.3 Spring Boot 3.x
- [ ] Java 17 baseline
- [ ] Spring Framework 6 baseline
- [ ] Jakarta EE namespace
- [ ] GraalVM native image support
- [ ] AOT engine
- [ ] ProblemDetail support
- [ ] Micrometer Observation
- [ ] Micrometer Tracing
- [ ] Actuator observability improvements
- [ ] Docker Compose support
- [ ] Service connections
- [ ] SSL bundles
- [ ] Virtual threads support
- [ ] CRaC support
- [ ] Testcontainers integration
- [ ] Modernized dependency stack

### 26.4 Spring Boot 4.0
- [ ] Spring Framework 7 baseline
- [ ] Modularized Boot codebase
- [ ] Smaller focused artifacts
- [ ] Jakarta EE 11 alignment
- [ ] JSpecify null-safety
- [ ] Java 25 support
- [ ] Java 17 compatibility
- [ ] API versioning support
- [ ] HTTP Service Clients support
- [ ] Dependency upgrades
- [ ] Starter restructuring
- [ ] Migration from Boot 3.x
- [ ] Observability refinements
- [ ] Testing refinements

### 26.5 Spring Boot 4.1
- [ ] Spring Boot 4.1 baseline
- [ ] Spring Framework 7.0.8+ baseline
- [ ] Java 17 minimum
- [ ] Java 26 compatibility
- [ ] Dependency upgrades
- [ ] Bug fixes from 4.0.x
- [ ] Documentation improvements
- [ ] Feature improvements from 4.1 milestones
- [ ] OpenTelemetry improvements
- [ ] Spring gRPC support area
- [ ] Log4j file rotation support area
- [ ] AMQP improvements area
- [ ] Spring Batch integration updates area

---

## 27. Progressive Study Path

### 27.1 Phase 1 - Spring Core Basics
- [ ] IoC
- [ ] DI
- [ ] Bean
- [ ] ApplicationContext
- [ ] Component scanning
- [ ] Java configuration
- [ ] Bean scope
- [ ] Bean lifecycle
- [ ] Profiles
- [ ] Properties
- [ ] Basic validation
- [ ] Basic testing

### 27.2 Phase 2 - Spring Boot Basics
- [ ] `@SpringBootApplication`
- [ ] Auto-configuration
- [ ] Starters
- [ ] Embedded server
- [ ] Application properties
- [ ] YAML
- [ ] ConfigurationProperties
- [ ] Profiles
- [ ] Logging
- [ ] DevTools
- [ ] Packaging
- [ ] Executable JAR

### 27.3 Phase 3 - Web MVC and REST
- [ ] DispatcherServlet
- [ ] Controller
- [ ] Request mapping
- [ ] Request body
- [ ] ResponseEntity
- [ ] Validation
- [ ] Exception handling
- [ ] ProblemDetail
- [ ] REST design
- [ ] OpenAPI
- [ ] API versioning
- [ ] MockMvc testing

### 27.4 Phase 4 - Data and Transactions
- [ ] JDBC
- [ ] DataSource
- [ ] HikariCP
- [ ] Transaction management
- [ ] JPA
- [ ] Hibernate
- [ ] Spring Data JPA
- [ ] Query methods
- [ ] Pagination
- [ ] Specifications
- [ ] Flyway
- [ ] Testcontainers

### 27.5 Phase 5 - Security
- [ ] SecurityFilterChain
- [ ] Authentication
- [ ] Authorization
- [ ] PasswordEncoder
- [ ] CSRF
- [ ] CORS
- [ ] Stateless JWT
- [ ] OAuth2 Login
- [ ] OAuth2 Resource Server
- [ ] Method Security
- [ ] Security testing

### 27.6 Phase 6 - Production Readiness
- [ ] Actuator
- [ ] Health
- [ ] Readiness
- [ ] Liveness
- [ ] Metrics
- [ ] Logs
- [ ] Tracing
- [ ] OpenTelemetry
- [ ] Graceful shutdown
- [ ] Docker image
- [ ] Kubernetes probes
- [ ] Resource tuning

### 27.7 Phase 7 - Async, Caching, and Messaging
- [ ] `@Async`
- [ ] `@Scheduled`
- [ ] Cache abstraction
- [ ] Redis cache
- [ ] Spring events
- [ ] Kafka
- [ ] RabbitMQ
- [ ] Spring Cloud Stream
- [ ] Outbox pattern
- [ ] Idempotent consumer
- [ ] Retry
- [ ] DLQ

### 27.8 Phase 8 - Reactive and Modern Concurrency
- [ ] Reactor
- [ ] Mono
- [ ] Flux
- [ ] WebFlux
- [ ] WebClient
- [ ] R2DBC
- [ ] Reactive security
- [ ] Backpressure
- [ ] Virtual threads
- [ ] MVC + virtual threads
- [ ] Reactive vs blocking decision

### 27.9 Phase 9 - Spring Cloud
- [ ] Config Server
- [ ] Gateway
- [ ] Service discovery
- [ ] OpenFeign
- [ ] CircuitBreaker
- [ ] Retry
- [ ] RateLimiter
- [ ] Distributed tracing
- [ ] Contract testing
- [ ] Kubernetes integration

### 27.10 Phase 10 - Advanced Topics and Internals
- [ ] Auto-configuration custom
- [ ] Custom starter
- [ ] BeanPostProcessor
- [ ] BeanFactoryPostProcessor
- [ ] ImportSelector
- [ ] FactoryBean
- [ ] Proxy internals
- [ ] AOP internals
- [ ] RuntimeHints
- [ ] AOT
- [ ] Native image
- [ ] Performance profiling

### 27.11 Phase 11 - Modern Migrations
- [ ] Boot 2 to 3
- [ ] Boot 3 to 4
- [ ] Spring 5 to 6
- [ ] Spring 6 to 7
- [ ] `javax` to `jakarta`
- [ ] RestTemplate to RestClient
- [ ] RestTemplate to HTTP Interface
- [ ] Sleuth to Micrometer Tracing
- [ ] Legacy security config to SecurityFilterChain
- [ ] XML config to Java config

---

## 28. Consolidation Projects

### 28.1 Project 1 - Spring Core Lab
- [ ] Manual container
- [ ] Bean registration
- [ ] Constructor injection
- [ ] Qualifier
- [ ] Profile
- [ ] Bean lifecycle
- [ ] BeanPostProcessor
- [ ] Event listener
- [ ] Unit test

### 28.2 Project 2 - Spring Boot REST API
- [ ] Controller
- [ ] DTO
- [ ] Validation
- [ ] Service layer
- [ ] In-memory repository
- [ ] Exception handler
- [ ] ProblemDetail
- [ ] OpenAPI
- [ ] Actuator
- [ ] MockMvc test

### 28.3 Project 3 - CRUD with JPA
- [ ] PostgreSQL
- [ ] Flyway
- [ ] Entity
- [ ] Repository
- [ ] Service transaction
- [ ] Pagination
- [ ] Sorting
- [ ] Specification
- [ ] DTO mapper
- [ ] Testcontainers
- [ ] N+1 query check

### 28.4 Project 4 - Secure API
- [ ] Spring Security
- [ ] Stateless authentication
- [ ] JWT
- [ ] Resource Server
- [ ] Role authorization
- [ ] Method Security
- [ ] CSRF strategy
- [ ] CORS config
- [ ] Security tests
- [ ] OpenAPI security scheme

### 28.5 Project 5 - Production-Ready Microservice
- [ ] Actuator
- [ ] Health groups
- [ ] Metrics
- [ ] Prometheus
- [ ] OpenTelemetry
- [ ] JSON logging
- [ ] Correlation ID
- [ ] Docker image
- [ ] Kubernetes manifests
- [ ] Graceful shutdown
- [ ] Resource limits

### 28.6 Project 6 - Messaging Service
- [ ] Kafka producer
- [ ] Kafka consumer
- [ ] DTO event
- [ ] Schema versioning
- [ ] Retry topic
- [ ] Dead letter topic
- [ ] Idempotent consumer
- [ ] Outbox pattern
- [ ] Metrics
- [ ] Testcontainers Kafka

### 28.7 Project 7 - Reactive API
- [ ] WebFlux
- [ ] Mono
- [ ] Flux
- [ ] WebClient
- [ ] R2DBC
- [ ] Reactive validation
- [ ] Reactive error handling
- [ ] Backpressure test
- [ ] StepVerifier
- [ ] WebTestClient

### 28.8 Project 8 - Custom Spring Boot Starter
- [ ] Auto-configuration
- [ ] Starter module
- [ ] Configuration properties
- [ ] Conditional beans
- [ ] Runtime hints
- [ ] Actuator endpoint
- [ ] Health indicator
- [ ] Metrics binder
- [ ] Auto-configuration tests
- [ ] Documentation metadata

### 28.9 Project 9 - Native Image Lab
- [ ] AOT build
- [ ] GraalVM native image
- [ ] RuntimeHints
- [ ] Reflection hints
- [ ] Native tests
- [ ] Startup benchmark
- [ ] Memory benchmark
- [ ] Container native image
- [ ] Compatibility report

### 28.10 Project 10 - Modular Monolith
- [ ] Spring Modulith
- [ ] Module boundaries
- [ ] Domain events
- [ ] Application events
- [ ] Event publication registry
- [ ] Module integration test
- [ ] Architecture verification
- [ ] Documentation generation
- [ ] Migration path to microservices

---

## 29. Competency Checklist

### 29.1 Junior Spring Level
- [ ] Create a Spring Boot project
- [ ] Use main starters
- [ ] Write REST controllers
- [ ] Validate requests
- [ ] Handle errors
- [ ] Use properties
- [ ] Use profiles
- [ ] Write services
- [ ] Write basic repositories
- [ ] Write basic tests

### 29.2 Mid-Level Spring
- [ ] Understand auto-configuration
- [ ] Configure JWT security
- [ ] Use Spring Data JPA well
- [ ] Manage transactions
- [ ] Avoid N+1 queries
- [ ] Use Flyway/Liquibase
- [ ] Use Actuator
- [ ] Export metrics
- [ ] Write integration tests
- [ ] Use Testcontainers
- [ ] Manage basic Docker/Kubernetes

### 29.3 Senior Spring Level
- [ ] Design modular architecture
- [ ] Create custom starters
- [ ] Diagnose slow startup
- [ ] Diagnose proxy/AOP issues
- [ ] Diagnose transactional issues
- [ ] Diagnose security filter chain issues
- [ ] Design versioned APIs
- [ ] Design complete observability
- [ ] Manage Boot 2 -> 3 -> 4 migration
- [ ] Optimize JVM/container performance
- [ ] Decide between MVC virtual threads and WebFlux

### 29.4 Advanced/Platform Level
- [ ] Write library auto-configuration
- [ ] Write RuntimeHints
- [ ] Support GraalVM native image
- [ ] Extend Actuator
- [ ] Extend Micrometer
- [ ] Extend Spring Security
- [ ] Use BeanPostProcessor correctly
- [ ] Use ImportSelector correctly
- [ ] Use FactoryBean correctly
- [ ] Analyze Spring internals
- [ ] Contribute to Spring-based libraries
