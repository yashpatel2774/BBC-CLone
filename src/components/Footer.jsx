import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-100 text-gray-700 mt-12">
      <div className="max-w-6xl mx-auto px-6 py-8 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
       
        <div>
          <h3 className="font-semibold mb-3">BBC</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:underline">About BBC</a></li>
            <li><a href="#" className="hover:underline">Careers</a></li>
            <li><a href="#" className="hover:underline">Contact</a></li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold mb-3">Help</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:underline">FAQ</a></li>
            <li><a href="#" className="hover:underline">Accessibility Help</a></li>
            <li><a href="#" className="hover:underline">Screen Reader</a></li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold mb-3">Legal</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:underline">Terms of Use</a></li>
            <li><a href="#" className="hover:underline">Privacy Policy</a></li>
            <li><a href="#" className="hover:underline">Cookie Policy</a></li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold mb-3">Sections</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:underline">News</a></li>
            <li><a href="#" className="hover:underline">Sport</a></li>
            <li><a href="#" className="hover:underline">Weather</a></li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold mb-3">More from BBC</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:underline">iPlayer</a></li>
            <li><a href="#" className="hover:underline">Sounds</a></li>
            <li><a href="#" className="hover:underline">The BBC</a></li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold mb-3">Languages</h3>
          <select className="w-full border border-gray-300 text-sm p-1">
            <option>English</option>
            <option>Español</option>
            <option>বাংলা</option>
          </select>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 py-4 mt-6 border-t border-gray-300">
        <h4 className="text-sm font-semibold mb-3">Follow BBC on</h4>
        <div className="flex space-x-4 text-gray-600">
          <a href="https://www.facebook.com/bbcnews/" aria-label="Facebook" className="hover:text-blue-600">
            <FaFacebookF size={20} />
          </a>
          <a href="https://x.com/bbcnews" aria-label="Twitter" className="hover:text-blue-400">
            <FaTwitter size={20} />
          </a>
          <a href="https://www.instagram.com/bbcnews/" aria-label="Instagram" className="hover:text-pink-500">
            <FaInstagram size={20} />
          </a>
          <a href="https://www.youtube.com/bbcnews" aria-label="YouTube" className="hover:text-red-600">
            <FaYoutube size={20} />
          </a>
        </div>
      </div>

      <div className="border-t border-gray-300">
        <div className="max-w-6xl mx-auto px-6 py-4 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500">
          <p>© 2025 BBC. The BBC is not responsible for the content of external sites.</p>
          <div className="mt-3 md:mt-0 space-x-4">
            <a href="#" className="hover:underline">Privacy Help</a>
            <a href="#" className="hover:underline">Cookies</a>
            <a href="#" className="hover:underline">AdChoices</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
