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
          backgroundColor: "white",
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
          <a href="https://vk.com/hersobakl" class="link" target="blank">
            <svg class="vk"></svg>
          </a>
        </div>
        <div
          style={{
            backgroundImage: "url(" + TG + ")",
            backgroundSize: "contain",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "right 50% top 8px",

            height: 350,
            width: 350,
            backgroundColor: "white",
            borderRadius: 10,
          }}
        >
          <a href="https://t.me/hersobakl" class="link" target="blank">
            <svg class="TG"></svg>
          </a>
        </div>
      </div>
      ;
    </>
  );
}

export default Contacts;
