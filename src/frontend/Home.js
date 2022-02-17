import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://github.com/yikevding/emazon/blob/main/emory.jpeg?raw=true"
          alt=""
        />

        <div className="home__row">
          <Product
            title="Classical Comfortable Grey Sofa"
            price={1399.99}
            rating={5}
            image="https://github.com/yikevding/emazon/blob/main/image/sofa.jpeg?raw=true"
          />
          <Product
            title="Advanced Gaming Chair"
            price={299.99}
            rating={4}
            image="https://github.com/yikevding/emazon/blob/main/image/gaming%20chair.jpeg?raw=true"
          />
        </div>

        <div className="home__row">
          <Product
            title="White Marble Dinning Table"
            price={399.49}
            rating={3}
            image="https://github.com/yikevding/emazon/blob/main/image/dinning%20table.jpeg?raw=true"
          />
          <Product
            title="Stylish Nike Backpack"
            price={59.99}
            rating={5}
            image="https://github.com/yikevding/emazon/blob/main/image/bag.jpeg?raw=true"
          />
          <Product
            id="3254354345"
            title="Simple Study Desk, Home & Office Use"
            price={239.99}
            rating={4}
            image="https://github.com/yikevding/emazon/blob/main/image/study%20desk.jpeg?raw=true"
          />
        </div>

        <div className="home__row">
          <Product
            title="27 inch Advanced Monitor, 4K resolution, 144Hz"
            price={799.99}
            rating={4}
            image="https://github.com/yikevding/emazon/blob/main/image/monitor.jpeg?raw=true"
          />
        </div>
      </div>
    </div>
  );
}

export default Home;