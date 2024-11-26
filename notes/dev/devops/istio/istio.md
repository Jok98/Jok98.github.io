---
layout: default
title: DevOps
---

# Istio

Istio is an open-source service mesh that provides a way to connect, secure, control, and observe services.<br>
It is a platform that provides key capabilities for microservices in a Kubernetes environment.

## Service Mesh
Is a dedicated infrastructure layer for handling service-to-service communication.<br>

## Components
- **Envoy Proxy:** Sidecar proxy that intercepts all incoming and outgoing traffic.
- **Pilot:** Provides service discovery for the Envoy sidecars.
- **Citadel:** Provides service-to-service and end-user authentication.

## Features
- `Traffic Management`
    - **Load Balancing** : Distributes the incoming traffic across the instances of a service.
    - **Advanced Routing** : Route the traffic based on the request headers allowing implementing canary releases and a/b testing.
    - **Fault Injection and Circuit Breaking** : Allows to inject faults and define circuit breaking rules.

- `Security`
    - **Authentication** : Provides service-to-service and end-user authentication.
    - **Authorization** : Provides role-based access control for services.
    - **Encryption** : Provides encryption in transit.

- `Observability`
    - **Monitoring** : Provides metrics, logs, and traces for the services.
    - **Tracing** : Provides distributed tracing for the services.
    - **Logging** : Provides logs for the services.

## Istio Architecture
`Data Plane` : Manages the network traffic between the services.<br>
`Control Plane` : Manages and configures the data plane.<br>

## How Istio Works
- **Sidecar Injection** : Istio injects an Envoy sidecar proxy into the pod of the service.
- **Policy Definition** : Define the policies for the routing, security, and observability.
- **Policy Enforcement** : The control plane enforces the policies on the data plane.
- **Telemetry Collection** : The proxy collects the metrics, logs, and traces from the services.