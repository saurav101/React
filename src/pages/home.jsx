import { useState } from "react";
import Navbar from "../components/navbar";
import "../styles/home.css";

const Home = () => {
  const [count, setCount] = useState(0);
  const [animate, setAnimate] = useState(false);
  // const [isActive, setIsActive] = useState(false);
  const startAnimate = () => {
    setAnimate(true);
  };
  const stopAnimate = () => {
    setAnimate(false);
  };

  const handleIncrement = () => {
    startAnimate();
    setCount((prevCount) => prevCount + 1);
    // setIsActive(true);
    // setTimeout(() => {
    //     setIsActive(false);
    // }, 200);
  };

  const handleDecrement = () => {
    setCount((prevCount) => prevCount - 1);
    // setIsActive(true);
    // setTimeout(() => {
    //     setIsActive(false);
    // }, 200);
  };

  return (
    <div id="body">
      <Navbar title={"Home Page"} />
      <h1>Home Page</h1>
      <p
        id="center-text"
        className={animate ? "text-change" : ""}
        onAnimationEnd={stopAnimate}
      >
        {count}
      </p>
      {/* <p id="center-text" className={isActive ? 'Active' : ''}>{count}</p> */}
      <div id="plus" onClick={handleIncrement}>
        +
      </div>
      <div id="minus" onClick={handleDecrement}>
        -
      </div>
    </div>
  );
};

export default Home;

//css Animation- transition,  animation  and keyframes
//transitions:- property-name, time and curves
//animation:- animation name, time, curves, type
//keyframes:-  @keframes{ 0%{} 50%{} 100%{}  }
