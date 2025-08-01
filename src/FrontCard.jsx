import cardFrontSide from "./images/bg-card-front.png";
import logo from "./images/card-logo.svg";

export default function FrontCard({ name, number, month, year }) {
  // Format card number with spaces every 4 digits
  const formatCardNumber = (num) => {
    if (!num) return "0000 0000 0000 0000";
    const cleaned = num.replace(/\s/g, "");
    const formatted = cleaned.replace(/(.{4})/g, "$1 ").trim();
    const padded = formatted.padEnd(19, "0").substring(0, 19);
    return padded.replace(/0/g, (match, offset) => {
      return offset >= cleaned.length ? "0" : match;
    });
  };

  return (
    <div className="relative w-[88%] md:w-[27.9rem]">
      {/* Card Image */}
      <img
        src={cardFrontSide}
        alt="Card Front Side"
        className="w-full h-auto object-contain"
      />

      {/* Overlay Content */}
      <article className="absolute inset-0 flex flex-col justify-between px-3 py-3 z-10 ">
        <img src={logo} alt="logo" className="w-13 md:w-24 pb-2 md:pb-6" />

        <section className="flex flex-col md:gap-6 gap-1">
          <p className="text-[var(--color-White)] font-medium md:text-3xl mt-4 text-[0.9rem] flex justify-between tracking-widest whitespace-nowrap">
            <span>{formatCardNumber(number)}</span>
          </p>
          <div className="flex justify-between text-[var(--color-White)] mt-1 uppercase text-xs md:text-sm tracking-wider text-[0.6rem] ">
            <p>{name || "Jane Appleseed"}</p>
            <span className="text-[var(--color-Gray-200)] text-[0.6rem]">
              {month || "00"}/{year || "00"}
            </span>
          </div>
        </section>
      </article>
    </div>
  );
}
