import { terminal } from "../terminal.js";

export const askQuestion = (question) => {
    return new Promise((exit) => {
        terminal.input(question, value => {
            exit(value);
        })
    })
}
