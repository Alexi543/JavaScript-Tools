export const terminal = new class {
    #area = document.body;
    #inputsNum = 0;

    print(...messages) {
        messages.forEach(message => {
            this.#area.innerHTML += `<p>${message}</p>`;
        });
    }

    input(message, code) {
        this.#inputsNum++;
        this.#area.innerHTML += `<input type='text' class="input" id="${this.#inputsNum}" placeholder="${message}">`;
    
        const INPUT = document.getElementById(this.#inputsNum);
        let send = false;

        INPUT.focus();

        return new Promise((exit) => {
            INPUT.addEventListener("change", () => send = true);
    
            setInterval(() => {
                if (send === true) exit();
            }, 500);
        }).then(() => {
            INPUT.innerHTML = `<input type='text' class="input" disabled="disabled" id="${this.#inputsNum}" placeholder="${message}">`
            code(INPUT.value);
        })
    }

    clear() {
        this.#area.innerHTML = "";
    }
}
