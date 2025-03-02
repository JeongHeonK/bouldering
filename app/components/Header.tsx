import Image from "next/image";
import LocationDropdown from "./LocationDropdown";

export default function Header() {
  return (
    <header className="m-0 h-[130px]">
      <div className="fixed inset-x-10 top-3 z-10 flex items-center rounded-full bg-white/30 px-4 py-3 backdrop-blur-sm">
        <Image
          src="/assets/logo-with-text.png"
          width={308}
          height={53}
          alt="bouldering club"
        />
        <div className="flex-1" />
        <LocationDropdown />
        <button
          type="button"
          className="bg-green ml-8 rounded-full px-7 py-2.5 font-bold"
        >
          Donate
        </button>
      </div>
    </header>
  );
}
