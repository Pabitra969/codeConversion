import React from 'react'
import Header from './sections/Header'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from './pages/About';
import Contact from './pages/Contact';
import Convertion from './pages/Convertion';

const App = () => {
  return (
		<Router>
			<Header />
			<Routes>
				<Route path="/home" element={<Home />} />
				<Route path="/about" element={<About />} />
				<Route path="/contact" element={<Contact/>} />
				<Route path="/convert" element={<Convertion/>} />
			</Routes>
		</Router>
	);
}

export default App