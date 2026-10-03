import handImage from "../assets/hand.png";

const Calltoaction = () => {
  return (
    <section id="about" className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 items-center gap-10">
          {/* Left Content */}
          <div>
            <h2 className="text-5xl font-serif font-semibold text-gray-900 leading-tight">
              A New Standard Of Beauty,
              <br />
              On Your Terms
            </h2>

            <p className="mt-8 text-lg text-gray-500 leading-8 max-w-lg">
              Traditional beauty products weren't doing us any good. They all
              tried to cover up or change who we are, instead of improving our
              health and giving us glow.
            </p>

            <button className="mt-10 bg-[#F58F97] hover:bg-[#ef7c86] text-white font-semibold px-10 py-4 rounded-lg transition duration-300">
              GET STARTED
            </button>
          </div>

          {/* Right Image */}
          <div className="flex justify-center lg:justify-end">
            <img
              src={handImage}
              alt="Beauty Product"
              className="w-105 object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Calltoaction;