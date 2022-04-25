import { terminal } from "../_Terminal/terminal.js";

terminal.input("test input", value => {
    terminal.print(`value = ${value}`);
    console.log(value);

    terminal.input("test input 2", value => {
        terminal.print(`value = ${value}`);
        console.log(value);
    })
});
