import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "@/components/TestimonialsSlider.css";

// import required modules
import { Pagination } from "swiper/modules";

const Services = ({ services }) => {
  return (
    <>
      <Swiper
        pagination={{
          clickable: true,
          el: ".swiper-pagination",
        }}
        grabCursor={true}
        loop={true}
        modules={[Pagination]}
        centeredSlides={true}
        slidesPerView={1}
        initialSlide={0}
        breakpoints={{
          slidesPerView: 1,
          spaceBetween: 5,
          centeredSlides: true,

          640: {
            slidesPerView: 2,
            spaceBetween: 5,
            centeredSlides: false,
          },
        }}
      >
        {services.map(({ data }, index) => {
          return (
            <SwiperSlide key={index} className="w-full px-8 py-12">
              <div className="max-w-sm my-0 mx-auto relative overflow-hidden rounded-2xl drop-shadow-md group/card hover:cursor-pointer">
                <div className="flex flex-col justify-between items-start h-[480px] bg-white dark:bg-brand-800/10 py-6 px-9 text-left">
                  <div className="flex flex-col justify-center items-start gap-4 text-left">
                    <h4 className="uppercase font-stretchpro text-2xl font-medium my-0 text-black dark:text-brand_cyan">
                      {data.title}
                    </h4>
                    <p className="text-base text-black dark:text-white">
                      {data.desc}
                    </p>
                  </div>
                  <div>
                    <p className="text-base text-black dark:text-white">
                      What we do
                    </p>
                    <ul>
                      {data.items.map((item, index) => (
                        <li
                          key={index}
                          className="text-base text-black dark:text-white font-medium dark:font-light capitalize flex flex-row"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            className="stroke-2 stroke-brand-500 dark:stroke-brand_cyan"
                          >
                            <path
                              stroke="none"
                              d="M0 0h24v24H0z"
                              fill="none"
                            ></path>
                            <path d="M9 6l6 6l-6 6"></path>
                          </svg>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="w-full">
                    <a
                      href={`/services/${data.slug}/`}
                      className="flex justify-center items-center capitalize border-solid border-2 border-brand-500 dark:border-brand_cyan px-8 py-2 text-brand-500 dark:text-brand_cyan text-xs font-semibold rounded-3xl hover:text-white hover:bg-brand-500 hover:dark:text-black hover:dark:bg-brand_cyan"
                    >
                      Learn More
                    </a>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          );
        })}
        <div className="swiper-pagination services"></div>
      </Swiper>
    </>
  );
};

export default Services;
