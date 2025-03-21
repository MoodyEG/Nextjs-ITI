import Image from 'next/image';

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center h-screen space-y-8">
      <h2 className="text-2xl font-bold text-center">404 - Page Not Found</h2>

      <Image src="/not-found.gif" alt="not-found" width={500} height={500} />
    </div>
  );
}
