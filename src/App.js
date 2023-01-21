import { Route,Routes } from "react-router-dom";
import './App.css';
import Cart from "./Components/Cart/Cart";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import HomeContent from "./Components/Home/HomeContent";
import Login from "./Components/Login/Login";
import Register from "./Components/Login/Register";
import ProductDetails from "./Components/Products/ProductDetails";
function App() {
  return (
   <>
   <Header/>
     <Routes>
        <Route path="/" element={<HomeContent/>} />
        <Route path='home' element={<HomeContent/>}></Route>
        <Route path='register' element={<Register/>}></Route>
        <Route path='login' element={<Login/>}></Route>
        <Route path='/product/:productId' element={<ProductDetails/>}></Route>
        <Route path='cart' element={<Cart/>}></Route>
      </Routes>
      <Footer/>
   </>
  );
}

export default App;
