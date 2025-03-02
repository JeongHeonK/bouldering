import { location } from "@/app/constants";
import Link from "next/link";

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

  const handleClick = (location: Location) => {
    onClose();
    onClick(location);
  };

  return (
    <div className="absolute right-0 top-16 flex flex-col gap-2 rounded-3xl bg-zinc-300/25 px-7 py-5 drop-shadow-md">
      {locations.map((location, idx) => (
        <Link
          href={`/${location.toLocaleLowerCase()}`}
          key={idx}
          onClick={() => handleClick(location)}
          className="w-[148px] text-[22px]"
        >
          {location}
        </Link>
      ))}
    </div>
  );
}
