import React from 'react';
import './Terms.css';
import { Avatar } from '@material-ui/core';
import brainImg from '../../../assets/placeholder_brain_square.png';
import Card from '@material-ui/core/Card';

function Terms () {
  return (
    <div className="TermsProfileWrapper"><br></br><br></br><br></br><br></br><br></br>
      <Card>
        <div className="profileRow">
          <span className="AvatarName">
            <Avatar src={brainImg}></Avatar>
            <h4 className="ProfilePageName">Terms and Conditions</h4>
          </span>
        </div>
        <div className="TermsProfileRow">
          <br></br>
          <p>
          Last updated: December 08, 2020<br></br>
These Terms and Conditions (&quot;Terms&quot;, &quot;Terms and Conditions&quot;) govern your relationship with FairPoint web application (the &quot;Service&quot;) operated by Oliver, Johan, Edward and Sooyeon (&quot;us&quot;, &quot;we&quot;, or &quot;our&quot;).
Please read these Terms and Conditions carefully before using our FairPoint web application (the &quot;Service&quot;).
Your access to and use of the Service is conditioned on your acceptance of and compliance with these Terms. These Terms apply to all visitors, users and others who access or use the Service.
By accessing or using the Service you agree to be bound by these Terms. If you disagree with any part of the terms then you may not access the Service.
          </p>
          <br></br>
          <p><b>Accounts</b><br></br>
          When you create an account with us, you must provide us information that is accurate, complete, and current at all times. Failure to do so constitutes a breach of the Terms, which may result in immediate termination of your account on our Service.
You are responsible for safeguarding the password that you use to access the Service and for any activities or actions under your password, whether your password is with our Service or a third-party service.
You agree not to disclose your password to any third party. You must notify us immediately upon becoming aware of any breach of security or unauthorized use of your account.
You may not use as a username the name of another person or entity or that is not lawfully available for use, a name or trade mark that is subject to any rights of another person or entity other than you without appropriate authorization, or a name that is otherwise offensive, vulgar or obscene.
          </p>
          <br></br>
          <p><b>Copyright Policy</b><br></br>
          We respect the intellectual property rights of others. It is our policy to respond to any claim that Content posted on the Service infringes the copyright or other intellectual property infringement (&quot;Infringement&quot;) of any person.
If you are a copyright owner, or authorized on behalf of one, and you believe that the copyrighted work has been copied in a way that constitutes copyright infringement that is taking place through the Service, you must submit your notice in writing to the attention of &quot;Copyright Infringement&quot; of info@fairpointnews.com and include in your notice a detailed description of the alleged Infringement.
You may be held accountable for damages (including costs and attorneys fees) for misrepresenting that any Content is infringing your copyright.
          </p>
          <br></br>
          <p><b>Intellectual Property</b><br></br>
          The Service and its original content (excluding Content provided by users), features and functionality are and will remain the exclusive property of FairPoint and its licensors. The Service is protected by copyright, trademark, and other laws of both the UK and foreign countries. Our trademarks and trade dress may not be used in connection with any product or service without the prior written consent of us.</p>
          <br></br>
          <p><b>Links To Other Web Sites</b><br></br>
          Our Service may contain links to third-party web sites or services that are not owned or controlled by FairPoint.
We have no control over, and assumes no responsibility for, the content, privacy policies, or practices of any third party web sites or services. You further acknowledge and agree that we shall not be responsible or liable, directly or indirectly, for any damage or loss caused or alleged to be caused by or in connection with use of or reliance on any such content, goods or services available on or through any such web sites or services.
We strongly advise you to read the terms and conditions and privacy policies of any third-party web sites or services that you visit.
          </p>
          <br></br>
          <p><b>Termination</b><br></br>
          We may terminate or suspend your account immediately, without prior notice or liability, for any reason whatsoever, including without limitation if you breach the Terms.
Upon termination, your right to use the Service will immediately cease. If you wish to terminate your account, you may simply discontinue using the Service.
          </p>
          <br></br>
          <p><b>Limitation Of Liability</b><br></br>
          In no event shall FairPoint, nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from (i) your access to or use of or inability to access or use the Service; (ii) any conduct or content of any third party on the Service; (iii) any content obtained from the Service; and (iv) unauthorized access, use or alteration of your transmissions or content, whether based on warranty, contract, tort (including negligence) or any other legal theory, whether or not we have been informed of the possibility of such damage, and even if a remedy set forth herein is found to have failed of its essential purpose.</p>
          <br></br>
          <p><b>Disclaimer</b><br></br>
          Your use of the Service is at your sole risk. The Service is provided on an &quot;AS IS&quot; and &quot;AS AVAILABLE&quot; basis. The Service is provided without warranties of any kind, whether express or implied, including, but not limited to, implied warranties of merchantability, fitness for a particular purpose, non- infringement or course of performance.
FairPoint, its subsidiaries, affiliates, and its licensors do not warrant that a) the Service will function uninterrupted, secure or available at any particular time or location; b) any errors or defects will be corrected; c) the Service is free of viruses or other harmful components; or d) the results of using the Service will meet your requirements.
          </p>
          <br></br>
          <p><b>Governing Law</b><br></br>
          These Terms shall be governed and construed in accordance with the laws of the UK, without regard to its conflict of law provisions.
Our failure to enforce any right or provision of these Terms will not be considered a waiver of those rights. If any provision of these Terms is held to be invalid or unenforceable by a court, the remaining provisions of these Terms will remain in effect. These Terms constitute the entire agreement between us regarding our Service, and supersede and replace any prior agreements we might have between us regarding the Service.
          </p>
          <br></br>
          <p><b>Changes</b><br></br>
          We reserve the right, at our sole discretion, to modify or replace these Terms at any time. If a revision is material we will try to provide at least 30 days notice prior to any new terms taking effect. What constitutes a material change will be determined at our sole discretion.
By continuing to access or use our Service after those revisions become effective, you agree to be bound by the revised terms. If you do not agree to the new terms, please stop using the Service.
          </p>
          <br></br>
          <p><b>Contact Us</b><br></br>
          If you have any questions about these Terms, please contact us.</p>
          <br></br>
        </div>
      </Card>
    </div>
  );
}

export default Terms;
