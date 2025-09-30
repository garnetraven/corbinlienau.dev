import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";

const Navbar: React.FC = () => {
  const router = useRouter(); 

  return (
    <nav className="bg-blue-950 py-4 shadow-md"> 
      <div className="container mx-auto flex justify-center">
        <ul className="flex space-x-64"> 
          <li>
            <Link
              href="/"
              className={`text-gray-100 text-lg font-normal transition-colors ${
                router.pathname === "/" ? "text-white border-b-2 border-blue-500" : "hover:text-gray-300"
              }`}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              href="/about"
              className={`text-gray-100 text-lg font-normal transition-colors ${
                router.pathname === "/about" ? "text-white border-b-2 border-blue-500" : "hover:text-gray-300"
              }`}
            >
              About
            </Link>
          </li>
          <li>
            <Link
              href="/blog"
              className={`text-gray-100 text-lg font-normal transition-colors ${
                router.pathname === "/blog" ? "text-white border-b-2 border-blue-500" : "hover:text-gray-300"
              }`}
            >
              Blog
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
