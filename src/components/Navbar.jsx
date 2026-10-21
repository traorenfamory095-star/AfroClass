import { NavLink, Link } from 'react-router-dom'
import Logo from '../assets/logo.png'
import Navlinks from '../data/navlinks'
import { useState } from 'react'
import { Menu, X } from 'lucide-react'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const IconMenu = isOpen ? X : Menu

  const closeMenu = () => setIsOpen(false)

  return (
    <header className='fixed top-0 left-0 z-50 w-full backdrop-blur-2xl py-2.5 bg-card/80 border-b border-line'>
      <div className='flex justify-between items-center px-6 gap-4'>
        <Link to="/" className='w-40 shrink-0' onClick={closeMenu}>
          <img src={Logo} alt="Logo AfroClass" className='w-full' />
        </Link>

        <nav className='hidden md:flex gap-4'>
          {Navlinks.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              end={l.to === '/'}
              className={({ isActive }) =>
                isActive ? 'text-head font-bold' : 'text-mut hover:text-ink'
              }
            >
              {l.label}
            </NavLink>
          ))}
        </nav>

        <div className="flex items-center gap-2 shrink-0">
          <Link to="/connexion" className="hidden sm:inline text-sm font-semibold text-mut hover:text-head px-3 py-2">
            Connexion
          </Link>
          <Link to="/cours" className="text-sm font-bold bg-acc text-white px-4 py-2 rounded-xl">
            Commencer
          </Link>
          <button
            type="button"
            className='md:hidden'
            aria-label={isOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
            aria-expanded={isOpen}
            onClick={() => setIsOpen((prev) => !prev)}
          >
            <IconMenu />
          </button>
        </div>
      </div>

      {isOpen && (
        <nav className='flex flex-col md:hidden gap-4 px-6 border-t py-4 mt-2 border-line'>
          {Navlinks.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              end={l.to === '/'}
              onClick={closeMenu}
              className={({ isActive }) =>
                isActive ? 'text-head font-bold' : 'font-bold text-mut hover:text-ink'
              }
            >
              {l.label}
            </NavLink>
          ))}
          <NavLink
            to="/connexion"
            onClick={closeMenu}
            className="sm:hidden font-bold text-mut hover:text-ink"
          >
            Connexion
          </NavLink>
        </nav>
      )}
    </header>
  )
}

export default Navbar