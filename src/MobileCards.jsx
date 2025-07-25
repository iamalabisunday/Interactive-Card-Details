import BackCard from "./BackCard";
import FrontCard from "./FrontCard";

export default function MobileCards({ cardData }) {
  return (
    <>
      <section className="md:hidden absolute z-10 top-0 flex justify-center items-center flex-col">
        {/* Card Back Side */}

        <div className="relative left-14 top-[3rem] w-[75%]">
          <BackCard cvc={cardData.cvc} />
        </div>
        {/* Card Front Side */}
        <div className="relative right-7 top-0 w-[75%] z-20">
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
