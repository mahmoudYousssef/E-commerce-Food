import  { useState ,useEffect } from 'react'
import logo from '../assets/logo.png'
import Modal from './Modal';
import InputForm from './InputForm';



function Navbar() {
  const [isOpen, setIsOpen] =useState(false);
  let token = localStorage.getItem('token');
  const [isLogin , setIsLogin] = useState(token ? true : false);

  useEffect(() => {
    setIsLogin(token ? true : false);


  }, [token]);

  const checkLogin = () => {
    if (token) {
      localStorage.removeItem('token');
      localStorage.removeItem('user');
      setIsLogin(true);
      
    }
    else {
      setIsLogin(true);
    }
    setIsOpen(true)
  }
  const closeModal = () => {
    setIsOpen(false)
  }

  const handleProtectedRoute = (e) => {
    if (!isLogin) {
      e.preventDefault()
      setIsOpen(true);
    }
  }

  return (
  <>
<header>
  <nav className="navbar">
    <div className="logo">
<img src={logo} alt="Logo" />
    </div> 
<ul className="nav-links">
      <li><a href="/">Home</a></li>
      <li onClick={handleProtectedRoute} ><a href={isLogin ?"/myRecipes" : "/"}>My Recibes</a></li>
      <li onClick={handleProtectedRoute} ><a href={isLogin ?"/myFavRecipes" : "/"}>Favourites</a></li>
      <li><a href="/contact">Contact</a></li>
      <button onClick={checkLogin}>{(isLogin) ? "Logout" :"login"}</button>
</ul>
  </nav>
</header>
{isOpen && <Modal onClose={closeModal}>
<InputForm />
  </Modal>}
</>
  )
}

export default Navbar