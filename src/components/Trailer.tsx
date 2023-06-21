const Trailer = () => {
  // function scrollTo(): void {
  //   const element = document.querySelector(".concert-calendar-section")!;
  //   const offset = document.querySelector(".navigation")?.clientHeight || 0;
  //   const topOffset =
  //     element.getBoundingClientRect().top + window.pageYOffset - offset;
  //   window.scrollTo({ behavior: "smooth", top: topOffset });
  // }

  return (
    <section>
      <div className="mx-auto max-w-screen-xl px-12 py-8 sm:py-12 sm:px-14 lg:py-16 lg:px-8 mt-20">
        <div className="flex flex-col gap-10 lg:gap-16">
          <div className="relative h-auto overflow-hidden rounded-lg lg:h-full flex justify-center items-center">
            <video
              controls
              className="h-auto w-full object-cover aspect-video"
              src="https://off-the-dock.s3.amazonaws.com/Off+the+Dock+promo+video.mp4"
              autoPlay
              muted
              playsInline
            >
              Your browser does not support the video tag.
            </video>
          </div>

          {/* <div className="lg:py-24 flex flex-col gap-4"> */}
          {/* <p className="mt-4 text-gray-600 text-2xl">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aut qui
              hic atque tenetur quis eius quos ea neque sunt, accusantium soluta
              minus veniam tempora deserunt? Molestiae eius quidem quam
              repellat.
            </p> */}

          {/* <div className="flex flex-col gap-6 md:flex-row justify-center">
              <button
                onClick={scrollTo}
                className="inline-block rounded-md px-8 py-4 w-fit text-3xl font-medium text-white transition focus:outline-none focus:ring focus:ring-yellow-400 bg-[#579BB1] hover:bg-[#4e8b9f]"
              >
                Purchase Tickets
              </button>
              <a
                href="https://www.gofundme.com/f/support-a-festival-for-emerging-classical-artists?member=26590045&utm_campaign=p_cp+share-sheet&utm_content=undefined&utm_medium=copy_link_all&utm_source=customer&utm_term=undefined"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block rounded-md px-8 py-4 w-fit text-3xl font-medium text-black transition focus:outline-none focus:ring focus:ring-yellow-400 hover:border-[#579BB1] border bg-white"
              >
                Support the Festival
              </a>
            </div> */}
          {/* </div> */}
        </div>
      </div>
    </section>
  );
};

export default Trailer;
