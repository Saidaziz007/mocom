import Image from "next/image";
import React from "react";
import aboutImg from "@/assets/abou-img.png";
import "./about.css";

const About = () => {
  return (
    <div className="aboutus">
      <div className="container">
        <div className="aboutus-all">
          <Image src={aboutImg} alt="about-img" />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Phasellus egestas tellus rutrum tellus pellentesque eu. Amet dictum
            sit amet justo donec enim diam vulputate ut. Malesuada fames ac
            turpis egestas maecenas. Dictum fusce ut placerat orci nulla
            pellentesque dignissim. Neque laoreet suspendisse interdum
            consectetur. Turpis massa sed elementum tempus egestas sed sed.
            Ornare massa eget egestas purus viverra accumsan in. Tristique
            senectus et netus et malesuada. Ornare suspendisse sed nisi lacus
            sed. Aliquet nibh praesent tristique magna sit. Ac auctor augue
            mauris augue neque gravida in fermentum et. Erat imperdiet sed
            euismod nisi porta lorem mollis aliquam ut. Proin libero nunc
            consequat interdum varius sit amet mattis. Odio eu feugiat pretium
            nibh ipsum.
          </p>
          <h1>Price Strategy</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Phasellus egestas tellus rutrum tellus pellentesque eu. Amet dictum
            sit amet justo donec enim diam vulputate ut. Malesuada fames ac
            turpis egestas maecenas. Dictum fusce ut placerat orci nulla
            pellentesque dignissim. Neque laoreet suspendisse interdum
            consectetur. Turpis massa sed elementum tempus egestas sed sed.
            Ornare massa eget egestas purus viverra accumsan in. Tristique
            senectus et netus et malesuada. Ornare suspendisse sed nisi lacus
            sed. Aliquet nibh praesent tristique magna sit. Ac auctor augue
            mauris augue neque gravida in fermentum et. Erat imperdiet sed
            euismod nisi porta lorem mollis aliquam ut. Proin libero nunc
            consequat interdum varius sit amet mattis. Odio eu feugiat pretium
            nibh ipsum.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Phasellus egestas tellus rutrum tellus pellentesque eu. Amet dictum
            sit amet justo donec enim diam vulputate ut. Malesuada fames ac
            turpis egestas maecenas. Dictum fusce ut placerat orci nulla
            pellentesque dignissim. Neque laoreet suspendisse interdum
            consectetur. Turpis massa sed elementum tempus egestas sed sed.
            Ornare massa eget egestas purus viverra accumsan in. Tristique
            senectus et netus et malesuada. Ornare suspendisse sed nisi lacus
            sed. Aliquet nibh praesent tristique magna sit. Ac auctor augue
            mauris augue neque gravida in fermentum et. Erat imperdiet sed
            euismod nisi porta lorem mollis aliquam ut. Proin libero nunc
            consequat interdum varius sit amet mattis. Odio eu feugiat pretium
            nibh ipsum.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
