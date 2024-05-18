import { BsArrowRightShort } from "react-icons/bs";

const LimitReached = () => {
  return (
    <div className="main-container h-dvh grid place-items-center">
      <div className="bg-mainBlue rounded-xl px-6 py-10 flex flex-col gap-[20px]">
        <h1 className="text-[2.5rem] tablet:text-[3rem] font-bold tracking-wider">
          API Call Limit Exceeded
        </h1>
        <h2 className="text-[1.5rem] font-semibold tracking-wide">{`We’re sorry, but our website uses the free tier of the OpenWeatherMap API service, which allows up to 60 API calls per minute. It looks like we’ve hit that limit!`}</h2>
        <h2 className="text-[1.25rem]">{`To keep getting weather updates, please try again in a minute or two. Thank you for your patience and understanding!`}</h2>

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

export default LimitReached;
