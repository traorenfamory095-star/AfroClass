import React from 'react'
import { Link } from 'react-router-dom'
import Navlinks from '../data/navlinks'

const Footer = () => {
  return (
    <footer className='px-12 py-8 bg-soft'>
      <div className='grid grid-cols-1 md:grid-cols-4 gap-6 border-b border-line pb-8'>
        <div className='md:col-span-2'>
          <h2 className='font-bold'>AfroClass <span className='text-acc font-extrabold'>.</span></h2>
          <p className='text-mut text-sm'>Des cours, des exercices corrigés et des fiches de révision réunis au même endroit, adaptés au programme guinéen.</p>
        </div>
        <div>
          <h2 className='font-bold'>Navigation</h2>
          <nav className='flex flex-col text-mut text-sm'>
              {
                  Navlinks.map((l) => (
                      <Link to={l.to} key={l.id} className='hover:text-ink'>{l.label}</Link>
                  ))
              }
          </nav>
        </div>
        <div>
          <h2 className='font-bold'>Aide</h2>
          <nav className='flex flex-col text-mut text-sm'>
              <Link to="/about hover:text-ink">Contact</Link>
              <Link to="/about hover:text-ink">Confidentialité</Link>
          </nav>
        </div>
      </div>

      <div className='flex justify-between mt-3'>
        <p>© 2025 AfroClass. Tous droits réservés.</p>
        <p><span className='text-acc mr-1'>&bull;</span>Formation & Avenir Numérique</p>
      </div>
    </footer>
  )
}

export default Footer
