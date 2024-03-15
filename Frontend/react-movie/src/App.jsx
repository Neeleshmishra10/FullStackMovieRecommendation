import { useState } from 'react'

import './App.css'
import Footer from "./component/Footer"
import Home from './pages/Home'
import MovieDetails from './pages/MovieDetails'
import Nav from './component/Nav'
import { Route , Routes, BrowserRouter} from 'react-router-dom'
import AddMovie from './pages/AddMovie'
import AddReview from './pages/AddReview'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
        
        <BrowserRouter>
        <Nav/>
          <Routes>


            <Route path='/' element={<Home></Home>}>
            </Route>


            <Route path='/details' element={<MovieDetails/>}/>
            <Route path='/add-movie' element={<AddMovie/>}/>
            <Route path='/add-review' element={<AddReview/>}/>

          </Routes>
          </BrowserRouter>
       <Footer></Footer>


    </>
  )
}

export default App
