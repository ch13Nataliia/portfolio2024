// import React from 'react'
import { MdOutlinePhoneAndroid } from 'react-icons/md';
import { MdOutlineMail } from 'react-icons/md';

const Contact = () => {
  return (
    <>
      <div>
        <div className="container pb-8 sm:pb-0">
          {' '}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-14 items-center justify-center">
            <div className="flex flex-col gap-4 p-10 text-3xl items-center justify-center">
              <h2>Contact Me</h2>
              <p>I am Full Stack Developer</p>
              <p className="flex flex-row gap-2 text-lg">
                <MdOutlinePhoneAndroid />
                +07576-524-728
              </p>
              <p className="flex flex-row gap-2 text-xl">
                <MdOutlineMail />
                tcirulnatalya@gmail.com
              </p>
            </div>

            <div className="flex flex-col p-10 gap-4 items-center justify-center">
              <div className="">
                <div className="mt-8 max-w-md">
                  <div className="grid grid-cols-1 gap-6">
                    <label className="block">
                      <span className="text-gray-700">Full name</span>
                      <input
                        type="text"
                        className="mt-1  w-full rounded-md border-gray-500 shadow-md px-3  dark:text-black"
                        placeholder=""
                      />
                    </label>
                    <label className="">
                      <span className="text-gray-700">Email address</span>
                      <input
                        type="email"
                        className="mt-1 block w-full rounded-md border-gray-500 shadow-md px-3  dark:text-black"
                        placeholder="john@example.com"
                      />
                    </label>

                    <label className="block">
                      <span className="text-gray-700">Additional details</span>
                      <textarea
                        className="mt-1  w-full rounded-md border-gray-500 shadow-md px-3 dark:text-black "
                        rows="10"
                      ></textarea>
                    </label>
                    <button
                      onClick={() => {}}
                      className="border border-gray-300 rounded-full p-2 bg-primary/30 hover:bg-primary hover:text-white dark:bg-yellow-500 dark:text-gray-800 dark:hover:bg-yellow-600 mb-6"
                    >
                      submit
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
