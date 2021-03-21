import React from "react"

const CheckMark: React.FC = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      className="w-5 h-5 mt-px text-green-800"
    >
      <path fill="none" d="M0 0h24v24H0z" />
      <path
        fill="currentColor"
        d="M11.602 13.76l1.412 1.412 8.466-8.466 1.414 1.414-9.88 9.88-6.364-6.364 1.414-1.414 2.125 2.125 1.413 1.412zm.002-2.828l4.952-4.953 1.41 1.41-4.952 4.953-1.41-1.41zm-2.827 5.655L7.364 18 1 11.636l1.414-1.414 1.413 1.413-.001.001 4.951 4.951z"
      />
    </svg>
  )
}

const ServicesSection = () => {
  return (
    <section className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div className="flex flex-col mb-6 lg:flex-row md:mb-10">
        <div className="lg:w-1/2">
          <h2 className="max-w-md mb-6 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none xl:max-w-lg">
            Treat your bike to next level services.
          </h2>
        </div>
        <div className="lg:w-1/2" />
      </div>
      <div className="grid gap-8 row-gap-10 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-green-50">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              className="text-green-900 w-7 h-7"
            >
              <path fill="none" d="M0 0h24v24H0z" />
              <path
                fill="currentColor"
                d="M15.199 9.945a2.6 2.6 0 0 1-.79-1.551l-.403-3.083-2.73 1.486a2.6 2.6 0 0 1-1.72.273L6.5 6.5l.57 3.056a2.6 2.6 0 0 1-.273 1.72l-1.486 2.73 3.083.403a2.6 2.6 0 0 1 1.55.79l2.138 2.257 1.336-2.807a2.6 2.6 0 0 1 1.23-1.231l2.808-1.336-2.257-2.137zm.025 5.563l-2.213 4.65a.6.6 0 0 1-.977.155l-3.542-3.739a.6.6 0 0 0-.357-.182l-5.107-.668a.6.6 0 0 1-.449-.881l2.462-4.524a.6.6 0 0 0 .062-.396L4.16 4.86a.6.6 0 0 1 .7-.7l5.063.943a.6.6 0 0 0 .396-.062l4.524-2.462a.6.6 0 0 1 .881.45l.668 5.106a.6.6 0 0 0 .182.357l3.739 3.542a.6.6 0 0 1-.155.977l-4.65 2.213a.6.6 0 0 0-.284.284zm.797 1.927l1.414-1.414 4.243 4.242-1.415 1.415-4.242-4.243z"
              />
            </svg>
          </div>
          <h6 className="mb-2 font-semibold leading-5">Full Services</h6>
          <p className="mb-3 text-sm text-gray-900">
            With us your bike can ride as smooth as the day you bought it.
          </p>
          <ul className="mb-4 -ml-1 space-y-2">
            <li className="flex items-start">
              <span className="mr-1">
                <CheckMark />
              </span>
              Hard-tail
            </li>
            <li className="flex items-start">
              <span className="mr-1">
                <CheckMark />
              </span>
              Dual Sus
            </li>
            <li className="flex items-start">
              <span className="mr-1">
                <CheckMark />
              </span>
              Kiddies Bikes
            </li>
          </ul>
        </div>
        <div>
          <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-green-50">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              className="text-green-900 w-7 h-7"
            >
              <path fill="none" d="M0 0h24v24H0z" />
              <path
                fill="currentColor"
                d="M20 3l2 4v13a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V7.004L4 3h16zm0 6H4v10h16V9zm-8 1l4 4h-3v4h-2v-4H8l4-4zm6.764-5H5.236l-.999 2h15.527l-1-2z"
              />
            </svg>
          </div>
          <h6 className="mb-2 font-semibold leading-5">Bike assemblies</h6>
          <p className="mb-3 text-sm text-gray-900">
            We take the hastle away and assemble your bike as it's meant to be.
          </p>
          <ul className="mb-4 -ml-1 space-y-2">
            <li className="flex items-start">
              <span className="mr-1">
                <CheckMark />
              </span>
              Packaging
            </li>
            <li className="flex items-start">
              <span className="mr-1">
                <CheckMark />
              </span>
              Assembling
            </li>
            <li className="flex items-start">
              <span className="mr-1">
                <CheckMark />
              </span>
              New Builds
            </li>
          </ul>
        </div>
        <div>
          <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-green-50">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              className="text-green-900 w-7 h-7"
            >
              <path fill="none" d="M0 0h24v24H0z" />
              <path
                fill="currentColor"
                d="M16.33 13.5A6.988 6.988 0 0 0 19 8h2a8.987 8.987 0 0 1-3.662 7.246l2.528 4.378a2 2 0 0 1-.732 2.732l-3.527-6.108A8.97 8.97 0 0 1 12 17a8.97 8.97 0 0 1-3.607-.752l-3.527 6.108a2 2 0 0 1-.732-2.732l5.063-8.77A4.002 4.002 0 0 1 11 4.126V2h2v2.126a4.002 4.002 0 0 1 1.803 6.728L16.33 13.5zM14.6 14.502l-1.528-2.647a4.004 4.004 0 0 1-2.142 0l-1.528 2.647c.804.321 1.68.498 2.599.498.918 0 1.795-.177 2.599-.498zM12 10a2 2 0 1 0 0-4 2 2 0 0 0 0 4z"
              />
            </svg>
          </div>
          <h6 className="mb-2 font-semibold leading-5">Adjustments</h6>
          <p className="mb-3 text-sm text-gray-900">
            Let us fine-tune your bicycle to perfection for a smooth and joyful
            ride.
          </p>
          <ul className="mb-4 -ml-1 space-y-2">
            <li className="flex items-start">
              <span className="mr-1">
                <CheckMark />
              </span>
              Brakes
            </li>
            <li className="flex items-start">
              <span className="mr-1">
                <CheckMark />
              </span>
              Gears
            </li>
            <li className="flex items-start">
              <span className="mr-1">
                <CheckMark />
              </span>
              Wheel Truing
            </li>
          </ul>
        </div>
        <div>
          <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-green-50">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              className="text-green-800 w-7 h-7"
            >
              <path fill="none" d="M0 0h24v24H0z" />
              <path
                fill="currentColor"
                d="M5.33 3.271a3.5 3.5 0 0 1 4.254 4.963l10.709 10.71-1.414 1.414-10.71-10.71a3.502 3.502 0 0 1-4.962-4.255L5.444 7.63a1.5 1.5 0 1 0 2.121-2.121L5.329 3.27zm10.367 1.884l3.182-1.768 1.414 1.414-1.768 3.182-1.768.354-2.12 2.121-1.415-1.414 2.121-2.121.354-1.768zm-6.718 8.132l1.414 1.414-5.303 5.303a1 1 0 0 1-1.492-1.327l.078-.087 5.303-5.303z"
              />
            </svg>
          </div>
          <h6 className="mb-2 font-semibold leading-5">General repairs</h6>
          <p className="mb-3 text-sm text-gray-800">
            For when you just need your bike to be generally fixed.
          </p>
          <ul className="mb-4 -ml-1 space-y-2">
            <li className="flex items-start">
              <span className="mr-1">
                <CheckMark />
              </span>
              Pro Wash & Lube
            </li>
            <li className="flex items-start">
              <span className="mr-1">
                <CheckMark />
              </span>
              Break Bleeds
            </li>
            <li className="flex items-start">
              <span className="mr-1">
                <CheckMark />
              </span>
              Tubes & Tyres
            </li>
          </ul>
        </div>
      </div>
    </section>
  )
}

export default ServicesSection
