import { FaAsterisk } from "react-icons/fa";

const Footer = () => {
  return (
    <footer id="contact" className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Logo & Description */}
          <div>
            <div className="flex items-center gap-3">
              <FaAsterisk className="text-pink-400 text-xl" />
              <h2 className="text-2xl font-semibold text-gray-900">
                GlowCare
              </h2>
            </div>

            <p className="mt-5 text-gray-500 leading-7">
              We create premium skincare products made with carefully selected
              natural ingredients to help you achieve healthy, radiant skin.
              Your beauty journey begins with confidence and self-care.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold text-gray-900 mb-5">
              Quick Links
            </h3>

            <ul className="space-y-3 text-gray-500">
              <li>
                <a href="#" className="hover:text-pink-500 transition">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-pink-500 transition">
                  Products
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-pink-500 transition">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-pink-500 transition">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-xl font-semibold text-gray-900 mb-5">
              Company
            </h3>

            <ul className="space-y-3 text-gray-500">
              <li>
                <a href="#" className="hover:text-pink-500 transition">
                  Our Story
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-pink-500 transition">
                  Ingredients
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-pink-500 transition">
                  Testimonials
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-pink-500 transition">
                  Blog
                </a>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-xl font-semibold text-gray-900 mb-5">
              Support
            </h3>

            <ul className="space-y-3 text-gray-500">
              <li>
                <a href="#" className="hover:text-pink-500 transition">
                  FAQ
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-pink-500 transition">
                  Shipping & Delivery
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-pink-500 transition">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-pink-500 transition">
                  Terms & Conditions
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-200 mt-16 pt-6 flex flex-col md:flex-row justify-between items-center text-gray-500 text-sm">
          <p>© 2026 GlowCare. All Rights Reserved.</p>

          <p className="mt-3 md:mt-0">
            Made with love for healthy and glowing skin.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;