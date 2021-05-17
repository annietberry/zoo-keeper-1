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








let ally = new Alligator("Ally", "Green", "F", 200, 60, "big");
let Billy = new Bird("Billy", "purple", "M", 2, "big");
let Sam = new Panda("Sam", "white", "Male", 200, "Medium")
let Mini = new Dog("Mini", "white", "Female", 40,)

export default Alligator;



