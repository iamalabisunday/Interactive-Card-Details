import cardBackSide from "./images/bg-card-back.png";
import cardFrontSide from "./images/bg-card-front.png";
import logo from "./images/card-logo.svg";

export default function App() {
  return (
    <>
      {/* LEFT SIDE: Card Display */}
      <section className="md:w-[30%] h-full absolute z-10 flex justify-center items-center flex-col gap-8">
        {/* Card Front Side */}
        <div className="relative md:left-[35%] flex justify-center items-center">
          <article className="absolute w-[85%] h-[80%] m-auto flex flex-col justify-center items-start z-10 top-[10%] left-[8%]">
            <img src={logo} alt="logo" className="pb-16 " />
            <section className="w-full flex flex-col gap-3">
              <p className="text-white font-medium text-[1.75rem] flex justify-between w-full tracking-widest">
                <span>0000</span> <span>0000</span> <span>0000</span>{" "}
                <span>0000</span>
              </p>
              <div className="w-full flex justify-between text-white uppercase text-sm tracking-wider">
                <p>Jane Appleseed</p>
                <span>00/00</span>
              </div>
            </section>
          </article>
          <img
            src={cardFrontSide}
            alt="Card Front Side"
            className="relative object-contain max-w-[27.9em] min-w-[27.9em] max-h-[15.3em] min-h-[15.3em]"
          />
        </div>

        {/* Card Back Side */}
        <div className="relative flex justify-center items-center md:left-[60%]">
          <article className="absolute w-[80%] h-[80%] m-auto flex flex-col justify-center items-start z-10 top-[10%] left-[80%]">
            <p className="text-[#ffffff8a] text-[1rem] tracking-widest">000</p>
          </article>
          <img
            src={cardBackSide}
            alt="Card Back Side"
            className="object-contain max-w-[27.9em] min-w-[27.9em] max-h-[15.3em] min-h-[15.3em]"
          />
        </div>
      </section>

      {/* RIGHT SIDE: Background and Form */}
      <main className="w-screen h-screen">
        <section className="w-full h-full bg-contain bg-no-repeat md:bg-[url('./images/bg-main-desktop.png')] bg-[url('./images/bg-main-mobile.png')]"></section>
      </main>
    </>
  );
}
