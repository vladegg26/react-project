import React from "react";
import { Link } from "react-router-dom";
import StarWars from "../public/StarWars.png";

function Header() {
  return (
    <div>
      <div
        style={{
          backgroundColor: "#064e9f",
          display: "flex",
          alignItems: "center",
        }}
      >
        <div>
          <img src={StarWars} style={{ height: "70px" }} />
        </div>
        <div style={{ marginLeft: 20, padding: 10 }}>
          <Link to="/" style={{ marginRight: "10px" }} className="header-link">
            Главная
          </Link>
          <Link
            to="/table"
            style={{ marginRight: "10px" }}
            className="header-link"
          >
            Таблица
          </Link>
          <Link to="/photo" className="header-link">
            Фото
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Header;
