const fs = require("node:fs");

function parse() {
    try {
        const useTestInput = process.argv[2] === "test";
        const filename = useTestInput ? "test-input.txt" : "input.txt";
        const rawData = fs.readFileSync(`./day-01/${filename}`, "utf8");
        return rawData.split("\n").filter((x) => x !== "");
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
    const result = data.reduce(
        (acc, curr) => acc + getFirstAndLastDigits(curr),
        0
    );
    return result;
}

const numberStringsToReplace = [
    "one",
    "two",
    "three",
    "four",
    "five",
    "six",
    "seven",
    "eight",
    "nine",
];
/(?=[a-z][a-z])/g;
const regex = new RegExp(`(?=(${numberStringsToReplace.join("|")}|\\d))`, "g");

function getAllDigitsAndSpelledDigits(line) {
    const matches = Array.from(line.matchAll(regex)).map((match) => {
        const numberStringIdx = numberStringsToReplace.indexOf(match[1]);
        return numberStringIdx > -1
            ? (numberStringIdx + 1).toString()
            : match[1];
    });
    return matches;
}

function reducer(acc, curr) {
    const digitsArray = getAllDigitsAndSpelledDigits(curr);
    return acc + Number(digitsArray.at(0) + digitsArray.at(-1));
} 

function part2(data) {
    const result = data.reduce(reducer, 0);
    return result;
}

function run() {
    const data = parse();
    const part1Solution = part1(data);
    console.log("Part 1 solution:", part1Solution);
    const part2Solution = part2(data);
    console.log("Part 2 solution:", part2Solution);
}

run();

module.exports = {
    parse,
    getFirstAndLastDigits,
    getAllDigitsAndSpelledDigits,
    reducer,
    part1,
    part2,
};
