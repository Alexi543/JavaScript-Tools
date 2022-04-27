import { terminal } from "../_Terminal/terminal.js";

terminal.init();
terminal.window.title("My Test Terminal");
terminal.window.color("lightgreen");

terminal.print(" Try Inputs tests :");
terminal.skipLine();

let input1;
let input2;
let input3;

await terminal.input("test input", val => input1 = val);

terminal.print(`input value = ${input1}`);