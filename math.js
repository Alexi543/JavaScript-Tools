export default math = new class {
    /**
     * It returns an array of all the divisors of a number
     * @param number - The number you want to divide.
     * @returns An array of all the divisors of the number.
    */
    divideInt(number) {
        if (typeof(number) !== "number" || number <= 0) return console.error("Invalid Number");

        let divs = [];

        for (let i = 0; i <= number; i++) if (Math.floor(number / i) * i === number) divs.push(i);

        return divs;
    }

    /**
     * It takes a number and returns an array of all the numbers that divide into it
     * @param number - The number you want to divide.
     * @returns An array of numbers that are the result of dividing the number by every number from the
     * number to 1.
    */
    divideNum(number) {
        if (typeof(number) !== "number" || number <= 0) return console.error("Invalid Number");

        let divs = [];

        for (let i = number; i >= 1; i--) divs.push(number / i);

        return divs;
    }


    /**
     * "The function takes a number and returns true if the number is a prime number, and false if it is not."
     * @param number - The number you want to check if it's prime or not.
     * @returns the sum of all the divisors of the number.
    */
    primeNumber(number) {
        if (typeof(number) !== number || number <= 0) return console.error("Invalid Number");
        
        let divs = this(this.divideInt(number));
        let total = 0;

        divs.foreach(num => {
            total += num;
        });
    
        return (total - number) === number;
    }
}
