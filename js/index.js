//hàm để user nhập giá trị vào tính toán
let numArray = [];
//hàm thêm số vào mảng
function showNumber() {
  let number = +document.getElementById("number").value;
  numArray.push(number);
  document.getElementById("result").innerHTML = numArray;
}
//hàm xóa số vừa nhập khỏi mảng
function removeNumber() {
  numArray.pop();
  document.getElementById("result").innerHTML = numArray;
}
//hàm tính tổng số dương của bt1
function sumPositive() {
  let sumPositive = 0;
  for (let i = 0; i < numArray.length; i++) {
    if (numArray[i] > 0) {
      sumPositive += numArray[i];
    }
  }
  document.getElementById("sum").innerHTML = `Tổng số dương : ${sumPositive}`;
}
// hàm đếm số dương bt2
function countPositive() {
  let count = 0;
  for (let i = 0; i < numArray.length; i++) {
    if (numArray[i] > 0) {
      count += 1;
    }
  }
  document.getElementById("count").innerHTML = ` Số dương: ${count}`;
}
