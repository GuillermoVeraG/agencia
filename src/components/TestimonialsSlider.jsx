import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "@/components/TestimonialsSlider.css";

// import required modules
import { Pagination, Navigation } from "swiper/modules";

const CLIENTS = [
  {
    name: "Lead Game Developer",
    type: "Indie Studio",
    img: `/image/clients/client1.webp`,
    desc: "Audienze Labs transformed our game. Their insights into player behavior were spot on, helping us refine gameplay and boost engagement beyond our expectations.",
  },
  {
    name: "Marketing Director",
    type: "Major Game Publisher",
    img: `/image/clients/client2.webp`,
    desc: "Thanks to Audienze Labs, we now understand our audience on a whole new level. Their data-driven strategies directly contributed to our most successful launch yet.",
  },
  {
    name: "Creative Director",
    type: "AAA Game Studio",
    img: `/image/clients/client3.webp`,
    desc: "The team at Audienze Labs didn’t just deliver data—they provided actionable insights that reshaped our entire approach to game design. The results were phenomenal.",
  },
  {
    name: "Head of Marketing",
    type: "Global Gaming Company",
    img: `/image/clients/client4.webp`,
    desc: "Audienze Labs is a game-changer. Their expertise in neuromarketing gave us a deep understanding of our players, leading to campaigns that truly connected and converted.",
  },
];

// =======================================================
//                  Testimonials
const Testimonials = () => {
  return (
    <>
      <Swiper
        pagination={{
          clickable: true,
          el: ".swiper-pagination",
        }}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
        grabCursor={true}
        loop={true}
        modules={[Pagination, Navigation]}
        centeredSlides={true}
        slidesPerView={1}
        initialSlide={0}
      >
        {CLIENTS.map(({ type, name, img, desc }, index) => {
          return (
            <SwiperSlide key={index} className="w-full px-2 lg:pr-20 py-12">
              <div className="h-full relative flex flex-col lg:flex-row whitespace-normal justify-center items-start">
                <div className="flex flex-col sm:flex-row justify-around items-center gap-4 lg:gap-8  w-full h-72 md:pt-16 pb-11 px-7 lg:pl-10">
                  <img
                    src={img}
                    alt={name}
                    className="size-24 lg:size-36 rounded-full shadow-xl object-cover"
                  />
                  <p className="text-sm sm:max-w-[70%] sm:text-lg text-left text-pretty dark:text-white/70">
                    " {desc} "
                  </p>
                </div>
                <div className="w-full lg:max-w-[15%] min-h-20 lg:h-[288px] bg-transparent flex flex-col justify-center items-center gap-1 lg:gap-4">
                  <h4 className="font-bold dark:font-semibold text-xs md:text-sm leading-5 tracking-[8px] uppercase text-brand dark:text-white my-0">
                    {name}
                  </h4>
                  <h5 className="font-semibold dark:font-light text-[0.6rem] md:text-xs leading-5 tracking-[8px] uppercase dark:text-white/70 my-0">
                    {type}
                  </h5>
                </div>
              </div>
            </SwiperSlide>
          );
        })}
        <div className="swiper-pagination testimonials"></div>
        <div className="swiper-button-prev hidden sm:block w-fit h-[368px] lg:h-[288px] max-w-12 bg-brand-100/30 hover:bg-brand dark:bg-brand_purple-950 hover:dark:bg-brand-100/30 text-center top-auto left-auto right-[10%] cursor-pointer group/left">
          <div className="flex justify-center items-center h-full">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              className="size-8 stroke-2 stroke-brand group-hover/left:stroke-white dark:stroke-white rotate-180"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
              <path d="M9 6l6 6l-6 6"></path>
            </svg>
          </div>
        </div>
        <div className="swiper-button-next hidden sm:block w-fit h-[368px] lg:h-[288px] max-w-12 bg-brand-100/30 hover:bg-brand dark:bg-brand_purple-950 hover:dark:bg-brand-100/30 text-center top-auto left-auto right-0 cursor-pointer group/right">
          <div className="flex justify-center items-center h-full">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              className="size-8 stroke-2 stroke-brand group-hover/right:stroke-white dark:stroke-white"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
              <path d="M9 6l6 6l-6 6"></path>
            </svg>
          </div>
        </div>
      </Swiper>
    </>
  );
};

export default Testimonials;
