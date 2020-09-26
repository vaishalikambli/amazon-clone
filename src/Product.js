import React from 'react';
import "./Product.css";
import StarIcon from '@material-ui/icons/StarRate';
import { useStateValue } from "./StateProvider";

function Product({ id, title, image, price, rating }) {
  const [{ basket }, dispatch] = useStateValue();

  console.log("This is the basket >>> ", basket);

  const addToBasket = () => {
    //To dispatch item into a data layer
    dispatch({
      type: 'ADD_TO_BASKET',
      item: {
        id: id,
        title: title,
        image: image,
        price: price,
        rating: rating
      },
    });
  };

  return (
    <div className="product">         
      <img alt="" src={image} />
      <div className="product__info">
        <p className="product__title">
          <span>{title}</span>
        </p>
        <p className="product__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="product__rating">
          {Array(rating).fill().map((_, i) => (
            <StarIcon />
          ))}
        </div>
      </div>
      <button onClick={addToBasket}>Add to Basket</button>
    </div>
  );
}

export default Product;
