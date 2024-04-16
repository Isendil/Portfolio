import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Header } from "./components/Header/Header.js";
import { Footer } from "./components/Footer/Footer.js";
import { HomePage } from "./pages/HomePage/HomePage.js";
// import { Navigate } from "react-router-dom";
import "./App.scss";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Footer />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/HomePage" element={<HomePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
