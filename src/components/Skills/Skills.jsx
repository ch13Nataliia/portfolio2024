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
    id: 2,
    img: CssLogo,
    name: 'Css',
  },

  {
    id: 10,
    img: Js_logo,
    name: 'Java script',
  },
  {
    id: 11,
    img: Html_logo,
    name: 'HTML',
  },

  {
    id: 7,
    img: ReactLogo,
    name: 'React',
  },

  {
    id: 9,
    img: Node_logo,
    name: 'Node.js',
  },

  {
    id: 1,
    img: Bootstrap,
    name: 'Bootstrap',
  },

  {
    id: 3,
    img: Docker,
    name: 'Docker',
  },
  {
    id: 4,
    img: GitHub,
    name: 'GitHub',
  },
  {
    id: 5,
    img: Railway,
    name: 'Railway',
  },
  {
    id: 6,
    img: SQLImg,
    name: 'SQL',
  },

  {
    id: 8,
    img: MongoDB_logo,
    name: 'MongoDB',
  },
];
const Skills = () => {
  const imgSize = {
    width: '100%',
    height: '250px',
    backgroundSize: 'cover',
  };
  return (
    <>
      <div>
        <div className="container pb-8 sm:pb-0">
          <div className="grid gap-4 grid-cols-3 grid-rows-3">
            {imagesLogo.map((item) => (
              <>
                <div key={item.id}>
                  <img src={item.img} style={imgSize} />
                  <div className="flex text-center items-center justify-center">
                    <p className="text-2xl font-semibold"> {item.name}</p>
                  </div>
                </div>
              </>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Skills;
