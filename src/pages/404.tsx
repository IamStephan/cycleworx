import React from "react"
import { Link } from "gatsby"
import SEO from "@components/seo"

// markup
const NotFoundPage = () => {
  return (
    <>
      <SEO title="Page not found" description="Page not found" />
      <main className="flex items-center justify-center h-screen">
        <section className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
          <div className="max-w-screen-sm sm:text-center sm:mx-auto">
            <div className="pb-3">
              <Link
                to="/"
                aria-label="Go home"
                title="Cycleworx Langebaan"
                className="inline-flex items-center"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  className="w-8 text-green-600"
                >
                  <path fill="none" d="M0 0h24v24H0z" />
                  <path
                    fill="currentColor"
                    d="M5.5 21a4.5 4.5 0 1 1 0-9 4.5 4.5 0 0 1 0 9zm0-3a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3zm13 3a4.5 4.5 0 1 1 0-9 4.5 4.5 0 0 1 0 9zm0-3a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3zm-6.969-8.203L13 12v6h-2v-5l-2.719-2.266A2 2 0 0 1 8 7.671l2.828-2.828a2 2 0 0 1 2.829 0l1.414 1.414a6.969 6.969 0 0 0 3.917 1.975l-.01 2.015a8.962 8.962 0 0 1-5.321-2.575L11.53 9.797zM16 5a2 2 0 1 1 0-4 2 2 0 0 1 0 4z"
                  />
                </svg>
                <span className="ml-2 text-xl font-bold tracking-wide text-gray-800">
                  Cycleworx Langebaan
                </span>
              </Link>
            </div>
            <h2 className="mb-4 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none">
              Page not found.
            </h2>
            <p className="text-base text-gray-700 md:text-lg sm:px-4">
              You can press on the logo to go back to the home page. You can
              also contact us or get to know us more.
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
      </main>
    </>
  )
}

export default NotFoundPage
