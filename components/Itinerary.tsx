export default function Itinerary() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-green-200 p-4">
      <h1 className="font-extra-bold text-h1 text-gezgin-burgundy mt-8">
        Make your pick.
      </h1>
      <div className="mt-8 mb-8 w-full max-w-4xl bg-white p-8 rounded-3xl shadow-lg">
        <div className="grid grid-cols-3 gap-4 mb-8">
          <div className="col-span-1">
            <img src="/image1.jpg" alt="Destination 1" className="w-full h-full rounded-lg"/>
          </div>
          <div className="col-span-1">
            <img src="/image2.jpg" alt="Destination 2" className="w-full h-full rounded-lg"/>
          </div>
          <div className="col-span-1">
            <img src="/image3.jpg" alt="Destination 3" className="w-full h-full rounded-lg"/>
          </div>
          <div className="col-span-1">
            <img src="/image4.jpg" alt="Destination 4" className="w-full h-full rounded-lg"/>
          </div>
          <div className="col-span-1">
            <img src="/image5.jpg" alt="Destination 5" className="w-full h-full rounded-lg"/>
          </div>
          <div className="col-span-1">
            <img src="/image6.jpg" alt="Destination 6" className="w-full h-full rounded-lg"/>
          </div>
        </div>
        <div className="text-left">
          <h2 className="font-semibold text-xl mb-4">Itinerary name generated</h2>
          <ul className="list-disc pl-5 space-y-2">
            <li>Destination one: 08:15 - 09:15</li>
            <li>Destination two: 09:23 - 10:28</li>
            <li>Destination three: 11:10 - 12:30</li>
            <li>Destination eight: 17:30 - 18:20</li>
            <li>Destination nine: 18:20 - 19:00</li>
            <li>Destination ten: 19:30 - 21:00</li>
          </ul>
          <p className="font-semibold text-lg mt-4">2h 45m</p>
        </div>
        <div className="flex justify-center mt-8">
          <button className="bg-green-500 text-white p-3 rounded-full">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}
