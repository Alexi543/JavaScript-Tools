export const random = new class {
    randrange(min = 0, max) {
        return Math.floor(Math.random() * (max - min + 1) + min);
    }   

    
    float(min = 0, max) {
        return Math.random() * (max - min + 1) + min;
    }


    choise([...array]) {
        return array[this.randrange(0, array.length - 1)];
    }


    shuffle([...array]) {
        return array.sort(() => Math.random() - 0.5);;
    }


    sample([...array], amount) {
        array = this.shuffle(array);

        while (array.length > amount) array.pop();

        return array;
    }
}
