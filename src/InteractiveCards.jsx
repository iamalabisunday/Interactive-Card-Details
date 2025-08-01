"use client";

import { useState } from "react";
import DesktopCards from "./DesktopCards";
import MobileCards from "./MobileCards";
import FormCard from "./FormCard";

export default function InteractiveCards() {
  const [cardData, setCardData] = useState({
    name: "",
    number: "",
    month: "",
    year: "",
    cvc: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleFormSubmit = (data) => {
    setCardData(data);
    setIsSubmitted(true);
  };

  const handleContinue = () => {
    setIsSubmitted(false);
    setCardData({
      name: "",
      number: "",
      month: "",
      year: "",
      cvc: "",
    });
  };

  return (
    <>
      {/* Desktop: Card Display */}
      <DesktopCards cardData={cardData} />
      {/* Mobile: Card Display */}
      <MobileCards cardData={cardData} />
      {/* Background and Form */}
      <main className="w-full h-screen m-auto flex flex-col md:flex-row justify-center items-cente">
        <section className="md:w-[50%] md:h-screen h-[35%] flex bg-cover md:bg-contain bg-no-repeat md:bg-[url('./images/bg-main-desktop.png')] bg-[url('./images/bg-main-mobile.png')] w-[375px] b-[14]"></section>
        <section className="w-[90%] m-auto md:w-[70%] flex">
          {/* Form Card Section */}
          <FormCard
            cardData={cardData}
            setCardData={setCardData}
            onSubmit={handleFormSubmit}
            isSubmitted={isSubmitted}
            onContinue={handleContinue}
          />
        </section>
      </main>
    </>
  );
}
