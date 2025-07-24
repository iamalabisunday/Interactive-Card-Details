import DesktopCards from "./DesktopCards.jsx";
import MobileCards from "./MobileCards.jsx";

export default function InteractiveCards() {
  return (
    <>
      {/* Desktop: Card Display */}
      <DesktopCards />
      {/* Mobile: Card Display */}
      <MobileCards />
      {/* Background and Form */}
      <main className="w-full h-screen">
        <section className="w-full h-full bg-contain md:bg-contain bg-no-repeat md:bg-[url('./images/bg-main-desktop.png')] bg-[url('./images/bg-main-mobile.png')]"></section>
      </main>
    </>
  );
}
