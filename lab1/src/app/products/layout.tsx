import Link from "next/link";
import React from "react";
import Filter from "./filter";

const navItems = [
  { name: "Home (Products)", path: "/products" },
  { name: "Filters", path: "#" },
  { name: "Categories", path: "/products/categories" },
  { name: "Logout", path: "#" },
  { name: "Throw Error", path: "/products/errortest" },
  { name: "Not Found", path: "/bl7" },
] as const;

export default function layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex ">
      <div className="w-64 bg-gray-700 p-4 ">
        <ul className="space-y-10">
          {navItems.map(({ name, path }) => {
            if (name === "Filters") {
              return (
                <li key={name}>
                  <Filter />
                </li>
              );
            } else {
              return (
                <li key={name}>
                  <Link href={path} className="block">
                    {name}
                  </Link>
                </li>
              );
            }
          })}
        </ul>
      </div>
      <div className="flex-1 p-4 overflow-y-auto">{children}</div>
    </div>
  );
}
