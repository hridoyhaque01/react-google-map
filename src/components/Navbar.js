import React, { useRef, useState } from "react";
import { Link, NavLink } from "react-router-dom";

function Navbar() {
  const [isSubmenuOpen, setIsSubmenuOpen] = useState({});
  const submenuRef = useRef({});

  const [toggleMenu, setToggleMenu] = useState(false);

  const handleDropdown = (menu) => {
    setIsSubmenuOpen((prev) => ({
      [menu]: !prev[menu],
    }));
  };

  return (
    <nav className="py-4 px-6 text-white font-medium uppercase">
      <div className="max-w-[1180px] mx-auto">
        <div className="flex items-center justify-between md:hidden">
          <div className="flex-1 text-center">
            <NavLink to="/" className="">
              Logo
            </NavLink>
          </div>
          <div>
            <button type="button">
              <span class="material-symbols-outlined">menu</span>
            </button>
          </div>
        </div>

        <div className="flex flex-col md:flex-row md:items-center md:justify-between  fixed right-0 top-0 bottom-0 w-72 md:w-full gap-6 md:gap-0 md:relative">
          <div>
            <ul className="flex flex-col md:flex-row md:items-center gap-6">
              <li>
                <NavLink to="/" className="flex hover:text-yellow-200">
                  Home
                </NavLink>
              </li>

              <li className="relative group">
                <p
                  className="flex items-center hover:text-yellow-200 cursor-pointer group"
                  onClick={() => handleDropdown("home")}
                >
                  <span>home</span>
                  <span
                    className={`material-symbols-outlined md:group-hover:rotate-180 duration-300 ${
                      isSubmenuOpen["home"] && "rotate-180 md:rotate-0"
                    }`}
                  >
                    expand_more
                  </span>
                </p>
                <ul
                  className={`md:bg-slate-500 rounded-lg static md:absolute md:invisible md:opacity-0 md:translate-y-4 md:group-hover:visible md:group-hover:opacity-100 md:group-hover:translate-y-0 duration-300 overflow-hidden ${
                    !isSubmenuOpen["home"] && "max-h-0 md:max-h-max"
                  }`}
                  ref={(ref) => (submenuRef.current["home"] = ref)}
                  style={{
                    maxHeight:
                      isSubmenuOpen["home"] &&
                      `${submenuRef.current["home"]?.scrollHeight}px`,
                  }}
                >
                  <li>
                    <NavLink
                      to="/homepage-one"
                      className="whitespace-nowrap pl-4 pr-16 py-2 flex hover:text-yellow-200"
                    >
                      Home page 1
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/homepage-two"
                      className="whitespace-nowrap pl-4 pr-16 py-2 flex hover:text-yellow-200"
                    >
                      Home page 2
                    </NavLink>
                  </li>
                </ul>
              </li>
            </ul>
          </div>

          <div className="hidden md:block">
            <Link to="/"> Logo</Link>
          </div>

          <div>
            <ul className="flex flex-col md:flex-row md:items-center gap-6">
              <li>
                <NavLink to="/" className="flex hover:text-yellow-200">
                  Home
                </NavLink>
              </li>

              <li className="relative group">
                <p className="flex items-center hover:text-yellow-200 cursor-pointer group">
                  <span>home</span>
                  <span className="material-symbols-outlined group-hover:rotate-180 duration-300">
                    expand_more
                  </span>
                </p>
                <ul className="bg-slate-500 rounded-lg static md:absolute invisible opacity-0 translate-y-4 group-hover:visible group-hover:opacity-100 group-hover:translate-y-0 duration-300">
                  <li>
                    <NavLink
                      to="/homepage-one"
                      className="whitespace-nowrap pl-4 pr-16 py-2 flex hover:text-yellow-200"
                    >
                      Home page 1
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/homepage-two"
                      className="whitespace-nowrap pl-4 pr-16 py-2 flex hover:text-yellow-200"
                    >
                      Home page 2
                    </NavLink>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
