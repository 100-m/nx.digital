# Security

## Table of contents

- [1. Introduction](#introduction-)
- [2. How to minimize the probability of your data being leaked](#how-to-minimize-the-probability-of-your-data-being-leaked-)
- [3. Make your information more secure](#make-your-information-more-secure-)
- [4. Infrastructure monitoring](#infrastructure-monitoring-)
- [5. Compliance disciplines: Respect of both industry regulations and government legislation by the organization](#compliance-disciplines-respect-of-both-industry-regulations-and-government-legislation-by-the-organization)
- [6. FAQ](#faq-)

<h2 id="introduction-"> Introduction
  <p>Our main goal is to prevent access to your confidential data. At Neoxam, we take security seriously.
  As we operate in the world of finance, it is our duty to secure all of the data that is transferred to us. We dedicate a large portion of our time to this particular process of securing the delicate data we receive, even though it may consist of public data.</p>

  <p>In this document, we discuss two major points: how we handle the security from our side (encrypt the data in transit, in rest, authentification ...), and the best practices you must follow in order to ensure the security of your data. Please reach out if you would like to discuss security in more detail.</p>

  <div class="important">
    <p class="title">Important</p>
    <p class="text">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
  </div>
</h2>

<h2 id="how-to-minimize-the-probability-of-your-data-being-leaked-"> How to minimize the probability of your data being leaked:
  <div class="h3"> Secure your admin API Key: </div>
  <p>At Neoxam, we fetch our clients’ public key from their github account. A script is launched every 5 minutes to synchronize the public and private key. Once the client revokes his public key, his private key will no longer exist on github. The access therefore is no longer available.</p>

  <p>Your credentials and passphrase must remain confidential so that no one can modify or remove your private key, since all of our contract and trust is based on it.</p>

  <div class="h3"> Two-factor Authentification: </div>
  <p>Two-factor authentification is an additional security layer for your company that helps addressing the vulnerability of a standard password-only approach. The idea behind it is, once you enter your password or passphrase, you will receive either an sms or email that contains a code. This code has to be entered by the user in a specific field to make sure that the account has not been hacked.</p>

  <p>Github gives you the choice of using two-factor authentification, which we advise you to do.</p>

  <p>All we need to have is the client’s github account from which we can extract the public key. Hence the necessity to secure their github account. This will let them share files with us via a protocol (SFTP).</p>

  <div class="h3"> Access control list for your members: </div>
    <ul><li> Each member can only access certain features </li></ul>
</h2>

<h2 id="make-your-information-more-secure-"> Make your information more secure:

  <div class="h3"> API Keys rotation:</div>

  <ul>
    <li>Regenerate key at least once a year</li>
    <li>In case the key was accidentally exposed, generate a new key immediately</li>
  </ul>

  <div class="h3"> Encrypted communication: (ex: SSL)</div>

  <div class="h3"> Protect the data:</div>
    <ul>
      <li>Prevent a customer from performing administrative operations</li>
      <li>Customer A should not read customer's B data</li>
    </ul>

  <div class="h3"> Generate multiple keys:</div>
    <ul>
      <li>Master key</li>
      <li>Write key</li>
      <li>Read key</li>
      <li>Access key</li>
    </ul>
</h2>


<h2 id="infrastructure-monitoring-"> Infrastructure Monitoring:

  <div class="h3"> HTTP referers restriction:</div>
    <ul>
      <li>List of referers who can call the API</li>
      <li>HTTP headers can be spoofed</li>
    </ul>

  <div class="h3"> Blocking IP's and user management:</div>
    <ul><li> Block the ip address triggering all the operations</li></ul>
</h2>

<h2 id="compliance-disciplines-respect-of-both-industry-regulations-and-government-legislation-by-the-organization"> Compliance disciplines: Respect of both industry regulations and government legislation by the organization

  <ul><li>GDPR</li></ul>
</h2>

<h2 id="faq-"> FAQ:

  <div class="h3"> Where is data stored?</div>

  <div class="h3"> Is data encrypted in transit? At rest?</div>

  <div class="h3"> How do you handle employees leaving the company ?</div>

  <div class="h3"> How do you handle loss of a device ?</div>

  <div class="h3"> How do you impose password policy ?</div>

  <div class="h3"> Where are security relevant validations done ? (client or server side)</div>

  <div class="h3"> How are security measures tested ?</div>

  <div class="h3"> Which encryption method is used for data transfer ?</div>
</h2>
