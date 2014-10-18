**Principle**
In the systems design there should be one-and-only obvious and straightforward way to carry the things out.

**Motivation**
Regarding  design of the system, if there is any possibility to screw up, one will definitely do. Lots of alternatives is the way to make things complicated and unclear. All of the internal components in the system would support as simple API as it is possible. In that case the information for processing of the message is stored in the message and processed by each node independently. This dramatically reduce costs and complexity of the message routing and helped to maintain the consistency of the applications and infrastructure APIs despite the large number of changes and special use-cases in the process of the messages processing.

**Implications**:
- explicit is better than implicit
- complex is better than complicated
- simple API's - in design we should prefer only one endpoint for each component
- one function per component - each component should implement only one function