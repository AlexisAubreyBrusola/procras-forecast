import { useParams } from "react-router-dom";
import { fetchData } from "../utils/fetchData";
import { useState, useEffect, createContext } from "react";
import { helix } from "ldrs";
import axios from "axios";

import CurrentWeather from "../components/CurrentWeather";
import ThreeHourForecast from "../components/ThreeHourForecast";
import FiveDayForecast from "../components/FiveDayForecast";
import Header from "../components/Header";
import Footer from "../components/Footer";
import CityNotFound from "../pages/error-pages/CityNotFound";
import LimitReached from "../pages/error-pages/LimitReached";

import {
  getLocalTimestamp,
  getNearestTimestamps,
} from "../utils/threeHourForecast";
import { getDailyData } from "../utils/fivedayForecast";

export const WeatherPageContext = createContext();

const Weatherpage = () => {
  const { city: initialCity } = useParams();
  const [city, setCity] = useState(initialCity);
  const [currentWeather, setCurrentWeather] = useState(null);
  const [forecastWeather, setForecastWeather] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [threeHourData, setThreeHourData] = useState([]);
  const [fivedayForecast, setFivedayForecast] = useState([]);
  const [toggled, setToggled] = useState(false);
  const [errorCode, setErrorCode] = useState("");

  helix.register();

  const fetchData = async (city) => {
    const API_KEY = import.meta.env.VITE_OPENWEATHERMAP_API_KEY;

    try {
      const weatherAPIResponse = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`
      );

      const forecastAPIResponse = await axios.get(
        `https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&appid=${API_KEY}`
      );

      setCurrentWeather(weatherAPIResponse.data);
      setForecastWeather(forecastAPIResponse.data);
    } catch (error) {
      setErrorCode(error.response.data.cod);
    }
  };

  useEffect(() => {
    fetchData(city);
  }, [city]);

  useEffect(() => {
    if (currentWeather && forecastWeather) {
      setIsLoading(false);

      const forecastList = forecastWeather.list.map((element) => {
        return {
          ...element,
          dt: element.dt * 1000,
        };
      });

      const threeHourForecast = getNearestTimestamps(
        forecastList,
        getLocalTimestamp()
      );

      const fivedayForecastData = getDailyData(forecastWeather);

      setThreeHourData(threeHourForecast);
      setFivedayForecast(fivedayForecastData);
    }
  }, [currentWeather, forecastWeather, isLoading, toggled]);

  if (errorCode) {
    if (errorCode === "404") {
      return <CityNotFound />;
    } else if (errorCode === "429") {
      return <LimitReached />;
    } else {
      return (
        <div className="h-dvh grid place-items-center px-[16px] py-[14px] bg-mainBlue">
          <h1 className="text-[2rem]">{`It's not your fault. Something went wrong. You can try again later.`}</h1>
        </div>
      );
    }
  }

  return (
    <>
      {isLoading ? (
        <div className="h-dvh flex flex-col items-center justify-center px-[20px] gap-6">
          <l-helix size="100" speed="2" color="white"></l-helix>
          <span className="text-center tablet:text-[1.75rem] font-mono">
            Sit back and relax as we fetch the necessary data...
          </span>
        </div>
      ) : (
        <>
          <Header />
          <WeatherPageContext.Provider value={{ toggled, setToggled }}>
            <div className="main-container">
              <CurrentWeather currentWeather={currentWeather} />
              <ThreeHourForecast threeHourData={threeHourData} />
              <FiveDayForecast fivedayForecastData={fivedayForecast} />
            </div>
          </WeatherPageContext.Provider>
          <Footer />
        </>
      )}
    </>
  );
};

export default Weatherpage;
