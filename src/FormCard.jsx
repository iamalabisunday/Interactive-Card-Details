"use client";

import { useState } from "react";
import SuccessCard from "./SuccessCard";

export default function FormCard({
  cardData,
  setCardData,
  onSubmit,
  isSubmitted,
  onContinue,
}) {
  // Error state variables
  const [nameError, setNameError] = useState("");
  const [numberError, setNumberError] = useState("");
  const [monthError, setMonthError] = useState("");
  const [yearError, setYearError] = useState("");
  const [cvcError, setCvcError] = useState("");

  // Regex patterns
  const nameRegex = /^[A-Za-z\s]+$/;
  const numberRegex = /^\d+$/;

  // Format card number with spaces
  const formatCardNumber = (value) => {
    const v = value.replace(/\s+/g, "").replace(/[^0-9]/gi, "");
    const matches = v.match(/\d{4,16}/g);
    const match = (matches && matches[0]) || "";
    const parts = [];
    for (let i = 0, len = match.length; i < len; i += 4) {
      parts.push(match.substring(i, i + 4));
    }
    if (parts.length) {
      return parts.join(" ");
    } else {
      return v;
    }
  };

  // Handle input changes with real-time updates
  const handleInputChange = (field, value) => {
    let formattedValue = value;

    if (field === "number") {
      formattedValue = formatCardNumber(value);
    } else if (field === "month") {
      formattedValue = value.replace(/[^0-9]/g, "").slice(0, 2);
    } else if (field === "year") {
      formattedValue = value.replace(/[^0-9]/g, "").slice(0, 2);
    } else if (field === "cvc") {
      formattedValue = value.replace(/[^0-9]/g, "").slice(0, 3);
    } else if (field === "name") {
      formattedValue = value.replace(/[^a-zA-Z\s]/g, "");
    }

    setCardData({
      ...cardData,
      [field]: formattedValue,
    });

    // Clear errors when user starts typing
    if (field === "name") setNameError("");
    if (field === "number") setNumberError("");
    if (field === "month") setMonthError("");
    if (field === "year") setYearError("");
    if (field === "cvc") setCvcError("");
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Reset all errors
    setNameError("");
    setNumberError("");
    setMonthError("");
    setYearError("");
    setCvcError("");

    let isValid = true;

    // Validate name field
    if (!cardData.name) {
      setNameError("Can't be blank");
      isValid = false;
    } else if (!nameRegex.test(cardData.name)) {
      setNameError("Wrong format, text only");
      isValid = false;
    }

    // Validate number field
    if (!cardData.number) {
      setNumberError("Can't be blank");
      isValid = false;
    } else if (!numberRegex.test(cardData.number.replace(/\s+/g, ""))) {
      setNumberError("Wrong format, numbers only");
      isValid = false;
    }

    // Validate month fields
    if (!cardData.month) {
      setMonthError("Can't be blank");
      isValid = false;
    } else if (!numberRegex.test(cardData.month)) {
      setMonthError("Numbers only");
      isValid = false;
    }

    // Validate year field
    if (!cardData.year) {
      setYearError("Can't be blank");
      isValid = false;
    } else if (!numberRegex.test(cardData.year)) {
      setYearError("Numbers only");
      isValid = false;
    }

    // Validate CVC field
    if (!cardData.cvc) {
      setCvcError("Can't be blank");
      isValid = false;
    } else if (!numberRegex.test(cardData.cvc)) {
      setCvcError("Numbers only");
      isValid = false;
    }

    // If all fields are valid, submit the form
    if (isValid) {
      onSubmit(cardData);
    }
  };

  // Show success card if submitted
  if (isSubmitted) {
    return <SuccessCard onContinue={onContinue} />;
  }

  // Render the form
  return (
    <main className="md:max-w-[38%] mx-auto">
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        {/* Name */}
        <div className="flex flex-col gap-1">
          <label
            htmlFor="name"
            className="text-[var(--color-Purple-950)] uppercase text-sm"
          >
            Cardholder Name
          </label>
          <input
            type="text"
            inputMode="text"
            id="name"
            value={cardData.name}
            onChange={(e) => handleInputChange("name", e.target.value)}
            placeholder="e.g. Jane Appleseed"
            className={`w-full p-2 rounded-md placeholder:text-[var(--color-Gray-200)] focus:outline-none ${
              nameError
                ? "border-1 border-[var(--color-Red-400-input-errors)]"
                : "border border-[var(--color-Gray-200)]"
            }`}
          />
          {nameError && (
            <span className="text-[var(--color-Red-400-input-errors)] text-[0.65rem]">
              {nameError}
            </span>
          )}
        </div>

        {/* Card Number */}
        <div className="flex flex-col gap-1">
          <label
            htmlFor="number"
            className="text-[var(--color-Purple-950)] uppercase text-sm"
          >
            Card Number
          </label>
          <input
            type="text"
            inputMode="numeric"
            maxLength="19"
            id="number"
            value={cardData.number}
            onChange={(e) => handleInputChange("number", e.target.value)}
            placeholder="e.g. 1234 5678 9123 0000"
            className={`w-full p-2 rounded-md placeholder:text-[var(--color-Gray-200)] focus:outline-none ${
              numberError
                ? "border-1 border-[var(--color-Red-400-input-errors)]"
                : "border border-[var(--color-Gray-200)]"
            }`}
          />
          {numberError && (
            <span className="text-[var(--color-Red-400-input-errors)] text-[0.65rem]">
              {numberError}
            </span>
          )}
        </div>

        {/* Exp. Date & CVC */}
        <div className="w-full grid grid-cols-2 gap-4">
          {/* Exp. Date */}
          <div className="w-full flex flex-col gap-1">
            <label
              htmlFor="month"
              className="text-[var(--color-Purple-950)] uppercase text-sm whitespace-nowrap"
            >
              Exp. Date (MM/YY)
            </label>
            <div className="w-full flex gap-2">
              <div className="w-full flex flex-col">
                <input
                  type="text"
                  inputMode="numeric"
                  maxLength="2"
                  id="month"
                  value={cardData.month}
                  onChange={(e) => handleInputChange("month", e.target.value)}
                  placeholder="MM"
                  className={`w-full p-2 rounded-md placeholder:text-[var(--color-Gray-200)] focus:outline-none ${
                    monthError
                      ? "border-1 border-[var(--color-Red-400-input-errors)]"
                      : "border border-[var(--color-Gray-200)]"
                  }`}
                />
                {(monthError || yearError) && (
                  <span className="text-[var(--color-Red-400-input-errors)] text-[0.65rem] whitespace-nowrap">
                    {monthError || yearError}
                  </span>
                )}
              </div>

              <div className="w-full flex flex-col">
                <input
                  type="text"
                  inputMode="numeric"
                  maxLength="4"
                  id="year"
                  value={cardData.year}
                  onChange={(e) => handleInputChange("year", e.target.value)}
                  placeholder="YY"
                  className={`w-full p-2 rounded-md placeholder:text-[var(--color-Gray-200)] focus:outline-none ${
                    yearError
                      ? "border-1 border-[var(--color-Red-400-input-errors)]"
                      : "border border-[var(--color-Gray-200)]"
                  }`}
                />
              </div>
            </div>
          </div>

          {/* CVC */}
          <div className="w-full flex flex-col gap-1">
            <label
              htmlFor="cvc"
              className="text-[var(--color-Purple-950)] uppercase text-sm"
            >
              CVC
            </label>
            <input
              type="text"
              inputMode="numeric"
              maxLength="3"
              id="cvc"
              value={cardData.cvc}
              onChange={(e) => handleInputChange("cvc", e.target.value)}
              placeholder="e.g. 123"
              className={`w-full p-2 rounded-md placeholder:text-[var(--color-Gray-200)] focus:outline-none ${
                cvcError
                  ? "border-1 border-[var(--color-Red-400-input-errors)]"
                  : "border border-[var(--color-Gray-200)]"
              }`}
            />
            {cvcError && (
              <span className="text-[var(--color-Red-400-input-errors)] text-[0.65rem]">
                {cvcError}
              </span>
            )}
          </div>
        </div>

        {/* Submit */}
        <button
          type="submit"
          className="w-full bg-[var(--color-Purple-950)] text-[var(--color-White)] bg-no-repeat bg-cover rounded-[0.5rem] mt-4 p-3 cursor-pointer"
        >
          Confirm
        </button>
      </form>
    </main>
  );
}
