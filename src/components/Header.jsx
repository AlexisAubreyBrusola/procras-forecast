import { BsArrowRightShort } from "react-icons/bs";

const Header = () => {
  return (
    <header className="text-mainWhite">
      <nav className="flex space-x items-center justify-between px-3.5 py-5">
        <a href="/">
          <h1 className="text-2xl">Procrasforecast</h1>
        </a>
        <a href="/">
          <div className="flex items-center gap-x-1">
            <span className="hidden tablet:block laptop:block desktop:block">
              Enter another city
            </span>
            <BsArrowRightShort className="text-4xl" />
          </div>
        </a>
      </nav>
    </header>
  );
};

export default Header;
