import React, { useEffect, useState } from "react";
import VK from "../public/VK.png";
import TG from "../public/TG.png";

function Contacts() {
  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
          backgroundColor: "#3f3f3f",
        }}
      >
        <div
          style={{
            backgroundImage: "url(" + VK + ")",
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
              backgroundColor: "white",
              display: "flex",
              justifyContent: "center",
              borderTopLeftRadius: 10,
              borderTopRightRadius: 10,
            }}
          >
            VK
          </div>
        </div>
        <div
          style={{
            backgroundImage: "url(" + TG + ")",
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
              backgroundColor: "white",
              display: "flex",
              justifyContent: "center",
              borderTopLeftRadius: 10,
              borderTopRightRadius: 10,
            }}
          >
            Telegram
          </div>
        </div>
      </div>
      ;
    </>
  );
}

export default Contacts;
