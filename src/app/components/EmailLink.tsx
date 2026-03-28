"use client";
import { useState } from "react";

export default function EmailLink({ email }: { email: string }) {
  const [hovered, setHovered] = useState(false);
  return (
    <a
      href={`mailto:${email}`}
      style={{ color: hovered ? '#ec4899' : 'inherit', transition: 'color 0.15s' }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {email}
    </a>
  );
}
