"use client";

import { useState } from "react";
import Image from "next/image";

type Props = {
  name: string;
  initials?: string;
};

export function Avatar({ name, initials = "ST" }: Props) {
  const [hasError, setHasError] = useState(false);

  return (
    <div className="w-[120px] h-[120px] rounded-full bg-green-light border-2 border-green-border flex-shrink-0 flex items-center justify-center overflow-hidden hover:shadow-[0_0_0_8px_rgba(0,69,30,0.12)] hover:scale-105 transition-all duration-300 cursor-default">
      {hasError ? (
        <span className="font-serif text-green text-4xl font-semibold select-none">
          {initials}
        </span>
      ) : (
        <Image
          src="/images/avatar.jpg"
          alt={name}
          width={120}
          height={120}
          className="rounded-full object-cover"
          onError={() => setHasError(true)}
          priority
        />
      )}
    </div>
  );
}
