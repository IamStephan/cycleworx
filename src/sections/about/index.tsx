import React from "react"

const AboutSection = () => {
  return (
    <section className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
        <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
          An overview of our{" "}
          <span className="inline-block text-green-600">journey</span>
        </h2>
        <p className="text-base text-gray-700 md:text-lg">
          We are a growing business, adapting to the times to make sure our
          customers experience the best there is to the cycling community.
        </p>
      </div>
      <div className="relative grid gap-8 row-gap-5 mb-8 md:row-gap-8 lg:grid-cols-4 sm:grid-cols-2">
        <div className="absolute inset-0 flex items-center justify-center sm:hidden lg:flex">
          <div className="w-px h-full bg-gray-300 lg:w-full lg:h-px" />
        </div>
        <div className="p-5 duration-300 transform bg-white border rounded shadow-sm hover:-translate-y-2">
          <div className="mb-2">
            <p className="inline-flex items-center justify-center px-1 mb-1 font-bold text-green-800 rounded flex-nowrap bg-green-50">
              2014-2015
            </p>
            <p className="flex-1 text-lg font-bold leading-5">
              Humble Beginnings
            </p>
          </div>
          <p className="text-sm text-gray-900">
            Starting of as just an idea in 90's, Cycleworx Langebaan ventured
            into the bicycle industry in just a garage.
          </p>
        </div>
        <div className="p-5 duration-300 transform bg-white border rounded shadow-sm hover:-translate-y-2">
          <div className="mb-2">
            <p className="inline-flex items-center justify-center px-1 mb-1 font-bold text-green-800 rounded flex-nowrap bg-green-50">
              2015-2018
            </p>
            <p className="flex-1 text-lg font-bold leading-5">
              Expantion and Growth.
            </p>
          </div>
          <p className="text-sm text-gray-900">
            From the support and love of the community, Cycleworx Langebaan grew
            to match your expectations.
          </p>
        </div>
        <div className="p-5 duration-300 transform bg-white border rounded shadow-sm hover:-translate-y-2">
          <div className="mb-2">
            <p className="inline-flex items-center justify-center px-1 mb-1 font-bold text-green-800 rounded flex-nowrap bg-green-50">
              2018-2019
            </p>
            <p className="flex-1 text-lg font-bold leading-5">Established</p>
          </div>
          <p className="text-sm text-gray-900">
            Cycleworx Langebaan is now part of something much larger than just
            cycling, a community.
          </p>
        </div>
        <div className="p-5 duration-300 transform bg-white border rounded shadow-sm hover:-translate-y-2">
          <div className="mb-2">
            <p className="inline-flex items-center justify-center px-1 mb-1 font-bold text-green-800 rounded flex-nowrap bg-green-50">
              2020-Now
            </p>
            <p className="flex-1 text-lg font-bold leading-5">
              The fight against nature
            </p>
          </div>
          <p className="text-sm text-gray-900">
            Nothing is stopping us from making sure your bike is in top-notch
            shape for enjoyable rides.
          </p>
        </div>
      </div>
    </section>
  )
}

export default AboutSection
