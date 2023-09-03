import MainAfter from "./MainAfter";
import MainBefore from "./MainBefore";
import { useState } from "react";

const Button = () => {
    const [showComponent, setShowComponent] = useState(true);
  
    const handleButtonClick = () => {
      setShowComponent(false)
    };
  
    return (
      <div>
        <button onClick={handleButtonClick} type="submit" className="btn btn-active btn-accent" >Toggle Component</button>
        {showComponent ? <MainBefore /> : <MainAfter />}
      </div>
    );
  };
  
  export default Button;