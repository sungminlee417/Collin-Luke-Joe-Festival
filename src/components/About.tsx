const About = () => {
  return (
    <section>
      <div className="mx-auto max-w-screen-xl px-4 py-8 sm:py-12 sm:px-6 lg:py-16 lg:px-8">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
          <div className="lg:order-last lg:h-full flex items-center">
            <video
              controls
              className="object-contain aspect-video"
              src="https://off-the-dock.s3.amazonaws.com/Off+the+Dock+promo+video.mp4"
              autoPlay
              muted
              playsInline
            >
              Your browser does not support the video tag.
            </video>
          </div>

          <div className="lg:py-24">
            <h2 className="text-3xl font-bold sm:text-4xl text-gray-800">
              Mission Statement
            </h2>

            <p className="mt-4 text-gray-600">
              <strong>Off The Dock Chamber Festival</strong> aims to foster an
              invigorating concert-going experience by embracing the energy of
              up-and-coming artists. With the promise of providing a gateway to
              connect with an engaged classical music-loving community, OTD is
              an inspiring modern platform for emerging artists on the East
              Coast.
            </p>

            <a
              href="#"
              className="mt-8 inline-block rounded bg-[#579BB1] px-12 py-3 text-sm font-medium text-white transition hover:bg-[#4e8b9f] focus:outline-none active:bg-[#75AFC1]"
            >
              Donate Today
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
