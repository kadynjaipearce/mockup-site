"use client";
import { useState } from "react";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-light text-spa-secondary mb-4">
            Find Us in Bunbury
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Ready to experience the healing touch? Get in touch to schedule your
            appointment
          </p>
        </div>
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Google Maps Only, fills left space or full width on mobile */}
          <div className="bg-gray-50 p-0 rounded-sm flex items-center justify-center min-h-[400px] h-full w-full">
            <iframe
              title="Bunbury WA Map"
              src="https://www.google.com/maps?q=Bunbury+WA,+Australia&output=embed"
              width="100%"
              height="100%"
              style={{
                border: 0,
                borderRadius: "0.375rem",
                minHeight: "400px",
                minWidth: "100%",
              }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold text-spa-secondary mb-6">
                Get In Touch
              </h3>
              <p className="text-gray-600 mb-8 leading-relaxed">
                We&apos;re here to help you on your wellness journey. Contact us
                today to discuss your needs and book your personalized
                treatment.
              </p>
            </div>
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <MapPin className="h-6 w-6 text-spa-primary mt-1 flex-shrink-0" />
                <div>
                  <div className="font-medium text-spa-secondary">Visit Us</div>
                  <div className="text-gray-600">
                    123 Wellness Street
                    <br />
                    Bunbury, WA 6230
                    <br />
                    Australia
                  </div>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <Phone className="h-6 w-6 text-spa-primary mt-1 flex-shrink-0" />
                <div>
                  <div className="font-medium text-spa-secondary">Call Us</div>
                  <div className="text-gray-600">
                    <a
                      href="tel:+61400000000"
                      className="hover:text-spa-primary transition-colors"
                    >
                      (08) 9721 0000
                    </a>
                  </div>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <Mail className="h-6 w-6 text-spa-primary mt-1 flex-shrink-0" />
                <div>
                  <div className="font-medium text-spa-secondary">Email Us</div>
                  <div className="text-gray-600">
                    <a
                      href="mailto:hello@bunburywellness.com.au"
                      className="hover:text-spa-primary transition-colors"
                    >
                      hello@bunburywellness.com.au
                    </a>
                  </div>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <Clock className="h-6 w-6 text-spa-primary mt-1 flex-shrink-0" />
                <div>
                  <div className="font-medium text-spa-secondary">
                    Opening Hours
                  </div>
                  <div className="text-gray-600 space-y-1">
                    <div>Monday - Friday: 9:00 AM - 7:00 PM</div>
                    <div>Saturday: 9:00 AM - 5:00 PM</div>
                    <div>Sunday: 10:00 AM - 4:00 PM</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
