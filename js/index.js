function showNumber() {
  let number = +document.getElementById("number").value;
  let numArray = [];
  numArray.push(number);
  document.getElementById("result").innerHTML = numArray;
}
