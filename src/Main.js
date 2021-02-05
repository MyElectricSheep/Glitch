import React from "react";
import Particles from "./Particles";
import Card from "./Card";
import cards from "./mockData/cards";
import Image from "./Image";
import "./styles/main.scss";

const Info = () => {
  return (
    <div className="info">
      GLITCH
      {/* <div className="notice">GLITCH</div> */}
    </div>
  );
};

const Hero = ({ children }) => {
  return (
    <div className="hero">
      <div className="hero-body">{children}</div>
    </div>
  );
};

const Main = () => {
  return (
    <div className="main">
      <Particles>
        <Hero>
          <div className="container">
            <Info />
            <div className="row">
              {cards.map((card, index) => (
                <div className="column" key={`${index}-${card.title}`}>
                  <Card>
                    <div className="card-title">{card.title}</div>
                    <div className="card-body">{card.description}</div>
                    <Image ratio={card.imageRatio} src={card.image} />
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </Hero>
      </Particles>
    </div>
  );
};

export default Main;
