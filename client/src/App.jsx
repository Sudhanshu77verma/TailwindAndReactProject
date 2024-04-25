import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Header from "./components/Header";
import FlashCard from "./pages/FlashCard";
import Contact from "./pages/Contact";
import FAQ from "./pages/FAQ";
export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Header></Header>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login></Login>}></Route>

          <Route path="/FlashCard" element={<FlashCard></FlashCard>}></Route>

          <Route path="/contact" element={<Contact></Contact>}></Route>
          <Route path={"/Faq"} element={<FAQ></FAQ>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}
