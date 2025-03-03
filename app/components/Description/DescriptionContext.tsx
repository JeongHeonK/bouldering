import Image from "next/image";

export default function DescriptionContext() {
  return (
    <div className="flex w-10/12 items-center justify-center md:gap-10 lg:gap-24">
      <div className="w-[574px]">
        <h4 className="mb-10 text-5xl font-bold">
          Buy coffee for a host,
          <br />
          every bit matters
        </h4>
        <p className="text-secondary text-lg">
          Our events and communities are completely free to join. If you’ve
          found value in our clubs, events, or connections, we’d be so grateful
          for your support! 🙌 Your donations help keep us climbing—covering
          overhead costs (such as platform fees), and supporting our amazing
          hosts who dedicate their time and effort to creating fun and
          well-structured events for you. Every little bit helps us keep this
          community going strong. Thank you for being part of our journey! 💛
        </p>
      </div>
      <div className="flex-shrink-0">
        <Image src="/assets/illust.png" alt="illust" width={304} height={462} />
      </div>
    </div>
  );
}
