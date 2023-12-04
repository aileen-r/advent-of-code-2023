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
const numberRegex = /\d+/g;

/**
 * Key is serialised coordinates in the form "lineIdx,stringIdx" e.g. "2,5"
 * stringIdx is the starting index of the number
 * Value is the number value
 */
const partNumbers = new Map();

function getAdjacentCoordinates(
    numberString,
    lineIdx,
    stringIdx,
    linesLength,
    stringLength
) {
    const lineCoordRange = [
        Math.max(lineIdx - 1, 0),
        Math.min(lineIdx + 1, linesLength - 1),
    ];
    const stringCoordRange = [
        Math.max(stringIdx - 1, 0),
        Math.min(stringIdx + numberString.length, stringLength - 1),
    ];
    // console.log(numberString);
    // console.log(lineIdx);
    // console.log(stringIdx);
    // console.log(linesLength);
    // console.log(stringLength);
    // console.log(lineCoordRange);
    // console.log(stringCoordRange);
    const coords = [];
    for (let l = lineCoordRange[0]; l <= lineCoordRange[1]; l++) {
        for (let s = stringCoordRange[0]; s <= stringCoordRange[1]; s++) {
            if (
                l === lineIdx &&
                s >= stringIdx &&
                s < stringIdx + numberString.length
            ) {
                continue;
            }
            coords.push([l, s]);
        }
    }
    return coords;
}

function getNumberMatchesFromLine(line) {
    const rawMatches = Array.from(line.matchAll(numberRegex));
    const matches = rawMatches.map(m => ({index: m.index, value: m[0]}));
    return matches;
}

function part1(data) {
    const partNumbers = [];
    data.forEach((line, lineIdx) => {
        const numberMatches = getNumberMatchesFromLine(line);
        numberMatches.forEach((match) => {
            const adjacentCoords = getAdjacentCoordinates(match.value, lineIdx, match.index, data.length, line.length);
        });
        //     const hasAdjacentSymbol = adjacentCoords.some((coord) => {
        //         console.log(match[0], coord);
        //         symbolRegex.test(data[coord[0]][coord[1]]);
        //     });
        //     if (hasAdjacentSymbol) {
        //         partNumbers.push(Number(match[0]));
        //     }
        // });
    });

    return partNumbers.reduce((acc, curr) => acc + curr, 0);
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
    getNumberMatchesFromLine,
    getAdjacentCoordinates,
    part1,
    part2,
};
