import Head from "next/head";
import { uiActions } from "../store/slices/uiSlice";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";

function Navbar() {
  const dispatch = useDispatch();
  const language = useSelector((state) => state.ui.language);
  const content = useSelector((state) => state.ui.content);
  const [dropdown, setDropdown] = useState({ show: false, currency: "MXN" });
  const [languageDropdown, setLanguageDropdown] = useState({
    show: false,
    language: "es",
  });

  return (
    <nav className="fixed grid h-[10%] px-3 bg-gray-100 w-full top-0 left-0 z-50">
      <div className=" flex flex-row flex-wrap justify-between items-center">
        <a href="#" className="">
          <img
            src={content.navbar.logo}
            className="h-3 sm:h-6"
            alt="Xcaret Logo"
          />
        </a>

        <ul className="flex flew-row gap-5">
          <li className="contact">
            <a href="#" className="text-black uppercase font-medium">
              {content.navbar.menu.contact}
            </a>
          </li>

          <li className="language">
            <div className="relative inline-block text-left">
              <div>
                <button
                  onClick={() =>
                    setLanguageDropdown((prev) => {
                      return { ...prev, show: !languageDropdown.show };
                    })
                  }
                  type="button"
                  className="inline-flex w-full justify-center uppercase  text-sm font-medium text-black  hover:bg-gray-50"
                  id="menu-button"
                  aria-expanded="true"
                  aria-haspopup="true"
                >
                  {language}
                  <svg
                    className="-mr-1 ml-2 h-5 w-5"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>
              </div>

              {languageDropdown.show && (
                <div
                  className="absolute z-10 mt-2 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
                  role="menu"
                  aria-orientation="vertical"
                  aria-labelledby="menu-button"
                  tabindex="-1"
                >
                  <div className="py-1  uppercase" role="none">
                    <button
                      onClick={() => {
                        setLanguageDropdown((prev) => {
                          return { show: false, language: "es" };
                        });
                        dispatch(uiActions.setUiLanguage("es"));
                      }}
                      className="text-neutral-700 hover:bg-neutral-200 uppercase block w-full px-2 py-2 text-sm"
                      role="menuitem"
                      tabindex="-1"
                      id={`menu-item-1`}
                    >
                      español
                    </button>
                    <button
                      onClick={() => {
                        setLanguageDropdown((prev) => {
                          return { show: false, language: "en" };
                        });
                        dispatch(uiActions.setUiLanguage("en"));
                      }}
                      className="text-neutral-700 hover:bg-neutral-200 uppercase block w-full px-2 py-2 text-sm"
                      role="menuitem"
                      tabindex="-2"
                      id={`menu-item-2`}
                    >
                      english
                    </button>
                  </div>
                </div>
              )}
            </div>
          </li>

          <li className="currency">
            <div className="relative inline-block text-left">
              <div>
                <button
                  onClick={() =>
                    setDropdown((prev) => {
                      return { ...prev, show: !dropdown.show };
                    })
                  }
                  type="button"
                  className="inline-flex w-full justify-center uppercase  text-sm font-medium text-black  hover:bg-gray-50"
                  id="menu-button"
                  aria-expanded="true"
                  aria-haspopup="true"
                >
                  {dropdown.currency}
                  <svg
                    className="-mr-1 ml-2 h-5 w-5"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>
              </div>

              {dropdown.show && (
                <div
                  className="absolute z-10 mt-2 w-full origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
                  role="menu"
                  aria-orientation="vertical"
                  aria-labelledby="menu-button"
                  tabindex="-1"
                >
                  <div className="py-1  uppercase" role="none">
                    {content.navbar.menu.currency.map((currency, index) => {
                      return (
                        <button
                          onClick={() =>
                            setDropdown((prev) => {
                              return { show: false, currency: currency };
                            })
                          }
                          className="text-neutral-700 hover:bg-neutral-200 uppercase block px-2 py-2 w-full text-sm"
                          role="menuitem"
                          tabindex="-1"
                          id={`menu-item-${index}`}
                        >
                          {currency}
                        </button>
                      );
                    })}
                  </div>
                </div>
              )}
            </div>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
