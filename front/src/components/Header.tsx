import React, { useState } from 'react';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(prevState => !prevState);
  };

  return (
    <div className='main--container'>
    <nav className="navbar--main bg-white border-gray-200 dark:bg-gray-900 sticky top-0">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-2">
        <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
          <img
            src="https://ironwolf.lt/files/vilkas-vilniaus-simbolis-uzrasas.png"
            className="h-15"
            alt="Logo"
          />
          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
            Vilnius Tours
          </span>
        </a>
        <div className="flex md:order-2">
          <button
            type="button"
            onClick={toggleMenu}
            aria-controls="navbar-search"
            aria-expanded={isMenuOpen ? 'true' : 'false'}
            className="md:hidden text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-2.5 me-1"
          >
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 20"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
              />
            </svg>
            <span className="sr-only">Search</span>
          </button>
          <div className="relative hidden md:block">
            <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
              <svg
                className="w-4 h-4 text-gray-500 dark:text-gray-400"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 20"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                />
              </svg>
              <span className="sr-only">Search icon</span>
            </div>
            <input
              type="text"
              id="search-navbar"
              className="block w-full p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Search..."
            />
          </div>
          <button
            type="button"
            onClick={toggleMenu}
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-search"
            aria-expanded={isMenuOpen ? 'true' : 'false'}
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
        </div>
        <div
          className={`items-center justify-between hidden w-full md:flex md:w-auto md:order-1 ${
            isMenuOpen ? '' : 'hidden'
          }`}
          id="navbar-search"
        >
          <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            <li>
              <a
                href="#"
                className="block py-2 px-3 text-white bg-blue-700 rounded-sm md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500"
                aria-current="page"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
              >
                Services
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    <div>
      
    
    <h1
  className="ml-20 text-4xl mt-[15rem] font-semibold leading-normal text-gray-900 dark:text-white animate-flip-down animate-once animate-duration-[500ms] animate-delay-[500ms] animate-ease-in drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)]"
>
  Welcome to Vilnius Tours, where you can find best places to visit.
</h1>
<h2 className='animate-flip-down animate-once animate-duration-[500ms] animate-delay-[1000ms] animate-ease-in drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)] ml-20 text-3xl mt-2 leading-normal text-gray-900 dark:text-white'>Read about Vilnius and discover .</h2></div>
<div className="flex drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)] animate-fade-up animate-duration-[500ms] animate-delay-[2000ms] animate-ease-in justify-center mt-10 mb-10">
  <div className="w-1/3 p-11">
    <a href="/page1" className=" w-2/3 h-2/3 relative">
      <img src="./src/assets/images/1.jpg" alt="Image 1" className="w-full rounded-lg h-full object-cover" />
      <span className="absolute top-1/2 w-full text-center left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white font-bold text-xl opacity-0 transition duration-300">Sites you must visit in Vilnius</span>
    </a>
  </div>
  <div className="w-1/3 p-11">
    <a href="/page2" className="w-2/3 h-2/3 relative">
      <img src="./src/assets/images/2.jpg" alt="Image 2" className="w-full rounded-lg h-full object-cover" />
      <span className="absolute top-1/2 w-full text-center left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white font-bold text-xl opacity-0 transition duration-300">Short history of Vilnius</span>
    </a>
  </div>
  <div className="w-1/3 p-11">
    <a href="/page3" className="w-2/3 h-2/3 relative">
      <img src="./src/assets/images/3.jpg" alt="Image 3" className="w-full rounded-lg h-full object-cover" />
      <span className="absolute top-1/2 w-full text-center left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white font-bold text-xl opacity-0 transition duration-300">History of Lithuania</span>
    </a>
  </div>
</div>
</div>);
};

export default Navbar;