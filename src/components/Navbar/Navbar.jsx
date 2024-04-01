import DarkMode from './DarkMode';


const Menu =[
  {
    id: 1,
    name: 'Home',
    link: '/',
  },
  {
    id: 2,
    name: 'About',
    link: '/#about',
  },
  {
    id: 3,
    name: 'Skills',
    link: '/#skills',
  },
  {
    id: 4,
    name: 'Projects',
    link: '/#projects',
  },
  {
    id: 5,
    name: 'Contact',
    link: '/#contact',
  },

]
const Navbar = () => {
  return (
    <>
      <div>
        <div>
          <div>
            <div>
              <a href="#" className="font bold text-2xl sm:text-3xl flex gap-4">
                Nataliia Tsirul
              </a>
            </div>

            {/* menu section */}
            <div>
              <div>
                <DarkMode />
              </div>
              <ul>{
                Menu.map((data) => (
                  <li key={data.id}><a href={data.link}>{data.name}</a></li>
                ))
              }
                </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
