import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          alt=""
          src="https://images-na.ssl-images-amazon.com/images/G/15/digital/video/merch/2020/TV/THBY_S2_00000_GWBleedingHero_1500x600_POST_Final_en-CA_PVD5401._CB406597355_.jpg"
        />
        <div className="home__row">
          <Product
            title="Moon of the Crusted Snow: A Novel Paperback – Oct. 2 2018"
            image="https://images-na.ssl-images-amazon.com/images/I/31elV+UQlDL._SX322_BO1,204,203,200_.jpg"
            price={17.76}
            rating={4}
          />
          <Product
            title="Vitamix Explorian Blender, Professional-Grade, 64 oz. Low-Profile Container, Red (Renewed)"
            image="https://images-na.ssl-images-amazon.com/images/I/51L5EzDC76L._AC_SY879_.jpg"
            price={379.83}
            rating={5}
          />
        </div>
        <div className="home__row">
          <Product
            title="Gaiam Premium Print Yoga Mat"
            image="https://images-na.ssl-images-amazon.com/images/I/71FwUcdJUwL._AC_SX425_.jpg"
            price={37.21}
            rating={5}
          />
          <Product
            title="Saregama Carvaan Marathi Portable Digital Music Player"
            image="https://m.media-amazon.com/images/I/710eCmtkEdL._AC_UL320_.jpg"
            price={29.99}
            rating={5}
          />
          <Product
            title="Beats Solo3 Wireless On-Ear Headphones - Apple W1 Headphone Chip, Class 1 Bluetooth, 40 Hours of Listening Time - Gold (Previous Model)"
            image="https://images-na.ssl-images-amazon.com/images/I/71c3pUhb%2B2L._AC_SY879_.jpg"
            price={229.99}
            rating={4}
          />
        </div>
        <div className="home__row">
          <Product
            title="Samsung 55&Prime; TU8000 4K Ultra HD HDR Smart TV (UN55TU8000FXZC) [Canada Version]"
            image="https://images-na.ssl-images-amazon.com/images/I/914kUfj3ypL._AC_SX679_.jpg"
            price={797.98}
            rating={5}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
