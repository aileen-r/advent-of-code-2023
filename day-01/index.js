const fs = require("node:fs");

// TODO: means to switch test and real inputs

function parse() {
  try {
    const rawData = fs.readFileSync("./day-01/input.txt", "utf8");
    return rawData.split("\n").filter(x => x !== "");
  } catch (err) {
    console.error("Error reading input:", err);
  }
}

function getFirstAndLastDigits(line) {
    const digits = line.match(/\d+/g).join("");
    const result = Number(digits.at(0) + digits.at(-1));
    return result;
}

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
