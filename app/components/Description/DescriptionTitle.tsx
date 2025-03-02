import Image from "next/image";

export default function DescriptionTitle() {
  return (
    <div className="mb-28 flex flex-col items-center gap-1">
      <div className="flex items-start gap-3">
        <Image
          className="align-top"
          src="/assets/quote-start.png"
          alt="quote-start"
          width={40}
          height={30}
        />
        <h3 className="text-5xl">Our events and communities are</h3>
      </div>
      <div className="flex items-start gap-3">
        <h3 className="text-5xl font-bold">completely free to join.</h3>
        <Image
          className="align-top"
          src="/assets/quote-end.png"
          alt="quote-end"
          width={40}
          height={30}
        />
      </div>
    </div>
  );
}
