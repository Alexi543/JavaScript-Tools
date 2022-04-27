import { askQuestion } from "../_Terminal/_Tools/askQuestion.js";
import { terminal } from "../_Terminal/terminal.js";

terminal.init();
terminal.window.title("My Test Terminal");
terminal.window.color("lightgreen");

terminal.print("   Try Inputs tests :");
terminal.skipLine();

let input1 = await askQuestion("Input 1");
terminal.print("> input 1 done");

let input2 = await askQuestion("Input 2");
terminal.print("> input 2 done");

let input3 = await askQuestion("Input 3");
terminal.print("> input 3 done");

let input4 = await askQuestion("Input 4");
terminal.print("> input 4 done");

let input5 = await askQuestion("Input 5");
terminal.print("> input 5 done");

let input6 = await askQuestion("Input 6");
terminal.print("> input 6 done");

terminal.skipLine(3);

terminal.print(`input 1 = ${input1}`, `input 2 = ${input2}`, `input 3 = ${input3}`, `input 4 = ${input4}`, `input 5 = ${input5}`, `input 6 = ${input6}`);
