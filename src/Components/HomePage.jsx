import React, { useEffect, useState } from "react";


import axios from "axios";
import Navbars from "./Navbar/Navbar";
import Product from "./Product/Product";
import Recommended from "./Recommended/Recommended";
import Sidebar from "./Sidebar/Sidebar";

function HomePage() {
  const [searchResults, setSearchResults]=useState([]);
  const url = "http://localhost:8000/product";
  const [state, setState] = useState([]);
  console.log(state,setState);
  console.log(searchResults);
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
      <Sidebar/>
      <Recommended onSearch={setSearchResults}/>
      <Product state={searchResults.length>0?searchResults:state}/>
    </div>
  );
}

export default HomePage;
