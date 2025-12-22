---
title: "API Versioning Hell"
category: "Architecture"
imagePlaceholder: "#️⃣"
stats:
  latency: 20
  pain: 80
  maintainability: 15
  resumeValue: "MODERATE"
specialAbility:
  name: "Breaking Change Roulette"
  description: "A client accidentally uses v12 but expects the data format of v14. The backend crashes with a NullPointer."
quote: "We make a new version for every small change. That is 'agile' and 'backward compatible'."
dateAdded: 2025-12-21
tags: ["Architecture", "API", "Maintenance"]
author: "vanto"
---

## Analysis
The lack of a strategy for API evolution (e.g. "Tolerant Reader" pattern or GraphQL). Instead, the URL is incremented with every field change.

**The Reality:**
You have to operate and maintain 30 versions of the same API in parallel. The code is full of if/else blocks checking which version is being called. The documentation (Swagger/OpenAPI) is 5GB large and no one knows which customer uses which version.
