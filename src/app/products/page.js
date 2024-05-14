import Image from "next/image";
import React from "react";
import card15 from "@/assets/card15.png";
import "./products.css";
import { CARD_ALL } from "@/static";

const Products = () => {
  return (
    <section className="products">
      <div className="container">
        <div className="products-top">
          <h1>Shop All Products</h1>
        </div>
        <div className="products-wrapper">
          {CARD_ALL?.map((el) => (
            <div key={el.id} className="products-card">
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
  );
};

export default Products;
