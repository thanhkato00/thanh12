import { Route, Routes } from 'react-router-dom';
import './App.css';
import HomePage from '../../supper-shoes/src/Components/HomePage';
import About from '../../supper-shoes/src/Components/About';
import Contact from '../../supper-shoes/src/Components/Contact';


function App() {
  return (
    <div>
  
      <Routes>
        <Route path="/"element={<HomePage/>}></Route>
        <Route path="/about"element={<About/>}></Route>
        <Route path="/contact"element={<Contact/>}></Route>
      </Routes>
     
    </div>
  );
}

export default App;
