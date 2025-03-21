"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useSearchParams } from "next/navigation";

export default function Products() {
  interface ProductInterface {
    category: string;
    description: string;
    id: number;
    image: string;
    price: number;
    rating: {
      count: number;
      rate: number;
    };
    title: string;
  }

  const [products, setProducts] = useState<ProductInterface[]>([]);
  const searchParams = useSearchParams();
  const min = !isNaN(parseFloat(searchParams.get("min") ?? "0"))
    ? parseFloat(searchParams.get("min") ?? "0")
    : 0;
  const max = !isNaN(parseFloat(searchParams.get("max") ?? "Infinity"))
    ? parseFloat(searchParams.get("max") ?? "Infinity")
    : Infinity;

  // console.log(min, max);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => {
        const filteredProducts = data.filter(
          (product: ProductInterface) =>
            product.price >= min && product.price <= max
        );
        setProducts(filteredProducts);
      })
      .catch((err) => console.error(err));
  }, [min, max]);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {products.map((product) => (
        <Link key={product.id} href={`/products/${product.id}`}>
          <div
            className="block p-4 border border-gray-200 rounded-md shadow-sm h-full flex flex-col items-center justify-center"
            style={{ minHeight: "250px" }}
          >
            <h5 className="text-xl font-bold text-center">{product.title}</h5>
            <Image
              src={product.image}
              alt={product.title}
              width={150}
              height={150}
              className="rounded-md"
            />
            <p className="text-xl font-bold text-center">${product.price}</p>
          </div>
        </Link>
      ))}
    </div>
  );
}
