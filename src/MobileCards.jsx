import BackCard from "./BackCard.jsx";
import FrontCard from "./FrontCard.jsx";

export default function MobileCards() {
  return (
    <>
      <section className="md:hidden absolute z-10 justify-center items-center flex-col gap-8">
        {/* Card Back Side */}
        <div className="relative left-17 top-[2rem] w-[88%]">
          <BackCard />
        </div>
        {/* Card Front Side */};
        <div className="relative left-4 bottom-[3.8em] w-[88%] z-20">
          <FrontCard />
        </div>
      </section>
    </>
  );
}
