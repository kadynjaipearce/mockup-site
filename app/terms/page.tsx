"use client";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

import Link from "next/link";

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Content Section */}
      <section className="pt-42 pb-16">
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
                    These Terms of Service (&quot;Terms&quot;) govern your use
                    of the Bunbury Wellness Remedial Massage website and services. By accessing
                    or using our website, you agree to be bound by these Terms.
                    If you disagree with any part of these terms, you may not
                    access our services.
                  </p>
                </div>

                {/* Services */}
                <div>
                  <h2 className="text-2xl font-semibold text-spa-secondary mb-4">
                    2. Services
                  </h2>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    Bunbury Wellness Remedial Massage provides professional massage therapy
                    services including:
                  </p>
                  <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                    <li>Remedial Massage Therapy</li>
                    <li>Sports Massage</li>
                    <li>Pregnancy Massage</li>
                    <li>Dry Needling</li>
                    <li>Wellness and relaxation treatments</li>
                  </ul>
                </div>

                {/* Booking and Appointments */}
                <div>
                  <h2 className="text-2xl font-semibold text-spa-secondary mb-4">
                    3. Booking and Appointments
                  </h2>
                  <div className="space-y-4 text-gray-700">
                    <p>
                      All appointments are subject to availability. We reserve
                      the right to modify, reschedule, or cancel appointments
                      due to unforeseen circumstances.
                    </p>

                    <div className="bg-spa-neutral p-4 rounded-lg">
                      <h3 className="font-semibold text-spa-secondary mb-2">
                        Important Booking Information:
                      </h3>
                      <ul className="list-disc list-inside space-y-2">
                        <li>
                          <strong>Fuko&apos;s Appointments:</strong>{" "}
                          Appointments with Fuko are available for FEMALE
                          CLIENTS ONLY.
                        </li>
                        <li>
                          <strong>Identification:</strong> Please use your first
                          and last name shown on your ID when filling in your
                          details.
                        </li>
                      </ul>
                    </div>

                    <div className="bg-amber-50 border-l-4 border-amber-400 p-4 rounded-lg">
                      <h3 className="font-semibold text-amber-800 mb-2">
                        Cancellation Policy:
                      </h3>
                      <ul className="list-disc list-inside space-y-2 text-amber-800">
                        <li>
                          <strong>48-hour notice required</strong> to change or
                          cancel appointments to avoid a late fee equal to 50%
                          of the scheduled appointment.
                        </li>
                        <li>
                          <strong>Last-minute cancellations</strong> with less
                          than 2 hours notice, as well as missed appointments
                          (including clients who show up late) will be charged
                          100% of the scheduled appointment fee.
                        </li>
                        <li>
                          Special circumstances may be considered on a
                          case-by-case basis.
                        </li>
                      </ul>
                    </div>

                    <p>
                      <strong>Late Arrivals:</strong> If you arrive late, your
                      session may be shortened to accommodate other clients.
                    </p>
                  </div>
                </div>

                {/* Health and Safety */}
                <div>
                  <h2 className="text-2xl font-semibold text-spa-secondary mb-4">
                    4. Health and Safety
                  </h2>
                  <div className="space-y-4 text-gray-700">
                    <p>
                      Your health and safety are our priority. Please inform us
                      of any medical conditions, injuries, or concerns before
                      your session.
                    </p>
                    <p>
                      We reserve the right to refuse service if we believe it
                      may be harmful to your health or if you are under the
                      influence of drugs or alcohol.
                    </p>
                    <p>
                      Our therapists are qualified professionals, but massage
                      therapy is not a substitute for medical treatment.
                    </p>
                  </div>
                </div>

                {/* Payment Terms */}
                <div>
                  <h2 className="text-2xl font-semibold text-spa-secondary mb-4">
                    5. Payment Terms
                  </h2>
                  <div className="space-y-4 text-gray-700">
                    <p>
                      Payment is due at the time of service. We accept cash,
                      card, and electronic payments.
                    </p>
                    <p>
                      Prices are subject to change without notice. Current
                      pricing is available on our website and at our location.
                    </p>
                    <p>
                      Gift certificates and special offers are subject to their
                      specific terms and conditions.
                    </p>
                  </div>
                </div>

                {/* Privacy */}
                <div>
                  <h2 className="text-2xl font-semibold text-spa-secondary mb-4">
                    6. Privacy
                  </h2>
                  <p className="text-gray-700 leading-relaxed">
                    Your privacy is important to us. Please review our{" "}
                    <Link
                      href="/privacy"
                      className="text-spa-primary hover:text-spa-secondary underline"
                    >
                      Privacy Policy
                    </Link>{" "}
                    to understand how we collect, use, and protect your
                    information.
                  </p>
                </div>

                {/* Limitation of Liability */}
                <div>
                  <h2 className="text-2xl font-semibold text-spa-secondary mb-4">
                    7. Limitation of Liability
                  </h2>
                  <p className="text-gray-700 leading-relaxed">
                    Bunbury Wellness Remedial Massage and its therapists are not liable for any
                    injuries, damages, or losses that may occur during or after
                    your session, except where such liability cannot be excluded
                    by law.
                  </p>
                </div>

                {/* Website Use */}
                <div>
                  <h2 className="text-2xl font-semibold text-spa-secondary mb-4">
                    8. Website Use
                  </h2>
                  <div className="space-y-4 text-gray-700">
                    <p>
                      Our website is provided for informational purposes only.
                      We make no warranties about the accuracy, completeness, or
                      reliability of the information provided.
                    </p>
                    <p>
                      You may not use our website for any unlawful purpose or to
                      solicit business from our clients.
                    </p>
                  </div>
                </div>

                {/* Changes to Terms */}
                <div>
                  <h2 className="text-2xl font-semibold text-spa-secondary mb-4">
                    9. Changes to Terms
                  </h2>
                  <p className="text-gray-700 leading-relaxed">
                    We reserve the right to modify these Terms at any time.
                    Changes will be effective immediately upon posting on our
                    website. Your continued use of our services constitutes
                    acceptance of the modified Terms.
                  </p>
                </div>

                {/* Contact Information */}
                <div>
                  <h2 className="text-2xl font-semibold text-spa-secondary mb-4">
                    10. Contact Information
                  </h2>
                  <p className="text-gray-700 leading-relaxed">
                    If you have any questions about these Terms of Service,
                    please contact us:
                  </p>
                  <div className="mt-4 p-4 bg-spa-neutral rounded-lg">
                    <p className="text-gray-700">
                      <strong>Bunbury Wellness Remedial Massage</strong>
                      <br />
                      Address: Unit 4 3 Victoria Street
                      <br />
                      Bunbury, WA 6230
                      <br />
                      Australia
                      <br />
                      Email:{" "}
                      <a
                        href="mailto:info@bunburywellnessremedialmassage.com.au"
                        className="text-spa-primary hover:underline"
                      >
                        info@bunburywellnessremedialmassage.com.au
                      </a>
                    </p>
                  </div>
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
