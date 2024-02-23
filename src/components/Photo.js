import { useState } from "react";
import Luke from "../public/Luke.png";
import R2D2 from "../public/R2D2.png";
import DartVader from "../public/DartVader.png";
import Kenobi from "../public/Kenobi.png";

function Photo() {
  const [color, setColor] = useState("grey");
  const [h, setH] = useState(150);

  return (
    <>
      <button onClick={() => setColor("red")}>red</button>
      <button onClick={() => setColor("grey")}>grey</button>
      <button onClick={() => setH(200)}>200px</button>
      <button onClick={() => setH(140)}>140px</button>
      <div>{color + ", height: " + h}</div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
          backgroundColor: "#3f3f3f",
          height: h + "%",
        }}
      >
        <div
          style={{
            backgroundImage: "url(" + Luke + ")",
            backgroundSize: "contain",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "right 50% top 8px",

            height: 300,
            width: 300,
            backgroundColor: "white",
            borderRadius: 10,
          }}
        >
          <div
            style={{
              backgroundColor: color,
              display: "flex",
              justifyContent: "center",
              borderTopLeftRadius: 10,
              borderTopRightRadius: 10,
            }}
          >
            Luke Skywalker
          </div>
        </div>
        <div
          style={{
            backgroundImage: "url(" + R2D2 + ")",
            backgroundSize: "contain",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "right 40%",
            height: 300,
            width: 300,
            backgroundColor: "white",
            borderRadius: 10,
          }}
        >
          <div
            style={{
              backgroundColor: "grey",
              display: "flex",
              justifyContent: "center",
              borderTopLeftRadius: 10,
              borderTopRightRadius: 10,
            }}
          >
            R2D2
          </div>
        </div>
        <div
          style={{
            backgroundImage: "url(" + DartVader + ")",
            backgroundSize: "contain",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "right 70%",

            height: 300,
            width: 300,
            backgroundColor: "white",
            borderRadius: 10,
          }}
        >
          <div
            style={{
              backgroundColor: "grey",
              display: "flex",
              justifyContent: "center",
              borderTopLeftRadius: 10,
              borderTopRightRadius: 10,
            }}
          >
            Dart Vader
          </div>
        </div>
        <div
          style={{
            backgroundImage: "url(" + Kenobi + ")",
            backgroundRepeat: "no-repeat",
            backgroundSize: "contain",
            backgroundPosition: "center",
            height: 300,
            width: 300,
            backgroundColor: "white",
            borderRadius: 10,
          }}
        >
          <div
            style={{
              backgroundColor: "grey",
              display: "flex",
              justifyContent: "center",
              borderTopLeftRadius: 10,
              borderTopRightRadius: 10,
            }}
          >
            Obi Wan Kenobi
          </div>
        </div>
      </div>
    </>
  );
}

export default Photo;
