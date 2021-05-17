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

export default Bird;