import React from "react";
import { FaInstagram, FaSpotify, FaYoutube, FaTwitter } from "react-icons/fa";

const Footer2: React.FC = () => {
  return (
    <footer className="bg-black text-white mt-20">
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-3 gap-10 border-t border-gray-800">
        
        {/* About Section */}
        <div>
          <h2 className="text-2xl font-bold mb-4">Andrea H.</h2>
          <p className="text-gray-400">
            Soulful soundscapes. Honest lyrics. Timeless energy. Explore the music, stay for the journey.
          </p>
        </div>

        {/* Navigation Links */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Explore</h3>
          <ul className="space-y-2 text-gray-300">
            <li>
              <a href="#releases" className="hover:text-white transition duration-200">Releases</a>
            </li>
            <li>
              <a href="#videos" className="hover:text-white transition duration-200">Videos</a>
            </li>
            <li>
              <a href="#tour" className="hover:text-white transition duration-200">Tour</a>
            </li>
            <li>
              <a href="#contact" className="hover:text-white transition duration-200">Contact</a>
            </li>
          </ul>
        </div>

        {/* Social Media Icons */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Connect</h3>
          <div className="flex space-x-4 text-2xl">
            <a
              href="https://instagram.com/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="hover:text-pink-500 transition"
            >
              <FaInstagram />
            </a>
            <a
              href="https://spotify.com/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Spotify"
              className="hover:text-green-500 transition"
            >
              <FaSpotify />
            </a>
            <a
              href="https://youtube.com/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="YouTube"
              className="hover:text-red-500 transition"
            >
              <FaYoutube />
            </a>
            <a
              href="https://twitter.com/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Twitter"
              className="hover:text-blue-400 transition"
            >
              <FaTwitter />
            </a>
          </div>
        </div>
      </div>

      <div className="text-center text-gray-500 text-sm py-6 border-t border-gray-800">
        © {new Date().getFullYear()} Andrea H. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer2;
