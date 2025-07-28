import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { RiLeafLine } from "@remixicon/react";
import { Clock, MapPin, Phone, ArrowRight } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title:
    "Sports Massage Bunbury - Athletic Therapy & Injury Recovery | Bunbury Wellness",
  description:
    "Professional sports massage therapy in Bunbury, WA. Female massage therapists available. Specialized treatment for athletes, sports injuries, and performance enhancement. Book your session.",
  keywords: [
    "sports massage Bunbury",
    "female sports massage Bunbury",
    "women sports massage Bunbury",
    "sports massage therapy Bunbury",
    "sports massage for athletes Bunbury",
    "massage for sports injuries Bunbury",
    "athletic massage Bunbury",
    "massage for runners Bunbury",
    "massage for football players Bunbury",
    "sports injury massage Bunbury",
    "performance massage Bunbury",
    "athletic therapy Bunbury",
    "female massage therapist Bunbury",
  ],
  openGraph: {
    title: "Sports Massage Bunbury - Athletic Therapy & Injury Recovery",
    description:
      "Professional sports massage therapy in Bunbury, WA. Female massage therapists available. Specialized treatment for athletes and sports injuries.",
  },
};

export default function SportsMassagePage() {
  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url('/back.jpg')` }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-spa-secondary via-spa-secondary/60 to-transparent" />
        <div className="relative z-10 text-center text-white px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-light mb-6 leading-tight">
            Sports Massage
          </h1>
          <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto leading-relaxed opacity-90">
            Specialized massage therapy for athletes, performance enhancement,
            and injury recovery
          </p>
          <Link href="/#contact" className="btn-spa-accent text-lg group">
            <span>Book Your Session</span>
            <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </div>
      </section>

      {/* Service Details */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-light text-spa-secondary mb-4">
              What is Sports Massage?
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Sports massage is specifically designed for athletes and active
              individuals. Our therapists use techniques that enhance
              performance, prevent injuries, and accelerate recovery from
              sports-related strains and injuries.
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
                  <span>Enhances athletic performance and flexibility</span>
                </li>
                <li className="flex items-start">
                  <RiLeafLine className="h-5 w-5 text-spa-primary mt-1 mr-3 flex-shrink-0" />
                  <span>Prevents sports injuries through maintenance</span>
                </li>
                <li className="flex items-start">
                  <RiLeafLine className="h-5 w-5 text-spa-primary mt-1 mr-3 flex-shrink-0" />
                  <span>
                    Accelerates recovery from training and competition
                  </span>
                </li>
                <li className="flex items-start">
                  <RiLeafLine className="h-5 w-5 text-spa-primary mt-1 mr-3 flex-shrink-0" />
                  <span>Reduces muscle soreness and fatigue</span>
                </li>
                <li className="flex items-start">
                  <RiLeafLine className="h-5 w-5 text-spa-primary mt-1 mr-3 flex-shrink-0" />
                  <span>Improves range of motion and joint mobility</span>
                </li>
                <li className="flex items-start">
                  <RiLeafLine className="h-5 w-5 text-spa-primary mt-1 mr-3 flex-shrink-0" />
                  <span>Supports rehabilitation from sports injuries</span>
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
                    Pre-Event Massage
                  </h4>
                  <p className="text-gray-700 text-sm">
                    Light, energizing massage to prepare muscles for activity
                    and improve performance.
                  </p>
                </div>
                <div className="bg-spa-neutral p-6 rounded-lg">
                  <h4 className="font-semibold text-spa-secondary mb-2">
                    Post-Event Massage
                  </h4>
                  <p className="text-gray-700 text-sm">
                    Recovery-focused massage to reduce soreness, remove lactic
                    acid, and promote healing.
                  </p>
                </div>
                <div className="bg-spa-neutral p-6 rounded-lg">
                  <h4 className="font-semibold text-spa-secondary mb-2">
                    Maintenance Massage
                  </h4>
                  <p className="text-gray-700 text-sm">
                    Regular sessions to prevent injuries, address imbalances,
                    and maintain peak condition.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Sports & Athletes */}
          <div className="mb-16">
            <h3 className="text-2xl font-light text-spa-secondary mb-8 text-center">
              Sports We Specialize In
            </h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center p-6 bg-spa-neutral rounded-lg">
                <h4 className="font-semibold text-spa-secondary mb-2">
                  Running & Athletics
                </h4>
                <p className="text-gray-600 text-sm">
                  Marathon training, track events, and general running injuries
                </p>
              </div>
              <div className="text-center p-6 bg-spa-neutral rounded-lg">
                <h4 className="font-semibold text-spa-secondary mb-2">
                  Football & Rugby
                </h4>
                <p className="text-gray-600 text-sm">
                  Contact sports injuries, muscle strains, and impact recovery
                </p>
              </div>
              <div className="text-center p-6 bg-spa-neutral rounded-lg">
                <h4 className="font-semibold text-spa-secondary mb-2">
                  Swimming
                </h4>
                <p className="text-gray-600 text-sm">
                  Shoulder and back issues from repetitive swimming motions
                </p>
              </div>
              <div className="text-center p-6 bg-spa-neutral rounded-lg">
                <h4 className="font-semibold text-spa-secondary mb-2">
                  Cycling
                </h4>
                <p className="text-gray-600 text-sm">
                  Lower back, hip, and knee issues from cycling posture
                </p>
              </div>
              <div className="text-center p-6 bg-spa-neutral rounded-lg">
                <h4 className="font-semibold text-spa-secondary mb-2">
                  Tennis & Golf
                </h4>
                <p className="text-gray-600 text-sm">
                  Repetitive strain injuries and rotational movement issues
                </p>
              </div>
              <div className="text-center p-6 bg-spa-neutral rounded-lg">
                <h4 className="font-semibold text-spa-secondary mb-2">
                  Gym & Fitness
                </h4>
                <p className="text-gray-600 text-sm">
                  Weight training injuries and muscle recovery support
                </p>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center bg-spa-primary text-white p-12 rounded-lg">
            <h3 className="text-2xl font-light mb-4">
              Ready to Enhance Your Performance?
            </h3>
            <p className="text-lg mb-8 opacity-90">
              Book your sports massage session with our experienced female
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
