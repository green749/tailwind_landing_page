import { FaLeaf, FaSeedling, FaMugHot } from "react-icons/fa";

const benefits = [
  {
    title: "Matcha Green Tea",
    description:
      "A potent green tea made from the entire green tea leaf for a plethora of antioxidant benefits.",
    icon: <FaMugHot />,
  },
  {
    title: "Cacao Superfood Powder",
    description:
      "Cacao is a powerhouse of anti-aging and antioxidant properties.",
    icon: <FaSeedling />,
  },
  {
    title: "Horsetail Powerful Herb",
    description:
      "Has silica and antioxidant compounds to aid with the synthesis of collagen production.",
    icon: <FaLeaf />,
  },
];

const Benefits = () => {
  return (
    <section  id="benefits" className="bg-[#FCEBE7] py-20">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <div className="max-w-xl">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
            We added superfoods
            <br />
            to boost benefits
          </h2>

          <p className="mt-5 text-gray-600 leading-7">
            We've added superfoods to boost benefits in your overall health,
            mental well-being, skin and hair. Plus, they taste naturally
            delicious.
          </p>
        </div>

        {/* Cards */}
        <div className="grid gap-6 mt-14 md:grid-cols-2 lg:grid-cols-3">
          {benefits.map((item, index) => (
            <div
              key={index}
              className="relative bg-white rounded-2xl p-8 shadow-md hover:shadow-xl transition-all duration-300"
            >
              <div className="absolute top-6 right-6 text-4xl text-rose-400">
                {item.icon}
              </div>

              <h3 className="text-2xl font-semibold text-gray-900 w-4/5">
                {item.title}
              </h3>

              <p className="mt-4 text-gray-500 leading-7">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;