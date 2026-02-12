import React from "react";
import { Link } from "react-router-dom";
import "./App.css";

function PrivacyPolicy() {
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
            <h1>Privacy Policy</h1>
            <p className="last-updated">
              Last Updated: February 12, 2026
            </p>

            <section>
              <h2>Introduction</h2>
              <p>
                Welcome to Wingman ("we," "our," or "us"). Wingman is a mobile
                application available on the Apple App Store for iOS devices.
                This Privacy Policy explains how we collect, use, disclose, and
                safeguard your information when you use our mobile application.
              </p>
              <p>
                By using Wingman, you agree to the collection and use of
                information in accordance with this policy. If you do not agree
                with our policies and practices, please do not use our
                application.
              </p>
            </section>

            <section>
              <h2>Data Collection and Use</h2>
              <h3>Information We Collect</h3>
              <p>
                We collect information that you provide directly to us and
                information that is automatically collected when you use
                Wingman:
              </p>

              <h4>Account Information</h4>
              <p>
                When you create an account, we collect your email address and
                any other information you choose to provide. This information is
                necessary to create and manage your account, provide customer
                support, and communicate with you about your subscription.
              </p>

              <h4>Usage Analytics</h4>
              <p>
                We automatically collect certain information about your device
                and how you interact with Wingman. This includes device
                information (such as device type, operating system version), app
                usage data (such as features accessed, time spent in the app),
                and performance data. This information helps us improve our
                services and understand how users interact with the application.
              </p>

              <h4>Subscription Information</h4>
              <p>
                We collect information related to your subscription status,
                including subscription type (monthly or yearly), purchase
                history, and subscription renewal dates. This information is
                necessary to manage your subscription and provide access to
                premium features.
              </p>

              <h4>App Tracking Transparency and Tracking</h4>
              <p>
                Wingman does <strong>not</strong> use tracking across apps and
                websites owned by other companies. We do not access the
                advertising identifier (IDFA) or use any other identifier for
                cross-app or cross-website tracking purposes. Because we do not
                engage in such tracking, we do not present the App Tracking
                Transparency (ATT) prompt. Any analytics we use are limited to
                improving our own app and services and do not involve tracking
                you across other companies' apps or sites. If we were to
                introduce tracking that would require ATT in the future, we
                would present the system prompt and provide clear opt-out
                options in accordance with Apple's guidelines.
              </p>

              <h3>How We Use Your Information</h3>
              <p>We use the information we collect to:</p>
              <ul>
                <li>Provide, maintain, and improve Wingman</li>
                <li>Process and manage your subscriptions</li>
                <li>
                  Send you technical notices, updates, and support messages
                </li>
                <li>Respond to your comments, questions, and requests</li>
                <li>Monitor and analyze usage patterns and trends</li>
                <li>Detect, prevent, and address technical issues</li>
              </ul>

              <h3>Data Retention</h3>
              <p>
                We retain your information only for as long as necessary to
                fulfill the purposes described in this Privacy Policy and to
                comply with legal obligations. Our retention practices are as
                follows:
              </p>
              <ul>
                <li>
                  <strong>Account information:</strong> We retain your account
                  data (such as email and profile information) while your
                  account is active. After you request account deletion, we
                  remove or anonymize this data promptly, typically within 30
                  days, except where we must retain it for a limited period for
                  legal, regulatory, or legitimate business purposes (such as
                  backup systems or resolving disputes). Once no longer needed,
                  it is securely deleted or anonymized.
                </li>
                <li>
                  <strong>Usage analytics:</strong> We retain usage and
                  analytics data for a limited period (typically up to 24
                  months) to improve our services, analyze trends, and fix
                  issues. After this period, data is deleted or aggregated in
                  a form that no longer identifies you.
                </li>
                <li>
                  <strong>Subscription information:</strong> We retain
                  subscription-related data as needed to manage your
                  subscription and for a reasonable period after cancellation
                  for accounting, tax, or legal requirements, after which it is
                  deleted or anonymized.
                </li>
              </ul>
              <p>
                When retention periods expire or you request deletion, we delete
                or anonymize your data unless we are required to retain it by
                law (for example, in response to a legal hold or regulatory
                request). Deletion requests you submit are processed promptly
                subject to these exceptions.
              </p>
            </section>

            <section>
              <h2>Payment Processing</h2>
              <p>
                All payments for Wingman subscriptions are processed through
                Apple's In-App Purchase system. We do not collect, store, or
                process your payment information directly. Apple handles all
                payment transactions and processes your payment information in
                accordance with Apple's Privacy Policy. We only receive
                confirmation of your subscription status and purchase history
                from Apple.
              </p>
            </section>

            <section>
              <h2>Data Sharing and Disclosure</h2>
              <p>
                We do not sell, trade, or rent your personal information to
                third parties. We may share your information only in the
                following circumstances:
              </p>
              <ul>
                <li>
                  <strong>Service Providers:</strong> We may share information
                  with third-party service providers who perform services on our
                  behalf, such as analytics providers. We require all such
                  providers to handle your data in accordance with this Privacy
                  Policy, applicable privacy laws, and to provide the same or
                  equivalent level of protection as we do. Our agreements with
                  these providers include confidentiality and data protection
                  obligations to safeguard your information.
                </li>
                <li>
                  <strong>Legal Requirements:</strong> We may disclose your
                  information if required to do so by law or in response to
                  valid requests by public authorities.
                </li>
                <li>
                  <strong>Business Transfers:</strong> In the event of a merger,
                  acquisition, or sale of assets, your information may be
                  transferred as part of that transaction.
                </li>
              </ul>
            </section>

            <section>
              <h2>Data Security</h2>
              <p>
                We implement appropriate technical and organizational measures
                to protect your personal information against unauthorized
                access, alteration, disclosure, or destruction. However, no
                method of transmission over the internet or electronic storage
                is 100% secure, and we cannot guarantee absolute security.
              </p>
            </section>

            <section>
              <h2>Your Rights and Choices</h2>
              <p>
                You have certain rights regarding your personal information:
              </p>
              <ul>
                <li>
                  <strong>Access:</strong> You can request access to the
                  personal information we hold about you.
                </li>
                <li>
                  <strong>Correction:</strong> You can update your account
                  information directly through the app or by contacting us.
                </li>
                <li>
                  <strong>Deletion:</strong> You can request deletion of your
                  account and associated data by contacting us at{" "}
                  <a href="mailto:support@getwingman.app">
                    support@getwingman.app
                  </a>
                  . We will process deletion requests promptly in line with our
                  Data Retention section, except where we must retain data for
                  legal holds or other lawful reasons, which we will explain if
                  applicable.
                </li>
                <li>
                  <strong>Withdrawal of consent:</strong> Where we process your
                  data based on your consent, you may withdraw that consent at
                  any time. You can do so through in-app settings where
                  available, or by contacting us at{" "}
                  <a href="mailto:support@getwingman.app">
                    support@getwingman.app
                  </a>
                  . Upon withdrawal, we will stop the relevant processing. Withdrawing
                  consent may limit or prevent use of certain features that
                  depend on that data. You may also request account deletion (as
                  above), which will result in removal of your data as described
                  in our Data Retention section.
                </li>
                <li>
                  <strong>Subscription Management:</strong> You can manage your
                  subscription, including cancellation, through your Apple ID
                  account settings.
                </li>
              </ul>
            </section>

            <section>
              <h2>Children's Privacy</h2>
              <p>
                Wingman is not intended for users under the age of 18. We do not
                knowingly collect personal information from children. If you
                believe we have collected information from a child, please
                contact us immediately.
              </p>
            </section>

            <section>
              <h2>Changes to This Privacy Policy</h2>
              <p>
                We may update this Privacy Policy from time to time. We will
                notify you of any changes by posting the new Privacy Policy on
                this page and updating the "Last Updated" date. You are advised
                to review this Privacy Policy periodically for any changes.
              </p>
            </section>

            <section>
              <h2>Contact Information</h2>
              <p>
                If you have any questions about this Privacy Policy or our data
                practices, please contact us at:
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

export default PrivacyPolicy;
