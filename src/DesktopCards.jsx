import BackCard from "./BackCard";
import FrontCard from "./FrontCard";

export default function DesktopCards() {
  return (
    <>
      {/* LEFT SIDE: Card Display */}
      <section className="hidden md:flex md:w-[30%] h-full absolute z-10 justify-center items-center flex-col gap-8">
        {/* Card Front Side */};
        <div className="ml-[95%]">
          <FrontCard />
        </div>
        {/* Card Back Side */}
        <div className="ml-[140%]">
          <BackCard />
        </div>
      </section>
    </>
  );
}
