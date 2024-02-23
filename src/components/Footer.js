import { Link } from "react-router-dom";
import StarWars from "../public/StarWars.png";
function Footer(props) {
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
          <Link
            to="/contacts"
            style={{ marginRight: "10px" }}
            className="footer-link"
          >
            Контакты
          </Link>
        </div>
      </div>
    </div>
  );
}
export default Footer;
