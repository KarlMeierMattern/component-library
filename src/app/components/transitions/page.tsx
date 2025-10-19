"use client";

import { useEffect, useState } from "react";

export default function Page() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center space-x-2 text-2xl font-bold">
      {["The", "Clever", "Little", "Wilflife", "Camera"].map((word, i) => (
        <span
          key={word}
          className={`transition-all duration-1000 ${
            loaded ? "opacity-100 blur-0" : "opacity-0 blur-xl"
          }`}
          style={{ transitionDelay: `${i * 200}ms` }}
        >
          {word}
        </span>
      ))}
    </div>
  );
}
