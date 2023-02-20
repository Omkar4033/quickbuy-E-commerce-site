import React from "react";
import Link from "next/link";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { MdOutlineCancel } from "react-icons/md";
import { MdAddCircleOutline } from "react-icons/md";
import { HiOutlineMinusCircle } from "react-icons/hi";
import { BsBagCheck } from "react-icons/bs";

const checkout = ({cart,addToCart,removeFromCart,clearCart,subTotal}) => {
  return (
    <div className="my-6 mx-12 border-b-slate-200 rounded-md">
   
      <h1 className="font-bold inline-block  flex  text-center text-3xl text-purple-700  ">  <BsBagCheck/> Checkout</h1>
      <div className="mx-2 my-4">

      <h3 className="font-bold ">1.Delivery Details</h3>
      <div className="flex ">
        <div class="relative w-1/2 mx-2">
          <label for="Name" class="leading-7 text-sm text-gray-600">
          Name
          </label>
          <input
            type="text"
            id="Name"
            name="Name"
            class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
          />
        </div>
        <div class="relative w-1/2 mb-4">
          <label for="email" class="leading-7 text-sm text-gray-600">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
          />
        </div>
      </div>
      <div class="relative w-full mx-2">
          <label for="Address" class="leading-7 text-sm text-gray-600">
            Address
          </label>
          <textarea
            type="text"
            id="text"
            name="Address"
            class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
          />
        </div>
        <div className="flex ">
        <div class="relative w-1/2 mx-2">
          <label for="Phone" class="leading-7 text-sm text-gray-600">
          Phone
          </label>
          <input
            type="text"
            id="Phone"
            name="Phone"
            class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
          />
        </div>
        <div class="relative w-1/2 mb-4">
          <label for="city" class="leading-7 text-sm text-gray-600">
            City
          </label>
          <input
            type="text"
            id="city"
            name="city"
            class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
          />
        </div>
      </div>
      <div className="flex ">
        <div class="relative w-1/2 mx-2">
          <label for="state" class="leading-7 text-sm text-gray-600">
          State
          </label>
          <input
            type="text"
            id="state"
            name="state"
            class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
          />
        </div>
        <div class="relative w-1/2 mb-4">
          <label for="pincode" class="leading-7 text-sm text-gray-600">
            Pincode
          </label>
          <input
            type="text"
            id="pincode"
            name="pincode"
            class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
          />
        </div>
      </div>
      <h3 className="font-bold">2.Review cart itms & Pay</h3>
      <div className="my-2 bg-pink-100">
            <ol className="   flex flex-col">
            {Object.keys(cart).length===0 && <div className="">
                Your cart is Empty!
              </div>
            }
             {Object.keys(cart).map((k)=>{return <li key={k} className="flex my-3  space-x-3">
                <span>1. </span>
                <span >{cart[k].name} </span>
                <HiOutlineMinusCircle onClick={()=>{removeFromCart(k,1,cart[k].price,cart[k].name,cart[k].size,cart[k].varient)}} className="my-1 mx-6 cursor-pointer" />
                <span>{cart[k].qty}</span>
                <MdAddCircleOutline  onClick={()=>{addToCart(k,1,cart[k].price,cart[k].name,cart[k].size,cart[k].varient)}} className="my-1 cursor-pointer " />
              </li>
             }) }
            </ol>
          <div className="mx-10">
            Subtotal: ₹{subTotal}
          </div>
          </div>
          <Link href={'/order'}>
            <button 
              type="button"
              class="inline-block px-4 py-2.5   mx-2 bg-purple-500 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
            >
             Pay ₹ {subTotal}
            </button>
            </Link>
      </div>
    </div>
  );
};

export default checkout;
