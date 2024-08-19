import logoImg from "../assets/png/mohamed sayed.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBurger, faClose } from "@fortawesome/free-solid-svg-icons";

import { useState } from "react";
import { Link } from "react-router-dom";
const styles = {
  navLink: `text-lg text-[#333333] hover:text-[#7843E9] font-bold uppercase`,
  navSmLink: `w-full p-4 border-[#eee] border-t-[1px] flex justify-end`,
};
export default function Navbar() {
  const [showNavbar, setShowNavbar] = useState(false);
  return (
    <>
      <header className="fixed z-10 top-0 flex-col justify-center items-center bg-white w-screen py-4 md:shadow-lg">
        <div className="w-full flex justify-center">
          <div className="container flex justify-between items-center">
            <div className="flex w-full px-2 md:px-0 justify-between">
              <div className="flex items-center font-bold gap-3 ">
                <div className="w-14 h-14 overflow-hidden rounded-full border-2 hover:border-[#7843E9]">
                  <Link to={"/"}>
                    <img
                      src={logoImg}
                      alt="Mohamed Sayed Logo Image"
                      className="w-full"
                    />
                  </Link>
                </div>
                <Link
                  to={"/"}
                  className="text-black hover:text-[#7843E9] text-xl"
                >
                  MOHAMED SAYED
                </Link>
              </div>
              <div className="md:hidden flex items-center">
                <button
                  type="button"
                  className="flex mr-2"
                  onClick={() => setShowNavbar((prev) => !prev)}
                >
                  <FontAwesomeIcon
                    className="text-2xl"
                    icon={showNavbar ? faClose : faBurger}
                  />
                  {""}
                </button>
              </div>
            </div>
            <div className="">
              <div className="">
                <ul className="hidden md:flex gap-10">
                  <li className="header__sm-menu-link">
                    <a href="/#" className={styles.navLink}>
                      {" "}
                      Home{" "}
                    </a>
                  </li>

                  <li className="header__sm-menu-link">
                    <a href="/#about" className={styles.navLink}>
                      {" "}
                      About{" "}
                    </a>
                  </li>

                  <li className="header__sm-menu-link">
                    <a href="/#projects" className={styles.navLink}>
                      {" "}
                      Projects{" "}
                    </a>
                  </li>

                  <li className="header__sm-menu-link">
                    <a href="/#contact" className={styles.navLink}>
                      {" "}
                      Contact{" "}
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        {showNavbar && (
          <ul className="">
            <li className={styles.navSmLink}>
              <a href="/#" className={styles.navLink}>
                {" "}
                Home{" "}
              </a>
            </li>
            <li className={styles.navSmLink}>
              <a href="/#about" className={styles.navLink}>
                About{" "}
              </a>
            </li>
            <li className={styles.navSmLink}>
              <a href="/#projects" className={styles.navLink}>
                Projects
              </a>
            </li>
            <li className={styles.navSmLink}>
              <a href="/#contact" className={styles.navLink}>
                {" "}
                Contact{" "}
              </a>
            </li>
          </ul>
        )}
      </header>
    </>
  );
}
