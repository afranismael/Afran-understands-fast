import React from "react";

export default function AfranMethod() {
  const books = [
    {
      title: "The Afran Method",
      description:
        "A guide to understanding difficult topics faster using simple mental frameworks.",
    },
    {
      title: "Think Before Others",
      description:
        "Strategies for improving critical thinking, problem solving, and decision making.",
    },
    {
      title: "The Speed of Understanding",
      description:
        "Techniques for learning new skills efficiently and retaining knowledge for the long term.",
    },
  ];

  const principles = [
    "Understand instead of memorize",
    "Connect new information to existing knowledge",
    "Ask powerful questions",
    "Learn through teaching",
    "Practice deliberate thinking",
  ];

  return (
    <div className="bg-black text-white min-h-screen">
      {/* Hero /}
      <section className="min-h-screen flex flex-col justify-center items-center text-center px-6 bg-gradient-to-b from-blue-950 to-black">
        <h1 className="text-6xl md:text-8xl font-bold text-yellow-400">
          The Afran Method
        </h1>

        <p className="text-xl mt-4 text-gray-300">
          Understanding Faster. Learning Smarter. Thinking Deeper.
        </p>

        <p className="max-w-3xl mt-8 text-lg text-gray-400">
          Afran has developed a unique way of understanding complex ideas
          quickly and turning knowledge into practical results.
        </p>

        <button className="mt-8 px-8 py-4 rounded-xl bg-yellow-500 text-black font-bold hover:scale-105 transition">
          Explore The Method
        </button>
      </section>

      {/ About /}
      <section className="py-24 px-8 max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-yellow-400 mb-8">
          About Afran
        </h2>

        <div className="backdrop-blur-lg bg-white/5 border border-white/10 rounded-3xl p-8">
          <p className="text-gray-300 leading-8">
            Afran is driven by curiosity and a passion for learning.
            Instead of relying on memorization, he focuses on patterns,
            connections, and deep understanding. His goal is to break
            difficult concepts into simple ideas that anyone can understand.
          </p>
        </div>
      </section>

      {/ Books /}
      <section className="py-24 px-8 bg-blue-950/20">
        <h2 className="text-4xl font-bold text-center text-yellow-400 mb-12">
          Featured Books
        </h2>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {books.map((book) => (
            <div
              key={book.title}
              className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-3xl p-8 hover:scale-105 transition"
            >
              <h3 className="text-2xl font-bold text-yellow-400">
                {book.title}
              </h3>

              <p className="text-gray-300 mt-4">
                {book.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/ Principles /}
      <section className="py-24 px-8 max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-yellow-400 mb-12">
          Learning Principles
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          {principles.map((item) => (
            <div
              key={item}
              className="bg-white/5 border border-white/10 rounded-2xl p-6"
            >
              {item}
            </div>
          ))}
        </div>
      </section>

      {/ Digital Products /}
      <section className="py-24 px-8 bg-blue-950/20">
        <h2 className="text-4xl font-bold text-center text-yellow-400 mb-12">
          Digital Products
        </h2>

        <div className="grid md:grid-cols-5 gap-6 max-w-7xl mx-auto">
          {[
            "Learning Guides",
            "Study Systems",
            "Productivity Templates",
            "Thinking Frameworks",
            "E-books",
          ].map((product) => (
            <div
              key={product}
              className="bg-white/5 rounded-2xl p-6 text-center"
            >
              {product}
            </div>
          ))}
        </div>
      </section>

      {/ Achievements /}
      <section className="py-24 px-8 max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-yellow-400 mb-12">
          Achievements
        </h2>

        <div className="grid md:grid-cols-5 gap-6">
          {[
            "Fast Learner",
            "Creative Thinker",
            "Knowledge Explorer",
            "Problem Solver",
            "Future Author & Entrepreneur",
          ].map((item) => (
            <div
              key={item}
              className="bg-white/5 rounded-2xl p-6 text-center"
            >
              {item}
            </div>
          ))}
        </div>
      </section>

      {/ Testimonials /}
      <section className="py-24 px-8 bg-blue-950/20">
        <h2 className="text-4xl text-center font-bold text-yellow-400 mb-12">
          Testimonials
        </h2>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <div className="bg-white/5 p-6 rounded-2xl">
            "Afran's method changed how I learn."
          </div>

          <div className="bg-white/5 p-6 rounded-2xl">
            "Complex topics became much easier."
          </div>

          <div className="bg-white/5 p-6 rounded-2xl">
            "A practical system for deep understanding."
          </div>
        </div>
      </section>

      {/ Blog /}
      <section className="py-24 px-8 max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-yellow-400 mb-12">
          Blog
        </h2>

        <div className="grid md:grid-cols-5 gap-6">
          {[
            "Learning Faster",
            "Building Intelligence",
            "Productivity",
            "Memory Techniques",
            "Personal Growth",
          ].map((article) => (
            <div
              key={article}
              className="bg-white/5 rounded-2xl p-6"
            >
              {article}
            </div>
          ))}
        </div>
      </section>

      {/ Contact /}
      <section className="py-24 px-8 bg-blue-950/20">
        <h2 className="text-4xl text-center font-bold text-yellow-400 mb-12">
          Contact
        </h2>

        <form className="max-w-xl mx-auto flex flex-col gap-4">
          <input
            placeholder="Your Email"
            className="p-4 rounded-xl bg-white/10"
          />

          <textarea
            placeholder="Message"
            rows="5"
            className="p-4 rounded-xl bg-white/10"
          />

          <button className="bg-yellow-500 text-black font-bold p-4 rounded-xl">
            Send Message
          </button>
        </form>
      </section>

      {/ Footer */}
      <footer className="py-8 text-center border-t border-white/10 text-gray-400">
        The Afran Method © 2026 — Learning Without Limits.
      </footer>
    </div>
  );
}
