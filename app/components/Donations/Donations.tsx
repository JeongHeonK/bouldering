import DonationCards from "./DonationCards";
import DonationIllust from "./DonationIllust";

export default function Donations() {
  return (
    <section className="z-0 flex w-full flex-col items-center bg-black">
      <h3 className="mt-16 text-5xl font-semibold text-white">
        Donation Channels
      </h3>
      <p className="text-secondary mt-1 text-xl">
        All donations made here will be transferred to the main fund.
      </p>
      <DonationCards />
      <DonationIllust />
    </section>
  );
}
