## Architecture
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
