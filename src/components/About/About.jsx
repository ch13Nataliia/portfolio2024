// import React from 'react';

const About = () => {
  return (
    <>
      <div>
        <div className="container pb-8 sm:pb-0 mt-8">
          <div>
            <h1 className="text-3xl sm:text-4xl items-center justify-center text-center">
              About me
            </h1>
          </div>
          <div className="text-md sm:text-lg items-center justify-center text-center m-3 tracking-wider">
            Hello, my name is Nataliia. I completed my 30 week bootcamp in May
            2023 with The Jump Digital School. As a Full Stack Developer I am
            passionate about building applications that connect databases and
            display them to users in different ways. With each new project, I
            like to expand my knowledge and the possibilities of using it.
          </div>
          <div className="flex items-center justify-center">
            <button
              onClick={() => {}}
              className="border border-gray-300 rounded-full p-2 bg-primary/30 hover:bg-primary hover:text-white dark:bg-yellow-500 dark:text-gray-800 dark:hover:bg-yellow-600 mb-6"
            >
              My Projects
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
