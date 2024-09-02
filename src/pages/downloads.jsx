import { useState } from "react";
import Navbar from "../components/navbar";
import "../styles/home.css";

const Downloads = () => {
    const [count,setCount] = useState(0);
    const[animate,setAnimate]=useState(false)
    const handleIncrement =()=>{
      startAnimation();
      setCount((prevCount)=>{
        return prevCount + 1;
      })
    }
      const startAnimation =()=>{
        setAnimate(true)
      }
      const stopAnimation=()=>{
        setAnimate(false)
      }
    
    return(
        <>
        <Navbar title={"Home Page"}></Navbar>
        <h1>Home Page</h1>
        <p id="center-text" className={animate?"text-change":""}onAnimationEnd={stopAnimation}>{count}</p>
        <div id="button" onClick={handleIncrement}>+</div>
        </>
    )
}
export default Downloads;