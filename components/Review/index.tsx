import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper";
import { useEffect, useState } from "react";

export default function Review() {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    setIsMobile(window.innerWidth < 700);
  });
  return (
    <section className="mx-auto max-w-screen-2xl py-10 px-6 md:px-0">
      <h2 className="text-3xl text-primary text-center my-2">TESTOMONIALS</h2>
      <main>
        <Swiper
          pagination={{
            dynamicBullets: true,
            // clickable: true,
          }}
          modules={[Autoplay, Pagination]}
          spaceBetween={50}
          slidesPerView={isMobile ? 1 : 3}
          loop={true}
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
          }}
        >
          <SwiperSlide>
            <div className="max-w-xl flex flex-col items-center select-none my-14 gap-4">
              <img
                src="/review/reviewer1.png"
                className="aspect-square w-64 rounded-full object-center"
                alt=""
              />
              <div className="flex">
                <svg
                  width="28"
                  height="27"
                  viewBox="0 0 28 27"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M14 1.5L17.8625 9.325L26.5 10.5875L20.25 16.675L21.725 25.275L14 21.2125L6.275 25.275L7.75 16.675L1.5 10.5875L10.1375 9.325L14 1.5Z"
                    fill="black"
                    stroke="black"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
                <svg
                  width="28"
                  height="27"
                  viewBox="0 0 28 27"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M14 1.5L17.8625 9.325L26.5 10.5875L20.25 16.675L21.725 25.275L14 21.2125L6.275 25.275L7.75 16.675L1.5 10.5875L10.1375 9.325L14 1.5Z"
                    fill="black"
                    stroke="black"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
                <svg
                  width="28"
                  height="27"
                  viewBox="0 0 28 27"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M14 1.5L17.8625 9.325L26.5 10.5875L20.25 16.675L21.725 25.275L14 21.2125L6.275 25.275L7.75 16.675L1.5 10.5875L10.1375 9.325L14 1.5Z"
                    fill="black"
                    stroke="black"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
                <svg
                  width="28"
                  height="27"
                  viewBox="0 0 28 27"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M14 1.5L17.8625 9.325L26.5 10.5875L20.25 16.675L21.725 25.275L14 21.2125L6.275 25.275L7.75 16.675L1.5 10.5875L10.1375 9.325L14 1.5Z"
                    fill="black"
                    stroke="black"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
                <svg
                  width="28"
                  height="27"
                  viewBox="0 0 28 27"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M14 1.5L17.8625 9.325L26.5 10.5875L20.25 16.675L21.725 25.275L14 21.2125L6.275 25.275L7.75 16.675L1.5 10.5875L10.1375 9.325L14 1.5Z"
                    fill="black"
                    stroke="black"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </div>
              <p className="text-center max-w-sm">
                “Fully satisfied with the service..appreciated!! Highly
                recommended place for one looking for garden designing and
                indoor plants, flowers...”
              </p>
              <div className="text-primary font-bold text-xl">
                - Romish Dhimal
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="max-w-xl flex flex-col items-center select-none my-14 gap-4">
              <img
                src="/review/reviewer1.png"
                className="aspect-square w-64 rounded-full object-center"
                alt=""
              />
              <div className="flex">
                <svg
                  width="28"
                  height="27"
                  viewBox="0 0 28 27"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M14 1.5L17.8625 9.325L26.5 10.5875L20.25 16.675L21.725 25.275L14 21.2125L6.275 25.275L7.75 16.675L1.5 10.5875L10.1375 9.325L14 1.5Z"
                    fill="black"
                    stroke="black"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
                <svg
                  width="28"
                  height="27"
                  viewBox="0 0 28 27"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M14 1.5L17.8625 9.325L26.5 10.5875L20.25 16.675L21.725 25.275L14 21.2125L6.275 25.275L7.75 16.675L1.5 10.5875L10.1375 9.325L14 1.5Z"
                    fill="black"
                    stroke="black"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
                <svg
                  width="28"
                  height="27"
                  viewBox="0 0 28 27"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M14 1.5L17.8625 9.325L26.5 10.5875L20.25 16.675L21.725 25.275L14 21.2125L6.275 25.275L7.75 16.675L1.5 10.5875L10.1375 9.325L14 1.5Z"
                    fill="black"
                    stroke="black"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
                <svg
                  width="28"
                  height="27"
                  viewBox="0 0 28 27"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M14 1.5L17.8625 9.325L26.5 10.5875L20.25 16.675L21.725 25.275L14 21.2125L6.275 25.275L7.75 16.675L1.5 10.5875L10.1375 9.325L14 1.5Z"
                    fill="black"
                    stroke="black"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
                <svg
                  width="28"
                  height="27"
                  viewBox="0 0 28 27"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M14 1.5L17.8625 9.325L26.5 10.5875L20.25 16.675L21.725 25.275L14 21.2125L6.275 25.275L7.75 16.675L1.5 10.5875L10.1375 9.325L14 1.5Z"
                    fill="black"
                    stroke="black"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </div>
              <p className="text-center max-w-sm">
                “Fully satisfied with the service..appreciated!! Highly
                recommended place for one looking for garden designing and
                indoor plants, flowers...”
              </p>
              <div className="text-primary font-bold text-xl">
                - Romish Dhimal
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="max-w-xl flex flex-col items-center select-none my-14 gap-4">
              <img
                src="/review/reviewer1.png"
                className="aspect-square w-64 rounded-full object-center"
                alt=""
              />
              <div className="flex">
                <svg
                  width="28"
                  height="27"
                  viewBox="0 0 28 27"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M14 1.5L17.8625 9.325L26.5 10.5875L20.25 16.675L21.725 25.275L14 21.2125L6.275 25.275L7.75 16.675L1.5 10.5875L10.1375 9.325L14 1.5Z"
                    fill="black"
                    stroke="black"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
                <svg
                  width="28"
                  height="27"
                  viewBox="0 0 28 27"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M14 1.5L17.8625 9.325L26.5 10.5875L20.25 16.675L21.725 25.275L14 21.2125L6.275 25.275L7.75 16.675L1.5 10.5875L10.1375 9.325L14 1.5Z"
                    fill="black"
                    stroke="black"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
                <svg
                  width="28"
                  height="27"
                  viewBox="0 0 28 27"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M14 1.5L17.8625 9.325L26.5 10.5875L20.25 16.675L21.725 25.275L14 21.2125L6.275 25.275L7.75 16.675L1.5 10.5875L10.1375 9.325L14 1.5Z"
                    fill="black"
                    stroke="black"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
                <svg
                  width="28"
                  height="27"
                  viewBox="0 0 28 27"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M14 1.5L17.8625 9.325L26.5 10.5875L20.25 16.675L21.725 25.275L14 21.2125L6.275 25.275L7.75 16.675L1.5 10.5875L10.1375 9.325L14 1.5Z"
                    fill="black"
                    stroke="black"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
                <svg
                  width="28"
                  height="27"
                  viewBox="0 0 28 27"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M14 1.5L17.8625 9.325L26.5 10.5875L20.25 16.675L21.725 25.275L14 21.2125L6.275 25.275L7.75 16.675L1.5 10.5875L10.1375 9.325L14 1.5Z"
                    fill="black"
                    stroke="black"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </div>
              <p className="text-center max-w-sm">
                “Fully satisfied with the service..appreciated!! Highly
                recommended place for one looking for garden designing and
                indoor plants, flowers...”
              </p>
              <div className="text-primary font-bold text-xl">
                - Romish Dhimal
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="max-w-xl flex flex-col items-center select-none my-14 gap-4">
              <img
                src="/review/reviewer1.png"
                className="aspect-square w-64 rounded-full object-center"
                alt=""
              />
              <div className="flex">
                <svg
                  width="28"
                  height="27"
                  viewBox="0 0 28 27"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M14 1.5L17.8625 9.325L26.5 10.5875L20.25 16.675L21.725 25.275L14 21.2125L6.275 25.275L7.75 16.675L1.5 10.5875L10.1375 9.325L14 1.5Z"
                    fill="black"
                    stroke="black"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
                <svg
                  width="28"
                  height="27"
                  viewBox="0 0 28 27"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M14 1.5L17.8625 9.325L26.5 10.5875L20.25 16.675L21.725 25.275L14 21.2125L6.275 25.275L7.75 16.675L1.5 10.5875L10.1375 9.325L14 1.5Z"
                    fill="black"
                    stroke="black"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
                <svg
                  width="28"
                  height="27"
                  viewBox="0 0 28 27"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M14 1.5L17.8625 9.325L26.5 10.5875L20.25 16.675L21.725 25.275L14 21.2125L6.275 25.275L7.75 16.675L1.5 10.5875L10.1375 9.325L14 1.5Z"
                    fill="black"
                    stroke="black"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
                <svg
                  width="28"
                  height="27"
                  viewBox="0 0 28 27"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M14 1.5L17.8625 9.325L26.5 10.5875L20.25 16.675L21.725 25.275L14 21.2125L6.275 25.275L7.75 16.675L1.5 10.5875L10.1375 9.325L14 1.5Z"
                    fill="black"
                    stroke="black"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
                <svg
                  width="28"
                  height="27"
                  viewBox="0 0 28 27"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M14 1.5L17.8625 9.325L26.5 10.5875L20.25 16.675L21.725 25.275L14 21.2125L6.275 25.275L7.75 16.675L1.5 10.5875L10.1375 9.325L14 1.5Z"
                    fill="black"
                    stroke="black"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </div>
              <p className="text-center max-w-sm">
                “Fully satisfied with the service..appreciated!! Highly
                recommended place for one looking for garden designing and
                indoor plants, flowers...”
              </p>
              <div className="text-primary font-bold text-xl">
                - Romish Dhimal
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="max-w-xl flex flex-col items-center select-none my-14 gap-4">
              <img
                src="/review/reviewer1.png"
                className="aspect-square w-64 rounded-full object-center"
                alt=""
              />
              <div className="flex">
                <svg
                  width="28"
                  height="27"
                  viewBox="0 0 28 27"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M14 1.5L17.8625 9.325L26.5 10.5875L20.25 16.675L21.725 25.275L14 21.2125L6.275 25.275L7.75 16.675L1.5 10.5875L10.1375 9.325L14 1.5Z"
                    fill="black"
                    stroke="black"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
                <svg
                  width="28"
                  height="27"
                  viewBox="0 0 28 27"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M14 1.5L17.8625 9.325L26.5 10.5875L20.25 16.675L21.725 25.275L14 21.2125L6.275 25.275L7.75 16.675L1.5 10.5875L10.1375 9.325L14 1.5Z"
                    fill="black"
                    stroke="black"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
                <svg
                  width="28"
                  height="27"
                  viewBox="0 0 28 27"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M14 1.5L17.8625 9.325L26.5 10.5875L20.25 16.675L21.725 25.275L14 21.2125L6.275 25.275L7.75 16.675L1.5 10.5875L10.1375 9.325L14 1.5Z"
                    fill="black"
                    stroke="black"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
                <svg
                  width="28"
                  height="27"
                  viewBox="0 0 28 27"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M14 1.5L17.8625 9.325L26.5 10.5875L20.25 16.675L21.725 25.275L14 21.2125L6.275 25.275L7.75 16.675L1.5 10.5875L10.1375 9.325L14 1.5Z"
                    fill="black"
                    stroke="black"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
                <svg
                  width="28"
                  height="27"
                  viewBox="0 0 28 27"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M14 1.5L17.8625 9.325L26.5 10.5875L20.25 16.675L21.725 25.275L14 21.2125L6.275 25.275L7.75 16.675L1.5 10.5875L10.1375 9.325L14 1.5Z"
                    fill="black"
                    stroke="black"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </div>
              <p className="text-center max-w-sm">
                “Fully satisfied with the service..appreciated!! Highly
                recommended place for one looking for garden designing and
                indoor plants, flowers...”
              </p>
              <div className="text-primary font-bold text-xl">
                - Romish Dhimal
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </main>
    </section>
  );
}
