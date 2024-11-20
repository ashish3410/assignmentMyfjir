import React from "react";
const Footer = () => {
  return (
    <footer className="bg-gray-100 text-gray-800">
      <div className="container mx-auto py-8 px-4 md:flex md:justify-between md:items-start">
        {/* Left Section */}
        <div className="md:w-1/4 mb-6 md:mb-0 md:p-6">
          <h3 className="text-lg font-semibold mb-4">Join Ayatrio Family</h3>
          <img className='h-9 w-40' src="https://www.ayatrio.com/_next/image?url=%2Fimages%2Fayatriologo.webp&w=384&q=75" alt="Logo" />
          <p className="mt-2 mb-4 text-[17px]">
            Enjoy member-only discounts & offers, early access to Ayatrio sales, delicious gift offers, and much more. Join for free.
          </p>
          <button className="bg-black text-white px-4 py-2 rounded hover:bg-gray-800">
            Join the club
          </button>
        </div>

        {/* Middle Sections */}
        <div className=" w-3/4 grid grid-cols-2 md:grid-cols-4 font-sans gap-6 text-[17]">
          <div>
            <h3 className="text-lg font-semibold mb-4">Ayatrio Family</h3>
            <ul className=" space-y-2">
              <li><a href="#" className="hover:underline">Log in</a></li>
              <li><a href="#" className="hover:underline">Join Ayatrio Family</a></li>
              <li><a href="#" className="hover:underline">Member Offers</a></li>
              <li><a href="#" className="hover:underline">Member Workshop Events</a></li>
              <li><a href="#" className="hover:underline">Member Feedback</a></li>
              <li><a href="#" className="hover:underline">Member Login</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Service</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:underline">Delivery Service</a></li>
              <li><a href="#" className="hover:underline">Installation Service</a></li>
              <li><a href="#" className="hover:underline">Planning Service</a></li>
              <li><a href="#" className="hover:underline">Buy-Back Service</a></li>
              <li><a href="#" className="hover:underline">Click & Collect Service</a></li>
              <li><a href="#" className="hover:underline">Design Service</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Help</h3>
            <ul className=" space-y-2">
              <li><a href="#" className="hover:underline">Design & Planners</a></li>
              <li><a href="#" className="hover:underline">Financial Support</a></li>
              <li><a href="#" className="hover:underline">Gift Cards</a></li>
              <li><a href="#" className="hover:underline">Billing-payment</a></li>
              <li><a href="#" className="hover:underline">Return Policy</a></li>
              <li><a href="#" className="hover:underline">Contact us</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">About Ayatrio</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:underline">This is Ayatrio</a></li>
              <li><a href="#" className="hover:underline">Sustainability</a></li>
              <li><a href="#" className="hover:underline">Ayatrio Stores</a></li>
              <li><a href="#" className="hover:underline">Ayatrio for Business</a></li>
              <li><a href="#" className="hover:underline">Member Feedback</a></li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="bg-gray-200 py-4 mt-6">
        <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-600">© Ayatrio Furnishing · 2015–2023</p>
          <div className="flex space-x-4 mt-4 md:mt-0 ml-10">
            <a href="#" className="text-gray-600 hover:text-gray-800">
              <img className="h-10" src="https://img.icons8.com/?size=100&id=118497&format=png&color=000000" alt="" /> {/* Replace with proper icon */}
            </a>
            <a href="#" className="text-gray-600 hover:text-gray-800">
             <img className="h-10" src="https://img.icons8.com/?size=100&id=32323&format=png&color=000000" alt="" />
            </a>
            <a href="#" className="text-gray-600 hover:text-gray-800">
             <img className="h-10" src="https://img.icons8.com/?size=100&id=13963&format=png&color=000000" alt="" />
            </a>
            <a href="#" className="text-gray-600 hover:text-gray-800">
             <img className="h-10" src="https://img.icons8.com/?size=100&id=19318&format=png&color=000000" alt="" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
