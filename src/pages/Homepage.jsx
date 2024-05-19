import Footer from "../components/Footer";
import Searchbar from "../components/Searchbar";
import EmptyInputWarning from "../components/EmptyInputWarning";

import { useState } from "react";

const Homepage = () => {
  const [isEmpty, setIsEmpty] = useState(false);

  return (
    <div className="page-container h-dvh flex flex-col justify-between">
      <main className="main-container flex flex-col flex-grow justify-center items-center">
        <EmptyInputWarning isEmpty={isEmpty} setIsEmpty={setIsEmpty} />
        <div className="flex flex-col gap-5">
          <div className="flex flex-col text-containers text-center gap-4">
            <h1 className="text-4xl font-semibold font-roboto tablet:text-5xl">
              ProcrasForecast
            </h1>
            <p className="font-roboto max-w-[460px]">
              a simple weather app for lazy people who just want to know the
              weather
            </p>
          </div>

          <Searchbar setIsEmpty={setIsEmpty} isEmpty={isEmpty} />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Homepage;
