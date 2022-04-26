let terminalName = "Terminal";

export const terminal = new class {
    #inputsNum = 0;
    #area;

    init(position = document.body) {
        document.head.innerHTML += "<link rel='stylesheet' href='/_Terminal/terminal.css'>";
        position.innerHTML += (
            `<section class='terminal'> \
                <p class='terminal-title'>${terminalName}</p> \
            </section>`
        );
        this.#area = document.querySelector(".terminal");
    }

    print(...messages) {
        if (messages.length === 0) return console.error("Print - No Messages.");
        
        messages.forEach(message => {
            if (message === "") return console.error("Print - Invalid Message");
            this.#area.innerHTML += `<pre class="prints">${message}</pre>`;
        });
    }

    input(message, func, maxLength = undefined) {
        if (message === "") return console.error("Input - Invalid Message.");
        if (typeof(func) !== "function") return console.error("Input - Invalid Function.");
        if (maxLength !== undefined && typeof(maxLength) !== "number" || maxLength <= 0) return console.error("Input - Invalid Caraters Length.");

        this.#inputsNum++;

        if (maxLength === undefined) {
            this.#area.innerHTML += (
                `<pre class="input-label">${message}</pre>
                <input type='text' class="input" id="${this.#inputsNum}">`
            );
        } else {
            this.#area.innerHTML += (
                `<pre class="input-label">${message}</pre>
                <input type='text' class="input" id="${this.#inputsNum}" maxlength="${maxLength}">`
            );
        }

        const INPUT = document.getElementById(this.#inputsNum);

        INPUT.focus();

        return new Promise((exit) => {
            INPUT.addEventListener("change", exit);
        }).then(() => {
            let entry = INPUT.value.toString();
            INPUT.placeholder = entry;
            INPUT.disabled = true;
            func(entry);
        });
    }
    
    skipLine(skip = 1) {
        for (let i = 0; i < skip; i++) this.#area.innerHTML += "<br>";
    }

    clear() {
        this.#inputsNum = 0;
        this.#area.innerHTML = "";
        this.#area.innerHTML += `<p class='terminal-title'>${terminalName}</p>`;
    }

    window = new class {
        #root = document.querySelector(":root");

        backgound(color) {
            if (typeof(color) !== "string" || color === "") return console.error("Set Background - Invalid Color");
    
            this.#root.style.setProperty("--background", color);
        }
    
        color(color) {
            if (typeof(color) !== "string" || color === "") return console.error("Set Color - Invalid Color");
    
            this.#root.style.setProperty("--color", color);
        }
    
        size(size) {
            if (typeof(size) !== "string" || size === "" || /x/.test(size) === false) return console.error("Set Size - Invalid Dimensions");
            
            size = size.split("x");
    
            this.#root.style.setProperty("--terminal-width", `${size[0]}px`);
            this.#root.style.setProperty("--terminal-heigth", `${size[1]}px`);
        }
    
        position(pos) {
            if (typeof(pos) !== "string" || pos === "" || /x/.test(pos) === false) return console.error("Set Position - Invalid Position");

            pos = pos.split("x");

            this.#root.style.setProperty("--pos-x", `${pos[0]}px`);
            this.#root.style.setProperty("--pos-y", `${pos[1]}px`);
        }

        fontSize(size) {
            if (typeof(size) !== "string" || size === "") return console.error("Set Size - Invalid Dimensions");
    
            this.#root.style.setProperty("--font-size", size);
        }

        corners(deg) {
            if (deg <= 0) return console.error("Set Corners - Invalid Deg");

            this.#root.style.setProperty("--corners", deg);
        }

        title(name) {
            if (typeof(name) !== "string" || name === "") return console.error("Set Title - Invalid Name");

            terminalName = name;
            document.querySelector(".terminal-title").textContent = name;
        }
    }
}
