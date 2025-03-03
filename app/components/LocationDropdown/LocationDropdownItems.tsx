"use client";

import { useState } from "react";
import Link from "next/link";
import { location } from "@/app/constants";

type Location = keyof typeof location;

interface LocationDropdownItemsProps {
  onClick: (location: Location) => void;
  onClose: () => void;
}

export default function LocationDropdownItems({
  onClick,
  onClose,
}: LocationDropdownItemsProps) {
  const locations = Object.values(location);
  const { dropdownAnimation } = useDropdownAnimation();

  const handleClick = (location: Location) => {
    onClose();
    onClick(location);
  };

  return (
    <ul
      aria-roledescription="dropdown-menu"
      className={`absolute right-0 top-16 z-10 flex flex-col gap-2 rounded-3xl bg-zinc-100 px-7 py-5 drop-shadow-md transition-all duration-300 ${dropdownAnimation}`}
    >
      {locations.map((location, idx) => (
        <li key={idx} className="w-[148px]">
          <Link
            href={`/${location.toLocaleLowerCase()}`}
            onClick={() => handleClick(location)}
            className="text-[22px]"
          >
            {location}
          </Link>
        </li>
      ))}
    </ul>
  );
}

const useDropdownAnimation = () => {
  const [dropdownAnimation, setDropdownAnimation] = useState(
    "overflow-hidden opacity-0 -translate-y-10",
  );

  useState(() => {
    setTimeout(() => setDropdownAnimation("opacity-100"));
  });

  return { dropdownAnimation };
};
