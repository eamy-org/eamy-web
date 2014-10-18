**Principle**
Processing of the message should depend on its context and content.

**Motivation**
There are lots of processes in the healthcare and dozens of  variations of these processes. It is very hard to implement and maintain all these processes in the current HIT systems implementation. As most of the modern approaches and technologies suppose that all the processes in the organization should be unified, but regarding various healthcare cases (especially for large regional or global client-oriented networks) it is almost impossible, due to high complexity:
- variety of the processes
- a large number of conditions
- processes can vary depending on personnel
- processes can vary depending on conditions
- processes can vary depending on source
 and totally different maturity. Better way is to adopt the processes  to particular cases and needs only when necessary. With context-based processing it is possible to make it on the fly.

Semantic-based message routing allowed to take into consideration the most parts of clinics and other healthcare organizations specific, besides the use of semantic-based routing allowed to adopt the applications UI, data and processes to the use cases of each clinic and even specialist in cases it was actual.

**Implications**
- processing of the message based on the context (process, source, content) of the message
- adoption of the processing of the message based on its context and contents (ex. additional steps for message processing received from the certain source with particular fields inside the message)
