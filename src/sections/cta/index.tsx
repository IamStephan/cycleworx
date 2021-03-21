import React from "react"
import { Link } from "gatsby"

const CTASection = () => {
  return (
    <section className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div className="max-w-screen-sm sm:text-center sm:mx-auto">
        <Link
          to="/contact"
          aria-label="Contact us"
          title="Contact us"
          className="inline-block mb-5 rounded-full sm:mx-auto"
        >
          <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-green-50">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              className="w-10 h-10 text-green-800"
            >
              <path fill="none" d="M0 0h24v24H0z" />
              <path
                fill="currentColor"
                d="M7.291 20.824L2 22l1.176-5.291A9.956 9.956 0 0 1 2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10a9.956 9.956 0 0 1-4.709-1.176zm.29-2.113l.653.35A7.955 7.955 0 0 0 12 20a8 8 0 1 0-8-8c0 1.334.325 2.618.94 3.766l.349.653-.655 2.947 2.947-.655zM7 12h2a3 3 0 0 0 6 0h2a5 5 0 0 1-10 0z"
              />
            </svg>
          </div>
        </Link>
        <h2 className="mb-4 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none">
          Let us fix your bicycle
        </h2>
        <p className="text-base text-gray-700 md:text-lg sm:px-4">
          Give us a call and start experiencing the Cycleworx Langebaan
          treatment first hand. Or come give us a visit at the shop.
        </p>
        <hr className="w-full my-8 border-gray-300" />
        <div className="flex items-center sm:justify-center">
          <Link
            to="/contact"
            aria-label="Contact us"
            title="Contact us"
            className="inline-flex items-center justify-center h-12 px-6 mr-6 font-medium tracking-wide text-white transition duration-200 bg-green-700 rounded shadow-lg hover:bg-green-500 focus:shadow-outline focus:outline-none"
          >
            Contact Us
          </Link>
          <Link
            to="/about"
            aria-label="About us"
            title="About us"
            className="inline-flex items-center font-semibold text-green-700 transition-colors duration-200 hover:text-green-900"
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
    </section>
  )
}

export default CTASection
