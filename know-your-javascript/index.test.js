"use strict";

const { expect } = require("@jest/globals");


const originalLogger = console.log;
afterEach(() => {
  jest.clearAllMocks();
  delete global.foo;
  console.log = originalLogger;
});

test("Arithmetic Operators", () => {
  expect(2 + 3).toBe(_);
  expect(10 - 4).toBe(_);
  expect(2 * 3).toBe(_);
  expect(10 % 3).toBe(_);

  let myNumber = 2;
  expect(++myNumber).toBe(_);
  expect(--myNumber).toBe(_);
  expect(myNumber++).toBe(_);
});

test("Comparison Operators", () => {
  expect(5 > 2).toBe(_);
  expect(5 >= 5).toBe(_);
  expect(5 <= 4).toBe(_);
  expect(2 == 2).toBe(_);
  expect("foo" === "bar").toBe(_);
  expect(2 == "2").toBe(_);
  expect(5 !== "5").toBe(_);
  expect(5 != "5").toBe(_);
  expect(8 === "8").toBe(_);
  expect(undefined == null).toBe(_);
});

test("Logical Operators", () => {
  const x = "Hello, world!";
  const y = 3.14;

  let a;
  if (typeof y === "number" && typeof x === "string") {
    a = "Sweet !";
  } else {
    a = "salty...";
  }
  const b = y && "hey";
  const z = x.toLowerCase() === "hello, world!" && y > 3 ? "bip" : "boop";

  expect(a).toBe(_);
  expect(b).toBe(_);
  expect(z).toBe(_);
  expect(4 && x.toLowerCase()).toBe(_);
  expect(y - 3.14 || x).toBe(_);
});

test("Classes #1", () => {
  // Write a class that makes the test pass
  // _

  const myDog = new Dog("Snoopy");
  expect(myDog.name).toEqual("SNOOPY");
  expect(myDog.bark()).toEqual("Woof !");
});

test("Classes #2", () => {
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
      super(name, age);
      this.color = color;
      this.name = name.toUpperCase();
    }
    makeNoise() {
      return "meow";
    }
  }

  const myCat = _;
  expect(myCat.color).toEqual("Black");
  expect(myCat.age).toEqual(12);
  expect(typeof myCat.noise).toBe(_);
  expect(typeof myCat.makeNoise).toBe(_);
});

test("Falsy Values", () => {
  // Replace each _ by a different falsy value
  // BONUS: Can you find a 7th falsy value ?
  const falsyValues = ["_", "_", "_", "_", "_", "_"];
  falsyValues.forEach((value) => expect(value).toBeFalsy());
});

test("Value vs Reference", () => {
  function changeSomething(something) {
    if (typeof something === "string") {
      something += "bar";
    } else if (typeof something === "object") {
      something.foo = "bar";
    }

    return something;
  }

  const x = "foo";
  const y = { foo: "foo" };
  const z = changeSomething(x);
  const b = changeSomething(y);

  expect(x).toEqual(_);
  expect(y).toEqual(_);
  expect(z).toEqual(_);
  expect(b).toEqual(_);
});

test("Copy and Mutation", () => {
  let x = { a: 1, b: 2 };
  let y = { a: 3, b: 4 };
  let y2 = Object.assign({}, y, { c: 5 });
  let z = Object.assign(x, y, { foo: "bar" });

  expect(x).toEqual(_);
  expect(y).toEqual(_);
  expect(y2).toEqual(_);
  expect({ ...z }).toEqual(_);
  expect(z).toBe(_);
});

test("Decontructing", () => {
  const x = { a: 1, b: 2, c: 3 };
  const { a, ...z } = x;

  expect(a).toEqual(_);
  expect(z).toEqual(_);

  let arr = [];
  arr.push(...Object.keys(x));
  const [result1, result2, result3] = arr;
  expect(result1).toEqual(_);
  expect(result2).toEqual(_);
  expect(result3).toEqual(_);
});

test("Closure #1", () => {
  let result;
  (function foo(a) {
    return (function bar(b) {
      result = a;
    })(1);
  })(0);

  expect(result).toBe(_);
});

test("Common Higher Order Functions #1", () => {
  console.log = jest.fn();
  const arr = ["One", "Two", "Three"];

  // Write missing code so that the test passes

  expect(console.log.mock.calls[0][0]).toBe("One"); // First log
  expect(console.log.mock.calls[1][0]).toBe("Two"); // Second Log
  expect(console.log.mock.calls[2][0]).toBe("Three"); // Second Log
});

test("Common Higher Order Functions #2", () => {
  const arr = [
    { name: "John", age: 10 },
    { name: "Jane", age: 31 },
    { name: "Neo", age: 25 },
  ];

  // Write the code required for the test to pass
  const upsideDownAdults = _;

  expect(upsideDownAdults).toEqual([
    { eman: "enaJ", age: 31 },
    { eman: "oeN", age: 25 },
  ]);
});

test("Hoisting", () => {
  console.log = jest.fn();
  const hoist = () => {
    try {
      console.log(foo);
      console.log(bar);
      var foo = 1;
      let bar = 2;
    } catch (error) {
      console.log("Error");
    }
  };

  hoist();

  expect(console.log.mock.calls[0][0]).toBe(_); // First log
  expect(console.log.mock.calls[1][0]).toBe(_); // Second Log
});

test("Promises #1", (done) => {
  // doSomethingAsync contains errors. Fix them
  // so that the second test becomes successful
  const doSomethingAsync = () => {
    return new Promise(() => {
      return "hello, world!";
    });
  };

  // Find the expected value
  expect(typeof doSomethingAsync()).toEqual(_);

  // Fix doSomethingAsync to make this pass
  doSomethingAsync().then((value) => {
    expect(value).toEqual("hello, world!");
    done();
  });
});

test("Common Higher Order Functions #3", () => {
  const arr = [
    { name: "Paul", country: "France" },
    { name: "Philip", country: "USA" },
    { name: "Camille", country: "France" },
    { name: "Louis", country: "France" },
    { name: "Mary", country: "USA" },
    { name: "Maya", country: "Spain" },
  ];

  const result = _;

  expect(result).toEqual({
    france: ["Camille", "Louis", "Paul"],
    usa: ["Mary", "Philip"],
    spain: ["Maya"],
  });
});

test("Promises #2", (done) => {
  console.log = jest.fn();
  const doSomethingAsync = (x) => {
    return new Promise((resolve, reject) => {
      if (x === "pass") {
        resolve("pass");
      } else if (x === "fail") {
        reject("fail");
      } else {
        resolve("unknown");
      }
    });
  };
  const catchSomethingAsync = (x) => {
    return doSomethingAsync(x).catch((error) => {
      console.log(error);
      return "error";
    });
  };

  // Find the expected values
  Promise.all([
    catchSomethingAsync("pass"),
    catchSomethingAsync("hell"),
    catchSomethingAsync("fail"),
  ]).then(([x, y, z]) => {
    expect(x).toEqual(_);
    expect(y).toEqual(_);
    expect(z).toEqual(_);
    expect(console.log.mock.calls[0][0]).toBe(_); // First log
    done();
  });
});

test("Async, Await", async () => {
  const somethingAsync = async () => {
    return "hello, world !";
  };

  expect(_).toBeInstanceOf(Promise);
  expect(_).toEqual("hello, world !");
});

test("Closure #2", () => {
  const createSumFunction = () => {
    // Implement createSumFunction so that the tests become valid
  };
  const addThree = createSumFunction(3);
  const addFive = createSumFunction(5);

  expect(addThree(10)).toBe(13);
  expect(addFive(10)).toBe(15);
});

test("Execution Context", () => {
  this.foo = "bar";

  const x = {
    foo: "foo",
    supercali: function () {
      return this.foo;
    },
    fragilisti: () => {
      return this.foo;
    },
  };
  const y = x.supercali();
  const z = x.fragilisti();

  expect(y).toBe(_);
  expect(z).toBe(_);
  expect(x.supercali.call({ foo: "fou?" })).toBe(_);
});

test("Floating Point Rounding error", () => {
  // Fix the statement inside  expect so that test becomes valid
  expect(_(0.1 * 0.2)._).toBe(0.02);
});

test("Closure #3 (guest: setTimeout)", async (done) => {
  console.log = jest.fn();
  jest.useFakeTimers();
  expect.assertions(3);
  const arr = [10, 12, 15];
  for (var i = 0; i < arr.length; i++) {
    setTimeout(function () {
      console.log("Index: " + i + ", element: " + arr[i]);
    }, 3000);
  }
  jest.runAllTimers();
  
  
  expect(console.log.mock.calls[0][0]).toBe(_); // First log
  expect(console.log.mock.calls[1][0]).toBe(_); // Second Log
  expect(console.log.mock.calls[2][0]).toBe(_); // Second Log
  done();
});
