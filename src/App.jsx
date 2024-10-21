import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import "./App.css";
import NavbarComponent from "./components/NavbarComponent";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Catalogo from "./pages/Catalogo/Catalogo";

function App() {
  return (
    <>
      <BrowserRouter>
        <NavbarComponentWrapper />
        <Routes>
          <Route path="/" element={<Catalogo />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

function NavbarComponentWrapper() {
  const location = useLocation();

  const hideNavbarRoutes = ["/"];

  return !hideNavbarRoutes.includes(location.pathname) ? (
    <NavbarComponent />
  ) : (
    <Header />
  );
}


export default App;
