import logo from './logo.svg';
import './App.css';
import { State } from './Component/State';
import { Route, Routes, useLocation, useNavigate } from 'react-router';
import { Home } from './Component/Home';
import { ListProduct } from './Component/ListProduct';
import { Link, NavLink } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as actions from './redux/actions';
import { GETALL } from './redux/constants';

const isNavLink= ({isActive})=>({
  background: isActive? "red":"black",
  color: isActive? "black":"white"
});

function App() {
const dispatch = useDispatch()
  const {pathname} = useLocation();
  const navigate = useNavigate();
  let product = useSelector(state=>state.product);
    console.log("=>>>>>>>>", product);
    console.log("renderState");
  useEffect(()=>{
      window && window.scrollTo(0,0)
  },[pathname])
  useEffect(()=>{
    dispatch({type:GETALL})
  },[])
  return (
    <div className="App">
      <NavLink style={isNavLink}  to={"/"}>Home</NavLink>
      <br/>
      <NavLink style={isNavLink} to={"/products"}>Shop</NavLink>
      
      <Routes>
        <Route path={"/"} element={<Home/>}>
            <Route index element={<State/>}></Route>
            <Route path="/products" element={<ListProduct/>}></Route>
        </Route>
        <Route path='/admin'>

        </Route>
      </Routes>
      <button onClick={()=>navigate("/products")}>Go to Products</button>
      <button onClick={()=>dispatch(actions.changeState())}>Change State</button>
    </div>
  );
}

export default App;
