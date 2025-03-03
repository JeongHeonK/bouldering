"use client";

import Image from "next/image";
import { useState } from "react";
import { location } from "@/app/constants";
import LocationDropdownItems from "./LocationDropdownItems";
import { usePathname } from "next/navigation";

type Location = keyof typeof location;

export default function LocationDropdown() {
  const path = usePathname();
  const initialLocation = getLocation(path);
  const [location, setLocation] = useState<string>(initialLocation);
  const [isOpen, setIsOpen] = useState(false);

  const handleModalOpen = () => {
    setIsOpen((prev) => !prev);
  };

  const handleLocation = (location: Location) => {
    setLocation(location);
  };

  return (
    <div
      aria-roledescription="dropdown"
      className="relative flex flex-shrink-0 items-center gap-7"
    >
      <span>LOCATION</span>
      <button
        type="button"
        className="flex w-[207px] rounded-full bg-zinc-100 px-7 py-2.5 active:bg-zinc-300"
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

const getLocation = (path: string) => {
  const result = path.slice(1);

  if (result === "kl") return "KL";

  return result[0].toUpperCase().concat(result.slice(1));
};
