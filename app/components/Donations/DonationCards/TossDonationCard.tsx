"use client";

import Image from "next/image";
import { useAnimationHook } from "./useAnimationHook";

export default function TossDonationCard() {
  const { animationClassName } = useAnimationHook(400);

  return (
    <div
      className={`bg-card-bg flex w-[287px] flex-shrink-0 flex-col items-center rounded-2xl px-5 py-9 transition duration-500 ${animationClassName}`}
    >
      <Image
        src="/assets/LogoToss.png"
        alt="toss-logo"
        width={120}
        height={25}
        className="mb-5 mt-4"
      />
      <p className="mb-4 text-center text-white">
        Scan QR code
        <br />
        below
      </p>
      <button className="bg-green mb-10 rounded-full px-7 py-2.5 text-lg font-semibold">
        Donate on Toss
      </button>
      <Image src="/assets/tossQr.png" alt="toss-qr" width={120} height={120} />
    </div>
  );
}
