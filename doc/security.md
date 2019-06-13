# Security

## Introduction

Our main goal is to prevent access to your confidential data. At Neoxam, we take security seriously.
As we operate in the world of finance, it is our duty to secure all of the data that is transferred to us. We dedicate a large portion of our time to this particular process of securing the delicate data we receive, even though it may consist of public data.

In this document, we discuss two major points: how we handle the security from our side (encrypt the data in transit, in rest, authentification ...), and the best practices you must follow in order to ensure the security of your data. Please reach out if you would like to discuss security in more detail.

## How to minimize the probability of your data being leaked:

### Secure your admin API Key:

At Neoxam, we fetch our clients’ public key from their github account. A script is launched every 5 minutes to synchronize the public and private key. Once the client revokes his public key, his private key will no longer exist on github. The access therefore is no longer available.

Your credentials and passphrase must remain confidential so that no one can modify or remove your private key, since all of our contract and trust is based on it.

### Two-factor Authentification:

Two-factor authentification is an additional security layer for your company that helps addressing the vulnerability of a standard password-only approach. The idea behind it is, once you enter your password or passphrase, you will receive either an sms or email that contains a code. This code has to be entered by the user in a specific field to make sure that the account has not been hacked.

Github gives you the choice of using two-factor authentification, which we advise you to do.

All we need to have is the client’s github account from which we can extract the public key. Hence the necessity to secure their github account. This will let them share files with us via a protocol (SFTP).

### Access control list for your members:

- Each member can only access certain features

## Make your information more secure:

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

## Infrastructure Monitoring:

### HTTP referers restriction:

- List of referers who can call the API
- HTTP headers can be spoofed

### Blocking IP's and user management:

- Block the ip address triggering all the operations

## Compliance disciplines: Respect of both industry regulations and government legislation by the organization

- GDPR

## FAQ:

- Where is data stored?
- Is data encrypted in transit? At rest?
- How do you handle employees leaving the company ?
- How do you handle loss of a device ?
- How do you impose password policy ?
- Where are security relevant validations done ? (client or server /div>
- How are security measures tested ?
- Which encryption method is used for data transfer ?
