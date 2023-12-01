const fs = require("node:fs");

function parse() {
  try {
    const rawData = fs.readFileSync("./day-01/test-input.txt", "utf8");
    return rawData.split("\n").filter(x => x !== "");
  } catch (err) {
    console.error("Error reading input:", err);
  }
}

function getFirstAndLastDigits(line) {
    const digits = line.match(/\d+/g);
    return Number(digits.at(0) + digits.at(-1));
};

function part1(data) {
    const result = data.reduce((acc, curr) => acc + getFirstAndLastDigits(curr), 0);
    return result;
}

function run() {
  const data = parse();
  const part1Solution = part1(data);
  console.log("Part 1 solution:", part1Solution);
}

run();

module.exports = {parse, getFirstAndLastDigits, part1};
