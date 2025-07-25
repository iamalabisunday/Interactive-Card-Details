import BackCard from "./BackCard";
import FrontCard from "./FrontCard";

export default function DesktopCards({ cardData }) {
  return (
    <>
      {/* LEFT SIDE: Card Display */}
      <section className="hidden md:flex md:w-[30%] h-full absolute z-10 justify-center items-center flex-col gap-8">
        {/* Card Front Side */}
        <div className="ml-[95%]">
          <FrontCard
            name={cardData.name}
            number={cardData.number}
            month={cardData.month}
            year={cardData.year}
          />
        </div>
        {/* Card Back Side */}
        <div className="ml-[140%]">
          <BackCard cvc={cardData.cvc} />
        </div>
      </section>
    </>
  );
}
