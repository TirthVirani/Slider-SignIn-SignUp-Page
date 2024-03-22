import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Components/Home.js';
import Signin from './Components/Signin.js';

const AppRoute = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/home" element={<Home></Home>} />
        <Route exact path="/signin"  element={<Signin></Signin>} />
        <Route index element={<Signin></Signin>} /> 
      </Routes>
    </Router>
  );
};

function App() {
  return (
    <div>
      <AppRoute></AppRoute>
    </div>
  )
}

export default App;
