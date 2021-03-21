import React from "react"
import { StaticImage } from "gatsby-plugin-image"

import "./styles.css"

const Images: React.FC = () => {
  return (
    <>
      <StaticImage
        placeholder="blurred"
        className="flex-shrink-0 ml-10 flex-grow-1"
        src="../../assets/images/homepage/brand-1.png"
        alt="Omnico"
      />
      <StaticImage
        placeholder="blurred"
        className="flex-shrink-0 ml-10 flex-grow-1"
        src="../../assets/images/homepage/brand-2.png"
        alt="Sram"
      />
      <StaticImage
        placeholder="blurred"
        className="flex-shrink-0 ml-10 flex-grow-1"
        src="../../assets/images/homepage/brand-3.png"
        alt="Silverback"
      />
      <StaticImage
        placeholder="blurred"
        className="flex-shrink-0 ml-10 flex-grow-1"
        src="../../assets/images/homepage/brand-4.png"
        alt="Giant"
      />
      <StaticImage
        placeholder="blurred"
        className="flex-shrink-0 ml-10 flex-grow-1"
        src="../../assets/images/homepage/brand-5.png"
        alt="Schwinn"
      />
      <StaticImage
        placeholder="blurred"
        className="flex-shrink-0 ml-10 flex-grow-1"
        src="../../assets/images/homepage/brand-6.png"
        alt="Titan"
      />
      <StaticImage
        placeholder="blurred"
        className="flex-shrink-0 ml-10 flex-grow-1"
        src="../../assets/images/homepage/brand-7.png"
        alt="Shimano"
      />
    </>
  )
}

const ImageSet: React.FC = () => {
  return (
    <div className="flex flex-row flex-shrink-0 flex-grow-1 flex-nowrap imgSet">
      <Images />
      <Images />
    </div>
  )
}

const BrandLogosSection = () => {
  return (
    <section className="relative px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
        <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
          Working with brands you know and love...
        </h2>
        <p className="text-base text-gray-700 md:text-lg">
          We work with the best brands in the industry to make sure you get your
          hands on the exceptional. Don't settle for second best when you can
          have the best.
        </p>
      </div>

      {/**
       * Clamping the width with the container
       * gives me more control over device sizes
       * and not over loading with to many images
       */}
      <div className="flex flex-row w-full overflow-hidden flex-nowrap logosContainer">
        <ImageSet />
      </div>
    </section>
  )
}

export default BrandLogosSection
