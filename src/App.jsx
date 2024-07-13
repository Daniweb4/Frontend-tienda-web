import {} from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Empleado from "./pages/Empleado";
import Producto from "./pages/Producto";
import Proveedor from "./pages/Proveedor";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/empleado" element={<Empleado />} />
        <Route path="/producto" element={<Producto />} />
        <Route path="/proveedor" element={<Proveedor />} />
      </Routes>
    </>
  );
}

export default App;
