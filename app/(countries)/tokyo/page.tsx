"use client";

import Image from "next/image";
import Arrow from "@/public/icon/arrow.svg";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

export default function Page() {
  const handleClick = () => {
    window.open(
      "https://www.meetup.com/seoulboulderingclub/",
      "_blank",
      "noopener,noreferrer",
    );
  };

  return (
    <>
      <section className="bg-tokyo flex h-[568px] w-full flex-col items-center justify-center bg-cover bg-center bg-no-repeat lg:h-[940px]">
        <h2 className="mb-2 text-7xl font-semibold text-white">
          Tokyo Bouldering Club
        </h2>
        <p className="mb-12 text-4xl text-white">Every Saturday at 3pm</p>
        <button
          className="bg-green rounded-full px-7 py-2.5 text-lg font-bold"
          onClick={handleClick}
        >
          Join Bouldering Now
        </button>
      </section>
      <section className="flex w-full flex-col items-center justify-center bg-white py-32">
        <h2 className="text-center text-5xl">
          Want to learn more
          <br />
          <span className="font-semibold">about our group?</span>
        </h2>
        <p className="text-secondary my-10 text-3xl">
          Check out our Meetup app page below! 😊
        </p>
        <button
          className="bg-green rounded-full px-7 py-2.5 text-lg font-bold"
          onClick={handleClick}
        >
          <div className="flex flex-nowrap items-center gap-3">
            <p>Go To Meetup</p>
            <Arrow />
          </div>
        </button>
      </section>
      <section className="bg-lightGray pb-28 pt-20">
        <h2 className="text-center text-5xl font-semibold">Our Memories</h2>
        <p className="text-secondary my-4 pb-10 text-center text-3xl">
          Work out, play, and have a great time together!
        </p>
        <Swiper
          className="mySwiper"
          modules={[Autoplay]}
          spaceBetween={50}
          slidesPerView={3}
          loop
          speed={4000}
          autoplay={{
            delay: 0,
            disableOnInteraction: false,
          }}
        >
          <SwiperSlide>
            <Image
              src="/tokyo/Tokyo1.png"
              alt="Tokyo1"
              width={400}
              height={300}
              className="rounded-md"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              src="/tokyo/Tokyo2.png"
              alt="Tokyo2"
              width={400}
              height={300}
              className="rounded-md"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              src="/tokyo/Tokyo3.png"
              alt="Tokyo3"
              width={400}
              height={300}
              className="rounded-md"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              src="/tokyo/Tokyo4.png"
              alt="Tokyo4"
              width={400}
              height={300}
              className="rounded-md"
            />
          </SwiperSlide>
        </Swiper>
      </section>
    </>
  );
}
