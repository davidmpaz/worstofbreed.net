---
title: "The 'Generic' Domain Model"
category: "Architecture"
imagePlaceholder: "🤷"
stats:
  latency: 30
  pain: 70
  maintainability: 10
  resumeValue: "LOW"
specialAbility:
  name: "The EAV (Entity-Attribute-Value) Nightmare"
  description: "All data lands in one table with three columns: EntityID, Key, Value. SQL queries are now 4 pages long."
quote: "We build the system totally flexible! We don't know what the customer needs yet, so we make everything generically configurable."
tags: ["DDD"]
---

## Analysis
The fear of specific business decisions leads to a meta-model. Instead of `Customer` and `Order` there is `Thing` and `Relation`.

**The Reality:**
You just rebuilt a bad, slow and untyped database *inside* your relational database. The system is so generic that it can do everything, but nothing properly. The business logic is not in the code, but hidden in thousands of configuration entries in the database.
