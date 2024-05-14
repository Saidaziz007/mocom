import Image from "next/image";
import React from "react";
import blog1 from "@/assets/blog1.png";
import blog2 from "@/assets/blog2.png";
import "./blog.css";

const Blog = () => {
  return (
    <div className="blog">
      <div className="container">
        <div className="blog-all">
          <h1 className="blog-top-h1"> Blog Posts</h1>
          <div className="blog-card">
            <div className="blog-card-left">
              <h1>Tempered Glass</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Phasellus egestas tellus rutrum tellus pellentesque eu. Amet
                dictum sit amet justo donec enim diam vulputate ut. Malesuada
                fames ac turpis egestas maecenas. Dictum fusce ut placerat orci
                nulla pellentesque dignissim. Neque laoreet suspendisse interdum
                consectetur. Turpis massa sed elementum tempus egestas sed sed.
                Ornare massa eget egestas purus viverra accumsan in. Tristique
                senectus et netus et malesuada. Ornare suspendisse sed nisi
                lacus sed. Aliquet nibh praesent tristique magna sit. Ac auctor
                augue mauris augue neque gravida in fermentum et. Erat imperdiet
                sed euismod nisi porta lorem mollis aliquam ut. Proin libero
                nunc consequat interdum varius sit amet mattis. Odio eu feugiat
                pretium nibh ipsum.
              </p>
            </div>
            <div className="blog-card-right">
              <Image src={blog1} alt="blog-img" />
            </div>
          </div>
          <div className="blog-card">
            <div className="blog-card-left">
              <Image src={blog2} alt="blog-img" />
            </div>
            <div className="blog-card-right">
              <h1>Back Cover</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Phasellus egestas tellus rutrum tellus pellentesque eu. Amet
                dictum sit amet justo donec enim diam vulputate ut. Malesuada
                fames ac turpis egestas maecenas. Dictum fusce ut placerat orci
                nulla pellentesque dignissim. Neque laoreet suspendisse interdum
                consectetur. Turpis massa sed elementum tempus egestas sed sed.
                Ornare massa eget egestas purus viverra accumsan in. Tristique
                senectus et netus et malesuada. Ornare suspendisse sed nisi
                lacus sed. Aliquet nibh praesent tristique magna sit. Ac auctor
                augue mauris augue neque gravida in fermentum et. Erat imperdiet
                sed euismod nisi porta lorem mollis aliquam ut. Proin libero
                nunc consequat interdum varius sit amet mattis. Odio eu feugiat
                pretium nibh ipsum.
              </p>
            </div>
          </div>
          <div className="blog-card">
            <div className="blog-card-right">
              <h1>Mobile Brand and Price Strategy</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Phasellus egestas tellus rutrum tellus pellentesque eu. Amet
                dictum sit amet justo donec enim diam vulputate ut. Malesuada
                fames ac turpis egestas maecenas. Dictum fusce ut placerat orci
                nulla pellentesque dignissim. Neque laoreet suspendisse interdum
                consectetur. Turpis massa sed elementum tempus egestas sed sed.
                Ornare massa eget egestas purus viverra accumsan in. Tristique
                senectus et netus et malesuada. Ornare suspendisse sed nisi
                lacus sed. Aliquet nibh praesent tristique magna sit. Ac auctor
                augue mauris augue neque gravida in fermentum et. Erat imperdiet
                sed euismod nisi porta lorem mollis aliquam ut. Proin libero
                nunc consequat interdum varius sit amet mattis. Odio eu feugiat
                pretium nibh ipsum.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
