## NeoXam's secure setup in the cloud

For NeoXam, the data management and securing is key. As we operate in the world of finance, it is our duty to secure all of the data that is transferred to us. We dedicate a large portion of our time to conceive secure system on all the chain, even though it may consist of public data.

In this document, we discuss two major points: how we handle the security from our side (encrypt the data in transit, in rest, authentification ...), and the best practices you must follow in order to ensure the security of your data. Please reach out if you would like to discuss security in more detail.

<!-- ## How to minimize the probability of your data being leaked -->
## Step 1:<br>Get the access

We need your github account.
Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.

### Secure your admin API Key:

At Neoxam, we fetch our clients’ public key from their github account. A script is launched every 5 minutes to synchronize the public and private key. Once the client revokes his public key, his private key will no longer exist on github. The access therefore is no longer available.

Your credentials and passphrase must remain confidential so that no one can modify or remove your private key, since all of our contract and trust is based on it.

### Two-factor Authentification:

Two-factor authentification is an additional security layer for your company that helps addressing the vulnerability of a standard password-only approach. The idea behind it is, once you enter your password or passphrase, you will receive either an sms or email that contains a code. This code has to be entered by the user in a specific field to make sure that the account has not been hacked.

Github gives you the choice of using two-factor authentification, which we advise you to do.

All we need to have is the client’s github account from which we can extract the public key. Hence the necessity to secure their github account. This will let them share files with us via a protocol (SFTP).

### Access control list for your members:

- Each member can only access certain features

<!-- ## Make your information more secure -->
## Step 2:<br>Transfert data to your dedicated server

### API Keys rotation:

- Regenerate key at least once a year
- In case the key was accidentally exposed, generate a new key immediately

### Encrypted communication: (ex: SSL)

### Protect the data:

- Prevent a customer from performing administrative operations
- Customer A should not read customer's B data

### Generate multiple keys:

- Master key
- Write key
- Read key
- Access key

<!-- ## Infrastructure Monitoring -->
## Step 3:<br>Monitor data access and quality

### HTTP referers restriction:

- List of referers who can call the API
- HTTP headers can be spoofed

### Blocking IP's and user management:

- Block the ip address triggering all the operations

### Compliance disciplines

- Respect of both industry regulations and government legislation by the organization
- GDPR

## Step 4:<br>React to incident

Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

## FAQ

- Where is data stored?
- Is data encrypted in transit? At rest?
- How do you handle employees leaving the company ?
- How do you handle loss of a device ?
- How do you impose password policy ?
- Where are security relevant validations done ? (client or server /div>
- How are security measures tested ?
- Which encryption method is used for data transfer ?

## Exemples:

- https://aws.amazon.com/security/
- https://github.com/security & https://github.com/enterprise/security
- https://stripe.com/docs/security & https://stripe.com/docs/security/stripe
- https://www.algolia.com/doc/guides/security/security-best-practices/
- https://gdpr.algolia.com/gdpr-article-32
- https://www.bloomberg.com/professional/product/data-license/
- https://www.neoxam.com/data-protection-policy
