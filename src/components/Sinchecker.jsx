import { useState, useMemo } from "react";
import sinsData from "../data/data";
import ResponsiveSearchBar from "./inputBox";
import logo from "../assets/logo.png"; 
import { FaExclamationTriangle, FaCheckCircle, FaQuestionCircle } from "react-icons/fa";

export default function SinChecker() {
  const [input, setInput] = useState("");
  const [result, setResult] = useState(null);
  const [suggestions, setSuggestions] = useState([]);
  const [darkMode, setDarkMode] = useState(false);

  // Convert data to a Map for fast lookup
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
            hadithRef: found.hadithRef || "No Hadith reference available." 
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
        .filter((s) => 
          s.act.toLowerCase().includes(lowerValue) || 
          s.synonyms?.some((syn) => syn.toLowerCase().includes(lowerValue))
        )
        .map((s) => s.act)
    );
  };

  return (
    <div className={`relative flex flex-col items-center justify-start p-6 min-h-screen text-[#fafbfb] pt-4 ${darkMode ? "dark" : ""}`}>
      
     

      {/* Logo Image */}
      <img 
        src={logo} 
        alt="IslamicAudit Logo" 
        className="mb-3 w-50 h-auto" 
      />

      <h1 className="text-4xl font-bold mb-2">IslamicAudit</h1>
      <p className="text-center max-w-lg mb-6 text-lg">
        An educational tool to help you understand the ethical status of various actions in Islam along with references.
        Always consult a scholar for deeper guidance on controversial topics.
      </p>

      <ResponsiveSearchBar 
        value={input}
        onChange={handleInputChange}
        onSearch={checkAct}
      />

      {suggestions.length > 0 && (
        <ul className="w-full max-w-md mt-2 border border-gray-300 rounded-lg shadow-lg bg-[#3b3f8b] overflow-hidden transition-all duration-300">
          {suggestions.map((suggestion, index) => (
            <li
              key={index}
              onClick={() => { setInput(suggestion); setSuggestions([]); }}
              className="p-3 cursor-pointer hover:bg-[#e0e5ff] hover:text-[#3b3f8b] transition-all duration-300 transform hover:scale-105"
            >
              {suggestion}
            </li>
          ))}
        </ul>
      )}

{result && (
  <div className="mt-4 p-4 w-full max-w-md rounded-xl shadow-md text-white text-center transition-all duration-300 fade-in bg-purple-900">
    {result.type === "unknown" ? (
      <>
        <FaQuestionCircle className="inline-block mr-2 text-yellow-500" size={24} />
        <p>No data found. Consult scholars for guidance.</p>
      </>
    ) : (
      <>
        {result.type === "sin" && <FaExclamationTriangle className="inline-block mr-2 text-red-500" size={24} />}
        {result.type === "not sin" && <FaCheckCircle className="inline-block mr-2 text-green-500" size={24} />}
        <h2 className="font-bold">
          {result.type === "sin" ? "Sin" : result.type === "not sin" ? "Not Sin" : "Unclear"}
        </h2>
        <p className="mt-2">
          <strong>Quran Reference:</strong> {result.quranRef}
        </p>
        <p className="mt-2">
          <strong>Hadith Reference:</strong> {result.hadithRef}
        </p>
      </>
    )}
  </div>
)}



      <footer className="mt-10 w-full py-4 text-white text-center rounded-t-xl transition-all duration-300">
        <p>&copy; {new Date().getFullYear()} IslamicAudit. Created by <span className="font-semibold">eshaaldev</span>. All rights reserved.</p>
      </footer>
    </div>
  );
}