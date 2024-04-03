// import React from 'react'
import Photo from '../../assets/my_cv_photo1.jpg';
import { FaGithub } from 'react-icons/fa6';
import { FaLinkedin } from 'react-icons/fa';
import { FaFacebook } from 'react-icons/fa';
import { FaWhatsapp } from 'react-icons/fa';

const Hero = () => {
  return (
    <>
      <div>
        <div className="container pb-8 sm:pb-0 shadow-lg mt-8">
          {' '}
          <div className="grid grid-cols-1 sm:grid-cols-2">
            <div
              className="text-3xl flex flex-col justify-center gap-4 pt-12 sm:pt-0 text-center sm:text-left order-2 sm:order-1
            "
            >
              <h1
                data-aos="zoom-out"
                data-aos-duration="600"
                className="text-center "
              >
                Hi
              </h1>
              <h2
                data-aos="zoom-out"
                data-aos-duration="500"
                className="text-center"
              >
                my name Nataliia
              </h2>
              <h className="text-center">and I am</h>
              <p
                data-aos="slide-up"
                data-aos-duration="500"
                data-aos-delay="100"
                className="text-center bg-primary-800 p-3"
              >
                Full Stack Developer with project on {}
                <span className="text-primary dark:text-yellow-300">
                  React, Node.js
                </span>{' '}
                etc.
              </p>

              <div className="flex items-center justify-between p-10">
                <a className="shadow-xl hover:shadow-orange-300 rounded-full">
                  <FaGithub />
                </a>
                <a className="shadow-xl hover:shadow-orange-300 rounded-full">
                  <FaLinkedin />
                </a>
                <a className="shadow-xl hover:shadow-orange-300 rounded-full">
                  <FaFacebook />
                </a>
                <a className="shadow-xl hover:shadow-orange-300 rounded-full">
                  <FaWhatsapp />
                </a>
              </div>
              <div className="flex items-center justify-center text-sm">
            <button
              onClick={() => {}}
              className="border border-gray-300 rounded-full p-2 bg-primary/30 hover:bg-primary hover:text-white dark:bg-yellow-500 dark:text-gray-800 dark:hover:bg-yellow-600"
            >
              More About Me
            </button>
          </div>
            </div>
            <div>
              <img src={Photo} className="rounded-md object-cover p-8" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
