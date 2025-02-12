import { FaFacebookF, FaTwitter, FaGooglePlusG, FaLinkedinIn, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#8ec63f] text-white p-10">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Logo & About */}
        <div>
          <h2 className="text-2xl font-bold italic">
            AGENCY <span className="bg-orange-500 text-white px-2 py-1 text-sm">COMPANY TAGLINE HERE</span>
          </h2>
          <p className="mt-4 text-sm">
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.
          </p>
          <p className="mt-4">&copy; Agency 2016</p>
        </div>

        {/* Services */}
        <div>
          <h3 className="text-lg font-bold mb-3">SERVICES</h3>
          <ul className="space-y-2">
            <li><a href="#" className="hover:underline">Lorem Ipsum</a></li>
            <li><a href="#" className="hover:underline">Lorem</a></li>
            <li><a href="#" className="hover:underline">Lorem Ipsum Dolor</a></li>
            <li><a href="#" className="hover:underline">Lorem Ipsum</a></li>
            <li><a href="#" className="hover:underline">Lorem</a></li>
            <li><a href="#" className="hover:underline">Lorem Ipsum Dolor</a></li>
            <li><a href="#" className="hover:underline">Lorem Ipsum Dolor</a></li>
          </ul>
        </div>

        {/* Useful Links */}
        <div>
          <h3 className="text-lg font-bold mb-3">USEFUL LINKS</h3>
          <ul className="space-y-2">
            <li><a href="#" className="hover:underline">Lorem Ipsum</a></li>
            <li><a href="#" className="hover:underline">Lorem</a></li>
            <li><a href="#" className="hover:underline">Lorem Ipsum Dolor</a></li>
            <li><a href="#" className="hover:underline">Lorem Ipsum</a></li>
            <li><a href="#" className="hover:underline">Lorem</a></li>
            <li><a href="#" className="hover:underline">Lorem Ipsum Dolor</a></li>
            <li><a href="#" className="hover:underline">Lorem Ipsum Dolor</a></li>
          </ul>
        </div>

        {/* Contact & Social */}
        <div>
          <h3 className="text-lg font-bold mb-3">CONTACTS</h3>
          <p>📞 (123) 456-78-90</p>
          <p>📞 (123) 456-78-90</p>
          <p>📧 info@website.com</p>

          <h3 className="text-lg font-bold mt-5">FOLLOW US</h3>
          <div className="flex space-x-3 mt-3">
            <FaFacebookF className="cursor-pointer text-xl hover:text-gray-300" />
            <FaTwitter className="cursor-pointer text-xl hover:text-gray-300" />
            <FaGooglePlusG className="cursor-pointer text-xl hover:text-gray-300" />
            <FaLinkedinIn className="cursor-pointer text-xl hover:text-gray-300" />
            <FaYoutube className="cursor-pointer text-xl hover:text-gray-300" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;