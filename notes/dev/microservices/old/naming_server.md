---
layout: default
title: Naming Server
area: dev
topic: microservices
tags: [microservices, eureka, service-discovery, naming-server]
summary: Notes on Eureka naming server setup, service discovery, and client registration.
order: 60
---
# Naming Server
## On Server side
### Dependencies
```xml
<dependency>
    <groupId>org.springframework.cloud</groupId>
    <artifactId>spring-cloud-starter-netflix-eureka-server</artifactId>
</dependency>
```

### On Application class
`@EnableEurekaServer`
```java
@SpringBootApplication
@EnableEurekaServer
public class Application {
    public static void main(String[] args) {
        SpringApplication.run(Application.class, args);
    }
}
```

### Application properties
```properties
spring.application.name=naming-server
server.port=8761
# Disable registration and fetching of registry for itself
eureka.client.register-with-eureka=false
eureka.client.fetch-registry=false
```

## On Client side

### Dependencies
```xml
<dependency>
    <groupId>org.springframework.cloud</groupId>
    <artifactId>spring-cloud-starter-netflix-eureka-client</artifactId>
</dependency>
```

### On Application class
`@EnableDiscoveryClient`
```java
@SpringBootApplication
@EnableDiscoveryClient
public class Application {
    public static void main(String[] args) {
        SpringApplication.run(Application.class, args);
    }
}
```

### Application properties
```properties
spring.application.name=service-name
server.port=8080
eureka.client.service-url.default-zone=http://localhost:8761/eureka
```
