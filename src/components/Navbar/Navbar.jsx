import DarkMode from './DarkMode';

const Menu = [
  {
    id: 1,
    name: 'Home',
    link: '/#',
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
];

const Navbar = () => {
  return (
    <>
      <div className="shadow-lg bg-white dark:bg-gray-900 dark:text-white duration-200">
        <div className="container py-3 sm:py-0">
          <div className="flex items-center justify-between">
            <div>
              <a href="#" className="font-bold text-2xl sm:text-3xl flex gap-4">
                Nataliia Tsirul
              </a>
            </div>
            {/* menu section */}
            <nav className="hidden sm:flex items-center justify-between font-semibold gap-8 ">
              <ul className=" flex  items-center font-semibold gap-4 ">
                {Menu.map((data) => (
                  <li key={data.id}>
                    <a
                      href={data.link}
                      className="inline-block py-4 px-4 hover:text-primary duration-200 transition-all duration-400"
                    >
                      {data.name}
                    </a>
                  </li>
                ))}
                {/* dropdown section */}
              </ul>
            </nav>{' '}
            <div>
              <DarkMode />
            </div>
          </div>{' '}
        </div>
      </div>
    </>
  );
};

export default Navbar;
