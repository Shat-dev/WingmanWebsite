import React from "react";
import { Link } from "react-router-dom";
import "./App.css";

function TermsAndConditions() {
  return (
    <div className="app">
      <header className="header">
        <div className="container">
          <Link to="/" className="logo">
            Wingman
          </Link>
        </div>
      </header>

      <main className="main">
        <div className="container">
          <div className="legal-page">
            <h1>Terms & Conditions</h1>
            <p className="last-updated">
              Last Updated:{" "}
              {new Date().toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </p>

            <section>
              <h2>Introduction</h2>
              <p>
                Welcome to Wingman. These Terms & Conditions ("Terms") govern
                your access to and use of Wingman, a mobile application ("App")
                available on the Apple App Store for iOS devices.
              </p>
              <p>
                By downloading, installing, accessing, or using Wingman, you
                agree to be bound by these Terms. If you do not agree to these
                Terms, you may not use the App.
              </p>
            </section>

            <section>
              <h2>Acceptance of Terms</h2>
              <p>
                By creating an account, accessing, or using Wingman, you
                acknowledge that you have read, understood, and agree to be
                bound by these Terms and our Privacy Policy. If you are using
                the App on behalf of an organization, you represent that you
                have the authority to bind that organization to these Terms.
              </p>
            </section>

            <section>
              <h2>Account Creation and Management</h2>
              <p>
                To use certain features of Wingman, you must create an account.
                When creating an account, you agree to:
              </p>
              <ul>
                <li>Provide accurate, current, and complete information</li>
                <li>Maintain and promptly update your account information</li>
                <li>Maintain the security of your account credentials</li>
                <li>
                  Accept responsibility for all activities that occur under your
                  account
                </li>
                <li>
                  Notify us immediately of any unauthorized use of your account
                </li>
              </ul>
              <p>
                You are responsible for maintaining the confidentiality of your
                account information and for all activities that occur under your
                account.
              </p>
            </section>

            <section>
              <h2>Subscriptions and Billing</h2>
              <h3>Subscription Plans</h3>
              <p>
                Wingman offers subscription plans on a monthly and yearly basis.
                Subscription fees, features, and terms are displayed within the
                App and may be updated from time to time.
              </p>

              <h3>Payment Processing</h3>
              <p>
                All subscription payments are processed through Apple's In-App
                Purchase system. By purchasing a subscription, you agree to
                Apple's Payment Terms. We do not process payments directly and
                are not responsible for payment processing errors or issues
                related to Apple's payment systems.
              </p>

              <h3>Subscription Renewal</h3>
              <p>
                Subscriptions automatically renew unless cancelled at least 24
                hours before the end of the current subscription period. You can
                manage your subscription and turn off auto-renewal through your
                Apple ID account settings. We cannot access your Apple account
                settings or cancel subscriptions on your behalf.
              </p>

              <h3>Refunds</h3>
              <p>
                Refund requests are handled by Apple in accordance with Apple's
                refund policy. We do not process refunds directly. Our
                subscription and refund practices comply with Apple's App Store
                policies and Australian Consumer Law; where a refund is required
                by law (including under the ACL), you may be entitled to a
                remedy. We encourage you to review Apple's terms and conditions
                for payments and refunds. If you have questions about refunds,
                please contact Apple Support or us at{" "}
                <a href="mailto:support@getwingman.app">
                  support@getwingman.app
                </a>
                .
              </p>

              <h3>Price Changes</h3>
              <p>
                We reserve the right to modify subscription prices at any time.
                Price changes will not affect your current subscription period
                but will apply to subsequent renewal periods. You will be
                notified of price changes in advance.
              </p>
            </section>

            <section>
              <h2>In-App Purchases</h2>
              <p>
                Wingman may offer additional in-app purchases beyond
                subscription plans. All in-app purchases are processed through
                Apple's In-App Purchase system. Purchases are final and
                non-refundable unless required by applicable law or Apple's
                refund policy.
              </p>
            </section>

            <section>
              <h2>User Responsibilities</h2>
              <p>You agree to use Wingman only for lawful purposes and in</p>
              <ul>
                <li>
                  Use the App in any way that violates applicable laws or
                  regulations
                </li>
                <li>
                  Attempt to gain unauthorized access to the App or its related
                  systems
                </li>
                <li>
                  Interfere with or disrupt the App or servers connected to the
                  App
                </li>
                <li>Use automated systems or bots to access the App</li>
                <li>Copy, modify, or create derivative works of the App</li>
                <li>Reverse engineer, decompile, or disassemble the App</li>
                <li>Share your account credentials with others</li>
                <li>
                  Use the App to transmit any harmful code or malicious software
                </li>
              </ul>
            </section>

            <section>
              <h2>Not Professional Advice</h2>
              <p>
                Wingman provides educational content and structured lessons
                designed to help users build social confidence. The content
                provided in Wingman is for informational and educational
                purposes only and does not constitute:
              </p>
              <ul>
                <li>Medical, health, or therapeutic advice</li>
                <li>Legal advice</li>
                <li>Professional counseling or therapy</li>
                <li>Any form of professional consultation</li>
              </ul>
              <p>
                Wingman is not a substitute for professional medical, legal, or
                therapeutic services. If you have concerns about your mental
                health, physical health, or legal matters, please consult with
                qualified professionals.
              </p>
            </section>

            <section>
              <h2>Intellectual Property</h2>
              <p>
                Wingman and its original content, features, and functionality
                are owned by Lazul Pty Ltd and are protected by international
                copyright, trademark, patent, trade secret, and other
                intellectual property laws.
              </p>
              <p>
                You are granted a limited, non-exclusive, non-transferable,
                revocable license to access and use Wingman for your personal,
                non-commercial use in accordance with these Terms. This license
                does not include any right to:
              </p>
              <ul>
                <li>Resell or commercially use the App</li>
                <li>Copy, reproduce, or distribute the App or its content</li>
                <li>Modify or create derivative works based on the App</li>
                <li>
                  Use the App for any commercial purpose without our express
                  written consent
                </li>
              </ul>
            </section>

            <section>
              <h2>Limitation of Liability</h2>
              <p>
                TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, LAZUL PTY LTD
                AND ITS AFFILIATES SHALL NOT BE LIABLE FOR ANY INDIRECT,
                INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES,
                INCLUDING BUT NOT LIMITED TO LOSS OF PROFITS, DATA, USE,
                GOODWILL, OR OTHER INTANGIBLE LOSSES, RESULTING FROM:
              </p>
              <ul>
                <li>Your use or inability to use Wingman</li>
                <li>
                  Any unauthorized access to or use of our servers or your
                  account
                </li>
                <li>
                  Any interruption or cessation of transmission to or from the
                  App
                </li>
                <li>
                  Any bugs, viruses, or other harmful code transmitted through
                  the App
                </li>
                <li>Any errors or omissions in any content</li>
                <li>
                  Any loss or damage incurred as a result of your use of any
                  content posted or transmitted through the App
                </li>
              </ul>
              <p>
                IN NO EVENT SHALL OUR TOTAL LIABILITY TO YOU FOR ALL DAMAGES
                EXCEED THE AMOUNT YOU PAID TO US IN THE TWELVE (12) MONTHS PRIOR
                TO THE ACTION GIVING RISE TO THE LIABILITY, OR ONE HUNDRED
                DOLLARS ($100), WHICHEVER IS GREATER.
              </p>
            </section>

            <section>
              <h2>Disclaimer of Warranties</h2>
              <p>
                WINGMAN IS PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT
                WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED, INCLUDING BUT
                NOT LIMITED TO IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS
                FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT. WE DO NOT
                WARRANT THAT THE APP WILL BE UNINTERRUPTED, SECURE, OR
                ERROR-FREE.
              </p>
            </section>

            <section>
              <h2>Termination</h2>
              <p>
                We may terminate or suspend your account and access to Wingman
                immediately, without prior notice or liability, for any reason,
                including if you breach these Terms. Upon termination, your
                right to use the App will cease immediately.
              </p>
              <h3>Account Deletion</h3>
              <p>
                You may request deletion of your account and associated personal
                data at any time. You can initiate account deletion directly
                within the App, or through a clear in-app process that may
                direct you to our support channel if needed. Upon deletion, we
                will remove your account and personal data except where we are
                legally required to retain it (for example, for legal, tax, or
                compliance reasons). For details on what data we retain and how
                we handle deletion, please see our{" "}
                <Link to="/privacy-policy">Privacy Policy</Link>.
              </p>
              <p>
                <strong>Active subscriptions:</strong> Account deletion does not
                automatically cancel your subscription or stop billing. To avoid
                continued charges, you must cancel your subscription through
                your Apple ID account settings before or when you request
                account deletion. We cannot cancel subscriptions on your behalf.
              </p>
              <p>
                Once your account is deleted, your access to the App and its
                features ceases immediately. Termination or deletion of your
                account does not relieve you of any obligations to pay fees
                accrued prior to termination.
              </p>
              <p>
                You may also terminate your use at any time by deleting the App
                from your device and canceling your subscription through your
                Apple ID account settings.
              </p>
            </section>

            <section>
              <h2>Changes to Terms</h2>
              <p>
                We reserve the right to modify or replace these Terms at any
                time at our sole discretion. If a revision is material, we will
                provide at least 30 days' notice prior to any new terms taking
                effect. What constitutes a material change will be determined at
                our sole discretion.
              </p>
              <p>
                By continuing to access or use Wingman after any revisions
                become effective, you agree to be bound by the revised Terms. If
                you do not agree to the new Terms, you must stop using the App.
              </p>
            </section>

            <section>
              <h2>Severability</h2>
              <p>
                If any provision of these Terms is held to be invalid, illegal,
                or unenforceable by a court of competent jurisdiction, that
                provision shall be modified to the minimum extent necessary to
                make it valid and enforceable, or severed if modification is not
                possible. The remaining provisions of these Terms shall continue
                in full force and effect.
              </p>
            </section>

            <section>
              <h2>No Waiver</h2>
              <p>
                Our failure to enforce any right or provision of these Terms
                shall not constitute a waiver of such right or provision. Any
                waiver must be in writing and signed by us to be effective.
              </p>
            </section>

            <section>
              <h2>Entire Agreement</h2>
              <p>
                These Terms, together with our Privacy Policy and any other
                policies or guidelines we publish in connection with the App,
                constitute the entire agreement between you and Lazul Pty Ltd
                regarding Wingman and supersede any prior agreements,
                understandings, or communications, whether written or oral.
              </p>
            </section>

            <section>
              <h2>Force Majeure</h2>
              <p>
                We shall not be liable for any failure or delay in performing
                our obligations under these Terms where such failure or delay
                results from circumstances beyond our reasonable control,
                including but not limited to acts of God, natural disasters,
                war, terrorism, pandemics, government actions, labour disputes,
                or failure of third-party services (including Apple's systems).
                We will use reasonable efforts to mitigate the effect of any
                such event.
              </p>
            </section>

            <section>
              <h2>Governing Law</h2>
              <p>
                These Terms shall be governed by and construed in accordance
                with the laws of New South Wales, Australia, without regard to
                its conflict of law provisions. Any disputes arising from these
                Terms or your use of Wingman shall be subject to the exclusive
                jurisdiction of the courts of New South Wales, Australia.
              </p>
            </section>

            <section>
              <h2>Contact Information</h2>
              <p>
                If you have any questions about these Terms & Conditions, please
                contact us at:
              </p>
              <p>
                <strong>Email:</strong>{" "}
                <a href="mailto:support@getwingman.app">
                  support@getwingman.app
                </a>
                <br />
              </p>
            </section>
          </div>
        </div>
      </main>

      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-links">
              <a
                href="mailto:support@getwingman.app?subject=Wingman Support&body=Please describe your issue and include your device iOS version:"
                className="footer-link"
              >
                support@getwingman.app
              </a>
              <span className="footer-separator">•</span>
              <a
                href="https://www.instagram.com/app.wingman"
                target="_blank"
                rel="noopener noreferrer"
                className="footer-link"
              >
                Instagram
              </a>
              <span className="footer-separator">•</span>
              <a
                href="https://www.tiktok.com/@app.wingman"
                target="_blank"
                rel="noopener noreferrer"
                className="footer-link"
              >
                TikTok
              </a>
              <span className="footer-separator">•</span>
              <a
                href="https://x.com/trywingmanapp"
                target="_blank"
                rel="noopener noreferrer"
                className="footer-link"
              >
                Twitter
              </a>
            </div>
            <div className="footer-legal-links">
              <Link to="/privacy-policy" className="footer-link">
                Privacy Policy
              </Link>
              <span className="footer-separator">•</span>
              <Link to="/terms-and-conditions" className="footer-link">
                Terms & Conditions
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default TermsAndConditions;
