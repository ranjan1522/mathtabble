const btnSubmit = document.querySelector(".btn--sub");
const btnReset = document.querySelector(".btn--new");
const myInput = document.getElementById("table");
const mathTable = document.getElementById("mathTable");
const tableName = document.getElementById("tableName");
var calUpt = 10;
var i = 1;
var calc;
btnSubmit.addEventListener("click", function () {
  tableName.innerHTML = `Multiplication table of ${myInput.value} `;

  if (myInput.value != 0) {
    for (let i = 1; i <= calUpt; i++) {
      calc = myInput.value * i;
      var outPut = `<br> ${myInput.value} * ${i} = ${calc}`;
      mathTable.innerHTML = mathTable.innerHTML + outPut;
    }
  }
});

btnReset.addEventListener("click", function () {
  window.location.reload();
  mathTable.innerHTML = "";
  tableName.innerHTML = "";
  myInput.innerHTML = "";
});
