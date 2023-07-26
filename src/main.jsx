import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { SepetProvider } from "./contexts/sepetContext.jsx";
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* Porivideri yanı sağlayıcıyı bütün uygulamayı saracak şekilde konumlandırıyoruz. Böylece uygulamanın içindeki tüm bileşenler sağlayıcı tarafından 
    sunulan verilere erişebilecek. */}
    <SepetProvider>
      <App />
    </SepetProvider>
  </React.StrictMode>
);
