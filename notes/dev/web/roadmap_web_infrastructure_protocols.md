---
layout: page
title: Web Infrastructure and Protocols Roadmap
navTitle: Web Infrastructure
summary: Roadmap for learning DNS, HTTP, TLS, browsers, caching, proxies, CDNs, security, deployment, observability, and web reliability.
area: dev
topic: web
tags:
  - web
  - http
  - dns
  - tls
  - infrastructure
  - roadmap
order: 10
---

# Web Infrastructure and Protocols Roadmap — Fundamentals to Advanced

## 1. Prerequisites

### 1.1 Networking fundamentals
- [ ] IP addressing
- [ ] IPv4
- [ ] IPv6
- [ ] CIDR
- [ ] Subnetting
- [ ] Routing
- [ ] NAT
- [ ] Ports
- [ ] Sockets
- [ ] TCP
- [ ] UDP
- [ ] ICMP
- [ ] DNS
- [ ] TLS
- [ ] HTTP
- [ ] Latency
- [ ] Bandwidth
- [ ] Throughput
- [ ] Packet loss
- [ ] Jitter
- [ ] Round-trip time
- [ ] MTU
- [ ] Fragmentation

### 1.2 Linux and operating system fundamentals
- [ ] Processes
- [ ] Threads
- [ ] File descriptors
- [ ] Sockets
- [ ] Ephemeral ports
- [ ] Kernel networking stack
- [ ] Listen backlog
- [ ] Connection queues
- [ ] TCP states
- [ ] System limits
- [ ] ulimit
- [ ] systemd services
- [ ] Journald logs
- [ ] Firewall rules
- [ ] Network namespaces
- [ ] cgroups
- [ ] Containers
- [ ] Signals
- [ ] Graceful shutdown

### 1.3 Security fundamentals
- [ ] Confidentiality
- [ ] Integrity
- [ ] Availability
- [ ] Authentication
- [ ] Authorization
- [ ] Non-repudiation
- [ ] Encryption
- [ ] Hashing
- [ ] Digital signatures
- [ ] Certificates
- [ ] Public-key infrastructure
- [ ] Key exchange
- [ ] Secret management
- [ ] Threat modeling
- [ ] Attack surface
- [ ] Defense in depth
- [ ] Least privilege
- [ ] Zero trust

### 1.4 Cloud and infrastructure fundamentals
- [ ] Virtual machines
- [ ] Containers
- [ ] Kubernetes
- [ ] Load balancers
- [ ] Reverse proxies
- [ ] Object storage
- [ ] CDN
- [ ] DNS provider
- [ ] Certificate authority
- [ ] VPC
- [ ] Subnets
- [ ] Security groups
- [ ] Firewalls
- [ ] Private networking
- [ ] Public networking
- [ ] NAT gateway
- [ ] Ingress
- [ ] Service mesh
- [ ] Observability stack

### 1.5 Tooling fundamentals
- [ ] `curl`
- [ ] `wget`
- [ ] `dig`
- [ ] `nslookup`
- [ ] `host`
- [ ] `ping`
- [ ] `traceroute`
- [ ] `mtr`
- [ ] `tcpdump`
- [ ] Wireshark
- [ ] `ss`
- [ ] `netstat`
- [ ] `lsof`
- [ ] `openssl`
- [ ] `nmap`
- [ ] `hping3`
- [ ] `iperf3`
- [ ] Browser DevTools
- [ ] Postman
- [ ] HTTPie
- [ ] k6
- [ ] wrk
- [ ] hey

---

## 2. Web Infrastructure Mental Model

### 2.1 Request lifecycle
- [ ] User enters URL
- [ ] Browser parses URL
- [ ] Browser checks cache
- [ ] DNS resolution
- [ ] TCP connection setup
- [ ] TLS handshake
- [ ] HTTP request
- [ ] Proxy traversal
- [ ] CDN edge processing
- [ ] Load balancer routing
- [ ] Reverse proxy routing
- [ ] Application server handling
- [ ] Database access
- [ ] HTTP response
- [ ] Browser cache update
- [ ] Resource loading
- [ ] Rendering pipeline

### 2.2 Web infrastructure components
- [ ] Browser
- [ ] DNS resolver
- [ ] Recursive DNS resolver
- [ ] Authoritative DNS server
- [ ] CDN edge
- [ ] DDoS protection layer
- [ ] WAF
- [ ] Load balancer
- [ ] Reverse proxy
- [ ] API gateway
- [ ] Web server
- [ ] Application server
- [ ] Cache layer
- [ ] Database
- [ ] Object storage
- [ ] Message broker
- [ ] Observability backend

### 2.3 Client-side infrastructure concerns
- [ ] Browser cache
- [ ] DNS cache
- [ ] Connection reuse
- [ ] HTTP cache
- [ ] Service Worker cache
- [ ] Cookie jar
- [ ] Local storage
- [ ] Session storage
- [ ] IndexedDB
- [ ] Certificate validation
- [ ] Same-origin policy
- [ ] CORS enforcement
- [ ] Mixed content blocking
- [ ] Content Security Policy enforcement

### 2.4 Server-side infrastructure concerns
- [ ] Listener socket
- [ ] Connection accept queue
- [ ] Worker processes
- [ ] Worker threads
- [ ] Event loop
- [ ] Request routing
- [ ] Header parsing
- [ ] Body parsing
- [ ] Compression
- [ ] TLS termination
- [ ] Access logging
- [ ] Error logging
- [ ] Upstream connection pooling
- [ ] Health checking
- [ ] Backpressure
- [ ] Graceful reload

### 2.5 Edge infrastructure concerns
- [ ] Edge location
- [ ] Anycast routing
- [ ] CDN cache
- [ ] Edge compute
- [ ] Edge TLS termination
- [ ] Edge WAF
- [ ] Bot detection
- [ ] Rate limiting
- [ ] Origin shield
- [ ] Cache invalidation
- [ ] Geo routing
- [ ] Request coalescing
- [ ] Image optimization
- [ ] Static asset delivery

---

## 3. URI, URL, Origin, and Resource Identity

### 3.1 URI and URL basics
- [ ] URI
- [ ] URL
- [ ] URN
- [ ] Scheme
- [ ] Authority
- [ ] Userinfo
- [ ] Host
- [ ] Port
- [ ] Path
- [ ] Query string
- [ ] Fragment
- [ ] Percent encoding
- [ ] Reserved characters
- [ ] Normalization
- [ ] Canonical URL

### 3.2 HTTP and HTTPS schemes
- [ ] `http://`
- [ ] `https://`
- [ ] Default HTTP port
- [ ] Default HTTPS port
- [ ] Scheme upgrade
- [ ] Mixed content
- [ ] HSTS upgrade
- [ ] Secure context
- [ ] Origin calculation
- [ ] Schemeful same-site
- [ ] Schemeful same-origin

### 3.3 Origin model
- [ ] Origin
- [ ] Scheme
- [ ] Host
- [ ] Port
- [ ] Same-origin policy
- [ ] Same-site
- [ ] Cross-origin
- [ ] Cross-site
- [ ] Origin header
- [ ] Referer header
- [ ] Site isolation
- [ ] Origin isolation
- [ ] Opaque origin
- [ ] Sandbox origin

### 3.4 Resource identity
- [ ] Resource
- [ ] Representation
- [ ] Content negotiation
- [ ] Media type
- [ ] Language variant
- [ ] Encoding variant
- [ ] Entity tag
- [ ] Last-Modified
- [ ] Cache key
- [ ] Vary header
- [ ] Canonical resource
- [ ] Redirect target
- [ ] Permanent URL
- [ ] Temporary URL

---

## 4. DNS

### 4.1 DNS fundamentals
- [ ] Domain name
- [ ] Fully qualified domain name
- [ ] Root zone
- [ ] Top-level domain
- [ ] Second-level domain
- [ ] Subdomain
- [ ] DNS zone
- [ ] Resolver
- [ ] Recursive resolver
- [ ] Authoritative nameserver
- [ ] Root nameserver
- [ ] TLD nameserver
- [ ] Zone file
- [ ] Resource record
- [ ] TTL

### 4.2 DNS record types
- [ ] A record
- [ ] AAAA record
- [ ] CNAME record
- [ ] MX record
- [ ] TXT record
- [ ] NS record
- [ ] SOA record
- [ ] SRV record
- [ ] PTR record
- [ ] CAA record
- [ ] DS record
- [ ] DNSKEY record
- [ ] SVCB record
- [ ] HTTPS record
- [ ] ALIAS/ANAME provider records

### 4.3 DNS resolution flow
- [ ] Browser DNS cache
- [ ] Operating system DNS cache
- [ ] Local resolver
- [ ] Recursive resolver query
- [ ] Root server query
- [ ] TLD server query
- [ ] Authoritative server query
- [ ] Response caching
- [ ] Negative caching
- [ ] TTL expiration
- [ ] CNAME chain resolution
- [ ] IPv4/IPv6 selection
- [ ] Happy Eyeballs behavior

### 4.4 DNS transport
- [ ] DNS over UDP
- [ ] DNS over TCP
- [ ] EDNS
- [ ] DNS over TLS
- [ ] DNS over HTTPS
- [ ] DNS over QUIC
- [ ] DNSSEC transport impact
- [ ] Truncation
- [ ] Retry behavior
- [ ] Resolver timeout
- [ ] Resolver fallback
- [ ] Resolver privacy

### 4.5 DNS security
- [ ] DNS spoofing
- [ ] Cache poisoning
- [ ] DNSSEC
- [ ] Zone signing
- [ ] DS record
- [ ] DNSKEY record
- [ ] RRSIG record
- [ ] NSEC
- [ ] NSEC3
- [ ] CAA records
- [ ] DNS hijacking
- [ ] Registrar lock
- [ ] Domain takeover
- [ ] Subdomain takeover
- [ ] Split-horizon DNS

### 4.6 DNS operations
- [ ] Registrar management
- [ ] Nameserver delegation
- [ ] Zone transfer
- [ ] Primary DNS
- [ ] Secondary DNS
- [ ] Anycast DNS
- [ ] GeoDNS
- [ ] Weighted DNS
- [ ] Latency-based DNS
- [ ] Failover DNS
- [ ] DNS propagation
- [ ] TTL planning
- [ ] DNS migration
- [ ] DNS monitoring

### 4.7 DNS troubleshooting
- [ ] `dig`
- [ ] `dig +trace`
- [ ] `nslookup`
- [ ] `host`
- [ ] Resolver comparison
- [ ] Authoritative query
- [ ] NXDOMAIN
- [ ] SERVFAIL
- [ ] Timeout
- [ ] CNAME loop
- [ ] Stale cache
- [ ] DNSSEC validation failure
- [ ] Wrong nameserver
- [ ] Wrong TTL
- [ ] Split DNS mismatch

---

## 5. IP Networking for Web Infrastructure

### 5.1 IP fundamentals
- [ ] IP packet
- [ ] Source IP
- [ ] Destination IP
- [ ] IPv4
- [ ] IPv6
- [ ] Public IP
- [ ] Private IP
- [ ] Loopback IP
- [ ] Link-local IP
- [ ] Anycast IP
- [ ] Multicast IP
- [ ] Unicast IP
- [ ] CIDR block
- [ ] Subnet
- [ ] Gateway
- [ ] Route table

### 5.2 IPv4
- [ ] IPv4 address
- [ ] IPv4 header
- [ ] Subnet mask
- [ ] Private ranges
- [ ] Public ranges
- [ ] NAT
- [ ] PAT
- [ ] Fragmentation
- [ ] TTL
- [ ] ICMP
- [ ] ARP
- [ ] DHCP
- [ ] Address exhaustion
- [ ] CGNAT

### 5.3 IPv6
- [ ] IPv6 address
- [ ] IPv6 header
- [ ] Address notation
- [ ] Global unicast
- [ ] Link-local address
- [ ] Unique local address
- [ ] Multicast
- [ ] SLAAC
- [ ] DHCPv6
- [ ] Neighbor Discovery
- [ ] Extension headers
- [ ] Flow label
- [ ] Dual stack
- [ ] NAT64
- [ ] DNS64

### 5.4 Routing
- [ ] Default route
- [ ] Static route
- [ ] Dynamic routing
- [ ] Longest prefix match
- [ ] Route aggregation
- [ ] BGP
- [ ] AS number
- [ ] Peering
- [ ] Transit
- [ ] Anycast routing
- [ ] Route leak
- [ ] Route hijack
- [ ] RPKI
- [ ] Traffic engineering

### 5.5 Web-facing network design
- [ ] Public subnet
- [ ] Private subnet
- [ ] DMZ
- [ ] NAT gateway
- [ ] Internet gateway
- [ ] Load balancer subnet
- [ ] Application subnet
- [ ] Database subnet
- [ ] Bastion host
- [ ] Security group
- [ ] Network ACL
- [ ] Firewall
- [ ] Egress control
- [ ] Ingress control

### 5.6 Network troubleshooting
- [ ] `ping`
- [ ] `traceroute`
- [ ] `mtr`
- [ ] `ip route`
- [ ] `ip addr`
- [ ] `tcpdump`
- [ ] Packet capture
- [ ] MTU issue
- [ ] Asymmetric routing
- [ ] Firewall drop
- [ ] NAT issue
- [ ] DNS issue
- [ ] IPv6 fallback issue
- [ ] Anycast routing issue

---

## 6. TCP, UDP, and Transport Behavior

### 6.1 TCP fundamentals
- [ ] Connection-oriented transport
- [ ] Three-way handshake
- [ ] SYN
- [ ] SYN-ACK
- [ ] ACK
- [ ] Sequence numbers
- [ ] Acknowledgments
- [ ] Retransmission
- [ ] Flow control
- [ ] Congestion control
- [ ] Sliding window
- [ ] MSS
- [ ] MTU
- [ ] Connection teardown
- [ ] FIN
- [ ] RST

### 6.2 TCP states
- [ ] LISTEN
- [ ] SYN-SENT
- [ ] SYN-RECEIVED
- [ ] ESTABLISHED
- [ ] FIN-WAIT-1
- [ ] FIN-WAIT-2
- [ ] CLOSE-WAIT
- [ ] CLOSING
- [ ] LAST-ACK
- [ ] TIME-WAIT
- [ ] CLOSED
- [ ] State inspection
- [ ] State exhaustion
- [ ] TIME-WAIT handling

### 6.3 TCP performance
- [ ] Slow start
- [ ] Congestion avoidance
- [ ] Fast retransmit
- [ ] Fast recovery
- [ ] Congestion window
- [ ] Receive window
- [ ] Window scaling
- [ ] Selective acknowledgments
- [ ] Nagle's algorithm
- [ ] Delayed ACK
- [ ] TCP_NODELAY
- [ ] TCP keepalive
- [ ] Initial congestion window
- [ ] BBR
- [ ] CUBIC

### 6.4 UDP fundamentals
- [ ] Connectionless transport
- [ ] Datagram
- [ ] No retransmission
- [ ] No ordering guarantee
- [ ] Low overhead
- [ ] Message boundary preservation
- [ ] Checksum
- [ ] Packet loss handling
- [ ] Application-level reliability
- [ ] NAT traversal
- [ ] UDP amplification risk
- [ ] QUIC over UDP
- [ ] DNS over UDP
- [ ] WebRTC over UDP

### 6.5 Socket-level concerns
- [ ] Listen socket
- [ ] Accept queue
- [ ] SYN backlog
- [ ] File descriptor limit
- [ ] Ephemeral port exhaustion
- [ ] Socket timeout
- [ ] Connection timeout
- [ ] Read timeout
- [ ] Write timeout
- [ ] Keepalive
- [ ] Reuse address
- [ ] Reuse port
- [ ] Backpressure
- [ ] Half-open connection
- [ ] Connection reset

### 6.6 Transport troubleshooting
- [ ] SYN timeout
- [ ] Connection refused
- [ ] Connection reset
- [ ] TLS timeout
- [ ] Read timeout
- [ ] Write timeout
- [ ] Packet loss
- [ ] Retransmission
- [ ] Zero window
- [ ] MTU black hole
- [ ] Port exhaustion
- [ ] Listen backlog overflow
- [ ] Firewall state timeout
- [ ] NAT timeout

---

## 7. TLS, PKI, and HTTPS

### 7.1 TLS fundamentals
- [ ] TLS
- [ ] HTTPS
- [ ] Confidentiality
- [ ] Integrity
- [ ] Authentication
- [ ] TLS handshake
- [ ] Cipher suite
- [ ] Key exchange
- [ ] Session key
- [ ] Certificate
- [ ] Certificate chain
- [ ] Certificate authority
- [ ] Trust store
- [ ] Server Name Indication
- [ ] Application-Layer Protocol Negotiation

### 7.2 TLS versions
- [ ] TLS 1.2
- [ ] TLS 1.3
- [ ] Deprecated SSL versions
- [ ] Deprecated TLS versions
- [ ] Forward secrecy
- [ ] 0-RTT
- [ ] Session resumption
- [ ] PSK
- [ ] Downgrade protection
- [ ] Cipher deprecation
- [ ] Protocol negotiation
- [ ] Compatibility mode

### 7.3 Certificates
- [ ] X.509 certificate
- [ ] Common Name
- [ ] Subject Alternative Name
- [ ] Public key
- [ ] Private key
- [ ] Key usage
- [ ] Extended key usage
- [ ] Validity period
- [ ] Wildcard certificate
- [ ] Multi-domain certificate
- [ ] Root certificate
- [ ] Intermediate certificate
- [ ] Certificate chain
- [ ] Certificate transparency
- [ ] OCSP
- [ ] OCSP stapling
- [ ] CRL

### 7.4 Certificate automation
- [ ] ACME
- [ ] Let's Encrypt
- [ ] DNS-01 challenge
- [ ] HTTP-01 challenge
- [ ] TLS-ALPN-01 challenge
- [ ] Certificate renewal
- [ ] Certificate rotation
- [ ] Private key rotation
- [ ] Certificate monitoring
- [ ] Expiry alerting
- [ ] Cert-manager
- [ ] Reverse proxy automation
- [ ] CDN-managed certificates

### 7.5 HTTPS operations
- [ ] TLS termination
- [ ] TLS passthrough
- [ ] End-to-end TLS
- [ ] Re-encryption
- [ ] Mutual TLS
- [ ] Client certificates
- [ ] HSTS
- [ ] Redirect HTTP to HTTPS
- [ ] Secure cookies
- [ ] Mixed content prevention
- [ ] TLS configuration hardening
- [ ] Cipher selection
- [ ] Certificate pinning risks
- [ ] Key compromise response

### 7.6 TLS troubleshooting
- [ ] `openssl s_client`
- [ ] Certificate chain error
- [ ] Expired certificate
- [ ] Hostname mismatch
- [ ] Missing intermediate certificate
- [ ] Unsupported protocol
- [ ] Cipher mismatch
- [ ] SNI issue
- [ ] ALPN issue
- [ ] OCSP issue
- [ ] Clock skew
- [ ] TLS handshake timeout
- [ ] mTLS client certificate failure

---

## 8. HTTP Semantics

### 8.1 HTTP fundamentals
- [ ] Client-server protocol
- [ ] Request
- [ ] Response
- [ ] Statelessness
- [ ] Resource
- [ ] Representation
- [ ] Method
- [ ] Status code
- [ ] Header field
- [ ] Message body
- [ ] URI
- [ ] Content negotiation
- [ ] Connection management
- [ ] Intermediary
- [ ] Cache

### 8.2 HTTP methods
- [ ] GET
- [ ] HEAD
- [ ] POST
- [ ] PUT
- [ ] PATCH
- [ ] DELETE
- [ ] OPTIONS
- [ ] TRACE
- [ ] CONNECT
- [ ] Safe methods
- [ ] Idempotent methods
- [ ] Cacheable methods
- [ ] Method override
- [ ] Method tunneling

### 8.3 HTTP status codes
- [ ] 1xx informational
- [ ] 2xx success
- [ ] 3xx redirection
- [ ] 4xx client error
- [ ] 5xx server error
- [ ] 200 OK
- [ ] 201 Created
- [ ] 204 No Content
- [ ] 301 Moved Permanently
- [ ] 302 Found
- [ ] 304 Not Modified
- [ ] 400 Bad Request
- [ ] 401 Unauthorized
- [ ] 403 Forbidden
- [ ] 404 Not Found
- [ ] 405 Method Not Allowed
- [ ] 409 Conflict
- [ ] 410 Gone
- [ ] 412 Precondition Failed
- [ ] 415 Unsupported Media Type
- [ ] 422 Unprocessable Content
- [ ] 429 Too Many Requests
- [ ] 500 Internal Server Error
- [ ] 502 Bad Gateway
- [ ] 503 Service Unavailable
- [ ] 504 Gateway Timeout

### 8.4 HTTP headers
- [ ] Request headers
- [ ] Response headers
- [ ] Representation headers
- [ ] Hop-by-hop headers
- [ ] End-to-end headers
- [ ] Host
- [ ] User-Agent
- [ ] Accept
- [ ] Accept-Encoding
- [ ] Accept-Language
- [ ] Content-Type
- [ ] Content-Length
- [ ] Transfer-Encoding
- [ ] Authorization
- [ ] Cookie
- [ ] Set-Cookie
- [ ] Cache-Control
- [ ] ETag
- [ ] Vary
- [ ] Location
- [ ] Retry-After

### 8.5 HTTP body and representation
- [ ] Message body
- [ ] Representation metadata
- [ ] Media type
- [ ] Charset
- [ ] Content encoding
- [ ] Transfer encoding
- [ ] Chunked transfer
- [ ] Compression
- [ ] gzip
- [ ] Brotli
- [ ] Zstandard
- [ ] Multipart body
- [ ] Form data
- [ ] JSON body
- [ ] Binary body
- [ ] Streaming body

### 8.6 HTTP content negotiation
- [ ] Accept header
- [ ] Accept-Encoding
- [ ] Accept-Language
- [ ] Accept-Charset
- [ ] Content-Type
- [ ] Server-driven negotiation
- [ ] Client-driven negotiation
- [ ] Vary header
- [ ] Language negotiation
- [ ] Encoding negotiation
- [ ] Version negotiation
- [ ] Media type versioning

### 8.7 HTTP conditional requests
- [ ] ETag
- [ ] Strong ETag
- [ ] Weak ETag
- [ ] Last-Modified
- [ ] If-None-Match
- [ ] If-Match
- [ ] If-Modified-Since
- [ ] If-Unmodified-Since
- [ ] 304 Not Modified
- [ ] 412 Precondition Failed
- [ ] Optimistic concurrency
- [ ] Cache revalidation

---

## 9. HTTP Versions and Evolution

### 9.1 HTTP/0.9 and HTTP/1.0
- [ ] Simple request model
- [ ] No headers in HTTP/0.9
- [ ] Headers in HTTP/1.0
- [ ] Status codes
- [ ] Short-lived connections
- [ ] Basic caching
- [ ] Early proxy support
- [ ] Legacy compatibility

### 9.2 HTTP/1.1
- [ ] Persistent connections
- [ ] Host header
- [ ] Chunked transfer encoding
- [ ] Pipelining
- [ ] Cache-Control
- [ ] Range requests
- [ ] Content negotiation
- [ ] Connection header
- [ ] Head-of-line blocking
- [ ] Connection pooling
- [ ] Keep-alive
- [ ] Upgrade mechanism

### 9.3 HTTP/2
- [ ] Binary framing
- [ ] Streams
- [ ] Multiplexing
- [ ] Stream prioritization
- [ ] Header compression
- [ ] HPACK
- [ ] Flow control
- [ ] Server push
- [ ] Connection coalescing
- [ ] HTTP/2 over TLS
- [ ] HTTP/2 cleartext
- [ ] Head-of-line blocking at TCP layer
- [ ] gRPC over HTTP/2

### 9.4 HTTP/3
- [ ] HTTP semantics over QUIC
- [ ] QUIC transport
- [ ] UDP-based transport
- [ ] Stream multiplexing
- [ ] Reduced head-of-line blocking
- [ ] TLS 1.3 integration
- [ ] 0-RTT support
- [ ] QPACK
- [ ] Connection migration
- [ ] Alt-Svc discovery
- [ ] HTTPS DNS record discovery
- [ ] HTTP/3 fallback
- [ ] HTTP/3 monitoring

### 9.5 QUIC
- [ ] QUIC connection
- [ ] QUIC stream
- [ ] QUIC packet
- [ ] Connection ID
- [ ] Stream-level flow control
- [ ] Connection-level flow control
- [ ] Loss recovery
- [ ] Congestion control
- [ ] TLS 1.3 handshake
- [ ] 0-RTT data
- [ ] Connection migration
- [ ] NAT rebinding
- [ ] Packet number spaces
- [ ] UDP amplification limits

### 9.6 Protocol negotiation
- [ ] ALPN
- [ ] Alt-Svc
- [ ] HTTPS DNS record
- [ ] HTTP/2 negotiation
- [ ] HTTP/3 discovery
- [ ] Fallback behavior
- [ ] Proxy compatibility
- [ ] CDN compatibility
- [ ] Browser support
- [ ] Server support
- [ ] Observability by version
- [ ] Rollout strategy

---

## 10. HTTP Caching

### 10.1 Cache fundamentals
- [ ] Browser cache
- [ ] Shared cache
- [ ] CDN cache
- [ ] Reverse proxy cache
- [ ] Application cache
- [ ] Private cache
- [ ] Public cache
- [ ] Cache key
- [ ] Cache hit
- [ ] Cache miss
- [ ] Freshness
- [ ] Revalidation
- [ ] Invalidation
- [ ] Expiration

### 10.2 Cache headers
- [ ] Cache-Control
- [ ] Expires
- [ ] ETag
- [ ] Last-Modified
- [ ] Age
- [ ] Vary
- [ ] Pragma legacy
- [ ] Surrogate-Control
- [ ] CDN-Cache-Control
- [ ] s-maxage
- [ ] max-age
- [ ] no-cache
- [ ] no-store
- [ ] must-revalidate
- [ ] immutable
- [ ] stale-while-revalidate
- [ ] stale-if-error

### 10.3 Cache strategies
- [ ] Static asset cache
- [ ] HTML cache
- [ ] API response cache
- [ ] Edge cache
- [ ] Cache busting
- [ ] Fingerprinted assets
- [ ] Versioned URLs
- [ ] Query-string cache keys
- [ ] Vary-based cache
- [ ] Personalized response caching
- [ ] Anonymous response caching
- [ ] Negative caching
- [ ] Request coalescing

### 10.4 CDN caching
- [ ] Edge cache
- [ ] Origin cache
- [ ] Origin shield
- [ ] Cache hierarchy
- [ ] Cache purging
- [ ] Soft purge
- [ ] Hard purge
- [ ] Surrogate keys
- [ ] Cache tags
- [ ] Tiered cache
- [ ] Regional cache
- [ ] Cache warming
- [ ] Cache poisoning defense

### 10.5 Cache troubleshooting
- [ ] Unexpected cache miss
- [ ] Unexpected cache hit
- [ ] Stale content
- [ ] Incorrect Vary header
- [ ] Cookie prevents caching
- [ ] Authorization prevents caching
- [ ] Cache-Control conflict
- [ ] CDN override
- [ ] Browser cache issue
- [ ] ETag mismatch
- [ ] Compression variant mismatch
- [ ] Cache poisoning

---

## 11. Cookies, Sessions, and Browser State

### 11.1 Cookie fundamentals
- [ ] Cookie
- [ ] Set-Cookie
- [ ] Cookie header
- [ ] Cookie name
- [ ] Cookie value
- [ ] Domain attribute
- [ ] Path attribute
- [ ] Expires attribute
- [ ] Max-Age attribute
- [ ] Secure attribute
- [ ] HttpOnly attribute
- [ ] SameSite attribute
- [ ] Partitioned attribute
- [ ] Cookie prefix
- [ ] Cookie size limits

### 11.2 Session management
- [ ] Session ID
- [ ] Server-side session
- [ ] Client-side session
- [ ] Session cookie
- [ ] Persistent cookie
- [ ] Session store
- [ ] Session expiration
- [ ] Session rotation
- [ ] Session fixation prevention
- [ ] Session invalidation
- [ ] Logout
- [ ] Concurrent sessions
- [ ] Sticky session
- [ ] Distributed session

### 11.3 Browser storage
- [ ] LocalStorage
- [ ] SessionStorage
- [ ] IndexedDB
- [ ] Cache API
- [ ] Cookie storage
- [ ] Storage quota
- [ ] Origin storage
- [ ] Partitioned storage
- [ ] Persistent storage
- [ ] Storage eviction
- [ ] Private browsing behavior
- [ ] Storage security

### 11.4 State security
- [ ] CSRF
- [ ] XSS and token theft
- [ ] Session hijacking
- [ ] Cookie tossing
- [ ] SameSite defense
- [ ] Secure cookie requirement
- [ ] HttpOnly defense
- [ ] Token rotation
- [ ] Refresh token storage
- [ ] Logout invalidation
- [ ] Device binding
- [ ] Anomaly detection

---

## 12. Browser Networking and Security Boundaries

### 12.1 Browser networking stack
- [ ] Navigation request
- [ ] Subresource request
- [ ] Preload scanner
- [ ] Connection pool
- [ ] DNS cache
- [ ] HTTP cache
- [ ] TLS cache
- [ ] HSTS cache
- [ ] Service Worker interception
- [ ] Fetch algorithm
- [ ] Redirect handling
- [ ] Mixed content blocking
- [ ] Certificate validation
- [ ] Network error handling

### 12.2 Same-origin policy
- [ ] Origin calculation
- [ ] Script access restrictions
- [ ] DOM access restrictions
- [ ] Storage access restrictions
- [ ] Cookie scope
- [ ] Cross-origin reads
- [ ] Cross-origin writes
- [ ] Cross-origin embeds
- [ ] Opaque responses
- [ ] Origin isolation
- [ ] Site isolation

### 12.3 CORS
- [ ] Cross-Origin Resource Sharing
- [ ] Simple request
- [ ] Preflight request
- [ ] OPTIONS preflight
- [ ] Access-Control-Allow-Origin
- [ ] Access-Control-Allow-Methods
- [ ] Access-Control-Allow-Headers
- [ ] Access-Control-Allow-Credentials
- [ ] Access-Control-Max-Age
- [ ] Vary Origin
- [ ] Credentialed requests
- [ ] CORS misconfiguration
- [ ] Wildcard origin risk

### 12.4 Fetch metadata
- [ ] Sec-Fetch-Site
- [ ] Sec-Fetch-Mode
- [ ] Sec-Fetch-Dest
- [ ] Sec-Fetch-User
- [ ] Cross-site request filtering
- [ ] CSRF defense
- [ ] Request context validation
- [ ] Resource isolation policy
- [ ] Browser-generated security headers

### 12.5 Cross-origin isolation
- [ ] COOP
- [ ] COEP
- [ ] CORP
- [ ] SharedArrayBuffer requirements
- [ ] Cross-origin resource policy
- [ ] Cross-origin embedder policy
- [ ] Cross-origin opener policy
- [ ] Isolated browsing context group
- [ ] Spectre mitigation
- [ ] Resource loading restrictions

---

## 13. Web Security Headers and Browser Defenses

### 13.1 Transport security headers
- [ ] Strict-Transport-Security
- [ ] HSTS preload
- [ ] Include subdomains
- [ ] Max age
- [ ] HTTPS redirect
- [ ] Upgrade-Insecure-Requests
- [ ] Mixed content policy
- [ ] Secure cookies
- [ ] Certificate transparency monitoring

### 13.2 Content Security Policy
- [ ] Content-Security-Policy
- [ ] default-src
- [ ] script-src
- [ ] style-src
- [ ] img-src
- [ ] connect-src
- [ ] frame-src
- [ ] object-src
- [ ] base-uri
- [ ] form-action
- [ ] frame-ancestors
- [ ] nonce
- [ ] hash source
- [ ] strict-dynamic
- [ ] report-uri
- [ ] report-to
- [ ] CSP report-only

### 13.3 Framing and embedding defenses
- [ ] X-Frame-Options
- [ ] frame-ancestors
- [ ] Clickjacking defense
- [ ] Sandboxed iframe
- [ ] iframe allow attribute
- [ ] Permissions Policy
- [ ] Cross-origin opener policy
- [ ] Cross-origin embedder policy
- [ ] Cross-origin resource policy

### 13.4 Content sniffing and referrer controls
- [ ] X-Content-Type-Options
- [ ] nosniff
- [ ] Referrer-Policy
- [ ] MIME sniffing
- [ ] Content-Type correctness
- [ ] Download handling
- [ ] Cross-origin resource handling
- [ ] Sensitive URL leakage prevention

### 13.5 Permissions and privacy headers
- [ ] Permissions-Policy
- [ ] Camera permission
- [ ] Microphone permission
- [ ] Geolocation permission
- [ ] Payment permission
- [ ] Clipboard permission
- [ ] Interest cohort restrictions
- [ ] Privacy sandbox awareness
- [ ] Storage access policy
- [ ] Third-party cookie restrictions

---

## 14. Web Authentication and Authorization Protocols

### 14.1 Authentication fundamentals
- [ ] Identity
- [ ] Principal
- [ ] Credential
- [ ] Password
- [ ] Passkey
- [ ] Session
- [ ] Token
- [ ] Authentication factor
- [ ] MFA
- [ ] Risk-based authentication
- [ ] Device binding
- [ ] Account recovery
- [ ] Credential stuffing defense
- [ ] Brute-force defense

### 14.2 HTTP authentication
- [ ] Basic authentication
- [ ] Digest authentication
- [ ] Bearer authentication
- [ ] Mutual TLS authentication
- [ ] Proxy authentication
- [ ] Authorization header
- [ ] WWW-Authenticate header
- [ ] 401 challenge
- [ ] 403 forbidden response

### 14.3 OAuth 2.x
- [ ] Resource owner
- [ ] Client
- [ ] Authorization server
- [ ] Resource server
- [ ] Authorization code flow
- [ ] PKCE
- [ ] Client credentials flow
- [ ] Device authorization flow
- [ ] Refresh token
- [ ] Access token
- [ ] Scope
- [ ] Consent
- [ ] Token introspection
- [ ] Token revocation
- [ ] Redirect URI validation

### 14.4 OpenID Connect
- [ ] ID token
- [ ] UserInfo endpoint
- [ ] Discovery document
- [ ] JWKS
- [ ] Claims
- [ ] Nonce
- [ ] State
- [ ] Hybrid flow
- [ ] Authentication context
- [ ] Session management
- [ ] Logout
- [ ] Identity provider
- [ ] Relying party

### 14.5 SAML
- [ ] Identity provider
- [ ] Service provider
- [ ] Assertion
- [ ] SAML response
- [ ] Metadata
- [ ] Single sign-on
- [ ] Single logout
- [ ] Signature validation
- [ ] Encryption
- [ ] Audience restriction
- [ ] Clock skew
- [ ] Enterprise federation

### 14.6 WebAuthn and passkeys
- [ ] FIDO2
- [ ] WebAuthn
- [ ] Passkey
- [ ] Authenticator
- [ ] Relying party
- [ ] Public key credential
- [ ] Registration ceremony
- [ ] Authentication ceremony
- [ ] Resident credential
- [ ] Discoverable credential
- [ ] User verification
- [ ] User presence
- [ ] Attestation
- [ ] Assertion
- [ ] Phishing resistance

### 14.7 Authorization models
- [ ] Role-based access control
- [ ] Attribute-based access control
- [ ] Relationship-based access control
- [ ] Policy-based access control
- [ ] Permission
- [ ] Scope
- [ ] Claim
- [ ] Entitlement
- [ ] Resource-level authorization
- [ ] Row-level authorization
- [ ] Tenant isolation
- [ ] Policy decision point
- [ ] Policy enforcement point

---

## 15. Realtime and Bidirectional Protocols

### 15.1 Long polling
- [ ] Polling
- [ ] Long polling
- [ ] Request timeout
- [ ] Reconnect loop
- [ ] Message ordering
- [ ] Server resource usage
- [ ] Fallback transport
- [ ] Browser compatibility
- [ ] Cache bypassing

### 15.2 Server-Sent Events
- [ ] EventSource
- [ ] Text/event-stream
- [ ] One-way server-to-client stream
- [ ] Event ID
- [ ] Retry field
- [ ] Reconnection
- [ ] Last-Event-ID
- [ ] Heartbeats
- [ ] Proxy buffering issue
- [ ] Load balancer timeout
- [ ] Use cases

### 15.3 WebSocket
- [ ] WebSocket handshake
- [ ] HTTP Upgrade
- [ ] ws scheme
- [ ] wss scheme
- [ ] Full-duplex communication
- [ ] Frame
- [ ] Text frame
- [ ] Binary frame
- [ ] Ping frame
- [ ] Pong frame
- [ ] Close frame
- [ ] Subprotocol
- [ ] Backpressure
- [ ] Sticky sessions
- [ ] Load balancer support

### 15.4 WebRTC
- [ ] Peer-to-peer communication
- [ ] Media stream
- [ ] Data channel
- [ ] ICE
- [ ] STUN
- [ ] TURN
- [ ] SDP
- [ ] Signaling server
- [ ] DTLS
- [ ] SRTP
- [ ] NAT traversal
- [ ] Candidate gathering
- [ ] Connectivity checks
- [ ] SFU
- [ ] MCU

### 15.5 WebTransport
- [ ] WebTransport API
- [ ] HTTP/3 transport
- [ ] QUIC streams
- [ ] Reliable streams
- [ ] Unreliable datagrams
- [ ] Client-server realtime transport
- [ ] Low-latency transport
- [ ] Congestion control
- [ ] Backpressure
- [ ] Session establishment
- [ ] Browser support considerations
- [ ] Server support considerations

### 15.6 Realtime infrastructure design
- [ ] Connection fanout
- [ ] Presence
- [ ] Pub/sub backend
- [ ] Message broker
- [ ] Sticky routing
- [ ] Connection draining
- [ ] Heartbeats
- [ ] Reconnect strategy
- [ ] Delivery guarantees
- [ ] Ordering guarantees
- [ ] Rate limits
- [ ] Backpressure
- [ ] Horizontal scaling
- [ ] Regional routing

---

## 16. Proxies, Reverse Proxies, and Gateways

### 16.1 Proxy fundamentals
- [ ] Forward proxy
- [ ] Reverse proxy
- [ ] Transparent proxy
- [ ] Explicit proxy
- [ ] HTTP proxy
- [ ] SOCKS proxy
- [ ] CONNECT method
- [ ] Proxy authentication
- [ ] Proxy chaining
- [ ] Proxy headers
- [ ] Proxy buffering
- [ ] Proxy timeout
- [ ] Proxy cache
- [ ] Proxy protocol

### 16.2 Reverse proxy responsibilities
- [ ] TLS termination
- [ ] Request routing
- [ ] Host-based routing
- [ ] Path-based routing
- [ ] Header-based routing
- [ ] Load balancing
- [ ] Compression
- [ ] Static file serving
- [ ] Rate limiting
- [ ] Access logging
- [ ] Error handling
- [ ] Health checks
- [ ] Upstream connection pooling
- [ ] WebSocket proxying
- [ ] HTTP/2 termination
- [ ] HTTP/3 termination

### 16.3 Common reverse proxies
- [ ] NGINX
- [ ] Apache HTTP Server
- [ ] HAProxy
- [ ] Envoy
- [ ] Traefik
- [ ] Caddy
- [ ] OpenResty
- [ ] Cloud load balancer proxies
- [ ] Kubernetes ingress controllers
- [ ] API gateways
- [ ] Service mesh proxies

### 16.4 Proxy headers
- [ ] Host
- [ ] X-Forwarded-For
- [ ] X-Forwarded-Host
- [ ] X-Forwarded-Proto
- [ ] X-Real-IP
- [ ] Forwarded
- [ ] Via
- [ ] Proxy-Authorization
- [ ] X-Request-ID
- [ ] Traceparent
- [ ] Baggage
- [ ] PROXY protocol
- [ ] Header spoofing defense
- [ ] Trusted proxy configuration

### 16.5 API gateways
- [ ] API gateway
- [ ] Route matching
- [ ] Authentication
- [ ] Authorization
- [ ] Rate limiting
- [ ] Quotas
- [ ] Request transformation
- [ ] Response transformation
- [ ] Protocol translation
- [ ] API versioning
- [ ] Developer portal
- [ ] API keys
- [ ] Analytics
- [ ] Monetization
- [ ] Gateway observability

---

## 17. Load Balancing

### 17.1 Load balancing fundamentals
- [ ] Load balancer
- [ ] Backend pool
- [ ] Upstream server
- [ ] Listener
- [ ] Target group
- [ ] Health check
- [ ] Active health check
- [ ] Passive health check
- [ ] Load balancing algorithm
- [ ] Session persistence
- [ ] Connection draining
- [ ] Failover
- [ ] High availability

### 17.2 Load balancer layers
- [ ] Layer 3 load balancing
- [ ] Layer 4 load balancing
- [ ] Layer 7 load balancing
- [ ] DNS load balancing
- [ ] Global load balancing
- [ ] Anycast load balancing
- [ ] Client-side load balancing
- [ ] Server-side load balancing
- [ ] Service mesh load balancing

### 17.3 Load balancing algorithms
- [ ] Round robin
- [ ] Weighted round robin
- [ ] Least connections
- [ ] Least response time
- [ ] Random
- [ ] Power of two choices
- [ ] IP hash
- [ ] Consistent hashing
- [ ] Ring hash
- [ ] Maglev hashing
- [ ] Weighted target
- [ ] Locality-aware routing
- [ ] Zone-aware routing

### 17.4 Session persistence
- [ ] Sticky session
- [ ] Cookie-based persistence
- [ ] Source IP persistence
- [ ] Header-based persistence
- [ ] Consistent hashing
- [ ] Stateful app constraints
- [ ] Stateless app preference
- [ ] Session store
- [ ] Failover impact
- [ ] Rebalancing impact

### 17.5 Load balancer operations
- [ ] Backend registration
- [ ] Backend deregistration
- [ ] Connection draining
- [ ] Health check tuning
- [ ] Timeout tuning
- [ ] Retry policy
- [ ] TLS policy
- [ ] Access logs
- [ ] Metrics
- [ ] Autoscaling integration
- [ ] Blue-green routing
- [ ] Canary routing

---

## 18. CDN and Edge Infrastructure

### 18.1 CDN fundamentals
- [ ] Content Delivery Network
- [ ] Edge location
- [ ] Point of presence
- [ ] Origin server
- [ ] Cache node
- [ ] Edge cache
- [ ] Cache key
- [ ] Cache hit
- [ ] Cache miss
- [ ] Cache fill
- [ ] Cache purge
- [ ] Anycast
- [ ] Geo routing
- [ ] Origin shield

### 18.2 Static asset delivery
- [ ] JavaScript asset
- [ ] CSS asset
- [ ] Image asset
- [ ] Font asset
- [ ] Video asset
- [ ] Fingerprinted filenames
- [ ] Immutable caching
- [ ] Compression
- [ ] Brotli
- [ ] Zstandard
- [ ] Image transformation
- [ ] Responsive image delivery
- [ ] Range requests
- [ ] Large object delivery

### 18.3 Dynamic acceleration
- [ ] Dynamic content routing
- [ ] TCP optimization
- [ ] TLS optimization
- [ ] HTTP/2 support
- [ ] HTTP/3 support
- [ ] Origin connection pooling
- [ ] Shielding
- [ ] Request collapsing
- [ ] Edge routing
- [ ] Regional edge cache
- [ ] Latency reduction
- [ ] Failover routing

### 18.4 Edge compute
- [ ] Edge function
- [ ] Worker runtime
- [ ] Request transformation
- [ ] Response transformation
- [ ] Header manipulation
- [ ] Authentication at edge
- [ ] A/B testing at edge
- [ ] Bot filtering at edge
- [ ] Geolocation at edge
- [ ] Personalization at edge
- [ ] Edge caching logic
- [ ] Edge cold start
- [ ] Edge observability

### 18.5 CDN security
- [ ] DDoS protection
- [ ] WAF at edge
- [ ] Bot management
- [ ] Rate limiting
- [ ] TLS termination
- [ ] Origin access control
- [ ] Signed URLs
- [ ] Signed cookies
- [ ] Token authentication
- [ ] Hotlink protection
- [ ] Cache poisoning prevention
- [ ] Header normalization
- [ ] Origin shielding

---

## 19. Web Servers and Application Infrastructure

### 19.1 Web server fundamentals
- [ ] Web server
- [ ] Static file serving
- [ ] Directory index
- [ ] Virtual host
- [ ] Access log
- [ ] Error log
- [ ] Worker process
- [ ] Worker thread
- [ ] Event loop
- [ ] TLS configuration
- [ ] HTTP/2 support
- [ ] HTTP/3 support
- [ ] Compression
- [ ] Rate limiting
- [ ] Request buffering

### 19.2 Common web servers
- [ ] NGINX
- [ ] Apache HTTP Server
- [ ] Caddy
- [ ] Lighttpd
- [ ] OpenResty
- [ ] IIS
- [ ] Envoy
- [ ] HAProxy
- [ ] Traefik
- [ ] Node.js HTTP server
- [ ] Java servlet container
- [ ] Go HTTP server

### 19.3 Application server patterns
- [ ] Process-per-request
- [ ] Thread-per-request
- [ ] Event loop
- [ ] Worker pool
- [ ] Async I/O
- [ ] Connection pool
- [ ] Request queue
- [ ] Backpressure
- [ ] Graceful shutdown
- [ ] Hot reload
- [ ] Rolling restart
- [ ] Health endpoint
- [ ] Readiness endpoint
- [ ] Liveness endpoint

### 19.4 Static hosting
- [ ] Static site
- [ ] Object storage hosting
- [ ] CDN-backed hosting
- [ ] SPA fallback routing
- [ ] Index document
- [ ] Error document
- [ ] Asset hashing
- [ ] Immutable assets
- [ ] HTML cache policy
- [ ] Deployment invalidation
- [ ] Preview deployment
- [ ] Atomic deployment

### 19.5 Serverless web infrastructure
- [ ] Function as a Service
- [ ] Serverless HTTP function
- [ ] Cold start
- [ ] Warm start
- [ ] Execution timeout
- [ ] Concurrency limit
- [ ] Event trigger
- [ ] API gateway integration
- [ ] Edge function
- [ ] Regional function
- [ ] Stateless execution
- [ ] Vendor lock-in
- [ ] Cost model

---

## 20. API Protocols and Data Exchange

### 20.1 REST over HTTP
- [ ] Resource
- [ ] Representation
- [ ] HTTP method semantics
- [ ] Status code semantics
- [ ] Statelessness
- [ ] Idempotency
- [ ] Pagination
- [ ] Filtering
- [ ] Sorting
- [ ] Versioning
- [ ] Error format
- [ ] Content negotiation
- [ ] HATEOAS awareness
- [ ] Caching

### 20.2 GraphQL transport
- [ ] GraphQL over HTTP
- [ ] Query
- [ ] Mutation
- [ ] Subscription
- [ ] Single endpoint
- [ ] Request body
- [ ] Variables
- [ ] Operation name
- [ ] Persisted queries
- [ ] Batching
- [ ] Caching challenges
- [ ] Error handling
- [ ] Introspection
- [ ] Depth limiting
- [ ] Complexity limiting

### 20.3 gRPC
- [ ] HTTP/2 transport
- [ ] Protocol Buffers
- [ ] Unary RPC
- [ ] Server streaming
- [ ] Client streaming
- [ ] Bidirectional streaming
- [ ] Deadlines
- [ ] Metadata
- [ ] Status codes
- [ ] Interceptors
- [ ] Reflection
- [ ] gRPC-Web
- [ ] Load balancing
- [ ] Service discovery

### 20.4 Webhooks
- [ ] Event callback
- [ ] Webhook endpoint
- [ ] Signature verification
- [ ] Timestamp verification
- [ ] Replay protection
- [ ] Retry policy
- [ ] Idempotency
- [ ] Delivery attempts
- [ ] Dead letter handling
- [ ] Webhook secret rotation
- [ ] Webhook versioning
- [ ] Webhook observability

### 20.5 Data formats
- [ ] JSON
- [ ] XML
- [ ] HTML
- [ ] Form URL encoding
- [ ] Multipart form data
- [ ] Protocol Buffers
- [ ] Avro
- [ ] MessagePack
- [ ] CBOR
- [ ] YAML
- [ ] CSV
- [ ] NDJSON
- [ ] Binary payload
- [ ] Media type registration

### 20.6 API contracts
- [ ] OpenAPI
- [ ] AsyncAPI
- [ ] GraphQL schema
- [ ] Protobuf schema
- [ ] JSON Schema
- [ ] Schema versioning
- [ ] Backward compatibility
- [ ] Forward compatibility
- [ ] Contract testing
- [ ] Consumer-driven contract
- [ ] API deprecation
- [ ] API sunset
- [ ] API changelog

---

## 21. Email and Adjacent Web Protocols

### 21.1 Email transport
- [ ] SMTP
- [ ] Submission port
- [ ] STARTTLS
- [ ] MX records
- [ ] Mail transfer agent
- [ ] Mail delivery agent
- [ ] Mail user agent
- [ ] Bounce message
- [ ] Delivery status notification
- [ ] Queueing
- [ ] Retry behavior
- [ ] Greylisting

### 21.2 Email authentication
- [ ] SPF
- [ ] DKIM
- [ ] DMARC
- [ ] Alignment
- [ ] Policy
- [ ] Aggregate reports
- [ ] Forensic reports
- [ ] BIMI
- [ ] Reverse DNS
- [ ] Sender reputation
- [ ] Domain reputation
- [ ] IP warmup

### 21.3 Email retrieval
- [ ] IMAP
- [ ] POP3
- [ ] Mailbox
- [ ] Folder
- [ ] UID
- [ ] Message flags
- [ ] Synchronization
- [ ] Push notification
- [ ] OAuth for email clients
- [ ] TLS for retrieval
- [ ] Mail client configuration

### 21.4 Web push
- [ ] Push API
- [ ] Service Worker
- [ ] Push subscription
- [ ] VAPID
- [ ] Notification permission
- [ ] Push service
- [ ] Payload encryption
- [ ] Expiration
- [ ] Topic replacement
- [ ] Delivery reliability
- [ ] Browser restrictions

---

## 22. Web Performance Infrastructure

### 22.1 Performance fundamentals
- [ ] Latency
- [ ] Throughput
- [ ] Bandwidth
- [ ] Time to first byte
- [ ] DNS lookup time
- [ ] TCP connect time
- [ ] TLS handshake time
- [ ] Server processing time
- [ ] Download time
- [ ] Render blocking
- [ ] Critical path
- [ ] Tail latency
- [ ] Percentiles

### 22.2 Core Web Vitals infrastructure impact
- [ ] Largest Contentful Paint
- [ ] Interaction to Next Paint
- [ ] Cumulative Layout Shift
- [ ] Time to First Byte
- [ ] First Contentful Paint
- [ ] Resource loading impact
- [ ] CDN impact
- [ ] Cache impact
- [ ] Compression impact
- [ ] Image delivery impact
- [ ] Font delivery impact

### 22.3 Resource delivery optimization
- [ ] Compression
- [ ] Brotli
- [ ] Zstandard
- [ ] gzip
- [ ] Minification
- [ ] Tree shaking
- [ ] Code splitting
- [ ] Bundling
- [ ] HTTP/2 multiplexing
- [ ] HTTP/3 transport
- [ ] Preload
- [ ] Prefetch
- [ ] Preconnect
- [ ] DNS-prefetch
- [ ] Lazy loading

### 22.4 Network-level optimization
- [ ] CDN placement
- [ ] Anycast routing
- [ ] Keep-alive
- [ ] Connection reuse
- [ ] TLS session resumption
- [ ] 0-RTT
- [ ] HTTP/2 multiplexing
- [ ] HTTP/3 migration
- [ ] Origin shielding
- [ ] Request coalescing
- [ ] Cache warming
- [ ] Image optimization
- [ ] Edge rendering
- [ ] Regional routing

### 22.5 Load testing
- [ ] Request rate
- [ ] Concurrent users
- [ ] Connection count
- [ ] Ramp-up
- [ ] Soak test
- [ ] Spike test
- [ ] Stress test
- [ ] Breakpoint test
- [ ] Latency percentiles
- [ ] Error rate
- [ ] Saturation
- [ ] Resource utilization
- [ ] Bottleneck analysis
- [ ] Capacity planning

---

## 23. Web Security Infrastructure

### 23.1 Common web risks
- [ ] Broken access control
- [ ] Cryptographic failures
- [ ] Injection
- [ ] Insecure design
- [ ] Security misconfiguration
- [ ] Vulnerable components
- [ ] Authentication failures
- [ ] Integrity failures
- [ ] Logging and monitoring failures
- [ ] Server-side request forgery
- [ ] Cross-site scripting
- [ ] Cross-site request forgery
- [ ] Clickjacking
- [ ] Open redirect

### 23.2 WAF
- [ ] Web Application Firewall
- [ ] Signature-based detection
- [ ] Anomaly detection
- [ ] Managed rules
- [ ] Custom rules
- [ ] IP allowlist
- [ ] IP denylist
- [ ] Geo blocking
- [ ] Bot blocking
- [ ] Rate limiting
- [ ] Request body inspection
- [ ] False positives
- [ ] Rule tuning
- [ ] WAF logging

### 23.3 DDoS protection
- [ ] Volumetric attack
- [ ] Protocol attack
- [ ] Application-layer attack
- [ ] SYN flood
- [ ] UDP flood
- [ ] HTTP flood
- [ ] Amplification attack
- [ ] Anycast mitigation
- [ ] Scrubbing center
- [ ] Rate limiting
- [ ] Challenge response
- [ ] Bot detection
- [ ] Origin hiding
- [ ] Emergency runbook

### 23.4 Bot management
- [ ] Bot detection
- [ ] User-Agent analysis
- [ ] IP reputation
- [ ] Device fingerprinting
- [ ] Behavioral analysis
- [ ] CAPTCHA
- [ ] JavaScript challenge
- [ ] Proof-of-work challenge
- [ ] Rate limiting
- [ ] Credential stuffing defense
- [ ] Scraping defense
- [ ] Good bot allowlist
- [ ] False positive management

### 23.5 Security scanning
- [ ] SAST
- [ ] DAST
- [ ] IAST
- [ ] Dependency scanning
- [ ] Secret scanning
- [ ] Container scanning
- [ ] Infrastructure scanning
- [ ] TLS scanning
- [ ] Header scanning
- [ ] Vulnerability management
- [ ] Penetration testing
- [ ] Bug bounty
- [ ] Remediation tracking

### 23.6 Incident response
- [ ] Detection
- [ ] Triage
- [ ] Containment
- [ ] Eradication
- [ ] Recovery
- [ ] Postmortem
- [ ] Log preservation
- [ ] Evidence collection
- [ ] Customer communication
- [ ] Credential rotation
- [ ] Certificate rotation
- [ ] WAF emergency rule
- [ ] DDoS mitigation activation

---

## 24. Observability for Web Infrastructure

### 24.1 Logging
- [ ] Access logs
- [ ] Error logs
- [ ] Application logs
- [ ] Proxy logs
- [ ] CDN logs
- [ ] WAF logs
- [ ] Load balancer logs
- [ ] DNS logs
- [ ] TLS logs
- [ ] Audit logs
- [ ] Structured logging
- [ ] Correlation ID
- [ ] Request ID
- [ ] Log sampling
- [ ] Log retention

### 24.2 Metrics
- [ ] Request rate
- [ ] Error rate
- [ ] Duration
- [ ] Latency percentiles
- [ ] Throughput
- [ ] Connection count
- [ ] Active requests
- [ ] Queue depth
- [ ] Cache hit ratio
- [ ] Origin fetch count
- [ ] TLS handshake count
- [ ] DNS resolution time
- [ ] Saturation
- [ ] Availability
- [ ] Apdex

### 24.3 Distributed tracing
- [ ] Trace
- [ ] Span
- [ ] Parent span
- [ ] Trace ID
- [ ] Span ID
- [ ] Trace context
- [ ] W3C Trace Context
- [ ] Baggage
- [ ] Sampling
- [ ] Propagation
- [ ] Service map
- [ ] Waterfall view
- [ ] Critical path
- [ ] Tail-based sampling

### 24.4 Synthetic monitoring
- [ ] Uptime check
- [ ] HTTP check
- [ ] Browser check
- [ ] DNS check
- [ ] TLS check
- [ ] API check
- [ ] Multi-region check
- [ ] Transaction check
- [ ] Availability SLI
- [ ] Latency SLI
- [ ] Alerting
- [ ] Status page integration

### 24.5 Real user monitoring
- [ ] Navigation timing
- [ ] Resource timing
- [ ] Long tasks
- [ ] Core Web Vitals
- [ ] Browser errors
- [ ] Network errors
- [ ] Geo latency
- [ ] Device class
- [ ] Connection type
- [ ] User session replay
- [ ] Sampling
- [ ] Privacy considerations

### 24.6 Alerting
- [ ] SLI
- [ ] SLO
- [ ] Error budget
- [ ] Burn rate
- [ ] Availability alert
- [ ] Latency alert
- [ ] Error-rate alert
- [ ] Saturation alert
- [ ] Certificate expiry alert
- [ ] DNS failure alert
- [ ] CDN failure alert
- [ ] WAF anomaly alert
- [ ] Alert routing
- [ ] Alert fatigue reduction

---

## 25. Deployment Infrastructure

### 25.1 Deployment models
- [ ] Bare metal deployment
- [ ] Virtual machine deployment
- [ ] Container deployment
- [ ] Kubernetes deployment
- [ ] Serverless deployment
- [ ] Edge deployment
- [ ] Static hosting
- [ ] Multi-region deployment
- [ ] Hybrid deployment
- [ ] On-premises deployment
- [ ] Cloud deployment
- [ ] CDN-backed deployment

### 25.2 Release strategies
- [ ] Recreate deployment
- [ ] Rolling deployment
- [ ] Blue-green deployment
- [ ] Canary deployment
- [ ] Feature flag rollout
- [ ] Dark launch
- [ ] Shadow traffic
- [ ] A/B testing
- [ ] Progressive delivery
- [ ] Rollback
- [ ] Roll-forward
- [ ] Database-compatible deployment

### 25.3 Infrastructure as Code
- [ ] Terraform
- [ ] OpenTofu
- [ ] Pulumi
- [ ] CloudFormation
- [ ] Bicep
- [ ] Ansible
- [ ] Helm
- [ ] Kustomize
- [ ] Kubernetes manifests
- [ ] GitOps
- [ ] Drift detection
- [ ] State management
- [ ] Plan review
- [ ] Policy as code

### 25.4 CI/CD for web infrastructure
- [ ] Build pipeline
- [ ] Test pipeline
- [ ] Security scan
- [ ] Artifact publishing
- [ ] Container image publishing
- [ ] Static asset publishing
- [ ] Infrastructure plan
- [ ] Deployment approval
- [ ] Environment promotion
- [ ] Smoke tests
- [ ] Synthetic checks
- [ ] Rollback automation
- [ ] Deployment audit

### 25.5 Configuration and secrets
- [ ] Environment variables
- [ ] Config file
- [ ] Secret manager
- [ ] Runtime configuration
- [ ] Build-time configuration
- [ ] Feature flags
- [ ] Config validation
- [ ] Secret rotation
- [ ] Secret injection
- [ ] Config drift
- [ ] Environment parity
- [ ] Sensitive data redaction

---

## 26. Kubernetes and Cloud-Native Web Networking

### 26.1 Kubernetes web primitives
- [ ] Pod
- [ ] Service
- [ ] EndpointSlice
- [ ] Ingress
- [ ] Gateway API
- [ ] IngressClass
- [ ] GatewayClass
- [ ] HTTPRoute
- [ ] Service mesh
- [ ] NetworkPolicy
- [ ] ConfigMap
- [ ] Secret
- [ ] Readiness probe
- [ ] Liveness probe

### 26.2 Kubernetes ingress
- [ ] Ingress controller
- [ ] Host routing
- [ ] Path routing
- [ ] TLS secret
- [ ] Certificate automation
- [ ] Ingress annotations
- [ ] Rewrite rules
- [ ] Rate limiting
- [ ] Proxy timeouts
- [ ] WebSocket support
- [ ] gRPC support
- [ ] External load balancer integration
- [ ] Internal ingress
- [ ] Public ingress

### 26.3 Gateway API
- [ ] GatewayClass
- [ ] Gateway
- [ ] Listener
- [ ] HTTPRoute
- [ ] GRPCRoute
- [ ] TLSRoute
- [ ] TCPRoute
- [ ] BackendRef
- [ ] ParentRef
- [ ] Cross-namespace routing
- [ ] Policy attachment
- [ ] Traffic splitting
- [ ] Header modification
- [ ] Standard channel
- [ ] Experimental channel

### 26.4 Service mesh
- [ ] Sidecar proxy
- [ ] Ambient mesh
- [ ] mTLS
- [ ] Service identity
- [ ] Traffic policy
- [ ] Retry
- [ ] Timeout
- [ ] Circuit breaker
- [ ] Fault injection
- [ ] Traffic mirroring
- [ ] Canary routing
- [ ] Observability
- [ ] Authorization policy
- [ ] Egress gateway

### 26.5 Cloud load balancing
- [ ] Public load balancer
- [ ] Internal load balancer
- [ ] Application load balancer
- [ ] Network load balancer
- [ ] Global load balancer
- [ ] Regional load balancer
- [ ] TLS certificate attachment
- [ ] Health check
- [ ] Backend service
- [ ] URL map
- [ ] Target group
- [ ] Security policy
- [ ] Cloud CDN integration

---

## 27. Reliability Engineering for Web Infrastructure

### 27.1 Availability fundamentals
- [ ] Uptime
- [ ] Availability percentage
- [ ] Downtime budget
- [ ] Single point of failure
- [ ] Redundancy
- [ ] Failover
- [ ] Graceful degradation
- [ ] Fault isolation
- [ ] Blast radius
- [ ] Health checks
- [ ] Dependency management
- [ ] Error budget

### 27.2 Resilience patterns
- [ ] Timeout
- [ ] Retry
- [ ] Exponential backoff
- [ ] Jitter
- [ ] Circuit breaker
- [ ] Bulkhead
- [ ] Rate limiting
- [ ] Load shedding
- [ ] Queueing
- [ ] Backpressure
- [ ] Fallback
- [ ] Graceful degradation
- [ ] Idempotency
- [ ] Deduplication

### 27.3 Multi-region architecture
- [ ] Active-passive
- [ ] Active-active
- [ ] Regional failover
- [ ] Global load balancing
- [ ] Geo DNS
- [ ] Anycast
- [ ] Data replication
- [ ] Session replication
- [ ] Regional cache
- [ ] Traffic steering
- [ ] Disaster recovery
- [ ] RPO
- [ ] RTO
- [ ] Failover testing

### 27.4 Capacity planning
- [ ] Request volume
- [ ] Peak traffic
- [ ] Growth rate
- [ ] Connection count
- [ ] CPU saturation
- [ ] Memory saturation
- [ ] Network saturation
- [ ] Disk saturation
- [ ] Cache capacity
- [ ] Database capacity
- [ ] Load test results
- [ ] Headroom
- [ ] Autoscaling policy
- [ ] Cost-performance trade-off

### 27.5 Incident management
- [ ] Incident detection
- [ ] Incident severity
- [ ] Incident commander
- [ ] Triage
- [ ] Mitigation
- [ ] Rollback
- [ ] Communication
- [ ] Status page
- [ ] Timeline
- [ ] Root cause analysis
- [ ] Postmortem
- [ ] Action items
- [ ] Regression prevention

---

## 28. Protocol and Infrastructure Troubleshooting

### 28.1 DNS troubleshooting checklist
- [ ] Check domain registration
- [ ] Check authoritative nameservers
- [ ] Check A/AAAA records
- [ ] Check CNAME chain
- [ ] Check TTL
- [ ] Check DNSSEC
- [ ] Check resolver cache
- [ ] Check split-horizon behavior
- [ ] Check IPv6 behavior
- [ ] Check CDN DNS records
- [ ] Check CAA records
- [ ] Check propagation

### 28.2 TCP troubleshooting checklist
- [ ] Check port listening
- [ ] Check firewall
- [ ] Check routing
- [ ] Check SYN packets
- [ ] Check connection refused
- [ ] Check connection timeout
- [ ] Check retransmissions
- [ ] Check MTU
- [ ] Check NAT
- [ ] Check ephemeral ports
- [ ] Check listen backlog
- [ ] Check keepalive

### 28.3 TLS troubleshooting checklist
- [ ] Check certificate validity
- [ ] Check hostname match
- [ ] Check certificate chain
- [ ] Check intermediate certificate
- [ ] Check protocol versions
- [ ] Check cipher suites
- [ ] Check SNI
- [ ] Check ALPN
- [ ] Check OCSP
- [ ] Check HSTS
- [ ] Check mTLS client certificate
- [ ] Check certificate expiry monitoring

### 28.4 HTTP troubleshooting checklist
- [ ] Check request method
- [ ] Check URL
- [ ] Check request headers
- [ ] Check request body
- [ ] Check response status
- [ ] Check response headers
- [ ] Check redirects
- [ ] Check cache headers
- [ ] Check CORS headers
- [ ] Check cookies
- [ ] Check compression
- [ ] Check proxy headers
- [ ] Check upstream timeout
- [ ] Check response size

### 28.5 CDN troubleshooting checklist
- [ ] Check DNS routing to CDN
- [ ] Check cache status header
- [ ] Check origin reachability
- [ ] Check origin certificate
- [ ] Check edge certificate
- [ ] Check cache key
- [ ] Check cache rules
- [ ] Check purge status
- [ ] Check WAF rule
- [ ] Check geo restriction
- [ ] Check bot protection
- [ ] Check edge logs

### 28.6 Load balancer troubleshooting checklist
- [ ] Check listener
- [ ] Check target group
- [ ] Check backend health
- [ ] Check health check path
- [ ] Check health check timeout
- [ ] Check backend port
- [ ] Check security group
- [ ] Check connection draining
- [ ] Check TLS policy
- [ ] Check sticky session
- [ ] Check request routing rule
- [ ] Check load balancer logs

---

## 29. Current Standards and Ecosystem Awareness

### 29.1 Core protocol standards
- [ ] HTTP Semantics RFC 9110 awareness
- [ ] HTTP/1.1 RFC 9112 awareness
- [ ] HTTP/2 RFC 9113 awareness
- [ ] HTTP/3 RFC 9114 awareness
- [ ] QUIC RFC 9000 awareness
- [ ] TLS 1.3 RFC 8446 awareness
- [ ] WebSocket RFC 6455 awareness
- [ ] URI RFC 3986 awareness
- [ ] DNS core RFCs awareness
- [ ] DNS over HTTPS RFC 8484 awareness
- [ ] DNS over QUIC RFC 9250 awareness
- [ ] OAuth 2.0 RFC 6749 awareness
- [ ] OAuth 2.1 draft awareness
- [ ] OpenID Connect awareness

### 29.2 Browser platform awareness
- [ ] Fetch standard awareness
- [ ] URL standard awareness
- [ ] HTML standard awareness
- [ ] Service Worker awareness
- [ ] WebTransport awareness
- [ ] WebRTC awareness
- [ ] WebAuthn awareness
- [ ] CORS awareness
- [ ] CSP awareness
- [ ] Storage partitioning awareness
- [ ] Third-party cookie phaseout awareness
- [ ] Secure contexts awareness

### 29.3 Security standards and guidance
- [ ] OWASP Top 10 awareness
- [ ] OWASP API Security Top 10 awareness
- [ ] OWASP ASVS awareness
- [ ] OWASP CSRF guidance awareness
- [ ] OWASP CSP guidance awareness
- [ ] NIST password guidance awareness
- [ ] CIS benchmarks awareness
- [ ] Mozilla TLS configuration guidance awareness
- [ ] Web security headers awareness
- [ ] Supply chain security awareness

### 29.4 Infrastructure ecosystem
- [ ] NGINX awareness
- [ ] Apache HTTP Server awareness
- [ ] HAProxy awareness
- [ ] Envoy awareness
- [ ] Traefik awareness
- [ ] Caddy awareness
- [ ] Cloudflare awareness
- [ ] Fastly awareness
- [ ] Akamai awareness
- [ ] AWS CloudFront awareness
- [ ] Google Cloud CDN awareness
- [ ] Azure Front Door awareness
- [ ] Kubernetes Gateway API awareness
- [ ] Service mesh awareness

---

## 30. Learning Path

### 30.1 Phase 1 — Web networking basics
- [ ] URL structure
- [ ] DNS basics
- [ ] IP basics
- [ ] TCP basics
- [ ] UDP basics
- [ ] TLS basics
- [ ] HTTP basics
- [ ] Browser request lifecycle
- [ ] Client-server model
- [ ] Basic troubleshooting tools

### 30.2 Phase 2 — HTTP and browser infrastructure
- [ ] HTTP methods
- [ ] HTTP status codes
- [ ] HTTP headers
- [ ] HTTP caching
- [ ] Cookies
- [ ] Sessions
- [ ] Same-origin policy
- [ ] CORS
- [ ] Security headers
- [ ] Browser cache
- [ ] Service Workers
- [ ] Resource loading

### 30.3 Phase 3 — Production web infrastructure
- [ ] Reverse proxies
- [ ] Load balancers
- [ ] TLS termination
- [ ] CDN
- [ ] Static hosting
- [ ] Web servers
- [ ] Application servers
- [ ] API gateways
- [ ] Health checks
- [ ] Logging
- [ ] Metrics
- [ ] Tracing

### 30.4 Phase 4 — Advanced protocols
- [ ] HTTP/2
- [ ] HTTP/3
- [ ] QUIC
- [ ] WebSocket
- [ ] Server-Sent Events
- [ ] WebRTC
- [ ] WebTransport
- [ ] gRPC
- [ ] GraphQL transport
- [ ] Webhooks
- [ ] DNS over HTTPS
- [ ] DNS over QUIC

### 30.5 Phase 5 — Security and reliability
- [ ] OAuth 2.x
- [ ] OIDC
- [ ] WebAuthn
- [ ] mTLS
- [ ] CSP
- [ ] HSTS
- [ ] WAF
- [ ] DDoS protection
- [ ] Bot management
- [ ] Rate limiting
- [ ] Incident response
- [ ] Multi-region failover

### 30.6 Phase 6 — Cloud-native infrastructure
- [ ] Containers
- [ ] Kubernetes Services
- [ ] Kubernetes Ingress
- [ ] Gateway API
- [ ] Service mesh
- [ ] CDN edge compute
- [ ] Serverless functions
- [ ] Infrastructure as Code
- [ ] GitOps
- [ ] Observability
- [ ] Load testing
- [ ] Capacity planning

---

## 31. Practical Projects

### 31.1 Project 1 — DNS and TLS Lab
- [ ] Register test domain
- [ ] Configure authoritative DNS
- [ ] Add A record
- [ ] Add AAAA record
- [ ] Add CNAME record
- [ ] Add CAA record
- [ ] Issue TLS certificate
- [ ] Configure HTTPS
- [ ] Enable HSTS
- [ ] Test with `dig`
- [ ] Test with `openssl s_client`
- [ ] Document resolution flow

### 31.2 Project 2 — HTTP Server and Reverse Proxy
- [ ] Run simple HTTP app
- [ ] Install reverse proxy
- [ ] Configure host routing
- [ ] Configure path routing
- [ ] Enable gzip or Brotli
- [ ] Configure access logs
- [ ] Configure error logs
- [ ] Configure TLS termination
- [ ] Add security headers
- [ ] Add health check endpoint
- [ ] Test with curl
- [ ] Test with browser DevTools

### 31.3 Project 3 — HTTP Caching Lab
- [ ] Serve static assets
- [ ] Add Cache-Control headers
- [ ] Add ETag
- [ ] Add Last-Modified
- [ ] Test 304 responses
- [ ] Add fingerprinted assets
- [ ] Configure CDN cache
- [ ] Purge CDN cache
- [ ] Test stale-while-revalidate
- [ ] Document cache behavior

### 31.4 Project 4 — Load Balancing Lab
- [ ] Run multiple backend instances
- [ ] Configure load balancer
- [ ] Add active health checks
- [ ] Test round robin
- [ ] Test least connections
- [ ] Configure sticky sessions
- [ ] Simulate backend failure
- [ ] Test connection draining
- [ ] Inspect logs
- [ ] Measure latency distribution

### 31.5 Project 5 — CDN and Edge Security Lab
- [ ] Put app behind CDN
- [ ] Configure edge TLS
- [ ] Configure origin TLS
- [ ] Configure cache rules
- [ ] Configure WAF rules
- [ ] Configure rate limiting
- [ ] Configure bot challenge
- [ ] Hide origin IP
- [ ] Test cache hit ratio
- [ ] Test WAF logs

### 31.6 Project 6 — WebSocket and SSE Lab
- [ ] Build SSE endpoint
- [ ] Build WebSocket endpoint
- [ ] Configure reverse proxy support
- [ ] Configure idle timeout
- [ ] Add heartbeats
- [ ] Add reconnect logic
- [ ] Test load balancer behavior
- [ ] Test scaling with pub/sub
- [ ] Monitor connection count
- [ ] Document protocol trade-offs

### 31.7 Project 7 — OAuth and OIDC Lab
- [ ] Configure identity provider
- [ ] Register client
- [ ] Implement authorization code flow
- [ ] Enable PKCE
- [ ] Validate ID token
- [ ] Validate access token
- [ ] Fetch JWKS
- [ ] Handle refresh token
- [ ] Implement logout
- [ ] Test redirect URI protection
- [ ] Document token lifecycle

### 31.8 Project 8 — Kubernetes Web Ingress Lab
- [ ] Deploy application
- [ ] Create Service
- [ ] Install ingress controller
- [ ] Configure Ingress
- [ ] Configure TLS secret
- [ ] Install cert-manager
- [ ] Configure HTTPRoute
- [ ] Add readiness probe
- [ ] Add liveness probe
- [ ] Test rolling update
- [ ] Inspect ingress logs
- [ ] Document routing path

### 31.9 Project 9 — Observability Lab
- [ ] Add structured logs
- [ ] Add request IDs
- [ ] Add metrics endpoint
- [ ] Add distributed tracing
- [ ] Configure Prometheus
- [ ] Configure Grafana
- [ ] Configure Loki or log backend
- [ ] Configure OpenTelemetry Collector
- [ ] Add synthetic check
- [ ] Add latency alert
- [ ] Add certificate expiry alert

### 31.10 Project 10 — Web Infrastructure Incident Drill
- [ ] Simulate DNS failure
- [ ] Simulate certificate expiry
- [ ] Simulate backend outage
- [ ] Simulate CDN cache poisoning
- [ ] Simulate load balancer health failure
- [ ] Simulate DDoS-like traffic
- [ ] Execute mitigation runbook
- [ ] Communicate status
- [ ] Restore service
- [ ] Write postmortem

---

## 32. Competency Checklist

### 32.1 Junior web infrastructure competency
- [ ] Explain URL structure
- [ ] Explain DNS resolution
- [ ] Explain TCP connection setup
- [ ] Explain TLS basics
- [ ] Explain HTTP request and response
- [ ] Use curl effectively
- [ ] Use browser DevTools network panel
- [ ] Read HTTP status codes
- [ ] Read HTTP headers
- [ ] Configure basic HTTPS
- [ ] Understand cookies
- [ ] Understand CORS basics
- [ ] Troubleshoot simple 4xx and 5xx errors

### 32.2 Mid-level web infrastructure competency
- [ ] Configure reverse proxy
- [ ] Configure load balancer
- [ ] Configure CDN cache rules
- [ ] Configure TLS certificates
- [ ] Configure security headers
- [ ] Diagnose DNS issues
- [ ] Diagnose TLS issues
- [ ] Diagnose cache issues
- [ ] Diagnose CORS issues
- [ ] Configure WebSocket proxying
- [ ] Add health checks
- [ ] Add access logs
- [ ] Add metrics
- [ ] Run load tests

### 32.3 Senior web infrastructure competency
- [ ] Design production web traffic flow
- [ ] Design multi-region routing
- [ ] Design CDN strategy
- [ ] Design cache strategy
- [ ] Design TLS and certificate automation
- [ ] Design authentication flow
- [ ] Design API gateway architecture
- [ ] Design WAF and DDoS protection
- [ ] Design observability
- [ ] Define SLOs
- [ ] Perform incident response
- [ ] Tune load balancers
- [ ] Tune reverse proxies
- [ ] Plan protocol migrations

### 32.4 Advanced web infrastructure competency
- [ ] Debug packet captures
- [ ] Analyze HTTP/2 behavior
- [ ] Analyze HTTP/3 and QUIC behavior
- [ ] Design edge compute workflows
- [ ] Design zero-trust web access
- [ ] Design service mesh traffic policy
- [ ] Design global failover
- [ ] Design high-scale realtime systems
- [ ] Build custom gateway plugins
- [ ] Build protocol-level observability
- [ ] Harden infrastructure against abuse
- [ ] Lead large-scale outage postmortems
