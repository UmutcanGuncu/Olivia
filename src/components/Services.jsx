import { useEffect, useState } from "react";
import useProduct from "../customHooks/useProduct";
import useGetProducts from "../customHooks/useGetProducts";

export default function Services() {
  const products = useGetProducts()
  return (
    <>
     <div className="container mt-3 ps-4">
      <div className="row">
    {products && products.map(product =>(
     
        <div className="card mx-1 my-1" id="example" key={product.id} style={{ width: 18 + "rem" }}>
          <input type="hidden" value={product.id}></input>
          <img className="card-img-top py-2 w-100" src={product.imageUrl} alt="Card image cap" />
          <div className="card-body">
            <h5 className="card-title ">{product.title}</h5>
            <p className="card-text ">
              {product.description}
            </p>
            <a href="#" className="btn btn-primary">
              Go somewhere
            </a> 
          </div>
        </div>
       
    ) )}
    </div>
    </div>
      
    </>
  );
}
