**Principle**
Processing of messages should be independent in different parts of the system.

**Motivation**
Various organizations in their domains could have different rules, conditions and constraints of data processing. Every clinic or clinical system could support its own process for the request of every type but with respect to the results quality and consistency in order to maintain unified processes. This principle was implemented as a distributed integration platform and high-level transport system.

**Implications**
- independent processing needs flexible or very well-defined standards
- reliable routing between processing domains
- processing context definition and managing in each processing domain