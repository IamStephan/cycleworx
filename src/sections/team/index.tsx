import React from "react"
import { StaticImage } from "gatsby-plugin-image"

const TeamSection = () => {
  return (
    <section className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
        <div>
          <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-green-900 uppercase rounded-full bg-green-accent-400">
            Dream Team
          </p>
        </div>
        <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
          <span className="relative inline-block">
            <svg
              viewBox="0 0 52 24"
              fill="currentColor"
              className="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-green-100 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block"
            >
              <defs>
                <pattern
                  id="247432cb-6e6c-4bec-9766-564ed7c230dc"
                  x="0"
                  y="0"
                  width=".135"
                  height=".30"
                >
                  <circle cx="1" cy="1" r=".7" />
                </pattern>
              </defs>
              <rect
                fill="url(#247432cb-6e6c-4bec-9766-564ed7c230dc)"
                width="52"
                height="24"
              />
            </svg>
            <span className="relative">A</span>
          </span>{" "}
          team of seasoned professionals
        </h2>
        <p className="text-base text-gray-700 md:text-lg">
          Our team of professionals have been trained to service you and your
          bike to the absolute best of standards. We are friendly, industrious
          and eager to help.
        </p>
      </div>
      <div className="grid gap-10 row-gap-8 mx-auto sm:row-gap-10 lg:max-w-screen-lg sm:grid-cols-2 lg:grid-cols-3">
        <div className="flex">
          <StaticImage
            className="object-cover w-20 h-20 mr-4 rounded-full shadow"
            src="../../assets/images/homepage/team-1.jpg"
            alt="Jon Amira"
          />
          <div className="flex flex-col justify-center">
            <p className="text-lg font-bold">Jon Amira</p>
            <p className="text-sm text-gray-800">Owner | Mechanic</p>
          </div>
        </div>
        <div className="flex">
          <StaticImage
            className="object-cover w-20 h-20 mr-4 rounded-full shadow"
            src="../../assets/images/homepage/team-2.jpg"
            alt="Prince Mazie"
          />
          <div className="flex flex-col justify-center">
            <p className="text-lg font-bold">Prince Mazie</p>
            <p className="text-sm text-gray-800">Mechanic</p>
          </div>
        </div>
        <div className="flex">
          <StaticImage
            className="object-cover w-20 h-20 mr-4 rounded-full shadow"
            src="../../assets/images/homepage/team-3.jpg"
            alt="Gavin Nicholson"
          />
          <div className="flex flex-col justify-center">
            <p className="text-lg font-bold">Kyle Swanepoel</p>
            <p className="text-sm text-gray-800">Mechanic</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default TeamSection
