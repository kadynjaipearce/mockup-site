"use client";
import { RiMapPinLine, RiMailLine, RiTimeLine } from "@remixicon/react";

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
          <div className="bg-gray-50 p-0 rounded-sm flex items-center justify-center min-h-[500px] h-full w-full">
            <iframe
              title="Bunbury WA Map"
              src="https://www.google.com/maps?q=Bunbury+WA,+Australia&output=embed"
              width="100%"
              height="100%"
              style={{
                border: 0,
                borderRadius: "0.375rem",
                minHeight: "500px",
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
                <RiMapPinLine className="h-6 w-6 text-spa-primary mt-1 flex-shrink-0" />
                <div>
                  <div className="font-medium text-spa-secondary">Visit Us</div>
                  <div className="text-gray-600">
                    Unit 4 3 Victoria Street
                    <br />
                    Bunbury, WA 6230
                    <br />
                    Australia
                  </div>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <RiMailLine className="h-6 w-6 text-spa-primary mt-1 flex-shrink-0" />
                <div>
                  <div className="font-medium text-spa-secondary">Email Us</div>
                  <div className="text-gray-600">
                    <a
                      href="mailto:info@bunburywellnessremedialmassage.com.au"
                      className="hover:text-spa-primary transition-colors"
                    >
                      info@bunburywellnessremedialmassage.com.au
                    </a>
                  </div>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <RiTimeLine className="h-6 w-6 text-spa-primary mt-1 flex-shrink-0" />
                <div>
                  <div className="font-medium text-spa-secondary">
                    Opening Hours
                  </div>
                  <div className="text-gray-600 space-y-2">
                    <div className="flex justify-between">
                      <span className="font-medium">Mon, Thu, Fri</span>
                      <span>10:30 AM - 5:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="font-medium">Tuesday</span>
                      <span>10:30 AM - 2:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="font-medium">Wednesday</span>
                      <span>12:30 PM - 5:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="font-medium">Sat, Sun</span>
                      <span className="text-gray-500">Closed</span>
                    </div>
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
