export default random = new class {
    /**
     * The above function returns a random integer between min and max.
     * @param [min=0] - The minimum number to return.
     * @param max - The maximum number to be returned.
     * @returns The random number between the min and max.
    */
    randrange(min = 0, max) {
        return Math.floor(Math.random() * (max - min + 1) + min);
    }   

    
    /**
     * Generate a random number between min and max.
     * @param [min=0] - The minimum value of the random number.
     * @param max - The maximum value of the random number
     * @returns A random number between min and max.
    */
    float(min = 0, max) {
        return Math.random() * (max - min + 1) + min;
    }


    /**
     * It takes an array as an argument and returns a random element from that array
     * @returns a random element from the array.
    */
    choise([...array]) {
        return array[this.randrange(0, array.length - 1)];
    }


    /**
     * @returns The array is being sorted by a random number.
    */
    shuffle([...array]) {
        return array.sort(() => Math.random() - 0.5);;
    }


    /**
     * Shuffle the array, then pop off the last element until the array is the desired length.
     * @param amount - The amount of items you want to sample from the array.
     * @returns An array of the same length as the amount value, but with the elements in a random order.
    */
    sample([...array], amount) {
        array = this.shuffle(array);

        while (array.length > amount) array.pop();

        return array;
    }
}
