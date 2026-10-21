import { Link } from 'react-router-dom'
import ReviewCard from '../components/ReviewCard'
import cours from '../data/cours'
import matiere from '../data/matiere'
import MatiereCard from '../components/MatiereCard'
import CourseCard from '../components/CourseCard'

const Home = () => {
  return (
    <div>
      <main className='pb-8 px-4 md:px-10'>
        <section className='grid grid-cols-1 lg:grid-cols-2 gap-8 items-center'>
          <div className='min-w-0'>
            <p className='bg-card py-1 px-2 font-semibold text-xs rounded-lg inline-block'>
              <span className='text-acc mr-1'>&bull;</span>Plateforme panafricaine
            </p>
            <h1 className='flex flex-col text-4xl md:text-6xl font-bold mt-6 gap-2'>
              <span>Apprenez.</span>
              <span>Progressez.</span>
              <span>Construisez votre avenir.</span>
            </h1>
            <p className='max-w-xl text-mut text-lg font-medium my-4'>
              Cours, exercices corrigés et fiches de révision adaptés à votre programme, réunis au même endroit.
            </p>
            <div className='flex flex-col sm:flex-row gap-2 mt-3'>
              <Link to="/cours" className="bg-acc text-white py-3 px-4 rounded-xl font-bold">Explorer les cours</Link>
              <Link to="/about" className="bg-card py-3 px-4 rounded-xl font-bold">En savoir plus</Link>
            </div>
          </div>

          <div className='min-w-0 bg-pri px-4 md:px-8 py-6 rounded-4xl'>
            <p className='mb-4 font-semibold text-mut'>Aujourd'hui, à réviser</p>
            {cours.slice(0, 3).map((c) => (
              <ReviewCard key={c.id} cours={c} />
            ))}
          </div>
        </section>

        <section className='mt-25'>
          <h1 className='text-center text-3xl font-bold mb-4'>Exporez par matière</h1>
          {
            <div className='grid grid-cols-2 lg:grid-cols-5 gap-4'>
              {matiere.map((mat) => <MatiereCard key={mat.id} matiere={mat}/>)}
            </div>
          }
        </section>

        <section className='mt-25'>
          <h1 className='text-center text-3xl font-bold mb-4'>Cours à la une</h1>
          {
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4'>
              {
                cours.slice(0,4).map((c) => (
                  <CourseCard key={c.id} cours={c}/>
                ))
              }
            </div>
          }
        </section>
      </main>
    </div>
  )
}

export default Home
