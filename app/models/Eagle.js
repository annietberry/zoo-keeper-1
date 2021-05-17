
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

export default Eagle;