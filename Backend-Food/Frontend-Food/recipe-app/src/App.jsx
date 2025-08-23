
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import MyRecipes from './components/MyRecipes';
import MyFavRecipes from './components/MyFavRecipes';
import AddRecipes from './components/AddRecipes';

function App() {

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' index element={<Home />} />
          <Route path='/myRecipes' element={<MyRecipes />} />
          <Route path='/myFavRecipes' element={<MyFavRecipes />} />
          <Route path='/addRecipes' element={<AddRecipes />} />

        </Routes>
      </BrowserRouter>
      <Footer />

    </>
  )
}

export default App
