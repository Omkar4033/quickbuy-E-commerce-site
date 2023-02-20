import React, { useState, useRef } from "react";
import Image from "next/image";
import Link from "next/link";

import { AiOutlineShoppingCart } from "react-icons/ai";
import { MdOutlineCancel,MdAccountCircle } from "react-icons/md";
import { MdAddCircleOutline } from "react-icons/md";
import { HiOutlineMinusCircle } from "react-icons/hi";
import { RiSecurePaymentFill } from "react-icons/ri";


const Navbar = ({cart,addToCart,removeFromCart,clearCart,subTotal}) => {
  const [sidebar, setSidebar] = useState(false);
   const ref = useRef()
  const togglecart=()=>{

  }
  return (
    <div className="sm:h-12 h-30   flex bg-white shadow-md sticky top-0 z-10  justify-between  ">
      <div className="right flex my-1 ">
        <a href="/">
          <Image
            className="h-12 w-12 py-1  text-purple-500 bg-right object-contain"
            src="/images/logo.png"
            alt="Picture of the author"
            width={100}
            height={100}
          />
        </a>
        <ul className="md:space-x-4 sm:space-x-3 flex md:flex-row sm:flex-wrap font-bold text-purple-700 py-2 ">
          <Link href={"/tshirts"}>
            <li>T-shirts</li>
          </Link>
          <Link href={"/hoodies"}>
            <li>Hoodies</li>
          </Link>
          <Link href={"/jackets"}>
            <li>Jackets</li>
          </Link>
          <Link href={"/mugs"}>
            <li>Mugs</li>
          </Link>
        </ul>
      </div>
      <div className="cart absolute  right-0">
        <Link href={"/login"}>
          <MdAccountCircle
            className="h-14 w-6 absolute text-purple-700 right-14 "
          />
        </Link>
        <Link href={"/"}>
          <AiOutlineShoppingCart
            onClick={() => setSidebar(!sidebar)}
            className="h-14 w-6 absolute text-purple-700 right-6 "
          />
        </Link>
      </div>

      {sidebar && (
        <div  className={`w-72 z-10 h-[100vh] absolute right-0 top-0 bg-pink-100 px-8 py-10 transform
        transition-transform  ${Object.keys(cart).length !==0 ? "translate-x-0" : ""}`} >
          <div className=" absolute top-2 cursor-pointer right-4">
            <MdOutlineCancel
              onClick={() => {
                setSidebar(false);
              }}
            />
          </div>
          <h2 className="mx-14 my-8 text-base font-semibold">Shopping Cart</h2>
          <hr></hr>
          <div className="my-7">
            <ol className="mx-10  flex flex-col">
            {Object.keys(cart).length===0 && <div className="">
                Your cart is Empty!
              </div>
            }
             {Object.keys(cart).map((k)=>{return <li key={k} className="flex my-3  space-x-1.5">
                <span>1. </span>
                <span>{cart[k].name} </span>
                <HiOutlineMinusCircle onClick={()=>{removeFromCart(k,1,cart[k].price,cart[k].name,cart[k].size,cart[k].varient)}} className="my-1 cursor-pointer" />
                <span>{cart[k].qty}</span>
                <MdAddCircleOutline  onClick={()=>{addToCart(k,1,cart[k].price,cart[k].name,cart[k].size,cart[k].varient)}} className="my-1 cursor-pointer " />
              </li>
             }) }
            </ol>
          </div>
          <div className="mx-10">
            Subtotal: ₹{subTotal}
          </div>
          <div className="m-auto my-2 flex">
          <Link href={'/checkout'}>
            <button 
                
              type="button"
              class="flex space-x-2  px-4 py-2.5  mx-2 bg-purple-500 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
            >
           
          <RiSecurePaymentFill/>
              Checkout
            </button>
            </Link>
            <button
             onClick={()=>{clearCart()}}
              type="button"
              class="inline-block px-4 py-2.5 bg-purple-500 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
            >
              Clear
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
