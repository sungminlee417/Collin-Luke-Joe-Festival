import { useState } from "react";
import classNames from "classnames";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper";

interface IndividualArtistProps {
  artist: {
    id: number;
    name: string;
    biography: JSX.Element | string;
    images?: string[];
  };
}

const IndividualArtist = ({ artist }: IndividualArtistProps) => {
  const [hasOverflow, setHasOverflow] = useState<boolean>(true);

  const onBiographyScroll = (event: React.UIEvent<HTMLDivElement>) => {
    const target = event.target as HTMLDivElement;
    if (target.scrollTop > 100) {
      setHasOverflow(false);
    } else {
      setHasOverflow(true);
    }
  };

  const onBiographyLoad = (event: React.UIEvent<HTMLDivElement>) => {
    const target = event.target as HTMLDivElement;
    if (target.scrollHeight > target.clientHeight) {
      setHasOverflow(true);
    } else {
      setHasOverflow(false);
    }
  };

  const downArrowClasses = classNames(
    "duration-200",
    "transition-opacity",
    "absolute",
    "bottom-4",
    "left-1/2",
    "transform",
    "-translate-x-1/2",
    {
      "opacity-0 pointer-events-none": !hasOverflow,
      "opacity-100 pointer-events-auto": hasOverflow,
    }
  );

  return (
    <div className="flex flex-col h-full divide-y">
      <h4 className="text-4xl p-8">
        <strong>{artist.name}</strong>
      </h4>
      <div className="flex grow overflow-hidden gap-10 rounded-bl-md">
        <Swiper
          cssMode={true}
          navigation={true}
          pagination={true}
          mousewheel={true}
          keyboard={true}
          modules={[Navigation, Pagination, Mousewheel, Keyboard]}
          className="mySwiper flex-1 justify-center"
        >
          {artist.images?.map((image) => {
            return (
              <SwiperSlide className="h-full">
                <img
                  src={image}
                  alt={artist.name}
                  className={`${
                    artist.id === 2 ? "object-top" : ""
                  } h-full object-cover w-full`}
                />
              </SwiperSlide>
            );
          })}
        </Swiper>
        <div className="flex-1 text-2xl p-8 overflow-hidden rounded-bl-md">
          <div className="relative h-full">
            <div
              className="overflow-scroll h-full flex flex-col gap-8"
              onLoad={onBiographyLoad}
              onScroll={onBiographyScroll}
            >
              {artist.biography}
            </div>
            <div className={downArrowClasses}>
              <i className="fa-solid fa-arrow-down shadow-md w-16 h-16 flex justify-center items-center text-3xl bg-white rounded-full animate-bounce"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IndividualArtist;
