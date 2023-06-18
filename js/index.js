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
// hàm tìm số nhỏ nhất bt3
//hàm để đưa vào sort để săp xếp giá trị từ thấp đến cao
function compare(a, b) {
  return a - b;
}
function smallestNumber() {
  numArray.sort(compare);
  //lấy giá trị đầu tiên do trước đó đã sort
  let smNumber = numArray[0];
  document.getElementById("smNumber").innerHTML = `Số nhỏ nhất: ${smNumber}`;
}
//hàm tìm số dương nhỏ nhất bt 4
function smallestPositive() {
  let newArray = [];
  for (let i = 0; i <= numArray.length; i++) {
    if (numArray[i] > 0) {
      newArray.push(numArray[i]);
    }
  }
  if (newArray.length > 0) {
    newArray.sort(compare);
    let smPositive = newArray[0];
    document.getElementById(
      "smPositive"
    ).innerHTML = `Số dương nhỏ nhất: ${smPositive}`;
  } else {
    document.getElementById(
      "smPositive"
    ).innerHTML = `Không có số dương trong mảng`;
  }
}

//hàm tìm số chẵn cuối cùng bt5
function lastEven() {
  let numberEven = 0;
  for (let i = 0; i <= numArray.length; i++) {
    if (numArray[i] % 2 === 0) {
      numberEven = numArray[i];
    }
  }
  document.getElementById(
    "numberEven"
  ).innerHTML = `Số chẵn cuối cùng: ${numberEven}`;
}
//bt7
function sort() {
  numArray.sort(compare);
  document.getElementById(
    "sortAscending"
  ).innerHTML = `Mảng sau khi sắp xếp : ${numArray}`;
}
// //hàm tìm số nguyên tố đầu tiên bt8
//*************còn 6 8 9 10 và mở public
