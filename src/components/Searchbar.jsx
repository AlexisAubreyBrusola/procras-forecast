import { TiLocation } from "react-icons/ti";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";

const Searchbar = ({ setIsEmpty, isEmpty }) => {
  const [city, setCity] = useState("");
  const navigate = useNavigate();

  const handleInputChange = (event) => {
    setCity(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!city.trim()) {
      setIsEmpty(true);
      console.log("Button Clicked - isEmpty: ", isEmpty);
    } else {
      navigate(`/weather/${city}`);
    }
  };

  return (
    <div className="searchbar">
      <form onSubmit={handleSubmit} className="flex gap-3 justify-center">
        <div
          className={`searchbox flex items-center border-2 rounded-full px-2 tablet:w-[330px] ${
            isEmpty ? "border-red-500" : "border-mainWhite"
          }`}
        >
          <TiLocation className="text-3xl" />
          <input
            type="text"
            name="city"
            placeholder="Enter your City"
            className="focus:outline-none bg-transparent w-full pl-1 py-2"
            onChange={handleInputChange}
          />
        </div>

        <button
          type="submit"
          className="bg-mainWhite text-mainBlue font-medium rounded-full px-[16px] py-2 tablet:px-[18px] hover:bg-transparent hover:text-mainWhite hover:border-2 hover:px-[16px]"
        >
          Confirm
        </button>
      </form>
    </div>
  );
};

Searchbar.propTypes = {
  setIsEmpty: PropTypes.func.isRequired,
  isEmpty: PropTypes.bool.isRequired,
};

export default Searchbar;
