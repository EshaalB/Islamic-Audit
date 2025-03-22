import { useState, useMemo } from "react";
import sinsData from "../data/data";
import ResponsiveSearchBar from "./inputBox";
import logo from "../assets/logo.png";
import { FaExclamationTriangle, FaCheckCircle, FaQuestionCircle } from "react-icons/fa";

export default function Sinchecker() {
  const [input, setInput] = useState("");
  const [result, setResult] = useState(null);
  const [suggestions, setSuggestions] = useState([]);

  const sinsMap = useMemo(() => {
    const map = new Map();
    sinsData.forEach((s) => {
      map.set(s.act.toLowerCase(), s);
      s.synonyms?.forEach((syn) => map.set(syn.toLowerCase(), s));
    });
    return map;
  }, []);

  const checkAct = () => {
    if (!input.trim()) {
      setResult(null);
      return;
    }
    const found = sinsMap.get(input.toLowerCase());
    setResult(
      found
        ? {
            type: found.type,
            quranRef: found.quranRef || "No Quran reference available.",
            hadithRef: found.hadithRef || "No Hadith reference available.",
          }
        : { type: "unknown" }
    );
  };

  const handleInputChange = (e) => {
    const value = e.target.value;
    setInput(value);

    if (!value.trim()) {
      setSuggestions([]);
      return;
    }

    const lowerValue = value.toLowerCase();
    setSuggestions(
      sinsData
        .filter(
          (s) =>
            s.act.toLowerCase().includes(lowerValue) ||
            s.synonyms?.some((syn) => syn.toLowerCase().includes(lowerValue))
        )
        .map((s) => s.act)
    );
  };

  return (
    <div
      className="
        mx-auto 
        w-full 
        px-4 
        pb-10 
        text-[#fafbfb]
        max-w-sm 
        sm:max-w-md 
        md:max-w-xl 
        lg:max-w-2xl 
        pt-7        /* Increased top padding */
      "
    >
      {/* Logo (Bigger on all screens) */}
      <img
        src={logo}
        alt="IslamicAudit Logo"
        className="mx-auto mb-6 w-36 h-36 object-contain sm:w-40 sm:h-40 md:w-48 md:h-48"
      />

      <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 text-center">
        IslamicAudit
      </h1>
      <p className="text-sm sm:text-base md:text-lg text-center mb-8">
        An educational tool to help you understand the ethical status of various
        actions in Islam along with references. Always consult a scholar for
        deeper guidance on controversial topics.
      </p>

      <div className="bg-black/30 rounded-xl p-4 w-full">
        <ResponsiveSearchBar
          value={input}
          onChange={handleInputChange}
          onSearch={checkAct}
        />

        {suggestions.length > 0 && (
          <ul className="mt-2 border border-gray-300 rounded-lg shadow-lg bg-[#3b3f8b] max-h-60 overflow-y-auto">
            {suggestions.map((suggestion, index) => (
              <li
                key={index}
                onClick={() => {
                  setInput(suggestion);
                  setSuggestions([]);
                }}
                className="p-3 cursor-pointer hover:bg-[#e0e5ff] hover:text-[#3b3f8b] transition-all duration-300 transform hover:scale-105"
              >
                {suggestion}
              </li>
            ))}
          </ul>
        )}

        {result && (
          <div className="mt-4 p-4 w-full rounded-xl shadow-md text-white text-center bg-purple-900 fade-in">
            {result.type === "unknown" ? (
              <>
                <FaQuestionCircle
                  className="inline-block mr-2 text-yellow-500"
                  size={24}
                />
                <p className="text-sm sm:text-base md:text-lg">
                  No data found. Consult scholars for guidance.
                </p>
              </>
            ) : (
              <>
                {result.type === "sin" && (
                  <FaExclamationTriangle
                    className="inline-block mr-2 text-red-500"
                    size={24}
                  />
                )}
                {result.type === "not sin" && (
                  <FaCheckCircle
                    className="inline-block mr-2 text-green-500"
                    size={24}
                  />
                )}
                <h2 className="font-bold text-lg sm:text-xl md:text-2xl">
                  {result.type === "sin"
                    ? "Sin"
                    : result.type === "not sin"
                    ? "Not Sin"
                    : "Unclear"}
                </h2>
                <p className="mt-2 text-sm sm:text-base md:text-lg">
                  <strong>Quran Reference:</strong> {result.quranRef}
                </p>
                <p className="mt-2 text-sm sm:text-base md:text-lg">
                  <strong>Hadith Reference:</strong> {result.hadithRef}
                </p>
              </>
            )}
          </div>
        )}
      </div>

      <footer className="mt-10 text-sm sm:text-base md:text-lg text-center">
        <p>
          &copy; {new Date().getFullYear()} IslamicAudit. Created by{" "}
          <span className="font-semibold">eshaaldev</span>. All rights reserved.
        </p>
      </footer>
    </div>
  );
}
