import inquirer from 'inquirer'
import chalk from 'chalk'

inquirer.prompt([
    {
        name:"nome",
        message:"Qual é o seu nome?",
    },
    
    {
        name:"idade",
        message:"Qual é o sua idade?",
    }
    
]).then((data) => {
    const response = `O nome do usuario é  ${data.nome} e ele tem ${data.idade} anos`
    console.log(chalk.bgYellow.black(response))
}).catch(err => console.log(chalk.bgRed.white(err)))
