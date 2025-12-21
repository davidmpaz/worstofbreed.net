---
title: "The 'God' Controller"
category: "Code"
imagePlaceholder: "👼"
stats:
  latency: 50
  pain: 85
  maintainability: 5
  resumeValue: "LOW"
specialAbility:
  name: "Cyclomatic Complexity of 9000"
  description: "A single method has 45 nested if/else blocks and is 3,000 lines long."
quote: "Just put the logic in the 'OrderController' for now. We'll refactor it later. Promised."
---

## Analysis
The classic "Smart UI" or "Anemic Domain Model" Anti-Pattern. Domains objects are just dumb data holders (Getter/Setter), and the entire business logic lives in a gigantic Service or Controller.

**The Reality:**
This class is touched with every Merge Request, leading to constant conflicts. Unit tests are impossible to write because you need 40 mocks to instantiate the controller. "Later" never comes.
