import React, { useState } from "react";
import axios from "axios";
const ContactPage = () => {
  return (
    <div>
      <div
        style={{
          backgroundImage: "url(/contact.png)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className=" ">
          <div className="flex justify-around pt-10 flex-col lg:flex-row">
            <div className="flex flex-col items-center justify-center p-2">
              <h1 className="text-temp-100 text-6xl font-bold">Contact Us</h1>
            </div>
            <div className="m-5 md:flex md:justify-center md:flex-row">
              <form class="w-full max-w-lg bg-white p-5 rounded-xl shadow-lg">
                <div class="flex flex-wrap -mx-3 mb-6">
                  <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                    <label
                      class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                      for="grid-first-name"
                    >
                      First Name
                    </label>
                    <input
                      class="appearance-none block w-full bg-gray-200 text-gray-700  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                      type="text"
                      placeholder="Enter your First name"
                    />
                  </div>
                  <div class="w-full md:w-1/2 px-3">
                    <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                      Last Name
                    </label>
                    <input
                      class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                      type="text"
                      placeholder="Enter your Last Name"
                    />
                  </div>
                </div>
                <div class="flex flex-wrap -mx-3 mb-6">
                  <div class="w-full px-3">
                    <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                      Email
                    </label>
                    <input
                      class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                      type="email"
                      placeholder="Enter your email..."
                    />
                  </div>
                </div>
                <div class="flex flex-wrap -mx-3 mb-2">
                  <div class="w-full  px-3 mb-6 md:mb-0">
                    <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                      Roll Number
                    </label>
                    <input
                      class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                      type="text"
                      placeholder="Enter you Roll Number"
                    />
                  </div>
                </div>
                <button
                  class="shadow bg-temp-100 mt-5 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
                  type="button"
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
