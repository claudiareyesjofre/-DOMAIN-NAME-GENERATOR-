/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

document.querySelector("#the-excuse").innerHTML = domainName();

function domainName() {
  var pronoun = ["the", "our"];
  var adj = ["great", "big"];
  var num = ["jogger", "racoon"];

  let i = 0;
  let j = 0;
  let h = 0;

  let Temp = "";

  for (let i = 0; i < pronoun.length; i++) {
    for (let j = 0; j < adj.length; j++) {
      for (let h = 0; h < num.length; h++) {
        Temp += pronoun[i] + adj[j] + num[h] + ".com <br>";
      }
    }
  }
  return Temp;
}
