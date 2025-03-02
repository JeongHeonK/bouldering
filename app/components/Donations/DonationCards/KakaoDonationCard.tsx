"use client";

import Image from "next/image";
import { useAnimationHook } from "./useAnimationHook";

export default function KakaoDonationCard() {
  const { animationClassName } = useAnimationHook(200);

  return (
    <div
      className={`ml-10 w-[280px] flex-shrink-0 rounded-2xl bg-white px-5 py-9 transition duration-500 ${animationClassName}`}
    >
      <h4 className="mb-5 text-2xl font-bold">Main Fund</h4>
      <Image
        src="/assets/LogoKaKao.png"
        alt="kakao"
        width={145}
        height={21}
        className="mb-6"
      />
      <p className="mb-5 text-[18px]">79420979774</p>
      <p className="text-secondary text-[16px]">
        This is the main fund, shared with all hosts. This fund will be used to
        purchase coffee or food for the hosts on event days.QR code below is for
        Toss, Wise, or Venmo App 👉
      </p>
    </div>
  );
}
