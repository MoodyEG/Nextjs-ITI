/* eslint-disable react-hooks/rules-of-hooks */
'use client';
import React, { useState, useEffect } from 'react';

export default function page() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products/categories')
      .then((res) => res.json())
      .then((data) => setCategories(data))
      .catch((err) => console.error(err));
  }, []);
  return (
    <ul className="list-disc list-inside space-y-4">
      {categories.map((category) => (
        <li
          key={category}
          className="bg-gray-500 p-2 rounded-md shadow-sm list-none text-center"
        >
          {category}
        </li>
      ))}
    </ul>
  );
}
