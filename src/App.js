import "./App.css";
import { Row, Col } from "antd";
import Header from "./components/Header";
import Content from "./components/Content";
import Footer from "./components/Footer";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Routes,
} from "react-router-dom";

const nameOfFooter = "footer";

function App() {
  return (
    <div>
      <div
        style={{
          height: "100vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        <Header />
        <Content />
        <Footer name={nameOfFooter} />
      </div>
    </div>
  );
}

export default App;
