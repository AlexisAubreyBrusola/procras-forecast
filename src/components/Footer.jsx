import { FaFacebook } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { BsEnvelopeFill } from "react-icons/bs";

const Footer = () => {
  return (
    <footer className="text-mainWhite pt-5">
      <nav className="flex flex-col space-x justify-between px-3.5 py-5 gap-y-5 tablet:flex-row">
        <div className="flex flex-col gap-y-2">
          <span className="text-base">Made with</span>
          <a
            href="https://openweathermap.org/"
            className="hover:text-hoverColor"
          >
            <div className="flex gap-x-1 items-center">
              <img
                src="/openweathermap-logo.png"
                alt="openweathermap-logo"
                className="h-[25px] w-[25px]"
              />
              <span>openweathermap.org</span>
            </div>
          </a>
        </div>

        <div className="flex flex-col gap-y-2">
          <span className="text-base">{"Developer's Social"}</span>
          <div className="flex gap-x-3 tablet:justify-between">
            <a href="https://www.facebook.com/alexisaubrey.brusola">
              <div>
                <FaFacebook className="text-[28px] hover:text-hoverColor" />
              </div>
            </a>
            <a href="https://github.com/AlexisAubreyBrusola">
              <div>
                <FaGithub className="text-[28px] hover:text-hoverColor" />
              </div>
            </a>
            <a href="https://www.linkedin.com/in/alexis-aubrey-brusola-8b3135266/">
              <div>
                <FaLinkedin className="text-[28px] hover:text-hoverColor" />
              </div>
            </a>
          </div>
        </div>
      </nav>
    </footer>
  );
};

export default Footer;
