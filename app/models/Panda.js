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

export default Panda;