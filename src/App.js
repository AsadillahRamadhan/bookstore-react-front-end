import './App.css';
import Navbar from './partials/navbar';
import Carousel from './partials/carousel';

function App() {
  return (
    <div>
      <Navbar/>
      <div className='px-24 mt-4'>
        <Carousel/>
      </div>
    </div>
  );
}

export default App;
