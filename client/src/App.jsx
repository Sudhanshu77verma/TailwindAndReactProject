import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Header from "./components/Header";
import Card from "./components/Card";
import Contact from "./pages/Contact";
import FAQ from "./pages/FAQ";
import Signup from "./pages/Signup";
export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Header></Header>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login></Login>}></Route>

          <Route path="/FlashCard" element={<Card></Card>}></Route>

          <Route path="/contact" element={<Contact></Contact>}></Route>
          <Route path={"/Faq"} element={<FAQ></FAQ>}></Route>
         <Route path={'/sign-up'} element={<Signup></Signup>}></Route>
       
        </Routes>
      </BrowserRouter>
    </div>
  );
}
