import heroImg from "@/assets/hero-img.svg";
import { CARD_ALL } from "@/static";
import Image from "next/image";
import "./products/products.css";
import aboutImg from "@/assets/abou-img.png";
import premium from "@/assets/premium.png";
import bottom1 from "@/assets/bottom1.svg";
import bottom2 from "@/assets/bottom2.svg";
import bottom3 from "@/assets/bottom3.svg";

export default function Home() {
  return (
    <main>
      <section className="hero">
        <div className="container">
          <div className="hero-all">
            <div className="hero-left">
              <h3>Mobile</h3>
              <h2>Backcover</h2>
              <h1>Tempered Glass</h1>
              <button>Shop All!</button>
            </div>
            <div className="hero-right">
              <Image src={heroImg} alt="hero-right-img" priority={true} />
            </div>
          </div>
        </div>
      </section>
      <section className="sale">
        <div className="container">
          <div className="sale-wrapper">
            {CARD_ALL?.slice(0, 4).map((el) => (
              <div key={el.id} className="products-card">
                <div className="products-card-sale">sale !</div>
                <div className="products-img">
                  <Image src={el.img} alt="card-img" priority={true} />
                </div>
                <div className="products-info">
                  <p>{el.title}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="about">
        <div className="container">
          <div className="about-top">
            <div className="top-line"></div>
            <p>about us</p>
            <h1>
              If you’re looking for a Premium Quality Tempered Glass or
              Back-cover for your Device{" "}
            </h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. 
            </p>
          </div>
          <div className="about-bottom">
            <Image src={aboutImg} alt="about-img" />
          </div>
        </div>
      </section>
      <section className="premium">
        <div className="container">
          <div className="premium-all">
            <div className="premium-left"></div>
            <div className="premium-right"></div>
            <div className="premium-center">
              <div className="premium-center-1">
                <h1>
                  Shop Premium <br />
                  Tempered Glass in wholesale Price !
                </h1>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. <br /> <br />
                  LKR : 299
                </p>
                <button>Shop Tempered Glass </button>
              </div>
              <div className="premium-center-2">
                <Image src={premium} />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="choose">
        <div className="container">
          <div className="choose-top">
            <div className="top-line"></div>
            <p>Why Choose US</p>
          </div>
          <div className="choose-bottom">
            <div className="choose-card">
              <Image src={bottom1} alt="choose-bottom-img" />
              <h1>Fast Delivery</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
            <div className="choose-card">
              <Image src={bottom2} alt="choose-bottom-img" />
              <h1>Cheap Price</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
            <div className="choose-card">
              <Image src={bottom3} alt="choose-bottom-img" />
              <h1>Premium Quality</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
