import { useState, useContext } from "react";
import { WeatherContext } from "../contexts/weatherContext";

export const useWeather = () => useContext(WeatherContext);
