import { Route, Routes } from 'react-router-dom';
import './App.css';
import HomePage from '../../supper-shoes/src/Components/HomePage';
import About from '../../supper-shoes/src/Components/About';
import Contact from '../../supper-shoes/src/Components/Contact';
import TopPage from './Components/TopPage';
import Login from './Components/Login/Login';


function App() {
  return (
    <div>
  
      <Routes>
        <Route path="/"element={<HomePage/>}></Route>
        <Route path="/about"element={<About/>}></Route>
        <Route path="/contact"element={<Contact/>}></Route>
        <Route path="/toppage"element={<TopPage/>}></Route>
        <Route path="/login"element={<Login/>}></Route>
      </Routes>
     
      {/* <TopPage/> */}
    </div>
  );
}

export default App;
