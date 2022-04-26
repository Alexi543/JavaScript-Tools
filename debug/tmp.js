import { terminal } from "../_Terminal/terminal.js";

terminal.init();
terminal.window.title("My Test Terminal");

terminal.print(" Try Inputs tests :");
terminal.skipLine();

terminal.input("Test input 1", value1 => {
    terminal.print("> input 1 done");

    terminal.input("Test input 2", value2 => {
        terminal.print("> input 2 done");

        terminal.input("Test input 3", value3 => {
            terminal.print("> input 3 done");

            terminal.skipLine(2);

            terminal.print(`Value 1 = ${value1}`, `Value 2 = ${value2}`, `Value 3 = ${value3}`);
        })
    })
})
