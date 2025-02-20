import { useContext } from "react";
import AuthContext from "./authContext";
import {BrowserRouter as Router, Navigate, Route,  Routes } from "react-router-dom";
import Giris from "./components/Giris";
import Urun from "./components/Urun";


function App(){
  const {isLoggedIn} = useContext(AuthContext);

  return(
    <Router>
      <Routes>
        <Route path="/login" element={<Giris/>}></Route>
        <Route path="/products" element={isLoggedIn ? <Urun/> : <Navigate to="/login"/>}></Route>
        <Route path="*" element={<Navigate to="/login"/>}></Route>
      </Routes>
    </Router>
  );
}
export default App;