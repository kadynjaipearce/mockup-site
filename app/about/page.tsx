import { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import {
  RiLeafLine,
  RiHeartLine,
  RiShieldCheckLine,
  RiUserLine,
  RiAwardLine,
  RiCalendar2Line,
  RiMailLine,
} from "@remixicon/react";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "About Us - Bunbury Wellness Remedial Massage",
  description:
    "Discover the story behind Bunbury Wellness and meet our experienced team of remedial massage therapists. Learn about our values, journey, and commitment to your health and wellbeing.",
  keywords:
    "about us, Bunbury wellness, remedial massage therapists, massage therapy team, wellness journey, therapeutic care",
  openGraph: {
    title: "About Us - Bunbury Wellness Remedial Massage",
    description:
      "Discover the story behind Bunbury Wellness and meet our experienced team of remedial massage therapists.",
    type: "website",
    locale: "en_AU",
  },
};

const teamMembers = [
  {
    name: "Fuko Kodama",
    role: "Senior Remedial Massage Therapist",
    experience: "8+ years",
    specialties: [
      "Pregnancy Massage",
      "Remedial Therapy",
      "Cupping",
      "Heated Tools",
    ],
    image: "/fuko.jpg",
    description:
      "Fuko holds a Diploma in Remedial Massage and has been practicing massage since 2016. She has always been passionate about helping her clients achieve the best results while ensuring they feel relaxed throughout the process. She integrates cupping and heated tools to support these goals.",
  },
  {
    name: "Tan Hsin-Wen",
    role: "Remedial Massage Therapist",
    experience: "10+ years",
    specialties: [
      "Dry Needling",
      "Spinal Mobilisations",
      "Taping/Strapping",
      "Sports Massage",
    ],
    image: "/placeholder.svg",
    description:
      "Tan holds a Diploma in Remedial Massage and has over 10 years of experience. He incorporates dry needling, spinal mobilisations (not spinal manipulation), and taping/strapping into his treatments to provide comprehensive therapeutic care.",
  },
];

const values = [
  {
    icon: RiHeartLine,
    title: "Compassionate Care",
    description:
      "We treat every client with genuine care and understanding, creating a safe space for healing and relaxation.",
  },
  {
    icon: RiShieldCheckLine,
    title: "Professional Excellence",
    description:
      "Our therapists are fully qualified and continuously update their skills to provide the highest standard of care.",
  },
  {
    icon: RiUserLine,
    title: "Client-Centered",
    description:
      "Every treatment is personalized to your specific needs, ensuring you receive the most effective care possible.",
  },
  {
    icon: RiAwardLine,
    title: "Proven Results",
    description:
      "Our track record speaks for itself - thousands of satisfied clients who have experienced real relief and improvement.",
  },
];

const milestones = [
  {
    year: "2016",
    title: "Practice Founded",
    description:
      "Started as a small home studio with a vision to provide exceptional massage therapy in Bunbury.",
  },
  {
    year: "2018",
    title: "First Clinic Location",
    description:
      "Moved to our first dedicated clinic space to serve more clients in the Bunbury community.",
  },
  {
    year: "2020",
    title: "Expanded Services",
    description:
      "Added pregnancy massage and dry needling to our service offerings.",
  },
  {
    year: "2023",
    title: "Current Location",
    description:
      "Moved to our current premium location to provide an even better experience for our clients.",
  },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      <Header />
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url('/front.jpg')`, filter: "blur(5px)" }}
        />
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-spa-secondary via-spa-secondary/60 to-transparent" />
        <div className="relative z-10 text-center text-white px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
          <div className="flex justify-center mb-8">
            <RiHeartLine className="h-20 w-20 text-spa-accent" />
          </div>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-light mb-6 leading-tight">
            About Us
          </h1>
          <div className="font-serif text-xl md:text-2xl lg:text-3xl mb-8 italic text-spa-accent">
            Discover the Story Behind Bunbury Wellness
          </div>
          <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto leading-relaxed opacity-90">
            Meet the team dedicated to your health and wellbeing
          </p>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 bg-spa-neutral">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-light text-spa-secondary mb-4">
              Our Values
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              The principles that guide everything we do and every client we
              serve
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-spa-primary flex items-center justify-center mx-auto mb-4">
                  <value.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-spa-secondary mb-3">
                  {value.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Team */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-light text-spa-secondary mb-4">
              Meet Our Team
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Experienced, qualified therapists dedicated to your health and
              wellbeing
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {teamMembers.map((member, index) => (
              <div key={index} className="bg-spa-neutral p-8">
                <div className="flex flex-col md:flex-row items-start gap-6">
                  <div className="relative w-32 h-32 md:w-40 md:h-40 flex-shrink-0">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-semibold text-spa-secondary mb-2">
                      {member.name}
                    </h3>
                    <p className="text-spa-primary font-medium mb-2">
                      {member.role}
                    </p>
                    <p className="text-gray-600 mb-4">
                      {member.experience} experience
                    </p>
                    <p className="text-gray-700 leading-relaxed mb-4">
                      {member.description}
                    </p>
                    <div>
                      <h4 className="font-semibold text-spa-secondary mb-2">
                        Specialties:
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {member.specialties.map((specialty, idx) => (
                          <span
                            key={idx}
                            className="bg-spa-primary text-white px-3 py-1 text-sm"
                          >
                            {specialty}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Journey */}
      <section className="py-20 bg-spa-neutral">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-light text-spa-secondary mb-4">
              Our Journey
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Key milestones in our mission to provide exceptional massage
              therapy in Bunbury
            </p>
          </div>

          <div className="relative">
            <div className="space-y-8">
              {milestones.map((milestone, index) => (
                <div key={index} className="flex items-start gap-6 relative">
                  <div className="flex-shrink-0 relative z-10">
                    <div className="w-16 h-16 bg-spa-primary flex items-center justify-center">
                      <span className="text-white font-bold text-lg">
                        {milestone.year}
                      </span>
                    </div>
                    {/* Connecting line from this dot to the next */}
                    {index < milestones.length - 1 && (
                      <div
                        className="absolute left-8 top-16 w-0.5 bg-spa-primary/30"
                        style={{ height: "calc(100% + 2rem)" }}
                      ></div>
                    )}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-spa-secondary mb-2">
                      {milestone.title}
                    </h3>
                    <p className="text-gray-700 leading-relaxed">
                      {milestone.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-light text-spa-secondary mb-4">
              Why Choose Bunbury Wellness?
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              What sets us apart in the Bunbury wellness community
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-spa-primary flex items-center justify-center flex-shrink-0 mt-1">
                  <RiLeafLine className="h-4 w-4 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-spa-secondary mb-2">
                    Female Therapists Available
                  </h3>
                  <p className="text-gray-600 text-sm">
                    We understand that some clients prefer female therapists,
                    and we&apos;re proud to offer this option for your comfort
                    and peace of mind.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-spa-primary flex items-center justify-center flex-shrink-0 mt-1">
                  <RiLeafLine className="h-4 w-4 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-spa-secondary mb-2">
                    Comprehensive Treatment Plans
                  </h3>
                  <p className="text-gray-600 text-sm">
                    We don&apos;t just treat symptoms - we create personalized
                    care plans that address the root cause of your discomfort.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-spa-primary flex items-center justify-center flex-shrink-0 mt-1">
                  <RiLeafLine className="h-4 w-4 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-spa-secondary mb-2">
                    Advanced Techniques
                  </h3>
                  <p className="text-gray-600 text-sm">
                    From traditional remedial massage to advanced dry needling,
                    we offer a full range of therapeutic techniques.
                  </p>
                </div>
              </div>
            </div>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-spa-primary flex items-center justify-center flex-shrink-0 mt-1">
                  <RiLeafLine className="h-4 w-4 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-spa-secondary mb-2">
                    Pregnancy-Safe Care
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Our pregnancy massage specialists are trained in safe,
                    gentle techniques specifically designed for expectant
                    mothers.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-spa-primary flex items-center justify-center flex-shrink-0 mt-1">
                  <RiLeafLine className="h-4 w-4 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-spa-secondary mb-2">
                    Convenient Location
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Located in the heart of Bunbury, we&apos;re easily
                    accessible for residents throughout the region.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-spa-primary flex items-center justify-center flex-shrink-0 mt-1">
                  <RiLeafLine className="h-4 w-4 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-spa-secondary mb-2">
                    Flexible Scheduling
                  </h3>
                  <p className="text-gray-600 text-sm">
                    We offer flexible appointment times to fit your busy
                    schedule, including early morning and evening sessions.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <div className="max-w-6xl mx-auto text-center bg-spa-primary text-white p-12 mb-20">
        <h3 className="text-2xl font-light mb-4">
          Ready to Experience the Difference?
        </h3>
        <p className="text-lg mb-8 opacity-90">
          Book your session with our experienced team and start your wellness
          journey today
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link
            href="/#contact"
            className="btn-spa-accent inline-flex items-center gap-2 group"
          >
            <span>Book Your Session</span>
            <RiCalendar2Line className="h-5 w-5 transition-colors duration-300 group-hover:text-[#092518] z-10" />
          </Link>
          <Link
            href="mailto:info@bunburywellnessremedialmassage.com.au"
            className="btn-spa-service inline-flex items-center gap-2 group"
          >
            <span>Email to Discuss</span>
            <RiMailLine className="h-5 w-5 transition-colors duration-300 group-hover:text-[#092518] z-10" />
          </Link>
        </div>
      </div>

      <Footer />
    </div>
  );
}
