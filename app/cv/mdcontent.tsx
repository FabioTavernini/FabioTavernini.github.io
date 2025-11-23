"use client";

import { useState } from "react";
import MarkDownRenderer from "./MarkDownRenderer";
import { cvMarkdownDE, cvMarkdownEN } from "./content";

export default function MD() {
  const [language, setLanguage] = useState<"DE" | "EN">("EN");

  return (
    <div className="flex flex-col items-center p-4">
      {/* Language toggle */}
      <div className="flex items-center mb-6">
        <span className={`mr-2 ${language === "DE" ? "font-bold" : ""}`}>DE</span>
        <label className="relative inline-flex items-center cursor-pointer">
          <input
            aria-label="Toggle language"
            checked={language === "EN"}
            className="sr-only peer"
            type="checkbox"
            onChange={() => setLanguage(language === "DE" ? "EN" : "DE")}
          />
          <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer dark:bg-gray-700 peer-checked:bg-gray-700 transition-all" />
          <div className="absolute left-1 top-1 bg-white w-4 h-4 rounded-full transition-transform peer-checked:translate-x-5" />
        </label>
        <span className={`ml-2 ${language === "EN" ? "font-bold" : ""}`}>EN</span>
      </div>

      {/* CV renderer */}
      <MarkDownRenderer
        markdownText={language === "DE" ? cvMarkdownDE : cvMarkdownEN}
      />
    </div>
  );
}
