import { useState } from "react";
import { CheckIcon } from "@heroicons/react/24/solid";

const tiers = [
  {
    name: "Free",
    id: "tier-free",
    priceMonthly: "$0",
    description: "Perfect if you want to try Lurny with zero commitment.",
    features: [
      "3 lessons per day",
      "Access to 3 categories",
      "Basic progress tracking",
    ],
  },
  {
    name: "Pro",
    id: "tier-pro",
    priceMonthly: "$4.99",
    description: "The ideal plan to learn naturally every day.",
    features: [
      "Unlimited lessons",
      "All categories unlocked",
      "Offline mode",
      "No ads",
    ],
  },
  {
    name: "Master",
    id: "tier-master",
    priceMonthly: "$9.99",
    description:
      "For learners who want the most complete and advanced experience.",
    features: [
      "Everything in Pro",
      "Personalized paths",
      "Advanced statistics",
      "Premium support",
    ],
  },
];

export default function Plans() {
  const [selected, setSelected] = useState(null);

  return (
    <div className="bg-amber-50 px-6 py-20">

      {/* HEADER */}
      <div className="max-w-4xl mx-auto text-center mb-12">
        <h1 className="text-4xl sm:text-5xl font-bold text-gray-900">
          Choose the right plan for you
        </h1>
        <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
          Pick a plan that fits your lifestyle and helps you learn naturally every day.
        </p>
      </div>

      {/* CARDS */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 max-w-6xl mx-auto">
        {tiers.map((tier) => {
          const isSelected = selected === tier.id;

          return (
            <div
              key={tier.id}
              onClick={() => setSelected(tier.id)}
              className={`cursor-pointer rounded-2xl p-8 shadow-sm transition-all 
                ${
                  isSelected
                    ? "bg-cyan-500 text-white shadow-xl scale-105 shadow-cyan-300"
                    : "bg-white hover:shadow-lg text-gray-900"
                }`}
            >
              <h3 className="text-xl font-semibold">{tier.name}</h3>

              <p className="mt-4 flex items-baseline gap-x-2">
                <span
                  className={`text-4xl font-bold ${
                    isSelected ? "text-white" : "text-gray-900"
                  }`}
                >
                  {tier.priceMonthly}
                </span>
                <span
                  className={`${isSelected ? "text-gray-200" : "text-gray-600"}`}
                >
                  /month
                </span>
              </p>

              <p
                className={`mt-4 ${
                  isSelected ? "text-gray-100" : "text-gray-700"
                }`}
              >
                {tier.description}
              </p>

              <ul
                className={`mt-6 space-y-3 text-sm ${
                  isSelected ? "text-gray-50" : "text-gray-700"
                }`}
              >
                {tier.features.map((feature) => (
                  <li key={feature} className="flex gap-x-3 items-start">
                    <CheckIcon
                      className={`h-5 w-5 flex-none ${
                        isSelected ? "text-white" : "text-cyan-500"
                      }`}
                    />
                    {feature}
                  </li>
                ))}
              </ul>

              <button
                className={`mt-8 w-full rounded-xl py-3 font-semibold text-center transition
                  ${
                    isSelected
                      ? "bg-white text-cyan-500 hover:bg-white hover:shadow-lg hover:shadow-stone-400"
                      : "bg-cyan-500 text-white hover:bg-cyan-200 hover:text-stone-800 hover:shadow-lg hover:shadow-cyan-400"
                  }`}
              >
                Get started
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}

