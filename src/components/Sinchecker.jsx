import { useState } from "react";
import sinsData from "../data/data";
import { FaSearch, FaExclamationTriangle, FaCheckCircle, FaQuestionCircle } from "react-icons/fa";

export default function SinChecker() {
  const [input, setInput] = useState("");
  const [result, setResult] = useState(null);
  const [suggestions, setSuggestions] = useState([]);

  const checkAct = () => {
    if (!input.trim()) {
      setResult(null);
      return;
    }

    const found = sinsData.find((s) => 
      s.act.toLowerCase() === input.toLowerCase() ||
      s.synonyms?.some((syn) => syn.toLowerCase() === input.toLowerCase())
    );

    if (found) {
      setResult({ type: found.type, reference: found.reference || "No reference available." });
    } else {
      setResult({ type: "unknown" });
    }
  };

  const handleInputChange = (e) => {
    const value = e.target.value;
    setInput(value);

    if (!value.trim()) {
      setSuggestions([]);
      return;
    }

    setSuggestions(
      sinsData.filter((s) => s.act.toLowerCase().includes(value.toLowerCase()))
        .map((s) => s.act)
    );
  };

  const handleSuggestionClick = (suggestion) => {
    setInput(suggestion);
    setSuggestions([]);
    checkAct();
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      checkAct();
      setSuggestions([]);
    }
  };

  return (
    <div className="flex flex-col items-center p-6 min-h-screen   text-[#fafbfb]">
      <h1 className="text-4xl font-bold mb-2">IslamicAudit </h1>
      <p className="text-center max-w-lg mb-6 text-lg">
      An educational tool to help you understand the ethical status of various actions in Islam along with references 
       Always consult a scholar for deeper guidance on controversial topics .
      </p>

      <div className="w-full max-w-md text-center space-y-3">
        <div className="flex items-center bg-white p-3 rounded-xl shadow-md border-2 border-gray-300 focus-within:border-[#3b3f8b] transition">
          <input
            type="text"
            placeholder="Enter an action..."
            value={input}
            onChange={handleInputChange}
            onKeyDown={handleKeyDown}
            className="flex-grow p-2 outline-none text-gray-800 rounded-xl"
          />
          <button onClick={checkAct} className="p-2 text-[#3b3f8b] hover:scale-110 transition-transform">
            <FaSearch size={22} />
          </button>
        </div>
      </div>

      {suggestions.length > 0 && (
        <ul className="w-full max-w-md mt-2 border border-gray-300 rounded-lg shadow-lg bg-[#3b3f8b] overflow-hidden">
          {suggestions.map((suggestion, index) => (
            <li
              key={index}
              onClick={() => handleSuggestionClick(suggestion)}
              className="p-3 cursor-pointer hover:bg-[#e0e5ff] hover:text-[#3b3f8b] transition"
            >
              {suggestion}
            </li>
          ))}
        </ul>
      )}

      {result && (
        <div className={`mt-4 p-4 w-full max-w-md rounded-xl shadow-md text-white text-center ${
          result.type === "sin" ? "bg-red-700 border-4 border-red-900" : 
          result.type === "not sin" ? "bg-green-700 border-4 border-green-900" : 
          "bg-yellow-600 border-4 border-yellow-800"
        }`}>
          <div className="flex items-center justify-center space-x-3 text-lg font-semibold">
            {result.type === "sin" && <FaExclamationTriangle size={24} className="text-white" />}
            {result.type === "not sin" && <FaCheckCircle size={24} className="text-white" />}
            {result.type === "unknown" && <FaQuestionCircle size={24} className="text-white" />}
            <p>{result.type === "unknown" ? "No data found. Consult scholars for guidance." : result.reference}</p>
          </div>
        </div>
      )}

      <footer className="mt-10 w-full py-4  text-white text-center rounded-t-xl">
        <p>&copy; {new Date().getFullYear()} IslamicAudit. Created by <span className="font-semibold">eshaaldev</span>. All rights reserved.</p>
      </footer>
    </div>
  );
}
