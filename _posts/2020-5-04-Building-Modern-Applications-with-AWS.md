---
layout: post
title: Building Modern Applications with AWS
---

Before we dive in, it&#39;s important to level set on what we mean by &quot;modern applications&quot;. The good, or perhaps bad, news is that modern practices and modern applications refer to a point in time perspective. What we&#39;re going to cover, is based on what modern means, today.

In summary, it&#39;s about how builders are leveraging people, process, and technology to build automated, operatable, business focused solutions.

A modern approach to software development is centered around:

- **Shrinking the scope** – by leveraging different techniques to prove or disprove hypotheses quickly, in a fast and safe way, in search of customer value
- **Offloading the undifferentiated pieces** – by seeking out ways to do less, in order to do more
- **Choosing the right tool for the job** – to create more purpose built solutions with less effort
- **Automating everything** – for speed, consistency and safety

To achieve this model of agility, let&#39;s look at what changes need to be made across the following dimensions:

- **Architectural patterns**
- **Operational model**
- **Data management**
- **Software delivery**

**Architectural Patterns**

Choosing the right patterns can help you shrink the scope of work and create focus for your applications. APIs should be the front door of your microservices. By providing this hardened contract, we create a well-defined boundary between service consumers and our data and business logic.

With a monolith, you have a large single system that does everything. On the other hand, with microservices the impact of change is smaller so release velocity can increase. These smaller, finer-grained architectures do one thing, and do it well and through componentization we get small, easily identifiable pieces with well-defined interfaces. This allows us to create cohesive systems made up of many small parts working together.

When we pair these finer-grained microservices with **event driven architectures** , we can further simplify the components of the system. When you think about where or how to start building APIs, it typically makes sense to start by identifying events in your system, because events are a good indication of where your services can be interconnected and therefore decoupled.

In the simplest terms, an event is a signal that a system&#39;s state has changed. In most modern systems these are represented as JSON messages that provide some set of facts about what changed and potentially what the current state of the system is. One of the key distinguishing features of events compared to commands is that events are observable, not directed. In a command model, each command is explicitly issued to a specific recipient.

Events on the other hand are merely observable by other systems. It means that the event producers don&#39;t need to have any knowledge about who is listening to those events. This keeps them simple, and allows other services to consume events without needing the upstream system to change.

The benefit of event-driven architectures is that it allows you to shrink the scope of work, by breaking it up into smaller pieces. This allows us to distribute the work while decreasing waste so we can focus on value. By no longer having to coordinate all the listeners and manage all the downstream tasks, systems become simpler and more focused.

**Operational Model**

As your architectural patterns change, your operational model needs to change. The goal is to offload the undifferentiated pieces so each team is more focused on delivering business value.

The first question that often comes up is around complexity &quot;isn&#39;t it more complex to operate many 10s or 100s of services compared to a single monolith.&quot; As a broad system there is significantly more complexity, but if done right, for each service team, owning a small set of a larger system, simplifies operations even though your larger system may be more complex. This is where services like AWS Cloud Map and AWS App Mesh become so important. They allow service owners to focus on their services while providing interfaces and visibility into the broader system.

With the evolution of compute, there are options to further simplify your operations. Containers are great but managing the infrastructure is undifferentiated heavy lifting. Too much of your time is spent managing infrastructure and not enough time is spent on the code, the application, and the architecture – which is where you want to focus. Serverless lets you write code and lets somebody else worry about the infrastructure.

Serverless removes the undifferentiated heavy lifting that is server operations, reducing your operational load. This allows you to focus on building applications and creating value for your customers rather than the management and scaling of the infrastructure to support the application.

**Data Management**

Speaking of right tool for the job, so how this new architecture impacts your database and data management.

If you think about each microservice as a space ship, and the mother ship as their database, you can see how this common dependency, this monolithic database, could hold back the broader fleet.

When you design your microservices, business logic and data management should be hidden behind a hardened API, then you can more easily change, manage and scale your data and services independently. This also allows you to create more purpose built solutions while spending less time fitting your data into, for example, a relational database when what you really need is a time series database.

While we&#39;re not going to dive deep on AWS databases in this blog, I wanted to quickly share the breadth of purpose-built databases that AWS offers, beyond relational databases, to allow you select the right tool for the job

![_config.yml]({{ site.baseurl }}/images/2020-5-04.Picture1.png)

**Software Delivery**

In the old monolithic model, your release process might have something that looks like this:

![_config.yml]({{ site.baseurl }}/images/2020-5-04.Picture2.png)

Developers will be stepping on each other, as they made changes in a big monolithic app, having to batch up and coordinate testing and releasing, causing changes to be deployed to production slowly and infrequently.

As you try to remove bottlenecks in this process and decompose for agility, you break up your big functional organization into smaller, 2-pizza teams. As you introduce microservices owned by these teams, you&#39;ve now removed bottlenecks in developing the solution but not testing and releasing it.

In a product-based delivery environment, self-service tools and automation enable these DevOps team to own, and manage their own release process. Creating ownership from idea to operation and back. You can see how teams would be able to move much more quickly is this type of environment compared to the first one.

![_config.yml]({{ site.baseurl }}/images/2020-5-04.Picture3.png)

Now that you have smaller teams, focused on a smaller scope via microservices, we have a simplified environment. Through automation, we can build and automate security, making the development team a part of your security team.

We can then provide security of the pipeline as well as security in the pipeline with things like artifact validation and static code analysis.

And with open source tools like Cloud Custodian, we can provide built-in, constantly reinforcing guardrails that allow teams to move quickly while following the rules you define.

**Summary**

Customers are building modern applications by changing their people, process, and technology so they can innovate faster and more frequently and bring those innovations to market faster, all while reducing costs and building more reliable applications.

We truly are witnessing a paradigm shift, and it&#39;s driven by customers working backwards from what they need to do to win in the market.

Businesses want to win more customers ,to win customers they need to build better products and to release features faster which requires faster and more frequent experimentation and innovation. They need the ability to focus on differentiating business logic and to decouple software for speed and safety.

We no longer live in a world with a single database or architectural option. AWS is providing ways for customers to shrink the scope, offload the undifferentiated pieces, choose the right tool for the job and automate everything. By doing so, you can build modern applications that allow you to win customers.

Go build, build modern, cheers!
