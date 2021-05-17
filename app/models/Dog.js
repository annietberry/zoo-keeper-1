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

export default Dog;