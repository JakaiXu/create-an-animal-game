import React, { Fragment } from "react";
import bird from "../svg/bird.svg";
import cat from "../svg/cat.svg";
import cow from "../svg/cow.svg";
import dog from "../svg/dog.svg";
import gator from "../svg/gator.svg";
import horse from "../svg/horse.svg";
import heart from "../svg/heart.svg";
import { useState } from "react";
import "./AnimalShow.css";
const AnimalShow = (props) => {
  const svgMap = { bird, cat, cow, dog, gator, horse, heart };
  const [size, setSize] = useState(0);
  const handleClick = () => {
    setSize(size + 1);
  };
  return (
    <div onClick={handleClick} className="animal-show">
      <img src={svgMap[props.type]} alt={props.type} className="animal" />
      {size > 0 && (
        <img
          src={heart}
          alt="heart"
          style={{ width: `${10 + 10 * size}px` }}
          className="heart"
        />
      )}
    </div>
  );
};

export default AnimalShow;
