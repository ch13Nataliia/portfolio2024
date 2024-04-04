// import React from 'react'
import Book_shop from '../../assets/myProjects/book_shop.png';
import Cars from '../../assets/myProjects/cars.jpg';
import Recipes from '../../assets/myProjects/recipes.jpg';
import Game from '../../assets/myProjects/m-game.png';

import { FaGithub } from 'react-icons/fa6';
import { SiCodereview } from 'react-icons/si';

const ProjectData = [
  {
    id: 1,
    name: 'Book Shop',
    img: Book_shop,
    title: 'HTML || CSS || Vercel',
    linkGitHub: 'https://github.com/ch13Nataliia/book_shop',
    linkLive: 'https://book-shop-pi.vercel.app/',
    description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perspiciatis perferendis molestias animi sit repudiandae et similique voluptatibus? Laudantium earum maxime consequuntur nulla iste. Earum culpa in commodi. Est, ea aliquid. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolor culpa delectus placeat, quaerat sunt ullam officiis magni sint omnis blanditiis, unde atque repudiandae sequi molestiae tempora ipsum eaque iusto minus?",
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
    id: 4,
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

const New_Projects = () => {
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
            {ProjectData.map((data) => (
              <div
                key={data.id}
                className="flex flex-col gap-3 shadow-xl p-3 rounded-md"
              >
                <img src={data.img} />
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

export default New_Projects;
