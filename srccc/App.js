import './App.css';
import axios from "axios";
// import .env from ".dotenv";

// Routers
import {Routes, Route} from "react-router-dom";

// React Slick CSS
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

// Pages
import PlayPage from './pages/Play.page';
import MoviePage from './pages/Movie.page';
import HomePage from './pages/Home.page';

axios.defaults.baseURL = "https://api.themoviedb.org/3";
axios.defaults.params ={};
axios.defaults.params["api_key"] = process.env.REACT_APP_API_KEY;

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage/>} />
      <Route path="/movie/:id" element={<MoviePage />} />
      <Route path="/plays" element={<PlayPage />} />
    </Routes>
  );
}

export default App;
