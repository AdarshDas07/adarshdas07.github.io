import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';

const navLinks = [
  { path: '/projects', name: 'Projects' },
  { path: '/research', name: 'Research' },
  { path: '/awards', name: 'Achievements' },
];

const Layout: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const location = useLocation(); // Get current location
  const currentPath = location.pathname;

  const activeLinkClass = 'text-black font-semibold';
  const inactiveLinkClass = 'text-gray-500 hover:text-black';

  return (
    <>
      <header className="bg-white border-b border-gray-200 sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16">
                <div className="text-xl font-bold tracking-tight text-gray-900">
                  {/* Changed NavLink to a standard 'a' tag to force reload */}
                  <a href="/">Adarsh Das' Academic Portfolio</a>
                </div>
                <nav className="hidden md:flex items-center space-x-8">
                {navLinks.map((link) => (
                    // Changed NavLink to 'a' tag and manually check for active path
                    <a
                      key={link.name}
                      href={link.path}
                      className={
                        `${currentPath === link.path ? activeLinkClass : inactiveLinkClass} transition-colors duration-200`
                      }
                    >
                      {link.name}
                    </a>
                ))}
                </nav>
                <div className="md:hidden">
                <button onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="Open menu">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
                    </svg>
                </button>
                </div>
            </div>
        </div>

        {isMenuOpen && (
            <nav className="md:hidden bg-white border-t border-gray-200">
            <ul className="flex flex-col">
                {navLinks.map((link) => (
                <li key={link.name}>
                    {/* Changed NavLink to 'a' tag for the mobile menu as well */}
                    <a
                        href={link.path}
                        onClick={() => setIsMenuOpen(false)}
                        className={
                        `block py-3 px-4 text-base font-medium ${currentPath === link.path ? 'bg-gray-100 text-black font-semibold' : 'text-gray-600 hover:bg-gray-50'}`
                        }
                    >
                        {link.name}
                    </a>
                </li>
                ))}
            </ul>
            </nav>
        )}
      </header>

      <main>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Outlet />
          </div>
      </main>
    </>
  );
};

export default Layout;
