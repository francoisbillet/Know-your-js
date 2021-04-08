"use strict";

const { expect } = require("@jest/globals");

const originalLogger = console.log;
afterEach(() => {
  jest.clearAllMocks();
  delete global.foo;
  console.log = originalLogger;
});

describe("Arithmetic Operators", require("./1-arithmetic-operators"));
describe("Comparison Operators", require("./2-comparison-operators"));
describe("Logical Operators", require("./3-logical-operators"));
describe("Classes", require("./4-classes"));
describe("Falsy Values", require("./5-falsies"));
describe("Value vs Reference", require("./6-value-ref"));
describe("Copy and Mutation", require("./7-copy-and-mutation"));
describe("Deconstruction", require("./8-deconstruction"));
describe("Closures", require("./9-closure"));
describe("Higher Order Functions", require("./10-higher-order-functions"));
describe("Hoisting", require("./11-hoisting"));
describe("Promises", require("./12-promises"));
describe("Async / Await", require("./13-async-await"));
describe("Context", require("./14-context"));
