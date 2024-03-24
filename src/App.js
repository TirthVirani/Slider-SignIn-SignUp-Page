import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Components/Home.js';
import Signin from './Components/Signin.js';
import { Component } from 'react';


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

class App extends Component {
  render(){
    return (
      <div>
        <AppRoute></AppRoute>
      </div>
    )
  }
}

export default App;
