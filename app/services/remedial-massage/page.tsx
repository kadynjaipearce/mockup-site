import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { RiLeafLine } from "@remixicon/react";
import { Clock, MapPin, Phone, ArrowRight } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title:
    "Remedial Massage Bunbury - Professional Pain Relief Therapy | Bunbury Wellness",
  description:
    "Expert remedial massage therapy in Bunbury, WA. Female massage therapists available. Professional treatment for chronic pain, muscle tension, and injury recovery. Book your session today.",
  keywords: [
    "remedial massage Bunbury",
    "female remedial massage Bunbury",
    "women remedial massage Bunbury",
    "remedial massage therapy Bunbury WA",
    "remedial massage for pain relief Bunbury",
    "professional remedial massage Bunbury",
    "best remedial massage Bunbury",
    "remedial massage therapist Bunbury",
    "massage for back pain Bunbury",
    "massage for neck pain Bunbury",
    "therapeutic massage Bunbury",
    "massage for chronic pain Bunbury",
    "female massage therapist Bunbury",
  ],
  openGraph: {
    title: "Remedial Massage Bunbury - Professional Pain Relief Therapy",
    description:
      "Expert remedial massage therapy in Bunbury, WA. Female massage therapists available. Professional treatment for chronic pain, muscle tension, and injury recovery.",
  },
};

export default function RemedialMassagePage() {
  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url('/front.jpg')` }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-spa-secondary via-spa-secondary/60 to-transparent" />
        <div className="relative z-10 text-center text-white px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-light mb-6 leading-tight">
            Remedial Massage
          </h1>
          <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto leading-relaxed opacity-90">
            Professional therapeutic massage for pain relief, injury recovery,
            and improved mobility
          </p>

          <button className="btn-spa-accent ml-8 inline">
            <span>Book Your Session</span>
          </button>
        </div>
      </section>

      {/* Service Details */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-light text-spa-secondary mb-4">
              What is Remedial Massage?
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Remedial massage is a therapeutic treatment that targets specific
              areas of pain, tension, and dysfunction. Our qualified therapists
              use advanced techniques to address the root cause of your
              discomfort and promote healing.
            </p>
          </div>

          {/* Benefits Grid */}
          <div className="grid md:grid-cols-2 gap-12 mb-16">
            <div>
              <h3 className="text-2xl font-light text-spa-secondary mb-6">
                Benefits
              </h3>
              <ul className="space-y-4 text-gray-700">
                <li className="flex items-start">
                  <RiLeafLine className="h-5 w-5 text-spa-primary mt-1 mr-3 flex-shrink-0" />
                  <span>Relieves chronic pain and muscle tension</span>
                </li>
                <li className="flex items-start">
                  <RiLeafLine className="h-5 w-5 text-spa-primary mt-1 mr-3 flex-shrink-0" />
                  <span>Improves range of motion and flexibility</span>
                </li>
                <li className="flex items-start">
                  <RiLeafLine className="h-5 w-5 text-spa-primary mt-1 mr-3 flex-shrink-0" />
                  <span>Accelerates injury recovery and rehabilitation</span>
                </li>
                <li className="flex items-start">
                  <RiLeafLine className="h-5 w-5 text-spa-primary mt-1 mr-3 flex-shrink-0" />
                  <span>Reduces stress and promotes relaxation</span>
                </li>
                <li className="flex items-start">
                  <RiLeafLine className="h-5 w-5 text-spa-primary mt-1 mr-3 flex-shrink-0" />
                  <span>Enhances circulation and lymphatic drainage</span>
                </li>
                <li className="flex items-start">
                  <RiLeafLine className="h-5 w-5 text-spa-primary mt-1 mr-3 flex-shrink-0" />
                  <span>Prevents future injuries through maintenance</span>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-2xl font-light text-spa-secondary mb-6">
                What to Expect
              </h3>
              <div className="space-y-6">
                <div className="bg-spa-neutral p-6 rounded-lg">
                  <h4 className="font-semibold text-spa-secondary mb-2">
                    Initial Consultation
                  </h4>
                  <p className="text-gray-700 text-sm">
                    We'll discuss your medical history, current symptoms, and
                    treatment goals to create a personalized treatment plan.
                  </p>
                </div>
                <div className="bg-spa-neutral p-6 rounded-lg">
                  <h4 className="font-semibold text-spa-secondary mb-2">
                    Treatment Session
                  </h4>
                  <p className="text-gray-700 text-sm">
                    Your therapist will use various techniques including deep
                    tissue work, trigger point therapy, and stretching to
                    address your specific needs.
                  </p>
                </div>
                <div className="bg-spa-neutral p-6 rounded-lg">
                  <h4 className="font-semibold text-spa-secondary mb-2">
                    Aftercare
                  </h4>
                  <p className="text-gray-700 text-sm">
                    We'll provide you with exercises, stretches, and lifestyle
                    recommendations to maintain your progress between sessions.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Conditions Treated */}
          <div className="mb-16">
            <h3 className="text-2xl font-light text-spa-secondary mb-8 text-center">
              Conditions We Treat
            </h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center p-6 bg-spa-neutral rounded-lg">
                <h4 className="font-semibold text-spa-secondary mb-2">
                  Back Pain
                </h4>
                <p className="text-gray-600 text-sm">
                  Chronic lower back pain, sciatica, and postural issues
                </p>
              </div>
              <div className="text-center p-6 bg-spa-neutral rounded-lg">
                <h4 className="font-semibold text-spa-secondary mb-2">
                  Neck & Shoulder
                </h4>
                <p className="text-gray-600 text-sm">
                  Tension headaches, whiplash, and shoulder impingement
                </p>
              </div>
              <div className="text-center p-6 bg-spa-neutral rounded-lg">
                <h4 className="font-semibold text-spa-secondary mb-2">
                  Sports Injuries
                </h4>
                <p className="text-gray-600 text-sm">
                  Muscle strains, ligament sprains, and overuse injuries
                </p>
              </div>
              <div className="text-center p-6 bg-spa-neutral rounded-lg">
                <h4 className="font-semibold text-spa-secondary mb-2">
                  Post-Surgery
                </h4>
                <p className="text-gray-600 text-sm">
                  Rehabilitation support and scar tissue management
                </p>
              </div>
              <div className="text-center p-6 bg-spa-neutral rounded-lg">
                <h4 className="font-semibold text-spa-secondary mb-2">
                  Work-Related
                </h4>
                <p className="text-gray-600 text-sm">
                  Repetitive strain injuries and desk posture issues
                </p>
              </div>
              <div className="text-center p-6 bg-spa-neutral rounded-lg">
                <h4 className="font-semibold text-spa-secondary mb-2">
                  Chronic Pain
                </h4>
                <p className="text-gray-600 text-sm">
                  Fibromyalgia, arthritis, and persistent muscle pain
                </p>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center bg-spa-primary text-white p-12 rounded-lg">
            <h3 className="text-2xl font-light mb-4">
              Ready to Start Your Recovery?
            </h3>
            <p className="text-lg mb-8 opacity-90">
              Book your remedial massage session with our experienced female
              therapists
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link href="/#contact" className="btn-spa-accent">
                <span>Book Appointment</span>
              </Link>
              <Link href="tel:+61897210000" className="btn-spa-primary">
                <span>Call Now</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
