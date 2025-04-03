import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import SearchMovies from './components/SearchMovie';
import ShowMovie from './components/ShowMovie';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/movies" />} />
        <Route path="/movies" element={<SearchMovies />} />
        <Route path="/movies/:id" element={<ShowMovie />} />
      </Routes>
    </Router>
  );
}

export default App