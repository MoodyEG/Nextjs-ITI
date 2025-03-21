'use client';
import Image from 'next/image';
import { useParams } from 'next/navigation';
import React, { useEffect, useState } from 'react';

export default function Details() {
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
  const { id } = useParams();
  const [product, setProduct] = useState<ProductInterface>();

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((res) => res.json())
      .then((data) => setProduct(data))
      .catch((err) => console.error(err));
  }, [id]);
  return (
    <div className="flex flex-col items-center space-y-4">
      {product && (
        <>
          <Image
            src={product.image}
            alt={product.title}
            width={300}
            height={300}
            className="rounded-md shadow-sm"
          />
          <h1 className="text-3xl font-bold">{product.title}</h1>
          <p className="text-xl">{product.description}</p>
          <p className="text-2xl font-bold">${product.price}</p>
        </>
      )}
    </div>
  );
}
