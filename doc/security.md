## Our setup guide<br>for a secure cloud

For NeoXam, the data management and securing is key.
In this guide, you will find information about the IT admin setup and exchanges and the tools we provide to guarantee security and availability of information.
As we operate in the world of finance, it is our duty to secure all of the data that is transferred to us even though it may consist of public data.

We dedicate a large portion of our time to conceive lean and secure system on all the processing chain from data management to client report.
There is two category of information is this guide, our setup and infrastructure and the best practices you must follow in order to ensure the security of your data. Please reach out if you would like to discuss security in more detail.

## Step 1:<br>Get the access

Once we start to work together, we will setup a private server for data storage and computing. To access this server you need to provide us with a github account to manage you SSH keys and ip addresses to whitelist your data servers. We provide you with access to a dedicated Auth0 authentication management interface.

### Secure your admin API Key:

At Neoxam, we fetch our clients’ public key from their github account. A script is launched every 5 minutes to synchronize the public and private key. Once the client revokes his public key, his private key will no longer exist on github. The access therefore is no longer available.

Your credentials and passphrase must remain confidential so that no one can modify or remove your private key, since all of our contract and trust is based on it.

### Two-factor Authentification:

Two-factor authentification is an additional security layer for your company that helps addressing the vulnerability of a standard password-only approach. The idea behind it is, once you enter your password or passphrase, you will receive either an sms or email that contains a code. This code has to be entered by the user in a specific field to make sure that the account has not been hacked.

Github gives you the choice of using two-factor authentification, which we advise you to do.

All we need to have is the client’s github account from which we can extract the public key. Hence the necessity to secure their github account. This will let them share files with us via a protocol (SFTP).

## Step 2:<br>Transfert data to a dedicated server

After getting access to our servers, you will be able from one whitelisted server with one of the SSH private key linked to your github account to transfer data through SFTP.

Once the raw data is transferred, our computing pipeline will assess data quality, aggregate data and serve application data through an authorization API.

The only service provider used by NeoXam for cloud data storage and serving is Amazon AWS which respect industry regulations, government legislation and is GDPR compliant.

## Step 3:<br>Monitor logs, data quality and backups

Directly after the setup you have access to a log directory exposing all SSH connections and all API Authorization logs. You also have access to detailed authentication information and management interfaces on a dedicated web interface on the [Auth0 Platform](https://manage.auth0.com).

With an additional cost, we can centralise and stream logs to an external service (eg: [Datadog](https://www.datadoghq.com/)) or to the client log centralisation tool. (eg: [Kibana](https://www.elastic.co/products/kibana)). We can also setup automatic mailing to any behaviour rules.

## Step 4:<br>React to incident

There is 2 channels of communication to reach us, a dedicated slack channel and a support email address **contact@100m.io**.

The following mechanisms are available to mitigate incidents:
- A command to revert to any daily backup < 30j
- A command to logout currently connected user and resynchronize access keys or revoke all accesses.

## FAQ

- Where is data stored?
  <div>On a dedicated AWS EC2 Instance.</div>
- Is data encrypted in transit? At rest?
  <div>Yes, Data is encryted in transit between server<>server with SSH/SFTP and between server<>client with HTTPS. Data is encryted at rest and disk encryption is handled by Amazon. Data can also be encrypted before transmission, this will need an encryption service.</div>
- How do you handle employees leaving the company?
  <div>Once we remove one of our developer or operational on our github organisation, all servers as well all source code becomes unaccessible.</div>
- How do you handle loss of a device?
  <div>Our devices are encrypted and reinitializable remotely. We ask to recreate the github API key and LDAP password after losing a device.</div>
- How do you impose password policy?
  <div>Password policy on our local machine is enforced by our LDAP and IT services. Password policy for the SSH Key is enforced by Github and we enforce two factor authentication to be ale to join the organization.</div>
- Where are security relevant validations done? (client or server)
  <div>Security validations are always done server side by dedicated service. Auth0 is our dedicated authentication provider, returning a token that will be handled by our authorization system to serve or not the requested application files according to the token validity and role.</div>
- How are security measures tested?
  <div>We perform security architecture review, restructuration and pentesting yearly. We also have clients running audit against our infrastructure.</div>

<!-- ## Links / Inspiration

- https://aws.amazon.com/security/
- https://auth0.com/security/ & https://assets.ctfassets.net/kbkgmx9upatd/2KxmM5BICQ4GKgeIwA0sKu/bee69c73669bfdeb26ca8e43df65be27/Auth0_Platform_Operations.pdf
- https://github.com/security & https://github.com/enterprise/security
- https://stripe.com/docs/security & https://stripe.com/docs/security/stripe
- https://www.algolia.com/doc/guides/security/security-best-practices/
- https://gdpr.algolia.com/gdpr-article-32
- https://www.bloomberg.com/professional/product/data-license/
- https://www.neoxam.com/data-protection-policy -->
