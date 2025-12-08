import React from "react";
import { useLocation, Link } from "react-router-dom";

const Quote = () => {
  const location = useLocation();
  const name = location.state?.name || "";

  // Builds the correct URL depending on the Vite base (works for local dev and GitHub Pages)
  const bannerUrl = `${import.meta.env.BASE_URL}assets/cancer-banner.webp`;

  return (
    <main className="min-h-screen">
      <header
        className="w-full bg-center bg-cover flex items-center justify-center"
        style={{
          backgroundImage: `url(${bannerUrl})`,
          minHeight: "70vh",
        }}
        role="img"
        aria-label="Banner showing cancer support image"
      >
        <div className="bg-black/40 w-full h-full flex items-center justify-center">
          <div className="max-w-3xl text-center py-16 px-6">
            <h1 className="text-white text-3xl sm:text-4xl font-bold mb-3">
              Cancer Awareness & Support
            </h1>
            {name && (
              <p className="text-white/90 mb-4">Thank you for reaching out, {name}.</p>
            )}
            <p className="text-white/90">
              “There's always hope beyond what you see. It's possible not just to survive,
              but to thrive and to live a healthy, wonderful life again.”
            </p>
          </div>
        </div>
      </header>

      <section className="max-w-3xl mx-auto p-6 text-center">
        <h3 className="text-xl font-semibold mb-4">Inspiration & Hope</h3>
        <p className="text-gray-700">“Life is 10% what happens to us and 90% how we react to it.”</p>

        <div className="mt-8">
          <Link to="/" className="inline-block bg-indigo-600 text-white px-6 py-2 rounded-lg">
            Back to Home
          </Link>
        </div>
      </section>
    </main>
  );
};

export default Quote;
