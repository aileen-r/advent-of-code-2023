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
    console.log(line)
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
const regex = new RegExp(numberStringsToReplace.join("|"), "g");

function replaceSpelledNumbersWithDigits(line) {
    const replacedString = line.replace(
        regex,
        (match) => numberStringsToReplace.indexOf(match) + 1
    );
    return replacedString;
}

function part2(data) {
    const result = data.reduce(
        (acc, curr) =>
            acc + getFirstAndLastDigits(replaceSpelledNumbersWithDigits(curr)),
        0
    );
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
    replaceSpelledNumbersWithDigits,
    part1,
    part2,
};
