export const string = new class {
    ascii_lowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    ascii_uppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
    ascii_letters = this.ascii_lowercase + this.ascii_uppercase;
    digits = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
    hexdigits = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "a", "b", "c", "d", "e", "f", "A", "B", "C", "D", "E", "F"];
    octdigits = ["0", "1", "2", "3", "4", "5", "6", "7"];
    punctuation = ["!", '"', "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "]", "^", "_", "`", "{", "|", "}", "~"];
    printable = this.ascii_letters + this.digits + this.punctuation


    deleteCaracter(string, [...caracters]) {
        string = string.split("");
        string = string.filter(x => caracters.indexOf(x) === -1);

        if (string.length === 0) return "";

        let cleanString = "";

        string.forEach(x => cleanString += x);

        return cleanString;
    }


    keepCharacters(string, [...caracters]) {
        string = string.split("");
        string = string.filter(x => caracters.indexOf(x) !== -1);

        if (string.length === 0) return "";

        let cleanString = "";

        string.forEach(x => cleanString += x);

        return cleanString;
    }


    count(string, caracter) {
        string = string.split("");

        return string.filter(x => [caracter].indexOf(x) !== -1).length;
    }


    replace(string, [...caracters], replace) {
        string = string.split("");

        let newString = "";

        string.forEach(caracter => {
            if (caracters.indexOf(caracter) !== -1) newString += replace;
            else newString += caracter;
        })

        return newString;
    }
}
