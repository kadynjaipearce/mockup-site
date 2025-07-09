"use client";
import { useState } from "react";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { RiCalendar2Line } from "@remixicon/react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    window.alert(
      "Booking Request Sent! We'll contact you within 24 hours to confirm your appointment."
    );
    setFormData({
      name: "",
      email: "",
      phone: "",
      service: "",
      message: "",
    });
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-light text-spa-secondary mb-4">
            Book Your Session
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Ready to experience the healing touch? Get in touch to schedule your
            appointment
          </p>
        </div>
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-gray-50 p-8 rounded-sm">
            <h3 className="text-2xl font-semibold text-spa-secondary mb-6">
              Book an Appointment
            </h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Full Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleInputChange}
                  className="spa-input w-full"
                  placeholder="Your full name"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleInputChange}
                  className="spa-input w-full"
                  placeholder="your.email@example.com"
                />
              </div>
              <div>
                <label
                  htmlFor="phone"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Phone Number *
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  required
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="spa-input w-full"
                  placeholder="0400 000 000"
                />
              </div>
              <div>
                <label
                  htmlFor="service"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Preferred Service *
                </label>
                <select
                  id="service"
                  name="service"
                  required
                  value={formData.service}
                  onChange={handleInputChange}
                  className="spa-input w-full"
                >
                  <option value="">Select a service</option>
                  <option value="remedial">Remedial Massage</option>
                  <option value="relaxation">Relaxation Massage</option>
                  <option value="pregnancy">Pregnancy Massage</option>
                </select>
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Additional Notes
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleInputChange}
                  className="spa-input w-full resize-none"
                  placeholder="Any specific requirements or questions..."
                ></textarea>
              </div>
              <button
                type="submit"
                className="btn-spa-primary w-full justify-center h-12"
              >
                <RiCalendar2Line
                  className="inline-block mr-2 align-middle"
                  size={20}
                />
                <span>Send Booking Request</span>
              </button>
            </form>
          </div>
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold text-spa-secondary mb-6">
                Get In Touch
              </h3>
              <p className="text-gray-600 mb-8 leading-relaxed">
                We're here to help you on your wellness journey. Contact us
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
