import PropTypes from "prop-types";
import {
  getDateFromTimestamp,
  getDayOfTheWeek,
  getMonthAndDate,
} from "../utils/fivedayForecast";

import { toSentenceCase } from "../utils/sentenceCase";
import { tempConverter } from "../utils/tempConverter";

import { useContext } from "react";
import { WeatherPageContext } from "../pages/Weatherpage";

const FiveDayForecast = ({ fivedayForecastData }) => {
  const { toggled } = useContext(WeatherPageContext);
  return (
    <div className="component-container w-full max-w-[860px] tablet:flex-col">
      <div className="component-title">
        <span className="title text-[20px] font-semibold tracking-wider">
          5-Day Forecast
        </span>
      </div>

      {fivedayForecastData &&
        fivedayForecastData?.map((item, index) => (
          <div key={index} className="grid grid-cols-4">
            <div className="flex flex-col">
              <span className="text-[12px] tablet:text-[18px] font-semibold">
                {getDayOfTheWeek(getDateFromTimestamp(item.dt))}
              </span>
              <span className="text-[14px] tablet:text-base">
                {getMonthAndDate(getDateFromTimestamp(item.dt))}
              </span>
            </div>

            <div className="content-center text-[14px] text-center tablet:text-[18px]">
              <span>{toSentenceCase(item.weather[0].description)}</span>
            </div>
            <div className="flex justify-center items-center">
              <div
                className="icons w-[50px] h-[50px] tablet:w-[80px] tablet:h-[80px] flex justify-center"
                style={{
                  backgroundImage: `url('https://openweathermap.org/img/wn/${item.weather[0].icon}@4x.png')`,
                }}
              ></div>
            </div>
            <div className="content-center text-[14px] text-center tablet:text-[18px]">
              <span className="">
                {tempConverter(Math.round(item?.main.temp_max), toggled)}°
                {toggled ? "F" : "C"} -{" "}
                {tempConverter(Math.round(item?.main.temp_min), toggled)}°
                {toggled ? "F" : "C"}
              </span>
            </div>
          </div>
        ))}
    </div>
  );
};

FiveDayForecast.propTypes = {
  fivedayForecastData: PropTypes.array.isRequired,
};

export default FiveDayForecast;
