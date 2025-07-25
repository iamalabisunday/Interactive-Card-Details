"use client";

export default function SuccessCard({ onContinue }) {
  return (
    <main className="md:max-w-[38%] mx-auto">
      <div className="flex flex-col items-center gap-8 text-center">
        {/* Success Icon */}
        <div className="w-20 h-20 rounded-full bg-gradient-to-br from-purple-500 to-purple-700 flex items-center justify-center">
          <svg
            className="w-10 h-10 text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 13l4 4L19 7"
            />
          </svg>
        </div>

        {/* Success Message */}
        <div className="space-y-4">
          <h1 className="text-[var(--color-Purple-950)] text-2xl font-medium uppercase tracking-widest">
            Thank You!
          </h1>
          <p className="text-[var(--color-Gray-200)] text-lg">
            We've added your card details
          </p>
        </div>

        {/* Continue Button */}
        <button
          onClick={onContinue}
          className="w-full bg-[var(--color-Purple-950)] text-[var(--color-White)] bg-no-repeat bg-cover rounded-[0.5rem] p-3 cursor-pointer"
        >
          Continue
        </button>
      </div>
    </main>
  );
}
