const readline = require("readline").createInterface({
  input: process.input,
  output: process.stdout,
});

readline.question("Qual a sua linguagem preferrida?", (languege) => {
  console.log(`A minha linguagem preferida é : ${languege}`);
  readline.close();
});
