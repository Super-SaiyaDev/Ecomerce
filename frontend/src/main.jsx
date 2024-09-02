import React from "react";
import ReactDOM from "react-dom/client";
import Path from "./router/router";
import '../src/css/main.css'
// index.js o App.js
import 'leaflet/dist/leaflet.css'; // Importar estilos de Leaflet


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Path />
  </React.StrictMode>
);
