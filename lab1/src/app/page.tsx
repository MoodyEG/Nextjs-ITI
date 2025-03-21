import Image from "next/image";

export default function Home() {
  return (
    <div className=" flex justify-center items-center">
      <Image src="/welcome.webp" alt="Welcome" width={1280} height={720} />
    </div>
  );
}
