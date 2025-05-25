import React from "react";
import {
  FaInstagram,
  FaSpotify,
  FaYoutube,
  FaTiktok,
  FaFacebook,
} from "react-icons/fa";
import { FaXTwitter as FaTwitter } from "react-icons/fa6";

const Footer2: React.FC = () => {
  return (
    <footer className="bg-black text-white mt-20">
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-3 gap-10 border-t border-gray-800">
        {/* About Section */}
        <div>
          <h2 className="text-2xl font-bold mb-4">ANDREAH</h2>
          <p className="text-gray-400">
            🎶 Singer-songwriter sharing raw, authentic music! Join the vibe!
            🎸✨
          </p>
        </div>

        {/* Navigation Links */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Explore</h3>
          <ul className="space-y-2 text-gray-300">
            <li>
              <a
                href="#releases"
                className="hover:text-white transition duration-200"
              >
                Releases
              </a>
            </li>
            <li>
              <a
                href="#videos"
                className="hover:text-white transition duration-200"
              >
                Videos
              </a>
            </li>
            <li>
              <a
                href="#tour"
                className="hover:text-white transition duration-200"
              >
                Tour
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="hover:text-white transition duration-200"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Social Media Icons */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Connect</h3>
          <div className="flex space-x-4 text-2xl">
            <a
              href="https://www.instagram.com/andreah.music"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="hover:text-pink-500 transition"
            >
              <FaInstagram />
            </a>
            <a
              href="http://open.spotify.com/artist/02yssJvjMJdJ3nueVhig4j"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Spotify"
              className="hover:text-green-500 transition"
            >
              <FaSpotify />
            </a>
            <a
              href="https://www.youtube.com/@andreahmusic"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="YouTube"
              className="hover:text-red-500 transition"
            >
              <FaYoutube />
            </a>
            <a
              href="https://x.com/andreahmusic"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="X"
              className="hover:text-blue-400 transition"
            >
              <FaTwitter />
            </a>
            <a
              href="https://www.tiktok.com/@andreahmusic"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Tiktok"
              className="hover:text-blue-400 transition"
            >
              <FaTiktok />
            </a>
            <a
              href="https://www.facebook.com/ANDREAH.live"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="hover:text-blue-400 transition"
            >
              <FaFacebook />
            </a>
          </div>
        </div>
      </div>

      <div className="text-center text-gray-500 text-sm py-6 border-t border-gray-800">
        © {new Date().getFullYear()} Andreah. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer2;
