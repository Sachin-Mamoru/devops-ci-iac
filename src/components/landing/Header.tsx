const Header = () => {
  return (
    <div className="flex flex-col items-center justify-center px-4 pt-16 mx-auto sm:max-w-xl md:max-w-full lg:pt-32 md:px-0">
      <div className="flex flex-col items-center max-w-2xl md:px-8">
        <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
          <div>
            <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-teal-accent-400">
              We're in beta
            </p>
          </div>
          <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
            <span className="relative inline-block">
              <svg
                viewBox="0 0 52 24"
                fill="currentColor"
                className="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-blue-gray-100 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block"
              >
                <defs>
                  <pattern
                    id="192913ce-1f29-4abd-b545-0fbccfd2b0ec"
                    x="0"
                    y="0"
                    width=".135"
                    height=".30"
                  >
                    <circle cx="1" cy="1" r=".7" />
                  </pattern>
                </defs>
                <rect
                  fill="url(#192913ce-1f29-4abd-b545-0fbccfd2b0ec)"
                  width="52"
                  height="24"
                />
              </svg>
              <span className="relative">Skyward Solutions: </span>
            </span>{" "}
            Elevate Your Business to the Cloud
          </h2>
          <p className="text-base text-gray-700 md:text-lg">
            Transform your business with Skyward Solutions – your partner in
            seamless cloud integration. Experience efficiency, security, and
            unparalleled accessibility. Elevate to the cloud effortlessly
          </p>
        </div>
        <div className="flex">
          <button
            type="submit"
            className="mb-4 inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md md:w-auto bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
          >
            Get started
          </button>
        </div>
  
      </div>
      <img
        src="https://kitwind.io/assets/kometa/half-browser.png"
        className="w-full max-w-screen-sm mx-auto rounded shadow-2xl md:w-auto lg:max-w-screen-md"
        alt=""
      />
    </div>
  );
};

export default Header;
