---
title: "K8s for a Static Site"
category: "Infra"
imagePlaceholder: "☸️"
stats:
  latency: 40
  pain: 60
  maintainability: 30
  resumeValue: "GODLIKE"
specialAbility:
  name: "YAML Fatigue"
  description: "To fix a typo in the HTML, 14 YAML manifests must pass through a CI/CD pipeline that updates 3 clusters."
quote: "We host our company blog on an HA Kubernetes cluster with Service Mesh and GitOps now. For scalability."
dateAdded: 2025-12-21
tags: ["Infra", "Kubernetes", "Cost"]
author: "vanto"
---

## Analysis
The ultimate over-engineering. A problem that would be solved with an S3 bucket and CloudFront for $0.50 a month is beaten to death with infrastructure that costs $5000 and requires three dedicated admins.

**The Reality:**
You spend more time patching Ingress controllers and debugging certificate problems than writing blog posts. But hey, it looks great on the CV.
