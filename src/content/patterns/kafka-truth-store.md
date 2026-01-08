---
title: "The Kafka 'Truth' Store"
category: "Architecture"
imagePlaceholder: "🪵"
stats:
  latency: 30
  pain: 75
  maintainability: 40
  resumeValue: "VERY HIGH"
specialAbility:
  name: "The Offset Reset Disaster"
  description: "A new consumer reads 'from beginning' by mistake and processes all orders from the last 5 years again."
quote: "We don't need a database anymore. Kafka is our 'Source of Truth'. We store the entire state in the log."
tags: ["Architecture", "Event Sourcing", "Kafka"]
dateAdded: 2025-12-21
contributor: "vanto"
---

## Analysis
Event Sourcing is powerful, but using Kafka as the primary database for *everything* is brave.

**The Reality:**
You just traded database problems (ACID, Queries, Backups) for Distributed Log problems. To find out a customer's current account balance, you have to replay 5 million events or maintain complex KStreams state stores. GDPR deletion requests ("Right to be forgotten") become an absolute nightmare because logs are immutable.
