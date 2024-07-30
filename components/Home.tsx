'use client';  // This directive ensures the component is rendered on the client side

import Link from 'next/link';

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-green-200 p-4">
      <h1 className="font-extra-bold text-h1 text-gezgin-burgundy mt-8">
        Generate your itinerary.
      </h1>
      <div className="mt-8 mb-8 w-full max-w-xl">
        <input
          type="text"
          placeholder="Where are you headed?"
          className="w-full p-3 rounded-full border border-gray-300"
        />
      </div>
      <div className="bg-gray-200 p-8 rounded-3xl shadow-lg w-full max-w-xl">
        <form className="space-y-6">
          <div className="flex flex-col space-y-2">
            <label className="font-semibold">Starting Point:</label>
            <input type="text" className="p-3 rounded-full border border-gray-300" />
          </div>
          <div className="flex flex-col space-y-2">
            <label className="font-semibold">Categories:</label>
            <div className="flex flex-wrap gap-4">
              <label className="flex items-center space-x-2">
                <input type="checkbox" className="form-checkbox rounded-full" />
                <span>Natural</span>
              </label>
              <label className="flex items-center space-x-2">
                <input type="checkbox" className="form-checkbox rounded-full" />
                <span>Historical</span>
              </label>
              <label className="flex items-center space-x-2">
                <input type="checkbox" className="form-checkbox rounded-full" />
                <span>Cultural</span>
              </label>
              <label className="flex items-center space-x-2">
                <input type="checkbox" className="form-checkbox rounded-full" />
                <span>Fill later</span>
              </label>
              <label className="flex items-center space-x-2">
                <input type="checkbox" className="form-checkbox rounded-full" />
                <span>Other</span>
              </label>
            </div>
          </div>
          <div className="flex flex-col space-y-2">
            <label className="font-semibold">Date and Time:</label>
            <input type="date" className="p-3 rounded-full border border-gray-300" />
          </div>
          <div className="flex flex-col space-y-2">
            <label className="font-semibold">Duration:</label>
            <input type="range" className="w-full rounded-full" />
            <div className="flex justify-between text-xs text-green-700">
              <span>1h</span>
              <span>24h</span>
            </div>
          </div>
          <div className="flex flex-col space-y-2">
            <label className="font-semibold">Include:</label>
            <input type="text" className="p-3 rounded-full border border-gray-300" />
          </div>
          <div className="flex flex-col space-y-2">
            <label className="font-semibold">Transportation:</label>
            <div className="flex flex-wrap gap-2">
              {/* Add your transportation buttons here */}
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <label className="font-semibold">Disabled Accessibility:</label>
            <input type="checkbox" className="form-checkbox rounded-full" />
          </div>
          <Link href="/Itinerary">
            <button type="button" className="mt-4 p-3 bg-green-500 text-white rounded-full w-full">
              Submit
            </button>
          </Link>
        </form>
      </div>
    </div>
  );
}
