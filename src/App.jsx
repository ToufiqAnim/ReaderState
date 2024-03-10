import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './components/Home';

import Navbar from './layout/navbar';
import Books from './components/Books';
import BooksDetails from './components/BooksDetails';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/books" element={<Books />}></Route>
        <Route path="/book-details/:id" element={<BooksDetails />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
