import React from "react";
import "./Checkout.css";
import Subtotal from "./Subtotal";

function Checkout() {
  return (
    <div className="checkout">
      <div className="checkout__left">
        <img
          alt=""
          className="checkout__ad"
          src="https://images-na.ssl-images-amazon.com/images/G/15/CA-hq/2019/img/Consumer_Electronics/XCM_Manual_1157235_outlet_header_evergreen_1500x200_Consumer_Electronics_1157235_ca_consumer_electronics_outletheaderevergreen_1500x200_1547469927_jpg.jpg"
        />
        <div>
          <h2 className="checkout__title">Your shopping basket</h2>
          {/* BasketItem */}
        </div>
      </div>
      <div className="checkout__right">
        <Subtotal />
      </div>
    </div>
  );
}

export default Checkout;
