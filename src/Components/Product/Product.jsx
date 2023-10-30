import React from "react";
import "./Product.css";

function Product({ state }) {
  return (
    <>
      <section className="card-container .row-cols-3 ">
        {state.map((product) => (
          <div className="card " style={{ width: "18rem" }} key={product.id}>
            <div className="card-header ">
              <img src={product.url1} className="card-img-top" alt="..." />
            </div>

            <div className="card-body">
              <h6>{product.category}</h6>
              <h4 className="card-title">{product.company}</h4>
              <p className="card-text">
                <span>Color :{product.color}</span><br />
                <span>Style :{product.style}</span>
              </p>
            </div>
            <div className="card-footer">
            <span className="card-price">{product.price} 円</span>
            </div>
          </div>
        ))}
      </section>
    </>
  );
}

export default Product;
{
  /* <section className="card">
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
          </section> */
}
