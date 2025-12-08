import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState(null); // null | "error" | "success"
  const [feedback, setFeedback] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((s) => ({ ...s, [name]: value }));
  };

  const validateEmail = (email) =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim());

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus(null);
    setFeedback("");

    const { name, email, message } = form;
    if (!name.trim() || !email.trim() || !message.trim()) {
      setStatus("error");
      setFeedback("Please fill in all fields before submitting.");
      return;
    }
    if (!validateEmail(email)) {
      setStatus("error");
      setFeedback("Please enter a valid email address.");
      return;
    }

    // success — navigate to Quote page and pass name in state
    setStatus("success");
    setFeedback("Message received — redirecting...");
    // small delay so user sees confirmation (optional)
    setTimeout(() => {
      navigate("/quote", { state: { name: name.split(" ")[0] || "" } });
      // if you prefer no delay, call navigate immediately
      // navigate("/quote", { state: { name: name.split(" ")[0] || "" } });
    }, 700);
  };

  return (
    <section className="text-gray-600 body-font relative">
      <div className="container px-5 py-12 mx-auto">
        <div className="flex flex-col text-center w-full mb-8">
          <p className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900 underline underline-offset-8">
            Cancer Awareness &amp; Support
          </p>
        </div>

        <div className="lg:w-1/2 md:w-2/3 mx-auto">
          <form onSubmit={handleSubmit} className="flex flex-wrap -m-2" noValidate>
            <div className="p-2 w-1/2">
              <div className="relative">
                <label htmlFor="name" className="leading-7 text-sm text-gray-600">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  placeholder="Your full name"
                  required
                />
              </div>
            </div>

            <div className="p-2 w-1/2">
              <div className="relative">
                <label htmlFor="email" className="leading-7 text-sm text-gray-600">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  placeholder="you@example.com"
                  required
                />
              </div>
            </div>

            <div className="p-2 w-full">
              <div className="relative">
                <label htmlFor="message" className="leading-7 text-sm text-gray-600">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                  placeholder="Write a short message..."
                  required
                />
              </div>
            </div>

            <div className="p-2 w-full">
              <button
                type="submit"
                className="flex mx-auto text-white bg-gray-600 hover:bg-gray-700 border-0 py-2 px-8 focus:outline-none rounded text-lg"
              >
                Send Message
              </button>
            </div>

            {status && (
              <div className="p-2 w-full">
                <div
                  role="status"
                  aria-live="polite"
                  className={`rounded p-3 ${
                    status === "success"
                      ? "bg-green-50 border border-green-200 text-green-800"
                      : "bg-red-50 border border-red-200 text-red-800"
                  }`}
                >
                  {feedback}
                </div>
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
