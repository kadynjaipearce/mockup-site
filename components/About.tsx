import { RiLeafLine } from "@remixicon/react";

const About = () => {
  return (
    <section id="about" className="py-20 bg-spa-neutral">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="flex justify-center mb-8">
          <RiLeafLine className="h-16 w-16 text-spa-primary" />
        </div>

        <h2 className="text-3xl md:text-4xl font-light text-spa-secondary mb-8">
          Our Story
        </h2>

        <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-12 max-w-3xl mx-auto">
          From a humble home studio to a premium wellness destination in
          Bunbury, WA. Experience the difference of care, expertise, and a
          passion for healing that has transformed countless lives through the
          power of therapeutic touch.
        </p>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="text-center">
            <div className="text-3xl font-light text-spa-primary mb-2">5+</div>
            <div className="text-gray-600">Years Experience</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-light text-spa-primary mb-2">
              500+
            </div>
            <div className="text-gray-600">Happy Clients</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-light text-spa-primary mb-2">
              100%
            </div>
            <div className="text-gray-600">Dedicated Care</div>
          </div>
        </div>

        <button className="btn-spa-primary">
          <span>Learn More →</span>
        </button>
      </div>
    </section>
  );
};

export default About;
