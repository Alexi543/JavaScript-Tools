const checkArray = (array) => {
    if (!typeof(array) === "object" || array.length === 0) {
        console.error("Invalid Array");
        return false;
    }

    return true
}

class randomTemplate {
    number(min = 0, max) {
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

    choise(array) {
        if (!checkArray(array)) return;
        
        return array[this.randomNumber(0, array.length - 1)];
    }

    shuffle(array) {
        if (!checkArray(array)) return;
        
        return array.sort(() => Math.random() - 0.5);;
    }

    sample(array, amount) {
        if (!checkArray(array)) return;

        if (!typeof(amount) === "number" || amount <= 0) {
            console.error("Invalid amount");
            return;
        }
        
        let newArray = [];

    }
}

const random = new randomTemplate;
export {random};
