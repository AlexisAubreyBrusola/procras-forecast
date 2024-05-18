import { BsArrowRightShort } from "react-icons/bs";

const ErrorPage404 = () => {
  return (
    <div className="main-container h-dvh grid place-items-center">
      <div className="bg-mainBlue rounded-xl px-6 py-10 flex flex-col gap-[20px]">
        <h1 className="text-[2.5rem] tablet:text-[3rem] font-bold tracking-wider">
          404: Page Not Found
        </h1>
        <h2 className="text-[1.5rem] font-semibold tracking-wide">{`It looks like the page you're looking for doesn't exist. Don't worry, we'll help you find your way!`}</h2>
        <h2 className="text-[1.25rem]">{`Let's find the right path together!`}</h2>

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

export default ErrorPage404;
