import React from "react";

const Header = () => (
  <div>
    <nav className="navbar fixed-top"  style={{'background-color': '#000'}}>
        <span className="navbar-brand"  style={{'color': '#FFF'}}>Proyecto Final / <small style={{'color': '#1abfbf'}}>Demostración de Fractales</small></span>
        <span style={{'color': '#1abfbf'}} className="navbar-text">Matemática y Lógica Básica / Universidad Cenfotec</span>
    </nav>
  </div>
);

export default Header;
