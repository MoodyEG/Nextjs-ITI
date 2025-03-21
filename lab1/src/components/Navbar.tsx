import { auth } from "@/auth";
import Link from "next/link";
import React from "react";

const navItems = [
  { name: "Home", path: "/" },
  { name: "Products", path: "/products" },
  { name: "About", path: "/about" },
  // { name: "Sign In", path: "/api/auth/signin" },
  // { name: "Sign Out", path: "/api/auth/signout" },
];

export default async function Navbar({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const session = await auth();
  const nav = [...navItems];
  if (session?.user) nav.push({ name: "Sign Out", path: "/api/auth/signout" });
  else nav.push({ name: "Sign In", path: "/api/auth/signin" });

  return (
    <nav className="bg-gray-800">
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-between h-16">
          <div className="flex-1 flex items-center justify-center ">
            <div className=" sm:block sm:ml-6">
              <div className="flex space-x-12">
                {nav.map((item) => (
                  <Link
                    key={item.name}
                    href={item.path}
                    className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                  >
                    {item.name}
                  </Link>
                ))}
                {children}
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
