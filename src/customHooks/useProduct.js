import { useEffect, useState } from "react";

export default function useProduct() {
  const [products, setProducts] = useState(false);
  return [products, setProducts];
}
