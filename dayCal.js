// From Input

let userDay = document.getElementById('day');
let userMonth = document.getElementById('month');
let userYear = document.getElementById('year');



// From Output

let resultDay = document.getElementById('cal-days');
let resultMonth = document.getElementById('cal-months');
let resultYear = document.getElementById('cal-years');
let resultHour = document.getElementById('cal-hours');
let resultMinutes = document.getElementById('cal-mins');

// Add function

function convert() {
  calculateProcess();
};

const date = new Date();
let day = date.getDate();
let month = 1 + date.getMonth();
let year = date.getFullYear();

const months = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

function validate() {
  const inputs = document.querySelectorAll("input");
  let validator = true;
  inputs.forEach((i) => {
    if (!i.value) {
      i.style.borderColor = "red";
      validator = false;
    }
    else if (userMonth.value > 12) {
      userMonth.style.borderColor = "red";
      validator = false;
    }
    else if (userDay.value > 31) {
      userDay.style.borderColor = "red";
      validator = false;
    }
    else if (userYear.value > year) {
      userYear.style.borderColor = "red";
      validator = false;
    }
    else {
      i.style.borderColor = "black";
      validator = true;
    }
  })
  return validator;
};

function calculateProcess() {

  if (validate()) {
    if (userDay.value > day) {
      day = day + months[month - 1];
      month = month - 1;
    }
    if (userMonth > month) {
      month = month + 12;
      year = year - 1;
    }

    const resDate = day - userDay.value;
    const resMonth = month - userMonth.value;
    const resYear = year - userYear.value;

    const D = resDate < 10 ? "0" + resDate : resDate;
    const M = resMonth < 10 ? "0" + resMonth : resMonth;
    const Y = resYear < 10 ? "0" + resYear : resYear;
    const HRS = date.getHours() < 10 ? "0" + date.getHours() : date.getHours();
    const MINS = date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes();

    resultMinutes.innerText = MINS;
    resultHour.innerText = HRS;
    resultYear.innerText = Y;
    resultMonth.innerText = M;
    resultDay.innerText = D;
  };
};