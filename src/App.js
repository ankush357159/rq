import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./App.css";
import { HomePage } from "./components/Home.page";
import { RQSuperHeroesPage } from "./components/RQSuperHeroes.page";
import { SuperHeroesPage } from "./components/SuperHeroes.page";

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to='/'>Home</Link>
            </li>
            <li>
              <Link to='/super-heros'>Traditional Super Heros</Link>
            </li>
            <li>
              <Link to='rq-super-heros'>RQ Super Heros</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path='/super-heros' element={<SuperHeroesPage />} />

          <Route path='/rq-super-heros' element={<RQSuperHeroesPage />} />

          <Route path='/' element={<HomePage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
