import './css/App.css';
import Favorites from './pages/Favorites';
import Home from './pages/Home';
import { Routes, Route } from "react-router-dom"
import { MovieProvider } from './contexts/MovieContext';
import NavBar from './components/NavBar';
import MovieInfo from './pages/MovieInfo';

function App() {

  return (
    <MovieProvider>
      <NavBar/>
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/favorites" element={<Favorites />} />
          <Route path="/movie-info/:id" element={<MovieInfo/>} />
        </Routes>
      </main>
    </MovieProvider>
  );
}

export default App
