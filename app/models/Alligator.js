class Alligator {
    constructor(
        name = 'Bob',
        color = 'green',
        gender = 'Male',
        weight = 200,
        tailLengthInch = 36,
        teethSize = 'medium',
    ) {
        this.id = 0,
            this.name = name;
        this.color = color;
        this.gender = gender;
        this.weight = weight;
        this.tailLengthInch = tailLengthInch;
        this.teethSize = teethSize;
    }
    eat(food) {
        console.log(`Chomp chomp all the ${food}ies.`)
    }
}

class Bird {
    constructor(
        name = 'Coco',
        color = 'orange',
        gender = 'F',
        weight = 1,
        beakSize = 'small',
    ) {
        this.id = 0,
            this.name = name;
        this.color = color;
        this.gender = gender;
        this.weight = weight;
        this.beakSize = beakSize;
    }
    eat(food) {
        console.log(`Chomp chomp all the ${food}ies.`)
    }
}

class Dog {
    constructor(
        name = 'Zed',
        color = 'black',
        gender = 'Male',
        weight = 100,
        tailLengthInch = 24,
        pawSize = 'big',
    ) {
        this.id = 0,
            this.name = name;
        this.color = color;
        this.gender = gender;
        this.weight = weight;
        this.tailLengthInch = tailLengthInch;
        this.pawSize = pawSize;
    }
    eat(food) {
        console.log(`Chomp chomp all the ${food}ies.`)
    }
}

class Eagle {
    constructor(
        name = 'Merica',
        color = 'white',
        gender = 'Male',
        weight = 20,
        beakSize = 'big',
    ) {
        this.id = 0,
            this.name = name;
        this.color = color;
        this.gender = gender;
        this.weight = weight;
        this.beakSize = beakSize;
    }
    eat(food) {
        console.log(`Chomp chomp all the ${food}ies.`)
    }
}

class Panda {
    constructor(
        name = 'Fluffy',
        color = 'red',
        gender = 'Female',
        weight = 400,
        gutSize = 'big',
    ) {
        this.id = 0,
            this.name = name;
        this.color = color;
        this.gender = gender;
        this.weight = weight;
        this.gutSize = gutSize;
    }
    eat(food) {
        console.log(`Chomp chomp all the ${food}ies.`)
    }
}

let ally = new Alligator("Ally", "Green", "F", 200, 60, "big");
let Billy = new Bird("Billy", "purple", "M", 2, "big");
let Sam = new Panda("Sam", "white", "Male", 200, "Medium")
let Mini = new Dog("Mini", "white", "Female", 40,)

export default Alligator;
export default Dog;
export default Panda;

export default Bird;
