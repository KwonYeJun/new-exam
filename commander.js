import { Command } from 'commander';

const program = new Command();
// 프로그램 코드 작성

const app = program.command('add <a> <b>');
app.action((a, b) => {
const result = Number(a) + Number(b);
console.log(`${a} + ${b} = ${result}`);
});

program.parse(process.argv);