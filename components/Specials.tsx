const Specials = () => {
  const specials = [
    {
      type: "Monthly Special",
      title: "Winter Wellness Special",
      description:
        "15% off all Remedial Massages this month. Stay warm and healthy!",
      cta: "Book Now",
    },
    {
      type: "Weekly Special",
      title: "Midweek Relaxation",
      description:
        "Book a Relaxation Massage on Wednesdays and get a free aromatherapy upgrade",
      cta: "Book Wednesday",
    },
    {
      type: "Weekly Special",
      title: "Mum-to-Be Mondays",
      description: "Pregnancy Massage 10% off every Monday for expectant mums",
      cta: "Book Monday",
    },
  ];

  return (
    <section id="specials" className="py-20 bg-spa-neutral">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-light text-spa-secondary mb-4">
            Weekly & Monthly Specials
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Take advantage of our exclusive offers designed to make wellness
            more accessible
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {specials.map((special, index) => (
            <div
              key={index}
              className="bg-spa-primary text-white p-8 rounded-sm card-hover"
            >
              <div className="text-spa-accent text-sm font-medium uppercase tracking-wide mb-2">
                {special.type}
              </div>
              <h3 className="text-xl font-semibold mb-4">{special.title}</h3>
              <p className="text-white/90 mb-8 leading-relaxed">
                {special.description}
              </p>
              <button
                className="bg-transparent border-2 border-spa-accent text-spa-accent px-6 py-3 font-medium tracking-wide transition-all duration-300 ease-in-out relative overflow-hidden hover:text-spa-secondary"
                style={{
                  position: "relative",
                }}
              >
                <span
                  className="absolute inset-0 bg-spa-accent transition-transform duration-300 ease-in-out"
                  style={{
                    transform: "var(--before-transform, translateX(-100%))",
                  }}
                ></span>
                <span className="relative z-10">{special.cta}</span>
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Specials;
