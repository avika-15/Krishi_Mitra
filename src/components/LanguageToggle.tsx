
import React, { useState } from "react";
import { Globe, Language } from "lucide-react";

const LANGUAGES = [
  { code: "hi", label: "हिन्दी" },
  { code: "en", label: "English" }
];

const getInitialLang = () => {
  // Defaults to Hindi if not set
  return localStorage.getItem("lang") || "hi";
};

const LanguageToggle = () => {
  const [lang, setLang] = useState<string>(getInitialLang());

  const handleChange = (code: string) => {
    setLang(code);
    localStorage.setItem("lang", code);
    window.location.reload();
  };

  return (
    <div className="flex items-center space-x-2">
      <Language className="w-5 h-5 text-green-700" />
      {LANGUAGES.map(({ code, label }) => (
        <button
          key={code}
          onClick={() => handleChange(code)}
          className={`px-2 py-1 rounded ${lang === code ? "bg-green-500 text-white" : "bg-gray-100 text-green-700"} text-sm`}
        >
          {label}
        </button>
      ))}
    </div>
  );
};

export default LanguageToggle;
