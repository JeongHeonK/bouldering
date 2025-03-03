"use client";

import { useRef } from "react";
import Image from "next/image";
import { useAnimationHook } from "./useAnimationHook";

export default function VenmoDonationCard() {
  const cardRef = useRef<HTMLDivElement>(null);
  const { animationClassName } = useAnimationHook(800, cardRef);

  const handleClick = () => {
    window.open(
      "https://account.venmo.com/seoulboulderingclub",
      "_blank",
      "noopener,noreferrer",
    );
  };

  return (
    <div
      ref={cardRef}
      className={`bg-card-bg flex w-[287px] flex-shrink-0 flex-col items-center rounded-2xl px-5 py-9 transition duration-500 ${animationClassName}`}
    >
      <Image
        src="/assets/LogoVenmo.png"
        alt="venmo-logo"
        width={129}
        height={25}
        className="mb-8 mt-4"
      />
      <p className="mb-5 text-center text-white">
        Mention “Seoul
        <br />
        Bouldering Club”
      </p>
      <button
        onClick={handleClick}
        className="bg-green mb-10 rounded-full px-7 py-2.5 text-lg font-semibold"
      >
        Donate on Venmo
      </button>
      <Image src="/assets/venmoQr.png" alt="toss-qr" width={120} height={120} />
    </div>
  );
}
