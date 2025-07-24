import cardFrontSide from "./images/bg-card-front.png";
import logo from "./images/card-logo.svg";

export default function FrontCard() {
  return (
    <div className="relative w-[88%] md:w-[27.9rem]">
      {/* Card Image */}
      <img
        src={cardFrontSide}
        alt="Card Front Side"
        className="w-full h-auto object-contain"
      />

      {/* Overlay Content */}
      <article className="absolute inset-0 flex flex-col justify-between px-4 py-5 z-10">
        <img src={logo} alt="logo" className="w-13 md:w-24 pb-2 md:pb-6" />

        <section className="flex flex-col md:gap-6 gap-3">
          <p className="text-[var(--color-White)] font-medium md:text-3xl text-[1.3rem] flex justify-between tracking-widest">
            <span>0000</span> <span>0000</span> <span>0000</span>{" "}
            <span>0000</span>
          </p>
          <div className="flex justify-between text-[var(--color-White)] uppercase text-xs md:text-sm tracking-wider">
            <p>Jane Appleseed</p>
            <span>00/00</span>
          </div>
        </section>
      </article>
    </div>
  );
}
