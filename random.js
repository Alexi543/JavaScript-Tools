class randomTemplate {
    randomNumber(min = 0, max) {
        return Math.floor(Math.random() * (max - min + 1) + min);
    }   
}

const random = new randomTemplate;

export {random};