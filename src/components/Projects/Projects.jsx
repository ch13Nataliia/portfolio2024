// import React from 'react'
import Shop from '../../assets/myProjects/shop.jpg';
import Cars from '../../assets/myProjects/cars.jpg';
import Recipes from '../../assets/myProjects/recipes.jpg';
import Game from '../../assets/myProjects/m-game.png';

import { FaGithub } from 'react-icons/fa6';
import { SiCodereview } from 'react-icons/si';

const Projects = () => {
  const projectContainer = {
    width: '100%',
 
  };
  return (
    <>
      <div>
        <div className="container pb-8 sm:pb-0 dark:bg-gray-800 dark:text-white">
          <div className="text-center text-4xl m-3 p-3 capitalize ">
            <h2>projects 2023</h2>
          </div>

          <div
            className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 justify-between gap-3"
            style={projectContainer}
          >
            <div className="flex flex-col gap-3 shadow-xl p-3 rounded-md">
              <img src={Shop} />
              <h3 className="font-semibold text-3xl sm:text-4xl">Shop app</h3>
              <h5>React || MongoDB || Sendgrid || 0Auth || Vercel</h5>
              <p>
                This is the final project of my bootcamp with The Jump based on
                Next.js. This app allows users to select products, pay for them
                using Stripe. Users can contact to the seller and send questions
                to the seller by using SendGrid. Users can create accounts with
                0Auth to make access to their profile. Full CRUD allows you to
                add, update, remove and query MongoDB about products. For
                display products were used Material UI and project was deploy on
                Vercel.
              </p>
              <div className="flex justify-center items-center text-center gap-8">
                <button className="border border-gray-800 p-2 rounded-full bg-primary/30">
                  <a href="https://github.com/ch13Nataliia/shop-app"></a>
                  <FaGithub className="text-2xl" />
                </button>
                <button className="border border-gray-800 p-2 rounded-full bg-primary/30">
                  <SiCodereview className="text-2xl" />
                </button>
              </div>
            </div>

            <div className="flex flex-col gap-3 shadow-xl p-3 rounded-md" style={projectContainer}>
              <img src={Recipes} />
              <h3 className="font-semibold text-3xl sm:text-4xl">
                Recipes App
              </h3>
              <h5>React || MongoDB || Exspress || Node.js</h5>
              <p>
                This app was built with React, Nodejs. MongoDB is used to store
                data and create a model using Mongoose. The API was created
                using Express, Winston to request data. CRUD allows users to
                fetch to data, add, update, delete recipes. Material UI allows
                to dispay date for users.
              </p>
              <div className="flex  items-center text-center justify-center gap-8">
                <button className="border border-gray-800 p-2 rounded-full bg-primary/30 ">
                  <a href="https://github.com/ch13Nataliia/shop-app"></a>
                  <FaGithub className="text-2xl" />
                </button>
                <button className="border border-gray-800 p-2 rounded-full bg-primary/30">
                  <SiCodereview className="text-2xl" />
                </button>
              </div>
            </div>

            <div className="flex flex-col gap-3 shadow-xl p-3 rounded-md" style={projectContainer}>
              <img src={Cars} />
              <h3 className="font-semibold text-3xl sm:text-4xl">Cars app</h3>
              <h5>REACT||Vite||Material UI</h5>
              <p>
                This is the final project of my bootcamp with The Jump based on
                Next.js. This app allows users to select products, pay for them
                using Stripe. Users can contact to the seller and send questions
                to the seller by using SendGrid. Users can create accounts with
                0Auth to make access to their profile. Full CRUD allows you to
                add, update, remove and query MongoDB about products. For
                display products were used Material UI and project was deploy on
                Vercel.
              </p>
              <div className="flex  items-center text-center justify-center gap-8">
                <button className="border border-gray-800 p-2 rounded-full bg-primary/30 ">
                  <a href="https://github.com/ch13Nataliia/shop-app"></a>
                  <FaGithub className="text-2xl" />
                </button>
                <button className="border border-gray-800 p-2 rounded-full bg-primary/30">
                  <SiCodereview className="text-2xl" />
                </button>
              </div>
            </div>

            <div className="flex flex-col gap-3 shadow-xl p-3 rounded-md" style={projectContainer}>
              <img src={Game} />
              <h3 className="font-semibold text-3xl sm:text-4xl">
                MEMORY GAME
              </h3>
              <h5>JAVASCRIPT||DOM||VERCEL||</h5>
              <p>
                This app was built with React, Nodejs. MongoDB is used to store
                data and create a model using Mongoose. The API was created
                using Express, Winston to request data. CRUD allows users to
                fetch to data, add, update, delete recipes. Material UI allows
                to dispay date for users.
              </p>
              <div className="flex  items-center text-center justify-center gap-8">
                <button className="border border-gray-800 p-2 rounded-full bg-primary/30 ">
                  <a href="https://github.com/ch13Nataliia/shop-app"></a>
                  <FaGithub className="text-2xl" />
                </button>
                <button className="border border-gray-800 p-2 rounded-full bg-primary/30">
                  <SiCodereview className="text-2xl" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Projects;
