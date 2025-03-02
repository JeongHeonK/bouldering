import DescriptionTitle from "./DescriptionTitle";
import DescriptionContext from "./DescriptionContext";

export default function Description() {
  return (
    <section className="flex flex-col items-center bg-white pb-24 pt-16">
      <DescriptionTitle />
      <DescriptionContext />
    </section>
  );
}
