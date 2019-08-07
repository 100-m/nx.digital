## IMPRESS Architecture at a glance
### Impress is a cloud solution
IMPRESS is a cloud based product implementing best practices in term of architecture and security. The platform rely on world-class software as services: AWS, Auth0, Firebase, Github and Zeit.

One key to have a secure architecture is to have a comprehensive system, here is our system's schema:

<img style="width: calc(100% + 400px);margin-left: -400px;" src="/img/impress-architecture.png" />

1] **Users** can access the IMPRESS application via a [https://*.nx.digital](#) URL, ZEIT is a content delivery network that serves the application shell efficiently worldwide.

2] Once the application is loaded, users can connect via the Auth0 API to retrieve an identity token (JWT).

3] This token is valid for 1h by default and is then used to retrieve:
  - Financial data files on our AWS filesystem
  - Factsheet on-demand on AWS lambda
  - Real-time private data on Firebase

**Developers** can connect to our AWS filesystem and computing EC2 instances via SSH, with a dedicated user, using RSA keypairs hosted on Github.

**Administrators** can connect to our AWS filesystem EC2 instance (surface.nx.digital) via SFTP, with a dedicated user, using RSA keypairs hosted on Github. They have access to raw Financial data in read/write as well as a golden copy and application data in read only.



### Impress user roles include application users, developers and administrators

## A few principles that help secure our solution by design
  ### We use SSH keys to authenticate access to our code and our servers
     - Why protect access with passwords are a bad habit ?
     - How we Create / Read / Update or Delete our Keys
     - Storage & key management
     - SSH keys usage (Server access, Protecting codebase access).
  ### We have a decentralized vision of security.
  ### We have a fine control over authorization and use a principle of Least Privilege

## How we designed a secure application and are keeping it that way
  ### Users are managed using a dedicated 3rd party SaaS (Auth0)
  ### We ensure auditability through a comprehensive logging system.
    - Log Policy, Access and Analyze
  ### Application monitoring through dedicated web interface
  ### Application administration with the dedicated web dashboard
  ### How we secure the access to our servers
    - Updates & Security
    - SSH Key
    - User Management
    - Access Via Administration Console
  ### [COMMUNICATION & NOTIFICATIONS SECURITY] The different way to receive information from our applications
    - Mail / Slack
  ### Ensuring Business Continuity

## How we set up a secure & OS agnostic software factory in a public cloud environment
  ### [user management] Users are managed using team services or ssh keys
  ### [Software and Infrastructure testing] How we test Software and Infrastructure
    - Vulnerability Scanner
    - Penetration Test
    - Secure coding & Codebase Security Audit
  ### Due diligence before using 3rd Party Software as a Service
  ### [ADMINISTRATION]
  ### [Local Machine Security] We ensure security of our local machines
    - Password protection
    - Encryption
    - Antivirus
    - Updates
    - Remote deactivation (?)
  ### [Users Training] Training our team according to last security standards
    - ISO XXXX
  ### [Network Security]
  ### [COMMUNICATION & NOTIFICATIONS SECURITY] The different way to receive information from our applications
    - Slack notification
    - Email
  ### [INFORMATION MANAGEMENT AND CONFIDENTIALITY] Ensuring information management and confidentiality

## How we guarantee your data security and privacy
  ### [PERMISSIONING] We define finely what tasks users can perform and what features users can access
  ### [Data is encrypted at rest and in transit] We encrypt all our transiting data
    - In Transit
    - At Rest
    - Additional Encryption
  ### [Data Location & Privacy Shield]
  ### [GDPR] Our key steps to ensure GDPR compliance
  ### [DATACENTER PHYSICAL SECURITY] How we secure physically our data
  ### [DISCARDING DATABASE ?]
  ### [DATA ACCESS ADMIN ?]
  ### [BACK UP AND RECOVERY]
  ### [REVERSIBILITY]
## F.A.Q.
    - how do you handle employees leaving the company ?
    - how do you handle loss of a device ?
    - how do you impose password policy ?
