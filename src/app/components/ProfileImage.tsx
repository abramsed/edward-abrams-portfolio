"use client";

import { useState } from "react";
import Image from "next/image";

export default function ProfileImage() {
  const [loaded, setLoaded] = useState(false);

  return (
    <div className="relative mt-8 w-full max-w-[400px] aspect-square">
      {!loaded && (
        <div className="absolute inset-0 rounded-xl bg-blue-900 animate-pulse" />
      )}
      <Image
        src="/edward-abrams.jpeg"
        alt="Edward D. Abrams"
        fill
        sizes="(max-width: 400px) 100vw, 400px"
        className={`rounded-xl object-cover transition-opacity duration-700 ${
          loaded ? "opacity-100" : "opacity-0"
        }`}
        onLoad={() => setLoaded(true)}
      />
    </div>
  );
}
