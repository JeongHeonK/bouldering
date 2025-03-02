"use client";

import Image from "next/image";
import { useState } from "react";
import { location } from "@/app/constants";
import LocationDropdownItems from "./LocationDropdownItems";

type Location = keyof typeof location;

export default function LocationDropdown() {
  const [location, setLocation] = useState<Location>("Seoul");
  const [isOpen, setIsOpen] = useState(false);

  const handleModalOpen = () => {
    setIsOpen((prev) => !prev);
  };

  const handleLocation = (location: Location) => {
    setLocation(location);
  };

  return (
    <div className="relative flex flex-shrink-0 items-center gap-7">
      <span>LOCATION</span>
      <button
        type="button"
        className="flex w-[207px] rounded-full bg-zinc-100 px-7 py-2.5"
        onClick={handleModalOpen}
      >
        <span className="text-[22px]">{location}</span>
        <span className="flex-1" />
        <Image src="/assets/down.png" alt="down" width={28} height={8} />
      </button>
      {isOpen && (
        <LocationDropdownItems
          onClick={handleLocation}
          onClose={handleModalOpen}
        />
      )}
    </div>
  );
}
