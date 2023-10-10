import React, { useEffect, useState } from "react";


import axios from "axios";
import Navbars from "./Navbar";
import Product from "./Product/Product";

function HomePage() {
  const [products, setProducts] = useState([]);
  const url = "http://localhost:8000/post";
  const [state, setState] = useState([]);
  console.log(state,setState);
  const handleGetAxios = () => {
    axios
      .get(url)
      .then((response) => setState(response.data))
      .catch((err) => console.log(err));
  };
  console.log(state);
  useEffect(() => {
    handleGetAxios();
  },[])

  return (
    <div>
      <Navbars />
      
      <Product state={state}/>
    </div>
  );
}

export default HomePage;
