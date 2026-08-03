---
layout: default
title: Kubernetes Microservices Integration
show_title: true
area: dev
topic: devops
tags: [kubernetes, microservices, configmap, ingress, cert-manager]
summary: Notes on replacing Spring Cloud infrastructure patterns with Kubernetes-native features.
order: 80
---

### Implementing kubernetes features to simplify the system landscape

Microservices design patterns will be handled by kubernetes build-in capabilities.

- Replacing the Spring Cloud Config Server with `Kubernetes ConfigMaps and Secrets`
- Replacing the Spring Cloud Gateway with a `Kubernetes Ingress object`
- Using `cert-manager` to automatically provision certificates
- Deploying and testing the microservice landscape on Kubernetes


### Replacing the Spring Cloud Config Server
