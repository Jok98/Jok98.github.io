# Kubernetes Roadmap — Fundamentals to Advanced

## 1. Prerequisites

### 1.1 Linux fundamentals
- [ ] Linux filesystem
- [ ] Process model
- [ ] Environment variables
- [ ] Signals
- [ ] Exit codes
- [ ] File permissions
- [ ] Users and groups
- [ ] Systemd basics
- [ ] Journald basics
- [ ] Networking commands
- [ ] DNS troubleshooting
- [ ] Package managers
- [ ] Shell scripting basics

### 1.2 Networking fundamentals
- [ ] IP addressing
- [ ] CIDR
- [ ] Subnetting
- [ ] Routing
- [ ] NAT
- [ ] TCP
- [ ] UDP
- [ ] DNS
- [ ] HTTP
- [ ] HTTPS
- [ ] TLS
- [ ] Load balancing
- [ ] Reverse proxy
- [ ] Firewall rules
- [ ] Network namespaces
- [ ] Virtual Ethernet pairs
- [ ] Overlay networking

### 1.3 Container fundamentals
- [ ] Container image
- [ ] Container runtime
- [ ] OCI image spec
- [ ] OCI runtime spec
- [ ] Docker
- [ ] containerd
- [ ] CRI-O
- [ ] Image layers
- [ ] Image tags
- [ ] Image digest
- [ ] Entrypoint
- [ ] Command
- [ ] Environment variables
- [ ] Volumes
- [ ] Bind mounts
- [ ] Container networking
- [ ] Container logs
- [ ] Container exit codes
- [ ] Multi-stage builds
- [ ] Distroless images
- [ ] Image scanning

### 1.4 YAML and configuration
- [ ] YAML syntax
- [ ] Key-value pairs
- [ ] Lists
- [ ] Nested objects
- [ ] Multi-document YAML
- [ ] Anchors
- [ ] Indentation rules
- [ ] JSON compatibility
- [ ] Environment-specific configuration
- [ ] Configuration drift
- [ ] Declarative configuration

### 1.5 Cloud-native fundamentals
- [ ] Twelve-factor app
- [ ] Stateless application
- [ ] Stateful application
- [ ] Horizontal scaling
- [ ] Vertical scaling
- [ ] Health checks
- [ ] Graceful shutdown
- [ ] Service discovery
- [ ] Externalized configuration
- [ ] Immutable infrastructure
- [ ] Infrastructure as Code
- [ ] GitOps
- [ ] Observability
- [ ] Resilience patterns

---

## 2. Kubernetes Mental Model

### 2.1 Core concepts
- [ ] Container orchestration
- [ ] Cluster
- [ ] Node
- [ ] Pod
- [ ] Control plane
- [ ] Worker node
- [ ] Desired state
- [ ] Actual state
- [ ] Declarative API
- [ ] Reconciliation loop
- [ ] Controller pattern
- [ ] Resource object
- [ ] API object
- [ ] API server
- [ ] Object lifecycle

### 2.2 Declarative model
- [ ] YAML manifest
- [ ] `spec`
- [ ] `status`
- [ ] Desired state declaration
- [ ] State reconciliation
- [ ] Apply operation
- [ ] Server-side apply
- [ ] Client-side apply
- [ ] Field ownership
- [ ] Drift detection
- [ ] Immutable fields
- [ ] Resource version
- [ ] Generation
- [ ] Observed generation

### 2.3 Kubernetes API model
- [ ] API group
- [ ] API version
- [ ] Kind
- [ ] Resource
- [ ] Namespaced resource
- [ ] Cluster-scoped resource
- [ ] Metadata
- [ ] Labels
- [ ] Annotations
- [ ] Finalizers
- [ ] Owner references
- [ ] Managed fields
- [ ] Status subresource
- [ ] Scale subresource

### 2.4 Controller model
- [ ] Watch
- [ ] Informer
- [ ] Work queue
- [ ] Reconcile function
- [ ] Idempotent reconciliation
- [ ] Eventual consistency
- [ ] Retry loop
- [ ] Backoff
- [ ] Status update
- [ ] Finalizer handling
- [ ] Garbage collection
- [ ] Ownership hierarchy

---

## 3. Local Lab Setup

### 3.1 CLI tools
- [ ] `kubectl`
- [ ] `kubectl` version compatibility
- [ ] `kubeconfig`
- [ ] Contexts
- [ ] Namespaces
- [ ] Shell completion
- [ ] `kubectx`
- [ ] `kubens`
- [ ] `stern`
- [ ] `k9s`
- [ ] `kubectl-neat`
- [ ] `kubectl-tree`
- [ ] `kubectl-debug`
- [ ] `crictl`
- [ ] `ctr`

### 3.2 Local clusters
- [ ] minikube
- [ ] kind
- [ ] k3d
- [ ] MicroK8s
- [ ] Docker Desktop Kubernetes
- [ ] Rancher Desktop
- [ ] Local registry
- [ ] Local ingress
- [ ] Local storage
- [ ] Multi-node local cluster
- [ ] Local CNI choice
- [ ] Cluster reset
- [ ] Cluster cleanup

### 3.3 Cluster installation options
- [ ] kubeadm
- [ ] Managed Kubernetes
- [ ] Kops
- [ ] Kubespray
- [ ] Talos Linux
- [ ] RKE2
- [ ] k3s
- [ ] Cluster API
- [ ] Bare metal installation
- [ ] Cloud installation
- [ ] Air-gapped installation

### 3.4 Development workflow
- [ ] Build container image
- [ ] Push image
- [ ] Load image into local cluster
- [ ] Apply manifests
- [ ] Port-forward
- [ ] View logs
- [ ] Exec into pod
- [ ] Describe resource
- [ ] Watch resource
- [ ] Debug failed pod
- [ ] Roll out deployment
- [ ] Roll back deployment

---

## 4. Kubernetes Architecture

### 4.1 Control plane components
- [ ] kube-apiserver
- [ ] etcd
- [ ] kube-scheduler
- [ ] kube-controller-manager
- [ ] cloud-controller-manager
- [ ] Admission chain
- [ ] Authentication chain
- [ ] Authorization chain
- [ ] API aggregation layer
- [ ] Metrics APIs
- [ ] Extension APIs

### 4.2 Node components
- [ ] kubelet
- [ ] kube-proxy
- [ ] Container runtime
- [ ] CRI
- [ ] CNI
- [ ] CSI node plugin
- [ ] Node local DNS
- [ ] Node problem detector
- [ ] Static pods
- [ ] Pod sandbox
- [ ] cgroups
- [ ] Linux namespaces

### 4.3 etcd
- [ ] Key-value store
- [ ] Raft consensus
- [ ] Quorum
- [ ] Snapshot
- [ ] Restore
- [ ] Compaction
- [ ] Defragmentation
- [ ] Encryption at rest
- [ ] Backup strategy
- [ ] Disaster recovery
- [ ] Performance tuning
- [ ] Certificate management

### 4.4 API request flow
- [ ] Client request
- [ ] Authentication
- [ ] Authorization
- [ ] Admission control
- [ ] Mutating admission
- [ ] Validating admission
- [ ] Object validation
- [ ] Storage in etcd
- [ ] Watch notification
- [ ] Controller reaction
- [ ] Scheduler decision
- [ ] Kubelet execution
- [ ] Status update

### 4.5 Scheduling flow
- [ ] Pending pod
- [ ] Scheduling queue
- [ ] Filtering
- [ ] Scoring
- [ ] Binding
- [ ] Preemption
- [ ] Scheduler profiles
- [ ] Scheduler plugins
- [ ] Node affinity
- [ ] Taints and tolerations
- [ ] Topology spread
- [ ] Resource fit
- [ ] Volume binding

### 4.6 Pod execution flow
- [ ] Pod assigned to node
- [ ] Kubelet observes pod
- [ ] Pull image
- [ ] Create pod sandbox
- [ ] Configure networking
- [ ] Mount volumes
- [ ] Run init containers
- [ ] Run app containers
- [ ] Start probes
- [ ] Report status
- [ ] Handle restarts
- [ ] Terminate pod

---

## 5. Kubernetes API Objects

### 5.1 Object metadata
- [ ] `apiVersion`
- [ ] `kind`
- [ ] `metadata.name`
- [ ] `metadata.namespace`
- [ ] `metadata.labels`
- [ ] `metadata.annotations`
- [ ] `metadata.uid`
- [ ] `metadata.resourceVersion`
- [ ] `metadata.generation`
- [ ] `metadata.ownerReferences`
- [ ] `metadata.finalizers`
- [ ] `metadata.managedFields`

### 5.2 Labels and selectors
- [ ] Label key
- [ ] Label value
- [ ] Equality-based selector
- [ ] Set-based selector
- [ ] Match labels
- [ ] Match expressions
- [ ] Controller selector
- [ ] Service selector
- [ ] NetworkPolicy selector
- [ ] Node selector
- [ ] Label taxonomy
- [ ] Label governance

### 5.3 Annotations
- [ ] Non-identifying metadata
- [ ] Tooling metadata
- [ ] Controller-specific metadata
- [ ] Ingress annotations
- [ ] Autoscaler annotations
- [ ] Deployment annotations
- [ ] Checksum annotations
- [ ] Last applied configuration
- [ ] Annotation size limits
- [ ] Annotation governance

### 5.4 Namespaces
- [ ] Namespace isolation
- [ ] Default namespace
- [ ] System namespaces
- [ ] Environment namespace
- [ ] Team namespace
- [ ] ResourceQuota per namespace
- [ ] LimitRange per namespace
- [ ] RBAC per namespace
- [ ] NetworkPolicy per namespace
- [ ] Namespace lifecycle
- [ ] Terminating namespace
- [ ] Finalizer cleanup

### 5.5 Object lifecycle
- [ ] Create
- [ ] Read
- [ ] Update
- [ ] Patch
- [ ] Delete
- [ ] Graceful deletion
- [ ] Cascading deletion
- [ ] Foreground deletion
- [ ] Background deletion
- [ ] Orphan deletion
- [ ] Finalization
- [ ] Garbage collection

### 5.6 API operations
- [ ] `kubectl get`
- [ ] `kubectl describe`
- [ ] `kubectl create`
- [ ] `kubectl apply`
- [ ] `kubectl replace`
- [ ] `kubectl patch`
- [ ] `kubectl delete`
- [ ] `kubectl explain`
- [ ] `kubectl diff`
- [ ] `kubectl wait`
- [ ] `kubectl rollout`
- [ ] `kubectl scale`
- [ ] `kubectl label`
- [ ] `kubectl annotate`

---

## 6. Pods

### 6.1 Pod basics
- [ ] Pod definition
- [ ] Pod lifecycle
- [ ] Pod phase
- [ ] Pod conditions
- [ ] Pod IP
- [ ] Pod sandbox
- [ ] Multi-container pod
- [ ] Shared network namespace
- [ ] Shared storage volumes
- [ ] Shared process namespace
- [ ] Pod termination
- [ ] Pod status
- [ ] Pod events

### 6.2 Containers in pods
- [ ] App container
- [ ] Init container
- [ ] Sidecar container
- [ ] Ephemeral container
- [ ] Container image
- [ ] Image pull policy
- [ ] Command
- [ ] Args
- [ ] Environment variables
- [ ] Working directory
- [ ] Container ports
- [ ] Container lifecycle
- [ ] Container status
- [ ] Container restart count

### 6.3 Pod lifecycle
- [ ] Pending
- [ ] Running
- [ ] Succeeded
- [ ] Failed
- [ ] Unknown
- [ ] ContainerCreating
- [ ] CrashLoopBackOff
- [ ] ImagePullBackOff
- [ ] ErrImagePull
- [ ] Terminating
- [ ] Completed
- [ ] Evicted

### 6.4 Probes
- [ ] Liveness probe
- [ ] Readiness probe
- [ ] Startup probe
- [ ] HTTP probe
- [ ] TCP probe
- [ ] Exec probe
- [ ] gRPC probe
- [ ] Initial delay
- [ ] Period seconds
- [ ] Timeout seconds
- [ ] Success threshold
- [ ] Failure threshold
- [ ] Probe anti-patterns
- [ ] Probe tuning

### 6.5 Lifecycle hooks
- [ ] PostStart
- [ ] PreStop
- [ ] Grace period
- [ ] SIGTERM handling
- [ ] SIGKILL handling
- [ ] Graceful shutdown
- [ ] Shutdown endpoint
- [ ] Connection draining
- [ ] PreStop sleep
- [ ] Termination message

### 6.6 Pod configuration
- [ ] Environment variables
- [ ] ConfigMap reference
- [ ] Secret reference
- [ ] Downward API
- [ ] Projected volumes
- [ ] Resource requests
- [ ] Resource limits
- [ ] Security context
- [ ] Service account
- [ ] Image pull secrets
- [ ] DNS policy
- [ ] Host aliases

### 6.7 Pod networking
- [ ] Pod IP
- [ ] Pod-to-pod communication
- [ ] Pod-to-service communication
- [ ] Container port
- [ ] Host port
- [ ] Host network
- [ ] DNS policy
- [ ] DNS config
- [ ] NetworkPolicy selection
- [ ] CNI behavior

### 6.8 Pod troubleshooting
- [ ] Inspect pod status
- [ ] Inspect pod events
- [ ] Inspect container logs
- [ ] Previous container logs
- [ ] Exec into container
- [ ] Debug with ephemeral container
- [ ] Check image pull
- [ ] Check probes
- [ ] Check resources
- [ ] Check node conditions
- [ ] Check volumes
- [ ] Check service account
- [ ] Check network policy

---

## 7. Workloads

### 7.1 ReplicaSet
- [ ] ReplicaSet purpose
- [ ] Pod selector
- [ ] Replica count
- [ ] Template
- [ ] Ownership
- [ ] Scaling
- [ ] Adoption
- [ ] Orphan pods
- [ ] ReplicaSet under Deployment

### 7.2 Deployment
- [ ] Deployment purpose
- [ ] Desired replicas
- [ ] Pod template
- [ ] ReplicaSet management
- [ ] Rolling update
- [ ] Rollback
- [ ] Revision history
- [ ] Strategy
- [ ] Max surge
- [ ] Max unavailable
- [ ] Progress deadline
- [ ] Paused rollout
- [ ] Deployment conditions
- [ ] Deployment troubleshooting

### 7.3 StatefulSet
- [ ] Stable identity
- [ ] Stable network identity
- [ ] Stable storage
- [ ] Ordered deployment
- [ ] Ordered termination
- [ ] Headless service
- [ ] VolumeClaimTemplates
- [ ] Pod ordinal
- [ ] PersistentVolumeClaim per replica
- [ ] Rolling update
- [ ] Partitioned update
- [ ] OnDelete strategy
- [ ] Stateful workload design

### 7.4 DaemonSet
- [ ] Node-level workload
- [ ] One pod per node
- [ ] Log agent
- [ ] Monitoring agent
- [ ] CNI plugin
- [ ] CSI node plugin
- [ ] Node selector
- [ ] Tolerations
- [ ] Rolling update
- [ ] Surge update
- [ ] System daemon design

### 7.5 Job
- [ ] One-off task
- [ ] Completion
- [ ] Parallelism
- [ ] Backoff limit
- [ ] Active deadline
- [ ] Restart policy
- [ ] Indexed Job
- [ ] Non-indexed Job
- [ ] Pod failure policy
- [ ] Pod replacement policy
- [ ] Cleanup
- [ ] TTL controller
- [ ] Batch workload design

### 7.6 CronJob
- [ ] Schedule
- [ ] Cron expression
- [ ] Time zone
- [ ] Concurrency policy
- [ ] Starting deadline
- [ ] Successful job history
- [ ] Failed job history
- [ ] Suspend
- [ ] Missed schedule
- [ ] Idempotent scheduled job
- [ ] Distributed scheduled job

### 7.7 Workload selection
- [ ] Deployment for stateless apps
- [ ] StatefulSet for stateful apps
- [ ] DaemonSet for node agents
- [ ] Job for finite tasks
- [ ] CronJob for scheduled tasks
- [ ] Bare Pod anti-pattern
- [ ] Static Pod use case
- [ ] Operator-managed workloads
- [ ] Custom workload controllers

---

## 8. Services and Service Discovery

### 8.1 Service basics
- [ ] Service abstraction
- [ ] Stable virtual IP
- [ ] Label selector
- [ ] Endpoint discovery
- [ ] Port
- [ ] Target port
- [ ] Protocol
- [ ] Session affinity
- [ ] Internal traffic policy
- [ ] External traffic policy

### 8.2 Service types
- [ ] ClusterIP
- [ ] NodePort
- [ ] LoadBalancer
- [ ] ExternalName
- [ ] Headless Service
- [ ] Service without selector
- [ ] Multi-port Service
- [ ] External IPs
- [ ] LoadBalancerClass

### 8.3 Endpoint management
- [ ] Endpoints
- [ ] EndpointSlice
- [ ] EndpointSlice controller
- [ ] Ready endpoints
- [ ] Not-ready endpoints
- [ ] Topology-aware routing
- [ ] Endpoint scale
- [ ] Custom endpoints
- [ ] Service discovery without selectors

### 8.4 DNS
- [ ] CoreDNS
- [ ] Cluster DNS
- [ ] Service DNS record
- [ ] Pod DNS record
- [ ] Headless service DNS
- [ ] Search domains
- [ ] DNS policy
- [ ] DNS config
- [ ] ExternalName DNS
- [ ] DNS troubleshooting
- [ ] NodeLocal DNSCache

### 8.5 kube-proxy
- [ ] Service proxying
- [ ] iptables mode
- [ ] IPVS mode
- [ ] nftables mode
- [ ] Userspace mode legacy
- [ ] Connection tracking
- [ ] NodePort behavior
- [ ] External traffic policy
- [ ] Load balancing behavior
- [ ] kube-proxy replacement

---

## 9. Ingress and Gateway

### 9.1 Ingress
- [ ] Ingress resource
- [ ] Ingress controller
- [ ] Host-based routing
- [ ] Path-based routing
- [ ] TLS termination
- [ ] IngressClass
- [ ] Default backend
- [ ] Rewrite rules
- [ ] Annotations
- [ ] NGINX Ingress
- [ ] Traefik Ingress
- [ ] Cloud ingress controller
- [ ] Ingress limitations

### 9.2 Gateway API
- [ ] GatewayClass
- [ ] Gateway
- [ ] HTTPRoute
- [ ] GRPCRoute
- [ ] TCPRoute
- [ ] TLSRoute
- [ ] Listener
- [ ] Route binding
- [ ] Parent reference
- [ ] Backend reference
- [ ] Cross-namespace reference
- [ ] Policy attachment
- [ ] Traffic splitting
- [ ] Request header modification
- [ ] Response header modification
- [ ] Standard channel
- [ ] Experimental channel

### 9.3 External traffic design
- [ ] Public ingress
- [ ] Private ingress
- [ ] Internal load balancer
- [ ] External load balancer
- [ ] TLS certificate management
- [ ] DNS records
- [ ] WAF integration
- [ ] CDN integration
- [ ] Global load balancing
- [ ] Multi-cluster ingress

### 9.4 Certificate management
- [ ] TLS secret
- [ ] cert-manager
- [ ] Issuer
- [ ] ClusterIssuer
- [ ] Certificate
- [ ] ACME
- [ ] Let's Encrypt
- [ ] DNS-01 challenge
- [ ] HTTP-01 challenge
- [ ] Certificate renewal
- [ ] Private CA
- [ ] mTLS

---

## 10. Configuration and Secrets

### 10.1 ConfigMap
- [ ] Literal key-value
- [ ] File-based ConfigMap
- [ ] YAML-based ConfigMap
- [ ] Environment variable injection
- [ ] Volume mount
- [ ] SubPath mount
- [ ] Binary data
- [ ] Immutable ConfigMap
- [ ] Config rollout strategy
- [ ] Checksum annotation
- [ ] Reloading config

### 10.2 Secret
- [ ] Secret types
- [ ] Opaque Secret
- [ ] TLS Secret
- [ ] Docker config Secret
- [ ] Service account token Secret
- [ ] Basic auth Secret
- [ ] SSH auth Secret
- [ ] Environment variable injection
- [ ] Volume mount
- [ ] Immutable Secret
- [ ] Secret size limits
- [ ] Secret rotation
- [ ] Secret encryption at rest

### 10.3 Secret management patterns
- [ ] Native Kubernetes Secret
- [ ] Sealed Secrets
- [ ] External Secrets Operator
- [ ] Secrets Store CSI Driver
- [ ] Vault integration
- [ ] Cloud secret manager integration
- [ ] GitOps-safe secrets
- [ ] Envelope encryption
- [ ] Key Management Service
- [ ] Secret sync
- [ ] Secret reload
- [ ] Secret audit

### 10.4 Downward API
- [ ] Pod name injection
- [ ] Pod namespace injection
- [ ] Pod IP injection
- [ ] Node name injection
- [ ] Labels injection
- [ ] Annotations injection
- [ ] Resource requests injection
- [ ] Resource limits injection
- [ ] Environment variable usage
- [ ] Volume file usage

### 10.5 Configuration design
- [ ] Build-time config
- [ ] Runtime config
- [ ] Environment-specific config
- [ ] Secret vs ConfigMap
- [ ] Immutable config
- [ ] Dynamic config
- [ ] Config versioning
- [ ] Config validation
- [ ] Config drift detection
- [ ] Config ownership

---

## 11. Storage

### 11.1 Volume basics
- [ ] Volume
- [ ] Volume mount
- [ ] Read-only mount
- [ ] SubPath
- [ ] EmptyDir
- [ ] ConfigMap volume
- [ ] Secret volume
- [ ] DownwardAPI volume
- [ ] Projected volume
- [ ] HostPath
- [ ] Local volume
- [ ] CSI volume

### 11.2 Persistent storage
- [ ] PersistentVolume
- [ ] PersistentVolumeClaim
- [ ] StorageClass
- [ ] Dynamic provisioning
- [ ] Static provisioning
- [ ] Access modes
- [ ] ReadWriteOnce
- [ ] ReadOnlyMany
- [ ] ReadWriteMany
- [ ] ReadWriteOncePod
- [ ] Reclaim policy
- [ ] Retain
- [ ] Delete
- [ ] Recycle legacy
- [ ] Volume binding mode
- [ ] Storage capacity tracking

### 11.3 CSI
- [ ] CSI driver
- [ ] CSI controller plugin
- [ ] CSI node plugin
- [ ] CSIDriver object
- [ ] CSINode object
- [ ] CSIStorageCapacity
- [ ] External provisioner
- [ ] External attacher
- [ ] External resizer
- [ ] External snapshotter
- [ ] Node publish
- [ ] Controller publish
- [ ] Volume expansion

### 11.4 Snapshots and backups
- [ ] VolumeSnapshot
- [ ] VolumeSnapshotClass
- [ ] VolumeSnapshotContent
- [ ] Crash-consistent snapshot
- [ ] Application-consistent backup
- [ ] Volume group snapshot
- [ ] Velero
- [ ] Restic
- [ ] Backup schedule
- [ ] Restore workflow
- [ ] Disaster recovery test

### 11.5 Stateful workload storage
- [ ] StatefulSet volume claim template
- [ ] Per-replica PVC
- [ ] Headless service
- [ ] Stable pod identity
- [ ] Database storage
- [ ] Storage performance
- [ ] IOPS
- [ ] Throughput
- [ ] Latency
- [ ] Storage class selection
- [ ] Data migration
- [ ] Storage expansion
- [ ] Expansion failure recovery

### 11.6 Storage troubleshooting
- [ ] Pending PVC
- [ ] Bound PVC
- [ ] Lost PV
- [ ] Mount failure
- [ ] Attach failure
- [ ] Permission denied
- [ ] Read-only filesystem
- [ ] Volume expansion failure
- [ ] StorageClass mismatch
- [ ] Node affinity conflict
- [ ] CSI driver logs
- [ ] Kubelet volume logs

---

## 12. Scheduling, Placement, and Resources

### 12.1 Node selection
- [ ] Node labels
- [ ] Node selector
- [ ] Node affinity
- [ ] Required node affinity
- [ ] Preferred node affinity
- [ ] Node name
- [ ] Node pools
- [ ] Instance types
- [ ] Architecture selection
- [ ] OS selection
- [ ] GPU node selection

### 12.2 Pod affinity and anti-affinity
- [ ] Pod affinity
- [ ] Pod anti-affinity
- [ ] Required affinity
- [ ] Preferred affinity
- [ ] Topology key
- [ ] Co-location
- [ ] Anti-colocation
- [ ] Zone-aware placement
- [ ] Rack-aware placement
- [ ] Performance implications

### 12.3 Taints and tolerations
- [ ] Node taint
- [ ] Pod toleration
- [ ] NoSchedule
- [ ] PreferNoSchedule
- [ ] NoExecute
- [ ] Toleration seconds
- [ ] Dedicated nodes
- [ ] Special hardware nodes
- [ ] Control-plane node taints
- [ ] Node condition taints

### 12.4 Topology spread
- [ ] TopologySpreadConstraints
- [ ] Max skew
- [ ] Topology key
- [ ] When unsatisfiable
- [ ] Label selector
- [ ] Zone spreading
- [ ] Node spreading
- [ ] High availability placement
- [ ] Cost-aware placement
- [ ] Constraint conflicts

### 12.5 Resource requests and limits
- [ ] CPU request
- [ ] CPU limit
- [ ] Memory request
- [ ] Memory limit
- [ ] Ephemeral storage request
- [ ] Ephemeral storage limit
- [ ] Extended resources
- [ ] Pod-level resources
- [ ] Resource overcommitment
- [ ] Resource defaulting
- [ ] Resource tuning
- [ ] Request right-sizing
- [ ] Limit anti-patterns

### 12.6 Quality of Service
- [ ] Guaranteed QoS
- [ ] Burstable QoS
- [ ] BestEffort QoS
- [ ] QoS classification
- [ ] Eviction order
- [ ] Memory pressure
- [ ] Disk pressure
- [ ] PID pressure
- [ ] Node allocatable
- [ ] System reserved
- [ ] Kube reserved

### 12.7 Priority and preemption
- [ ] PriorityClass
- [ ] Pod priority
- [ ] Preemption
- [ ] Non-preempting PriorityClass
- [ ] Critical pods
- [ ] System-cluster-critical
- [ ] System-node-critical
- [ ] Preemption victims
- [ ] Priority governance

### 12.8 Eviction
- [ ] Node pressure eviction
- [ ] Memory pressure
- [ ] Disk pressure
- [ ] PID pressure
- [ ] Hard eviction threshold
- [ ] Soft eviction threshold
- [ ] Grace period
- [ ] Pod eviction
- [ ] QoS and eviction
- [ ] Eviction troubleshooting

### 12.9 Advanced resource management
- [ ] CPU Manager
- [ ] Memory Manager
- [ ] Topology Manager
- [ ] Device Plugin
- [ ] Dynamic Resource Allocation
- [ ] GPU scheduling
- [ ] NUMA awareness
- [ ] HugePages
- [ ] RuntimeClass
- [ ] Pod overhead
- [ ] In-place pod resize
- [ ] Vertical resource scaling

---

## 13. Autoscaling

### 13.1 Horizontal Pod Autoscaler
- [ ] HPA object
- [ ] CPU-based scaling
- [ ] Memory-based scaling
- [ ] Custom metrics scaling
- [ ] External metrics scaling
- [ ] Metrics Server
- [ ] Stabilization window
- [ ] Scale-up policy
- [ ] Scale-down policy
- [ ] Min replicas
- [ ] Max replicas
- [ ] Target utilization
- [ ] HPA troubleshooting

### 13.2 Vertical Pod Autoscaler
- [ ] VPA recommender
- [ ] VPA updater
- [ ] VPA admission controller
- [ ] Recommendation mode
- [ ] Auto mode
- [ ] Initial mode
- [ ] Off mode
- [ ] Resource recommendation
- [ ] Eviction behavior
- [ ] VPA and HPA interaction
- [ ] Production trade-offs

### 13.3 Cluster Autoscaler
- [ ] Node group autoscaling
- [ ] Scale up
- [ ] Scale down
- [ ] Unschedulable pods
- [ ] Node utilization
- [ ] Expander strategy
- [ ] Pod disruption constraints
- [ ] Cloud provider integration
- [ ] Overprovisioning
- [ ] Scale-down delay
- [ ] Troubleshooting scale failures

### 13.4 Karpenter
- [ ] Provisioner
- [ ] NodePool
- [ ] NodeClass
- [ ] Instance selection
- [ ] Consolidation
- [ ] Drift
- [ ] Expiration
- [ ] Disruption budget
- [ ] Spot instances
- [ ] On-demand instances
- [ ] Cost optimization
- [ ] Scheduling constraints

### 13.5 Event-driven autoscaling
- [ ] KEDA
- [ ] ScaledObject
- [ ] Trigger
- [ ] Kafka scaler
- [ ] RabbitMQ scaler
- [ ] Prometheus scaler
- [ ] Cron scaler
- [ ] Scale to zero
- [ ] Cooldown period
- [ ] Polling interval
- [ ] Authentication trigger
- [ ] External metrics integration

---

## 14. Security

### 14.1 Authentication
- [ ] Client certificates
- [ ] Bearer tokens
- [ ] Service account tokens
- [ ] Bootstrap tokens
- [ ] OIDC
- [ ] Webhook token authentication
- [ ] Authentication proxy
- [ ] Anonymous requests
- [ ] User identity
- [ ] Group identity
- [ ] Impersonation

### 14.2 Authorization
- [ ] RBAC
- [ ] Role
- [ ] ClusterRole
- [ ] RoleBinding
- [ ] ClusterRoleBinding
- [ ] Verb
- [ ] Resource
- [ ] Resource name
- [ ] API group
- [ ] Non-resource URL
- [ ] Aggregated ClusterRole
- [ ] Least privilege
- [ ] RBAC audit
- [ ] `kubectl auth can-i`

### 14.3 Service accounts
- [ ] Default service account
- [ ] Custom service account
- [ ] Service account token projection
- [ ] Token expiration
- [ ] Audience
- [ ] Image pull secret
- [ ] Automount token
- [ ] Workload identity
- [ ] Cloud IAM integration
- [ ] Service account hardening

### 14.4 Pod security
- [ ] Pod Security Admission
- [ ] Pod Security Standards
- [ ] Privileged profile
- [ ] Baseline profile
- [ ] Restricted profile
- [ ] Namespace labels
- [ ] Enforce mode
- [ ] Audit mode
- [ ] Warn mode
- [ ] SecurityContext
- [ ] PodSecurityContext
- [ ] RunAsNonRoot
- [ ] RunAsUser
- [ ] RunAsGroup
- [ ] fsGroup
- [ ] Privileged container
- [ ] AllowPrivilegeEscalation
- [ ] ReadOnlyRootFilesystem
- [ ] Capabilities
- [ ] Seccomp
- [ ] AppArmor
- [ ] SELinux

### 14.5 Admission control
- [ ] Admission controller
- [ ] Mutating admission
- [ ] Validating admission
- [ ] MutatingAdmissionWebhook
- [ ] ValidatingAdmissionWebhook
- [ ] ValidatingAdmissionPolicy
- [ ] CEL validation
- [ ] Policy enforcement
- [ ] Policy audit
- [ ] Failure policy
- [ ] Match policy
- [ ] Namespace selector
- [ ] Object selector

### 14.6 Policy engines
- [ ] OPA Gatekeeper
- [ ] ConstraintTemplate
- [ ] Constraint
- [ ] Rego
- [ ] Kyverno
- [ ] ClusterPolicy
- [ ] Policy
- [ ] Mutate policy
- [ ] Validate policy
- [ ] Generate policy
- [ ] Image verification
- [ ] Policy exception
- [ ] Policy reports

### 14.7 Network security
- [ ] NetworkPolicy
- [ ] Default deny ingress
- [ ] Default deny egress
- [ ] Pod selector
- [ ] Namespace selector
- [ ] IPBlock
- [ ] Egress control
- [ ] DNS egress
- [ ] Ingress allow-list
- [ ] CNI support
- [ ] Service mesh mTLS
- [ ] Egress gateway

### 14.8 Secret security
- [ ] Encryption at rest
- [ ] KMS provider
- [ ] Secret RBAC
- [ ] Secret rotation
- [ ] Secret externalization
- [ ] Avoid env var secrets
- [ ] Secret volume permissions
- [ ] Audit secret access
- [ ] GitOps secret encryption
- [ ] Cloud secret manager

### 14.9 Supply chain security
- [ ] Image provenance
- [ ] SBOM
- [ ] Image scanning
- [ ] Vulnerability scanning
- [ ] Image signing
- [ ] Cosign
- [ ] Sigstore
- [ ] SLSA
- [ ] Admission image verification
- [ ] Trusted registry
- [ ] Tag immutability
- [ ] Digest pinning
- [ ] Base image governance

### 14.10 Audit and compliance
- [ ] Audit policy
- [ ] Audit backend
- [ ] Request audit
- [ ] Response audit
- [ ] Metadata audit
- [ ] Sensitive data redaction
- [ ] Compliance evidence
- [ ] CIS Benchmark
- [ ] NSA/CISA hardening guide
- [ ] Runtime security monitoring
- [ ] Falco
- [ ] Tetragon

---

## 15. Networking

### 15.1 Cluster networking model
- [ ] Pod-to-pod networking
- [ ] Pod-to-service networking
- [ ] Node-to-pod networking
- [ ] External-to-service networking
- [ ] Flat network model
- [ ] No NAT between pods
- [ ] Pod CIDR
- [ ] Service CIDR
- [ ] Node CIDR
- [ ] Cluster DNS

### 15.2 CNI
- [ ] CNI specification
- [ ] CNI plugin
- [ ] IPAM
- [ ] Bridge plugin
- [ ] Host-local IPAM
- [ ] Calico
- [ ] Cilium
- [ ] Flannel
- [ ] Weave Net
- [ ] Antrea
- [ ] Cloud CNI
- [ ] Overlay mode
- [ ] Native routing mode

### 15.3 NetworkPolicy
- [ ] Ingress policy
- [ ] Egress policy
- [ ] Policy types
- [ ] Pod selector
- [ ] Namespace selector
- [ ] IPBlock
- [ ] Port selection
- [ ] Protocol selection
- [ ] Default deny
- [ ] Allow DNS
- [ ] Policy testing
- [ ] Policy visualization

### 15.4 Advanced networking
- [ ] eBPF
- [ ] kube-proxy replacement
- [ ] Direct server return
- [ ] BGP
- [ ] LoadBalancer IPAM
- [ ] L2 announcements
- [ ] Egress gateway
- [ ] Multus
- [ ] Multiple networks
- [ ] SR-IOV
- [ ] Dual-stack IPv4/IPv6
- [ ] Topology-aware routing

### 15.5 Service mesh
- [ ] Sidecar proxy
- [ ] Data plane
- [ ] Control plane
- [ ] mTLS
- [ ] Traffic splitting
- [ ] Retries
- [ ] Timeouts
- [ ] Circuit breaking
- [ ] Fault injection
- [ ] Canary routing
- [ ] Observability
- [ ] Istio
- [ ] Linkerd
- [ ] Consul service mesh
- [ ] Ambient mesh

### 15.6 Network troubleshooting
- [ ] DNS resolution failure
- [ ] Service unreachable
- [ ] Endpoint missing
- [ ] NetworkPolicy blocking
- [ ] CNI failure
- [ ] kube-proxy issue
- [ ] Conntrack exhaustion
- [ ] MTU mismatch
- [ ] TLS handshake failure
- [ ] Packet capture
- [ ] `tcpdump`
- [ ] `netshoot`
- [ ] `nslookup`
- [ ] `dig`
- [ ] `curl`

---

## 16. Observability

### 16.1 Logs
- [ ] Container stdout
- [ ] Container stderr
- [ ] `kubectl logs`
- [ ] Previous logs
- [ ] Multi-container logs
- [ ] Log aggregation
- [ ] Fluent Bit
- [ ] Fluentd
- [ ] Vector
- [ ] Loki
- [ ] Elasticsearch
- [ ] OpenSearch
- [ ] Log retention
- [ ] Log parsing
- [ ] Structured logs
- [ ] Correlation ID

### 16.2 Events
- [ ] Kubernetes events
- [ ] Event reason
- [ ] Event message
- [ ] Event source
- [ ] Event type
- [ ] Event TTL
- [ ] Event filtering
- [ ] Event export
- [ ] Event-driven alerting
- [ ] Event troubleshooting

### 16.3 Metrics
- [ ] Metrics Server
- [ ] Resource metrics API
- [ ] Custom metrics API
- [ ] External metrics API
- [ ] Prometheus
- [ ] kube-state-metrics
- [ ] Node Exporter
- [ ] cAdvisor
- [ ] Control plane metrics
- [ ] Application metrics
- [ ] RED metrics
- [ ] USE metrics
- [ ] SLI
- [ ] SLO

### 16.4 Dashboards
- [ ] Grafana
- [ ] Kubernetes cluster dashboard
- [ ] Node dashboard
- [ ] Namespace dashboard
- [ ] Workload dashboard
- [ ] Pod dashboard
- [ ] Network dashboard
- [ ] Storage dashboard
- [ ] Cost dashboard
- [ ] SLO dashboard

### 16.5 Tracing
- [ ] Distributed tracing
- [ ] Trace ID
- [ ] Span
- [ ] Parent span
- [ ] OpenTelemetry
- [ ] Collector
- [ ] Instrumentation
- [ ] Sampling
- [ ] Jaeger
- [ ] Tempo
- [ ] Zipkin
- [ ] Trace-log correlation
- [ ] Trace-metric correlation

### 16.6 Alerting
- [ ] Alert rule
- [ ] Prometheus alert
- [ ] Alertmanager
- [ ] Severity
- [ ] Routing
- [ ] Silencing
- [ ] Inhibition
- [ ] Notification channel
- [ ] Runbook link
- [ ] SLO alerting
- [ ] Burn-rate alerting
- [ ] Alert fatigue reduction

### 16.7 Diagnostics
- [ ] Pod logs
- [ ] Node logs
- [ ] Kubelet logs
- [ ] Control plane logs
- [ ] API server audit logs
- [ ] Events
- [ ] Metrics
- [ ] Profiles
- [ ] Heap dump
- [ ] Thread dump
- [ ] Core dump
- [ ] Ephemeral containers
- [ ] Debug node

---

## 17. Cluster Operations

### 17.1 Cluster lifecycle
- [ ] Cluster creation
- [ ] Cluster bootstrap
- [ ] Cluster configuration
- [ ] Node join
- [ ] Node removal
- [ ] Cluster upgrade
- [ ] Patch upgrade
- [ ] Minor upgrade
- [ ] Version skew
- [ ] Cluster decommission
- [ ] Cluster backup
- [ ] Cluster restore

### 17.2 Node operations
- [ ] Node registration
- [ ] Node labels
- [ ] Node taints
- [ ] Node conditions
- [ ] Cordon
- [ ] Uncordon
- [ ] Drain
- [ ] Node maintenance
- [ ] Node replacement
- [ ] Node reboot
- [ ] Node pressure handling
- [ ] Node problem detection

### 17.3 Upgrade management
- [ ] Release notes review
- [ ] API deprecation review
- [ ] Add-on compatibility
- [ ] CNI compatibility
- [ ] CSI compatibility
- [ ] Ingress compatibility
- [ ] Admission webhook compatibility
- [ ] Control plane upgrade
- [ ] Node upgrade
- [ ] Workload validation
- [ ] Rollback planning
- [ ] Upgrade testing
- [ ] Conformance testing

### 17.4 Backup and disaster recovery
- [ ] etcd snapshot
- [ ] etcd restore
- [ ] Manifest backup
- [ ] PV backup
- [ ] Application backup
- [ ] Velero backup
- [ ] Velero restore
- [ ] Cross-cluster restore
- [ ] DR runbook
- [ ] RPO
- [ ] RTO
- [ ] DR drill

### 17.5 High availability
- [ ] HA control plane
- [ ] Multiple API servers
- [ ] etcd quorum
- [ ] Control plane load balancer
- [ ] Multi-zone nodes
- [ ] Pod anti-affinity
- [ ] Topology spread
- [ ] PDB
- [ ] Redundant ingress
- [ ] Redundant storage
- [ ] Cluster autoscaler HA
- [ ] DNS HA

### 17.6 Capacity planning
- [ ] CPU capacity
- [ ] Memory capacity
- [ ] Pod capacity
- [ ] Node allocatable
- [ ] IP capacity
- [ ] Storage capacity
- [ ] Control plane capacity
- [ ] API server QPS
- [ ] etcd performance
- [ ] Autoscaling capacity
- [ ] Buffer capacity
- [ ] Cost capacity

### 17.7 Cost management
- [ ] Requests right-sizing
- [ ] Limit review
- [ ] Idle resource detection
- [ ] Namespace cost allocation
- [ ] Team cost allocation
- [ ] Spot nodes
- [ ] Reserved instances
- [ ] Autoscaling optimization
- [ ] Storage cost
- [ ] Network egress cost
- [ ] Kubecost
- [ ] OpenCost

---

## 18. Workload Reliability

### 18.1 Rollouts
- [ ] Rolling update
- [ ] Rollback
- [ ] Deployment revision
- [ ] Pause rollout
- [ ] Resume rollout
- [ ] Max surge
- [ ] Max unavailable
- [ ] Progress deadline
- [ ] Readiness gate
- [ ] Canary deployment
- [ ] Blue-green deployment
- [ ] Progressive delivery

### 18.2 Availability
- [ ] Replica count
- [ ] PodDisruptionBudget
- [ ] Readiness probe
- [ ] Liveness probe
- [ ] Startup probe
- [ ] Graceful shutdown
- [ ] Anti-affinity
- [ ] Topology spread
- [ ] Multi-zone deployment
- [ ] Service load balancing
- [ ] Failure domain isolation

### 18.3 Resilience patterns
- [ ] Retry
- [ ] Timeout
- [ ] Circuit breaker
- [ ] Bulkhead
- [ ] Rate limiting
- [ ] Backpressure
- [ ] Queue-based load leveling
- [ ] Idempotency
- [ ] Leader election
- [ ] Lease object
- [ ] Fencing token
- [ ] Graceful degradation

### 18.4 Application lifecycle integration
- [ ] SIGTERM handling
- [ ] Shutdown timeout
- [ ] Connection draining
- [ ] PreStop hook
- [ ] Readiness fail-before-shutdown
- [ ] Database migration strategy
- [ ] Schema compatibility
- [ ] Feature flags
- [ ] Zero-downtime deployment
- [ ] Stateful workload rollout

### 18.5 Failure scenarios
- [ ] Pod crash
- [ ] Node failure
- [ ] Zone failure
- [ ] DNS failure
- [ ] API server failure
- [ ] etcd failure
- [ ] Storage failure
- [ ] Image registry failure
- [ ] Network partition
- [ ] Certificate expiry
- [ ] Secret rotation failure
- [ ] Config rollout failure

---

## 19. Packaging and Deployment

### 19.1 Raw manifests
- [ ] YAML manifest
- [ ] Multi-document YAML
- [ ] Namespace manifest
- [ ] Deployment manifest
- [ ] Service manifest
- [ ] ConfigMap manifest
- [ ] Secret manifest
- [ ] Ingress manifest
- [ ] Kustomization manifest
- [ ] Manifest validation
- [ ] Manifest linting

### 19.2 Kustomize
- [ ] Base
- [ ] Overlay
- [ ] Resource
- [ ] Patch
- [ ] Strategic merge patch
- [ ] JSON 6902 patch
- [ ] ConfigMap generator
- [ ] Secret generator
- [ ] Name prefix
- [ ] Name suffix
- [ ] Common labels
- [ ] Common annotations
- [ ] Image transformer
- [ ] Replacement
- [ ] Components

### 19.3 Helm
- [ ] Chart
- [ ] Template
- [ ] Values
- [ ] Release
- [ ] Repository
- [ ] Dependency
- [ ] Helper template
- [ ] Named template
- [ ] Built-in objects
- [ ] Functions
- [ ] Pipelines
- [ ] Hooks
- [ ] Tests
- [ ] Chart versioning
- [ ] App versioning
- [ ] Upgrade
- [ ] Rollback
- [ ] Helmfile

### 19.4 GitOps
- [ ] Git as source of truth
- [ ] Pull-based deployment
- [ ] Reconciliation
- [ ] Drift detection
- [ ] Sync policy
- [ ] Auto-sync
- [ ] Manual sync
- [ ] Prune
- [ ] Self-heal
- [ ] Promotion
- [ ] Environment repository
- [ ] Application repository
- [ ] Argo CD
- [ ] Flux
- [ ] Progressive sync

### 19.5 CI/CD
- [ ] Build image
- [ ] Test image
- [ ] Scan image
- [ ] Sign image
- [ ] Push image
- [ ] Generate manifests
- [ ] Validate manifests
- [ ] Deploy to dev
- [ ] Deploy to staging
- [ ] Deploy to production
- [ ] Smoke test
- [ ] Rollback
- [ ] Release tagging
- [ ] Deployment approval

### 19.6 Progressive delivery
- [ ] Argo Rollouts
- [ ] Flagger
- [ ] Canary
- [ ] Blue-green
- [ ] Traffic shifting
- [ ] Metric analysis
- [ ] Automated rollback
- [ ] Manual promotion
- [ ] Experiment
- [ ] A/B testing
- [ ] Service mesh integration
- [ ] Gateway integration

---

## 20. Extensibility

### 20.1 Custom Resource Definitions
- [ ] CRD
- [ ] Custom Resource
- [ ] API group
- [ ] Version
- [ ] Kind
- [ ] Scope
- [ ] OpenAPI schema
- [ ] Validation
- [ ] Defaulting
- [ ] Conversion
- [ ] Status subresource
- [ ] Scale subresource
- [ ] Additional printer columns
- [ ] Categories
- [ ] Deprecation warning

### 20.2 Controllers and Operators
- [ ] Controller pattern
- [ ] Operator pattern
- [ ] Reconciliation loop
- [ ] Informer
- [ ] Cache
- [ ] Work queue
- [ ] Finalizer
- [ ] Owner reference
- [ ] Status management
- [ ] Idempotency
- [ ] Retry
- [ ] Leader election
- [ ] Operator SDK
- [ ] Kubebuilder
- [ ] Controller-runtime

### 20.3 Admission webhooks
- [ ] Mutating webhook
- [ ] Validating webhook
- [ ] AdmissionReview
- [ ] TLS certificate
- [ ] Webhook service
- [ ] Failure policy
- [ ] Timeout
- [ ] Side effects
- [ ] Namespace selector
- [ ] Object selector
- [ ] Dry-run support
- [ ] Version matching

### 20.4 API aggregation
- [ ] Aggregated API server
- [ ] APIService
- [ ] Extension API server
- [ ] Authentication delegation
- [ ] Authorization delegation
- [ ] Discovery
- [ ] Metrics API
- [ ] Custom metrics API
- [ ] External metrics API

### 20.5 Plugins and extensions
- [ ] kubectl plugin
- [ ] Krew
- [ ] Scheduler plugin
- [ ] CNI plugin
- [ ] CSI driver
- [ ] Device plugin
- [ ] RuntimeClass handler
- [ ] Cloud Controller Manager
- [ ] External controller
- [ ] External provisioner
- [ ] External DNS controller

---

## 21. Managed Kubernetes

### 21.1 Amazon EKS
- [ ] EKS cluster
- [ ] Managed node group
- [ ] Fargate profile
- [ ] IRSA
- [ ] EKS Pod Identity
- [ ] VPC CNI
- [ ] AWS Load Balancer Controller
- [ ] EBS CSI Driver
- [ ] EFS CSI Driver
- [ ] Cluster Autoscaler
- [ ] Karpenter
- [ ] CloudWatch integration
- [ ] Private cluster
- [ ] EKS upgrade

### 21.2 Google GKE
- [ ] GKE Standard
- [ ] GKE Autopilot
- [ ] Workload Identity
- [ ] Node pool
- [ ] GCE Persistent Disk CSI
- [ ] Filestore CSI
- [ ] Cloud Load Balancing
- [ ] Cloud DNS integration
- [ ] Cloud Operations
- [ ] Binary Authorization
- [ ] Private cluster
- [ ] Release channel
- [ ] GKE upgrade

### 21.3 Azure AKS
- [ ] AKS cluster
- [ ] Node pool
- [ ] Managed identity
- [ ] Azure CNI
- [ ] Kubenet legacy
- [ ] Azure Load Balancer
- [ ] Application Gateway Ingress Controller
- [ ] Azure Disk CSI
- [ ] Azure File CSI
- [ ] Azure Monitor
- [ ] Key Vault CSI Driver
- [ ] Private cluster
- [ ] AKS upgrade

### 21.4 Managed cluster operations
- [ ] Control plane ownership
- [ ] Node pool lifecycle
- [ ] Add-on management
- [ ] IAM integration
- [ ] Cloud networking
- [ ] Cloud load balancing
- [ ] Cloud storage
- [ ] Cloud logging
- [ ] Cloud monitoring
- [ ] Upgrade policy
- [ ] Cost model
- [ ] Shared responsibility model

---

## 22. Multi-Cluster and Federation

### 22.1 Multi-cluster basics
- [ ] Multiple clusters
- [ ] Cluster per environment
- [ ] Cluster per region
- [ ] Cluster per tenant
- [ ] Cluster per compliance boundary
- [ ] Shared services cluster
- [ ] Management cluster
- [ ] Workload cluster
- [ ] Fleet management
- [ ] Cluster inventory

### 22.2 Multi-cluster networking
- [ ] Cross-cluster service discovery
- [ ] Global DNS
- [ ] Global load balancing
- [ ] Multi-cluster ingress
- [ ] Multi-cluster gateway
- [ ] Service mesh multi-cluster
- [ ] East-west gateway
- [ ] Cross-cluster mTLS
- [ ] Network segmentation
- [ ] Failover routing

### 22.3 Multi-cluster deployment
- [ ] Argo CD ApplicationSet
- [ ] Flux multi-cluster
- [ ] Cluster API
- [ ] Fleet management
- [ ] Policy propagation
- [ ] Secret propagation
- [ ] Progressive rollout across clusters
- [ ] Regional canary
- [ ] Disaster recovery cluster
- [ ] Active-active deployment
- [ ] Active-passive deployment

---

## 23. Troubleshooting and Debugging

### 23.1 Pod troubleshooting
- [ ] Pod pending
- [ ] Pod crashloop
- [ ] Image pull failure
- [ ] Probe failure
- [ ] OOMKilled
- [ ] Evicted pod
- [ ] Completed pod
- [ ] Init container failure
- [ ] Sidecar failure
- [ ] Volume mount failure
- [ ] Permission failure
- [ ] DNS failure
- [ ] NetworkPolicy failure

### 23.2 Deployment troubleshooting
- [ ] Rollout stuck
- [ ] ReplicaSet mismatch
- [ ] Selector mismatch
- [ ] Progress deadline exceeded
- [ ] Unavailable replicas
- [ ] Failed scheduling
- [ ] Failed readiness
- [ ] Config checksum issue
- [ ] Image tag issue
- [ ] Rollback analysis

### 23.3 Service troubleshooting
- [ ] Service has no endpoints
- [ ] Wrong selector
- [ ] Wrong targetPort
- [ ] DNS resolution failure
- [ ] kube-proxy failure
- [ ] EndpointSlice issue
- [ ] NetworkPolicy block
- [ ] LoadBalancer pending
- [ ] NodePort unreachable
- [ ] ExternalTrafficPolicy issue

### 23.4 Node troubleshooting
- [ ] Node NotReady
- [ ] DiskPressure
- [ ] MemoryPressure
- [ ] PIDPressure
- [ ] NetworkUnavailable
- [ ] Kubelet down
- [ ] Container runtime down
- [ ] CNI failure
- [ ] Certificate expiry
- [ ] Node resource exhaustion
- [ ] Node drain stuck
- [ ] Taint issue

### 23.5 Control plane troubleshooting
- [ ] API server unavailable
- [ ] etcd unavailable
- [ ] Scheduler unavailable
- [ ] Controller manager unavailable
- [ ] Admission webhook timeout
- [ ] Authentication failure
- [ ] Authorization failure
- [ ] Certificate issue
- [ ] API latency
- [ ] Watch saturation
- [ ] etcd disk latency

### 23.6 Debugging tools
- [ ] `kubectl describe`
- [ ] `kubectl logs`
- [ ] `kubectl exec`
- [ ] `kubectl debug`
- [ ] Ephemeral containers
- [ ] `kubectl events`
- [ ] `kubectl top`
- [ ] `kubectl auth can-i`
- [ ] `kubectl get --raw`
- [ ] `kubectl proxy`
- [ ] `crictl ps`
- [ ] `crictl logs`
- [ ] `journalctl -u kubelet`
- [ ] Netshoot
- [ ] BusyBox
- [ ] Tcpdump

---

## 24. Governance and Platform Engineering

### 24.1 Multi-tenancy
- [ ] Namespace tenancy
- [ ] Cluster tenancy
- [ ] Soft multi-tenancy
- [ ] Hard multi-tenancy
- [ ] RBAC boundary
- [ ] Network boundary
- [ ] Resource boundary
- [ ] Policy boundary
- [ ] Secret boundary
- [ ] Runtime boundary
- [ ] Tenant onboarding
- [ ] Tenant offboarding

### 24.2 Resource governance
- [ ] ResourceQuota
- [ ] LimitRange
- [ ] PriorityClass
- [ ] PodDisruptionBudget
- [ ] NetworkPolicy
- [ ] Pod Security Admission
- [ ] Admission policy
- [ ] Namespace template
- [ ] Quota reporting
- [ ] Cost allocation
- [ ] Chargeback
- [ ] Showback

### 24.3 Platform APIs
- [ ] Golden path
- [ ] Internal developer platform
- [ ] Self-service namespace
- [ ] Self-service database
- [ ] Self-service deployment
- [ ] Backstage
- [ ] Crossplane
- [ ] Custom platform APIs
- [ ] Developer portal
- [ ] Template repository
- [ ] Guardrails
- [ ] Policy-as-code

### 24.4 Compliance
- [ ] CIS Kubernetes Benchmark
- [ ] Audit logs
- [ ] RBAC review
- [ ] Secret review
- [ ] Image policy
- [ ] Network segmentation
- [ ] Vulnerability management
- [ ] Patch management
- [ ] Evidence collection
- [ ] Compliance reporting
- [ ] Runtime detection
- [ ] Incident response

---

## 25. Kubernetes Version Evolution

### 25.1 Kubernetes 1.0
- [ ] Initial stable release
- [ ] Pods
- [ ] Services
- [ ] ReplicationController
- [ ] Labels
- [ ] Basic scheduling
- [ ] Basic networking
- [ ] Basic volumes
- [ ] API server
- [ ] kubelet

### 25.2 Kubernetes 1.1
- [ ] Job introduced
- [ ] Horizontal Pod Autoscaler alpha
- [ ] DaemonSet early support
- [ ] Improved networking
- [ ] Improved volumes
- [ ] Improved service discovery

### 25.3 Kubernetes 1.2
- [ ] Deployment introduced
- [ ] ReplicaSet introduced
- [ ] ConfigMap introduced
- [ ] Ingress introduced
- [ ] Secrets improved
- [ ] Autoscaling improvements
- [ ] Cluster federation early work

### 25.4 Kubernetes 1.3
- [ ] PetSet early stateful workload support
- [ ] Stateful application support improvements
- [ ] Cross-cluster federation improvements
- [ ] Dashboard improvements
- [ ] Autoscaling improvements

### 25.5 Kubernetes 1.4
- [ ] kubeadm introduced
- [ ] Init containers introduced
- [ ] Cluster creation improvements
- [ ] Dashboard improvements
- [ ] Security improvements
- [ ] Scheduling improvements

### 25.6 Kubernetes 1.5
- [ ] StatefulSet beta
- [ ] PodDisruptionBudget beta
- [ ] Windows Server container alpha
- [ ] Improved federation
- [ ] Improved authorization
- [ ] Improved networking

### 25.7 Kubernetes 1.6
- [ ] RBAC beta
- [ ] DaemonSet updates
- [ ] Dynamic provisioning stable
- [ ] StorageClass stable
- [ ] etcd v3 support
- [ ] Advanced scheduling improvements

### 25.8 Kubernetes 1.7
- [ ] StatefulSet stable
- [ ] DaemonSet stable
- [ ] NetworkPolicy stable
- [ ] Extensible admission controllers
- [ ] API aggregation improvements
- [ ] Security improvements

### 25.9 Kubernetes 1.8
- [ ] RBAC stable
- [ ] Workload APIs promoted
- [ ] CronJob beta
- [ ] Volume snapshot alpha
- [ ] TLS bootstrap stable
- [ ] Resource management improvements

### 25.10 Kubernetes 1.9
- [ ] Apps/v1 workloads
- [ ] Deployment stable
- [ ] ReplicaSet stable
- [ ] DaemonSet stable
- [ ] StatefulSet stable
- [ ] Windows support improvements
- [ ] Admission control improvements

### 25.11 Kubernetes 1.10
- [ ] External client-go credential providers
- [ ] Storage local volumes beta
- [ ] Device plugins beta
- [ ] API aggregation stable
- [ ] `kubectl` improvements
- [ ] Security improvements

### 25.12 Kubernetes 1.11
- [ ] CoreDNS GA
- [ ] Dynamic Kubelet configuration beta
- [ ] IPVS kube-proxy stable
- [ ] CRD versioning improvements
- [ ] In-cluster load balancing improvements

### 25.13 Kubernetes 1.12
- [ ] Kubelet TLS bootstrap stable
- [ ] Azure Virtual Machine Scale Sets support
- [ ] Snapshot and restore improvements
- [ ] RuntimeClass alpha
- [ ] Topology-aware scheduling work

### 25.14 Kubernetes 1.13
- [ ] kubeadm GA
- [ ] CSI GA
- [ ] CoreDNS default DNS
- [ ] Device plugin stable
- [ ] RuntimeClass beta
- [ ] Windows support improvements

### 25.15 Kubernetes 1.14
- [ ] Windows nodes stable
- [ ] Local persistent volumes stable
- [ ] PID limiting beta
- [ ] Pod priority and preemption stable
- [ ] `kubectl` plugin mechanism stable
- [ ] Kustomize integration in `kubectl`

### 25.16 Kubernetes 1.15
- [ ] CRD improvements
- [ ] Execution hook improvements
- [ ] Volume cloning alpha
- [ ] NodeLocal DNSCache beta
- [ ] EndpointSlice alpha
- [ ] Scheduling framework alpha

### 25.17 Kubernetes 1.16
- [ ] CRD GA
- [ ] Admission webhooks GA
- [ ] CustomResourceDefinition v1
- [ ] Server-side apply beta
- [ ] EndpointSlice beta
- [ ] Deprecated API removals

### 25.18 Kubernetes 1.17
- [ ] Volume snapshot beta
- [ ] CSI migration beta
- [ ] Topology-aware routing alpha
- [ ] Windows support improvements
- [ ] Cloud provider extraction progress

### 25.19 Kubernetes 1.18
- [ ] Server-side apply beta improvements
- [ ] IngressClass resource
- [ ] Topology Manager beta
- [ ] Windows CSI support alpha
- [ ] EndpointSlice improvements
- [ ] `kubectl debug` alpha

### 25.20 Kubernetes 1.19
- [ ] Extended support period model
- [ ] Ingress API stable
- [ ] Seccomp stable
- [ ] EndpointSlice enabled by default
- [ ] Storage capacity tracking alpha
- [ ] Immutable Secrets and ConfigMaps beta

### 25.21 Kubernetes 1.20
- [ ] Dockershim deprecation announced
- [ ] CronJob controller v2
- [ ] Volume snapshot stable
- [ ] RuntimeClass stable
- [ ] API priority and fairness beta
- [ ] PID limits stable

### 25.22 Kubernetes 1.21
- [ ] CronJob stable
- [ ] Immutable Secrets and ConfigMaps stable
- [ ] PodSecurityPolicy deprecation
- [ ] Graceful node shutdown beta
- [ ] EndpointSlice stable
- [ ] Dual-stack networking beta

### 25.23 Kubernetes 1.22
- [ ] Server-side apply stable
- [ ] PodSecurity admission alpha
- [ ] API removals from deprecated beta versions
- [ ] External credential provider beta
- [ ] Windows privileged containers alpha
- [ ] Etcd learner mode improvements

### 25.24 Kubernetes 1.23
- [ ] Dual-stack IPv4/IPv6 stable
- [ ] HorizontalPodAutoscaler v2 stable
- [ ] Generic ephemeral volumes stable
- [ ] PodSecurity admission beta
- [ ] CSI migration progress
- [ ] Structured logging improvements

### 25.25 Kubernetes 1.24
- [ ] Dockershim removed
- [ ] Service account token volume projection stable
- [ ] PodSecurity admission beta
- [ ] Storage capacity stable
- [ ] OpenAPI v3 alpha
- [ ] gRPC probes beta

### 25.26 Kubernetes 1.25
- [ ] Pod Security Admission stable
- [ ] PodSecurityPolicy removed
- [ ] cgroup v2 stable
- [ ] Ephemeral containers stable
- [ ] Local ephemeral storage capacity isolation stable
- [ ] SeccompDefault beta

### 25.27 Kubernetes 1.26
- [ ] CRI v1 support
- [ ] OpenAPI v3 stable
- [ ] Pod scheduling readiness alpha
- [ ] ValidatingAdmissionPolicy alpha
- [ ] Kubernetes component health SLA improvements
- [ ] Windows host process containers stable

### 25.28 Kubernetes 1.27
- [ ] In-place resource resize alpha
- [ ] Pod scheduling readiness beta
- [ ] StatefulSet start ordinal stable
- [ ] ReadWriteOncePod stable
- [ ] SeccompDefault stable
- [ ] Volume group snapshots alpha

### 25.29 Kubernetes 1.28
- [ ] Sidecar containers beta
- [ ] ValidatingAdmissionPolicy beta
- [ ] NodeSwap beta
- [ ] CEL admission improvements
- [ ] Mixed version proxy alpha
- [ ] Recovery from volume expansion failure beta

### 25.30 Kubernetes 1.29
- [ ] ReadWriteOncePod stable
- [ ] Sidecar containers beta improvements
- [ ] ValidatingAdmissionPolicy beta improvements
- [ ] Storage improvements
- [ ] API machinery improvements
- [ ] Scheduling improvements

### 25.31 Kubernetes 1.30
- [ ] AppArmor support stable
- [ ] User namespaces support progress
- [ ] Structured authorization configuration beta
- [ ] ValidatingAdmissionPolicy stable
- [ ] Memory swap support progress
- [ ] Dynamic Resource Allocation progress

### 25.32 Kubernetes 1.31
- [ ] AppArmor support refinements
- [ ] PersistentVolume last phase transition time stable
- [ ] Job success policy stable
- [ ] Volume attributes class progress
- [ ] Traffic distribution support
- [ ] Control plane improvements

### 25.33 Kubernetes 1.32
- [ ] Memory Manager stable
- [ ] QueueingHint scheduling optimization
- [ ] Volume group snapshots beta
- [ ] API streaming efficiency improvements
- [ ] CPU Manager strict reservation option
- [ ] Removed deprecated API versions

### 25.34 Kubernetes 1.33
- [ ] Octarine release
- [ ] Stable feature graduations
- [ ] Beta feature graduations
- [ ] Alpha feature introductions
- [ ] Deprecation updates
- [ ] Scheduling improvements
- [ ] Storage improvements
- [ ] Networking improvements
- [ ] API machinery improvements

### 25.35 Kubernetes 1.34
- [ ] Of Wind & Will release
- [ ] Dynamic Resource Allocation GA
- [ ] Recovery from volume expansion failure GA
- [ ] VolumeAttributesClass for volume modification GA
- [ ] Pod replacement policy for Jobs GA
- [ ] Decoupled Taint Manager stable
- [ ] Node cgroup driver auto-configuration GA
- [ ] Pod-level resources beta
- [ ] Mutable CSI node allocatable beta
- [ ] PSI metrics beta
- [ ] Service account token integration for image pulls beta
- [ ] Per-container restart policy alpha
- [ ] Snapshottable API server cache
- [ ] Volume group snapshots v1beta2

### 25.36 Kubernetes 1.35
- [ ] Timbernetes release
- [ ] Topology labels projected into pods
- [ ] In-place pod vertical scaling GA
- [ ] Deprecation and removal updates
- [ ] Scheduling improvements
- [ ] API machinery improvements
- [ ] Resource management improvements
- [ ] Security improvements
- [ ] Storage improvements
- [ ] Networking improvements

### 25.37 Kubernetes 1.36
- [ ] Haru release
- [ ] Current active release line
- [ ] In-place vertical scaling for pod-level resources beta
- [ ] New stable features
- [ ] New beta features
- [ ] New alpha features
- [ ] API machinery improvements
- [ ] Scheduling improvements
- [ ] Storage improvements
- [ ] Networking improvements
- [ ] Resource management improvements
- [ ] Security improvements
- [ ] Observability improvements

---

## 26. Learning Path

### 26.1 Phase 1 — Foundations
- [ ] Linux basics
- [ ] Networking basics
- [ ] Container basics
- [ ] YAML basics
- [ ] Kubernetes mental model
- [ ] `kubectl` basics
- [ ] Local cluster setup
- [ ] Pod basics
- [ ] Service basics
- [ ] Deployment basics

### 26.2 Phase 2 — Core Kubernetes
- [ ] Namespaces
- [ ] Labels
- [ ] Annotations
- [ ] ConfigMaps
- [ ] Secrets
- [ ] Probes
- [ ] Resource requests
- [ ] Resource limits
- [ ] Rollouts
- [ ] Rollbacks
- [ ] Jobs
- [ ] CronJobs
- [ ] StatefulSets
- [ ] DaemonSets

### 26.3 Phase 3 — Networking and Storage
- [ ] Cluster networking
- [ ] CNI
- [ ] DNS
- [ ] Services
- [ ] Ingress
- [ ] Gateway API
- [ ] NetworkPolicy
- [ ] Volumes
- [ ] PersistentVolumes
- [ ] PersistentVolumeClaims
- [ ] StorageClass
- [ ] CSI
- [ ] Snapshots
- [ ] Stateful storage

### 26.4 Phase 4 — Security
- [ ] Authentication
- [ ] RBAC
- [ ] Service accounts
- [ ] Pod Security Admission
- [ ] SecurityContext
- [ ] NetworkPolicy
- [ ] Secret management
- [ ] Admission policies
- [ ] Image security
- [ ] Audit logging
- [ ] Policy engines
- [ ] Supply chain security

### 26.5 Phase 5 — Operations
- [ ] Cluster architecture
- [ ] Node operations
- [ ] Upgrades
- [ ] Backup and restore
- [ ] Autoscaling
- [ ] Observability
- [ ] Troubleshooting
- [ ] Incident response
- [ ] Capacity planning
- [ ] Cost management
- [ ] Disaster recovery

### 26.6 Phase 6 — Delivery and Platform
- [ ] Kustomize
- [ ] Helm
- [ ] GitOps
- [ ] Argo CD
- [ ] Flux
- [ ] CI/CD
- [ ] Progressive delivery
- [ ] Policy-as-code
- [ ] Platform APIs
- [ ] Developer portals
- [ ] Multi-tenancy
- [ ] Governance

### 26.7 Phase 7 — Advanced Kubernetes
- [ ] CRDs
- [ ] Controllers
- [ ] Operators
- [ ] Admission webhooks
- [ ] API aggregation
- [ ] Scheduler extensions
- [ ] Device plugins
- [ ] Dynamic Resource Allocation
- [ ] Service mesh
- [ ] Multi-cluster
- [ ] Managed Kubernetes
- [ ] Kubernetes internals

---

## 27. Practical Projects

### 27.1 Project 1 — Local Kubernetes Lab
- [ ] Install `kubectl`
- [ ] Create kind cluster
- [ ] Create namespace
- [ ] Deploy sample app
- [ ] Expose with Service
- [ ] Port-forward service
- [ ] Inspect logs
- [ ] Exec into pod
- [ ] Delete resources
- [ ] Recreate using manifests

### 27.2 Project 2 — Production-Ready Web App
- [ ] Deployment
- [ ] Service
- [ ] ConfigMap
- [ ] Secret
- [ ] Resource requests
- [ ] Resource limits
- [ ] Liveness probe
- [ ] Readiness probe
- [ ] Startup probe
- [ ] Graceful shutdown
- [ ] Rolling update
- [ ] Rollback

### 27.3 Project 3 — Ingress and TLS
- [ ] Install ingress controller
- [ ] Create Ingress
- [ ] Configure host routing
- [ ] Configure path routing
- [ ] Install cert-manager
- [ ] Configure ClusterIssuer
- [ ] Issue TLS certificate
- [ ] Test HTTPS
- [ ] Add redirect
- [ ] Debug certificate renewal

### 27.4 Project 4 — Stateful Application
- [ ] StatefulSet
- [ ] Headless Service
- [ ] StorageClass
- [ ] PVC template
- [ ] Database container
- [ ] Backup job
- [ ] Restore workflow
- [ ] Rolling update
- [ ] Storage expansion
- [ ] Failover test

### 27.5 Project 5 — Secure Namespace
- [ ] Namespace
- [ ] RBAC Role
- [ ] RoleBinding
- [ ] ServiceAccount
- [ ] ResourceQuota
- [ ] LimitRange
- [ ] NetworkPolicy default deny
- [ ] Pod Security Admission restricted
- [ ] Secret policy
- [ ] Audit review

### 27.6 Project 6 — Observability Stack
- [ ] Prometheus
- [ ] Grafana
- [ ] kube-state-metrics
- [ ] Node Exporter
- [ ] Loki
- [ ] Promtail or Fluent Bit
- [ ] OpenTelemetry Collector
- [ ] Application metrics
- [ ] Alerts
- [ ] Dashboards
- [ ] Runbooks

### 27.7 Project 7 — GitOps Delivery
- [ ] Git repository
- [ ] Kustomize base
- [ ] Dev overlay
- [ ] Staging overlay
- [ ] Production overlay
- [ ] Argo CD application
- [ ] Auto-sync
- [ ] Drift detection
- [ ] Image update automation
- [ ] Promotion workflow
- [ ] Rollback workflow

### 27.8 Project 8 — Helm Chart
- [ ] Chart creation
- [ ] Values file
- [ ] Deployment template
- [ ] Service template
- [ ] Ingress template
- [ ] ConfigMap template
- [ ] Secret template
- [ ] Helpers
- [ ] Chart tests
- [ ] Dependency chart
- [ ] Chart versioning
- [ ] Chart publishing

### 27.9 Project 9 — Custom Operator
- [ ] Define CRD
- [ ] Generate API types
- [ ] Implement controller
- [ ] Reconcile external resource
- [ ] Manage finalizers
- [ ] Update status
- [ ] Add validations
- [ ] Add webhooks
- [ ] Add metrics
- [ ] Add tests
- [ ] Package operator
- [ ] Deploy operator

### 27.10 Project 10 — Multi-Cluster Platform
- [ ] Management cluster
- [ ] Workload cluster
- [ ] Argo CD ApplicationSet
- [ ] Cluster registration
- [ ] Shared policy
- [ ] Shared ingress
- [ ] Shared observability
- [ ] Cross-cluster secrets
- [ ] Regional deployment
- [ ] Failover test
- [ ] Cost reporting

---

## 28. Competency Checklist

### 28.1 Junior Kubernetes
- [ ] Use `kubectl`
- [ ] Read YAML manifests
- [ ] Create Pods
- [ ] Create Deployments
- [ ] Create Services
- [ ] Use ConfigMaps
- [ ] Use Secrets
- [ ] Read logs
- [ ] Describe resources
- [ ] Troubleshoot basic pod failures
- [ ] Understand namespaces
- [ ] Understand labels and selectors

### 28.2 Mid-level Kubernetes
- [ ] Design Deployment manifests
- [ ] Configure probes
- [ ] Configure resources
- [ ] Configure HPA
- [ ] Configure Ingress
- [ ] Configure TLS
- [ ] Use PersistentVolumes
- [ ] Use StorageClasses
- [ ] Configure RBAC
- [ ] Configure NetworkPolicy
- [ ] Use Helm
- [ ] Use Kustomize
- [ ] Use GitOps
- [ ] Debug networking issues
- [ ] Debug scheduling issues

### 28.3 Senior Kubernetes
- [ ] Operate production clusters
- [ ] Plan upgrades
- [ ] Handle API deprecations
- [ ] Design multi-namespace governance
- [ ] Design RBAC model
- [ ] Design network isolation
- [ ] Design observability stack
- [ ] Design backup and restore
- [ ] Tune autoscaling
- [ ] Tune resource allocation
- [ ] Build custom controllers
- [ ] Build platform APIs
- [ ] Run incident response
- [ ] Optimize cost
- [ ] Secure supply chain

### 28.4 Platform / Advanced Kubernetes
- [ ] Write CRDs
- [ ] Write controllers
- [ ] Write admission webhooks
- [ ] Extend scheduling
- [ ] Integrate CSI
- [ ] Integrate CNI
- [ ] Use Dynamic Resource Allocation
- [ ] Operate multi-cluster platforms
- [ ] Implement policy-as-code
- [ ] Implement GitOps at scale
- [ ] Build internal developer platforms
- [ ] Debug control plane internals
- [ ] Tune etcd
- [ ] Secure clusters to compliance standards
- [ ] Contribute to Kubernetes ecosystem
