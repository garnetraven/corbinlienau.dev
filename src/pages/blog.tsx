import React from "react";
import Navbar from "../components/navbar";
import Footer from "../components/footer";

interface BlogPost {
  id: number;
  date: string;
  title: string;
  author: string;
}

const Blog: React.FC = () => {
  const blogPosts: BlogPost[] = [
    {
      id: 1,
      date: "September 30, 2025",
      title: "Advanced Network Security Techniques in Modern Infrastructure",
      author: "Corbin",
    },
    {
      id: 2,
      date: "September 15, 2025",
      title: "Vulnerability Detection Using Machine Learning",
      author: "Corbin",
    },
    {
      id: 3,
      date: "August 28, 2025",
      title: "Exploring Zero-Day Exploits in Legacy Systems",
      author: "Corbin",
    },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-gray-800 text-gray-200">
      <Navbar />
      <main className="flex-grow flex flex-col items-center px-4 py-12">
        <h1 className="text-4xl font-bold mb-12">Posts</h1>
        
        <div className="w-full max-w-2xl space-y-3">
          {blogPosts.map((post) => (
            <div
              key={post.id}
              className="flex p-6 hover:opacity-80 transition-opacity cursor-pointer"
            >
              <div className="w-1 bg-blue-500 rounded-full mr-6 flex-shrink-0"></div>
              <div className="flex flex-col">
                <p className="text-sm text-gray-400 mb-2">{post.date}</p>
                <h2 className="text-xl font-semibold mb-2 text-blue-400">{post.title}</h2>
                <p className="text-sm text-gray-400">{post.author}</p>
              </div>
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Blog;
