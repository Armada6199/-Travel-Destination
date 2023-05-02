import './App.css';
import Home from './components/home/Home.js';
import { Route,Routes } from 'react-router-dom';
import NavBar from './components/navbar/Navbar'
import  Footer from './components/footer/Footer'
import TourDetails from './components/TourDetails/TourDetails';
function App() {
  return (
    <>
    <NavBar/>
    <Routes>
    <Route path='/' element={<Home/>} />
    <Route path='/city/:id' element={<TourDetails/>} />
    </Routes>
    <Footer/>
    </>
  );
}

export default App;
