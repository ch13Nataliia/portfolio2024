// import React from 'react'
import { MdOutlinePhoneAndroid } from "react-icons/md";
import { MdOutlineMail } from "react-icons/md";

const Contact = () => {
  return (
    <>
      <div>
        <div className="container pb-8 sm:pb-0">
          {' '}
          <div className="flex flex-row gap-14 items-center justify-center">
            <div className="flex flex-col gap-4 p-10 text-3xl">
              <h2>Contact Me</h2>
              <p>I am Full Stack Developer</p>
              <p className="flex flex-row gap-2 text-lg"><MdOutlinePhoneAndroid />+07576-524-728</p>
              <p className="flex flex-row gap-2 text-xl"><MdOutlineMail />tcirulnatalya@gmail.com</p>
            </div>
            <div className="flex flex-col p-10 gap-4">
              <input
                type="text"
                className="border border-gray-800 rounded-full p-3"
                placeholder="Name"
              />
               <input
                type="email"
                className="border border-gray-800 rounded-full p-3"
                placeholder="Email"
              />
             <input
                type="text"
                className="border border-gray-800 rounded-full p-3"
                placeholder="Text"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
