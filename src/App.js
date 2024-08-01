
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ShoppingCart from "./ShoppingCart";
import ItemDetails from "./ItemDetails";
import Navbar from "./Navbar";


function App() {
  return (
    <Router>
       <Navbar/>
    <Routes>
      <Route path="/" element={<ShoppingCart />} />
      <Route path="/item" element={<ItemDetails />} />
    </Routes>
  </Router>
  );
}

export default App;
