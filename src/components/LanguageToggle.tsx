
import React from "react";
import { Globe } from "lucide-react";

interface LanguageToggleProps {
  language: "en" | "hi";
  setLanguage: (lang: "en" | "hi") => void;
}

const LanguageToggle: React.FC<LanguageToggleProps> = ({ language, setLanguage }) => {
  return (
    <div className="flex items-center space-x-2 absolute right-6 top-6 z-10">
      <Globe size={20} className="text-green-500" />
      <button
        className={`px-3 py-1 rounded font-semibold border ${language === "en" ? "bg-green-500 text-white" : ""}`}
        onClick={() => setLanguage("en")}
        aria-pressed={language === "en"}
      >
        English
      </button>
      <button
        className={`px-3 py-1 rounded font-semibold border ${language === "hi" ? "bg-green-500 text-white" : ""}`}
        onClick={() => setLanguage("hi")}
        aria-pressed={language === "hi"}
      >
        हिन्दी
      </button>
    </div>
  );
};

export default LanguageToggle;
