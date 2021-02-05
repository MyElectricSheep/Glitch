import React from "react";
import { useSpring, animated } from "react-spring";
import { useHistory } from "react-router-dom";
import coderIpsum from "./mockData/coderIpsum";
import "./styles/intro.css";
// All Icons used are from www.flaticon.com

const calc = (x, y) => [x - window.innerWidth / 2, y - window.innerHeight / 2];
const trans1 = (x, y) => `translate3d(${x / 10}px,${y / 10}px,0)`;
const trans2 = (x, y) => `translate3d(${x / 8 + 35}px,${y / 8 - 230}px,0)`;
const trans3 = (x, y) => `translate3d(${x / 6 - 250}px,${y / 6 - 200}px,0)`;
const trans4 = (x, y) => `translate3d(${x / 3.5}px,${y / 3.5}px,0)`;

const Intro = () => {
  const history = useHistory();
  const [props, set] = useSpring(() => ({
    xy: [0, 0],
    config: { mass: 10, tension: 550, friction: 140 }
  }));

  return (
    <div
      className="container-intro"
      onMouseMove={({ clientX: x, clientY: y }) => set({ xy: calc(x, y) })}
      onClick={() => history.push("/main")}
    >
      <div
        style={{ overflow: "hidden" }}
        className="container-background-text"
        dangerouslySetInnerHTML={{ __html: coderIpsum(60) }}
      ></div>
      <animated.div
        className="card1"
        style={{ transform: props.xy.interpolate(trans1) }}
      />
      <animated.div
        className="card2"
        style={{ transform: props.xy.interpolate(trans2) }}
      />
      <animated.div
        className="card3"
        style={{ transform: props.xy.interpolate(trans3) }}
      />
      <animated.div
        className="card4"
        style={{ transform: props.xy.interpolate(trans4) }}
      />
    </div>
  );
};

export default Intro;
