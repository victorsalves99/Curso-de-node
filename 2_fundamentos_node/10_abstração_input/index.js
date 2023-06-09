import inquirer from "inquirer";

inquirer
  .prompt([
    {
      name: "p1",
      messege: "qual a primeira nota?",
    },
    {
      name: "p2",
      messege: "qual a segunda nota?",
    },
  ])
  .then((data) => {
    console.log(data)
  })
  .catch(err => console.log(err));
