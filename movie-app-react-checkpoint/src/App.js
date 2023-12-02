import './App.css';
import MovieList from './Component/MovieList';
import { Link, Routes,Route } from 'react-router-dom';
import MovieDetails from './Component/MovieDetails';


const App =()=> {
  return (
    <div className="App">
      <button><Link to="">Home</Link></button>
      <button><Link to="/moviechannel">Movie Channel</Link></button>
      
      <Routes>
        <Route exact path="/moviechannel" element={ <MovieList />} />
        <Route path="/moviechannel/:moviedId" element={ <MovieDetails />} />
      </Routes>
        
    </div>
  );
}

export default App;
