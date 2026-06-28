---
layout: page
---
# Database Roadmap — Fundamentals to Advanced

## 1. Prerequisites

### 1.1 Computer science fundamentals
- [ ] Data structures
- [ ] Arrays
- [ ] Lists
- [ ] Hash maps
- [ ] Trees
- [ ] B-trees
- [ ] Graphs
- [ ] Queues
- [ ] Heaps
- [ ] Sorting algorithms
- [ ] Search algorithms
- [ ] Complexity analysis
- [ ] Big-O notation
- [ ] Memory model basics
- [ ] File system basics

### 1.2 Operating system fundamentals
- [ ] Processes
- [ ] Threads
- [ ] Context switching
- [ ] Virtual memory
- [ ] Page cache
- [ ] File descriptors
- [ ] Disk I/O
- [ ] fsync
- [ ] Buffering
- [ ] Memory mapping
- [ ] CPU scheduling
- [ ] I/O scheduling
- [ ] Network sockets
- [ ] System calls

### 1.3 Networking fundamentals
- [ ] TCP
- [ ] UDP
- [ ] TLS
- [ ] DNS
- [ ] Connection pooling
- [ ] Latency
- [ ] Throughput
- [ ] Packet loss
- [ ] Network partition
- [ ] Load balancing
- [ ] Firewall
- [ ] NAT
- [ ] Private network
- [ ] Public network
- [ ] Service discovery

### 1.4 Programming prerequisites
- [ ] Java database connectivity
- [ ] JDBC
- [ ] Connection lifecycle
- [ ] Prepared statements
- [ ] Transactions from code
- [ ] ORM basics
- [ ] JPA basics
- [ ] Spring Data basics
- [ ] Exception handling
- [ ] Resource cleanup
- [ ] Serialization
- [ ] JSON
- [ ] CSV
- [ ] Batch processing

### 1.5 Math and logic prerequisites
- [ ] Predicate logic
- [ ] Set theory basics
- [ ] Relations
- [ ] Tuples
- [ ] Functions
- [ ] Cardinality
- [ ] Selectivity
- [ ] Probability basics
- [ ] Statistics basics
- [ ] Histograms
- [ ] Distribution
- [ ] Sampling
- [ ] Cost estimation

---

## 2. Database Fundamentals

### 2.1 Core database concepts
- [ ] Database
- [ ] Database Management System
- [ ] Schema
- [ ] Table
- [ ] Row
- [ ] Column
- [ ] Record
- [ ] Field
- [ ] Primary key
- [ ] Foreign key
- [ ] Candidate key
- [ ] Surrogate key
- [ ] Natural key
- [ ] Constraint
- [ ] Index
- [ ] View
- [ ] Materialized view
- [ ] Transaction
- [ ] Query
- [ ] Query plan

### 2.2 Database categories
- [ ] Relational database
- [ ] Document database
- [ ] Key-value database
- [ ] Wide-column database
- [ ] Graph database
- [ ] Time-series database
- [ ] Search engine
- [ ] Vector database
- [ ] Data warehouse
- [ ] Lakehouse
- [ ] NewSQL database
- [ ] Embedded database
- [ ] In-memory database
- [ ] Distributed database
- [ ] Multi-model database

### 2.3 Workload types
- [ ] OLTP
- [ ] OLAP
- [ ] HTAP
- [ ] Batch workload
- [ ] Streaming workload
- [ ] Real-time analytics
- [ ] Event-driven workload
- [ ] Read-heavy workload
- [ ] Write-heavy workload
- [ ] Mixed workload
- [ ] Latency-sensitive workload
- [ ] Throughput-oriented workload
- [ ] Archival workload

### 2.4 Data lifecycle
- [ ] Data creation
- [ ] Data ingestion
- [ ] Data validation
- [ ] Data transformation
- [ ] Data storage
- [ ] Data indexing
- [ ] Data querying
- [ ] Data replication
- [ ] Data backup
- [ ] Data archiving
- [ ] Data retention
- [ ] Data deletion
- [ ] Data anonymization
- [ ] Data purging

### 2.5 Database responsibilities
- [ ] Durability
- [ ] Consistency
- [ ] Availability
- [ ] Concurrency
- [ ] Isolation
- [ ] Query execution
- [ ] Storage management
- [ ] Memory management
- [ ] Access control
- [ ] Backup and recovery
- [ ] Replication
- [ ] Monitoring
- [ ] Optimization

---

## 3. Relational Model

### 3.1 Relational theory
- [ ] Relation
- [ ] Tuple
- [ ] Attribute
- [ ] Domain
- [ ] Relation schema
- [ ] Relational algebra
- [ ] Projection
- [ ] Selection
- [ ] Join
- [ ] Union
- [ ] Difference
- [ ] Intersection
- [ ] Cartesian product
- [ ] Division
- [ ] Closure property

### 3.2 Keys
- [ ] Super key
- [ ] Candidate key
- [ ] Primary key
- [ ] Alternate key
- [ ] Foreign key
- [ ] Composite key
- [ ] Surrogate key
- [ ] Natural key
- [ ] Unique key
- [ ] Key stability
- [ ] Key migration
- [ ] Key generation strategy

### 3.3 Integrity constraints
- [ ] Entity integrity
- [ ] Referential integrity
- [ ] Domain integrity
- [ ] User-defined integrity
- [ ] NOT NULL constraint
- [ ] UNIQUE constraint
- [ ] PRIMARY KEY constraint
- [ ] FOREIGN KEY constraint
- [ ] CHECK constraint
- [ ] EXCLUSION constraint
- [ ] Default constraint
- [ ] Deferred constraint
- [ ] Cascading actions
- [ ] Restrict actions

### 3.4 Normalization
- [ ] First normal form
- [ ] Second normal form
- [ ] Third normal form
- [ ] Boyce-Codd normal form
- [ ] Fourth normal form
- [ ] Fifth normal form
- [ ] Functional dependency
- [ ] Partial dependency
- [ ] Transitive dependency
- [ ] Multivalued dependency
- [ ] Join dependency
- [ ] Lossless decomposition
- [ ] Dependency preservation
- [ ] Denormalization trade-offs

### 3.5 Denormalization
- [ ] Read optimization
- [ ] Redundant data
- [ ] Precomputed fields
- [ ] Summary table
- [ ] Materialized view
- [ ] Data duplication
- [ ] Update anomaly
- [ ] Consistency management
- [ ] Eventual consistency
- [ ] Denormalization governance

---

## 4. SQL Fundamentals

### 4.1 SQL language categories
- [ ] DDL
- [ ] DML
- [ ] DQL
- [ ] DCL
- [ ] TCL
- [ ] SQL standard
- [ ] Vendor-specific dialects
- [ ] PostgreSQL SQL dialect
- [ ] MySQL SQL dialect
- [ ] SQL Server T-SQL
- [ ] Oracle PL/SQL
- [ ] SQLite SQL dialect

### 4.2 DDL
- [ ] CREATE DATABASE
- [ ] CREATE SCHEMA
- [ ] CREATE TABLE
- [ ] ALTER TABLE
- [ ] DROP TABLE
- [ ] TRUNCATE TABLE
- [ ] CREATE INDEX
- [ ] DROP INDEX
- [ ] CREATE VIEW
- [ ] CREATE MATERIALIZED VIEW
- [ ] CREATE SEQUENCE
- [ ] CREATE TYPE
- [ ] CREATE FUNCTION
- [ ] CREATE TRIGGER

### 4.3 DML
- [ ] INSERT
- [ ] UPDATE
- [ ] DELETE
- [ ] MERGE
- [ ] UPSERT
- [ ] INSERT INTO SELECT
- [ ] Bulk insert
- [ ] Batch update
- [ ] Returning clause
- [ ] Conflict handling
- [ ] Idempotent writes

### 4.4 DQL
- [ ] SELECT
- [ ] FROM
- [ ] WHERE
- [ ] GROUP BY
- [ ] HAVING
- [ ] ORDER BY
- [ ] LIMIT
- [ ] OFFSET
- [ ] DISTINCT
- [ ] UNION
- [ ] INTERSECT
- [ ] EXCEPT
- [ ] Common Table Expressions
- [ ] Recursive CTEs
- [ ] Subqueries
- [ ] Correlated subqueries

### 4.5 Joins
- [ ] INNER JOIN
- [ ] LEFT JOIN
- [ ] RIGHT JOIN
- [ ] FULL OUTER JOIN
- [ ] CROSS JOIN
- [ ] SELF JOIN
- [ ] LATERAL JOIN
- [ ] Semi join
- [ ] Anti join
- [ ] Join condition
- [ ] Join cardinality
- [ ] Join order
- [ ] Join elimination

### 4.6 Aggregation
- [ ] COUNT
- [ ] SUM
- [ ] AVG
- [ ] MIN
- [ ] MAX
- [ ] GROUP BY
- [ ] HAVING
- [ ] DISTINCT aggregation
- [ ] Filtered aggregation
- [ ] GROUPING SETS
- [ ] ROLLUP
- [ ] CUBE
- [ ] Ordered-set aggregates
- [ ] Custom aggregates

### 4.7 Window functions
- [ ] OVER clause
- [ ] PARTITION BY
- [ ] ORDER BY in window
- [ ] Window frame
- [ ] ROW_NUMBER
- [ ] RANK
- [ ] DENSE_RANK
- [ ] LAG
- [ ] LEAD
- [ ] FIRST_VALUE
- [ ] LAST_VALUE
- [ ] SUM over window
- [ ] Moving average
- [ ] Running total
- [ ] Percentile functions

### 4.8 SQL expressions
- [ ] CASE
- [ ] COALESCE
- [ ] NULLIF
- [ ] CAST
- [ ] Type conversion
- [ ] String functions
- [ ] Date functions
- [ ] Numeric functions
- [ ] JSON functions
- [ ] Array functions
- [ ] Regular expressions
- [ ] Conditional expressions
- [ ] Scalar subqueries

### 4.9 Null semantics
- [ ] NULL
- [ ] Three-valued logic
- [ ] IS NULL
- [ ] IS NOT NULL
- [ ] NULL comparison
- [ ] NULL in joins
- [ ] NULL in aggregates
- [ ] NULL in unique constraints
- [ ] COALESCE
- [ ] NULL-safe equality
- [ ] Nullability design

### 4.10 Transactions in SQL
- [ ] BEGIN
- [ ] COMMIT
- [ ] ROLLBACK
- [ ] SAVEPOINT
- [ ] RELEASE SAVEPOINT
- [ ] Transaction scope
- [ ] Autocommit
- [ ] Read-only transaction
- [ ] Isolation level
- [ ] Locking statement
- [ ] Transaction timeout

---

## 5. Data Modeling

### 5.1 Conceptual modeling
- [ ] Domain analysis
- [ ] Entity identification
- [ ] Relationship identification
- [ ] Attribute identification
- [ ] Business rules
- [ ] Cardinality
- [ ] Optionality
- [ ] Ownership
- [ ] Aggregation
- [ ] Composition
- [ ] Bounded context
- [ ] Ubiquitous language

### 5.2 Logical modeling
- [ ] Entity Relationship Diagram
- [ ] Entity
- [ ] Attribute
- [ ] Relationship
- [ ] One-to-one
- [ ] One-to-many
- [ ] Many-to-many
- [ ] Associative entity
- [ ] Weak entity
- [ ] Recursive relationship
- [ ] Inheritance modeling
- [ ] Normalized schema
- [ ] Logical constraints

### 5.3 Physical modeling
- [ ] Table design
- [ ] Column design
- [ ] Data type selection
- [ ] Primary key strategy
- [ ] Foreign key strategy
- [ ] Index design
- [ ] Partitioning design
- [ ] Storage parameters
- [ ] Tablespace
- [ ] Compression
- [ ] Naming convention
- [ ] Migration strategy

### 5.4 Cardinality modeling
- [ ] One-to-one relationship
- [ ] One-to-many relationship
- [ ] Many-to-many relationship
- [ ] Optional relationship
- [ ] Mandatory relationship
- [ ] Self-reference
- [ ] Hierarchical data
- [ ] Graph-like data
- [ ] Polymorphic association
- [ ] Anti-patterns in relationships

### 5.5 Temporal modeling
- [ ] Created timestamp
- [ ] Updated timestamp
- [ ] Deleted timestamp
- [ ] Soft delete
- [ ] Hard delete
- [ ] Valid time
- [ ] Transaction time
- [ ] Bitemporal modeling
- [ ] Slowly changing dimensions
- [ ] Audit table
- [ ] History table
- [ ] Event sourcing table
- [ ] Retention policy

### 5.6 Multi-tenancy modeling
- [ ] Database per tenant
- [ ] Schema per tenant
- [ ] Shared schema
- [ ] Tenant discriminator column
- [ ] Tenant isolation
- [ ] Tenant-specific indexes
- [ ] Tenant migration
- [ ] Tenant backup
- [ ] Tenant deletion
- [ ] Cross-tenant reporting
- [ ] Noisy neighbor risk

### 5.7 Domain-driven database design
- [ ] Aggregate boundary
- [ ] Aggregate root
- [ ] Entity table
- [ ] Value object table
- [ ] Owned entity
- [ ] Domain event table
- [ ] Outbox table
- [ ] Repository boundary
- [ ] Invariant enforcement
- [ ] Transaction boundary
- [ ] Read model
- [ ] Write model

---

## 6. Data Types

### 6.1 Numeric types
- [ ] Integer
- [ ] Smallint
- [ ] Bigint
- [ ] Decimal
- [ ] Numeric
- [ ] Real
- [ ] Double precision
- [ ] Floating-point precision
- [ ] Fixed-point precision
- [ ] Money type
- [ ] Sequence-generated numeric ID
- [ ] Numeric overflow
- [ ] Rounding rules

### 6.2 Text types
- [ ] CHAR
- [ ] VARCHAR
- [ ] TEXT
- [ ] Unicode
- [ ] Collation
- [ ] Case sensitivity
- [ ] Case-insensitive text
- [ ] Full-text search
- [ ] Pattern matching
- [ ] Text indexing
- [ ] String normalization

### 6.3 Date and time types
- [ ] DATE
- [ ] TIME
- [ ] TIMESTAMP
- [ ] TIMESTAMP WITH TIME ZONE
- [ ] TIMESTAMP WITHOUT TIME ZONE
- [ ] INTERVAL
- [ ] Time zone handling
- [ ] UTC storage
- [ ] Local time representation
- [ ] Date arithmetic
- [ ] Time precision
- [ ] Clock source

### 6.4 Boolean and enumerated types
- [ ] BOOLEAN
- [ ] ENUM
- [ ] CHECK-based enum
- [ ] Lookup-table enum
- [ ] State machine column
- [ ] Status column design
- [ ] Enum migration
- [ ] Enum compatibility

### 6.5 Binary types
- [ ] BLOB
- [ ] BYTEA
- [ ] VARBINARY
- [ ] Binary large object
- [ ] File storage in database
- [ ] File storage outside database
- [ ] Content-addressable storage
- [ ] Binary compression
- [ ] Binary streaming

### 6.6 JSON types
- [ ] JSON
- [ ] JSONB
- [ ] JSON path
- [ ] JSON indexing
- [ ] Semi-structured data
- [ ] Hybrid relational-document modeling
- [ ] JSON validation
- [ ] JSON schema
- [ ] JSON anti-patterns
- [ ] Partial JSON update

### 6.7 Spatial types
- [ ] Point
- [ ] Line
- [ ] Polygon
- [ ] Geometry
- [ ] Geography
- [ ] Coordinate reference system
- [ ] Spatial index
- [ ] Distance query
- [ ] Bounding box query
- [ ] PostGIS basics

### 6.8 Specialized types
- [ ] UUID
- [ ] ULID
- [ ] Array
- [ ] Range
- [ ] Network address
- [ ] MAC address
- [ ] XML
- [ ] Vector embedding
- [ ] Full-text search vector
- [ ] Domain type
- [ ] Composite type

---

## 7. Indexing

### 7.1 Index fundamentals
- [ ] Index
- [ ] Index key
- [ ] Index entry
- [ ] Lookup
- [ ] Scan
- [ ] Seek
- [ ] Selectivity
- [ ] Cardinality
- [ ] Index maintenance
- [ ] Write overhead
- [ ] Read optimization
- [ ] Storage overhead
- [ ] Covering index

### 7.2 Index structures
- [ ] B-tree index
- [ ] Hash index
- [ ] Bitmap index
- [ ] GIN index
- [ ] GiST index
- [ ] SP-GiST index
- [ ] BRIN index
- [ ] R-tree index
- [ ] LSM-tree index
- [ ] Inverted index
- [ ] Vector index
- [ ] HNSW index
- [ ] IVF index

### 7.3 Index design
- [ ] Single-column index
- [ ] Composite index
- [ ] Column order
- [ ] Prefix index
- [ ] Partial index
- [ ] Filtered index
- [ ] Functional index
- [ ] Expression index
- [ ] Unique index
- [ ] Covering index
- [ ] Included columns
- [ ] Descending index
- [ ] Collation-specific index

### 7.4 Query-index matching
- [ ] Equality predicate
- [ ] Range predicate
- [ ] Sort optimization
- [ ] Grouping optimization
- [ ] Join optimization
- [ ] Leftmost prefix rule
- [ ] Index-only scan
- [ ] Index scan
- [ ] Bitmap index scan
- [ ] Sequential scan
- [ ] Predicate pushdown
- [ ] Sargability

### 7.5 Index maintenance
- [ ] Index bloat
- [ ] Reindex
- [ ] Vacuum
- [ ] Analyze
- [ ] Fill factor
- [ ] Fragmentation
- [ ] Page split
- [ ] Statistics update
- [ ] Unused index detection
- [ ] Duplicate index detection
- [ ] Missing index detection
- [ ] Index lifecycle

### 7.6 Index anti-patterns
- [ ] Index every column
- [ ] Overlapping indexes
- [ ] Low-selectivity index misuse
- [ ] Function on indexed column
- [ ] Leading wildcard search
- [ ] Wrong composite order
- [ ] Unused indexes
- [ ] Indexing volatile columns
- [ ] Indexing tiny tables unnecessarily
- [ ] Ignoring write amplification

---

## 8. Query Execution and Optimization

### 8.1 Query lifecycle
- [ ] SQL parsing
- [ ] Syntax analysis
- [ ] Semantic analysis
- [ ] Query rewrite
- [ ] Planning
- [ ] Optimization
- [ ] Execution
- [ ] Result materialization
- [ ] Network transfer
- [ ] Client fetch

### 8.2 Query planner
- [ ] Cost-based optimizer
- [ ] Rule-based optimization
- [ ] Statistics
- [ ] Histograms
- [ ] Selectivity estimation
- [ ] Cardinality estimation
- [ ] Cost estimation
- [ ] Join order selection
- [ ] Access path selection
- [ ] Plan cache
- [ ] Parameter sniffing
- [ ] Generic plan
- [ ] Custom plan

### 8.3 Execution plan analysis
- [ ] EXPLAIN
- [ ] EXPLAIN ANALYZE
- [ ] Estimated rows
- [ ] Actual rows
- [ ] Startup cost
- [ ] Total cost
- [ ] Planning time
- [ ] Execution time
- [ ] Buffer usage
- [ ] Sort method
- [ ] Join algorithm
- [ ] Parallel execution
- [ ] Plan regression detection

### 8.4 Scan types
- [ ] Sequential scan
- [ ] Index scan
- [ ] Index-only scan
- [ ] Bitmap index scan
- [ ] Bitmap heap scan
- [ ] Table scan
- [ ] Range scan
- [ ] Full index scan
- [ ] Covering scan
- [ ] Parallel scan

### 8.5 Join algorithms
- [ ] Nested loop join
- [ ] Hash join
- [ ] Merge join
- [ ] Broadcast join
- [ ] Semi join
- [ ] Anti join
- [ ] Join reordering
- [ ] Join condition optimization
- [ ] Join memory usage
- [ ] Join spill

### 8.6 Sorting and grouping
- [ ] In-memory sort
- [ ] External sort
- [ ] Sort spill
- [ ] Hash aggregation
- [ ] Sort aggregation
- [ ] Group aggregation
- [ ] Incremental sort
- [ ] Top-N sort
- [ ] ORDER BY optimization
- [ ] GROUP BY optimization

### 8.7 Query optimization techniques
- [ ] Predicate pushdown
- [ ] Projection pruning
- [ ] Join elimination
- [ ] Subquery unnesting
- [ ] CTE materialization control
- [ ] Limit pushdown
- [ ] Partition pruning
- [ ] Index selection
- [ ] Statistics refresh
- [ ] Query rewrite
- [ ] Pagination optimization
- [ ] Batch query design

### 8.8 Common query anti-patterns
- [ ] SELECT *
- [ ] N+1 queries
- [ ] Unbounded result sets
- [ ] Offset pagination at high offsets
- [ ] Function on indexed column
- [ ] Implicit type conversion
- [ ] Leading wildcard LIKE
- [ ] Correlated subquery misuse
- [ ] Cartesian product
- [ ] Missing join condition
- [ ] Overfetching
- [ ] Chatty database access

---

## 9. Transactions and Concurrency

### 9.1 ACID
- [ ] Atomicity
- [ ] Consistency
- [ ] Isolation
- [ ] Durability
- [ ] Commit
- [ ] Rollback
- [ ] Transaction log
- [ ] Write-ahead log
- [ ] Crash recovery
- [ ] Consistency boundary
- [ ] Transaction boundary

### 9.2 Isolation levels
- [ ] Read Uncommitted
- [ ] Read Committed
- [ ] Repeatable Read
- [ ] Serializable
- [ ] Snapshot Isolation
- [ ] Serializable Snapshot Isolation
- [ ] Vendor differences
- [ ] Default isolation level
- [ ] Isolation level selection
- [ ] Isolation testing

### 9.3 Concurrency anomalies
- [ ] Dirty read
- [ ] Non-repeatable read
- [ ] Phantom read
- [ ] Lost update
- [ ] Write skew
- [ ] Read skew
- [ ] Serialization anomaly
- [ ] Double spending
- [ ] Check-then-act race
- [ ] Concurrent insert anomaly

### 9.4 Locking
- [ ] Shared lock
- [ ] Exclusive lock
- [ ] Row lock
- [ ] Table lock
- [ ] Page lock
- [ ] Predicate lock
- [ ] Gap lock
- [ ] Next-key lock
- [ ] Advisory lock
- [ ] Optimistic lock
- [ ] Pessimistic lock
- [ ] Lock escalation
- [ ] Lock timeout
- [ ] Deadlock detection

### 9.5 MVCC
- [ ] Multi-version concurrency control
- [ ] Snapshot
- [ ] Transaction ID
- [ ] Tuple version
- [ ] Visibility rules
- [ ] Vacuum
- [ ] Undo log
- [ ] Read view
- [ ] Old row version
- [ ] Bloat
- [ ] Long-running transaction impact
- [ ] Snapshot cleanup

### 9.6 Transaction design
- [ ] Short transactions
- [ ] Long transactions
- [ ] Business transaction
- [ ] Database transaction
- [ ] Transaction boundary
- [ ] Retryable transaction
- [ ] Idempotency
- [ ] Optimistic concurrency control
- [ ] Version column
- [ ] Compare-and-swap update
- [ ] Transaction timeout
- [ ] Deadlock retry

### 9.7 Distributed transactions
- [ ] Two-phase commit
- [ ] XA transaction
- [ ] Transaction coordinator
- [ ] Prepare phase
- [ ] Commit phase
- [ ] Heuristic failure
- [ ] Saga pattern
- [ ] Outbox pattern
- [ ] Inbox pattern
- [ ] Eventual consistency
- [ ] Compensating transaction
- [ ] Idempotent consumer

---

## 10. Storage Engines and Internals

### 10.1 Storage fundamentals
- [ ] Disk page
- [ ] Block
- [ ] Extent
- [ ] Heap file
- [ ] Slotted page
- [ ] Page header
- [ ] Tuple storage
- [ ] Row store
- [ ] Column store
- [ ] Page cache
- [ ] Buffer pool
- [ ] Dirty page
- [ ] Flush
- [ ] Checkpoint

### 10.2 Row-oriented storage
- [ ] Row layout
- [ ] Tuple header
- [ ] Fixed-length column
- [ ] Variable-length column
- [ ] NULL bitmap
- [ ] TOAST-like storage
- [ ] Page split
- [ ] Heap table
- [ ] Clustered table
- [ ] Primary key clustering
- [ ] OLTP optimization

### 10.3 Column-oriented storage
- [ ] Columnar format
- [ ] Column chunk
- [ ] Compression
- [ ] Encoding
- [ ] Dictionary encoding
- [ ] Run-length encoding
- [ ] Vectorized execution
- [ ] Predicate pushdown
- [ ] Projection pruning
- [ ] OLAP optimization

### 10.4 B-tree storage
- [ ] Root page
- [ ] Internal page
- [ ] Leaf page
- [ ] Page split
- [ ] Page merge
- [ ] Tree height
- [ ] Fanout
- [ ] Range scan
- [ ] Index maintenance
- [ ] Fill factor

### 10.5 LSM-tree storage
- [ ] Memtable
- [ ] SSTable
- [ ] Write-ahead log
- [ ] Flush
- [ ] Compaction
- [ ] Levelled compaction
- [ ] Size-tiered compaction
- [ ] Write amplification
- [ ] Read amplification
- [ ] Space amplification
- [ ] Bloom filter
- [ ] Tombstone

### 10.6 Logging and recovery
- [ ] Write-ahead log
- [ ] Redo log
- [ ] Undo log
- [ ] Transaction log
- [ ] Binary log
- [ ] Commit log
- [ ] Checkpoint
- [ ] Crash recovery
- [ ] Roll-forward recovery
- [ ] Rollback recovery
- [ ] Log sequence number
- [ ] Point-in-time recovery

### 10.7 Memory management
- [ ] Buffer pool
- [ ] Shared buffers
- [ ] Page cache
- [ ] Work memory
- [ ] Sort memory
- [ ] Hash memory
- [ ] Connection memory
- [ ] Cache hit ratio
- [ ] Eviction policy
- [ ] Dirty page flushing
- [ ] NUMA considerations

---

## 11. PostgreSQL

### 11.1 PostgreSQL fundamentals
- [ ] PostgreSQL architecture
- [ ] Process-per-connection model
- [ ] Database
- [ ] Schema
- [ ] Role
- [ ] Tablespace
- [ ] Extension
- [ ] System catalog
- [ ] `psql`
- [ ] `postgresql.conf`
- [ ] `pg_hba.conf`
- [ ] `pg_ident.conf`

### 11.2 PostgreSQL SQL features
- [ ] Advanced SQL
- [ ] CTEs
- [ ] Recursive queries
- [ ] Window functions
- [ ] LATERAL joins
- [ ] DISTINCT ON
- [ ] RETURNING
- [ ] UPSERT
- [ ] Arrays
- [ ] Ranges
- [ ] JSONB
- [ ] Full-text search
- [ ] Generated columns
- [ ] Exclusion constraints

### 11.3 PostgreSQL indexes
- [ ] B-tree
- [ ] Hash
- [ ] GIN
- [ ] GiST
- [ ] SP-GiST
- [ ] BRIN
- [ ] Partial index
- [ ] Expression index
- [ ] Covering index
- [ ] Multicolumn index
- [ ] Operator class
- [ ] Index-only scan
- [ ] Reindex concurrently

### 11.4 PostgreSQL MVCC
- [ ] Tuple versioning
- [ ] Transaction ID
- [ ] xmin
- [ ] xmax
- [ ] Snapshot visibility
- [ ] Vacuum
- [ ] Autovacuum
- [ ] Freeze
- [ ] Bloat
- [ ] HOT update
- [ ] Visibility map
- [ ] Free space map
- [ ] Long transaction impact

### 11.5 PostgreSQL transactions
- [ ] Read Committed
- [ ] Repeatable Read
- [ ] Serializable
- [ ] Serializable Snapshot Isolation
- [ ] Row-level locks
- [ ] Table-level locks
- [ ] Advisory locks
- [ ] Savepoints
- [ ] Deadlocks
- [ ] Lock monitoring
- [ ] `FOR UPDATE`
- [ ] `FOR SHARE`
- [ ] `SKIP LOCKED`
- [ ] `NOWAIT`

### 11.6 PostgreSQL performance
- [ ] EXPLAIN
- [ ] EXPLAIN ANALYZE
- [ ] Buffers
- [ ] Planning time
- [ ] Execution time
- [ ] Statistics
- [ ] ANALYZE
- [ ] `pg_stat_statements`
- [ ] `auto_explain`
- [ ] Slow query logging
- [ ] Connection pooling
- [ ] PgBouncer
- [ ] Work memory tuning
- [ ] Shared buffers tuning

### 11.7 PostgreSQL replication
- [ ] WAL
- [ ] WAL archiving
- [ ] Streaming replication
- [ ] Physical replication
- [ ] Logical replication
- [ ] Publication
- [ ] Subscription
- [ ] Replication slot
- [ ] Synchronous replication
- [ ] Asynchronous replication
- [ ] Hot standby
- [ ] Failover
- [ ] Timeline
- [ ] Replication lag

### 11.8 PostgreSQL backup and recovery
- [ ] Logical backup
- [ ] `pg_dump`
- [ ] `pg_dumpall`
- [ ] Physical backup
- [ ] `pg_basebackup`
- [ ] WAL archive
- [ ] Point-in-time recovery
- [ ] Restore
- [ ] Backup verification
- [ ] Backup encryption
- [ ] Backup compression
- [ ] Backup retention
- [ ] Disaster recovery drill

### 11.9 PostgreSQL extensions
- [ ] PostGIS
- [ ] pg_stat_statements
- [ ] pg_trgm
- [ ] hstore
- [ ] uuid-ossp
- [ ] citext
- [ ] btree_gin
- [ ] btree_gist
- [ ] pgcrypto
- [ ] postgres_fdw
- [ ] pgvector
- [ ] TimescaleDB
- [ ] Citus

### 11.10 PostgreSQL operations
- [ ] Version upgrade
- [ ] Minor upgrade
- [ ] Major upgrade
- [ ] `pg_upgrade`
- [ ] Logical migration
- [ ] Configuration tuning
- [ ] Autovacuum tuning
- [ ] Monitoring
- [ ] Alerting
- [ ] High availability
- [ ] Patroni
- [ ] Cloud-managed PostgreSQL
- [ ] Kubernetes operator

---

## 12. MySQL and MariaDB

### 12.1 MySQL fundamentals
- [ ] MySQL architecture
- [ ] Server process
- [ ] Database
- [ ] Schema
- [ ] User
- [ ] Privilege
- [ ] Storage engine
- [ ] InnoDB
- [ ] MySQL client
- [ ] Configuration file
- [ ] SQL mode
- [ ] Character set
- [ ] Collation

### 12.2 InnoDB
- [ ] Clustered index
- [ ] Primary key design
- [ ] Secondary index
- [ ] Buffer pool
- [ ] Redo log
- [ ] Undo log
- [ ] Doublewrite buffer
- [ ] Change buffer
- [ ] Adaptive hash index
- [ ] Insert buffer
- [ ] Purge
- [ ] MVCC
- [ ] Gap locks
- [ ] Next-key locks

### 12.3 MySQL SQL features
- [ ] Joins
- [ ] CTEs
- [ ] Window functions
- [ ] Generated columns
- [ ] JSON columns
- [ ] CHECK constraints
- [ ] UPSERT
- [ ] `ON DUPLICATE KEY UPDATE`
- [ ] Stored procedures
- [ ] Stored functions
- [ ] Triggers
- [ ] Events
- [ ] Views

### 12.4 MySQL indexing
- [ ] Primary key index
- [ ] Secondary index
- [ ] Composite index
- [ ] Covering index
- [ ] Prefix index
- [ ] Full-text index
- [ ] Spatial index
- [ ] Invisible index
- [ ] Functional index
- [ ] Index condition pushdown
- [ ] Leftmost prefix rule

### 12.5 MySQL transactions
- [ ] Autocommit
- [ ] Read Committed
- [ ] Repeatable Read
- [ ] Serializable
- [ ] Consistent read
- [ ] Locking read
- [ ] Gap lock
- [ ] Next-key lock
- [ ] Deadlock detection
- [ ] Lock wait timeout
- [ ] Transaction isolation behavior

### 12.6 MySQL replication
- [ ] Binary log
- [ ] Statement-based replication
- [ ] Row-based replication
- [ ] Mixed replication
- [ ] GTID
- [ ] Source-replica replication
- [ ] Semi-synchronous replication
- [ ] Group Replication
- [ ] InnoDB Cluster
- [ ] Replication lag
- [ ] Failover
- [ ] Read replicas

### 12.7 MySQL backup and recovery
- [ ] Logical backup
- [ ] `mysqldump`
- [ ] `mysqlpump`
- [ ] Physical backup
- [ ] MySQL Enterprise Backup
- [ ] Percona XtraBackup
- [ ] Binary log backup
- [ ] Point-in-time recovery
- [ ] Restore testing
- [ ] Backup verification
- [ ] Backup compression
- [ ] Backup encryption

### 12.8 MariaDB
- [ ] MariaDB architecture
- [ ] MariaDB vs MySQL
- [ ] Storage engines
- [ ] Aria
- [ ] XtraDB
- [ ] ColumnStore
- [ ] Galera Cluster
- [ ] MariaDB replication
- [ ] MariaDB SQL differences
- [ ] Compatibility considerations
- [ ] Migration considerations

### 12.9 MySQL operations
- [ ] MySQL 8.4 LTS
- [ ] Innovation releases
- [ ] MySQL 8.0 EOL awareness
- [ ] Configuration tuning
- [ ] Buffer pool tuning
- [ ] Slow query log
- [ ] Performance Schema
- [ ] EXPLAIN
- [ ] Query digest
- [ ] Connection pooling
- [ ] High availability
- [ ] Cloud-managed MySQL

---

## 13. SQL Server and Oracle Database

### 13.1 SQL Server fundamentals
- [ ] Database
- [ ] Schema
- [ ] Table
- [ ] Filegroup
- [ ] Transaction log
- [ ] T-SQL
- [ ] Stored procedure
- [ ] Function
- [ ] Trigger
- [ ] View
- [ ] Indexed view
- [ ] SQL Server Agent
- [ ] Management Studio
- [ ] Query Store

### 13.2 SQL Server performance
- [ ] Execution plan
- [ ] Estimated plan
- [ ] Actual plan
- [ ] Clustered index
- [ ] Nonclustered index
- [ ] Columnstore index
- [ ] Statistics
- [ ] Parameter sniffing
- [ ] Query Store
- [ ] Wait statistics
- [ ] TempDB
- [ ] Locking
- [ ] Blocking
- [ ] Deadlocks

### 13.3 SQL Server high availability
- [ ] Always On Availability Groups
- [ ] Failover Cluster Instance
- [ ] Log shipping
- [ ] Database mirroring legacy
- [ ] Replication
- [ ] Backup strategy
- [ ] Full backup
- [ ] Differential backup
- [ ] Transaction log backup
- [ ] Point-in-time restore

### 13.4 Oracle fundamentals
- [ ] Oracle instance
- [ ] Oracle database
- [ ] SGA
- [ ] PGA
- [ ] Tablespace
- [ ] Datafile
- [ ] Redo log
- [ ] Undo tablespace
- [ ] Control file
- [ ] PL/SQL
- [ ] Package
- [ ] Procedure
- [ ] Function
- [ ] Sequence
- [ ] Synonym

### 13.5 Oracle performance and HA
- [ ] Execution plan
- [ ] Optimizer statistics
- [ ] AWR
- [ ] ASH
- [ ] Explain plan
- [ ] Index types
- [ ] Partitioning
- [ ] Materialized views
- [ ] RAC
- [ ] Data Guard
- [ ] RMAN backup
- [ ] Flashback
- [ ] GoldenGate

---

## 14. SQLite and Embedded Databases

### 14.1 SQLite fundamentals
- [ ] Embedded database
- [ ] Serverless model
- [ ] Single-file database
- [ ] SQLite CLI
- [ ] SQLite data types
- [ ] Type affinity
- [ ] Rowid table
- [ ] WITHOUT ROWID table
- [ ] Pragmas
- [ ] Journaling
- [ ] WAL mode
- [ ] Vacuum
- [ ] Backup API

### 14.2 SQLite concurrency
- [ ] File locking
- [ ] Read concurrency
- [ ] Write concurrency
- [ ] Single-writer model
- [ ] WAL mode behavior
- [ ] Busy timeout
- [ ] Transaction modes
- [ ] Deferred transaction
- [ ] Immediate transaction
- [ ] Exclusive transaction

### 14.3 Embedded database use cases
- [ ] Local app storage
- [ ] Mobile app storage
- [ ] Desktop app storage
- [ ] Edge device storage
- [ ] Test database
- [ ] Cache database
- [ ] Single-user workloads
- [ ] Offline-first apps
- [ ] Embedded analytics

### 14.4 Other embedded databases
- [ ] H2
- [ ] HSQLDB
- [ ] Derby
- [ ] DuckDB
- [ ] RocksDB
- [ ] LMDB
- [ ] LevelDB
- [ ] Embedded PostgreSQL for tests
- [ ] Testcontainers alternative
- [ ] Compatibility caveats

---

## 15. Document Databases

### 15.1 Document database fundamentals
- [ ] Document model
- [ ] Collection
- [ ] Document
- [ ] Field
- [ ] Nested document
- [ ] Array field
- [ ] Flexible schema
- [ ] Schema validation
- [ ] Denormalization
- [ ] Embedding
- [ ] Referencing
- [ ] Document identity
- [ ] BSON
- [ ] JSON-like storage

### 15.2 MongoDB fundamentals
- [ ] Database
- [ ] Collection
- [ ] Document
- [ ] `_id`
- [ ] BSON
- [ ] CRUD operations
- [ ] Query filter
- [ ] Projection
- [ ] Update operator
- [ ] Aggregation pipeline
- [ ] Index
- [ ] Replica set
- [ ] Sharding
- [ ] Transactions
- [ ] Atlas

### 15.3 MongoDB data modeling
- [ ] Embed vs reference
- [ ] One-to-one modeling
- [ ] One-to-many modeling
- [ ] Many-to-many modeling
- [ ] Bucket pattern
- [ ] Outlier pattern
- [ ] Computed pattern
- [ ] Subset pattern
- [ ] Attribute pattern
- [ ] Polymorphic pattern
- [ ] Schema versioning
- [ ] Document growth
- [ ] Atomic document update

### 15.4 MongoDB indexing
- [ ] Single-field index
- [ ] Compound index
- [ ] Multikey index
- [ ] Text index
- [ ] Hashed index
- [ ] TTL index
- [ ] Partial index
- [ ] Sparse index
- [ ] Wildcard index
- [ ] Geospatial index
- [ ] Hidden index
- [ ] Index intersection
- [ ] Covered query

### 15.5 MongoDB aggregation
- [ ] Pipeline
- [ ] `$match`
- [ ] `$project`
- [ ] `$group`
- [ ] `$sort`
- [ ] `$limit`
- [ ] `$skip`
- [ ] `$lookup`
- [ ] `$unwind`
- [ ] `$facet`
- [ ] `$bucket`
- [ ] `$merge`
- [ ] `$out`
- [ ] Window operators

### 15.6 MongoDB operations
- [ ] Replica set
- [ ] Primary
- [ ] Secondary
- [ ] Arbiter
- [ ] Election
- [ ] Read preference
- [ ] Write concern
- [ ] Read concern
- [ ] Oplog
- [ ] Change streams
- [ ] Sharded cluster
- [ ] Config server
- [ ] Mongos
- [ ] Balancer
- [ ] Chunk migration
- [ ] Backup and restore

### 15.7 Other document databases
- [ ] CouchDB
- [ ] Firestore
- [ ] DocumentDB
- [ ] Cosmos DB document API
- [ ] RavenDB
- [ ] Couchbase document model
- [ ] Offline sync
- [ ] Conflict resolution
- [ ] Document database selection

---

## 16. Key-Value and Cache Databases

### 16.1 Key-value fundamentals
- [ ] Key
- [ ] Value
- [ ] Namespace
- [ ] TTL
- [ ] Expiration
- [ ] Eviction
- [ ] Atomic operation
- [ ] In-memory storage
- [ ] Persistent key-value storage
- [ ] Cache-aside
- [ ] Read-through
- [ ] Write-through
- [ ] Write-behind

### 16.2 Redis fundamentals
- [ ] Redis data model
- [ ] String
- [ ] List
- [ ] Set
- [ ] Sorted set
- [ ] Hash
- [ ] Stream
- [ ] Bitmap
- [ ] HyperLogLog
- [ ] Geospatial index
- [ ] Pub/Sub
- [ ] Key expiration
- [ ] Transactions
- [ ] Lua scripting
- [ ] Redis Functions

### 16.3 Redis caching
- [ ] Cache-aside pattern
- [ ] Cache key design
- [ ] TTL strategy
- [ ] Eviction policy
- [ ] LRU
- [ ] LFU
- [ ] Write-through
- [ ] Write-behind
- [ ] Cache stampede
- [ ] Cache penetration
- [ ] Cache avalanche
- [ ] Hot key
- [ ] Distributed lock
- [ ] Rate limiting

### 16.4 Redis persistence and HA
- [ ] RDB snapshot
- [ ] AOF
- [ ] AOF rewrite
- [ ] Replication
- [ ] Sentinel
- [ ] Redis Cluster
- [ ] Hash slots
- [ ] Resharding
- [ ] Failover
- [ ] Split brain
- [ ] Backup
- [ ] Restore
- [ ] Memory fragmentation

### 16.5 Redis performance
- [ ] Single-threaded execution model
- [ ] I/O threading
- [ ] Pipeline
- [ ] Batch operations
- [ ] Big keys
- [ ] Slowlog
- [ ] Latency monitor
- [ ] Memory usage
- [ ] Keyspace analysis
- [ ] Eviction monitoring
- [ ] Command complexity
- [ ] Connection pooling

### 16.6 Other key-value stores
- [ ] Memcached
- [ ] DynamoDB
- [ ] FoundationDB
- [ ] RocksDB
- [ ] LevelDB
- [ ] Consul KV
- [ ] etcd
- [ ] Aerospike
- [ ] Hazelcast
- [ ] Key-value store selection

---

## 17. Wide-Column Databases

### 17.1 Wide-column fundamentals
- [ ] Column family
- [ ] Row key
- [ ] Partition key
- [ ] Clustering key
- [ ] Sparse columns
- [ ] Distributed storage
- [ ] High write throughput
- [ ] Tunable consistency
- [ ] Denormalized query modeling
- [ ] Query-first design

### 17.2 Cassandra fundamentals
- [ ] Cluster
- [ ] Node
- [ ] Datacenter
- [ ] Rack
- [ ] Keyspace
- [ ] Table
- [ ] Partition
- [ ] Replica
- [ ] Commit log
- [ ] Memtable
- [ ] SSTable
- [ ] Compaction
- [ ] Tombstone
- [ ] Repair

### 17.3 Cassandra data modeling
- [ ] Query-driven modeling
- [ ] Partition key design
- [ ] Clustering column design
- [ ] Wide partition
- [ ] Hot partition
- [ ] Denormalization
- [ ] Materialized views caveats
- [ ] Secondary index caveats
- [ ] Time-series modeling
- [ ] Bucketing
- [ ] TTL usage
- [ ] Tombstone avoidance

### 17.4 Cassandra consistency
- [ ] Consistency level
- [ ] ONE
- [ ] QUORUM
- [ ] LOCAL_QUORUM
- [ ] ALL
- [ ] Read repair
- [ ] Hinted handoff
- [ ] Anti-entropy repair
- [ ] Lightweight transaction
- [ ] Paxos
- [ ] Eventual consistency
- [ ] Tunable consistency

### 17.5 Cassandra operations
- [ ] Gossip
- [ ] Ring topology
- [ ] Token range
- [ ] VNode
- [ ] Bootstrap
- [ ] Decommission
- [ ] Rebalance
- [ ] Repair
- [ ] Backup
- [ ] Restore
- [ ] Compaction strategy
- [ ] Monitoring
- [ ] Node replacement

### 17.6 Other wide-column systems
- [ ] HBase
- [ ] Bigtable
- [ ] ScyllaDB
- [ ] Azure Cosmos DB Cassandra API
- [ ] DynamoDB wide-column modeling
- [ ] Wide-column database selection

---

## 18. Graph Databases

### 18.1 Graph fundamentals
- [ ] Graph
- [ ] Node
- [ ] Edge
- [ ] Property
- [ ] Label
- [ ] Relationship type
- [ ] Directed graph
- [ ] Undirected graph
- [ ] Path
- [ ] Traversal
- [ ] Centrality
- [ ] Community detection
- [ ] Graph algorithms

### 18.2 Graph data modeling
- [ ] Node modeling
- [ ] Relationship modeling
- [ ] Property modeling
- [ ] Relationship direction
- [ ] Relationship cardinality
- [ ] Hyperedge modeling
- [ ] Temporal graph
- [ ] Hierarchical data
- [ ] Social graph
- [ ] Recommendation graph
- [ ] Fraud graph
- [ ] Knowledge graph

### 18.3 Neo4j
- [ ] Neo4j database
- [ ] Cypher
- [ ] MATCH
- [ ] CREATE
- [ ] MERGE
- [ ] WHERE
- [ ] RETURN
- [ ] WITH
- [ ] UNWIND
- [ ] Path pattern
- [ ] Variable-length path
- [ ] Index
- [ ] Constraint
- [ ] Transaction
- [ ] Query profiling

### 18.4 Graph operations
- [ ] Graph traversal performance
- [ ] Index-backed lookup
- [ ] Relationship expansion
- [ ] Path explosion
- [ ] Query plan
- [ ] Memory usage
- [ ] Graph backup
- [ ] Graph clustering
- [ ] Graph import
- [ ] Graph export

### 18.5 Other graph systems
- [ ] Amazon Neptune
- [ ] JanusGraph
- [ ] ArangoDB
- [ ] OrientDB
- [ ] TigerGraph
- [ ] Cosmos DB Gremlin API
- [ ] RDF triple store
- [ ] SPARQL
- [ ] Gremlin
- [ ] Graph database selection

---

## 19. Search Engines

### 19.1 Search fundamentals
- [ ] Inverted index
- [ ] Tokenization
- [ ] Analyzer
- [ ] Normalizer
- [ ] Stemming
- [ ] Stop words
- [ ] Synonyms
- [ ] Term frequency
- [ ] Inverse document frequency
- [ ] BM25
- [ ] Relevance scoring
- [ ] Faceting
- [ ] Aggregation
- [ ] Highlighting

### 19.2 Elasticsearch
- [ ] Cluster
- [ ] Node
- [ ] Index
- [ ] Shard
- [ ] Replica
- [ ] Document
- [ ] Mapping
- [ ] Analyzer
- [ ] Query DSL
- [ ] Full-text query
- [ ] Term-level query
- [ ] Aggregation
- [ ] Ingest pipeline
- [ ] ILM
- [ ] Snapshot
- [ ] Restore

### 19.3 OpenSearch
- [ ] OpenSearch cluster
- [ ] Index lifecycle
- [ ] Security plugin
- [ ] Dashboards
- [ ] Alerting
- [ ] Anomaly detection
- [ ] ISM
- [ ] Snapshot repository
- [ ] Cross-cluster search
- [ ] Compatibility considerations

### 19.4 Search modeling
- [ ] Index-per-domain
- [ ] Denormalized document
- [ ] Nested document
- [ ] Parent-child relationship
- [ ] Mapping strategy
- [ ] Keyword vs text
- [ ] Multi-field
- [ ] Autocomplete
- [ ] Fuzzy search
- [ ] Synonym expansion
- [ ] Relevance tuning
- [ ] Search result ranking

### 19.5 Search operations
- [ ] Shard sizing
- [ ] Replica count
- [ ] Refresh interval
- [ ] Segment merging
- [ ] Heap sizing
- [ ] JVM tuning
- [ ] Snapshot strategy
- [ ] Reindexing
- [ ] Zero-downtime reindex
- [ ] Cluster health
- [ ] Hot-warm-cold architecture
- [ ] Index lifecycle management

---

## 20. Time-Series Databases

### 20.1 Time-series fundamentals
- [ ] Time-series data
- [ ] Timestamp
- [ ] Metric
- [ ] Tag
- [ ] Label
- [ ] Field
- [ ] Retention
- [ ] Downsampling
- [ ] Aggregation window
- [ ] Rollup
- [ ] Compression
- [ ] High ingest rate
- [ ] Late-arriving data
- [ ] Cardinality

### 20.2 Prometheus
- [ ] Metric name
- [ ] Label
- [ ] Sample
- [ ] Time series
- [ ] Scrape
- [ ] Target
- [ ] Exporter
- [ ] PromQL
- [ ] Recording rule
- [ ] Alerting rule
- [ ] Retention
- [ ] Remote write
- [ ] Federation
- [ ] High cardinality problem

### 20.3 InfluxDB
- [ ] Measurement
- [ ] Tag
- [ ] Field
- [ ] Point
- [ ] Bucket
- [ ] Retention policy
- [ ] Line protocol
- [ ] Flux
- [ ] InfluxQL
- [ ] Downsampling
- [ ] Continuous query
- [ ] Ingest optimization

### 20.4 TimescaleDB
- [ ] Hypertable
- [ ] Chunk
- [ ] Continuous aggregate
- [ ] Compression
- [ ] Retention policy
- [ ] Data retention
- [ ] PostgreSQL compatibility
- [ ] Time partitioning
- [ ] Gap filling
- [ ] Time-series indexing
- [ ] Distributed hypertable

### 20.5 Other time-series systems
- [ ] VictoriaMetrics
- [ ] Mimir
- [ ] Thanos
- [ ] QuestDB
- [ ] ClickHouse for time-series
- [ ] OpenTSDB
- [ ] Graphite
- [ ] Time-series database selection

---

## 21. Vector Databases and AI Retrieval

### 21.1 Vector fundamentals
- [ ] Embedding
- [ ] Vector
- [ ] Dimension
- [ ] Similarity
- [ ] Cosine similarity
- [ ] Dot product
- [ ] Euclidean distance
- [ ] Approximate nearest neighbor
- [ ] Exact nearest neighbor
- [ ] Recall
- [ ] Precision
- [ ] Hybrid search
- [ ] Reranking

### 21.2 Vector indexes
- [ ] HNSW
- [ ] IVF
- [ ] PQ
- [ ] Flat index
- [ ] Quantization
- [ ] Index build time
- [ ] Index memory usage
- [ ] Search latency
- [ ] Recall tuning
- [ ] Filtered vector search
- [ ] Metadata filtering

### 21.3 Vector database systems
- [ ] pgvector
- [ ] MongoDB Atlas Vector Search
- [ ] Elasticsearch vector search
- [ ] OpenSearch vector search
- [ ] Milvus
- [ ] Weaviate
- [ ] Qdrant
- [ ] Pinecone
- [ ] Chroma
- [ ] Vespa
- [ ] Redis vector search

### 21.4 RAG storage design
- [ ] Document chunking
- [ ] Chunk metadata
- [ ] Embedding model version
- [ ] Vector collection
- [ ] Hybrid retrieval
- [ ] Metadata filtering
- [ ] Reranking
- [ ] Retrieval evaluation
- [ ] Stale embedding handling
- [ ] Re-embedding pipeline
- [ ] Deletion propagation
- [ ] Access control filtering

### 21.5 Vector operations
- [ ] Embedding ingestion
- [ ] Batch indexing
- [ ] Incremental indexing
- [ ] Index rebuild
- [ ] Similarity query
- [ ] Hybrid query
- [ ] Latency monitoring
- [ ] Recall monitoring
- [ ] Cost monitoring
- [ ] Data privacy
- [ ] Multi-tenant vector search

---

## 22. Data Warehousing and Analytics

### 22.1 Analytical fundamentals
- [ ] OLAP
- [ ] Fact table
- [ ] Dimension table
- [ ] Star schema
- [ ] Snowflake schema
- [ ] Slowly changing dimension
- [ ] Measure
- [ ] Grain
- [ ] Aggregation
- [ ] Cube
- [ ] Drill-down
- [ ] Roll-up
- [ ] Slice
- [ ] Dice

### 22.2 Columnar analytics
- [ ] Columnar storage
- [ ] Compression
- [ ] Encoding
- [ ] Vectorized execution
- [ ] Predicate pushdown
- [ ] Projection pruning
- [ ] Partition pruning
- [ ] Data skipping
- [ ] Zone maps
- [ ] Materialized aggregates
- [ ] Late materialization

### 22.3 Warehouse systems
- [ ] Snowflake
- [ ] BigQuery
- [ ] Redshift
- [ ] Synapse
- [ ] ClickHouse
- [ ] DuckDB
- [ ] Trino
- [ ] Presto
- [ ] Hive
- [ ] Greenplum
- [ ] Vertica

### 22.4 Data lake and lakehouse
- [ ] Data lake
- [ ] Lakehouse
- [ ] Object storage
- [ ] Parquet
- [ ] ORC
- [ ] Avro
- [ ] Delta Lake
- [ ] Apache Iceberg
- [ ] Apache Hudi
- [ ] Table format
- [ ] Metadata catalog
- [ ] Schema evolution
- [ ] Partition evolution
- [ ] Time travel

### 22.5 Analytics operations
- [ ] ETL
- [ ] ELT
- [ ] Data pipeline
- [ ] Batch ingestion
- [ ] Streaming ingestion
- [ ] Data quality
- [ ] Data lineage
- [ ] Data catalog
- [ ] Cost optimization
- [ ] Workload management
- [ ] Query concurrency
- [ ] Governance

---

## 23. Distributed Databases

### 23.1 Distributed systems basics
- [ ] Node
- [ ] Cluster
- [ ] Shard
- [ ] Replica
- [ ] Partition
- [ ] Leader
- [ ] Follower
- [ ] Quorum
- [ ] Consensus
- [ ] Replication
- [ ] Network partition
- [ ] Clock skew
- [ ] Failure detection
- [ ] Split brain

### 23.2 CAP and consistency models
- [ ] CAP theorem
- [ ] Consistency
- [ ] Availability
- [ ] Partition tolerance
- [ ] Strong consistency
- [ ] Eventual consistency
- [ ] Causal consistency
- [ ] Read-your-writes consistency
- [ ] Monotonic reads
- [ ] Session consistency
- [ ] Linearizability
- [ ] Serializability
- [ ] Staleness bounds

### 23.3 Replication strategies
- [ ] Single-leader replication
- [ ] Multi-leader replication
- [ ] Leaderless replication
- [ ] Synchronous replication
- [ ] Asynchronous replication
- [ ] Semi-synchronous replication
- [ ] Quorum replication
- [ ] Chain replication
- [ ] Log shipping
- [ ] Conflict resolution
- [ ] Last-write-wins
- [ ] Vector clocks
- [ ] CRDTs

### 23.4 Sharding
- [ ] Horizontal partitioning
- [ ] Shard key
- [ ] Hash sharding
- [ ] Range sharding
- [ ] Directory-based sharding
- [ ] Composite shard key
- [ ] Hot shard
- [ ] Resharding
- [ ] Rebalancing
- [ ] Global secondary index
- [ ] Cross-shard query
- [ ] Cross-shard transaction
- [ ] Data locality

### 23.5 Consensus
- [ ] Raft
- [ ] Paxos
- [ ] Multi-Paxos
- [ ] Leader election
- [ ] Log replication
- [ ] Commit index
- [ ] Term
- [ ] Majority quorum
- [ ] Membership change
- [ ] Failure recovery
- [ ] Consensus latency
- [ ] Consensus trade-offs

### 23.6 Distributed SQL and NewSQL
- [ ] CockroachDB
- [ ] YugabyteDB
- [ ] TiDB
- [ ] Spanner
- [ ] AlloyDB
- [ ] Distributed transactions
- [ ] Global consistency
- [ ] Hybrid logical clocks
- [ ] Timestamp ordering
- [ ] Raft groups
- [ ] Transaction coordinator
- [ ] Geo-partitioning
- [ ] Distributed query planning

---

## 24. Replication, HA, and Disaster Recovery

### 24.1 Replication fundamentals
- [ ] Primary-replica replication
- [ ] Source-replica replication
- [ ] Multi-primary replication
- [ ] Logical replication
- [ ] Physical replication
- [ ] Statement replication
- [ ] Row replication
- [ ] WAL replication
- [ ] Binlog replication
- [ ] Replication slot
- [ ] Replication lag
- [ ] Replication topology

### 24.2 High availability
- [ ] Failover
- [ ] Switchover
- [ ] Automatic failover
- [ ] Manual failover
- [ ] Leader election
- [ ] Health checks
- [ ] Fencing
- [ ] Split-brain prevention
- [ ] Virtual IP
- [ ] Load balancer
- [ ] Read replica
- [ ] Write endpoint
- [ ] Connection redirection

### 24.3 Backup strategy
- [ ] Full backup
- [ ] Incremental backup
- [ ] Differential backup
- [ ] Logical backup
- [ ] Physical backup
- [ ] Snapshot backup
- [ ] Hot backup
- [ ] Cold backup
- [ ] Backup encryption
- [ ] Backup compression
- [ ] Backup retention
- [ ] Backup verification
- [ ] Restore testing

### 24.4 Recovery strategy
- [ ] Restore
- [ ] Point-in-time recovery
- [ ] Crash recovery
- [ ] Disaster recovery
- [ ] RPO
- [ ] RTO
- [ ] Recovery runbook
- [ ] Failover runbook
- [ ] Backup catalog
- [ ] Recovery drill
- [ ] Cross-region restore
- [ ] Data validation after restore

### 24.5 Multi-region design
- [ ] Active-passive
- [ ] Active-active
- [ ] Read replica region
- [ ] Regional failover
- [ ] Global database
- [ ] Geo-partitioning
- [ ] Data residency
- [ ] Latency-aware routing
- [ ] Conflict resolution
- [ ] Regional backup
- [ ] Cross-region replication

---

## 25. Security

### 25.1 Authentication
- [ ] Local users
- [ ] Password authentication
- [ ] Certificate authentication
- [ ] LDAP
- [ ] Kerberos
- [ ] IAM authentication
- [ ] OAuth/OIDC integration
- [ ] Service accounts
- [ ] Application users
- [ ] Human users
- [ ] Break-glass access
- [ ] Authentication auditing

### 25.2 Authorization
- [ ] Role
- [ ] Privilege
- [ ] Grant
- [ ] Revoke
- [ ] Schema-level permission
- [ ] Table-level permission
- [ ] Column-level permission
- [ ] Row-level security
- [ ] View-based access
- [ ] Least privilege
- [ ] Separation of duties
- [ ] Privilege review

### 25.3 Encryption
- [ ] Encryption in transit
- [ ] TLS
- [ ] mTLS
- [ ] Encryption at rest
- [ ] Transparent Data Encryption
- [ ] Column-level encryption
- [ ] Field-level encryption
- [ ] Application-level encryption
- [ ] Key management
- [ ] Key rotation
- [ ] KMS integration
- [ ] Envelope encryption

### 25.4 Secrets management
- [ ] Database credentials
- [ ] Password rotation
- [ ] Dynamic credentials
- [ ] Vault integration
- [ ] Cloud secret manager
- [ ] Kubernetes Secrets
- [ ] External Secrets Operator
- [ ] Credential leakage prevention
- [ ] Connection string security
- [ ] Secret scanning

### 25.5 SQL injection prevention
- [ ] Prepared statements
- [ ] Parameter binding
- [ ] ORM query parameters
- [ ] Input validation
- [ ] Escaping limitations
- [ ] Dynamic SQL risk
- [ ] Stored procedure risk
- [ ] Least privilege mitigation
- [ ] Error message hardening
- [ ] Security testing

### 25.6 Auditing and compliance
- [ ] Login auditing
- [ ] Query auditing
- [ ] DDL auditing
- [ ] Privilege change auditing
- [ ] Sensitive data access auditing
- [ ] Audit log retention
- [ ] Audit log integrity
- [ ] GDPR
- [ ] PCI DSS
- [ ] HIPAA
- [ ] SOC 2
- [ ] Data classification
- [ ] Data masking
- [ ] Data anonymization

---

## 26. Migrations and Schema Evolution

### 26.1 Migration fundamentals
- [ ] Schema migration
- [ ] Data migration
- [ ] Versioned migration
- [ ] Repeatable migration
- [ ] Forward-only migration
- [ ] Rollback migration
- [ ] Migration checksum
- [ ] Migration ordering
- [ ] Migration lock
- [ ] Migration history table

### 26.2 Migration tools
- [ ] Flyway
- [ ] Liquibase
- [ ] Alembic
- [ ] Rails migrations
- [ ] Prisma migrations
- [ ] Entity Framework migrations
- [ ] Django migrations
- [ ] Goose
- [ ] Sqitch
- [ ] Manual migration scripts

### 26.3 Safe schema changes
- [ ] Add nullable column
- [ ] Backfill data
- [ ] Add constraint not valid
- [ ] Validate constraint
- [ ] Add index concurrently
- [ ] Rename column safely
- [ ] Drop column safely
- [ ] Expand-contract pattern
- [ ] Backward-compatible migration
- [ ] Forward-compatible migration
- [ ] Dual-write migration
- [ ] Read switch
- [ ] Cleanup phase

### 26.4 Zero-downtime migration
- [ ] Online DDL
- [ ] Concurrent index creation
- [ ] Lock impact analysis
- [ ] Batch backfill
- [ ] Throttled backfill
- [ ] Shadow table
- [ ] Blue-green database change
- [ ] Feature flag
- [ ] Backward-compatible app deploy
- [ ] Migration observability
- [ ] Rollback plan

### 26.5 Data migration
- [ ] Bulk update
- [ ] Batch processing
- [ ] Pagination by key
- [ ] Idempotent migration
- [ ] Resume capability
- [ ] Checkpointing
- [ ] Data validation
- [ ] Reconciliation query
- [ ] Migration metrics
- [ ] Migration rollback
- [ ] Archive migration

---

## 27. Application Integration

### 27.1 Connection management
- [ ] Database driver
- [ ] Connection string
- [ ] Connection pool
- [ ] Pool size
- [ ] Idle connection
- [ ] Max lifetime
- [ ] Connection timeout
- [ ] Validation query
- [ ] Leak detection
- [ ] Connection storm
- [ ] Backpressure
- [ ] Retry strategy

### 27.2 Java integration
- [ ] JDBC
- [ ] DataSource
- [ ] HikariCP
- [ ] PreparedStatement
- [ ] ResultSet
- [ ] Batch insert
- [ ] Transaction demarcation
- [ ] JPA
- [ ] Hibernate
- [ ] Spring JDBC
- [ ] Spring Data JPA
- [ ] Spring Data JDBC
- [ ] jOOQ
- [ ] MyBatis
- [ ] R2DBC

### 27.3 ORM fundamentals
- [ ] Entity
- [ ] Identity
- [ ] Persistence context
- [ ] Unit of work
- [ ] Dirty checking
- [ ] Lazy loading
- [ ] Eager loading
- [ ] N+1 problem
- [ ] Fetch join
- [ ] Batch fetching
- [ ] Second-level cache
- [ ] Optimistic locking
- [ ] Pessimistic locking
- [ ] Transaction boundary

### 27.4 Query building
- [ ] Raw SQL
- [ ] Query builder
- [ ] Criteria API
- [ ] jOOQ DSL
- [ ] Repository method
- [ ] Specification
- [ ] Dynamic filters
- [ ] Pagination
- [ ] Sorting
- [ ] Projection
- [ ] DTO mapping
- [ ] Query test

### 27.5 Application-level patterns
- [ ] Repository pattern
- [ ] Unit of Work
- [ ] Data Mapper
- [ ] Active Record
- [ ] CQRS
- [ ] Read model
- [ ] Write model
- [ ] Outbox pattern
- [ ] Inbox pattern
- [ ] Saga pattern
- [ ] Idempotency key
- [ ] Optimistic concurrency

### 27.6 API and database boundary
- [ ] DTO boundary
- [ ] Entity exposure avoidance
- [ ] Transaction per request
- [ ] Open Session in View
- [ ] Lazy loading boundary
- [ ] Pagination boundary
- [ ] Filtering boundary
- [ ] Sorting boundary
- [ ] Validation boundary
- [ ] Error mapping
- [ ] Timeout boundary

---

## 28. Observability and Monitoring

### 28.1 Database metrics
- [ ] Connections
- [ ] Active sessions
- [ ] Idle sessions
- [ ] Query throughput
- [ ] Query latency
- [ ] Transaction rate
- [ ] Lock waits
- [ ] Deadlocks
- [ ] Cache hit ratio
- [ ] Buffer usage
- [ ] Disk I/O
- [ ] WAL generation
- [ ] Replication lag
- [ ] CPU usage
- [ ] Memory usage
- [ ] Storage usage

### 28.2 Query monitoring
- [ ] Slow query log
- [ ] Query digest
- [ ] Query fingerprint
- [ ] Top queries
- [ ] Execution time
- [ ] Rows scanned
- [ ] Rows returned
- [ ] Temporary files
- [ ] Sort spill
- [ ] Lock wait
- [ ] Query plan tracking
- [ ] Plan regression
- [ ] Query timeout

### 28.3 Logging
- [ ] Error log
- [ ] Slow query log
- [ ] Audit log
- [ ] Connection log
- [ ] Checkpoint log
- [ ] Replication log
- [ ] Deadlock log
- [ ] Lock wait log
- [ ] Log rotation
- [ ] Log retention
- [ ] Structured logs
- [ ] Sensitive data redaction

### 28.4 Alerting
- [ ] Database down
- [ ] High connection count
- [ ] High CPU
- [ ] High memory
- [ ] Low disk space
- [ ] Replication lag
- [ ] Backup failure
- [ ] Deadlock spike
- [ ] Slow query spike
- [ ] Lock wait spike
- [ ] Cache hit ratio drop
- [ ] Error rate spike
- [ ] Certificate expiry

### 28.5 Dashboards
- [ ] Instance overview
- [ ] Query performance
- [ ] Connection dashboard
- [ ] Replication dashboard
- [ ] Backup dashboard
- [ ] Storage dashboard
- [ ] Lock dashboard
- [ ] Transaction dashboard
- [ ] Cache dashboard
- [ ] Application database dashboard

### 28.6 Tools
- [ ] Prometheus
- [ ] Grafana
- [ ] OpenTelemetry
- [ ] pg_stat_statements
- [ ] Performance Schema
- [ ] Query Store
- [ ] AWR
- [ ] Percona Monitoring and Management
- [ ] Datadog
- [ ] New Relic
- [ ] CloudWatch
- [ ] Azure Monitor
- [ ] Google Cloud Monitoring

---

## 29. Performance Engineering

### 29.1 Performance methodology
- [ ] Define baseline
- [ ] Define SLO
- [ ] Measure before tuning
- [ ] Isolate bottleneck
- [ ] Change one variable
- [ ] Benchmark safely
- [ ] Compare results
- [ ] Track regressions
- [ ] Document tuning
- [ ] Validate under production-like load

### 29.2 Query performance
- [ ] Execution plan analysis
- [ ] Index selection
- [ ] Query rewrite
- [ ] Pagination optimization
- [ ] Batch operation optimization
- [ ] Join optimization
- [ ] Aggregation optimization
- [ ] Statistics update
- [ ] Materialized view
- [ ] Denormalized read model
- [ ] Avoid N+1
- [ ] Reduce round trips

### 29.3 Write performance
- [ ] Batch insert
- [ ] Bulk load
- [ ] WAL tuning
- [ ] Index overhead
- [ ] Constraint overhead
- [ ] Trigger overhead
- [ ] Lock contention
- [ ] Hot row update
- [ ] Hot partition
- [ ] Autocommit overhead
- [ ] Commit batching
- [ ] Write amplification

### 29.4 Read performance
- [ ] Index optimization
- [ ] Covering index
- [ ] Cache warming
- [ ] Query cache caveats
- [ ] Application cache
- [ ] Read replica
- [ ] Materialized view
- [ ] Projection table
- [ ] Column pruning
- [ ] Data locality
- [ ] Result set size reduction

### 29.5 Connection performance
- [ ] Connection pool sizing
- [ ] Pool saturation
- [ ] Connection acquisition timeout
- [ ] Max lifetime tuning
- [ ] Idle timeout tuning
- [ ] Prepared statement cache
- [ ] Server-side prepared statements
- [ ] Network latency
- [ ] TLS overhead
- [ ] Connection storm protection

### 29.6 Storage performance
- [ ] IOPS
- [ ] Throughput
- [ ] Latency
- [ ] fsync latency
- [ ] Disk queue depth
- [ ] Random I/O
- [ ] Sequential I/O
- [ ] SSD
- [ ] NVMe
- [ ] Network-attached storage
- [ ] Compression impact
- [ ] Encryption impact

### 29.7 Capacity planning
- [ ] Data growth
- [ ] Index growth
- [ ] WAL/binlog growth
- [ ] Backup storage
- [ ] Connection growth
- [ ] Query volume growth
- [ ] CPU headroom
- [ ] Memory headroom
- [ ] Storage headroom
- [ ] Replica capacity
- [ ] Failover capacity
- [ ] Peak traffic modeling

---

## 30. Cloud Databases

### 30.1 Managed relational databases
- [ ] Amazon RDS
- [ ] Amazon Aurora
- [ ] Google Cloud SQL
- [ ] Google AlloyDB
- [ ] Azure SQL Database
- [ ] Azure Database for PostgreSQL
- [ ] Azure Database for MySQL
- [ ] Oracle Autonomous Database
- [ ] Managed backups
- [ ] Read replicas
- [ ] Multi-AZ deployment
- [ ] Maintenance windows
- [ ] Minor upgrades
- [ ] Parameter groups

### 30.2 Cloud NoSQL databases
- [ ] DynamoDB
- [ ] Firestore
- [ ] Bigtable
- [ ] Cosmos DB
- [ ] DocumentDB
- [ ] Managed MongoDB Atlas
- [ ] Managed Redis
- [ ] Managed Cassandra
- [ ] Cloud-native scaling
- [ ] Consistency options
- [ ] Pricing model
- [ ] Global distribution

### 30.3 Cloud data warehouses
- [ ] Snowflake
- [ ] BigQuery
- [ ] Redshift
- [ ] Synapse
- [ ] Databricks SQL
- [ ] Serverless warehouse
- [ ] Separation of storage and compute
- [ ] Warehouse sizing
- [ ] Query cost
- [ ] Data sharing
- [ ] Governance

### 30.4 Cloud operations
- [ ] Backup configuration
- [ ] PITR
- [ ] Read replica
- [ ] Cross-region replica
- [ ] Failover testing
- [ ] IAM authentication
- [ ] Private endpoint
- [ ] VPC peering
- [ ] Network security group
- [ ] Encryption at rest
- [ ] KMS key
- [ ] Monitoring
- [ ] Cost optimization
- [ ] Vendor lock-in analysis

### 30.5 Serverless databases
- [ ] Serverless scaling
- [ ] Cold start
- [ ] Autosuspend
- [ ] Autoresume
- [ ] Capacity unit
- [ ] Request unit
- [ ] Consumption pricing
- [ ] Connection limits
- [ ] Transaction limits
- [ ] Workload suitability
- [ ] Cost predictability

---

## 31. Databases on Kubernetes

### 31.1 Kubernetes storage requirements
- [ ] PersistentVolume
- [ ] PersistentVolumeClaim
- [ ] StorageClass
- [ ] CSI driver
- [ ] ReadWriteOnce
- [ ] ReadWriteMany
- [ ] Volume expansion
- [ ] Volume snapshot
- [ ] Local persistent volume
- [ ] StatefulSet storage
- [ ] Node affinity
- [ ] Storage performance

### 31.2 Stateful workload design
- [ ] StatefulSet
- [ ] Headless Service
- [ ] Stable identity
- [ ] Stable storage
- [ ] Pod ordinal
- [ ] Anti-affinity
- [ ] PodDisruptionBudget
- [ ] Graceful shutdown
- [ ] Init containers
- [ ] Sidecars
- [ ] Backup sidecar
- [ ] Monitoring sidecar

### 31.3 Database operators
- [ ] Operator pattern
- [ ] Reconciliation
- [ ] CRD
- [ ] Postgres operator
- [ ] MySQL operator
- [ ] MongoDB operator
- [ ] Redis operator
- [ ] Cassandra operator
- [ ] Backup automation
- [ ] Failover automation
- [ ] Upgrade automation
- [ ] Scaling automation

### 31.4 Kubernetes database risks
- [ ] Storage failure
- [ ] Node failure
- [ ] Rescheduling latency
- [ ] Split brain
- [ ] Network partition
- [ ] Noisy neighbor
- [ ] Resource limits
- [ ] Disk pressure
- [ ] Backup complexity
- [ ] Operational complexity
- [ ] Managed database alternative
- [ ] Production readiness checklist

---

## 32. Data Pipelines and CDC

### 32.1 Data ingestion
- [ ] Batch ingestion
- [ ] Streaming ingestion
- [ ] File ingestion
- [ ] API ingestion
- [ ] Database ingestion
- [ ] Queue ingestion
- [ ] Event ingestion
- [ ] Bulk load
- [ ] Incremental load
- [ ] Data validation
- [ ] Idempotent ingestion

### 32.2 Change Data Capture
- [ ] CDC
- [ ] Log-based CDC
- [ ] Trigger-based CDC
- [ ] Timestamp-based CDC
- [ ] Snapshot
- [ ] Incremental snapshot
- [ ] Replication slot
- [ ] Binlog reader
- [ ] Debezium
- [ ] Kafka Connect
- [ ] Outbox CDC
- [ ] Schema evolution
- [ ] Exactly-once semantics

### 32.3 Streaming systems
- [ ] Kafka
- [ ] Kafka Connect
- [ ] Flink
- [ ] Spark Structured Streaming
- [ ] Pulsar
- [ ] Kinesis
- [ ] Pub/Sub
- [ ] Event Hub
- [ ] Stream processing
- [ ] Stream-table duality
- [ ] Windowing
- [ ] Watermarking

### 32.4 ETL and ELT
- [ ] Extract
- [ ] Transform
- [ ] Load
- [ ] Extract-load-transform
- [ ] Staging table
- [ ] Data quality check
- [ ] Transformation job
- [ ] Incremental model
- [ ] Full refresh
- [ ] dbt
- [ ] Airflow
- [ ] Dagster
- [ ] Prefect

### 32.5 Data quality
- [ ] Completeness
- [ ] Uniqueness
- [ ] Validity
- [ ] Consistency
- [ ] Accuracy
- [ ] Timeliness
- [ ] Referential integrity
- [ ] Schema validation
- [ ] Freshness check
- [ ] Anomaly detection
- [ ] Data contract
- [ ] Data observability

---

## 33. Governance, Privacy, and Compliance

### 33.1 Data governance
- [ ] Data owner
- [ ] Data steward
- [ ] Data catalog
- [ ] Data lineage
- [ ] Data classification
- [ ] Data quality
- [ ] Data lifecycle
- [ ] Data retention
- [ ] Data access policy
- [ ] Data usage policy
- [ ] Data sharing policy
- [ ] Metadata management

### 33.2 Privacy
- [ ] Personally identifiable information
- [ ] Sensitive data
- [ ] Consent
- [ ] Purpose limitation
- [ ] Data minimization
- [ ] Right to access
- [ ] Right to deletion
- [ ] Right to portability
- [ ] Pseudonymization
- [ ] Anonymization
- [ ] Tokenization
- [ ] Masking

### 33.3 Compliance
- [ ] GDPR
- [ ] PCI DSS
- [ ] HIPAA
- [ ] SOC 2
- [ ] ISO 27001
- [ ] Data residency
- [ ] Retention period
- [ ] Legal hold
- [ ] Audit trail
- [ ] Encryption requirement
- [ ] Access review
- [ ] Breach notification

### 33.4 Data retention and deletion
- [ ] Retention policy
- [ ] Deletion policy
- [ ] Archival policy
- [ ] Soft delete
- [ ] Hard delete
- [ ] Purge job
- [ ] Partition drop
- [ ] Data subject deletion
- [ ] Backup deletion challenge
- [ ] Legal hold exception
- [ ] Deletion audit

---

## 34. Version and Ecosystem Awareness

### 34.1 PostgreSQL ecosystem awareness
- [ ] PostgreSQL 18.x supported line
- [ ] PostgreSQL 19 beta awareness
- [ ] Annual major release cadence
- [ ] Five-year support policy
- [ ] Minor release cadence
- [ ] Extension compatibility
- [ ] Cloud-managed PostgreSQL versions
- [ ] Upgrade planning
- [ ] Deprecated feature review

### 34.2 MySQL ecosystem awareness
- [ ] MySQL 8.4 LTS
- [ ] MySQL Innovation releases
- [ ] MySQL 8.0 EOL awareness
- [ ] InnoDB as default engine
- [ ] Oracle MySQL lifecycle
- [ ] MariaDB compatibility awareness
- [ ] Cloud-managed MySQL versions
- [ ] Upgrade planning
- [ ] Deprecated feature review

### 34.3 MongoDB ecosystem awareness
- [ ] MongoDB 8.x line
- [ ] MongoDB 8.3 awareness
- [ ] MongoDB support lifecycle
- [ ] MongoDB Atlas
- [ ] Replica set compatibility
- [ ] Sharding compatibility
- [ ] Driver compatibility
- [ ] Feature compatibility version
- [ ] Upgrade planning

### 34.4 Redis ecosystem awareness
- [ ] Redis Open Source 8.x line
- [ ] Redis 8.8 awareness
- [ ] Redis Community Edition history
- [ ] Redis licensing awareness
- [ ] Valkey awareness
- [ ] Managed Redis services
- [ ] Redis Stack features
- [ ] Redis Search
- [ ] Redis JSON
- [ ] Redis Vector Search

### 34.5 Other database ecosystem awareness
- [ ] SQL Server release model
- [ ] Oracle Database release model
- [ ] SQLite release model
- [ ] Cassandra release model
- [ ] Elasticsearch release model
- [ ] OpenSearch release model
- [ ] Neo4j release model
- [ ] ClickHouse release model
- [ ] Cloud vendor version lag
- [ ] Driver compatibility matrix

---

## 35. Learning Path

### 35.1 Phase 1 — Database basics
- [ ] Database concepts
- [ ] Relational model
- [ ] SQL basics
- [ ] Tables
- [ ] Keys
- [ ] Constraints
- [ ] Basic SELECT
- [ ] Basic INSERT
- [ ] Basic UPDATE
- [ ] Basic DELETE
- [ ] Basic joins
- [ ] Basic transactions

### 35.2 Phase 2 — SQL intermediate
- [ ] Aggregation
- [ ] Window functions
- [ ] CTEs
- [ ] Subqueries
- [ ] Advanced joins
- [ ] Null semantics
- [ ] Data types
- [ ] Views
- [ ] Functions
- [ ] Stored procedures
- [ ] Triggers
- [ ] Query style

### 35.3 Phase 3 — Relational design
- [ ] ER modeling
- [ ] Normalization
- [ ] Denormalization
- [ ] Physical modeling
- [ ] Index design
- [ ] Constraint design
- [ ] Temporal modeling
- [ ] Multi-tenancy modeling
- [ ] Audit modeling
- [ ] Migration design

### 35.4 Phase 4 — Transactions and performance
- [ ] ACID
- [ ] Isolation levels
- [ ] Locking
- [ ] MVCC
- [ ] Deadlocks
- [ ] Execution plans
- [ ] Index optimization
- [ ] Query optimization
- [ ] Connection pooling
- [ ] Performance monitoring
- [ ] Benchmarking

### 35.5 Phase 5 — PostgreSQL and MySQL depth
- [ ] PostgreSQL architecture
- [ ] PostgreSQL indexing
- [ ] PostgreSQL MVCC
- [ ] PostgreSQL replication
- [ ] PostgreSQL backup
- [ ] MySQL architecture
- [ ] InnoDB internals
- [ ] MySQL replication
- [ ] MySQL backup
- [ ] Vendor differences

### 35.6 Phase 6 — NoSQL
- [ ] Document databases
- [ ] MongoDB
- [ ] Key-value databases
- [ ] Redis
- [ ] Wide-column databases
- [ ] Cassandra
- [ ] Graph databases
- [ ] Search engines
- [ ] Time-series databases
- [ ] Database selection criteria

### 35.7 Phase 7 — Distributed and cloud databases
- [ ] Replication
- [ ] Sharding
- [ ] CAP theorem
- [ ] Consistency models
- [ ] Distributed SQL
- [ ] Cloud-managed databases
- [ ] Multi-region design
- [ ] Backup and DR
- [ ] Cost optimization
- [ ] Operational readiness

### 35.8 Phase 8 — Advanced database engineering
- [ ] Storage engines
- [ ] Query planner internals
- [ ] WAL internals
- [ ] Consensus
- [ ] CDC
- [ ] Data pipelines
- [ ] Data warehousing
- [ ] Vector databases
- [ ] Security and compliance
- [ ] Database platform engineering

---

## 36. Practical Projects

### 36.1 Project 1 — SQL Basics Lab
- [ ] Create schema
- [ ] Create tables
- [ ] Add primary keys
- [ ] Add foreign keys
- [ ] Insert sample data
- [ ] Write SELECT queries
- [ ] Write joins
- [ ] Write aggregations
- [ ] Write transactions
- [ ] Add constraints

### 36.2 Project 2 — E-Commerce Relational Model
- [ ] Customer table
- [ ] Product table
- [ ] Order table
- [ ] Order item table
- [ ] Payment table
- [ ] Shipment table
- [ ] Inventory table
- [ ] Discount table
- [ ] Normalized design
- [ ] Index design
- [ ] Migration scripts
- [ ] Seed data

### 36.3 Project 3 — Query Optimization Lab
- [ ] Generate large dataset
- [ ] Write slow queries
- [ ] Capture execution plans
- [ ] Add indexes
- [ ] Rewrite queries
- [ ] Compare plans
- [ ] Measure execution time
- [ ] Detect N+1 queries
- [ ] Optimize pagination
- [ ] Document results

### 36.4 Project 4 — Transaction and Locking Lab
- [ ] Simulate concurrent updates
- [ ] Reproduce lost update
- [ ] Reproduce deadlock
- [ ] Test isolation levels
- [ ] Use optimistic locking
- [ ] Use pessimistic locking
- [ ] Use advisory locks
- [ ] Implement retry logic
- [ ] Measure lock waits
- [ ] Document behavior

### 36.5 Project 5 — PostgreSQL Production Lab
- [ ] Configure PostgreSQL
- [ ] Enable pg_stat_statements
- [ ] Create backup strategy
- [ ] Configure WAL archiving
- [ ] Restore PITR
- [ ] Configure streaming replica
- [ ] Test failover
- [ ] Tune autovacuum
- [ ] Monitor slow queries
- [ ] Build dashboard

### 36.6 Project 6 — MySQL InnoDB Lab
- [ ] Configure MySQL
- [ ] Create InnoDB schema
- [ ] Analyze clustered indexes
- [ ] Test gap locks
- [ ] Configure replication
- [ ] Test failover
- [ ] Run logical backup
- [ ] Run physical backup
- [ ] Analyze slow query log
- [ ] Tune buffer pool

### 36.7 Project 7 — MongoDB Application Model
- [ ] Design document model
- [ ] Create collections
- [ ] Insert documents
- [ ] Build indexes
- [ ] Write aggregation pipeline
- [ ] Configure replica set
- [ ] Test transactions
- [ ] Configure backup
- [ ] Analyze slow queries
- [ ] Document embed/reference choices

### 36.8 Project 8 — Redis Cache and Queue
- [ ] Design cache keys
- [ ] Implement cache-aside
- [ ] Add TTL strategy
- [ ] Prevent cache stampede
- [ ] Implement rate limiter
- [ ] Use Redis Streams
- [ ] Configure persistence
- [ ] Configure replication
- [ ] Test failover
- [ ] Monitor memory usage

### 36.9 Project 9 — CDC Pipeline
- [ ] Configure source database
- [ ] Enable logical/binlog replication
- [ ] Configure Debezium
- [ ] Publish changes to Kafka
- [ ] Consume CDC events
- [ ] Build read model
- [ ] Handle schema changes
- [ ] Handle deletes
- [ ] Implement idempotency
- [ ] Monitor lag

### 36.10 Project 10 — RAG Vector Store
- [ ] Prepare documents
- [ ] Chunk documents
- [ ] Generate embeddings
- [ ] Store vectors
- [ ] Build vector index
- [ ] Implement similarity search
- [ ] Add metadata filters
- [ ] Add hybrid search
- [ ] Add reranking
- [ ] Evaluate retrieval quality

### 36.11 Project 11 — Data Warehouse Mini-Project
- [ ] Design star schema
- [ ] Create fact table
- [ ] Create dimension tables
- [ ] Load source data
- [ ] Build transformations
- [ ] Add quality checks
- [ ] Build aggregate table
- [ ] Query analytics
- [ ] Optimize columnar storage
- [ ] Document lineage

### 36.12 Project 12 — Database on Kubernetes
- [ ] Deploy PostgreSQL operator
- [ ] Create database cluster
- [ ] Configure storage
- [ ] Configure backups
- [ ] Test restore
- [ ] Configure monitoring
- [ ] Configure secrets
- [ ] Test pod rescheduling
- [ ] Test failover
- [ ] Evaluate production risks

---

## 37. Competency Checklist

### 37.1 Junior database competency
- [ ] Understand tables and relationships
- [ ] Write basic SQL
- [ ] Write joins
- [ ] Use primary keys
- [ ] Use foreign keys
- [ ] Create simple indexes
- [ ] Understand transactions
- [ ] Use database client tools
- [ ] Read simple execution plans
- [ ] Connect an application to a database
- [ ] Perform basic backup and restore

### 37.2 Mid-level database competency
- [ ] Design normalized schemas
- [ ] Choose correct data types
- [ ] Design indexes for queries
- [ ] Analyze execution plans
- [ ] Avoid N+1 queries
- [ ] Tune connection pools
- [ ] Manage schema migrations
- [ ] Understand isolation levels
- [ ] Diagnose locks and deadlocks
- [ ] Configure replication
- [ ] Design backup strategy
- [ ] Use PostgreSQL or MySQL confidently

### 37.3 Senior database competency
- [ ] Design production schemas
- [ ] Handle zero-downtime migrations
- [ ] Optimize complex queries
- [ ] Tune database configuration
- [ ] Design HA topology
- [ ] Design DR strategy
- [ ] Manage multi-region trade-offs
- [ ] Evaluate SQL vs NoSQL
- [ ] Design event-driven data flows
- [ ] Implement CDC pipelines
- [ ] Secure sensitive data
- [ ] Build observability dashboards
- [ ] Lead incident response

### 37.4 Advanced database engineering competency
- [ ] Understand storage engine internals
- [ ] Understand query optimizer internals
- [ ] Understand WAL/binlog internals
- [ ] Understand MVCC deeply
- [ ] Understand distributed consensus
- [ ] Design sharding strategy
- [ ] Design distributed transactions strategy
- [ ] Build database operators
- [ ] Operate databases on Kubernetes
- [ ] Build data platform governance
- [ ] Optimize cost at scale
- [ ] Evaluate new database technologies
- [ ] Contribute to database tooling
