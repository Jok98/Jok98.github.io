# System Design and Software Architecture Roadmap — Fundamentals to Advanced

## 1. Prerequisites

### 1.1 Software engineering fundamentals
- [ ] Programming fundamentals
- [ ] Object-oriented programming
- [ ] Functional programming basics
- [ ] Data structures
- [ ] Algorithms
- [ ] Complexity analysis
- [ ] Design patterns
- [ ] Refactoring
- [ ] Testing
- [ ] Debugging
- [ ] Code review
- [ ] Version control
- [ ] CI/CD basics
- [ ] API design basics
- [ ] Database basics
- [ ] Networking basics
- [ ] Operating system basics
- [ ] Cloud basics

### 1.2 Backend fundamentals
- [ ] HTTP
- [ ] REST
- [ ] gRPC
- [ ] GraphQL
- [ ] Authentication
- [ ] Authorization
- [ ] SQL databases
- [ ] NoSQL databases
- [ ] Caching
- [ ] Message queues
- [ ] Background jobs
- [ ] File storage
- [ ] Search engines
- [ ] Observability
- [ ] Deployment
- [ ] Containers

### 1.3 Infrastructure fundamentals
- [ ] Linux
- [ ] Processes
- [ ] Threads
- [ ] Sockets
- [ ] DNS
- [ ] TCP
- [ ] UDP
- [ ] TLS
- [ ] Load balancers
- [ ] Reverse proxies
- [ ] CDN
- [ ] Firewalls
- [ ] Kubernetes
- [ ] Cloud networking
- [ ] Object storage
- [ ] Monitoring
- [ ] Logging

### 1.4 Data fundamentals
- [ ] Relational modeling
- [ ] SQL
- [ ] Indexing
- [ ] Transactions
- [ ] Isolation levels
- [ ] Replication
- [ ] Sharding
- [ ] Document databases
- [ ] Key-value stores
- [ ] Wide-column databases
- [ ] Graph databases
- [ ] Search indexes
- [ ] Time-series databases
- [ ] Data warehouses
- [ ] Data lakes
- [ ] Data pipelines

### 1.5 Communication fundamentals
- [ ] Technical writing
- [ ] Diagramming
- [ ] Requirements clarification
- [ ] Trade-off explanation
- [ ] Decision documentation
- [ ] Stakeholder communication
- [ ] Risk communication
- [ ] Incident communication
- [ ] Architecture review
- [ ] Proposal writing
- [ ] Design document writing

---

## 2. Architecture Thinking

### 2.1 Architecture fundamentals
- [ ] Software architecture
- [ ] System architecture
- [ ] Enterprise architecture
- [ ] Solution architecture
- [ ] Technical architecture
- [ ] Application architecture
- [ ] Data architecture
- [ ] Infrastructure architecture
- [ ] Security architecture
- [ ] Integration architecture
- [ ] Deployment architecture
- [ ] Runtime architecture
- [ ] Logical architecture
- [ ] Physical architecture

### 2.2 Architectural drivers
- [ ] Functional requirements
- [ ] Quality attributes
- [ ] Constraints
- [ ] Business goals
- [ ] Technical goals
- [ ] Team constraints
- [ ] Budget constraints
- [ ] Timeline constraints
- [ ] Compliance constraints
- [ ] Security constraints
- [ ] Operational constraints
- [ ] Existing system constraints
- [ ] Vendor constraints
- [ ] Organizational constraints

### 2.3 Quality attributes
- [ ] Scalability
- [ ] Availability
- [ ] Reliability
- [ ] Maintainability
- [ ] Modifiability
- [ ] Performance
- [ ] Latency
- [ ] Throughput
- [ ] Security
- [ ] Privacy
- [ ] Usability
- [ ] Testability
- [ ] Observability
- [ ] Portability
- [ ] Deployability
- [ ] Operability
- [ ] Cost efficiency
- [ ] Sustainability
- [ ] Resilience

### 2.4 Architectural trade-offs
- [ ] Consistency vs availability
- [ ] Latency vs durability
- [ ] Throughput vs latency
- [ ] Simplicity vs flexibility
- [ ] Modularity vs performance
- [ ] Coupling vs duplication
- [ ] Build vs buy
- [ ] Monolith vs microservices
- [ ] SQL vs NoSQL
- [ ] Sync vs async communication
- [ ] Strong consistency vs eventual consistency
- [ ] Operational complexity vs developer velocity
- [ ] Cost vs reliability
- [ ] Security vs usability

### 2.5 Architecture decision-making
- [ ] Problem framing
- [ ] Context analysis
- [ ] Option generation
- [ ] Trade-off analysis
- [ ] Risk analysis
- [ ] Cost analysis
- [ ] Proof of concept
- [ ] Decision criteria
- [ ] Decision record
- [ ] Decision review
- [ ] Decision reversal
- [ ] Technical debt tracking
- [ ] Migration path
- [ ] Exit strategy

### 2.6 Architectural thinking skills
- [ ] Abstraction
- [ ] Decomposition
- [ ] Encapsulation
- [ ] Separation of concerns
- [ ] Systems thinking
- [ ] Failure thinking
- [ ] Evolutionary thinking
- [ ] Constraints thinking
- [ ] Operational thinking
- [ ] Security thinking
- [ ] Data thinking
- [ ] Cost thinking
- [ ] Product thinking
- [ ] Organizational thinking

---

## 3. Requirements and Constraints

### 3.1 Functional requirements
- [ ] Core use cases
- [ ] User flows
- [ ] Business workflows
- [ ] Admin workflows
- [ ] API capabilities
- [ ] Data operations
- [ ] Search capabilities
- [ ] Reporting capabilities
- [ ] Notification capabilities
- [ ] Integration capabilities
- [ ] Real-time capabilities
- [ ] Batch capabilities
- [ ] Audit capabilities
- [ ] Configuration capabilities

### 3.2 Non-functional requirements
- [ ] Latency targets
- [ ] Throughput targets
- [ ] Availability targets
- [ ] Durability targets
- [ ] Consistency requirements
- [ ] Security requirements
- [ ] Privacy requirements
- [ ] Compliance requirements
- [ ] Scalability requirements
- [ ] Maintainability requirements
- [ ] Observability requirements
- [ ] Disaster recovery requirements
- [ ] Cost requirements
- [ ] Sustainability requirements

### 3.3 Capacity requirements
- [ ] Daily active users
- [ ] Monthly active users
- [ ] Concurrent users
- [ ] Requests per second
- [ ] Peak requests per second
- [ ] Read/write ratio
- [ ] Data size
- [ ] Data growth rate
- [ ] Storage retention
- [ ] Cache size
- [ ] Bandwidth usage
- [ ] Message volume
- [ ] Background job volume
- [ ] Search query volume

### 3.4 Availability and recovery requirements
- [ ] SLA
- [ ] SLO
- [ ] SLI
- [ ] Error budget
- [ ] Uptime target
- [ ] RPO
- [ ] RTO
- [ ] Backup frequency
- [ ] Recovery workflow
- [ ] Failover requirement
- [ ] Multi-region requirement
- [ ] Data loss tolerance
- [ ] Degraded mode behavior
- [ ] Maintenance window

### 3.5 Security and compliance requirements
- [ ] Authentication requirement
- [ ] Authorization requirement
- [ ] Encryption requirement
- [ ] Audit logging requirement
- [ ] Data residency requirement
- [ ] PII handling requirement
- [ ] Data retention requirement
- [ ] Regulatory requirement
- [ ] Access control requirement
- [ ] Secret management requirement
- [ ] Threat model requirement
- [ ] Vulnerability management requirement
- [ ] Incident response requirement

### 3.6 Constraints
- [ ] Existing technology stack
- [ ] Existing data model
- [ ] Existing team skills
- [ ] Existing infrastructure
- [ ] Legacy dependencies
- [ ] Vendor lock-in
- [ ] Budget limit
- [ ] Time limit
- [ ] Regulatory limit
- [ ] Organizational boundary
- [ ] Network boundary
- [ ] Deployment boundary
- [ ] Hardware boundary
- [ ] Operational maturity

---

## 4. System Design Interview Method

### 4.1 Problem clarification
- [ ] Identify users
- [ ] Identify use cases
- [ ] Identify input data
- [ ] Identify output data
- [ ] Identify read paths
- [ ] Identify write paths
- [ ] Identify scale assumptions
- [ ] Identify latency requirements
- [ ] Identify availability requirements
- [ ] Identify consistency requirements
- [ ] Identify security requirements
- [ ] Identify out-of-scope items
- [ ] Identify edge cases

### 4.2 Back-of-the-envelope estimation
- [ ] User count estimation
- [ ] Request rate estimation
- [ ] Peak traffic estimation
- [ ] Storage estimation
- [ ] Bandwidth estimation
- [ ] Cache estimation
- [ ] Database QPS estimation
- [ ] Message queue throughput estimation
- [ ] Partition count estimation
- [ ] Machine count estimation
- [ ] Cost estimation
- [ ] Growth estimation

### 4.3 High-level design
- [ ] Client
- [ ] API gateway
- [ ] Load balancer
- [ ] Application service
- [ ] Database
- [ ] Cache
- [ ] Queue
- [ ] Object storage
- [ ] Search index
- [ ] CDN
- [ ] Background workers
- [ ] Notification service
- [ ] Monitoring
- [ ] External services

### 4.4 Data model design
- [ ] Entity identification
- [ ] Relationship identification
- [ ] Read model
- [ ] Write model
- [ ] Primary key
- [ ] Secondary index
- [ ] Partition key
- [ ] Sort key
- [ ] Schema design
- [ ] Denormalization
- [ ] Data retention
- [ ] Audit data
- [ ] Event data
- [ ] Metadata

### 4.5 API design
- [ ] REST endpoints
- [ ] Request schema
- [ ] Response schema
- [ ] Error schema
- [ ] Pagination
- [ ] Filtering
- [ ] Sorting
- [ ] Idempotency
- [ ] Authentication
- [ ] Authorization
- [ ] Rate limits
- [ ] Versioning
- [ ] Webhooks
- [ ] Streaming API

### 4.6 Deep dives
- [ ] Scalability bottleneck
- [ ] Database bottleneck
- [ ] Cache strategy
- [ ] Queue strategy
- [ ] Consistency strategy
- [ ] Failure handling
- [ ] Rate limiting
- [ ] Search design
- [ ] Realtime design
- [ ] Security design
- [ ] Observability design
- [ ] Deployment design
- [ ] Cost optimization

### 4.7 Trade-off communication
- [ ] State assumptions
- [ ] Explain chosen architecture
- [ ] Explain rejected alternatives
- [ ] Explain trade-offs
- [ ] Explain failure modes
- [ ] Explain scaling path
- [ ] Explain consistency model
- [ ] Explain operational complexity
- [ ] Explain cost impact
- [ ] Explain future evolution
- [ ] Explain risks
- [ ] Explain mitigations

---

## 5. Core Architectural Styles

### 5.1 Layered architecture
- [ ] Presentation layer
- [ ] Application layer
- [ ] Domain layer
- [ ] Infrastructure layer
- [ ] Persistence layer
- [ ] Dependency direction
- [ ] Layer isolation
- [ ] Layer leakage
- [ ] DTO boundary
- [ ] Service layer
- [ ] Repository layer
- [ ] Transaction boundary
- [ ] Testing by layer

### 5.2 Clean architecture
- [ ] Entities
- [ ] Use cases
- [ ] Interface adapters
- [ ] Frameworks and drivers
- [ ] Dependency rule
- [ ] Inner circle
- [ ] Outer circle
- [ ] Input port
- [ ] Output port
- [ ] Presenter
- [ ] Gateway
- [ ] Controller
- [ ] Dependency inversion
- [ ] Framework independence

### 5.3 Hexagonal architecture
- [ ] Ports and adapters
- [ ] Primary port
- [ ] Secondary port
- [ ] Driving adapter
- [ ] Driven adapter
- [ ] Domain core
- [ ] Application service
- [ ] Infrastructure adapter
- [ ] Persistence adapter
- [ ] Messaging adapter
- [ ] HTTP adapter
- [ ] Test adapter
- [ ] Adapter replacement
- [ ] Technology independence

### 5.4 Onion architecture
- [ ] Domain model
- [ ] Domain services
- [ ] Application services
- [ ] Infrastructure
- [ ] UI layer
- [ ] Dependency direction
- [ ] Domain isolation
- [ ] Repository interfaces
- [ ] Cross-cutting concerns
- [ ] Testability
- [ ] Persistence ignorance

### 5.5 Domain-driven design architecture
- [ ] Domain
- [ ] Subdomain
- [ ] Core domain
- [ ] Supporting domain
- [ ] Generic domain
- [ ] Bounded context
- [ ] Ubiquitous language
- [ ] Entity
- [ ] Value object
- [ ] Aggregate
- [ ] Aggregate root
- [ ] Domain service
- [ ] Domain event
- [ ] Repository
- [ ] Factory
- [ ] Anti-corruption layer

### 5.6 Event-driven architecture
- [ ] Event
- [ ] Producer
- [ ] Consumer
- [ ] Message broker
- [ ] Event stream
- [ ] Event notification
- [ ] Event-carried state transfer
- [ ] Event sourcing
- [ ] CQRS
- [ ] Saga
- [ ] Choreography
- [ ] Orchestration
- [ ] Idempotent consumer
- [ ] Eventual consistency
- [ ] Dead letter queue

### 5.7 Microservices architecture
- [ ] Service boundary
- [ ] Database per service
- [ ] API contract
- [ ] Independent deployment
- [ ] Team ownership
- [ ] Service discovery
- [ ] API gateway
- [ ] Distributed tracing
- [ ] Circuit breaker
- [ ] Saga
- [ ] Service mesh
- [ ] Observability
- [ ] Operational maturity
- [ ] Distributed data management

### 5.8 Modular monolith
- [ ] Module boundary
- [ ] Internal API
- [ ] Module ownership
- [ ] Module dependency rule
- [ ] Shared database
- [ ] Internal events
- [ ] Compile-time boundaries
- [ ] Runtime deployment unit
- [ ] Refactoring path
- [ ] Microservice extraction path
- [ ] Architecture tests
- [ ] Package-by-feature
- [ ] Modulith documentation

### 5.9 Serverless architecture
- [ ] Function as a Service
- [ ] Event trigger
- [ ] Managed runtime
- [ ] Cold start
- [ ] Stateless function
- [ ] API gateway integration
- [ ] Event bus integration
- [ ] Managed database
- [ ] Managed queue
- [ ] Step functions
- [ ] Cost per execution
- [ ] Timeout limit
- [ ] Vendor lock-in
- [ ] Observability constraints

### 5.10 Space-based architecture
- [ ] In-memory data grid
- [ ] Distributed cache
- [ ] Processing unit
- [ ] Data partitioning
- [ ] Tuple space
- [ ] Replication
- [ ] Elastic scaling
- [ ] Low-latency processing
- [ ] State locality
- [ ] Complexity trade-offs

---

## 6. Architectural Patterns

### 6.1 Structural patterns
- [ ] Layered pattern
- [ ] Client-server pattern
- [ ] Pipe-and-filter pattern
- [ ] Broker pattern
- [ ] Peer-to-peer pattern
- [ ] Blackboard pattern
- [ ] Model-view-controller
- [ ] Model-view-viewmodel
- [ ] Microkernel pattern
- [ ] Plugin architecture
- [ ] Sidecar pattern
- [ ] Ambassador pattern
- [ ] Adapter pattern
- [ ] Facade pattern

### 6.2 Distributed system patterns
- [ ] Service registry
- [ ] API gateway
- [ ] Backend for frontend
- [ ] Circuit breaker
- [ ] Bulkhead
- [ ] Timeout
- [ ] Retry with backoff
- [ ] Rate limiter
- [ ] Load shedding
- [ ] Health check
- [ ] Leader election
- [ ] Lease
- [ ] Sharding
- [ ] Replication
- [ ] Saga
- [ ] Outbox
- [ ] Inbox

### 6.3 Data patterns
- [ ] Repository
- [ ] Unit of Work
- [ ] Data Mapper
- [ ] Active Record
- [ ] CQRS
- [ ] Event sourcing
- [ ] Materialized view
- [ ] Read model
- [ ] Write model
- [ ] Outbox pattern
- [ ] Inbox pattern
- [ ] Change Data Capture
- [ ] Strangler fig migration
- [ ] Data mesh
- [ ] Data lakehouse

### 6.4 Integration patterns
- [ ] Request-response
- [ ] Publish-subscribe
- [ ] Message queue
- [ ] Message routing
- [ ] Message transformation
- [ ] Message enrichment
- [ ] Claim check
- [ ] Competing consumers
- [ ] Idempotent receiver
- [ ] Dead letter channel
- [ ] Retry channel
- [ ] Scatter-gather
- [ ] Aggregator
- [ ] Splitter

### 6.5 Cloud patterns
- [ ] Autoscaling
- [ ] Immutable infrastructure
- [ ] Blue-green deployment
- [ ] Canary deployment
- [ ] Rolling deployment
- [ ] Externalized configuration
- [ ] Managed service pattern
- [ ] Sidecar
- [ ] Service mesh
- [ ] Multi-region active-passive
- [ ] Multi-region active-active
- [ ] Queue-based load leveling
- [ ] Static content hosting
- [ ] CDN edge caching

### 6.6 Reliability patterns
- [ ] Timeout
- [ ] Retry
- [ ] Exponential backoff
- [ ] Jitter
- [ ] Circuit breaker
- [ ] Bulkhead
- [ ] Fallback
- [ ] Graceful degradation
- [ ] Load shedding
- [ ] Backpressure
- [ ] Idempotency
- [ ] Deduplication
- [ ] Health checks
- [ ] Checkpointing
- [ ] Failover
- [ ] Disaster recovery

---

## 7. Distributed Systems Fundamentals

### 7.1 Distributed system concepts
- [ ] Node
- [ ] Cluster
- [ ] Network
- [ ] Message passing
- [ ] Partial failure
- [ ] Network partition
- [ ] Latency
- [ ] Clock skew
- [ ] Concurrency
- [ ] Replication
- [ ] Coordination
- [ ] Consensus
- [ ] Membership
- [ ] Failure detection
- [ ] Split brain

### 7.2 CAP and PACELC
- [ ] Consistency
- [ ] Availability
- [ ] Partition tolerance
- [ ] CAP theorem
- [ ] CP system
- [ ] AP system
- [ ] CA limitation
- [ ] PACELC theorem
- [ ] Else latency
- [ ] Else consistency
- [ ] Real-world trade-offs
- [ ] Misinterpretations
- [ ] Design implications

### 7.3 Consistency models
- [ ] Strong consistency
- [ ] Linearizability
- [ ] Sequential consistency
- [ ] Causal consistency
- [ ] Eventual consistency
- [ ] Read-your-writes consistency
- [ ] Monotonic reads
- [ ] Monotonic writes
- [ ] Session consistency
- [ ] Bounded staleness
- [ ] External consistency
- [ ] Snapshot isolation
- [ ] Serializable isolation

### 7.4 Time and ordering
- [ ] Physical clock
- [ ] Logical clock
- [ ] Lamport clock
- [ ] Vector clock
- [ ] Hybrid logical clock
- [ ] Clock synchronization
- [ ] NTP
- [ ] Clock drift
- [ ] Happens-before relation
- [ ] Total ordering
- [ ] Partial ordering
- [ ] Causal ordering
- [ ] Event ordering

### 7.5 Consensus
- [ ] Leader election
- [ ] Quorum
- [ ] Majority
- [ ] Paxos
- [ ] Raft
- [ ] Multi-Paxos
- [ ] Log replication
- [ ] Commit index
- [ ] Term
- [ ] View change
- [ ] Membership changes
- [ ] Split-brain prevention
- [ ] Consensus latency
- [ ] Consensus failure modes

### 7.6 Replication
- [ ] Primary-replica replication
- [ ] Multi-primary replication
- [ ] Leaderless replication
- [ ] Synchronous replication
- [ ] Asynchronous replication
- [ ] Semi-synchronous replication
- [ ] Quorum replication
- [ ] Chain replication
- [ ] Log shipping
- [ ] Conflict resolution
- [ ] Replication lag
- [ ] Read replicas
- [ ] Write replicas
- [ ] Failover

### 7.7 Partitioning
- [ ] Horizontal partitioning
- [ ] Vertical partitioning
- [ ] Sharding
- [ ] Hash partitioning
- [ ] Range partitioning
- [ ] Directory partitioning
- [ ] Consistent hashing
- [ ] Rendezvous hashing
- [ ] Hot partition
- [ ] Rebalancing
- [ ] Resharding
- [ ] Global secondary index
- [ ] Cross-shard query
- [ ] Cross-shard transaction

### 7.8 Distributed failure modes
- [ ] Node crash
- [ ] Node pause
- [ ] Network partition
- [ ] Packet loss
- [ ] Message duplication
- [ ] Message reordering
- [ ] Message delay
- [ ] Clock drift
- [ ] Disk failure
- [ ] Split brain
- [ ] Thundering herd
- [ ] Retry storm
- [ ] Cascading failure
- [ ] Byzantine failure awareness

---

## 8. Scalability

### 8.1 Scalability fundamentals
- [ ] Vertical scaling
- [ ] Horizontal scaling
- [ ] Elastic scaling
- [ ] Manual scaling
- [ ] Autoscaling
- [ ] Stateless scaling
- [ ] Stateful scaling
- [ ] Scale-up
- [ ] Scale-out
- [ ] Scale-down
- [ ] Bottleneck
- [ ] Saturation
- [ ] Headroom
- [ ] Capacity limit

### 8.2 Application scaling
- [ ] Stateless service
- [ ] Stateful service
- [ ] Load balancing
- [ ] Connection pooling
- [ ] Thread pools
- [ ] Worker pools
- [ ] Async processing
- [ ] Queue-based buffering
- [ ] Caching
- [ ] Read replicas
- [ ] Partitioning
- [ ] Rate limiting
- [ ] Backpressure
- [ ] Load shedding

### 8.3 Database scaling
- [ ] Index optimization
- [ ] Query optimization
- [ ] Connection pool tuning
- [ ] Read replicas
- [ ] Write scaling
- [ ] Sharding
- [ ] Denormalization
- [ ] Materialized views
- [ ] CQRS
- [ ] Caching
- [ ] Partition pruning
- [ ] Archive old data
- [ ] Database-per-tenant
- [ ] Multi-region replication

### 8.4 Cache scaling
- [ ] Local cache
- [ ] Distributed cache
- [ ] CDN cache
- [ ] Cache partitioning
- [ ] Cache replication
- [ ] Cache eviction
- [ ] Cache stampede protection
- [ ] Cache warming
- [ ] Cache invalidation
- [ ] Hot key mitigation
- [ ] TTL tuning
- [ ] Cache consistency
- [ ] Multi-level cache

### 8.5 Queue scaling
- [ ] Queue partitioning
- [ ] Consumer group
- [ ] Competing consumers
- [ ] Batch consumption
- [ ] Backpressure
- [ ] Retry policy
- [ ] Dead letter queue
- [ ] Message ordering
- [ ] Hot partition
- [ ] Lag monitoring
- [ ] Throughput scaling
- [ ] Worker autoscaling
- [ ] Poison message handling

### 8.6 Frontend and edge scaling
- [ ] CDN
- [ ] Static assets
- [ ] Edge caching
- [ ] Image optimization
- [ ] Compression
- [ ] HTTP/2
- [ ] HTTP/3
- [ ] Browser caching
- [ ] Service workers
- [ ] Static site generation
- [ ] Server-side rendering
- [ ] Incremental static regeneration
- [ ] Edge rendering

---

## 9. Performance Engineering

### 9.1 Performance fundamentals
- [ ] Latency
- [ ] Throughput
- [ ] Concurrency
- [ ] Utilization
- [ ] Saturation
- [ ] Bottleneck
- [ ] Queueing delay
- [ ] Tail latency
- [ ] Percentiles
- [ ] P50
- [ ] P90
- [ ] P95
- [ ] P99
- [ ] P999
- [ ] Service time
- [ ] Response time

### 9.2 Latency analysis
- [ ] DNS latency
- [ ] TCP connection latency
- [ ] TLS handshake latency
- [ ] Network round trip
- [ ] Load balancer latency
- [ ] Application latency
- [ ] Database latency
- [ ] Cache latency
- [ ] Queue latency
- [ ] Serialization latency
- [ ] Deserialization latency
- [ ] Garbage collection latency
- [ ] Disk latency
- [ ] Tail latency amplification

### 9.3 Performance optimization
- [ ] Reduce round trips
- [ ] Batch requests
- [ ] Cache reads
- [ ] Avoid N+1 queries
- [ ] Optimize indexes
- [ ] Use async I/O
- [ ] Compress responses
- [ ] Use CDN
- [ ] Precompute results
- [ ] Use materialized views
- [ ] Reduce payload size
- [ ] Tune connection pools
- [ ] Tune thread pools
- [ ] Profile hot paths

### 9.4 Load testing
- [ ] Smoke test
- [ ] Load test
- [ ] Stress test
- [ ] Spike test
- [ ] Soak test
- [ ] Breakpoint test
- [ ] Capacity test
- [ ] Concurrent user model
- [ ] Request rate model
- [ ] Think time
- [ ] Ramp-up
- [ ] Test data management
- [ ] Bottleneck identification
- [ ] Result interpretation

### 9.5 Capacity planning
- [ ] Current traffic
- [ ] Peak traffic
- [ ] Growth rate
- [ ] Traffic seasonality
- [ ] Resource utilization
- [ ] CPU headroom
- [ ] Memory headroom
- [ ] Disk headroom
- [ ] Network headroom
- [ ] Database headroom
- [ ] Cache headroom
- [ ] Queue headroom
- [ ] Cost projection
- [ ] Scaling trigger

### 9.6 Queueing theory awareness
- [ ] Arrival rate
- [ ] Service rate
- [ ] Queue length
- [ ] Utilization
- [ ] Little's Law
- [ ] M/M/1 queue awareness
- [ ] M/M/c queue awareness
- [ ] Queue saturation
- [ ] Tail latency
- [ ] Backpressure
- [ ] Load shedding
- [ ] Admission control

---

## 10. Reliability and Resilience

### 10.1 Reliability fundamentals
- [ ] Reliability
- [ ] Availability
- [ ] Durability
- [ ] Fault tolerance
- [ ] Resilience
- [ ] Failure mode
- [ ] Fault domain
- [ ] Blast radius
- [ ] Graceful degradation
- [ ] Recovery
- [ ] Error budget
- [ ] SLO
- [ ] SLI
- [ ] SLA

### 10.2 Failure handling
- [ ] Timeout
- [ ] Retry
- [ ] Retry with backoff
- [ ] Jitter
- [ ] Circuit breaker
- [ ] Bulkhead
- [ ] Fallback
- [ ] Load shedding
- [ ] Backpressure
- [ ] Graceful degradation
- [ ] Fail-fast
- [ ] Fail-safe
- [ ] Idempotency
- [ ] Deduplication

### 10.3 High availability
- [ ] Redundancy
- [ ] Active-passive
- [ ] Active-active
- [ ] Failover
- [ ] Health checks
- [ ] Leader election
- [ ] Quorum
- [ ] Multi-zone deployment
- [ ] Multi-region deployment
- [ ] No single point of failure
- [ ] Stateful failover
- [ ] Stateless failover
- [ ] Connection draining
- [ ] Rolling updates

### 10.4 Disaster recovery
- [ ] Backup
- [ ] Restore
- [ ] RPO
- [ ] RTO
- [ ] Disaster recovery plan
- [ ] Disaster recovery drill
- [ ] Cross-region backup
- [ ] Point-in-time recovery
- [ ] Cold standby
- [ ] Warm standby
- [ ] Hot standby
- [ ] Runbook
- [ ] Data validation after restore
- [ ] Failback

### 10.5 Chaos engineering
- [ ] Failure injection
- [ ] Latency injection
- [ ] Packet loss injection
- [ ] Dependency failure
- [ ] Instance termination
- [ ] Zone outage simulation
- [ ] Region outage simulation
- [ ] Game day
- [ ] Blast radius control
- [ ] Hypothesis
- [ ] Steady state
- [ ] Rollback plan
- [ ] Learning report

### 10.6 Incident response
- [ ] Detection
- [ ] Alerting
- [ ] Triage
- [ ] Severity classification
- [ ] Incident commander
- [ ] Communication channel
- [ ] Mitigation
- [ ] Rollback
- [ ] Hotfix
- [ ] Status page
- [ ] Timeline
- [ ] Postmortem
- [ ] Action items
- [ ] Regression prevention

---

## 11. Data Architecture

### 11.1 Data modeling
- [ ] Entity modeling
- [ ] Relationship modeling
- [ ] Normalization
- [ ] Denormalization
- [ ] Aggregate modeling
- [ ] Schema design
- [ ] Index design
- [ ] Partition key design
- [ ] Data lifecycle
- [ ] Data retention
- [ ] Audit data
- [ ] Temporal data
- [ ] Multi-tenant data
- [ ] Data ownership

### 11.2 Database selection
- [ ] Relational database
- [ ] Document database
- [ ] Key-value store
- [ ] Wide-column database
- [ ] Graph database
- [ ] Search engine
- [ ] Time-series database
- [ ] Data warehouse
- [ ] Object storage
- [ ] Vector database
- [ ] Embedded database
- [ ] NewSQL database
- [ ] Managed database
- [ ] Self-hosted database

### 11.3 Transactional architecture
- [ ] ACID
- [ ] Transaction boundary
- [ ] Isolation level
- [ ] Optimistic locking
- [ ] Pessimistic locking
- [ ] Idempotent write
- [ ] Compare-and-swap update
- [ ] Unique constraint
- [ ] Conflict detection
- [ ] Deadlock handling
- [ ] Retry strategy
- [ ] Transaction timeout
- [ ] Distributed transaction
- [ ] Saga alternative

### 11.4 Analytical architecture
- [ ] OLTP
- [ ] OLAP
- [ ] Data warehouse
- [ ] Data lake
- [ ] Lakehouse
- [ ] Star schema
- [ ] Fact table
- [ ] Dimension table
- [ ] ETL
- [ ] ELT
- [ ] Batch pipeline
- [ ] Streaming pipeline
- [ ] Data mart
- [ ] BI dashboard

### 11.5 Data consistency
- [ ] Strong consistency
- [ ] Eventual consistency
- [ ] Read-your-writes
- [ ] Monotonic reads
- [ ] Bounded staleness
- [ ] Conflict resolution
- [ ] Last write wins
- [ ] Version vector
- [ ] CRDT awareness
- [ ] Compensating action
- [ ] Reconciliation job
- [ ] Idempotent event processing
- [ ] Consistency verification

### 11.6 Data migration
- [ ] Schema migration
- [ ] Data migration
- [ ] Backfill
- [ ] Dual writes
- [ ] Shadow reads
- [ ] Expand-contract pattern
- [ ] Online migration
- [ ] Zero-downtime migration
- [ ] Change Data Capture
- [ ] Migration rollback
- [ ] Data validation
- [ ] Reconciliation
- [ ] Cutover
- [ ] Cleanup

### 11.7 Data governance
- [ ] Data ownership
- [ ] Data catalog
- [ ] Data lineage
- [ ] Data quality
- [ ] Data classification
- [ ] Data retention
- [ ] Data access control
- [ ] PII handling
- [ ] Data residency
- [ ] Compliance reporting
- [ ] Audit logging
- [ ] Data deletion
- [ ] Data anonymization
- [ ] Data masking

---

## 12. Caching Architecture

### 12.1 Cache fundamentals
- [ ] Cache
- [ ] Cache key
- [ ] Cache value
- [ ] Cache hit
- [ ] Cache miss
- [ ] Hit ratio
- [ ] TTL
- [ ] Expiration
- [ ] Eviction
- [ ] Invalidation
- [ ] Local cache
- [ ] Distributed cache
- [ ] CDN cache
- [ ] Application cache

### 12.2 Cache patterns
- [ ] Cache-aside
- [ ] Read-through
- [ ] Write-through
- [ ] Write-behind
- [ ] Refresh-ahead
- [ ] Write-around
- [ ] Negative caching
- [ ] Multi-level cache
- [ ] Near cache
- [ ] Request coalescing
- [ ] Cache warming
- [ ] Cache preloading
- [ ] Soft TTL
- [ ] Hard TTL

### 12.3 Cache invalidation
- [ ] TTL-based invalidation
- [ ] Event-based invalidation
- [ ] Manual invalidation
- [ ] Versioned cache key
- [ ] Cache tag
- [ ] Surrogate key
- [ ] Write invalidation
- [ ] Delete invalidation
- [ ] Bulk invalidation
- [ ] Distributed invalidation
- [ ] Stale data tolerance
- [ ] Cache consistency
- [ ] Race condition handling

### 12.4 Cache failure modes
- [ ] Cache stampede
- [ ] Cache penetration
- [ ] Cache avalanche
- [ ] Hot key
- [ ] Large value
- [ ] Eviction storm
- [ ] Stale data
- [ ] Inconsistent data
- [ ] Cache node failure
- [ ] Network partition
- [ ] Memory fragmentation
- [ ] Serialization mismatch
- [ ] Cache poisoning

### 12.5 Cache technologies
- [ ] In-process cache
- [ ] Redis
- [ ] Memcached
- [ ] Caffeine
- [ ] CDN cache
- [ ] Reverse proxy cache
- [ ] Browser cache
- [ ] Database buffer cache
- [ ] Search index cache
- [ ] Object storage cache
- [ ] Distributed cache cluster
- [ ] Managed cache service

---

## 13. Messaging and Event Streaming

### 13.1 Messaging fundamentals
- [ ] Message
- [ ] Producer
- [ ] Consumer
- [ ] Queue
- [ ] Topic
- [ ] Broker
- [ ] Exchange
- [ ] Routing key
- [ ] Partition
- [ ] Offset
- [ ] Acknowledgement
- [ ] Delivery guarantee
- [ ] Message ordering
- [ ] Backpressure

### 13.2 Message delivery guarantees
- [ ] At-most-once delivery
- [ ] At-least-once delivery
- [ ] Exactly-once semantics
- [ ] Duplicate messages
- [ ] Lost messages
- [ ] Poison messages
- [ ] Idempotent consumer
- [ ] Transactional producer
- [ ] Consumer offset commit
- [ ] Acknowledgement mode
- [ ] Retry policy
- [ ] Dead letter queue
- [ ] Reprocessing

### 13.3 Queue-based architecture
- [ ] Task queue
- [ ] Work queue
- [ ] Competing consumers
- [ ] Background jobs
- [ ] Delayed jobs
- [ ] Scheduled jobs
- [ ] Priority queue
- [ ] Retry queue
- [ ] Dead letter queue
- [ ] Worker pool
- [ ] Queue depth monitoring
- [ ] Queue autoscaling
- [ ] Queue draining

### 13.4 Event streaming architecture
- [ ] Event stream
- [ ] Append-only log
- [ ] Partitioned log
- [ ] Consumer group
- [ ] Offset
- [ ] Retention
- [ ] Replay
- [ ] Compaction
- [ ] Stream processing
- [ ] Windowing
- [ ] Exactly-once processing
- [ ] Schema registry
- [ ] Event versioning
- [ ] Event evolution

### 13.5 Event design
- [ ] Event name
- [ ] Event payload
- [ ] Event metadata
- [ ] Event ID
- [ ] Correlation ID
- [ ] Causation ID
- [ ] Timestamp
- [ ] Version
- [ ] Producer identity
- [ ] Tenant identity
- [ ] Trace context
- [ ] Schema
- [ ] Backward compatibility
- [ ] Forward compatibility

### 13.6 Messaging technologies
- [ ] Kafka
- [ ] RabbitMQ
- [ ] NATS
- [ ] Pulsar
- [ ] ActiveMQ
- [ ] Redis Streams
- [ ] AWS SQS
- [ ] AWS SNS
- [ ] Google Pub/Sub
- [ ] Azure Service Bus
- [ ] Azure Event Hubs
- [ ] CloudEvents
- [ ] Kafka Connect
- [ ] Debezium

---

## 14. API and Integration Architecture

### 14.1 API styles
- [ ] REST
- [ ] RPC
- [ ] gRPC
- [ ] GraphQL
- [ ] WebSocket API
- [ ] Server-Sent Events
- [ ] Webhook API
- [ ] Batch API
- [ ] Streaming API
- [ ] Async API
- [ ] Event API
- [ ] File-based integration
- [ ] Database integration
- [ ] Message-based integration

### 14.2 REST API design
- [ ] Resource modeling
- [ ] URI design
- [ ] HTTP method semantics
- [ ] Status code semantics
- [ ] Request schema
- [ ] Response schema
- [ ] Error schema
- [ ] Pagination
- [ ] Filtering
- [ ] Sorting
- [ ] Sparse fieldsets
- [ ] Idempotency
- [ ] Versioning
- [ ] Caching
- [ ] Rate limiting

### 14.3 gRPC architecture
- [ ] Protocol Buffers
- [ ] Service definition
- [ ] Unary RPC
- [ ] Server streaming
- [ ] Client streaming
- [ ] Bidirectional streaming
- [ ] Deadline
- [ ] Metadata
- [ ] Interceptors
- [ ] Status codes
- [ ] Load balancing
- [ ] Service discovery
- [ ] gRPC-Web
- [ ] Backward compatibility

### 14.4 GraphQL architecture
- [ ] Schema
- [ ] Query
- [ ] Mutation
- [ ] Subscription
- [ ] Resolver
- [ ] DataLoader
- [ ] N+1 prevention
- [ ] Federation
- [ ] Persisted queries
- [ ] Query complexity limit
- [ ] Depth limit
- [ ] Caching strategy
- [ ] Authorization
- [ ] Schema evolution

### 14.5 API gateway architecture
- [ ] Routing
- [ ] Authentication
- [ ] Authorization
- [ ] Rate limiting
- [ ] Quotas
- [ ] Request transformation
- [ ] Response transformation
- [ ] Protocol translation
- [ ] API key management
- [ ] Developer portal
- [ ] Analytics
- [ ] WAF integration
- [ ] Versioning
- [ ] Monetization

### 14.6 Integration patterns
- [ ] Synchronous integration
- [ ] Asynchronous integration
- [ ] Request-response
- [ ] Publish-subscribe
- [ ] Polling
- [ ] Webhooks
- [ ] File transfer
- [ ] CDC integration
- [ ] API composition
- [ ] Backend for frontend
- [ ] Anti-corruption layer
- [ ] Adapter
- [ ] Translator
- [ ] Canonical data model

---

## 15. Security Architecture

### 15.1 Security principles
- [ ] Least privilege
- [ ] Defense in depth
- [ ] Zero trust
- [ ] Secure by default
- [ ] Fail closed
- [ ] Complete mediation
- [ ] Separation of duties
- [ ] Minimize attack surface
- [ ] Secure configuration
- [ ] Secure communication
- [ ] Secure storage
- [ ] Auditability
- [ ] Privacy by design
- [ ] Threat modeling

### 15.2 Identity and access
- [ ] Authentication
- [ ] Authorization
- [ ] Identity provider
- [ ] Single sign-on
- [ ] OAuth 2.x
- [ ] OpenID Connect
- [ ] SAML
- [ ] LDAP
- [ ] WebAuthn
- [ ] Passkeys
- [ ] Multi-factor authentication
- [ ] Role-based access control
- [ ] Attribute-based access control
- [ ] Relationship-based access control

### 15.3 Application security architecture
- [ ] Input validation
- [ ] Output encoding
- [ ] SQL injection prevention
- [ ] XSS prevention
- [ ] CSRF prevention
- [ ] SSRF prevention
- [ ] Deserialization protection
- [ ] File upload protection
- [ ] Rate limiting
- [ ] Bot protection
- [ ] Secure error handling
- [ ] Secure logging
- [ ] Dependency security
- [ ] Supply chain security

### 15.4 Data security
- [ ] Encryption in transit
- [ ] Encryption at rest
- [ ] Field-level encryption
- [ ] Tokenization
- [ ] Masking
- [ ] Hashing
- [ ] Key management
- [ ] KMS
- [ ] Secret management
- [ ] Key rotation
- [ ] Data classification
- [ ] Data retention
- [ ] Data deletion
- [ ] Access auditing

### 15.5 Infrastructure security
- [ ] Network segmentation
- [ ] Firewall
- [ ] Security groups
- [ ] WAF
- [ ] DDoS protection
- [ ] Private networking
- [ ] Bastion host
- [ ] VPN
- [ ] mTLS
- [ ] Service mesh security
- [ ] Container security
- [ ] Kubernetes security
- [ ] Host hardening
- [ ] Vulnerability scanning

### 15.6 Security operations
- [ ] Threat detection
- [ ] Security monitoring
- [ ] SIEM
- [ ] Audit logging
- [ ] Alerting
- [ ] Incident response
- [ ] Forensics
- [ ] Patch management
- [ ] Vulnerability management
- [ ] Penetration testing
- [ ] Red teaming
- [ ] Security review
- [ ] Compliance evidence
- [ ] Risk register

---

## 16. Observability Architecture

### 16.1 Observability fundamentals
- [ ] Logs
- [ ] Metrics
- [ ] Traces
- [ ] Events
- [ ] Profiles
- [ ] Health checks
- [ ] Synthetic monitoring
- [ ] Real user monitoring
- [ ] Service level indicators
- [ ] Service level objectives
- [ ] Error budgets
- [ ] Dashboards
- [ ] Alerts
- [ ] Runbooks

### 16.2 Logging architecture
- [ ] Structured logs
- [ ] Log levels
- [ ] Correlation ID
- [ ] Request ID
- [ ] Trace ID
- [ ] Span ID
- [ ] Log aggregation
- [ ] Log indexing
- [ ] Log retention
- [ ] Log sampling
- [ ] Sensitive data redaction
- [ ] Audit logs
- [ ] Access logs
- [ ] Error logs

### 16.3 Metrics architecture
- [ ] Counter
- [ ] Gauge
- [ ] Histogram
- [ ] Summary
- [ ] RED metrics
- [ ] USE metrics
- [ ] Business metrics
- [ ] Infrastructure metrics
- [ ] Application metrics
- [ ] Database metrics
- [ ] Queue metrics
- [ ] Cache metrics
- [ ] Custom metrics
- [ ] Metric cardinality

### 16.4 Tracing architecture
- [ ] Distributed tracing
- [ ] Trace
- [ ] Span
- [ ] Parent span
- [ ] Trace context propagation
- [ ] Sampling
- [ ] Head-based sampling
- [ ] Tail-based sampling
- [ ] Baggage
- [ ] Service map
- [ ] Critical path
- [ ] Latency breakdown
- [ ] Dependency tracking
- [ ] Error tracing

### 16.5 Alerting architecture
- [ ] Symptom-based alert
- [ ] Cause-based alert
- [ ] SLO alert
- [ ] Burn-rate alert
- [ ] Availability alert
- [ ] Latency alert
- [ ] Error-rate alert
- [ ] Saturation alert
- [ ] Security alert
- [ ] Alert routing
- [ ] Alert severity
- [ ] Alert suppression
- [ ] Alert correlation
- [ ] Alert fatigue reduction

### 16.6 Observability tools
- [ ] Prometheus
- [ ] Grafana
- [ ] OpenTelemetry
- [ ] Jaeger
- [ ] Tempo
- [ ] Zipkin
- [ ] Loki
- [ ] Elasticsearch
- [ ] OpenSearch
- [ ] Datadog
- [ ] New Relic
- [ ] Honeycomb
- [ ] CloudWatch
- [ ] Azure Monitor
- [ ] Google Cloud Monitoring

---

## 17. Cloud Architecture

### 17.1 Cloud fundamentals
- [ ] Public cloud
- [ ] Private cloud
- [ ] Hybrid cloud
- [ ] Multi-cloud
- [ ] Region
- [ ] Availability zone
- [ ] Edge location
- [ ] Virtual machine
- [ ] Container
- [ ] Serverless
- [ ] Managed service
- [ ] Shared responsibility model
- [ ] Identity and access management
- [ ] Cloud networking
- [ ] Cloud storage

### 17.2 Compute architecture
- [ ] Virtual machines
- [ ] Autoscaling groups
- [ ] Containers
- [ ] Kubernetes
- [ ] Serverless functions
- [ ] Batch compute
- [ ] GPU compute
- [ ] Spot instances
- [ ] Reserved capacity
- [ ] Horizontal scaling
- [ ] Vertical scaling
- [ ] Compute isolation
- [ ] Compute cost model
- [ ] Compute scheduling

### 17.3 Cloud networking
- [ ] VPC
- [ ] Subnet
- [ ] Route table
- [ ] Internet gateway
- [ ] NAT gateway
- [ ] Load balancer
- [ ] Private endpoint
- [ ] VPC peering
- [ ] Transit gateway
- [ ] VPN
- [ ] Direct connect
- [ ] DNS
- [ ] Firewall
- [ ] Security group
- [ ] Network ACL

### 17.4 Cloud storage
- [ ] Object storage
- [ ] Block storage
- [ ] File storage
- [ ] Archive storage
- [ ] Managed database storage
- [ ] Lifecycle policy
- [ ] Versioning
- [ ] Replication
- [ ] Encryption
- [ ] Access policy
- [ ] Backup
- [ ] Restore
- [ ] Retention
- [ ] Cost optimization

### 17.5 Cloud-native architecture
- [ ] Containers
- [ ] Microservices
- [ ] Service mesh
- [ ] Declarative APIs
- [ ] Immutable infrastructure
- [ ] Kubernetes
- [ ] Operators
- [ ] GitOps
- [ ] Infrastructure as Code
- [ ] Observability
- [ ] Autoscaling
- [ ] Resilience
- [ ] Managed services
- [ ] Platform engineering

### 17.6 Cloud cost architecture
- [ ] Cost allocation
- [ ] Tagging strategy
- [ ] Rightsizing
- [ ] Autoscaling
- [ ] Reserved capacity
- [ ] Spot usage
- [ ] Storage lifecycle
- [ ] Network egress cost
- [ ] Managed service cost
- [ ] Observability cost
- [ ] Cost dashboards
- [ ] Budget alerts
- [ ] Unit economics
- [ ] FinOps

---

## 18. Microservices Architecture

### 18.1 Microservice fundamentals
- [ ] Service boundary
- [ ] Business capability
- [ ] Bounded context
- [ ] Independent deployment
- [ ] Independent scaling
- [ ] Database per service
- [ ] API contract
- [ ] Service ownership
- [ ] Team ownership
- [ ] Decentralized governance
- [ ] Polyglot persistence
- [ ] Operational complexity
- [ ] Distributed data
- [ ] Distributed transactions

### 18.2 Service decomposition
- [ ] Decompose by business capability
- [ ] Decompose by bounded context
- [ ] Decompose by subdomain
- [ ] Decompose by change frequency
- [ ] Decompose by scalability requirement
- [ ] Decompose by team boundary
- [ ] Avoid entity service anti-pattern
- [ ] Avoid distributed monolith
- [ ] Identify aggregate boundaries
- [ ] Identify integration events
- [ ] Identify shared kernel
- [ ] Identify anti-corruption layer

### 18.3 Inter-service communication
- [ ] Synchronous HTTP
- [ ] gRPC
- [ ] Asynchronous messaging
- [ ] Event streaming
- [ ] Request-response
- [ ] Publish-subscribe
- [ ] Service discovery
- [ ] Load balancing
- [ ] Circuit breaker
- [ ] Timeout
- [ ] Retry
- [ ] Backpressure
- [ ] Versioning
- [ ] Contract testing

### 18.4 Distributed data management
- [ ] Database per service
- [ ] Shared database anti-pattern
- [ ] Data duplication
- [ ] Eventual consistency
- [ ] Saga
- [ ] Outbox pattern
- [ ] Inbox pattern
- [ ] CDC
- [ ] Read model
- [ ] CQRS
- [ ] Event sourcing
- [ ] Reconciliation
- [ ] Data ownership
- [ ] Cross-service query

### 18.5 Microservice operations
- [ ] Service registry
- [ ] API gateway
- [ ] Service mesh
- [ ] Centralized logging
- [ ] Distributed tracing
- [ ] Metrics
- [ ] Health checks
- [ ] Configuration management
- [ ] Secret management
- [ ] Deployment automation
- [ ] Rollback strategy
- [ ] Incident response
- [ ] Dependency mapping
- [ ] Version management

### 18.6 Microservice anti-patterns
- [ ] Distributed monolith
- [ ] Shared database
- [ ] Chatty services
- [ ] Entity services
- [ ] Nano services
- [ ] Synchronous chain
- [ ] No observability
- [ ] No ownership
- [ ] No contract testing
- [ ] Premature decomposition
- [ ] Inconsistent APIs
- [ ] Hidden coupling
- [ ] Cyclic dependencies
- [ ] Shared library coupling

---

## 19. Monolith and Modular Architecture

### 19.1 Monolith fundamentals
- [ ] Monolithic deployment
- [ ] Single process
- [ ] Shared database
- [ ] Shared codebase
- [ ] Internal modules
- [ ] In-process calls
- [ ] Simpler operations
- [ ] Simpler transactions
- [ ] Simpler debugging
- [ ] Scaling limitations
- [ ] Build-time coupling
- [ ] Runtime coupling
- [ ] Team scaling limits

### 19.2 Modular monolith
- [ ] Module boundary
- [ ] Explicit module API
- [ ] Internal package
- [ ] Dependency rules
- [ ] Architecture tests
- [ ] Domain events
- [ ] Shared deployment
- [ ] Transactional consistency
- [ ] Separate schema per module
- [ ] Separate package per module
- [ ] Module ownership
- [ ] Module documentation
- [ ] Extraction readiness
- [ ] Evolutionary architecture

### 19.3 Monolith modernization
- [ ] Codebase analysis
- [ ] Dependency mapping
- [ ] Database coupling analysis
- [ ] Module identification
- [ ] Boundary enforcement
- [ ] Strangler fig pattern
- [ ] Anti-corruption layer
- [ ] Facade
- [ ] Feature extraction
- [ ] Data migration
- [ ] Event introduction
- [ ] API introduction
- [ ] Incremental decomposition
- [ ] Risk reduction

### 19.4 When to choose monolith
- [ ] Small team
- [ ] Early product stage
- [ ] Unclear domain boundaries
- [ ] Low operational maturity
- [ ] Strong transaction needs
- [ ] Cost sensitivity
- [ ] Simple deployment requirement
- [ ] Rapid iteration
- [ ] Limited scale requirement
- [ ] High domain coupling

### 19.5 When to choose microservices
- [ ] Clear domain boundaries
- [ ] Multiple autonomous teams
- [ ] Independent scaling needs
- [ ] Independent deployment needs
- [ ] High operational maturity
- [ ] Different technology needs
- [ ] Strong ownership boundaries
- [ ] Large codebase complexity
- [ ] Global scale
- [ ] Regulatory isolation needs

---

## 20. Frontend and Client Architecture

### 20.1 Frontend architecture fundamentals
- [ ] Single Page Application
- [ ] Multi Page Application
- [ ] Server-side rendering
- [ ] Static site generation
- [ ] Client-side rendering
- [ ] Hydration
- [ ] Islands architecture
- [ ] Micro-frontends
- [ ] Backend for frontend
- [ ] Design system
- [ ] Component architecture
- [ ] State management
- [ ] Routing
- [ ] API client layer

### 20.2 Web performance architecture
- [ ] Critical rendering path
- [ ] Core Web Vitals
- [ ] Bundle splitting
- [ ] Lazy loading
- [ ] Image optimization
- [ ] Font optimization
- [ ] CDN delivery
- [ ] Browser caching
- [ ] Service Worker caching
- [ ] HTTP caching
- [ ] Preload
- [ ] Prefetch
- [ ] Compression
- [ ] Edge rendering

### 20.3 Frontend state architecture
- [ ] Local state
- [ ] Server state
- [ ] Global state
- [ ] URL state
- [ ] Cache state
- [ ] Form state
- [ ] Optimistic updates
- [ ] Offline state
- [ ] State synchronization
- [ ] Conflict resolution
- [ ] Error state
- [ ] Loading state
- [ ] Derived state

### 20.4 Micro-frontend architecture
- [ ] Module federation
- [ ] Build-time composition
- [ ] Runtime composition
- [ ] Server-side composition
- [ ] Client-side composition
- [ ] Shared dependencies
- [ ] Design system governance
- [ ] Independent deployment
- [ ] Routing coordination
- [ ] State sharing
- [ ] Performance overhead
- [ ] Ownership boundaries
- [ ] Versioning
- [ ] Testing strategy

### 20.5 Mobile client architecture
- [ ] Native app architecture
- [ ] Cross-platform app architecture
- [ ] Offline-first design
- [ ] Local database
- [ ] Sync engine
- [ ] Push notifications
- [ ] API client
- [ ] Token storage
- [ ] Background work
- [ ] App lifecycle
- [ ] Network retry
- [ ] Data conflict handling
- [ ] Feature flags
- [ ] Analytics

---

## 21. Search, Recommendation, and AI System Architecture

### 21.1 Search architecture
- [ ] Search index
- [ ] Document ingestion
- [ ] Tokenization
- [ ] Analyzer
- [ ] Inverted index
- [ ] Ranking
- [ ] Relevance tuning
- [ ] Faceting
- [ ] Filtering
- [ ] Autocomplete
- [ ] Synonyms
- [ ] Index refresh
- [ ] Reindexing
- [ ] Zero-downtime reindex
- [ ] Search scaling

### 21.2 Recommendation architecture
- [ ] Candidate generation
- [ ] Ranking
- [ ] Re-ranking
- [ ] User profile
- [ ] Item features
- [ ] Interaction events
- [ ] Feature store
- [ ] Offline training
- [ ] Online inference
- [ ] Real-time features
- [ ] A/B testing
- [ ] Feedback loop
- [ ] Cold start
- [ ] Diversity
- [ ] Exploration

### 21.3 AI application architecture
- [ ] Model API
- [ ] Prompt layer
- [ ] Tool layer
- [ ] Retrieval layer
- [ ] Vector database
- [ ] Context builder
- [ ] Guardrails
- [ ] Evaluation pipeline
- [ ] Observability
- [ ] Cost tracking
- [ ] Safety monitoring
- [ ] Human review
- [ ] Model fallback
- [ ] Prompt versioning

### 21.4 RAG architecture
- [ ] Document ingestion
- [ ] Chunking
- [ ] Embeddings
- [ ] Vector index
- [ ] Metadata filtering
- [ ] Hybrid retrieval
- [ ] Reranking
- [ ] Context assembly
- [ ] Answer generation
- [ ] Citation generation
- [ ] Access control filtering
- [ ] Evaluation
- [ ] Re-embedding pipeline
- [ ] Data freshness

### 21.5 Agentic architecture
- [ ] Agent loop
- [ ] Planner
- [ ] Executor
- [ ] Tool registry
- [ ] Memory
- [ ] State machine
- [ ] Human approval
- [ ] Policy enforcement
- [ ] Tool sandbox
- [ ] Audit logging
- [ ] Task trace
- [ ] Error recovery
- [ ] Kill switch
- [ ] Long-running task monitoring

---

## 22. DevOps, Platform, and Deployment Architecture

### 22.1 CI/CD architecture
- [ ] Source control
- [ ] Build pipeline
- [ ] Test pipeline
- [ ] Security scan
- [ ] Artifact repository
- [ ] Container registry
- [ ] Deployment pipeline
- [ ] Environment promotion
- [ ] Approval gate
- [ ] Rollback
- [ ] Release notes
- [ ] Pipeline observability
- [ ] Pipeline security
- [ ] Supply chain signing

### 22.2 Deployment strategies
- [ ] Recreate deployment
- [ ] Rolling deployment
- [ ] Blue-green deployment
- [ ] Canary deployment
- [ ] Feature flag deployment
- [ ] Shadow deployment
- [ ] Dark launch
- [ ] A/B testing
- [ ] Progressive delivery
- [ ] Rollback
- [ ] Roll-forward
- [ ] Database migration coordination
- [ ] Traffic splitting
- [ ] Automated analysis

### 22.3 Infrastructure as Code
- [ ] Terraform
- [ ] OpenTofu
- [ ] Pulumi
- [ ] CloudFormation
- [ ] Bicep
- [ ] Ansible
- [ ] Helm
- [ ] Kustomize
- [ ] GitOps
- [ ] State management
- [ ] Drift detection
- [ ] Policy as code
- [ ] Module design
- [ ] Environment strategy

### 22.4 Platform engineering
- [ ] Internal developer platform
- [ ] Golden path
- [ ] Self-service deployment
- [ ] Self-service database
- [ ] Self-service observability
- [ ] Developer portal
- [ ] Service catalog
- [ ] Templates
- [ ] Guardrails
- [ ] Platform APIs
- [ ] Paved roads
- [ ] Backstage
- [ ] Crossplane
- [ ] Developer experience

### 22.5 Kubernetes architecture
- [ ] Cluster architecture
- [ ] Namespace strategy
- [ ] Workload strategy
- [ ] Service strategy
- [ ] Ingress strategy
- [ ] Gateway API strategy
- [ ] Storage strategy
- [ ] RBAC strategy
- [ ] NetworkPolicy strategy
- [ ] Autoscaling strategy
- [ ] Observability strategy
- [ ] GitOps strategy
- [ ] Multi-cluster strategy
- [ ] Upgrade strategy

### 22.6 Release engineering
- [ ] Versioning
- [ ] Artifact immutability
- [ ] Reproducible builds
- [ ] Dependency pinning
- [ ] Build provenance
- [ ] SBOM
- [ ] Signing
- [ ] Release branching
- [ ] Release train
- [ ] Hotfix process
- [ ] Rollback policy
- [ ] Change freeze
- [ ] Release metrics
- [ ] Deployment frequency

---

## 23. Enterprise Architecture and Governance

### 23.1 Enterprise architecture fundamentals
- [ ] Business architecture
- [ ] Application architecture
- [ ] Data architecture
- [ ] Technology architecture
- [ ] Capability map
- [ ] Value stream
- [ ] Application portfolio
- [ ] Integration landscape
- [ ] Information landscape
- [ ] Technology standards
- [ ] Target architecture
- [ ] Transition architecture
- [ ] Roadmap
- [ ] Governance

### 23.2 Architecture frameworks
- [ ] TOGAF awareness
- [ ] Architecture Development Method
- [ ] Enterprise continuum
- [ ] Architecture repository
- [ ] Architecture capability
- [ ] ISO/IEC/IEEE 42010 awareness
- [ ] Viewpoint
- [ ] View
- [ ] Stakeholder
- [ ] Concern
- [ ] Model
- [ ] Architecture description
- [ ] Architecture decision
- [ ] Architecture governance

### 23.3 Architecture governance
- [ ] Architecture principles
- [ ] Standards
- [ ] Reference architectures
- [ ] Architecture review board
- [ ] Design review
- [ ] Exception process
- [ ] Technology radar
- [ ] Technology lifecycle
- [ ] Approved technology list
- [ ] Risk register
- [ ] Compliance checks
- [ ] Architecture metrics
- [ ] Governance automation
- [ ] Lightweight governance

### 23.4 Architecture documentation
- [ ] Architecture Decision Record
- [ ] Design document
- [ ] C4 model
- [ ] arc42
- [ ] Context diagram
- [ ] Container diagram
- [ ] Component diagram
- [ ] Deployment diagram
- [ ] Sequence diagram
- [ ] Data flow diagram
- [ ] Threat model
- [ ] Runbook
- [ ] Architecture roadmap
- [ ] Trade-off record

### 23.5 Architecture review
- [ ] Requirements review
- [ ] Quality attribute review
- [ ] Security review
- [ ] Data review
- [ ] Operational review
- [ ] Cost review
- [ ] Scalability review
- [ ] Reliability review
- [ ] Compliance review
- [ ] Migration review
- [ ] Deployment review
- [ ] Observability review
- [ ] Risk review
- [ ] Decision review

---

## 24. Architecture Documentation and Diagramming

### 24.1 Documentation principles
- [ ] Document why
- [ ] Document trade-offs
- [ ] Document constraints
- [ ] Document assumptions
- [ ] Document decisions
- [ ] Document risks
- [ ] Document interfaces
- [ ] Document runtime behavior
- [ ] Document deployment
- [ ] Document operations
- [ ] Keep documentation close to code
- [ ] Keep documentation versioned
- [ ] Keep documentation reviewable
- [ ] Avoid stale documentation

### 24.2 C4 model
- [ ] System context diagram
- [ ] Container diagram
- [ ] Component diagram
- [ ] Code diagram
- [ ] Person
- [ ] Software system
- [ ] Container
- [ ] Component
- [ ] Relationship
- [ ] Boundary
- [ ] Technology labels
- [ ] External systems
- [ ] Dynamic diagram
- [ ] Deployment diagram

### 24.3 ADRs
- [ ] Context
- [ ] Decision
- [ ] Status
- [ ] Consequences
- [ ] Alternatives
- [ ] Drivers
- [ ] Constraints
- [ ] Trade-offs
- [ ] Related decisions
- [ ] Superseded decisions
- [ ] Reversal criteria
- [ ] Review date
- [ ] Owners
- [ ] Links

### 24.4 Diagrams
- [ ] Context diagram
- [ ] Component diagram
- [ ] Deployment diagram
- [ ] Sequence diagram
- [ ] State diagram
- [ ] Flowchart
- [ ] Data flow diagram
- [ ] Entity relationship diagram
- [ ] Network diagram
- [ ] Threat model diagram
- [ ] Dependency graph
- [ ] Event flow diagram
- [ ] Causal loop diagram
- [ ] Architecture roadmap

### 24.5 Diagramming tools
- [ ] PlantUML
- [ ] Mermaid
- [ ] Structurizr
- [ ] draw.io
- [ ] Lucidchart
- [ ] Miro
- [ ] Excalidraw
- [ ] Graphviz
- [ ] D2
- [ ] C4-PlantUML
- [ ] Architecture as code
- [ ] Diagram linting
- [ ] Diagram review
- [ ] Diagram versioning

---

## 25. Cost Architecture and FinOps

### 25.1 Cost fundamentals
- [ ] Compute cost
- [ ] Storage cost
- [ ] Network cost
- [ ] Database cost
- [ ] Cache cost
- [ ] Queue cost
- [ ] CDN cost
- [ ] Observability cost
- [ ] License cost
- [ ] Support cost
- [ ] Engineering cost
- [ ] Operational cost
- [ ] Unit cost
- [ ] Marginal cost

### 25.2 Cost modeling
- [ ] Cost per request
- [ ] Cost per user
- [ ] Cost per tenant
- [ ] Cost per transaction
- [ ] Cost per GB stored
- [ ] Cost per GB transferred
- [ ] Cost per job
- [ ] Cost per model inference
- [ ] Fixed cost
- [ ] Variable cost
- [ ] Peak cost
- [ ] Idle cost
- [ ] Forecasting
- [ ] Budgeting

### 25.3 Cost optimization
- [ ] Rightsizing
- [ ] Autoscaling
- [ ] Reserved capacity
- [ ] Spot instances
- [ ] Storage lifecycle
- [ ] Compression
- [ ] Caching
- [ ] Query optimization
- [ ] CDN optimization
- [ ] Data transfer reduction
- [ ] Log sampling
- [ ] Metric cardinality reduction
- [ ] Resource cleanup
- [ ] Waste detection

### 25.4 FinOps practices
- [ ] Tagging strategy
- [ ] Cost allocation
- [ ] Showback
- [ ] Chargeback
- [ ] Budget alerts
- [ ] Cost anomaly detection
- [ ] Forecasting
- [ ] Unit economics
- [ ] Cost dashboards
- [ ] Ownership model
- [ ] Optimization backlog
- [ ] Procurement strategy
- [ ] Vendor negotiation
- [ ] Architecture cost review

---

## 26. Architecture Migration and Evolution

### 26.1 Legacy modernization
- [ ] Legacy assessment
- [ ] Dependency mapping
- [ ] Data mapping
- [ ] Risk analysis
- [ ] Business criticality
- [ ] Technical debt inventory
- [ ] Modernization strategy
- [ ] Rehost
- [ ] Replatform
- [ ] Refactor
- [ ] Rewrite
- [ ] Replace
- [ ] Retire
- [ ] Retain

### 26.2 Migration patterns
- [ ] Strangler fig
- [ ] Branch by abstraction
- [ ] Parallel run
- [ ] Blue-green migration
- [ ] Dual write
- [ ] Shadow read
- [ ] Event interception
- [ ] Anti-corruption layer
- [ ] Facade
- [ ] Adapter
- [ ] Proxy
- [ ] Backfill
- [ ] Data reconciliation
- [ ] Cutover

### 26.3 Database migration architecture
- [ ] Schema migration
- [ ] Online migration
- [ ] Zero-downtime migration
- [ ] Expand-contract
- [ ] Backfill
- [ ] Dual writes
- [ ] CDC
- [ ] Replication
- [ ] Data validation
- [ ] Consistency checks
- [ ] Rollback plan
- [ ] Cutover plan
- [ ] Cleanup plan
- [ ] Audit trail

### 26.4 Cloud migration
- [ ] Cloud readiness assessment
- [ ] Landing zone
- [ ] Network design
- [ ] Identity integration
- [ ] Security baseline
- [ ] Data migration
- [ ] Application migration
- [ ] Connectivity
- [ ] Observability migration
- [ ] Cost baseline
- [ ] Cutover
- [ ] Rollback
- [ ] Decommissioning
- [ ] Optimization

### 26.5 Evolutionary architecture
- [ ] Fitness function
- [ ] Architecture test
- [ ] Incremental change
- [ ] Reversible decision
- [ ] Experimentation
- [ ] Architectural runway
- [ ] Technical debt management
- [ ] Continuous architecture
- [ ] Governance automation
- [ ] Refactoring strategy
- [ ] Deprecation strategy
- [ ] Sunset strategy
- [ ] Roadmap management
- [ ] Feedback loop

---

## 27. Architecture Evaluation

### 27.1 Evaluation methods
- [ ] Architecture review
- [ ] ATAM awareness
- [ ] Lightweight architecture evaluation
- [ ] Scenario-based evaluation
- [ ] Quality attribute workshop
- [ ] Threat modeling
- [ ] Cost review
- [ ] Operational readiness review
- [ ] Performance review
- [ ] Security review
- [ ] Compliance review
- [ ] Disaster recovery review
- [ ] Game day
- [ ] Production readiness review

### 27.2 Architecture scenarios
- [ ] Availability scenario
- [ ] Performance scenario
- [ ] Scalability scenario
- [ ] Security scenario
- [ ] Modifiability scenario
- [ ] Deployability scenario
- [ ] Testability scenario
- [ ] Operability scenario
- [ ] Data consistency scenario
- [ ] Disaster recovery scenario
- [ ] Cost scenario
- [ ] Compliance scenario
- [ ] Usability scenario
- [ ] Maintainability scenario

### 27.3 Fitness functions
- [ ] Dependency rule check
- [ ] Layering check
- [ ] Module boundary check
- [ ] API compatibility check
- [ ] Security header check
- [ ] Performance threshold check
- [ ] Availability threshold check
- [ ] Cost threshold check
- [ ] Observability coverage check
- [ ] Test coverage check
- [ ] Policy compliance check
- [ ] Architecture drift check
- [ ] Dependency freshness check
- [ ] Vulnerability threshold check

### 27.4 Production readiness
- [ ] Health checks
- [ ] Readiness checks
- [ ] Liveness checks
- [ ] Graceful shutdown
- [ ] Metrics
- [ ] Logs
- [ ] Traces
- [ ] Dashboards
- [ ] Alerts
- [ ] Runbooks
- [ ] Load test evidence
- [ ] Security scan evidence
- [ ] Backup evidence
- [ ] Rollback plan
- [ ] Incident owner

---

## 28. Common System Design Problems

### 28.1 Social and content systems
- [ ] Design URL shortener
- [ ] Design news feed
- [ ] Design social graph
- [ ] Design follower system
- [ ] Design like system
- [ ] Design comment system
- [ ] Design notification system
- [ ] Design messaging system
- [ ] Design media upload system
- [ ] Design content moderation system
- [ ] Design recommendation feed
- [ ] Design trending topics

### 28.2 Data and storage systems
- [ ] Design key-value store
- [ ] Design distributed cache
- [ ] Design object storage
- [ ] Design file storage
- [ ] Design database sharding
- [ ] Design search engine
- [ ] Design log aggregation system
- [ ] Design time-series database
- [ ] Design metrics platform
- [ ] Design data warehouse ingestion
- [ ] Design CDC pipeline
- [ ] Design backup system

### 28.3 Communication systems
- [ ] Design chat system
- [ ] Design video conferencing
- [ ] Design WebSocket gateway
- [ ] Design email delivery system
- [ ] Design push notification system
- [ ] Design webhook delivery system
- [ ] Design pub/sub system
- [ ] Design message queue
- [ ] Design event streaming platform
- [ ] Design rate limiter
- [ ] Design API gateway
- [ ] Design service discovery

### 28.4 Commerce and financial systems
- [ ] Design payment system
- [ ] Design wallet system
- [ ] Design order management system
- [ ] Design inventory system
- [ ] Design booking system
- [ ] Design ticketing system
- [ ] Design auction system
- [ ] Design pricing system
- [ ] Design fraud detection system
- [ ] Design ledger system
- [ ] Design reconciliation system
- [ ] Design subscription billing system

### 28.5 Infrastructure systems
- [ ] Design CDN
- [ ] Design load balancer
- [ ] Design distributed scheduler
- [ ] Design container orchestration system
- [ ] Design CI/CD platform
- [ ] Design feature flag platform
- [ ] Design configuration service
- [ ] Design secrets management system
- [ ] Design monitoring system
- [ ] Design alerting system
- [ ] Design identity provider
- [ ] Design multi-tenant SaaS platform

### 28.6 AI and search systems
- [ ] Design autocomplete
- [ ] Design semantic search
- [ ] Design RAG assistant
- [ ] Design vector database
- [ ] Design model serving platform
- [ ] Design recommendation system
- [ ] Design fraud ML pipeline
- [ ] Design feature store
- [ ] Design evaluation platform
- [ ] Design AI agent platform
- [ ] Design prompt management system
- [ ] Design LLM observability system

---

## 29. Standards, Frameworks, and Current Ecosystem Awareness

### 29.1 Architecture standards and frameworks
- [ ] ISO/IEC/IEEE 42010:2022 awareness
- [ ] TOGAF Standard 10th Edition awareness
- [ ] C4 model awareness
- [ ] arc42 awareness
- [ ] Architecture Decision Records awareness
- [ ] Domain-Driven Design awareness
- [ ] Event Modeling awareness
- [ ] Wardley Mapping awareness
- [ ] Team Topologies awareness
- [ ] Well-Architected frameworks awareness
- [ ] Cloud Adoption Frameworks awareness
- [ ] Security architecture frameworks awareness

### 29.2 Cloud architecture frameworks
- [ ] AWS Well-Architected Framework awareness
- [ ] Operational excellence pillar
- [ ] Security pillar
- [ ] Reliability pillar
- [ ] Performance efficiency pillar
- [ ] Cost optimization pillar
- [ ] Sustainability pillar
- [ ] Azure Well-Architected Framework awareness
- [ ] Google Cloud Architecture Framework awareness
- [ ] Multi-cloud architecture awareness
- [ ] Cloud-native architecture awareness
- [ ] Shared responsibility model awareness

### 29.3 Reliability frameworks
- [ ] Google SRE principles awareness
- [ ] SLI awareness
- [ ] SLO awareness
- [ ] SLA awareness
- [ ] Error budget awareness
- [ ] Toil awareness
- [ ] Release engineering awareness
- [ ] Monitoring distributed systems awareness
- [ ] Incident response awareness
- [ ] Blameless postmortem awareness
- [ ] Chaos engineering awareness
- [ ] Resilience engineering awareness

### 29.4 Security standards and guidance
- [ ] OWASP Top 10 awareness
- [ ] OWASP ASVS awareness
- [ ] OWASP API Security Top 10 awareness
- [ ] STRIDE threat modeling awareness
- [ ] PASTA threat modeling awareness
- [ ] NIST Cybersecurity Framework awareness
- [ ] Zero Trust Architecture awareness
- [ ] CIS Controls awareness
- [ ] SOC 2 awareness
- [ ] ISO 27001 awareness
- [ ] GDPR awareness
- [ ] PCI DSS awareness

### 29.5 Cloud-native ecosystem
- [ ] CNCF cloud native definition awareness
- [ ] Kubernetes awareness
- [ ] Envoy awareness
- [ ] Prometheus awareness
- [ ] OpenTelemetry awareness
- [ ] Argo CD awareness
- [ ] Flux awareness
- [ ] Helm awareness
- [ ] Istio awareness
- [ ] Linkerd awareness
- [ ] Cilium awareness
- [ ] Gateway API awareness
- [ ] Open Policy Agent awareness
- [ ] Backstage awareness

### 29.6 Architecture tooling
- [ ] Structurizr
- [ ] PlantUML
- [ ] Mermaid
- [ ] C4-PlantUML
- [ ] D2
- [ ] Graphviz
- [ ] draw.io
- [ ] Lucidchart
- [ ] Miro
- [ ] Backstage
- [ ] Architecture catalog
- [ ] Service catalog
- [ ] ADR tooling
- [ ] Dependency graph tooling

---

## 30. Learning Path

### 30.1 Phase 1 — Fundamentals
- [ ] Networking fundamentals
- [ ] HTTP fundamentals
- [ ] Database fundamentals
- [ ] Caching fundamentals
- [ ] Queue fundamentals
- [ ] Load balancing fundamentals
- [ ] API design fundamentals
- [ ] Security fundamentals
- [ ] Observability fundamentals
- [ ] Basic cloud fundamentals

### 30.2 Phase 2 — System design basics
- [ ] Requirements clarification
- [ ] Capacity estimation
- [ ] High-level diagrams
- [ ] Data model design
- [ ] API design
- [ ] Basic scaling
- [ ] Basic caching
- [ ] Basic replication
- [ ] Basic sharding
- [ ] Basic failure handling
- [ ] Trade-off explanation

### 30.3 Phase 3 — Distributed systems
- [ ] CAP theorem
- [ ] Consistency models
- [ ] Replication
- [ ] Partitioning
- [ ] Consensus
- [ ] Distributed transactions
- [ ] Sagas
- [ ] Eventual consistency
- [ ] Event-driven architecture
- [ ] Message brokers
- [ ] Stream processing
- [ ] Failure modes

### 30.4 Phase 4 — Software architecture
- [ ] Layered architecture
- [ ] Clean architecture
- [ ] Hexagonal architecture
- [ ] Domain-driven design
- [ ] Modular monolith
- [ ] Microservices
- [ ] Event sourcing
- [ ] CQRS
- [ ] API gateway
- [ ] BFF
- [ ] Service mesh
- [ ] Architecture documentation

### 30.5 Phase 5 — Production architecture
- [ ] Reliability engineering
- [ ] SLOs
- [ ] Error budgets
- [ ] Observability
- [ ] Incident response
- [ ] Disaster recovery
- [ ] Security architecture
- [ ] Performance engineering
- [ ] Cost optimization
- [ ] CI/CD architecture
- [ ] Kubernetes architecture
- [ ] Cloud architecture

### 30.6 Phase 6 — Enterprise and governance
- [ ] Enterprise architecture
- [ ] Architecture governance
- [ ] Reference architecture
- [ ] Technology strategy
- [ ] Platform engineering
- [ ] Architecture reviews
- [ ] Architecture decision records
- [ ] Compliance architecture
- [ ] Migration architecture
- [ ] Evolutionary architecture
- [ ] Architecture metrics

### 30.7 Phase 7 — Advanced architecture
- [ ] Multi-region systems
- [ ] Globally distributed data
- [ ] High-scale event streaming
- [ ] Large-scale search
- [ ] AI system architecture
- [ ] Multi-tenant SaaS architecture
- [ ] Zero-trust architecture
- [ ] Resilience architecture
- [ ] Platform architecture
- [ ] Architecture leadership
- [ ] Technical strategy

---

## 31. Practical Projects

### 31.1 Project 1 — URL Shortener
- [ ] Define requirements
- [ ] Estimate traffic
- [ ] Design API
- [ ] Design database schema
- [ ] Design short code generation
- [ ] Add cache
- [ ] Add analytics
- [ ] Add rate limiting
- [ ] Add abuse prevention
- [ ] Add observability
- [ ] Document trade-offs
- [ ] Create C4 diagrams

### 31.2 Project 2 — Notification Platform
- [ ] Design notification API
- [ ] Support email
- [ ] Support SMS
- [ ] Support push notifications
- [ ] Add template system
- [ ] Add message queue
- [ ] Add retry policy
- [ ] Add dead letter queue
- [ ] Add user preferences
- [ ] Add delivery tracking
- [ ] Add rate limits
- [ ] Add provider failover

### 31.3 Project 3 — Chat System
- [ ] Design realtime protocol
- [ ] Design WebSocket gateway
- [ ] Design message storage
- [ ] Design conversation model
- [ ] Add message ordering
- [ ] Add delivery receipts
- [ ] Add presence
- [ ] Add push notifications
- [ ] Add media storage
- [ ] Add horizontal scaling
- [ ] Add multi-device sync
- [ ] Add moderation

### 31.4 Project 4 — E-Commerce Platform
- [ ] Design catalog service
- [ ] Design cart service
- [ ] Design order service
- [ ] Design payment service
- [ ] Design inventory service
- [ ] Design pricing service
- [ ] Add checkout saga
- [ ] Add outbox pattern
- [ ] Add search
- [ ] Add recommendation
- [ ] Add fraud checks
- [ ] Add observability

### 31.5 Project 5 — Event Streaming Platform
- [ ] Design event schema
- [ ] Design topic strategy
- [ ] Design partition strategy
- [ ] Design producer contract
- [ ] Design consumer contract
- [ ] Add schema registry
- [ ] Add dead letter handling
- [ ] Add replay workflow
- [ ] Add monitoring
- [ ] Add access control
- [ ] Add retention policy
- [ ] Add governance

### 31.6 Project 6 — Multi-Tenant SaaS Platform
- [ ] Define tenant model
- [ ] Design tenant isolation
- [ ] Design authentication
- [ ] Design authorization
- [ ] Design database strategy
- [ ] Design billing
- [ ] Design quotas
- [ ] Design feature flags
- [ ] Design audit logging
- [ ] Design tenant backup
- [ ] Design tenant deletion
- [ ] Design cost allocation

### 31.7 Project 7 — Observability Platform
- [ ] Design metrics ingestion
- [ ] Design log ingestion
- [ ] Design trace ingestion
- [ ] Design storage
- [ ] Design indexing
- [ ] Design dashboards
- [ ] Design alerting
- [ ] Design retention
- [ ] Design sampling
- [ ] Design multi-tenancy
- [ ] Design cost controls
- [ ] Design incident workflow

### 31.8 Project 8 — RAG AI Assistant Architecture
- [ ] Design ingestion pipeline
- [ ] Design chunking strategy
- [ ] Design embedding pipeline
- [ ] Design vector database
- [ ] Design retrieval strategy
- [ ] Design reranking
- [ ] Design answer generation
- [ ] Design citations
- [ ] Design access control
- [ ] Design evaluation
- [ ] Design observability
- [ ] Design cost controls

### 31.9 Project 9 — Kubernetes Platform
- [ ] Design cluster topology
- [ ] Design namespace strategy
- [ ] Design ingress strategy
- [ ] Design RBAC
- [ ] Design NetworkPolicy
- [ ] Design GitOps flow
- [ ] Design observability
- [ ] Design secrets management
- [ ] Design autoscaling
- [ ] Design upgrade strategy
- [ ] Design tenant onboarding
- [ ] Design platform golden paths

### 31.10 Project 10 — Legacy Modernization Plan
- [ ] Assess current architecture
- [ ] Map dependencies
- [ ] Map data flows
- [ ] Identify bounded contexts
- [ ] Identify risk areas
- [ ] Define target architecture
- [ ] Define migration phases
- [ ] Add anti-corruption layer
- [ ] Add strangler facade
- [ ] Plan data migration
- [ ] Plan rollout
- [ ] Plan rollback
- [ ] Write ADRs

### 31.11 Project 11 — High-Scale Rate Limiter
- [ ] Define rate limit model
- [ ] Design token bucket
- [ ] Design sliding window
- [ ] Design distributed counter
- [ ] Design Redis-backed limiter
- [ ] Design local fallback
- [ ] Design quota hierarchy
- [ ] Design bypass rules
- [ ] Design observability
- [ ] Design abuse prevention
- [ ] Test under load
- [ ] Document trade-offs

### 31.12 Project 12 — Global File Storage System
- [ ] Design upload API
- [ ] Design metadata storage
- [ ] Design object storage
- [ ] Design multipart upload
- [ ] Design CDN delivery
- [ ] Design deduplication
- [ ] Design virus scanning
- [ ] Design access control
- [ ] Design lifecycle policy
- [ ] Design replication
- [ ] Design backup
- [ ] Design disaster recovery

---

## 32. Competency Checklist

### 32.1 Junior system design competency
- [ ] Explain client-server architecture
- [ ] Explain DNS, HTTP, and TLS basics
- [ ] Design simple REST APIs
- [ ] Design simple database schemas
- [ ] Explain caching basics
- [ ] Explain load balancing basics
- [ ] Explain queues basics
- [ ] Draw basic architecture diagrams
- [ ] Estimate simple traffic
- [ ] Identify basic bottlenecks
- [ ] Explain basic trade-offs
- [ ] Document simple design decisions

### 32.2 Mid-level system design competency
- [ ] Design scalable CRUD systems
- [ ] Design cache strategies
- [ ] Design async processing
- [ ] Design database indexing
- [ ] Design read replicas
- [ ] Design sharding basics
- [ ] Design service boundaries
- [ ] Design API gateway usage
- [ ] Design basic observability
- [ ] Design basic security controls
- [ ] Design failure handling
- [ ] Write design documents
- [ ] Write ADRs
- [ ] Defend architecture trade-offs

### 32.3 Senior architecture competency
- [ ] Design distributed systems
- [ ] Define architectural drivers
- [ ] Select architecture style
- [ ] Design microservice boundaries
- [ ] Design modular monolith boundaries
- [ ] Design event-driven systems
- [ ] Design data consistency strategy
- [ ] Design disaster recovery
- [ ] Design security architecture
- [ ] Design observability architecture
- [ ] Design cloud architecture
- [ ] Lead architecture reviews
- [ ] Plan migrations
- [ ] Manage technical debt

### 32.4 Staff/principal architecture competency
- [ ] Define technical strategy
- [ ] Define reference architectures
- [ ] Govern architecture standards
- [ ] Align architecture with business strategy
- [ ] Design multi-region platforms
- [ ] Design multi-tenant platforms
- [ ] Design internal developer platforms
- [ ] Design architecture fitness functions
- [ ] Lead cross-team architecture
- [ ] Make high-impact trade-off decisions
- [ ] Handle organizational constraints
- [ ] Reduce systemic risk
- [ ] Mentor architects and engineers
- [ ] Evolve architecture over years

### 32.5 Production readiness competency
- [ ] Define SLOs
- [ ] Define SLIs
- [ ] Define error budgets
- [ ] Design alerts
- [ ] Design runbooks
- [ ] Design dashboards
- [ ] Conduct load tests
- [ ] Conduct failure tests
- [ ] Conduct security reviews
- [ ] Conduct cost reviews
- [ ] Conduct disaster recovery drills
- [ ] Conduct postmortems
- [ ] Track action items
- [ ] Prevent regressions
