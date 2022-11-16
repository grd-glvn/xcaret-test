import Head from 'next/head'
import { uiActions } from '../store/slices/uiSlice'
import { useDispatch, useSelector } from 'react-redux'
import { useState } from 'react'


function Navbar() {
    const dispatch = useDispatch();
    const language = useSelector( state => state.ui.language );
    const content = useSelector( state => state.ui.content );
    const [dropdown, setDropdown] = useState({show:false,currency:'MXN'});
    const [languageDropdown, setLanguageDropdown] = useState({show:false,language:'es'});

    return (
    <nav className="h-[13%] inline-flex items-center bg-gray-100 px-2 sm:px-4 py-2.5  fixed w-full z-20 top-0 left-0 ">
    <div className="container flex flex-wrap justify-between items-center mx-auto">
    <a href="#" className="flex items-center">
        <img src={ content.navbar.logo } className="mr-3 h-6 sm:h-9" alt="Xcaret Logo"/>
    </a>

    <div className="hidden justify-between  items-center items-center w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
      <ul className="flex flex-col p-4 mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium">
        <li>
          <a href="#" className="block py-2 pr-4 pl-3 text-black uppercase md:p-0 " aria-current="page">{content.navbar.menu.contact}</a>
        </li>
        <li>
        <div class="relative inline-block text-left">
            <div>
              <button onClick={()=>setLanguageDropdown(prev=> {return({...prev,show:!languageDropdown.show})})} type="button" class="inline-flex w-full justify-center uppercase  text-sm font-medium text-black  hover:bg-gray-50" id="menu-button" aria-expanded="true" aria-haspopup="true">
                {language}
                <svg class="-mr-1 ml-2 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                  <path fill-rule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clip-rule="evenodd" />
                </svg>
              </button>
            </div>

          { languageDropdown.show &&
            <div class="absolute z-10 mt-2 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabindex="-1">
              <div class="py-1  uppercase" role="none">
              {/* {content.navbar.menu.currency.map( (currency, index) => {
                return( 
                  <button onClick={()=>setDropdown(prev=> {return({show:false,currency:currency})})} class="text-neutral-700 hover:bg-neutral-200 uppercase block px-2 py-2 w-full text-sm" role="menuitem" tabindex="-1" id={`menu-item-${index}`}>{currency}</button>
                  )
                })} */}
                <button onClick={()=>{setLanguageDropdown(prev=> {return({show:false,language:"es"})}); dispatch(uiActions.setUiLanguage("es"))}} class="text-neutral-700 hover:bg-neutral-200 uppercase block w-full px-2 py-2 text-sm" role="menuitem" tabindex="-1" id={`menu-item-1`}>español</button>
                <button onClick={()=>{setLanguageDropdown(prev=> {return({show:false,language:"en"})}); dispatch(uiActions.setUiLanguage("en"))}} class="text-neutral-700 hover:bg-neutral-200 uppercase block w-full px-2 py-2 text-sm" role="menuitem" tabindex="-2" id={`menu-item-2`}>english</button>

              </div>
            </div>
            }
          </div>

          {/* <button onClick={()=>dispatch(uiActions.setUiLanguage('en'))} className="block py-2 pr-4 pl-3 text-black uppercase md:p-0 ">{language}</button> */}
        </li>
        <li>
          <div class="relative inline-block text-left">
            <div>
              <button onClick={()=>setDropdown(prev=> {return({...prev,show:!dropdown.show})})} type="button" class="inline-flex w-full justify-center uppercase  text-sm font-medium text-black  hover:bg-gray-50" id="menu-button" aria-expanded="true" aria-haspopup="true">
                {dropdown.currency}
                <svg class="-mr-1 ml-2 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                  <path fill-rule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clip-rule="evenodd" />
                </svg>
              </button>
            </div>

          { dropdown.show &&
            <div class="absolute z-10 mt-2 w-full origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabindex="-1">
              <div class="py-1  uppercase" role="none">
              {content.navbar.menu.currency.map( (currency, index) => {
                return( 
                  <button onClick={()=>setDropdown(prev=> {return({show:false,currency:currency})})} class="text-neutral-700 hover:bg-neutral-200 uppercase block px-2 py-2 w-full text-sm" role="menuitem" tabindex="-1" id={`menu-item-${index}`}>{currency}</button>
                  )
              })}
              </div>
            </div>
            }
          </div>
        </li>
      </ul>
    </div>
    </div>
  </nav>
  
  )
}

export default Navbar