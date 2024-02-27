
import Header from './constants/header/Header'
import './App.css'
import FruitShope from './constants/fruitShope/FruitShope'
import Oursevice from './constants/ourservices/Ourservices'
import Fresh from './constants/fresh/Fresh'
import Testimonial from './constants/testimonial/Testimonial'
import Footer from './constants/footer/Footer'

function App() {
  return (
    <div>
      <div className='main-margin'>
      <Header/>
      <FruitShope/>

      <Oursevice/>
      <Fresh/>
<Testimonial/>

      </div>
      <Footer/>
    </div>
  );
}

export default App;
