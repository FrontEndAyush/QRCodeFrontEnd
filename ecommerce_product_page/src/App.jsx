import Navbar from "./components/Navbar";
import Card from "./components/Card";
import { useState } from "react";

function App() {
  let [cartShow, setCartShow] = useState(false);
  let [cartItemShow, setCartItemShow] = useState(false);
  return (
    <>
      <Navbar cartShow={cartShow} setCartShow={setCartShow}></Navbar>
      <Card cartShow={cartShow} cartItemShow = {cartItemShow} setCartItemShow = {setCartItemShow}></Card>
    </>
  );
}

export default App;
