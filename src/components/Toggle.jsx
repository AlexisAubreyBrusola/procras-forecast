import { useContext } from "react";
import { WeatherPageContext } from "../pages/Weatherpage";

const Toggle = () => {
  const { toggled, setToggled } = useContext(WeatherPageContext);

  const handleToggle = () => {
    setToggled(!toggled);
  };

  return (
    <div className="flex items-center justify-between">
      <span className="text-mainWhite font-semibold tracking-wider">
        {toggled ? "Farenheit / Imperial" : "Celcius / Metric"}
      </span>
      <button
        onClick={handleToggle}
        className={`w-[55px] h-[30px] rounded-full relative px-[3px] ${
          toggled ? "bg-mainWhite" : "bg-mainWhite"
        }`}
      >
        <div
          className={`rounded-full w-[25px] h-[25px] bg-mainBlue shadow flex justify-center items-center ${
            toggled ? "translate-x-6" : "translate-x-0"
          } transition-transform duration-300 ease-in-out`}
        >
          <span className="font-semibold tracking-wider">
            {toggled ? "F" : "C"}
          </span>
        </div>
      </button>
    </div>
  );
};

export default Toggle;
