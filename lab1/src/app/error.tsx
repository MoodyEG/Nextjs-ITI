'use client'; // Error boundaries must be Client Components

import Image from 'next/image';
import { useEffect } from 'react';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);
  return (
    <div>
      <div className="flex flex-col items-center justify-center h-screen space-y-8">
        <h2>Something went wrong!</h2>
        <Image src="/error.gif" alt="error" width={400} height={250} />
        <p className="text-red-600 mx-4">{error.message}</p>
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={
            // Attempt to recover by trying to re-render the segment
            () => reset()
          }
        >
          Try again
        </button>
      </div>
    </div>
  );
}
