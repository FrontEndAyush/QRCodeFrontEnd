import Navbar from "./components/Navbar";
import Card from "./components/Card";
import { useState } from "react";

function App() {
<<<<<<< HEAD
  
  let [counter, setCounter] = useState(0);
=======
>>>>>>> 26751514fbe7a3b44861bb289bad4bbb219e79ea
  let [cartShow, setCartShow] = useState(false);
  let [cartItemShow, setCartItemShow] = useState(false);
  return (
    <>
<<<<<<< HEAD
      <Navbar cartShow={cartShow} counter= {counter} setCartShow={setCartShow}></Navbar>
      <Card cartShow={cartShow} setCartShow = {setCartShow} cartItemShow = {cartItemShow} counter={counter} setCounter={setCounter} setCartItemShow = {setCartItemShow}></Card>
=======
      <Navbar cartShow={cartShow} setCartShow={setCartShow}></Navbar>
      <Card cartShow={cartShow} cartItemShow = {cartItemShow} setCartItemShow = {setCartItemShow}></Card>
>>>>>>> 26751514fbe7a3b44861bb289bad4bbb219e79ea
    </>
  );
}

export default App;
