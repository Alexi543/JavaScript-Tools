import { terminal } from "../_Terminal/terminal.js";

terminal.init();
terminal.window.title("My Test Terminal");
terminal.window.color("lightgreen");

terminal.print(" Try Inputs tests :");
terminal.skipLine();

let input1;
let input2;
let input3;
let input4;
let input5;
let input6;

await terminal.input("Input 1", val => input1 = val);
terminal.print("> Input 1 done");

await terminal.input("Input 2", val => input2 = val);
terminal.print("> Input 2 done");

await terminal.input("Input 3", val => input3 = val);
terminal.print("> Input 3 done");

await terminal.input("Input 4", val => input4 = val);
terminal.print("> Input 4 done");

await terminal.input("Input 5", val => input5 = val);
terminal.print("> Input 5 done");

await terminal.input("Input 6", val => input6 = val);
terminal.print("> Input 6 done");

terminal.skipLine(2);

terminal.print(`input 1 = ${input1}`);
terminal.print(`input 2 = ${input2}`);
terminal.print(`input 3 = ${input3}`);
terminal.print(`input 4 = ${input4}`);
terminal.print(`input 5 = ${input5}`);
terminal.print(`input 6 = ${input6}`);
