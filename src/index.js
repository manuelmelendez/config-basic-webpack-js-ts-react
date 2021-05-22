/** 
 * @file index.js THE MAIN FILE
 * @author manuelmelendez
 * @see <a href="https://manuelmelendez.github.io/">Manuel Melendez</a>
 */

import "./app/sass/index.scss";
import "./app/styles/style.css";
import logo from "@images/webpack.svg";
import gemini from "@images/saga-kanon.png";
import data from "./app/json/data.json";
import { HelloWorld } from "./app/components/HelloWorld.js";
import github from '@images/github.png';
import twitter from '@images/twitter.png';
import instagram from '@images/instagram.png';
import pugImage from '@images/pug-puppy.png';

const arr = [1, 2, 3],
  codeESNext = () => console.log(...arr);

console.log("Hola mundo sin configuración con Webpack 😱");

codeESNext();

//document.getElementById("app").innerHTML = `<img src="${logo}" alt="Webpack">`;

const d = document,
  $app = d.getElementById("app"),
  $h1 = d.createElement("h1"),
  $logo = d.createElement("img"),
  $img = d.createElement("img"),
  $nav = d.createElement("nav"),
  $divCard = d.createElement("div"),
  $headerPug = d.getElementById("header-pug");

let menu = "",
  hello = new HelloWorld("Vanilla JS");

data.links.forEach((el) => (menu += `<a href="${el[1]}">${el[0]}</a>`));

$h1.textContent = hello.greet();
$logo.src = logo;
$logo.classList.add("icon");
$img.src = gemini;
$nav.innerHTML = menu;
$nav.classList.add("menu");
$divCard.innerHTML = 
`
<a href="https://twitter.com/manuelmelendez0">
<img src="${twitter}" />
</a>
<a href="https://github.com/manuelmelendez">
<img src="${github}" />
</a>
<a href="https://instagram.com/manuelmelendez0">
<img src="${instagram}" />
</a>
`;
$divCard.classList.add("links-contact")

$app.appendChild($h1);
$app.appendChild($logo);
$app.appendChild($nav);
$app.appendChild($divCard);
//$app.appendChild($img);

$headerPug.innerHTML=`
<a href="https://twitter.com/manuelmelendez0">
<img width="250px" src="${pugImage}" />
</a>`