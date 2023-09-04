const Trailer = () => {
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
        </div>
      </div>
    </section>
  );
};

export default Trailer;
