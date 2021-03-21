import React from "react"

const FAQSection = () => {
  return (
    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div className="max-w-xl sm:mx-auto lg:max-w-2xl">
        <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
          <div>
            <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-green-900 uppercase rounded-full bg-green-accent-400">
              FAQ
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
                    id="70326c9b-4a0f-429b-9c76-792941e326d5"
                    x="0"
                    y="0"
                    width=".135"
                    height=".30"
                  >
                    <circle cx="1" cy="1" r=".7" />
                  </pattern>
                </defs>
                <rect
                  fill="url(#70326c9b-4a0f-429b-9c76-792941e326d5)"
                  width="52"
                  height="24"
                />
              </svg>
              <span className="relative">Answering</span>
            </span>{" "}
            your most asked questions
          </h2>
          <p className="text-base text-gray-700 md:text-lg">
            You can always give us a call if you have a question and we did not
            include it here.
          </p>
        </div>
      </div>
      <div className="max-w-screen-xl sm:mx-auto">
        <div className="grid grid-cols-1 gap-16 row-gap-8 lg:grid-cols-2">
          <div className="space-y-8">
            <div>
              <p className="mb-4 text-xl font-medium">
                Can I book-in my bicycle?
              </p>
              <p className="text-gray-700">
                We work on a "first-come first-serve" basis. You bring in you
                bike and we book it in, then we work our way up the queue.
                <br />
                <br />
                The earlier you bring your bike the faster you receive your
                bike.
              </p>
            </div>
            <div>
              <p className="mb-4 text-xl font-medium">
                I brought in my bike, how long will it take?
              </p>
              <p className="text-gray-700">
                It depends on the work that needs to be done on the bike and in
                what season we're in. In busy seasons (Holidays and Decembers)
                our throughput is expected to be slower due to backlog.
                <br />
                <br />
                Generally speaking we can get your bike back to you in 2-3 work
                days. When we are in season this can take as long as a week
                (rarely the case). We always strive to get your bike back to you
                as fast as possible.
              </p>
            </div>
            <div>
              <p className="mb-4 text-xl font-medium">
                Do you guys do rentals, how does that work?
              </p>
              <p className="text-gray-700">
                Yes! We have about 7 rentals you can rent from us. We cater for
                the general public so please <u>do not expect</u> a high-end
                bike.
                <br />
                <br />
                When you rent a bike from us we will need your ID and a deposit.
                Our rates are based on a per-day basis and payments are done in
                cash only.
              </p>
            </div>
          </div>
          <div className="space-y-8">
            <div>
              <p className="mb-4 text-xl font-medium">
                Can I get a quote to fix my bike?
              </p>
              <p className="text-gray-700">
                Giving quotes are hard when there is a big queue. What we
                usaully do is ask you to bring in your bike. This gives us the
                opportunity to give you an <b>estimate</b> on the costs required
                to fix your bike based on your specific needs.
              </p>
            </div>
            <div>
              <p className="mb-4 text-xl font-medium">
                Can I bring my bike in for a quick service?
              </p>
              <p className="text-gray-700">
                It would be better if you bring in your bike to allow us to
                inspect it. Usually all the bike needs is some form of
                adjustment with a <b>Pro wash and lube.</b>
                <br />
                <br />
                If your bike needs a full service we'll tell you and adivse you
                on what to do next.
              </p>
            </div>
            <div>
              <p className="mb-4 text-xl font-medium">
                Do you guys buy second hand bikes?
              </p>
              <p className="text-gray-700">
                When you have a bike that you want to sell, you can bring the
                bike in. This allows us to see what the bike is worth. We put
                the bike on the floor for you and our trained sales team sells
                the bike on your behalf. The shop takes a commission only after
                the bike has been sold.
                <br />
                <br />
                The retail price of the bike is ultimatly based on what you end
                up deciding, we do give you advice on what the best price for
                the bike will be.
                <br />
                <br />
                <b>
                  All costs required to fix the bike must be covered by the
                  owner of the bike.
                </b>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FAQSection
