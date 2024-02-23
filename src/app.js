/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";
//Cancel Function Clears
//SEND(SUBMIT)function-This will check that all inputs are valid...if correct empty fields.
//RECEIVE input functions with conditional loop. If satisfied change box green...let SUMBIT()execute

function cardnuminput() {
  //CardNumStart
  document.querySelector(".cardnum").addEventListener("keyup", card => {
    var element = document.querySelector(".cardnum");
    if (card.target.value.length == 16) {
      element.classList.remove("is-invalid");
      element.classList.add("is-valid");
    } else {
      element.classList.add("is-invalid");
      element.classList.remove("is-valid");
    }
  }); //CardNumEnd
  document.querySelector(".cvc").addEventListener("keyup", card => {
    //CVCStart
    var element = document.querySelector(".cvc");
    if (card.target.value.length == 3) {
      element.classList.remove("is-invalid");
      element.classList.add("is-valid");
    } else {
      element.classList.add("is-invalid");
    }
  }); //CVCEND
  document.querySelector(".ammount").addEventListener("keyup", card => {
    //AmmStart
    var element = document.querySelector(".ammount");
    if (card.target.value.length > 0) {
      element.classList.remove("is-invalid");
      element.classList.add("is-valid");
    } else {
      element.classList.add("is-invalid");
    }
  }); //AmmEnd
  document.querySelector(".fname").addEventListener("keyup", card => {
    //FNAME START
    var element = document.querySelector(".fname");
    if (card.target.value.length > 1) {
      element.classList.remove("is-invalid");
      element.classList.add("is-valid");
    } else {
      element.classList.add("is-invalid");
    }
  }); //FNAME END
  document.querySelector(".lname").addEventListener("keyup", card => {
    //LNAME START
    var element = document.querySelector(".lname");
    if (card.target.value.length > 1) {
      element.classList.remove("is-invalid");
      element.classList.add("is-valid");
    } else {
      element.classList.add("is-invalid");
    }
  }); //LNAME START
  document.querySelector(".address").addEventListener("keyup", card => {
    //ADDRESS START
    var element = document.querySelector(".address");
    if (card.target.value.length > 1) {
      element.classList.remove("is-invalid");
      element.classList.add("is-valid");
    } else {
      element.classList.add("is-invalid");
    }
  }); //ADDRESS END
  document.querySelector("#states").addEventListener("change", card => {
    //STATES START
    var element = document.querySelector("#states");
    if (typeof card.target.value == "string") {
      element.classList.remove("is-invalid");
      element.classList.add("is-valid");
    } else {
      element.classList.add("is-invalid");
    }
  }); //STATES END
  document.querySelector(".ZIP").addEventListener("keyup", card => {
    //ZIP START
    var element = document.querySelector(".ZIP");
    if (card.target.value.length == 5) {
      element.classList.remove("is-invalid");
      element.classList.add("is-valid");
    } else {
      element.classList.add("is-invalid");
    }
    document.querySelector(".messagebody").addEventListener("keyup", obj => {
      //ADDRESS START
      var element1 = document.querySelector("#plz");
      if (obj.target.value.length > 1) {
        element1.classList.remove("invalid-feedback");
        element1.classList.add("valid-feedback");
      } else {
        element1.classList.add("invalid-feedback");
      }
    }); //ADDRESS END
  });
}
window.onload = function() {
  cardnuminput();
};

/*
listen for input on all
only take input if satisfied
if all inputs arent satisfied submit function will turn red..some field are missing banner


*/
