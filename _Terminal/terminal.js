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
        this.#area.innerHTML += `<p class="input-label">${message}</p><input type='text' class="input" id="${this.#inputsNum}">`;
    
        const INPUT = document.getElementById(this.#inputsNum);
        let send = false;

        INPUT.focus();

        return new Promise((exit) => {
            INPUT.addEventListener("change", () => send = true);

            setInterval(() => {
                if (send === true) exit();
            }, 500);
        }).then(() => {
            code(INPUT.value);
        })
    }

    clear() {
        this.#area.innerHTML = "";
    }
}
