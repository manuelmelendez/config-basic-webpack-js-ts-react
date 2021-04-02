import React from "react";
import ReactDOM from "react-dom";
import "./app/sass/index.scss";
import "./app/styles/style.css";
import logo from "@images/webpack.svg";
import data from "./app/json/data.json";
import { HelloWorld } from "./app/components/HelloWorld.jsx";

ReactDOM.render(
  <HelloWorld name="React" logo={logo} menu={data.links} />,
  document.getElementById("app")
);

