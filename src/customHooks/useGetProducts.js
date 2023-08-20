import { useEffect } from "react";
import useProduct from "./useProduct";

export default function useGetProducts(){
    const [products, setProducts] = useProduct();
    useEffect(()=>{
        fetch("https://localhost:7281/api/Product")
        .then(res => {
          if(res.ok && res.status === 200){
            return res.json()
          }
        })
        .then(data => setProducts(data))
        .catch(err => console.log(err))
      })
      return products;
}