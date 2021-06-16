/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function ex_gen() {
  let who = ["The dog", "My grandma", "His turtle", "My bird"];
  let action = ["ate", "peed", "crushed", "broke"];
  let what = ["my homework", "the keys", "the car"];
  let when = [
    "before the class",
    "right on time",
    "when I finished",
    "during my lunch",
    "while I was praying"
  ];
  let array1 = [who, action, what, when];
  var excuse = "";
  for (var i = 0; i < array1.length; i++) {
    var newarray = array1[i];
    var num = Math.floor(Math.random() * newarray.length);
    if (i == 0) {
      var subject = newarray[num];
    } else if (i == 1) {
      var verb = newarray[num];
    } else if (i == 2) {
      var dirobj = newarray[num];
    } else {
      var when1 = newarray[num];
    }
  }
  excuse = excuse + subject + " " + verb + " " + dirobj + " " + when1;

  console.log(excuse);
  document.getElementById("demo").innerHTML = excuse;
};

//write your code here
