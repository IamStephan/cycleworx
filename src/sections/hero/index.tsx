import React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

const HeroSection = () => {
  return (
    <section className="relative mb-16">
      <StaticImage
        src="../../assets/images/hero.jpg"
        alt=""
        className="absolute object-cover w-full h-full"
        objectFit="cover"
        // objectPosition="25%"
        style={{
          zIndex: -50,
        }}
      />
      <div
        className="absolute object-cover w-full h-full bg-black bg-opacity-50"
        style={{
          zIndex: -19,
        }}
      />
      <div className="pt-16">
        <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
          <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
            <div>
              <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-green-900 uppercase rounded-full bg-green-accent-400">
                Welcome to
              </p>
            </div>
            <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-50 sm:text-4xl md:mx-auto">
              <span className="relative inline-block">
                <svg
                  viewBox="0 0 52 24"
                  fill="currentColor"
                  className="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-gray-400 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block"
                >
                  <defs>
                    <pattern
                      id="dc223fcc-6d72-4ebc-b4ef-abe121034d6e"
                      x="0"
                      y="0"
                      width=".135"
                      height=".30"
                    >
                      <circle cx="1" cy="1" r=".7" />
                    </pattern>
                  </defs>
                  <rect
                    fill="url(#dc223fcc-6d72-4ebc-b4ef-abe121034d6e)"
                    width="52"
                    height="24"
                  />
                </svg>
                <span className="relative">Your</span>
              </span>{" "}
              bicycle's next best home
            </h2>
            <p className="text-base text-gray-300 md:text-lg">
              Cycleworx Langebaan provides you and your bicycle with first-class
              services and products that will make you want to come back for
              more.
            </p>
          </div>
          <div className="flex items-center sm:justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center h-12 px-6 mr-6 font-medium tracking-wide text-white transition duration-200 bg-green-700 rounded shadow-lg hover:bg-green-500 focus:shadow-outline focus:outline-none"
            >
              Contact Us
            </Link>
            <Link
              to="/about"
              aria-label=""
              className="inline-flex items-center font-semibold text-gray-400 transition-colors duration-200 hover:text-green-700"
            >
              Get to know us
              <svg
                className="inline-block w-3 ml-2"
                fill="currentColor"
                viewBox="0 0 12 12"
              >
                <path d="M9.707,5.293l-5-5A1,1,0,0,0,3.293,1.707L7.586,6,3.293,10.293a1,1,0,1,0,1.414,1.414l5-5A1,1,0,0,0,9.707,5.293Z" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
      <div className="relative px-4 sm:px-0">
        <div
          className="absolute inset-0 mt-auto bg-white h-1/2"
          style={{ transform: "translateY(10px)" }}
        />
        <div className="relative grid mx-auto overflow-hidden bg-white divide-y rounded shadow sm:divide-y-0 sm:divide-x sm:max-w-screen-sm sm:grid-cols-3 lg:max-w-screen-md">
          <div className="inline-block p-8 text-center">
            <div className="flex items-center justify-center w-12 h-12 mx-auto mb-4 rounded-full bg-green-50">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                className="w-8 h-8 text-green-900"
              >
                <path fill="none" d="M0 0h24v24H0z" />
                <path
                  fill="currentColor"
                  d="M5.5 21a4.5 4.5 0 1 1 0-9 4.5 4.5 0 0 1 0 9zm0-2a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5zm13 2a4.5 4.5 0 1 1 0-9 4.5 4.5 0 0 1 0 9zm0-2a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5zm-7.477-8.695L13 12v6h-2v-5l-2.719-2.266A2 2 0 0 1 8 7.671l2.828-2.828a2 2 0 0 1 2.829 0l1.414 1.414a6.969 6.969 0 0 0 3.917 1.975l-.01 2.015a8.962 8.962 0 0 1-5.321-2.575l-2.634 2.633zM16 5a2 2 0 1 1 0-4 2 2 0 0 1 0 4z"
                />
              </svg>
            </div>
            <p className="font-bold tracking-wide text-gray-800">Rentals</p>
          </div>
          <div className="inline-block p-8 text-center">
            <div className="flex items-center justify-center w-12 h-12 mx-auto mb-4 rounded-full bg-green-50">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                className="w-8 h-8 text-green-900"
              >
                <path fill="none" d="M0 0h24v24H0z" />
                <path
                  fill="currentColor"
                  d="M5.33 3.271a3.5 3.5 0 0 1 4.254 4.963l10.709 10.71-1.414 1.414-10.71-10.71a3.502 3.502 0 0 1-4.962-4.255L5.444 7.63a1.5 1.5 0 1 0 2.121-2.121L5.329 3.27zm10.367 1.884l3.182-1.768 1.414 1.414-1.768 3.182-1.768.354-2.12 2.121-1.415-1.414 2.121-2.121.354-1.768zm-6.718 8.132l1.414 1.414-5.303 5.303a1 1 0 0 1-1.492-1.327l.078-.087 5.303-5.303z"
                />
              </svg>
            </div>
            <p className="font-bold tracking-wide text-gray-800 scale-30">
              Workshop
            </p>
          </div>
          <div className="inline-block p-8 text-center">
            <div className="flex items-center justify-center w-12 h-12 mx-auto mb-4 rounded-full bg-green-50">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                className="text-green-900 w-7 h-7"
              >
                <path fill="none" d="M0 0h24v24H0z" />
                <path
                  fill="currentColor"
                  d="M7 8V6a5 5 0 1 1 10 0v2h3a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1h3zm0 2H5v10h14V10h-2v2h-2v-2H9v2H7v-2zm2-2h6V6a3 3 0 0 0-6 0v2z"
                />
              </svg>
            </div>
            <p className="font-bold tracking-wide text-gray-800">Retail</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
