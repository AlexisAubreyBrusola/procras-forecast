import PropTypes from "prop-types";

import { convertTo12HourFormat } from "../utils/threeHourForecast";
import { tempConverter } from "../utils/tempConverter";
import { useContext } from "react";
import { WeatherPageContext } from "../pages/Weatherpage";

const ThreeHourForecast = ({ threeHourData }) => {
  const { toggled } = useContext(WeatherPageContext);
  return (
    <div className="component-container w-[100%] max-w-[860px] flex-row justify-between gap-2">
      {threeHourData.length > 0 &&
        threeHourData.map((item, index) => (
          <div
            key={index}
            className="card flex flex-col items-center px-[8px] gap-1"
          >
            <div className="card-icon">
              <div
                className="icons h-[50px] w-[50px] tablet:h-[80px] tablet:w-[80px]"
                style={{
                  backgroundImage: `url('https://openweathermap.org/img/wn/${item?.weather[0].icon}@4x.png')`,
                }}
              ></div>
            </div>
            <span className="card-time text-[14px] tablet:text-[16px]">
              {convertTo12HourFormat(item?.dt_txt.split(" ")[1].slice(0, 5))}
            </span>
            <span className="card-temp font-semibold tracking-wider tablet:text-[20px]">
              {tempConverter(Math.round(item?.main.temp), toggled)}°{" "}
              {toggled ? "F" : "C"}
            </span>
          </div>
        ))}
    </div>
  );
};

ThreeHourForecast.propTypes = {
  threeHourData: PropTypes.array.isRequired,
};

export default ThreeHourForecast;
