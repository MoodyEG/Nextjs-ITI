"use client";
import { useRouter } from "next/navigation";

export default function Filter() {
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const min = Number(formData.get("min")) || 0;
    const max = Number(formData.get("max")) || Infinity;
    router.push(`/products?min=${min}&max=${max}`);
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
      <label>
        Min:
        <input
          type="number"
          name="min"
          className="p-2 rounded-md bg-gray-100 text-black"
        />
      </label>
      <label>
        Max:
        <input
          type="number"
          name="max"
          className="p-2 rounded-md bg-gray-100 text-black"
        />
      </label>
      <button
        type="submit"
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Filter
      </button>
    </form>
  );
}
