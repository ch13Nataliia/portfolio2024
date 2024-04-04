// import React from 'react'
import Shop from '../../assets/myProjects/shop.jpg';
import Cars from '../../assets/myProjects/cars.jpg';
import Recipes from '../../assets/myProjects/recipes.jpg';
import Game from '../../assets/myProjects/m-game.png';
import Beaty_shop from '../../assets/myProjects/beauty_shop.png';
import Pet_shop from '../../assets/myProjects/pet_shop.png';

import { FaGithub } from 'react-icons/fa6';
import { SiCodereview } from 'react-icons/si';

const ProjectData = [
  {
    id: 1,
    name: 'Shop app',
    img: Shop,
    title: 'React || MongoDB || Sendgrid || 0Auth || Vercel',
    linkGitHub: 'https://github.com/ch13Nataliia/shop-app',
    linkLive: 'https://shop-app-sigma.vercel.app/',
    description: `This is the final project of my bootcamp with The Jump based on
                Next.js. This app allows users to select products, pay for them
                using Stripe. Users can contact to the seller and send questions
                to the seller by using SendGrid. Users can create accounts with
                0Auth to make access to their profile. Full CRUD allows you to
                add, update, remove and query MongoDB about products. For
                display products were used Material UI and project was deploy on
                Vercel.`,
  },
  {
    id: 2,
    name: 'Recipes App',
    img: Recipes,
    title: 'React || MongoDB || Exspress || Node.js',
    linkGitHub: 'https://github.com/ch13Nataliia/first-full-stack-recipes-app',
    linkLive: 'https://first-full-stack-recipes-app-production.up.railway.app/',
    description: `This app was built with React, Nodejs. MongoDB is used to store
  data and create a model using Mongoose. The API was created
  using Express, Winston to request data. CRUD allows users to
  fetch to data, add, update, delete recipes. Material UI allows
  to dispay date for users.`,
  },
  {
    id: 3,
    name: 'Beauty Shop',
    img: Beaty_shop,
    title: 'HTML || CSS || Vercel',
    linkGitHub: 'https://github.com/ch13Nataliia/beauty-shop',
    linkLive: 'https://beauty-shop-psi.vercel.app/',
    description: `This Project buit with HTML, CSS and provided some different pages, which helping customers navigate themself on the shop`,
  },
  {
    id: 4,
    name: 'Pet Shop',
    img: Pet_shop,
    title: 'HTML || CSS || Vercel',
    linkGitHub: 'https://github.com/ch13Nataliia/beauty-shop',
    linkLive: 'https://beauty-shop-psi.vercel.app/',
    description: `This Project buit with HTML, CSS and provided some different pages, which helping customers navigate themself on the shop`,
  },
  {
    id: 5,
    name: 'Cars App',
    img: Cars,
    title: 'REACT||Vite||Material UI',
    linkGitHub: 'https://github.com/ch13Nataliia/cars-react-app',
    linkLive: 'https://cars-react-app-kappa.vercel.app/',
    description: `This is the final project of my bootcamp with The Jump based on
  Next.js. This app allows users to select products, pay for them
  using Stripe. Users can contact to the seller and send questions
  to the seller by using SendGrid. Users can create accounts with
  0Auth to make access to their profile. Full CRUD allows you to
  add, update, remove and query MongoDB about products. For
  display products were used Material UI and project was deploy on
  Vercel.`,
  },
  {
    id: 6,
    name: 'MEMORY GAME',
    img: Game,
    title: 'JAVASCRIPT || DOM || VERCEL',
    linkGitHub: 'https://github.com/ch13Nataliia/memory-game.git',
    linkLive: 'https://memory-game-eight-omega.vercel.app/',
    description: `  This app was built with React, Nodejs. MongoDB is used to store
  data and create a model using Mongoose. The API was created
  using Express, Winston to request data. CRUD allows users to
  fetch to data, add, update, delete recipes. Material UI allows
  to dispay date for users.`,
  },
];

const Projects = () => {
  const projectContainer = {
    width: '100%',
    backgroundSize: 'cover',
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
            {ProjectData.map((data) => (
              <div
                key={data.id}
                className="flex flex-col gap-3 shadow-xl p-3 rounded-md items-center"
              >
                <img
                  src={data.img}
                  style={{ width: '250px', height: '220px' }}
                />
                <h3 className="font-semibold text-3xl sm:text-4xl">
                  {data.name}
                </h3>
                <h5>{data.title}</h5>
                <p>{data.description}</p>
                <div className="flex justify-center items-center text-center gap-8">
                  <button className="border border-gray-800 p-2 rounded-full bg-primary/30">
                    <a href={data.linkGitHub}>
                      <FaGithub className="text-2xl" />
                    </a>
                  </button>
                  <button className="border border-gray-800 p-2 rounded-full bg-primary/30">
                    <a href={data.linkLive}>
                      <SiCodereview className="text-2xl" />
                    </a>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Projects;
