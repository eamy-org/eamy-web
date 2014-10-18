# technical services

## deploy
These services are used for deployment of systems componenets.
### service deploy
Used to deliver and deploy or update internal services of the system.
- deploy service
- delete service
### application deploy
Used to deliver and deploy or update UI applications of the system.
- deploy application
### pipeline deploy
Used to deliver and deploy or update processes of the processing of the messages in the system.
- deploy pipeline

## monitoring
### monitoring
- write metrics
- read metrics
### logging
- write log
- read log

# functional services

## document services
### version document
- write document version
- read document version
- delete document version
### archive document
- write archive document
- read archive document
- delete archive document

## data services
### master data management
- write master data
- delete master data
### master data
- read master data
### report
- [{ objects }] retrieve report { query }
### dss
- { object } read solution { query }

## notification services
### notification
- write notification {[HTTP | e-mail]}

**management**
### user management
- add user
- remove user
- assign security rule to user
- manage credentials ?

**security**
### authorization
### data sharing

**workflow**
// context manager
### pipeline
- process
### context 
- read context 
- write to application heap // **important!** this service could be used for write to the app heap
### validator
- validate
// dispatcher
### external gateway 
- send
- retrieve
### internal gateway
- send document
- retrieve document

# industrial services

### schedules
### bill