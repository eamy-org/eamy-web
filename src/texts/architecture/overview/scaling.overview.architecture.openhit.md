# Scaling

## Scaling options
In openHIT reference architecture there are several main scaling options:
- domain-based scaling
- vertical scaling of services
- horizontal scaling of services

## Scaling of core services
Scaling of routing and processors is possible due to stateless nature of those. To scale them one just needs to add one of the Load balancing options as stated below. It is possible in the process of deploying or re-deploying these components.
- MIPRE
- MERE

If your system needs scaling of internal processing and routing services, due to the high load it makes sense to consider domain-based scaling option. This case will work perfectly if you could split the internal functional services in several loose coupled groups (such as patient monitoring domain and financial services) and put each one in it’s own domain. After doing this you should revise pipelines and rules applicable for these services and adopt it when needed. It is important to use pipelines namespaces with good level of granularity to avoid problems with identifying and moving pipelines and rules to the different domain.

Scaling of transport service depends on it’s technical realization. In the basic openHIT implementation main option for implementation of transport service is **rabbitMQ**. Thus it scales via **rabbitMQ clustering** options. For more information please refer **»RabbitMQ Clustering Guide»**.


- Internal technical services (Context switch, Data sharing, Validation, etc.)

- Context
- Rules & pipelines


## Scaling of internal systems
- depends on a system
- in most cases - vertical scaling for heavy software
- in most cases needs scaling of gateway services

The other issue connected with scaling of internal systems is an approach for scaling the gateway services. It really depends on what is the scaling options for the gateway service. There are two basic characteristics to think about:
- is the gateway service developed by community?
- does it persists it state?

## Scaling of external systems
Not in our scope.

## Load balancing
- «DNS» load balancing - using consul
- application-based load balancing
- hardware load balancing

## Virtualization
Approach to virtualization
- paker
- docker
- vagrant
- vendor-specific virtualization
