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


### Application Server

### Computation Lambdas

## Impress user roles
**Application Users** can access the IMPRESS application via a [https://*.nx.digital](#) URL. Once the application is loaded, users authenticate. The authentication relies on the Auth0 API to retrieve an identity token (JWT). This token is valid for 1h (by default) and is then used:
  - to retrieve financial data files from our AWS server filesystems.
  - to create factsheet on-demand using AWS lambdas.
  - access real-time private data on Firebase.

**Developers** can connect to our AWS filesystem and computing EC2 instances via SSH, with a dedicated user, using RSA keypairs hosted on Github.

**Administrators** can connect to our AWS filesystem EC2 instance (surface.nx.digital) via SFTP, with a dedicated user, using RSA keypairs hosted on Github. They have access to raw Financial data in read/write as well as a golden copy and application data in read only.

# A few principles that help secure our solution by design
## SSH keys
#### Protect access with passwords is a bad habit:
  - Passwords are generally, predictably, unavoidably weak
  - Password expiration (without a strong password policy user increment their password or use the same on different website).
  - SSH keys are long and complex, far more than any password could be
  - SSH keys don't get transmitted to the remote system
  - SSH Keys is composed of a passphrase and a private Keys.

#### Storage & key management
  At Neoxam, we fetch our clients’ public key from their GitHub account (https://github.com/USER.keys).
  All of our clients must have a GitHub account. If not, they must create one and send us their username in order to get their public keys automatically.
  A script is launched every 5 minutes to synchronize the public and private key. Once the client revokes his public key, it will no longer exist on our server. Therefore, the access is no longer available.
  Your credentials and passphrase must remain confidential so that no one can modify or remove your public key. Our contract and trust is based on it.
  #### How we Create / Read / Update or Delete our Keys
  - Create a key: https://help.github.com/en/enterprise/2.16/user/articles/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent
  - Read / update / delete : Directly from your github account.

#### [Server access, Protecting codebase access] Usage
- Connect to our server (Surface / Abyss)
- Acess to our codebase
To acess to our server, you need to be whitelisted, we add one of the SSH private key linked to your github account the server or specific folder required.

## Two-factor authentication
Two-factor authentication is an additional security layer for your company that helps addressing the vulnerability of a standard password-only approach. The idea behind it is, once you enter your password or passphrase, you will receive either an SMS or email that contains a code. This code has to be entered by the user in a specific field to make sure that the account has not been hacked.
Github gives you the choice of using two-factor authentication, which we advise you to do.
All we need to have is the client’s GitHub account from which we can extract the public key. Hence the necessity to secure their GitHub account. This will let them share files with us via a protocol (SFTP).

## Decentralized vision of security.
To be define.

## Principle of Least Privilege
The principle means giving a user account or process only those privileges which are essential to perform its intended function. For example, developers only access to customers data during the development phase. After that we remove these access.

# How we designed a secure application and are keeping it that way
## Users management
Users are managed using a dedicated 3rd party SaaS (Auth0).
Auth0 is an authentication and authorization management platform. We manage identity as a Service.
You have the ability to manage the users by yourself:
  - Create / Delete
  - Define the users right (Even in NeoXam teams.)
  - Track connections in the app


## Auditability
We ensure auditability through a comprehensive logging system.
You have access to a log directory exposing all SSH connections and all API Authorization logs. You also have access to detailed authentication information and management interfaces on a dedicated web interface on the [Auth0 Platform](https://manage.auth0.com).
With an additional cost, we can centralise and stream logs to an external service (eg: [Datadog](https://www.datadoghq.com/)) or to the client log centralisation tool. (eg: [Kibana](https://www.elastic.co/products/kibana)). We can also setup automatic mailing to any behaviour rules.

## Application monitoring
Application monitoring through dedicated web interface
NB: Aut0 dashboard / firebase dashboard / AWS dashboard / Zeit (+ Screenshot)
## Application administration
Application administration with the dedicated web dashboard
## Secured Server Access
  - Updates & Security
  - SSH Key
  - User Management
  - Access Via Administration Console

## [COMMUNICATION & NOTIFICATIONS SECURITY]
  The different way to receive information from our applications
  - Mail / Slack
## Ensuring Business Continuity
React to incident:
There is 2 channels of communication to reach us, a dedicated slack channel and a support email address **contact@100m.io**.
The following mechanisms are available to mitigate incidents:
- A command to revert to any daily backup < 30j
- A command to logout currently connected user and resynchronize access keys or revoke all accesses.

# How we set up a secure & OS agnostic software factory in a public cloud environment
## [user management]
Users are managed using team services or ssh keys

## [Software and Infrastructure testing]
How we test Software and Infrastructure:
  - Vulnerability Scanner
  - Penetration Test
  - Secure coding & Codebase Security Audit

## 3rd Party Software
Due diligence before using 3rd Party Software as a Service

## [ADMINISTRATION]
to be define

## [Local Machine Security] We ensure security of our local machines
 - Password protection
 - Encryption
 - Antivirus
 - Updates
 - Remote deactivation (?)

## [Users Training]
Training our team according to last security standards
 - ISO XXXX

## [Network Security]
  To be define

## [COMMUNICATION & NOTIFICATIONS SECURITY]
The different way to receive information from our applications
 - Slack notification
 - Email

## [INFORMATION MANAGEMENT AND CONFIDENTIALITY]
Ensuring information management and confidentiality

# How we guarantee your data security and privacy
## [PERMISSIONING]
We define finely what tasks users can perform and what features users can access
## [Data is encrypted at rest and in transit]
We encrypt all our transiting data
  - In Transit
  - At Rest
  - Additional Encryption

## [Data Location & Privacy Shield]
Date are located in Europe See XXXXX

## [GDPR] Our key steps to ensure GDPR compliance
The only service provider used by NeoXam for cloud data storage is Amazon AWS which respect industry regulations, government legislation and is GDPR compliant (https://aws.amazon.com/blogs/security/all-aws-services-gdpr-ready/). The same goes for Auth0 (https://auth0.com/docs/compliance/gdpr) and Firebase (https://firebase.google.com/support/privacy) which are also GDPR compliant.
Neoxam is GDPR compliant since we do not use personal data, we do not share our data and we stock our data in a way that it is safe from hacking.

## [DATACENTER PHYSICAL SECURITY]
How we secure physically our data.
...

## [DATA ACCESS ADMIN ?]
How to..

## [DISCARDING DATABASE ?]
DISCARDING DATABASE by using a static file...

## [BACK UP AND RECOVERY]
We stock our data in two different places: in AWS and in Firebase.
In AWS we push all the data that is sensible. Our server is configured in a way that it is backed up daily and weekly. This means that we can go either 1 day or 3 days back and fetch the back up that was made on this day, or instead go 2 weeks or 3 week back and fetch the data that was made on this week.
​
In firebase, the data is backed up on a daily basis. Firebase contains only the configuration of the application and the referential data of a fund.

## [REVERSIBILITY]
to be define

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

## Password policy
### how do you impose password policy ?
