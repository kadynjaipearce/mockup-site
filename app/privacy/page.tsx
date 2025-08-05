"use client";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

import Link from "next/link";

export default function PrivacyPage() {

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="bg-spa-primary text-white py-16 pt-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-light mb-6">
              Privacy Policy
            </h1>
            <p className="text-xl text-spa-neutral/90 max-w-2xl mx-auto">
              How we protect your privacy and handle your information
            </p>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto prose prose-lg">
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="space-y-8">
                {/* Introduction */}
                <div>
                  <h2 className="text-2xl font-semibold text-spa-secondary mb-4">
                    1. Introduction
                  </h2>
                  <p className="text-gray-700 leading-relaxed">
                    At Bunbury Wellness, we respect your privacy and are
                    committed to protecting your personal information. This
                    Privacy Policy explains how we handle information when you
                    visit our website or use our services.
                  </p>
                </div>

                {/* Information We Don't Collect */}
                <div>
                  <h2 className="text-2xl font-semibold text-spa-secondary mb-4">
                    2. Information We Don&apos;t Collect
                  </h2>
                  <div className="space-y-4 text-gray-700">
                    <p>
                      <strong>No Personal Data Storage:</strong> Our website
                      does not collect, store, or process any personal
                      information from visitors. We do not use cookies, tracking
                      technologies, or any form of data collection.
                    </p>
                    <p>
                      <strong>No User Accounts:</strong> We do not require user
                      registration, accounts, or login credentials to access our
                      website.
                    </p>
                    <p>
                      <strong>No Analytics:</strong> We do not use Google
                      Analytics, Facebook Pixel, or any other tracking services
                      to monitor website usage.
                    </p>
                  </div>
                </div>

                {/* Third-Party Services */}
                <div>
                  <h2 className="text-2xl font-semibold text-spa-secondary mb-4">
                    3. Third-Party Services
                  </h2>
                  <div className="space-y-4 text-gray-700">
                    <p>
                      <strong>Booking System:</strong> Our booking functionality
                      is provided by Cliniko, a third-party booking platform.
                      When you make a booking through our website, you will be
                      redirected to Cliniko&apos;s secure booking system.
                    </p>
                    <p>
                      <strong>Cliniko Privacy:</strong> Any information you
                      provide during the booking process is handled by Cliniko
                      according to their privacy policy. We recommend reviewing
                      Cliniko&apos;s privacy policy before making a booking.
                    </p>
                    <p>
                      <strong>No Data Sharing:</strong> We do not receive,
                      store, or have access to any personal information you
                      provide to Cliniko during the booking process.
                    </p>
                  </div>
                </div>

                {/* Website Information */}
                <div>
                  <h2 className="text-2xl font-semibold text-spa-secondary mb-4">
                    4. Website Information
                  </h2>
                  <div className="space-y-4 text-gray-700">
                    <p>
                      <strong>Public Information:</strong> Our website contains
                      general information about our services, pricing, and
                      business details. This information is publicly available
                      and does not require any personal data to access.
                    </p>
                    <p>
                      <strong>Contact Information:</strong> Our business contact
                      details (phone, email, address) are publicly displayed for
                      customer convenience and do not constitute personal data
                      collection.
                    </p>
                  </div>
                </div>

                {/* In-Person Services */}
                <div>
                  <h2 className="text-2xl font-semibold text-spa-secondary mb-4">
                    5. In-Person Services
                  </h2>
                  <div className="space-y-4 text-gray-700">
                    <p>
                      <strong>Health Information:</strong> During your massage
                      therapy sessions, we may collect basic health information
                      necessary for your treatment. This information is:
                    </p>
                    <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                      <li>Stored securely in paper format only</li>
                      <li>Used solely for treatment purposes</li>
                      <li>Not shared with third parties</li>
                      <li>Retained only as required by law</li>
                    </ul>
                    <p>
                      <strong>Consent:</strong> We will always ask for your
                      explicit consent before collecting any health information
                      during your sessions.
                    </p>
                  </div>
                </div>

                {/* Data Security */}
                <div>
                  <h2 className="text-2xl font-semibold text-spa-secondary mb-4">
                    6. Data Security
                  </h2>
                  <div className="space-y-4 text-gray-700">
                    <p>
                      <strong>Website Security:</strong> Our website is hosted
                      on secure servers with SSL encryption to protect any
                      information transmitted.
                    </p>
                    <p>
                      <strong>Physical Security:</strong> Any paper records from
                      in-person sessions are stored in locked, secure cabinets
                      accessible only to authorized staff.
                    </p>
                    <p>
                      <strong>No Digital Storage:</strong> We do not store any
                      personal information in digital format on our systems.
                    </p>
                  </div>
                </div>

                {/* Your Rights */}
                <div>
                  <h2 className="text-2xl font-semibold text-spa-secondary mb-4">
                    7. Your Rights
                  </h2>
                  <div className="space-y-4 text-gray-700">
                    <p>
                      Since we do not collect or store personal data through our
                      website, there is no personal information to access,
                      modify, or delete.
                    </p>
                    <p>
                      For any health information collected during in-person
                      sessions, you have the right to:
                    </p>
                    <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                      <li>Request access to your records</li>
                      <li>Request corrections to your information</li>
                      <li>
                        Request deletion of your records (subject to legal
                        requirements)
                      </li>
                      <li>Withdraw consent for future data collection</li>
                    </ul>
                  </div>
                </div>

                {/* Children's Privacy */}
                <div>
                  <h2 className="text-2xl font-semibold text-spa-secondary mb-4">
                    8. Children&apos;s Privacy
                  </h2>
                  <p className="text-gray-700 leading-relaxed">
                    Our website is not intended for children under 13 years of
                    age. We do not knowingly collect any personal information
                    from children under 13. If you are a parent or guardian and
                    believe your child has provided us with personal
                    information, please contact us.
                  </p>
                </div>

                {/* Changes to Privacy Policy */}
                <div>
                  <h2 className="text-2xl font-semibold text-spa-secondary mb-4">
                    9. Changes to This Privacy Policy
                  </h2>
                  <p className="text-gray-700 leading-relaxed">
                    We may update this Privacy Policy from time to time. Any
                    changes will be posted on this page with an updated revision
                    date. We encourage you to review this policy periodically.
                  </p>
                </div>

                {/* Contact Information */}
                <div>
                  <h2 className="text-2xl font-semibold text-spa-secondary mb-4">
                    10. Contact Us
                  </h2>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    If you have any questions about this Privacy Policy or our
                    privacy practices, please contact us:
                  </p>
                  <div className="p-4 bg-spa-neutral rounded-lg">
                    <p className="text-gray-700">
                      <strong>Bunbury Wellness</strong>
                      <br />
                      Phone: (08) 9791 2345
                      <br />
                      Email: info@bunburywellness.com.au
                      <br />
                      Address: 123 Wellness Street, Bunbury WA 6230
                    </p>
                  </div>
                </div>

                {/* Related Links */}
                <div>
                  <h2 className="text-2xl font-semibold text-spa-secondary mb-4">
                    11. Related Information
                  </h2>
                  <p className="text-gray-700 leading-relaxed">
                    Please also review our{" "}
                    <Link
                      href="/terms"
                      className="text-spa-primary hover:text-spa-secondary underline"
                    >
                      Terms of Service
                    </Link>{" "}
                    for additional information about using our website and
                    services.
                  </p>
                </div>

                {/* Last Updated */}
                <div className="border-t pt-6">
                  <p className="text-sm text-gray-500">
                    <strong>Last Updated:</strong>{" "}
                    {new Date().toLocaleDateString("en-AU")}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
