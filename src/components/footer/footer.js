import React from "react";
import logo1 from "@/assets/logo1.svg";
import Image from "next/image";
import { FaWhatsapp, FaFacebookF, FaInstagram, FaTiktok } from "react-icons/fa";

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="footer-all">
          <div className="footer-1">
            <Image src={logo1} alt="footer-logo" />
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
          <div className="footer-1">
            <h2>Contact us</h2>
            <p>E: info@example.com</p>
            <p>P: +94 7670000000</p>
            <p>A: 123 Hospital rd,</p>
            <p>Kalubowila, Dehiwela</p>
          </div>
          <div className="footer-1">
            <h2>Useful links</h2>
            <p>Shop All </p>
            <p>Tempered Glass</p>
            <p>Back-cover</p>
            <p>About Us</p>
          </div>
          <div className="footer-1">
            <div className="footer-2">
              <FaWhatsapp />
              <p>Whatsapp</p>
            </div>
            <div className="footer-2">
              <FaFacebookF />
              <p>Facebook</p>
            </div>
            <div className="footer-2">
              <FaInstagram />
              <p>Instagram</p>
            </div>
            <div className="footer-2">
              <FaTiktok />
              <p>TikTok</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
