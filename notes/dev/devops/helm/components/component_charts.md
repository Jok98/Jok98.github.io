---
layout: default
title: Helm Component Charts
area: dev
topic: devops
tags: [helm, kubernetes, component-chart]
summary: Notes on component chart structure, common chart dependencies, templates, and values.
order: 51
---
# Component Charts

The charts for the microservices and the resource managers are stored in the components folder, and they all share the same file structure :
- `Chart.yaml` expresses a dependency on the common library chart.
- `template` folder contains deployment and service templates.
- `values.yaml` contains specific values for the microservice.
