import './App.css';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import ListBeers from './pages/ListBeers';
import NewBeer from "./pages/NewBeer";
import RandomBeer from "./pages/RandomBeer"
import SingleBeer from "./pages/SingleBeer"

function App() {
  return (
    <div className="App">
      <Header />

      <Routes>

        <Route path="/" element={<Home />} />
        <Route path="/listbeers" element={<ListBeers />} />
        <Route path="/newbeer" element={<NewBeer />} />
        <Route path="/randombeer" element={<RandomBeer />} />
        <Route path="/beer/:id" element={<SingleBeer />} />
      </Routes>

    </div>
  );
}

export default App;
