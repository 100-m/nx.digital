# Architecture Overview

## Impress Architecture at a glance

Impress is a cloud-based product implementing best practices in terms of architecture and security. The platform relies on world-class software as services: AWS, Auth0, Github and Vercel.

One key to have a secure architecture is to have a comprehensive system. Here is our system's schema:

![Architecture](/doc/img/architecture_detailled_view.png)

## Relying on best-in-class third party provider

Impress leverages third party providers for content delivery, user authentication, real-time data storage, as well as server hosting. We chose well-establish best-in-class providers that we review regularly.

### FrontEnd (Vercel)

We chose Vercel as Impress Content Delivery Network. Vercel is a content delivery network that serves the application shell efficiently worldwide. Other companies like Netflix or GitHub rely on Vercel.

Content delivery network (CDN) are systems of distributed servers (network) that deliver pages and other web content to a user, based on the geographic locations of the user, the origin of the webpage and the content delivery server. It is effective in speeding up the delivery of content of websites with high traffic and websites that have a global reach.

The frontend is composed of the following modules:
  - Digital Application: Digital Reporting, Client Reporting
  - Embedded Widgets
  - HTML/PDF
  - Client Portal

## Power Point

NeoXm features a PowerPoint add-in that allows for simple and quick connection to the GraphQL API in a secure manner, making it possible to seamlessly link PowerPoint objects with high-quality data curated by Impress

### Authentication (Auth0)

User authentication is the verification of an active human-to-machine transfer of credentials required for confirmation of a user's authenticity.

We chose Auth0 to provide Impress authentication. Auth0 provides authentication and authorization as a service. It provides crucial features like Single Sign-On, Multi-Factor Authentication, User Management, and Passwordless Authentication. Companies like Atlassian, Nvidia or Mozilla rely on Auth0.

### Data Reporting Services (AWS Lambda)

Impress application is served using a web server. Impress servers are hosted in a cloud. Services are made available to customers on-demand via the Internet. Rather than being provided by a single server or virtual server, Impress services are provided by multiple connected servers that comprise a cloud.

We chose Amazon Web Service to be our default Cloud provider. Amazon operates in over 50 availability zones. Our servers are located in Continental Europe, except when specified otherwise.

The brick ata Reporting Services contains the following features:
- Pipeline: E.T.L. which will transform the raw data to put it in the format of our data model
- GraphQL DataReport API: The GraphQL DataReport API is a well-documented, secure, and modular application programming interface, designed to efficiently retrieve functional data while offering maximum flexibility to both developers and business users.

The Pipeline component could send data to the Brick Data Realtime.
This communication is not mandatory.

### Realtime Services (AWS)

Impress features a Scheduler to manage various processes such as Data Integration, pulling from SFTP, and user actions.

For managing workflows, a real-time database is essential.

The Impress Real-Time Database, integrated within a PostgreSQL environment, enables the storage and real-time synchronization of data among Impress users. This capability ensures seamless collaboration.

We've chosen Hasura + PostgreSQL for our real-time database solution. Hasura facilitates immediate data synchronization, ensuring that any updates are swiftly propagated to all connected devices within milliseconds.


### Document Creation Services (AWS Lambda)

Serverless computing is a cloud-computing execution model in which the cloud provider runs the server, and dynamically manages the allocation of machine resources. Serverless computing allows impress to scale instantly with its user needs.

We chose Amazon Lambdas for our serverless computing platform.

This brick is used to generate reporting (PPT / PDF)

## Storage (AWS)

File System will contain the Impress file system (Raw Data received, application data, generated reports)

## Impress user roles

Three big types of user roles exist in Impress: the application users who interact with the application using the web GUI, the developers who write the software and deploy it on the servers, and the administrators who administrate the server and the data.

**Application Users** can access the Impress application via a [https://\*.nx.digital](#) URL. Once the application is loaded, users authenticate. The authentication relies on the Auth0 API to retrieve an identity token (JWT). This token is valid for 1h (by default) and is then used:

- to retrieve financial data files from our AWS server filesystems.
- to create factsheet on-demand using AWS lambdas.

**Users Administrator** can connect to Auth0 web interface and manage the account and permission of application users as well as the other users administrators.

**Data Administrators** can connect to our AWS filesystem EC2 instance (surface.nx.digital) via SFTP, with a dedicated user, using RSA keypairs hosted on Auth0 or Github. They have access to raw financial data in read/write as well as a golden copy and application data in read-only.

**Developers** can connect to our AWS filesystem and computing EC2 instances via SSH, with a dedicated user, using RSA keypairs hosted on Github.

# Security principles

## Decentralization

In an "on-premises" security paradigm, most resources and storage are centralized on a network that is a single point of entry. The network has to be protected behind firewalls in a private network. Access to this network is usually very tightly controlled as malicious access can compromise the entire network.

<!-- <img style="width: 100%;" src="/doc/img/on-premises-security.png" /> -->

We operate in a "cloud paradigm" with a decentralized vision of security: sensitive data and code can be located on multiple networks that are accessible on the Web. In that case, each application is responsible for its security. Access to an application or a resource is protected through authentication. Each user is given a "key" (an SSH key or a token) that gives him/her some rights. Information is exchanged between applications on the public web through encrypted protocols to guarantee confidentiality.

In a "cloud paradigm", there is no such thing as a local network to protect. The only local resource is the local machine of the user. This is why all our machines have an encrypted disk and are password protected.

<!-- <img style="width: 100%;" src="/doc/img/cloud-security.png" /> -->

## Principle of Least Privilege

This principle means giving a user account or process only those privileges which are essential to perform its intended function. For example, developers only access customers' data during the development phase. After that, we remove their access.

### How it works in NeoXam?

Only cloud administrators have access to AWS, Vercel or Auth0 console.
Users administrators accounts are created for the client and dedicated developers during the implementation phase. At any time, developer access can be removed by users administrator, at least one access will be needed by the support team to check on the data or users.

## SSH keys

**SSH**, or secure shell, is a secure protocol and the most common way of safely administering remote servers. Using several encryption technologies, SSH provides a mechanism for establishing a cryptographically secured connection between two parties, authenticating each side to the other, and passing commands and output back and forth.

Impress solution and software factory uses public-key cryptography to encrypt and decrypt login information to the servers. Public-key cryptography uses a public key to encrypt a piece of data, and then the recipient uses the private key to decrypt the data. The public and private keys are known as a key pair. Public-key cryptography enables you to securely access your instances using a private key instead of a password.

### Protect access with passwords is a bad habit:

- Passwords are generally, predictably, unavoidably weak
- Password expiration (without a strong password policy user increment their password or use the same on different websites).
- SSH keys are long and complex, far more than any password could be
- SSH keys don't get transmitted to the remote system
- SSH keys are composed of a passphrase and a private Keys.

### Storage & key management

At Neoxam, we fetch our clients’ public key from their GitHub account (https://github.com/USER.keys).
All our clients must have a GitHub account. If not, they must create one and send us their username to get their public keys automatically.
A script is launched every 5 minutes to synchronize the public key. Once the client revokes its public key, it will no longer exist on our server. Therefore, access is no longer available.
Your credentials and passphrase must remain confidential so that no one can modify or remove your public key. Our contract and trust are based on it.

### How to manage SSH Keys ?

- [Create a SSH Key](https://help.github.com/en/enterprise/2.16/user/articles/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent)
- [Read / update / delete : Directly from your github account](https://help.github.com/en/articles/adding-a-new-ssh-key-to-your-github-account)

### Usage

- Codebase Access
- Connect to our server (Surface / Abyss)
  To access our server, you need to be whitelisted, we authorize SSH public keys linked to your GitHub account. You can connect with the corresponding private keys.

## Two-factor authentication

Two-factor authentication is an additional security layer for your company that helps to address the vulnerability of a standard password-only approach. The idea behind it is, once you enter your password or passphrase, you will receive either an SMS or email that contains a code. This code has to be entered by the user in a specific field to make sure that the account has not been hacked.

Two-factor authentication is required on all GitHub and Auth0 admin accounts.

# Cloud application security

## User management

Users are managed using a dedicated third party SaaS (Auth0).
Auth0 is an authentication and authorization management platform providing customers with a User Interface to manage the users themselves:

- Create / Delete
- Define Roles
- Track Connections in the app

A dedicated Auth0 account and user database are created for each customer.

## Auditability

We ensure auditability through a comprehensive logging system.
You have access to a log directory exposing all SSH connections and all API Authorization logs. You also have access to detailed authentication information and management interfaces on a dedicated web interface on the [Auth0 Platform](https://manage.auth0.com).
With an additional cost, we can centralize and stream logs to an external service (eg: [Datadog](https://www.datadoghq.com/)) or to the client's log centralization tool. (eg: [Kibana](https://www.elastic.co/products/kibana)). We can also set up automatic mailing to any behavior rules.

## Application monitoring

We can monitor all our applications through a web dashboard:

- Amazon CloudWatch is a monitoring and observability service, it provides you with data and actionable insights to monitor your applications, respond to system-wide performance changes, optimize resource utilization, and get a unified view of operational health.
- AWS dashboard provides a lot of statistics to monitor database usage.
- Auth0 provides a login dashboard global and by users.
- Vercel provides the logs of the application invocation.

## Application administration

All our providers have administration tools. Access to these services is restricted to NeoXam cloud admin.
Except for Auth0, where each customer is admin of his account.

## Secured Server Access

Although Server is hosted in the cloud, our team follows attentively the security updates.
2 kinds of profiles are set up on our servers:

- Customers / Data Provider: Only SFTP access to a specific folder
- Development Teams: SSH access to logs and data according to user rights.
- User Management
- Access Via Administration Console

## Communication & Notifications Security

Impress solutions use couple mediums of communication:

- SMS notification: based on [Twilio](https://www.twilio.com/).
- Email notification: based on [Sendgrid](https://sendgrid.com/).
- Slack notification: based on the API Rest.

These mediums are secured by API tokens stored on secret environment variable on AWS Lambdas.

## Ensuring Business Continuity

Business continuity plan covers the following risks:
- delivery defect
- issues with our third-party services

There are 2 channels of communication to reach us, a dedicated slack channel and a support email address *contact@100m.io*.

The support team is available from Monday to Friday from 9:00 am to 7:00 pm, within a maximum of 2 hours.

In the case of a major incident, each team member is trained to apply our Recovery plan. The recovery plan execution takes 1 day.

# Development process security

## Administrator Management

Users Administrators are managed using a dedicated third party SaaS (Auth0).
Data Administrators are managed using a dedicated third party SaaS (Auth0 or Github) and a synchronization script. They have access to servers with an SSH keypair, if one key or user is added or deleted, the script will spread the authorization on our servers.  
We use the same principle to grant/remove access to Developers in our team. In addition, Developers have access to client data only if their email is authorized as Users Administrator.

## Software and Infrastructure testing

To ensure security, several types of tests are performed:

### Vulnerability Scanner

We limit drastically our dependencies to services SDK or libraries and these dependencies are scanned by GitHub for vulnerability and security patches.

### Penetration Test

External audit teams are testing our application and servers for vulnerability. We allow running blackbox and greybox test, for this we notify third party services that a penetration test will run and we give a set of access to the audit team. We don't give access to the source code of the application for intellectual property reasons.

Blackbox tests simulate an attacker without access to the platform. Usually all OWASP vulnerabilities are tested as well as targeted attacks.

Greybox tests simulate an attacker with a user or admin login, trying to extend data out of his scope or following a corrupted link.

If issues are found after a test, we commit to correct any issues with a medium risk or medium business impact within a week and deploy the patch for all our cloud clients.

### Secure coding & Codebase Security Audit

All of our work is validated by a peer via a pull requests. In other words, before pushing and deploying our code, someone must review it. If the code that was modified or added only affects the configuration of the application, any member of the team can review it. For important modification which affects authentication or any other sensitive parts of the code, it must be reviewed by the person with the highest level of seniority.

In addition, we assess, each year or on-demand, the security of our system's physical configuration, environment, and user practices.

## Users Training

All Security specialized companies report that Human is the most efficient shield against cyber-attacks. And this is also the main weakness as we keep seeing in a phishing campaign for instance.
We are renewing our security awareness effort to protect our assets.
This Awareness program is mandatory for all employees and contractors. It consists in to passing a test on security after watching training videos.
The program is renewed every year.

## 3rd Party Software

Due diligence before using 3rd Party Software as a Service.
Several points are checked before to add a new 3rd Party Software as a Service:

- Security guarantee
- Privacy
- Solid company with a strong presence
- User reviews

And finally, we take care to limit our dependencies to these services, to be able to change it quickly and simply.

## Administration

Only the cloud Administrator can access the admin panel of our cloud Services. Each member has his credentials to use a service. The cloud Administrators grant users according to their project.

## Local Machine Security

NeoXam has a strong password policy for the local:

- password changed once every 3 months
- All password must be saved in a password manager

We stay vigilant with local machines, to prevent any lake of data :

- Hard disk encryption
- availability to erase remotely all the data that is on the hard disk
- Updated Operating System and Antivirus Software.

# Data storage security

## Permissioning

Any access to data or application features is subject to permission that is defined in the user's Auth0 profile. Each user can be set a funds/shares list that he can access. On each funds/shares, a publication date can limit the information exposed to the users before the factsheet is release, for legal reasons.

Financial Data is delivered to the application via the Impress API, secured by an authentication API.

Application configuration secured by their built-in authentication mechanism and the Auth0 token.

## Data encryption

With Impress, like with any cloud solution, data is exchanged over the public Web. Impress implement state-of-the-art data encryption in-transit to guarantee the confidentiality of its content:

- data exchanged between the application user and the application server is encrypted with the HTTPS protocol.
- data exchanged between developers and a server is encrypted with the SSH protocol
- data exchanged between administrators and a server is encrypted with the SFPT protocol.

Impress also implements "Data At Rest" encryption to prevents data visibility in the event of its unauthorized access or theft.

## Data Location

All our AWS server are hosted in Continental Europe.
Our content delivery network (Vercel) that serves the application, choose the best area to deploy the application. The best area is defined by the closest region of the user.

## G.D.P.R.

On 27 April 2016, the European Parliament and the European Council adopted legislation known as General Data Protection Regulation (GDPR), which becames applicable on 25 May 2018. This legislation replaces the European Privacy Directive 95/46/EC.

GDPR is intended to unify and strengthen data privacy for individuals located in the European Union (EU). GDPR also extends (to some extent) the applicability of EU data privacy legislation to non-EU companies which store or process data on EU residents, and increases the fines that may be levied against companies which are responsible for preventing breaches of personal data or which violate GDPR requirements.

The NeoXam Impress software along with its third party software provider is GDPR compliant.

Amazon AWS, which hosts the solution, respects industry regulations, government legislation and is [GDPR compliant](https://aws.amazon.com/blogs/security/all-aws-services-gdpr-ready/). AWS has in place effective technical and organizational measures for data processors to secure personal data in accordance with the GDPR, and specifically enables encryption of personal data; the ability to ensure the ongoing confidentiality, integrity, availability, and resilience of processing systems and services; the ability to restore the availability and access to personal data in a timely manner in the event of a physical or technical incident.

Per GDPR, Auth0 is a [Data Processor](https://auth0.com/docs/compliance/gdpr). It enables Impress to protect user consent, secure user data, allow data portability, implement data minimization and right to access, correct, and erase data.


## Datacenter Physical Security

Impress solution is cloud solution, all our datacenter are hosted in the cloud:

- [AWS physical Security](https://aws.amazon.com/compliance/data-center/controls/?nc1=h_ls#Physical_Access)
- [Google physical Security](https://www.google.com/about/datacenters/inside/data-security/index.html)
- Vercel and Auth0 are using AWS.

## Data Access Admin

Only the cloud administrator can administer your differents services.
His/her duties are to manage the rights of the team member according to current projects of the team.

## Backup and Recovery

Even if our cloud providers are reliable, we have prepared a **recovery procedure** to rollback data and/or our application to a previous state.

For our servers & databases:

- Daily data backup (AWS)
- Weekly filesystem snapshots
- Archive are conserved 2 years before removing.

For our deployments:

- We keep all previous version of the application after a new delivery

## Disaster Recovery Plan

**NeoXam**: Available on-demand via [contact@nx.digital](mailto:contact@nx.digital)

**AWS**: [Amazon Disaster recovery plan](https://aws.amazon.com/compliance/data-center/controls/?nc1=h_ls#Business_Continuity_.26_Disaster_Recovery)

**Auth0**: [Auth0 Disaster recovery plan](https://auth0.com/availability-trust)

## Reversibility

In the event of termination of the contractual relationship, whatever the cause, the following tasks will be performed within 10 days:

- return to the customer  (or possibly destroy, at the Customer's option) all data
- Decommissioning all cloud services (Server and Database)
- Slack Channel and Trello board will be closed.
- Remove DNS
- Decommissioning all our thrid-party services (Auth0...)
- Backups will be conserved 1 year, after this delay, backups are removed.

# F.A.Q.

## How do you handle employees leaving the company?

Each developer has a **@neoxam.com** email and corresponding accesses to GitHub, Auth0, AWS, and Vercel.
If a developer quits the job, all that has to be done is:

- remove the developer’s email from LDAP
- remove the developer’s access to GitHub
- remove the developer’s access to AWS
- remove the developer’s access to Auth0
- remove the developer’s access to Vercel

## How do you handle the loss of a device?

- Erase remotely the developer’s device
- Remove SSH Keys from Github account (Server access are automatically synced)
- Reset all accesses to third parties.
