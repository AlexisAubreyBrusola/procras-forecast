import PropTypes from "prop-types";
import { getCurrentTime } from "../utils/getCurrentTime";
import { getCurrentDate } from "../utils/getCurrentDate";
import { toSentenceCase } from "../utils/sentenceCase";
import Toggle from "../components/Toggle";
import { tempConverter, metersToFeet } from "../utils/tempConverter";
import { useContext } from "react";
import { WeatherPageContext } from "../pages/Weatherpage";

const CurrentWeather = ({ currentWeather }) => {
  const { toggled } = useContext(WeatherPageContext);
  return (
    <>
      <div className="component-container w-[100%] max-w-[860px]">
        <div className="component-part city-weather flex gap-4 flex-col">
          <div>
            <Toggle />
          </div>
          <h1 className="city-name text-[24px] font-semibold tracking-wider">
            {currentWeather?.name}
          </h1>
          <span className="time-date text-[18px]">
            As of {getCurrentTime()} |{" "}
            {`${getCurrentDate().month} ${getCurrentDate().day}, ${
              getCurrentDate().year
            }`}
          </span>
          <div className="temp-group flex gap-5 content-center phone:flex-col">
            <div
              className="icons min-w-[90px] h-auto"
              style={{
                backgroundImage: `url('https://openweathermap.org/img/wn/${currentWeather?.weather[0].icon}@4x.png')`,
              }}
            ></div>
            <span className="temp-text text-[3rem] font-semibold tracking-wider">
              {tempConverter(Math.round(currentWeather?.main.temp), toggled)}°{" "}
              {toggled ? "F" : "C"}
            </span>
          </div>
          <span className="weather-description text-[20px] font-semibold tracking-wider">
            {toSentenceCase(currentWeather?.weather[0].description)}
          </span>
        </div>

        <div className="component-part weather-details border-2 border-mainWhite p-[20px] rounded-lg h-fit">
          <div className="card-title pb-1 border-b-2 mb-3">
            <span className="font-semibold tracking-wide text-[1.25rem]">
              Details
            </span>
          </div>

          <div className="card-body grid grid-cols-3 tablet:gap-x-5 tablet:min-w-[300px] tablet:gap-4">
            <span className="details-name feels-like col-span-2">
              Feels Like
            </span>
            <span className="details-value feels-like">
              {tempConverter(Math.round(currentWeather?.main.temp), toggled)}°{" "}
              {toggled ? "F" : "C"}
            </span>

            <span className="details-name wind col-span-2">Wind</span>
            <span className="details-value wind">
              {metersToFeet(currentWeather?.wind.speed, toggled)}{" "}
              {toggled ? "ft/s" : "m/s"}
            </span>

            <span className="details-name humidity col-span-2">Humidity</span>
            <span className="details-value humidity">
              {currentWeather?.main.humidity} %
            </span>

            <span className="details-name precipitation col-span-2">
              Precipitation
            </span>
            <span className="details-value precipitation">
              {currentWeather?.precipitation
                ? `${currentWeather?.precipitation.value}%`
                : `--`}
            </span>

            <span className="details-name pressure col-span-2">Pressure</span>
            <span className="details-value pressure">
              {toSentenceCase(currentWeather?.main.pressure)} hPa
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

CurrentWeather.propTypes = {
  currentWeather: PropTypes.object.isRequired,
};

export default CurrentWeather;
