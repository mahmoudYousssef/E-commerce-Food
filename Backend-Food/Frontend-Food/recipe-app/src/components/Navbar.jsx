import { useState, useEffect } from 'react';
import logo from '../assets/logo.png';
import Modal from './Modal';
import InputForm from './InputForm';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  let token = localStorage.getItem('token');
  const [isLogin, setIsLogin] = useState(token ? true : false);

  useEffect(() => {
    setIsLogin(token ? true : false);
  }, [token]);

  const checkLogin = () => {
    if (token) {
      localStorage.removeItem('token');
      localStorage.removeItem('user');
      setIsLogin(false);
    } else {
      setIsLogin(true);
    }
    setIsOpen(true);
    // إغلاق قائمة الجوال إذا كانت مفتوحة
    if (isMobileMenuOpen) {
      setIsMobileMenuOpen(false);
    }
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  const handleProtectedRoute = (e) => {
    if (!isLogin) {
      e.preventDefault();
      setIsOpen(true);
    }
    // إغلاق قائمة الجوال بعد النقر على رابط
    if (isMobileMenuOpen) {
      setIsMobileMenuOpen(false);
    }
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      <header>
        <nav className="navbar">
          <div className="logo">
            <img src={logo} alt="Logo" />
          </div>

          {/* قائمة الجوال (هامبرجر) */}
          <div className="mobile-menu-toggle" onClick={toggleMobileMenu}>
            <span></span>
            <span></span>
            <span></span>
          </div>

          <ul className={`nav-links ${isMobileMenuOpen ? 'active' : ''}`}>
            <li><a href="/" onClick={() => setIsMobileMenuOpen(false)}>Home</a></li>
            <li onClick={handleProtectedRoute}>
              <a href={isLogin ? "/myRecipes" : "/"} onClick={() => setIsMobileMenuOpen(false)}>
                My Recipes
              </a>
            </li>
            <li onClick={handleProtectedRoute}>
              <a href={isLogin ? "/myFavRecipes" : "/"} onClick={() => setIsMobileMenuOpen(false)}>
                Favourites
              </a>
            </li>
            <li><a href="/contact" onClick={() => setIsMobileMenuOpen(false)}>Contact</a></li>
            <li className="nav-button">
              <button onClick={checkLogin}>{(isLogin) ? "Logout" : "Login"}</button>
            </li>
          </ul>
        </nav>
      </header>
      {isOpen && <Modal onClose={closeModal}>
        <InputForm />
      </Modal>}

      <style jsx>{`
        /* التنسيقات الأساسية */
        .navbar {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 1rem 2rem;
          background-color: #fff;
          box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
          position: relative;
        }
        
        .logo img {
          height: 40px;
        }
        
        /* قائمة التنقل */
        .nav-links {
          display: flex;
          list-style: none;
          margin: 0;
          padding: 0;
          align-items: center;
        }
        
        .nav-links li {
          margin: 0 15px;
        }
        
        .nav-links a {
          text-decoration: none;
          color: #333;
          font-weight: 500;
          transition: color 0.3s;
        }
        
        .nav-links a:hover {
          color: #4CAF50;
        }
        
        .nav-button button {
          background-color: #4CAF50;
          color: white;
          border: none;
          padding: 8px 16px;
          border-radius: 4px;
          cursor: pointer;
          font-weight: 500;
          transition: background-color 0.3s;
        }
        
        .nav-button button:hover {
          background-color: #45a049;
        }
        
        /* زر قائمة الجوال */
        .mobile-menu-toggle {
          display: none;
          flex-direction: column;
          cursor: pointer;
        }
        
        .mobile-menu-toggle span {
          width: 25px;
          height: 3px;
          background-color: #333;
          margin: 3px 0;
          transition: 0.3s;
        }
        
        /* التصميم المتجاوب */
        @media (max-width: 768px) {
          .mobile-menu-toggle {
            display: flex;
          }
          
          .nav-links {
            position: absolute;
            top: 100%;
            left: 0;
            width: 100%;
            background-color: #fff;
            flex-direction: column;
            align-items: center;
            padding: 1rem 0;
            box-shadow: 0 5px 10px rgba(0, 0, 0, 0.1);
            transform: translateY(-10px);
            opacity: 0;
            visibility: hidden;
            transition: all 0.3s ease;
            z-index: 1000;
          }
          
          .nav-links.active {
            transform: translateY(0);
            opacity: 1;
            visibility: visible;
          }
          
          .nav-links li {
            margin: 10px 0;
          }
          
          .navbar {
            padding: 1rem;
          }
        }
        
        @media (max-width: 480px) {
          .logo img {
            height: 32px;
          }
          
          .nav-button button {
            padding: 6px 12px;
            font-size: 14px;
          }
        }
      `}</style>
    </>
  );
}

export default Navbar;