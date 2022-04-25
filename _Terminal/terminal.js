export const terminal = new class {
    #area = document.body;
    #inputsNum = 0;

    print(...messages) {
        if (messages.length === 0) return console.error("Print - No Messages.");

        messages.forEach(message => {
            if (message === "") return console.error("Print - Invalid Message");
            this.#area.innerHTML += `<p class="prints">${message}</p>`;
        });
    }

    input(message, code, maxLength = undefined) {
        if (message === "") return console.error("Input - Invalid Message.");
        if (typeof(code) !== "function") return console.error("Input - Invalid Function.");
        if (maxLength !== undefined && typeof(maxLength) !== "number" || maxLength <= 0) return console.error("Input - Invalid Caraters Length.");

        this.#inputsNum++;

        if (maxLength === undefined) {
            this.#area.innerHTML += (
                `<p class="input-label">${message}</p>
                <input type='text' class="input" id="${this.#inputsNum}">`
            );
        } else {
            this.#area.innerHTML += (
                `<p class="input-label">${message}</p>
                <input type='text' class="input" id="${this.#inputsNum}" maxlength="${maxLength}">`
            );
        }

        const INPUT = document.getElementById(this.#inputsNum);
        let send = false;

        INPUT.focus();

        return new Promise((exit) => {
            INPUT.addEventListener("change", () => send = true);

            setInterval(() => {
                if (send === true) exit();
            }, 500);
        }).then(() => {
            INPUT.disabled = true;
            code(INPUT.value);
        });
    }

    clear() {
        this.#inputsNum = 0;
        this.#area.innerHTML = "";
    }
}
