module.exports = () => {
  test("#1", () => {
    // Write a class that makes the test pass
    // _

    const myDog = new Dog("Snoopy");
    expect(myDog.name).toEqual("SNOOPY");
    expect(myDog.bark()).toEqual("Woof !");
  });

  test("#2", () => {
    class Animal {
      constructor(name, age) {
        this.name = name;
        this.age = age;
      }
      get noise() {
        return this.makeNoise();
      }
      makeNoise() {
        return "Weird noise";
      }
    }

    class Cat extends Animal {
      constructor(color, name, age) {
        _;
      }
    }

    const myCat = _; // Instantiate the cat class

    // Complete the "Cat" class so that these tests pass
    expect(myCat.color).toEqual("Black");
    expect(myCat.age).toEqual(12);
    expect(myCat.makeNoise()).toBe("meow");
  });
};
