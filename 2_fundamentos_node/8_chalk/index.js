import chalk from "chalk";

const nota = 4;

if (nota >= 5) {
  console.log(chalk.green(`Parabens! voce foi aprovado com nota ${nota}`));
} else {
  console.log(chalk.bgRed(`voce precisa melhorar a nota!`));
}
