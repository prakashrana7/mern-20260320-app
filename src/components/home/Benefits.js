const benefits = [
  {
    icon: "🛍️",
    label: "Massive Product Selection",
    info: "Unlimited styles and exclusive sneaker drops, instantly at your fingertips.",
  },
  {
    icon: "⏱️",
    label: "24/7 Shopping Convenience",
    info: " Shop your favorite brands instantly, anytime, anywhere.",
  },
  {
    icon: "🛒",
    label: "Seamless Shopping Experience",
    info: "Smart categories and effortless filters to find your exact match instantly.",
  },
  {
    icon: "💳",
    label: "Secure Payment",
    info: "Safe payment gateways, Online and Cash on delivery.",
  },
];

const Benefits = () => {
  return (
    <section id="benefits" className="py-12 px-4">
      <div className="container max-w-7xl mx-auto px-4">
        <h2 className="text-center mb-10 font-bold text-2xl md:text-3xl tracking-tight">
          Why Choose Us
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="flex flex-col items-center text-center gap-2">
              <span className="text-4xl mb-1 text-gray-500">{benefit.icon}</span>
              <h4 className="text-base md:text-lg dark:text-gray-200 font-semibold text-gray-900 tracking-tight">
                {benefit.label}
              </h4>
              <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed max-w-62.5">
                {benefit.info}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
