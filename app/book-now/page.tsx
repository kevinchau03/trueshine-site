import React from "react";

export default function BookNowPage() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gray-50 py-12">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h1 className="text-2xl font-bold mb-6 text-center">Book Now</h1>
        <form className="space-y-4">
          <div>
            <label className="block mb-1 font-medium" htmlFor="name">
              Name
            </label>
            <input
              className="w-full border border-gray-300 rounded px-3 py-2"
              type="text"
              id="name"
              name="name"
              required
            />
          </div>
          <div>
            <label className="block mb-1 font-medium" htmlFor="email">
              Email
            </label>
            <input
              className="w-full border border-gray-300 rounded px-3 py-2"
              type="email"
              id="email"
              name="email"
              required
            />
          </div>
          <div>
            <label className="block mb-1 font-medium" htmlFor="phone">
              Phone
            </label>
            <input
              className="w-full border border-gray-300 rounded px-3 py-2"
              type="tel"
              id="phone"
              name="phone"
            />
          </div>
          <div>
            <label className="block mb-1 font-medium" htmlFor="message">
              Message
            </label>
            <textarea
              className="w-full border border-gray-300 rounded px-3 py-2"
              id="message"
              name="message"
              rows={4}
            />
          </div>
          <button
            type="submit"
            className="w-full bg-primary text-white py-2 rounded font-semibold hover:bg-blue-700 transition"
          >
            Submit
          </button>
        </form>
      </div>
    </section>
  );
}