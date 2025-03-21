import React from 'react';
import Image from 'next/image';

export default function About() {
  return (
    <div className="flex justify-center items-center">
      <Image src="/about.gif" alt="About" width={1280} height={720} />
    </div>
  );
}
