import React from "react";
import "./Product.css";
import { BsFillStarFill } from "react-icons/bs";
import { BsFillBagHeartFill } from "react-icons/bs";
function Product({ state }) {
  return (
    <>
      <section className="card-container">
        {state.map((product) => (
          <section className="card">
            <img
              className="card-img"
              src={product.img}
              alt=""
              srcset=""
            />
            <div className="card-details">
              <h3 className="title">{product.title}</h3>
              <section className="card-reviews">
                <BsFillStarFill className="ratings-star" />
                <BsFillStarFill className="ratings-star" />
                <BsFillStarFill className="ratings-star" />
                <BsFillStarFill className="ratings-star" />
                <span className="total-reviews">{product.reviews}</span>
              </section>
              <section className="card-price">
                <div className="price">
                  <del>{product.prevPrice}円</del> {product.newPrice}円
                </div>
                <div className="bag">
                  <BsFillBagHeartFill className="bag-icon" />
                </div>
              </section>
            </div>
          </section>
        ))}
      </section>
    </>
  );
}

export default Product;
