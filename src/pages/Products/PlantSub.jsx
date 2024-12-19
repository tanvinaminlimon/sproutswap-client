import React from "react";

const SubscriptionCards = () => {
  const plans = [
    {
      title: "Basic",
      price: "৳299",
      features: [
        "5 plant deliveries per month",
        "Free gardening tips",
        "Basic plant care guide",
        "No replacement warranty",
      ],
      isPopular: false,
      bgColor: "bg-blue-500",
    },
    {
      title: "Standard",
      price: "৳599",
      features: [
        "10 plant deliveries per month",
        "Free gardening tips",
        "Plant care guide & videos",
        "1 replacement per month",
      ],
      isPopular: true,
      bgColor: "bg-gray-700",
    },
    {
      title: "Premium",
      price: "৳999",
      features: [
        "Unlimited plant deliveries",
        "Expert gardening consultation",
        "Advanced care guide & videos",
        "Unlimited replacements",
      ],
      isPopular: false,
      bgColor: "bg-red-500",
    },
  ];

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 py-12">
      <h1 className="text-3xl font-bold mb-6">Plant Subscription Plans</h1>
      <div className="flex flex-wrap gap-8 justify-center">
        {plans.map((plan, index) => (
          <div
            key={index}
            className="w-72 bg-white rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition-all"
          >
            <div className={`p-6 ${plan.bgColor} text-white text-center`}>
              <h2 className="text-2xl font-bold">{plan.title}</h2>
              <p className="text-xl font-semibold mt-2">{plan.price} per month</p>
            </div>
            <div className="p-6">
              <ul className="space-y-4">
                {plan.features.map((feature, i) => (
                  <li
                    key={i}
                    className={`flex items-center gap-2 ${
                      feature.includes("No") || feature.includes("Unlimited")
                        ? "text-gray-500"
                        : "text-green-600"
                    }`}
                  >
                    {feature.includes("No") ? (
                      <span className="text-red-500 font-bold">✘</span>
                    ) : (
                      <span className="text-green-500 font-bold">✔</span>
                    )}
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="p-6 text-center">
              <button
                className={`w-full py-2 rounded ${
                  plan.bgColor === "bg-blue-500"
                    ? "bg-blue-500 text-white"
                    : plan.bgColor === "bg-gray-700"
                    ? "bg-gray-700 text-white"
                    : "bg-red-500 text-white"
                } hover:opacity-90`}
              >
                Select
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SubscriptionCards;
