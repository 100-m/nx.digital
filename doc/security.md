# IMPRESS Architecture at a glance
## Impress is a cloud solution
IMPRESS is a cloud based product implementing best practices in term of architecture and security. The platform relies on world-class software as services: AWS, Auth0, Firebase, Github and Zeit.

One key to have a secure architecture is to have a comprehensive system, here is our system's schema:

<img style="width: calc(100% + 400px);margin-left: -400px;" src="/img/impress-architecture.png" />

## Relying on best-in-class 3rd party provider
Impress leverages 3rd party providers for content delivery, user authentication, real time data storage, as well as server hosting. We chose well-establish best-in-class providers that we review on a regular basis.

### Content Delivery
Content delivery network (CDN) are systems of distributed servers (network) that deliver pages and other web content to a user, based on the geographic locations of the user, the origin of the webpage and the content delivery server. It is effective in speeding the delivery of content of websites with high traffic and websites that have global reach.

We chose ZEIT as Impress Content Delivery Network. ZEIT is a content delivery network that serves the application shell efficiently worldwide. Other companies like Netflix or GitHub rely on ZEIT.

### User Authentication
User authentication is the verification of an active human-to-machine transfer of credentials required for confirmation of a user's authenticity.

We chose Auth0 to provide Impress authentication. Auth0 provides authentication and authorization as a service. It provides crucial features like Single Sign On, Multi Factor Authentication, User Management and Passwordless Authentication. Companies like Atlassian, Nvidia or Mozilla rely on Auth0.

### Real time data storage
Impress real time Database is a cloud-hosted NoSQL database that lets you store and sync data between Impress users in real time. Realtime syncing makes it easy for our users to collaborate with one another.

We chose Google Firebase to be our real time database. The Firebase Realtime Database uses data synchronization—every time data changes, any connected device receives that update within milliseconds.

### Cloud Server Hosting
Impress application is served using a web server. Impress servers are hosted in a could. Services are made available to customers on demand via the Internet. Rather than being provided by a single server or virtual server, Impress services are provided by multiple connected servers that comprise a cloud.

We chose Amazon Web Service to be our default Cloud provider. Amazon operates in over 50 availability zones. Our servers are located in Frankfurt, except when specified otherwise.

### Serverless Computing Provider
Serverless computing is a cloud-computing execution model in which the cloud provider runs the server, and dynamically manages the allocation of machine resources. Serverless computing allows impress to scale instantly with its user needs.

We chose Amazon Lambdas for our serverless computing platform.

## Impress user roles
Three big types of user roles exist in Impress: the application users who interact with the application using the web GUI, the developers who write the software and deploy it on the servers, and the administrators who administrate the server and the data.

**Application Users** can access the IMPRESS application via a [https://*.nx.digital](#) URL. Once the application is loaded, users authenticate. The authentication relies on the Auth0 API to retrieve an identity token (JWT). This token is valid for 1h (by default) and is then used:
  - to retrieve financial data files from our AWS server filesystems.
  - to create factsheet on-demand using AWS lambdas.
  - access real-time private data on Firebase.

**Developers** can connect to our AWS filesystem and computing EC2 instances via SSH, with a dedicated user, using RSA keypairs hosted on Github.

**Administrators** can connect to our AWS filesystem EC2 instance (surface.nx.digital) via SFTP, with a dedicated user, using RSA keypairs hosted on Github. They have access to raw Financial data in read/write as well as a golden copy and application data in read only. He manages the rights granted to each person on the team. (**Cloud Administror**)

# A few principles that help secure our solution by design

## Decentralized security.
In an 'on premises' security paradigm, most resources and storage are centralized on a network that is a single point of entry. The network has to be protected behind firewalls in a private network. Access to this network is usually very tightly controlled as a malicious access can compromise the entire network.
<img style="width: calc(50% + 400px);" src="/img/on-premises-security.png" />

We operate in a 'cloud paradigm' with a decentralized vision of security: sensitive data and code can be located on multiple networks that are accessible on the Web. In that case, each application is responsible for its security. Access to an application or a resource is protected through authentication. Each user is given a 'key' (a SSH key or a token) that gives him some rights. Information is exchanged between applications on the public web through encrypted protocols to guarantee confidentiality.

In a 'cloud paradigm', there is not such thing as a local network to protect. The only local resource is the local machine of the user. This is why all our machine have an encrypted disk and are password protected.
<img style="width: calc(50% + 400px);" src="/img/cloud-security.png" />


## Principle of Least Privilege
The principle means giving a user account or process only those privileges which are essential to perform its intended function. For example, developers only access to customers data during the development phase. After that we remove these access.

### How it works in NeoXam?
We create access only on demands according to the project. The cloud admin manager grant or remove access according to the team allocation. That's means after the development phases only the support team can access to the customer application.

## SSH keys
**SSH**, or secure shell, is a secure protocol and the most common way of safely administering remote servers. Using a number of encryption technologies, SSH provides a mechanism for establishing a cryptographically secured connection between two parties, authenticating each side to the other, and passing commands and output back and forth.

Impress solution and software factory uses public–key cryptography to encrypt and decrypt login information to the servers. Public–key cryptography uses a public key to encrypt a piece of data, and then the recipient uses the private key to decrypt the data. The public and private keys are known as a key pair. Public-key cryptography enables you to securely access your instances using a private key instead of a password.


#### Protect access with passwords is a bad habit:
  - Passwords are generally, predictably, unavoidably weak
  - Password expiration (without a strong password policy user increment their password or use the same on different website).
  - SSH keys are long and complex, far more than any password could be
  - SSH keys don't get transmitted to the remote system
  - SSH Keys is composed of a passphrase and a private Keys.

#### Storage & key management
At Neoxam, we fetch our clients’ public key from their GitHub account (https://github.com/USER.keys).
All of our clients must have a GitHub account. If not, they must create one and send us their username in order to get their public keys automatically.
A script is launched every 5 minutes to synchronize the public key. Once the client revokes his public key, it will no longer exist on our server. Therefore, the access is no longer available.
Your credentials and passphrase must remain confidential so that no one can modify or remove your public key. Our contract and trust is based on it.

***@Val Customers github account is not a good solution to grant acess to our server.***

#### How we Create / Read / Update or Delete our Keys
- [Create a SSH Key](https://help.github.com/en/enterprise/2.16/user/articles/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent)
- [Read / update / delete : Directly from your github account](https://help.github.com/en/articles/adding-a-new-ssh-key-to-your-github-account)

#### Usage
- Codebase Access
- Connect to our server (Surface / Abyss)
To acess to our server, you need to be whitelisted, we add one of the SSH private key linked to your github account the server or specific folder required.

## Two-factor authentication
Two-factor authentication is an additional security layer for your company that helps addressing the vulnerability of a standard password-only approach. The idea behind it is, once you enter your password or passphrase, you will receive either an SMS or email that contains a code. This code has to be entered by the user in a specific field to make sure that the account has not been hacked.

Two-factor authentication are enabled on all our accounts.

# How we designed a secure application and are keeping it that way
## Users management
Users are managed using a dedicated 3rd party SaaS (Auth0).
Auth0 is an authentication and authorization management platform. We manage identity as a Service.
customers have the ability to manage the users by themself:
  - Create / Delete
  - Define the users right (Even in NeoXam teams.)
  - Track connections in the app

1 Auth0 account is create by customer for privacy constraints

## Auditability
We ensure auditability through a comprehensive logging system.
You have access to a log directory exposing all SSH connections and all API Authorization logs. You also have access to detailed authentication information and management interfaces on a dedicated web interface on the [Auth0 Platform](https://manage.auth0.com).
With an additional cost, we can centralise and stream logs to an external service (eg: [Datadog](https://www.datadoghq.com/)) or to the client log centralisation tool. (eg: [Kibana](https://www.elastic.co/products/kibana)). We can also setup automatic mailing to any behaviour rules.

## Application monitoring
We can monitor all our applications through web dashboard:
  -  Amazon CloudWatch is a monitoring and observability service, it provides you with data and actionable insights to monitor your applications, respond to system-wide performance changes, optimize resource utilization, and get a unified view of operational health.
  - Firebase give us a lot statistics to monitor database usage.
  - Auth0 provides a login dashboard global and by user.
  - Zeit provides the logs of the application invokation.

## Application administration
All our providers have administration tools. Access to theses services are restricted to NeoXam cloud admin.
Except Auth0, where each customer is admin of his account.

## Secured Server Access
Although Server is hosted in the cloud, our team follow attentive to the security updates.
2 kinds of profile are setup on our servers:
  - Customers / Data Provider: Only sftp acess to a specific folder
  - Development Teams: SSH connection + data according right of user (**Today, Dev connect as root on Surface/Abyss**)
The identification is made through the SSH keys.

  - User Management
  - Access Via Administration Console

## Communication & Notifications Security
  The different way to receive information from our applications
  - Mail / Slack

## Ensuring Business Continuity
React to incident:
There is 2 channels of communication to reach us, a dedicated slack channel and a support email address **contact@100m.io**.
The following mechanisms are available to mitigate incidents:
- A command to revert to any daily backup < 30j
- A command to logout currently connected user and resynchronize access keys or revoke all accesses.

# How we set up a secure & OS agnostic software factory in a public cloud environment
## User Management
A script is launched every 5 minutes to synchronize the public key. The script get all the public keys of the NeoXam teams and added them to our differents servers.
If one keys or user is deleted, the script will spread the update on all our servers. Therefore, the access is no longer available.
Moreover, each keys is secured with a strong passphrase.

## Software and Infrastructure testing
To ensure security, several types of tests are performed:

### Vulnerability Scanner
  ***@Val: Does Github provide this kind of tests on our codebase? I know that NeoXam uses Sonar in other products***

### Penetration Test
  ***@Val: Describe in few word the last test procedure.***

### Secure coding & Codebase Security Audit
All of our work is based on pull requests. In other words, before pushing and deploying our code, someone must review it. If the code that was modified or added only affects the configuration of the application, any member of the team can review it. For important modification which affects authentication or any other sensible parts of the code, it must be reviewed by the person with the highest level of seniority.

In addition, we assess, each year or on demand, the security of our system's physical configuration, environment and user practices.

## Users Training
All Security specialized companies report that the Human is the most efficient shield against cyber-attacks. And this is also the main weakness as we keep seeing in phishing campaign for instance.
We are renewing our security awareness effort to protect our asset.
This Awareness program is mandatory for all employees and contractors, and consist to pass a test of security after watching videos.
The program is renewed every years.

## 3rd Party Software
Due diligence before using 3rd Party Software as a Service.
Severals points are checked before to add a new 3rd Party Software as a Service:
- Security guarantee
- Privacy
- Solid company with a strong presence
- User reviews

And finally we take care to limit our dependencies to this services, in order to be able to change it quickly and simply
***@VAL could you check how how we do the due diligence***

## Administration
Only the cloud Administror can acess to the admin panel of our cloud Services. Each member have his own credentials to use a service. The cloud Administror grant users according to their project.


## Local Machine Security
NeoXam has a strong password policy for the local:
- password changed once every 3 months
- All password must be saved in a password manager

We stay vigilant with local machines, to prevent any lake of data :
- Hard disk encryption
- availability to erase remotely all the data that is on the hard disk
- Updated Operating System and Antivirus Software.

## Network Security
  According to our architecture, network security is managed by restricting physical access to our servers.

## Communication & Notifications Security
Impress solutions uses two medium of communication:
 - Slack notification: based on the API Rest.
 - Email is based on [sendgrid](https://sendgrid.com/)

This both medium are secured by using a unique token between Empress and the service.

## Information Management and Confidentiality
Ensuring information management and confidentiality

# How we guarantee your data security and privacy

## Permissioning
Any access to data or application features is subject to a permission that is defined in the user Auth0 profile.

Data is delivered to the application either directly through Firebase or through the Impress APIs. Both mechanism are protected by the authentication service.

Firebase provides a built-in Auth0 connection and built in authentication mechanism.

Impress API, built in Node.js, provides *XXXXXXX complete*

## Data encryption
With Impress, like with any cloud solution, data is exchanged over the public Web. Impress implement state-of-the-art data encryption in-transit to guarantee the confidentiality of its content:
  - data exchanged between the application user and the application server is encrypted with the HTTPS protocol.
  - data exchanged between developers and a server is encrypted with the SSH protocol
  - data exchanged between administrators and a server is encrypted with the SFPT protocol.

Impress also implements 'Data At Rest' encryption to prevents data visibility in the event of its unauthorized access or theft.

## Data Location
All our AWS server and our Firebase database are hosted in Continental Europe (Frankfurt)
Our content delivery network (Zeit) that serves the application, choose the best area to deploy the application. The best area is defined by the closest region of the user.

## G.D.P.R.
On 27 April 2016, the European Parliament and the European Council adopted legislation known as General Data Protection Regulation (GDPR), which becomes enforceable 25 May 2018. This legislation replaces European Privacy Directive 95/46/EC.

GDPR is intended to unify and strengthen data privacy for individuals located in the European Union (EU). GDPR also extends the applicability of EU data privacy legislation to non-EU companies who store or process data on EU residents and increases the fines that may be levied against companies who are responsible for preventing breaches of personal data or who violate GDPR requirements.

The NeoXam Impress software along with its 3rd party software provider is GDPR compliant.

Amazon AWS, which hosts the solution, respects industry regulations, government legislation and is [GDPR compliant](https://aws.amazon.com/blogs/security/all-aws-services-gdpr-ready/). AWS has in place effective technical and organizational measures for data processors to secure personal data in accordance with the GDPR, and specifically enables encryption of personal data; the ability to ensure the ongoing confidentiality, integrity, availability, and resilience of processing systems and services; the ability to restore the availability and access to personal data in a timely manner in the event of a physical or technical incident.

Per GDPR, Auth0 is a [Data Processor](https://auth0.com/docs/compliance/gdpr). It enables Impress to protect user consent, secure user data, allow data portability, implement data minimization and right to access, correct, and erase data.

As far as Google Firebase is concerned, from a GRPD perspective, Google is generally seen a data processor and processes personal data on behalf the users. Firebase terms include [Data Processing and Security Terms for all Firebase services](https://firebase.google.com/terms/data-processing-term). Firebase allows Impress to be GDPR compliant.

## Datacenter Physical Security
Impress solution is cloud solution, all our datacenter are hosted in the cloud:
- [AWS pysical Security](https://aws.amazon.com/compliance/data-center/controls/?nc1=h_ls#Physical_Access)
- [Google pysical Security](https://www.google.com/about/datacenters/inside/data-security/index.html)
- Zeit and Auth0 are using AWS.


## Data Access Admin
Only the cloud admin manager can administer your differents services.
His duties are to manage the right of the team member according to according to current projects of the team.

## Discarding data
DISCARDING DATA ???
Amazon norm / decomission server

## Backup and Recovery
Even if our cloud providers are reliable, we have prepared a **recovery procedure** to rollback data and/or our application to a previous state.
For our databases:
- daily download to a AWS filesystems
- Weekly archive of the friday backup
- Archive are conserved 2 years before removing.
For our servers:
- Weekly snapshot are taken
- Data stored on our Server (Customer or custodian flux) are saved on a shared disks (redundancy)
For our deployments
- We keep at least *** N *** previous version after a new delivery

## Disaster Recovery Plan
### NeoXam
All the teams work on laptop, and can work from other place than our office. Moreover our application run outside of NeoXam networks.
### AWS
[Amazon Disaster recovery plan](https://aws.amazon.com/compliance/data-center/controls/?nc1=h_ls#Business_Continuity_.26_Disaster_Recovery)
### Auth0
[Auth0 Disaster recovery plan](https://auth0.com/availability-trust)
### Firebase
[Google Disaster recovery plan](https://cloud.google.com/solutions/dr-scenarios-planning-guide)

## Reversibility
Slack Channel and trello board will be closed.
Remove DNS will disable application.
Auth0 account will be closed.
Remove all customers data from our server and databases
All the backup will conserve XX days, after this delay, backups are removed.

# F.A.Q.
## Employees leaving the company
### how do you handle employees leaving the company ?
Each developer has an email that allows him to access to GitHub, Auth0, Firebase, AWS and Zeit.
If a developer quits the job, all that has to be done is:
- remove his email from LDAP
- remove his access to GitHub
- remove his access to AWS
- remove his access to firebase (for all databases)
- change firebase api key (for all projects)
- remove his access to Auth0 (all clients)
- remove his access to Zeit

## Loss of a device
### how do you handle loss of a device ?
- Erase remotely his device
- Remove his SSH Keys from Github account and Server
- Reset all his passwords.

## Password policy
### how do you impose password policy ?
- All passwords must be saved in an encrypted passwoard manager
- Use a Different Password on every site/service
- Not be identical to the previous **X** passwords.
- Not be transmitted in the clear or plaintext outside the secure locatio
- Always enable the two factor authentication
***confirm with IT****
