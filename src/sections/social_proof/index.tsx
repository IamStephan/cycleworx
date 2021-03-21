import React from "react"

const Star: React.FC = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      className="w-4 h-4 mr-1 text-amber-accent-400"
    >
      <path fill="none" d="M0 0h24v24H0z" />
      <path
        fill="currentColor"
        d="M12 18.26l-7.053 3.948 1.575-7.928L.587 8.792l8.027-.952L12 .5l3.386 7.34 8.027.952-5.935 5.488 1.575 7.928z"
      />
    </svg>
  )
}

const FiveStar: React.FC = () => {
  return (
    <div className="flex py-1">
      <Star />
      <Star />
      <Star />
      <Star />
      <Star />
    </div>
  )
}

const SocialProofSection = () => {
  return (
    <section className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div className="grid gap-10 lg:grid-cols-2">
        <div className="flex flex-col justify-center md:pr-8 xl:pr-0 lg:max-w-lg">
          <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-green-50">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              className="w-10 h-10 text-green-800"
            >
              <path fill="none" d="M0 0h24v24H0z" />
              <path
                fill="currentColor"
                d="M12 .5l4.226 6.183 7.187 2.109-4.575 5.93.215 7.486L12 19.69l-7.053 2.518.215-7.486-4.575-5.93 7.187-2.109L12 .5zm0 3.544L9.022 8.402 3.957 9.887l3.225 4.178-.153 5.275L12 17.566l4.97 1.774-.152-5.275 3.224-4.178-5.064-1.485L12 4.044zM10 12a2 2 0 1 0 4 0h2a4 4 0 1 1-8 0h2z"
              />
            </svg>
          </div>
          <div className="max-w-xl mb-6">
            <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none">
              What our{" "}
              <span className="inline-block text-green-600">awesome</span>
              <br className="hidden md:block" />
              <span className="inline-block text-green-600">
                customers
              </span>{" "}
              have to say
            </h2>
          </div>
        </div>
        <div className="grid gap-6 row-gap-6 sm:row-gap-10 lg:max-w-screen-lg sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
          <div className="flex p-3 border">
            <div className="flex flex-col justify-center">
              <p className="text-lg font-bold">Kirk Beukes</p>
              <FiveStar />
              <p className="text-sm text-gray-800 line-clamp-2">
                It's a great hospital for bicycles. Goes in brocken and comes
                out like new. At a very good price. Also new bicycles to choose
                from. The owner Jon, is there when you need advice . Great
                place.
              </p>
            </div>
          </div>
          <div className="flex p-3 border">
            <div className="flex flex-col justify-center">
              <p className="text-lg font-bold">West Coast Mountain Biker</p>
              <FiveStar />
              <p className="text-sm text-gray-800 line-clamp-2">
                Kind and helpful staff. Wide variety of product in store. Good
                prices. And always available for knowledge sharing. I
                accidentally gave the wrong rating while google gave me many
                places to review at once. I didn't know how to fix it but
                figured it out. 😜
              </p>
            </div>
          </div>
          <div className="flex p-3 border">
            <div className="flex flex-col justify-center">
              <p className="text-lg font-bold">Elmarie Gelderblom</p>
              <FiveStar />
              <p className="text-sm text-gray-800 line-clamp-2">
                Good day everyone, I have worked for 2 of the biggest cycling
                shops in Cape Town, as well as being a customer, but I have
                never experience such Fantastic Service.
              </p>
            </div>
          </div>
          <div className="flex p-3 border">
            <div className="flex flex-col justify-center">
              <p className="text-lg font-bold">Simon</p>
              <FiveStar />
              <p className="text-sm text-gray-800 line-clamp-2">
                What a great bunch of guys! Helpful, friendly and professional.
                They assisted me with buying a bike from a local in Langebaan
                and getting it checked, serviced, packed and shipped to JHB.
                Keep up the great work.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default SocialProofSection
