

const students = [
  {
     _id: 1,
     name: "Jack",
     age: 25,
     department: "IT",
     salary: 12000,
  },
  {
     _id: 2,
     name: "Jane",
     age: 19,
     department: "Software Engineering",
     salary: 1000,
  },
  {
     _id: 3,
     name: "Bob",
     age: 21,
     department: "Frontend",
     salary: 15000,
  },
  {
     _id: 4,
     name: "Sindor",
     age: 19,
     department: "Frontend",
     salary: 1000,
  },
  {
     _id: 5,
     name: "Farhodbek",
     age: 19,
     department: "Software Engineering",
     salary: 1000,
  },
];

const filteresStudents = students.filter((value,) => value.age < 20);

console.log(filteresStudents)

