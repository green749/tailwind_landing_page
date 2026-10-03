const testimonials = [
  {
    title: "Incredible Experience",
    review:
      "I've been feeling really confident without makeup lately. Wholy Dose changed my life. My hair has grown back after falling out, skin is clearing, and I can't stop getting compliments of my glowing skin!",
    name: "Martha Smith",
    location: "California",
  },
  {
    title: "Genious Products",
    review:
      "I've tried so many things for my skin, from everything topical to oral. But after one month with Wholy Dose, my skin is so much smoother and complexion has become clear and bright!",
    name: "Alley Holzer",
    location: "New York",
  },
];

const Testimonial = () => {
  return (
    <section id="testimonials" className="bg-[#FCF5F3] py-20">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-serif text-center text-gray-900">
          Client testimonials
        </h2>

        {/* Cards */}
        <div className="grid md:grid-cols-2 gap-8 mt-14">
          {testimonials.map((item, index) => (
            <div key={index} className="text-center">
              {/* Review Box */}
              <div className="relative bg-white rounded-xl shadow-sm px-8 py-10">
                <h3 className="text-2xl font-semibold text-gray-900">
                  {item.title}
                </h3>

                <p className="mt-5 text-gray-500 leading-7">
                  "{item.review}"
                </p>

                {/* Small Triangle */}
                <div className="absolute left-1/2 -bottom-3 -translate-x-1/2 w-6 h-6 bg-white rotate-45"></div>
              </div>

              {/* Client Info */}
              <div className="mt-8">
                <h4 className="font-semibold text-gray-900">{item.name}</h4>
                <p className="text-gray-500">{item.location}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination Dots */}
        <div className="flex justify-center gap-3 mt-12">
          <span className="w-3 h-3 rounded-full bg-gray-700"></span>
          <span className="w-3 h-3 rounded-full border border-gray-400"></span>
          <span className="w-3 h-3 rounded-full border border-gray-400"></span>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;