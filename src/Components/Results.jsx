const stats = [
  {
    number: "30",
    label: "Products",
  },
  {
    number: "300+",
    label: "Customers",
  },
  {
    number: "18",
    label: "Formulas",
  },
];

const Results = () => {
  return (
    <section id="results" className="py-20 px-6">
      <div
        className="max-w-7xl mx-auto rounded-3xl py-16 px-8 text-center text-white relative overflow-hidden"
        style={{
          backgroundColor: "#F58F97",
          backgroundImage: `
            radial-gradient(circle at 20% 20%, transparent 0 30px, rgba(255,255,255,.08) 31px 32px, transparent 33px),
            radial-gradient(circle at 80% 60%, transparent 0 35px, rgba(255,255,255,.08) 36px 37px, transparent 38px)
          `,
        }}
      >
        {/* Heading */}
        <h2 className="text-3xl md:text-5xl font-bold">
          Supported By Science,
          <span className="block md:inline"> Driven By Results</span>
        </h2>

        <p className="mt-4 text-white/90 max-w-2xl mx-auto">
          You deserve to feel healthy on the inside, and radiant on the outside.
        </p>

        {/* Statistics */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-3">
          {stats.map((item, index) => (
            <div
              key={index}
              className={`py-6 ${
                index !== stats.length - 1
                  ? "md:border-r border-white/40"
                  : ""
              }`}
            >
              <h3 className="text-5xl font-bold">{item.number}</h3>
              <p className="mt-2 text-lg text-white/90">{item.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Results;