---
layout: cv
title: Resume
permalink: /cv/
---

# Matteo Moi - Software Engineer


<div class="cv-header">
  <strong>Location:</strong> Sondrio, Italy | <strong>Email:</strong> matteo.moi1998@gmail.com<br/>
  <a href="https://www.linkedin.com/in/matteo-moi/">LinkedIn</a> |
  <a href="https://github.com/Jok98">GitHub</a> |
  <a href="https://jok98.github.io">Personal Website</a>
</div>

## About Me
IT enthusiast always seeking to broaden my knowledge in software development. I document my learning journey on [my site](https://jok98.github.io) and [GitHub](https://github.com/Jok98/Jok98.github.io).

## Tech Stack

<div class="skill-intro">
  <p><strong>Primary focus:</strong> Backend microservices in Java 17 and Spring Boot, deployed through automated CI/CD pipelines onto Kubernetes.</p>
  <ul class="skill-tag-list">
    <li>Java 17</li>
    <li>Spring Boot &amp; Spring Cloud</li>
    <li>Kubernetes &amp; Docker</li>
    <li>PostgreSQL &amp; MongoDB</li>
    <li>RabbitMQ &amp; Apache Kafka</li>
    <li>Prometheus &amp; Grafana</li>
  </ul>
</div>

<div class="skills-matrix">
  <section class="skill-block">
    <h3>Backend Core</h3>
    <ul class="skill-inline">
      <li>Java 17</li>
      <li>Spring Boot 3</li>
      <li>Spring Cloud</li>
      <li>Spring Security</li>
      <li>Hibernate/JPA</li>
      <li>OpenAPI-first</li>
      <li>JUnit &amp; Mockito</li>
      <li>Testcontainers</li>
      <li>Maven</li>
    </ul>
  </section>
  <section class="skill-block">
    <h3>Architecture</h3>
    <ul class="skill-inline">
      <li>Spring Cloud Gateway</li>
      <li>Nginx</li>
      <li>Netflix Eureka</li>
      <li>Zookeeper</li>
      <li>Spring Cloud Config</li>
      <li>Resilience4j</li>
      <li>Spring Cloud Sleuth</li>
      <li>Zipkin</li>
      <li>OAuth2 &amp; JWT</li>
    </ul>
  </section>
  <section class="skill-block">
    <h3>Data &amp; Messaging</h3>
    <ul class="skill-inline">
      <li>PostgreSQL</li>
      <li>MySQL</li>
      <li>Oracle</li>
      <li>MongoDB</li>
      <li>RabbitMQ</li>
      <li>Apache Kafka</li>
      <li>Flyway</li>
    </ul>
  </section>
  <section class="skill-block">
    <h3>Delivery &amp; Ops</h3>
    <ul class="skill-inline">
      <li>Docker</li>
      <li>Kubernetes</li>
      <li>Helm</li>
      <li>GitHub Actions</li>
      <li>GitLab CI/CD</li>
      <li>Jenkins</li>
      <li>Prometheus</li>
      <li>Grafana</li>
      <li>Loki</li>
      <li>Spring Actuator</li>
      <li>Swagger/OpenAPI</li>
      <li>Confluence</li>
      <li>Jira</li>
      <li>JasperReports</li>
    </ul>
  </section>
</div>

## Education

- **Bachelor's Degree in Computer Science** - Ecampus University (ongoing)
- **Self-directed Learning** - Continuous professional development through courses, documentation, and hands-on projects since 2016

---

## Professional Experience

<div class="experience-list">
  <section class="experience-item">
    <div class="experience-header">
      <h3>Objectway</h3>
      <div>
        <span class="experience-role">Software Engineer</span>
        <span class="experience-dates">January 2024 – Present</span>
      </div>
    </div>
    <ul>
      <li>Develop and maintain microservices-based financial applications using Spring Boot and Java 17</li>
      <li>Design secure authentication and authorization flows with OAuth2 and JWT</li>
      <li>Co-design new features with cross-functional teams and document architectural decisions</li>
      <li>Operate in Agile squads with automated CI/CD pipelines for continuous delivery</li>
    </ul>
    <p class="experience-tech"><strong>Technologies:</strong> Java 17, Spring Boot, Spring Cloud, Kubernetes, Docker, PostgreSQL, RabbitMQ</p>
  </section>
  <section class="experience-item">
    <div class="experience-header">
      <h3>Iriscube Reply (SistemItaly)</h3>
      <div>
        <span class="experience-role">Software Engineer</span>
        <span class="experience-dates">August 2023 – January 2024</span>
      </div>
    </div>
    <ul>
      <li>Delivered RESTful APIs for banking services with Spring Boot and Hibernate/JPA</li>
      <li>Built robust persistence layers backed by PostgreSQL</li>
      <li>Contributed to microservices architecture design and integration</li>
      <li>Wrote unit and integration tests with JUnit and Mockito to ensure quality</li>
      <li>Actively participated in code reviews and shared knowledge across the team</li>
    </ul>
    <p class="experience-tech"><strong>Technologies:</strong> Java, Spring Boot, Hibernate, PostgreSQL, Docker, Git</p>
  </section>
  <section class="experience-item">
    <div class="experience-header">
      <h3>Blue Reply (SistemItaly)</h3>
      <div>
        <span class="experience-role">Junior Software Engineer</span>
        <span class="experience-dates">November 2022 – August 2023</span>
      </div>
    </div>
    <ul>
      <li>Implemented backend services for insurance management platforms with Java and Spring</li>
      <li>Worked with Oracle and MySQL databases to guarantee reliable data persistence</li>
      <li>Supported Agile ceremonies, sprint planning, and iterative delivery</li>
      <li>Collaborated with senior engineers to enhance code quality and performance</li>
    </ul>
    <p class="experience-tech"><strong>Technologies:</strong> Java, Spring Framework, Oracle, MySQL, Git, Maven</p>
  </section>
</div>

---

## Personal Projects

<div class="projects-section">
  <section class="project-card">
    <div class="project-header">
      <h3>Taskete</h3>
      <span class="project-tagline">Global favor-exchange platform engineered on a microservices backbone.</span>
    </div>
    <p class="project-summary">Focus on performance, security, and clean architecture from end to end.</p>
    <ul class="project-details">
      <li><strong>Backend</strong>: Java 21, Spring Boot 3.3, OpenAPI-first design</li>
      <li><strong>Services</strong>: auth-service, user-service, review-service, points-service, config-server, api-gateway, frontend</li>
      <li><strong>Infrastructure</strong>: Kubernetes with Istio (mTLS, RBAC, JWT validation)</li>
      <li><strong>Communication</strong>: Feign (sync) plus Kafka (async, Outbox pattern)</li>
      <li><strong>Database</strong>: PostgreSQL per service with Flyway migrations</li>
      <li><strong>CI/CD</strong>: GitHub Actions and Helm charts</li>
      <li><strong>Observability</strong>: Prometheus, Grafana, Loki, OpenTelemetry</li>
      <li><strong>Frontend</strong>: Angular 17 served via NGINX</li>
    </ul>
  </section>
</div>

---

### Technical Study Notes
A comprehensive collection of technical notes covering various aspects of software development, architecture, and DevOps practices.

- **[Study Notes Repository](https://github.com/Jok98/Jok98.github.io/tree/main/notes/dev)**
- Topics include: Java, Spring, Microservices, Docker, Kubernetes, Design Patterns, and more
- Regular updates with new learnings and discoveries

---

## International Experience

> **Japan (Language and Cultural Studies)**
>
> Immersive experiences at international schools in Japan, developing strong adaptability, problem-solving skills, and cross-cultural communication abilities.

- **Sapporo Language School**: August 2019 - October 2019
- **Fukuoka International Academy**: July 2018 - September 2018
- **Kobe Cultural Exchange Program**: June 2017 - July 2017

**Skills Gained**: Japanese language proficiency, cross-cultural communication, adaptability, global perspective

---

## Languages

<ul class="languages-list">
  <li><strong>Italian</strong>: Native</li>
  <li><strong>English</strong>: Professional working proficiency</li>
  <li><strong>Japanese</strong>: Intermediate</li>
</ul>

---

## Soft Skills

<ul class="soft-skills-list">
  <li><strong>Problem Solving</strong>: Analytical approach to complex technical challenges</li>
  <li><strong>Communication</strong>: Clear and effective technical and non-technical communication</li>
  <li><strong>Teamwork</strong>: Collaborative approach in cross-functional teams</li>
  <li><strong>Adaptability</strong>: Quick to learn new technologies and methodologies</li>
  <li><strong>Time Management</strong>: Efficient prioritization and task completion</li>
  <li><strong>Leadership</strong>: Mentoring junior developers and leading technical discussions</li>
</ul>

---
