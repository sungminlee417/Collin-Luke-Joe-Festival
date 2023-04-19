import { lineup } from "../artistData";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Autoplay, Navigation } from "swiper";
import { NavLink } from "react-router-dom";

const Artists = () => {
  const lineupArr = Object.values(lineup);

  return (
    <section className="performances-section mx-2 md:mx-4 lg:mx-6 md:my-24 my-20 h-224 p-14 flex flex-col gap-14">
      <h3 className="text-5xl font-bold">Season Line Up</h3>
      <Swiper
        spaceBetween={20}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        navigation={true}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 50,
          },
        }}
        modules={[Autoplay, Navigation]}
        className="mySwiper h-full w-full"
      >
        {lineupArr.map((artist) => {
          return (
            <SwiperSlide key={artist.id}>
              <NavLink to={`/artists/${artist.id}`}>
                <div className="h-full w-full bg-black rounded-md relative">
                  <img
                    src={artist.images[0]}
                    className="h-full w-full object-cover rounded-md hover:opacity-60 transition peer"
                    alt={artist.name}
                  />
                  <div className="absolute lg:text-5xl text-3xl top-1/2 left-1/2 -translate-x-1/2 w-96 text-center text-white peer-hover:-translate-y-1/2 peer-hover:opacity-100 translate-y-20 transition opacity-0 duration-300 pointer-events-none">
                    {artist.name}
                  </div>
                </div>
              </NavLink>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default Artists;
