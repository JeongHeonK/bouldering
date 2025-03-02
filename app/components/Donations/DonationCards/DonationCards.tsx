import KakaoDonationCard from "./KakaoDonationCard";
import TossDonationCard from "./TossDonationCard";
import VenmoDonationCard from "./VenmoDonationCard";
import WiseDonationCard from "./WiseDonationCard";

export default function DonationCards() {
  return (
    <div className="scrollbar-hide mx-auto mb-4 mt-12 flex w-screen justify-stretch gap-8 overflow-x-scroll pr-1">
      <KakaoDonationCard />
      <TossDonationCard />
      <WiseDonationCard />
      <VenmoDonationCard />
    </div>
  );
}
