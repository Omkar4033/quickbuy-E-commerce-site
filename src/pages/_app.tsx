import "@/styles/globals.css";
import { useState, useEffect } from "react";
import Footer from "components/Footer";
import Navbar from "components/Navbar";
import type { AppProps } from "next/app";


export default function App({ Component, pageProps }: AppProps) {
  const [cart, setCart] = useState({});
  const [subTotal,SetSubTotal]=useState(0);

  useEffect(() => {
    try {
      if(localStorage.getItem("cart")){
        setCart(JSON.parse(localStorage.getItem("cart")))
        saveCart(JSON.parse(localStorage.getItem("cart")));
      }
      
    } catch (error) {
      console.log(error);
      localStorage.clear();
    }
  }, []);

  const saveCart = (myCart) => {
    localStorage.setItem("cart", JSON.stringify(myCart));
    let subt=0;
    let keys=Object.keys(myCart)
    for(let i=0; i<keys.length;i++)
    {
      subt+=myCart[keys[i]].price * myCart[keys[i]].qty;
    }
    SetSubTotal(subt);

  }
  const addToCart = (itemCode, qty, price, name, size, varient)=>{
    let newCart = JSON.parse(JSON.stringify(cart));
    if (itemCode in cart) {
      newCart[itemCode].qty = cart[itemCode].qty + qty;
    } else {
      newCart[itemCode] = { qty: 3, price, name, size, varient };
    }
    setCart(newCart);
    saveCart(newCart);
  }
  const clearCart = () => {
    setCart({});
    saveCart({});
  };
  const removeFromCart = (itemCode, qty, price, name, size, varient) =>{
    let newCart = JSON.parse(JSON.stringify(cart));
    if (itemCode in cart) {
      newCart[itemCode].qty = cart[itemCode].qty - qty;
    }
    if (newCart[itemCode].qty <= 0) {
      delete newCart[itemCode];
    }
    setCart(newCart);
    saveCart(newCart);
  };

  return (
 <>
      <Navbar cart={cart} key={subTotal} addToCart={addToCart} removeFromCart={removeFromCart} clearCart={clearCart} subTotal={subTotal} />
      <Component cart={cart}  addToCart={addToCart} removeFromCart={removeFromCart} clearCart={clearCart} subTotal={subTotal} {...pageProps} />
      <Footer />
    </>
  );
}
