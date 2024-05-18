import { BsArrowRightShort } from "react-icons/bs";

const CityNotFound = () => {
  return (
    <div className="main-container h-dvh grid place-items-center">
      <div className="bg-mainBlue rounded-xl px-6 py-10 flex flex-col gap-[20px]">
        <h1 className="text-[2.5rem] tablet:text-[3rem] font-bold tracking-wider">
          City not Found!
        </h1>
        <h2 className="text-[1.5rem] font-semibold tracking-wide">{`Oops! It looks like the city you entered is off the map!`}</h2>
        <h2 className="text-[1.25rem]">{`Double-check your spelling or try entering a different city name. Let's find the right place together!`}</h2>

        <a
          href="/"
          className="flex items-center max-w-fit px-[12px] py-[10px] border-2 rounded-lg"
        >
          <span className="text-[1.25rem]">Go back</span>
          <span className="text-[2rem]">
            <BsArrowRightShort />
          </span>
        </a>
      </div>
    </div>
  );
};

export default CityNotFound;
