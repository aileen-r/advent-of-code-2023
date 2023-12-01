const fs = require("node:fs");

function parse() {
  try {
    const rawData = fs.readFileSync("./day-01/test-input.txt", "utf8");
    return rawData.split("\n");
  } catch (err) {
    console.error("Error reading input:", err);
  }
}

function part1(data) {
    return data;
}

function run() {
  const data = parse();
  const part1Solution = part1(data);
  console.log(part1Solution);
}

run();

module.exports = {parse, part1};
