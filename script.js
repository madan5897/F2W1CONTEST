/** @format */

let arr = [
  { id: 1, name: "john", age: "18", marks: 80 },
  { id: 2, name: "jack", age: "20", marks: 85 },
  { id: 3, name: "karen", age: "19", marks: 35 },
];

function PrintStudentswithMap() {
  //Write your code here , just console.log
  arr.map((x) => {
    if (x.marks > 50) {
      console.log(x.name);
    }
  });
}
PrintStudentswithMap();

function PrintStudentsbyForEach() {
  //Write your code here , just console.log
  arr.forEach((x) => {
    if (x.marks > 50) {
      console.log(x.name);
    }
  });
}
PrintStudentsbyForEach();

const newElement = { id: 4, name: "susan", age: "20", marks: 45 };
function addData() {
  //Write your code here, just console.log
  arr.push(newElement);
  console.log(arr);
}

addData();

function removeFailedStudent() {
  //Write your code here, just console.log
}

function concatenateArray() {
  //Write your code here, just console.log
  let arr1 = [
    { id: 4, name: "joe", age: "25", marks: 55 },
    { id: 5, name: "joi", age: "22", marks: 60 },
    { id: 6, name: "Dark", age: "26", marks: 62 },
  ];
  const combinedArr = arr.concat(arr1);
  console.log(combinedArr);
}

concatenateArray();
