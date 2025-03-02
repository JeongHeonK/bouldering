"use client";

import Image from "next/image";
import { useAnimationHook } from "./useAnimationHook";

export default function WiseDonationCard() {
  const { animationClassName } = useAnimationHook(600);

  return (
    <div
      className={`bg-card-bg flex w-[287px] flex-shrink-0 flex-col items-center rounded-2xl px-5 py-9 transition duration-500 ${animationClassName}`}
    >
      <Image
        src="/assets/LogoWise.png"
        alt="wise-logo"
        width={80}
        height={18}
        className="mb-8 mt-4"
      />
      <p className="mb-5 text-center text-white">
        Mention “Seoul
        <br />
        Bouldering Club”
      </p>
      <button className="bg-green mb-10 rounded-full px-7 py-2.5 text-lg font-semibold">
        Donate on Wise
      </button>
      <Image src="/assets/wiseQr.png" alt="toss-qr" width={120} height={120} />
    </div>
  );
}
