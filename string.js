export const string = new class {
    /* It's just a list of characters. */
    ascii_lowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    ascii_uppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
    ascii_letters = this.ascii_lowercase + this.ascii_uppercase;
    digits = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
    hexdigits = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "a", "b", "c", "d", "e", "f", "A", "B", "C", "D", "E", "F"];
    octdigits = ["0", "1", "2", "3", "4", "5", "6", "7"];
    punctuation = ["!", '"', "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "]", "^", "_", "`", "{", "|", "}", "~"];
    printable = this.ascii_letters + this.digits + this.punctuation


    /**
     * It takes a string and an array of caracters and returns a string without the caracters in the array
     * @param string - The string you want to clean.
     * @returns A string without the caracters passed as parameter.
     */
    deleteCaracter(string, [...caracters]) {
        string = string.split("");
        string = string.filter(x => caracters.indexOf(x) === -1);

        if (string.length === 0) return "";

        let cleanString = "";

        string.forEach(x => cleanString += x);

        return cleanString;
    }


    /**
     * It takes a string and an array of characters, and returns a string containing only the characters in
     * the array
     * @param string - The string to be cleaned.
     * @returns A string with only the characters that are in the array.
     */
    keepCharacters(string, [...caracters]) {
        string = string.split("");
        string = string.filter(x => caracters.indexOf(x) !== -1);

        if (string.length === 0) return "";

        let cleanString = "";

        string.forEach(x => cleanString += x);

        return cleanString;
    }


    /**
     * It takes a string and a character and returns the number of times the character appears in the
     * string.
     * @param string - The string to be searched.
     * @param caracter - The character you want to count.
     * @returns The number of times the character appears in the string.
     */
    count(string, caracter) {
        string = string.split("");

        return string.filter(x => [caracter].indexOf(x) !== -1).length;
    }


    /**
     * It takes a string, an array of characters, and a replacement character, and returns a new string
     * with all the characters in the array replaced by the replacement character
     * @param string - The string you want to replace the caracters in.
     * @param replace - The string you want to replace the caracters with.
     * @returns A function that takes a string and replaces all the characters in the string with the
     * characters in the array with the character in the replace parameter.
     */
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
