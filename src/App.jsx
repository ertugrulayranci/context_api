import { BrowserRouter, Routes, Route } from "react-router-dom";
import Products from "./pages/Products";
import Ckeckout from "./pages/Ckeckout";
import Header from "./components/Header";
function App() {
  return (
    <BrowserRouter>
    <Header/>
    <Routes>
    <Route path="/" element={<Products/>}/>
    <Route path="/sepet" element ={<Ckeckout/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
