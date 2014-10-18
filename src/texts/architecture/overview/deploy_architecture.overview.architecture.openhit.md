# Deployment architecture

## Deploy options

From the goals and possible use cases point of view following deployment the following options could be considered:
- Functional domain
- Integration domain

From the number of communications point of view deploy options could be described as follows:
- _Isolated domain_
When processing domain equals execution environment. At this type of deploy there is no **transport system** (there is no need to communicate with external systems, applications or domains) and no **secure provider** which is used for sharing data between applications and domains (due to the same reason that transport system). At this case MERE is only used to communicate with applications.
- _Single domain_
When execution environment consists of one processing domain and one or more external applications. 
- Network of domains
When there are two or more domains connected with shared processes.
- Network of networks
Two or more networks of domains connected via center domain in each network or via arbitrary domain.

## Artifacts for deploy

- core services
- functional services
- applications
- pipelines
- rules
- internal systems

## Deploy configurations

- virtualization
- bootstrapping
- provisioning
- clustering
- communication configurations
- security configurations

## Deploy process
- VM
- config & bootstrapping, basic communication options
- VM delivery
- provisioning & clustering
- provisioning of security
- testing in environment
- monitoring & continuos testing 