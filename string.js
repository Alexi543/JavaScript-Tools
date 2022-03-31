class stringTemplate {
    ascii_lowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    ascii_uppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
    ascii_letters = this.ascii_lowercase + this.ascii_uppercase;
    digits = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
    hexdigits = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "a", "b", "c", "d", "e", "f", "A", "B", "C", "D", "E", "F"];
    octdigits = ["0", "1", "2", "3", "4", "5", "6", "7"];
    punctuation = ["!", '"', "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "]", "^", "_", "`", "{", "|", "}", "~", ];
    printable = this.ascii_letters + this.digits + this.punctuation

    deleteCaracter(string, [...caracters]) {
        if (!typeof(string) === "string" || string === "") {
            console.error("Invalid string.");
            return;
        }

        if (!caracters.length > 0) {
            console.error("Invalid caracters to delete");
            return;
        }
    
        string = string.split("");
        string.filter(x => caracters.indexOf(x) === -1);

        if (string.length === 0) return "";

        let clearString = "";

        string.forEach(x => clearString += x);

        return clearString;
    }

    keepCharacters(string, [...caraters]) {

    }
}

const string = new stringTemplate;

export {string};