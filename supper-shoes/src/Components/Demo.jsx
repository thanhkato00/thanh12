import React, { useEffect, useState } from "react";
import axios from "axios";
function Demo() {
  //axios là một thư viện của js
  //tương tự fetch giúp người dùng gửi các yêu cầu http lên server
  const url = "http://localhost:8000/post";
  const [state, setState] = useState([]);
  console.log(state,setState);
  const handleGetAxios = () => {
    axios
      .get(url)
      .then((response) => setState(response.data))
      .catch((err) => console.log(err));
  };
  useEffect(() => {
    handleGetAxios();
  },[])
  const person = {
    name: "John",
    age: 34,
    address: "America",
    phone: "133132411",
  };
  const handlePostAxios = () => {
    axios
      .post(url, person)
      .then((response) => console.log(response.data))
      .catch((err) => console.log(err));
  };
  const adperson = {
    name: "John",
    age: 14,
    address: "America",
    phone: "133132411",
  };
  const handlePutAxios = () => {
    axios
      .put(url + "/7", adperson)
      .then((response) => console.log(response.data))
      .catch((err) => console.log(err));
  };
  const pathperson = {
    name: "Kung",
    age: 14,
    address: "America",
    phone: "133132411",
  };
  const handlePathAxios = () => {
    axios
      .patch(url + "/7", pathperson)
      .then((response) => console.log(response.data))
      .catch((err) => console.log(err));
  };
  const handleDelAxios = () => {
    axios
      .delete(url + "/7")
      .then((response) => console.log(response.data))
      .catch((err) => console.log(err));
  };
  return (
    <div>
      <h1>Demo Axios</h1>
      <button onClick={()=>handleGetAxios}>Get Axios</button>
      <button onClick={handlePostAxios}>Post Axios</button>
      <button onClick={handlePutAxios}>Put Axios</button>
      <button onClick={handlePathAxios}>Path Axios</button>
      <button onClick={handleDelAxios}>Del Axios</button>
      <table>
        <thead>
          <tr>
            <th>stt</th>
            <th>brand</th>
            <th>name</th>
            <th>price</th>
            <th>image</th>
          </tr>

        </thead>
        <tbody>
          {state.map((item, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{item.title}</td>
              <td>{item.name}</td>
              <td>{item.price}</td>
              <td><img src={item.url} alt="" srcset="" width="100px" height="100px"/></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Demo;
