import Layout from '../components/Layout'
import { Routes, Route } from 'react-router-dom'
import Home from '../pages/Home'
import Cours from '../pages/Cours'
import About from '../pages/About'
import Login from '../pages/Login'
import Page404 from '../pages/Page404'
import DetailCours from '../pages/DetailCours'

const AppRouter = () => {
  return (
    <div>
      <Routes>
        <Route element={<Layout />}>
          <Route path='/' element={<Home />}/>
          <Route path='/cours' element={<Cours />}/>
          <Route path='detailcours/:id' element={<DetailCours />}/>
          <Route path='/about' element={<About />}/>
        </Route>
        <Route path='/login' element={<Login />}/>
        <Route path='*' element={<Page404 />}/>
      </Routes>
    </div>
  )
}

export default AppRouter
