const fs = require("node:fs");

function parse() {
    try {
        const useTestInput = process.argv[2] === "test";
        const filename = useTestInput ? "test-input.txt" : "input.txt";
        const rawData = fs.readFileSync(`./day-02/${filename}`, "utf8");
        return rawData
            .split("\n")
            .filter((x) => x !== "")
            .map((x) => x.replace(/Game \d+: /g, ""));
    } catch (err) {
        console.error("Error reading input:", err);
    }
}

function splitIntoDraws(line) {
    return line.split("; ");
}

function structureDraw(rawDraw) {
    const draw = {
        blue: Number(rawDraw.match(/(\d+) blue/)?.[1]) || 0,
        red: Number(rawDraw.match(/(\d+) red/)?.[1]) || 0,
        green: Number(rawDraw.match(/(\d+) green/)?.[1]) || 0,
    };
    return draw;
}

function isGameImpossible(game) {
    let impossible = false;
    for (draw of game) {
        impossible = draw.red > 12 || draw.green > 13 || draw.blue > 14;
        if (impossible) {
            break;
        }
    }
    return impossible;
}

function part1(data) {
    const structuredData = data.map((line) =>
        splitIntoDraws(line).map((draw) => structureDraw(draw))
    );
    const impossibleGames = structuredData.reduce((acc, curr, idx) => {
        return isGameImpossible(curr) ? acc : idx + 1 + acc;
    }, 0);
    const result = impossibleGames;
    return result;
}

function getFewestCubesForGame(game) {
    return game.reduce(
        (acc, curr) => {
            acc.blue = Math.max(acc.blue, curr.blue);
            acc.green = Math.max(acc.green, curr.green);
            acc.red = Math.max(acc.red, curr.red);
            return acc;
        },
        { blue: 0, green: 0, red: 0 }
    );
}

function getPowerOfDraw(draw) {
    return draw.red * draw.blue * draw.green;
}

function part2(data) {
    const structuredData = data.map((line) =>
        splitIntoDraws(line).map((draw) => structureDraw(draw))
    );
    const minimumSetPerGame = structuredData.map(getFewestCubesForGame);
    const powerSumOfMinimumSetPerGame = minimumSetPerGame.reduce((acc, curr) => getPowerOfDraw(curr) + acc, 0);
    return powerSumOfMinimumSetPerGame;
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
    splitIntoDraws,
    structureDraw,
    part1,
    part2,
};
