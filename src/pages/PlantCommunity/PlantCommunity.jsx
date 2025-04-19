import { useState } from "react";

const PlantCommunity = () => {
  const [isSubscribed, setIsSubscribed] = useState(true); // Example condition
  const [problemTitle, setProblemTitle] = useState("");
  const [problemDescription, setProblemDescription] = useState("");

  const handleSubmit = () => {
    if (!problemTitle || !problemDescription) return;
    // Submit logic here
    console.log("Submitted:", { problemTitle, problemDescription });
    setProblemTitle("");
    setProblemDescription("");
  };

  return (
    <div className="max-w-4xl min-h-screen mx-auto pt-[100px]">
      <h1 className="text-3xl font-bold text-center mb-6">Plant Community</h1>

      <div className="flex justify-center gap-4 mb-6">
        <button className="bg-[#728156] text-white px-6 py-2 rounded-full hover:bg-green-700 transition">
          Plant Discussions with Community
        </button>
        <button className="bg-[#728156] text-white px-6 py-2 rounded-full hover:bg-green-700 transition">
          Discussion Privately
        </button>
      </div>

      {isSubscribed ? (
        <div className="bg-white p-6 rounded-2xl shadow-md">
          <h2 className="text-xl font-semibold mb-4">
            Share Your Plant Problem
          </h2>

          <input
            className="w-full p-3 bg-slate-200 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:ring-2 focus:ring-[#728156]"
            type="text"
            placeholder="Enter the title of the problem"
            value={problemTitle}
            onChange={(e) => setProblemTitle(e.target.value)}
          />

          <textarea
            className="w-full p-3 border bg-slate-200 border-gray-300 rounded-lg mb-4 focus:outline-none focus:ring-2 focus:ring-[#728156]"
            placeholder="Describe the issue, symptoms, or disease affecting your plant"
            rows={5}
            value={problemDescription}
            onChange={(e) => setProblemDescription(e.target.value)}
          />

          <button
            onClick={handleSubmit}
            className="bg-[#728156] text-white px-6 py-2 rounded-lg hover:bg-green-700 transition"
          >
            Submit Problem
          </button>
        </div>
      ) : (
        <div className="text-center mt-10 text-lg text-gray-600">
          You need a subscription to participate in the community discussions.
        </div>
      )}
    </div>
  );
};

export default PlantCommunity;
