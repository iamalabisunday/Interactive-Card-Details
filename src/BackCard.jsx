import cardBackSide from "./images/bg-card-back.png";

export default function BackCard({ cvc }) {
  return (
    <div className="relative w-[88%] md:w-[27.9rem]">
      {/* Card Image */}
      <img
        src={cardBackSide}
        alt="Card Back Side"
        className="w-full h-auto object-contain"
      />

      {/* CVC Number Overlay */}
      <div className="absolute md:top-[45%] top-[43%] right-[12%] z-10">
        <p className="text-[var(--color-Gray-200)] text-sm md:text-base">
          {" "}
          {cvc || "000"}
        </p>
      </div>
    </div>
  );
}
