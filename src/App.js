import { Fragment, useState } from "react";
import "./App.css";
import SuccessCard from "./components/SuccessCard";
import Signup from "./components/Signup";

const App = () => {
  const [isToggled, setIsToggled] = useState(false);

  const handleEmailSubmit = (data) => {
    if (data) {
      setIsToggled(true);
    }
  };

  const handleToggle = () => {
    setIsToggled(!isToggled);
  };

  return (
    <Fragment>
      <main>
        {!isToggled && <Signup onEmailSubmit={handleEmailSubmit} />}
        {isToggled && <SuccessCard toggle={handleToggle} />}
      </main>
      <div className="attribution">
        Challenge by{" "}
        <a href="https://www.frontendmentor.io?ref=challenge" target="">
          Frontend Mentor
        </a>
        . Coded by{" "}
        <a href="https://www.frontendmentor.io/profile/feliceNicolasBarcellona">
          Felice Nicolas Barcellona
        </a>
        .
      </div>
    </Fragment>
  );
};

export default App;
