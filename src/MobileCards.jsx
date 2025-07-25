import BackCard from "./BackCard";
import FrontCard from "./FrontCard";

export default function MobileCards({ cardData }) {
  return (
    <>
      <section className="md:hidden absolute z-10 top-6 justify-center items-center flex-col gap-8">
        {/* Card Back Side */}
        <div className="relative left-17 top-[2rem] w-[88%]">
          <BackCard cvc={cardData.cvc} />
        </div>
        {/* Card Front Side */}
        <div className="relative left-4 bottom-[3.8em] w-[88%] z-20">
          <FrontCard
            name={cardData.name}
            number={cardData.number}
            month={cardData.month}
            year={cardData.year}
          />
        </div>
      </section>
    </>
  );
}
