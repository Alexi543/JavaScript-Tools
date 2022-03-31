class randomTemplate {
    randomNumber(min = 0, max) {
        if (!typeof(min) === "number") {
            console.error("Minimal number is invalid.");
            return;
        }

        if (!typeof(max) === "number") {
            console.error("Maximal number is invalid.");
            return;
        }

        return Math.floor(Math.random() * (max - min + 1) + min);
    }   

    getRandom(array) {
        if (!typeof(array) === "object" || array.length === 0) {
            console.error("Invalid array");
            return;
        }

        return array[this.randomNumber(0, array.length - 1)];
    }
}

const random = new randomTemplate;
export {random};