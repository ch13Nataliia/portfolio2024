// import React from 'react'
import Bootstrap from '../../assets/mySkills/bootstrap.jpg';
import CssLogo from '../../assets/mySkills/css-logo.png';
import Docker from '../../assets/mySkills/docker.png';
import GitHub from '../../assets/mySkills/gitHub-logo.png';
import Railway from '../../assets/mySkills/railway.png';
import SQLImg from '../../assets/mySkills/sql-logo.png';
import ReactLogo from '../../assets/mySkills/react-logo.png';
import Node_logo from '../../assets/mySkills/node-logo.png';
import MongoDB_logo from '../../assets/mySkills/mongoDB-logo.png';
import Js_logo from '../../assets/mySkills/js-logo.png';
import Html_logo from '../../assets/mySkills/html-logo.png';

const imagesLogo = [
  {
    id: 1,
    img: CssLogo,
    name: 'Css',
  },

  {
    id: 2,
    img: Js_logo,
    name: 'Java script',
  },
  {
    id: 3,
    img: Html_logo,
    name: 'HTML',
  },

  {
    id: 4,
    img: ReactLogo,
    name: 'React',
  },

  {
    id: 5,
    img: Node_logo,
    name: 'Node.js',
  },

  {
    id: 6,
    img: Bootstrap,
    name: 'Bootstrap',
  },

  {
    id: 7,
    img: Docker,
    name: 'Docker',
  },
  {
    id: 8,
    img: GitHub,
    name: 'GitHub',
  },
  {
    id: 9,
    img: Railway,
    name: 'Railway',
  },
  {
    id: 10,
    img: SQLImg,
    name: 'SQL',
  },

  {
    id: 11,
    img: MongoDB_logo,
    name: 'MongoDB',
  },
];
const Skills = () => {
  const imgSize = {
    width: '100%',
  };
  return (
    <>
      <div>
        <div className="container pb-8 sm:pb-0  ">
          <div>
            <h1 className="text-3xl sm:text-4xl text-center m-5">My Skills</h1>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 ">
            {imagesLogo.map((item) => (
              <div key={item.id} className="shadow-md rounded-lg">
                <img src={item.img} style={imgSize} />
                <div className="flex text-center items-center justify-center">
                  <p className="text-2xl font-semibold"> </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Skills;
