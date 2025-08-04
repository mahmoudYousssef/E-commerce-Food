import image_1 from '../assets/Adobe Express - file (2).png';
import "../App.css";
import AllRecipes from '../components/AllRecipes';
const Home = () => {
  return (
    <div>
      <section className='home'>
        <div className="left">
          <h1>Share Your Favorite Recipe with the World</h1>
          <p>Join our community of food lovers and share your it's a family secret ot a new creation, we want to see it!
          </p>
          <button>Share Your Recipe</button>
        </div>
          <div className="right"></div>
          <img src={image_1} alt="" width='350px' height='350px'/> 
      </section>
    
    <div className="bg">
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#ff9560" fillOpacity="1" d="M0,128L60,106.7C120,85,240,43,360,53.3C480,64,600,128,720,128C840,128,960,64,1080,37.3C1200,11,1320,21,1380,26.7L1440,32L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path></svg>
    </div>

    <AllRecipes />
    </div>
  )
}

export default Home