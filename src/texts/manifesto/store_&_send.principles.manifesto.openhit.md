**Principle**
The message always contains all the information needed for its processing.

**Motivation**
The following approach will allow  when it is  necessary different types of message processing with external domains, applications and even manual processing  master data (without worrying a lot about metadata), as well as comply formally with data standards in large distributed systems of undefined scale. Supports the same format and standard implementation for the store, process and exchange of the messages in the system. The implementation of this principle led to the usage of non-relational databases with REST services and JSON message format as well as to implementation of special data control and clearing processes.

**Implications**
- redundant message data
- special requirements for internal services