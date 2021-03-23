import React from "react"
import { Link } from "gatsby"

const Footer = () => {
  return (
    <footer className="px-4 pt-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
      <div className="grid gap-10 row-gap-1 mb-4 sm:grid-cols-2 lg:grid-cols-4">
        <div className="sm:col-span-2">
          <Link to="/" className="inline-flex items-center">
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
      </div>
      <div className="flex flex-col justify-between pt-4 pb-10 border-t sm:flex-row">
        <p className="text-sm text-gray-700">
          © Copyright 2021 Cycleworx Langebaan. All rights reserved.
        </p>
        <div className="flex items-center mt-4 space-x-4 sm:mt-0">
          <a
            rel="noopener"
            target="_blank"
            title="Facebook"
            href="https://www.facebook.com/CycleWorxLangebaan"
            className="text-gray-600 transition-colors duration-300 hover:text-green-700"
          >
            <svg viewBox="0 0 24 24" fill="currentColor" className="h-5">
              <path d="M22,0H2C0.895,0,0,0.895,0,2v20c0,1.105,0.895,2,2,2h11v-9h-3v-4h3V8.413c0-3.1,1.893-4.788,4.659-4.788 c1.325,0,2.463,0.099,2.795,0.143v3.24l-1.918,0.001c-1.504,0-1.795,0.715-1.795,1.763V11h4.44l-1,4h-3.44v9H22c1.105,0,2-0.895,2-2 V2C24,0.895,23.105,0,22,0z" />
            </svg>
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
