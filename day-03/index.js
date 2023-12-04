const fs = require("node:fs");

function parse() {
    try {
        const useTestInput = process.argv[2] === "test";
        const filename = useTestInput ? "test-input.txt" : "input.txt";
        const rawData = fs.readFileSync(`./day-03/${filename}`, "utf8");
        return rawData.split("\n").filter((x) => x !== "");
    } catch (err) {
        console.error("Error reading input:", err);
    }
}

// https://stackoverflow.com/a/9727332
const symbolRegex = /[^\w\.]|_/g;
const digitRegex = /\d/g;

/**
 * Key is serialised coordinates in the form "lineIdx,stringIdx" e.g. "2,5"
 * Value is the number value
 */
const partNumbers = new Map();

function part1(data) {
    data.forEach((line, lineIdx) => {
        const matches = Array.from(line.matchAll(symbolRegex));
        matches.forEach((match) => {
            const symbolIdx = match.index;
            if (lineIdx > 0) {
                if (symbolIdx > 0) {
                    const coord = `${lineIdx - 1},${symbolIdx - 1}`;
                    const value = data[lineIdx - 1][symbolIdx - 1];
                    if (digitRegex.test(value) && !partNumbers.has(coord)) {
                        partNumbers.set(coord, value);
                    }
                }
                const coord = `${lineIdx - 1},${symbolIdx}`;
                const value = data[lineIdx - 1][symbolIdx];
                if (digitRegex.test(value) && !partNumbers.has(coord)) {
                    partNumbers.set(coord, value);
                }
                if (symbolIdx < line.length - 1) {
                    const coord = `${lineIdx - 1},${symbolIdx + 1}`;
                    const value = data[lineIdx - 1][symbolIdx + 1];
                    if (digitRegex.test(value) && !partNumbers.has(coord)) {
                        partNumbers.set(coord, value);
                    }
                }
            }
            if (symbolIdx > 0) {
                const coord = `${lineIdx},${symbolIdx - 1}`;
                const value = data[lineIdx][symbolIdx - 1];
                if (digitRegex.test(value) && !partNumbers.has(coord)) {
                    partNumbers.set(coord, value);
                }
            }
            if (symbolIdx < line.length - 1) {
                const coord = `${lineIdx},${symbolIdx + 1}`;
                const value = data[lineIdx][symbolIdx + 1];
                if (digitRegex.test(value) && !partNumbers.has(coord)) {
                    partNumbers.set(coord, value);
                }
            }
            if (lineIdx < data.length - 1) {
                if (symbolIdx > 0) {
                    const coord = `${lineIdx + 1},${symbolIdx - 1}`;
                    const value = data[lineIdx + 1][symbolIdx - 1];
                    if (digitRegex.test(value) && !partNumbers.has(coord)) {
                        partNumbers.set(coord, value);
                    }
                }
                const coord = `${lineIdx + 1},${symbolIdx}`;
                const value = data[lineIdx + 1][symbolIdx];
                if (digitRegex.test(value) && !partNumbers.has(coord)) {
                    partNumbers.set(coord, value);
                }
                if (symbolIdx < line.length - 1) {
                    const coord = `${lineIdx + 1},${symbolIdx + 1}`;
                    const value = data[lineIdx + 1][symbolIdx + 1];
                    if (digitRegex.test(value) && !partNumbers.has(coord)) {
                        partNumbers.set(coord, value);
                    }
                }
            }
        });

        console.log(partNumbers);
    });

    return data;
}

function part2(data) {
    return data;
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
    part1,
    part2,
};
