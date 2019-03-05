var Benchmark = require("benchmark");
var once = new Benchmark.Suite();
var eightTimesTheSame = new Benchmark.Suite();
var fourTimes = new Benchmark.Suite();

var styles = {
  test: {
    marginTop: "10vw",
    fontSize: 10,
    shadowOffset: { width: 10, height: "10vw" },
    shadowRadius: "1vw",
    shadowColor: "red",
    shadowOpacity: 1
  }
};

var dimensions = {
  width: 480,
  height: 100
};

var transform = require("./dist/index").transform;

console.log("-----------------------------------------");

once
  .add("1 call", function() {
    transform(styles, dimensions);
  })
  .on("cycle", function(event) {
    console.log(String(event.target));
  })
  .on("complete", function() {
    console.log("-----------------------------------------");
  })
  .run({ async: false });

fourTimes
  .add("4 calls", function() {
    transform(styles, dimensions);
    transform(styles, dimensions);
    transform(styles, dimensions);
    transform(styles, dimensions);
  })
  .on("cycle", function(event) {
    console.log(String(event.target));
  })
  .on("complete", function() {
    console.log("-----------------------------------------");
  })
  .run({ async: false });

eightTimesTheSame
  .add("8 calls", function() {
    transform(styles, dimensions);
    transform(styles, dimensions);
    transform(styles, dimensions);
    transform(styles, dimensions);
    transform(styles, dimensions);
    transform(styles, dimensions);
    transform(styles, dimensions);
    transform(styles, dimensions);
  })
  .on("cycle", function(event) {
    console.log(String(event.target));
  })
  .on("complete", function() {
    console.log("-----------------------------------------");
  })
  .run({ async: false });
