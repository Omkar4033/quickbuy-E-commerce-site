import React from "react";
import Product from "../../Models/Product";
import connectDb from "../../Middleware/mongoose";
import mongoose from "mongoose";

const tshirts = ({products}) => {
  return (
    <div>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-8 mx-auto">
          <div className="flex flex-wrap mx-8">
            {products.map((item)=>{
            return <div key={item._id} className="lg:w-1/5 md:w-1/2 p-4 w-full mx-3 shadow-lg">
              <a
                href={'/product/${item.slug}'}
                className="block relative h-56 rounded overflow-hidden"
              >
                <img
                  alt="ecommerce"
                  className="object-contain object-top  w-full h-full block"
                  src="https://m.media-amazon.com/images/I/41NqGFo+JfL._UX679_.jpg"
                />
              </a>
              <div className="mt-4">
                <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
                  {item.category}
                </h3>
                <h2 className="text-gray-900 title-font text-lg font-medium">
                  {item.title}
                </h2>
                <p className="mt-1">{item.price}</p>
              </div>
            </div>
            })}
          </div>
        </div>
      </section>
    </div>
  );
};

export async function getServerSideProps() {
  if(!mongoose.connections[0].readyState){
    await mongoose.connect(process.env.MONGO_URI);
  }
  let products= await Product.find({category:"tshirts"});

  // Pass data to the page via props
  return {
     props: {products: JSON.parse(JSON.stringify(products)) },
     }
}

export default tshirts;
