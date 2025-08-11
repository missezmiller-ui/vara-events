// components/VaraEventsSite.jsx
import React from "react";

export default function VaraEventsSite() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-6">
      <header className="text-center mb-8">
        <h1 className="text-4xl font-bold text-gray-800">Vara Events</h1>
        <p className="text-lg text-gray-600 mt-2">
          Your gateway to discovering and attending amazing events.
        </p>
      </header>

      <main className="w-full max-w-4xl bg-white shadow-lg rounded-lg p-6">
        <h2 className="text-2xl font-semibold mb-4">Upcoming Events</h2>
        <ul className="space-y-4">
          <li className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition">
            <h3 className="text-xl font-medium">Networking Mixer</h3>
            <p className="text-gray-500">March 10, 2025 – Downtown Venue</p>
          </li>
          <li className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition">
            <h3 className="text-xl font-medium">Tech Conference</h3>
            <p className="text-gray-500">April 22, 2025 – Convention Center</p>
          </li>
        </ul>
      </main>

      <footer className="mt-8 text-gray-500">
        &copy; {new Date().getFullYear()} Vara Events. All rights reserved.
      </footer>
    </div>
  );
}
