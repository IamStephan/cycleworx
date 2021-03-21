import React from "react"

const ContactSection = () => {
  return (
    <section className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div className="max-w-xl mb-10 sm:mx-auto">
        <h2 className="font-sans text-3xl font-bold leading-tight tracking-tight text-gray-900 sm:text-4xl sm:text-center">
          Give us a call or come visit us
          <br />
          Let's start{" "}
          <span className="inline-block text-green-600">talking</span>
        </h2>
      </div>
      <div className="grid gap-12 row-gap-8 lg:grid-cols-3">
        <div className="flex">
          <div className="mr-4">
            <div className="flex items-center justify-center w-10 h-10 mb-3 rounded-full bg-green-50">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                className="w-6 h-6 text-green-700"
              >
                <path fill="none" d="M0 0h24v24H0z" />
                <path
                  fill="currentColor"
                  d="M22 17.002a6.002 6.002 0 0 1-4.713 5.86l-.638-1.914A4.003 4.003 0 0 0 19.465 19H17a2 2 0 0 1-2-2v-4a2 2 0 0 1 2-2h2.938a8.001 8.001 0 0 0-15.876 0H7a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-5C2 6.477 6.477 2 12 2s10 4.477 10 10V17.002zM20 17v-4h-3v4h3zM4 13v4h3v-4H4z"
                />
              </svg>
            </div>
          </div>
          <div>
            <h6 className="mb-2 font-semibold leading-5">Get in touch</h6>
            <div className="flex">
              <p className="mr-1 text-gray-800">Phone:</p>
              <a
                href="tel:073 7344 098"
                aria-label="Our phone"
                title="Our phone"
                className="text-green-600 transition-colors duration-300 hover:text-green-800"
              >
                073 7344 098
              </a>
            </div>
            <div className="flex">
              <p className="mr-1 text-gray-800">Email:</p>
              <a
                href="mailto:cycleworxlbn@gmail.com"
                aria-label="Our email"
                title="Our email"
                className="text-green-600 transition-colors duration-300 hover:text-green-800"
              >
                cycleworxlbn@gmail.com
              </a>
            </div>
          </div>
        </div>
        <div className="flex">
          <div className="mr-4">
            <div className="flex items-center justify-center w-10 h-10 mb-3 rounded-full bg-green-50">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                className="w-6 h-6 text-green-700"
              >
                <path fill="none" d="M0 0h24v24H0z" />
                <path
                  fill="currentColor"
                  d="M12 20.9l4.95-4.95a7 7 0 1 0-9.9 0L12 20.9zm0 2.828l-6.364-6.364a9 9 0 1 1 12.728 0L12 23.728zM12 13a2 2 0 1 0 0-4 2 2 0 0 0 0 4zm0 2a4 4 0 1 1 0-8 4 4 0 0 1 0 8z"
                />
              </svg>
            </div>
          </div>
          <div>
            <h6 className="mb-2 font-semibold leading-5">Location</h6>
            <div className="flex">
              <p className="mr-1 text-gray-800">
                Madriko Centre Oostewal Road,
              </p>
            </div>
            <div className="flex">
              <p className="mr-1 text-gray-800">Langebaan, 7357</p>
            </div>
          </div>
        </div>
        <div className="flex">
          <div className="mr-4">
            <div className="flex items-center justify-center w-10 h-10 mb-3 rounded-full bg-green-50">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                className="w-6 h-6 text-green-700"
              >
                <path fill="none" d="M0 0h24v24H0z" />
                <path
                  fill="currentColor"
                  d="M21 11.646V21a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1v-9.354A3.985 3.985 0 0 1 2 9V3a1 1 0 0 1 1-1h18a1 1 0 0 1 1 1v6c0 1.014-.378 1.94-1 2.646zm-2 1.228a4.007 4.007 0 0 1-4-1.228A3.99 3.99 0 0 1 12 13a3.99 3.99 0 0 1-3-1.354 3.99 3.99 0 0 1-4 1.228V20h14v-7.126zM14 9a1 1 0 0 1 2 0 2 2 0 1 0 4 0V4H4v5a2 2 0 1 0 4 0 1 1 0 1 1 2 0 2 2 0 1 0 4 0z"
                />
              </svg>
            </div>
          </div>
          <div>
            <h6 className="mb-2 font-semibold leading-5">Business hours</h6>
            <div className="flex">
              <p className="mr-1 text-gray-800">Mon-Fri: 09:00 - 17:00</p>
            </div>
            <div className="flex">
              <p className="mr-1 text-gray-800">Sat: 09:00 - 13:00</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContactSection
