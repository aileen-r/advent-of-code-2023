require("node:fs");
const {
    parse,
    splitIntoDraws,
    structureDraw,
    part1,
    part2,
} = require("./index");

const rawTestData = `467..114..
...*......
..35..633.
......#...
617*......
.....+.58.
..592.....
......755.
...$.*....
.664.598..
`;

jest.mock("node:fs", () => ({
    readFileSync: jest.fn().mockReturnValue(rawTestData),
}));

const testData = [
    "467..114..",
    "...*......",
    "..35..633.",
    "......#...",
    "617*......",
    ".....+.58.",
    "..592.....",
    "......755.",
    "...$.*....",
    ".664.598..",
];

describe("data parsing", () => {
    it("parses .txt input into array of strings per line", () => {
        const parsedData = parse();
        expect(parsedData).toStrictEqual(testData);
    });
    // it.each([
    //     ["8 green, 6 blue, 20 red", { blue: 6, red: 20, green: 8 }],
    //     ["5 green, 1 red", { blue: 0, red: 1, green: 5 }],
    // ])("structures draw %i", (rawDraw, expected) => {
    //     expect(structureDraw(rawDraw)).toStrictEqual(expected);
    // });
});

describe("part1", () => {
    it("returns expected result for test data", () => {
        expect(part1(testData)).toBe(4361);
    });
});

describe("part2", () => {
    it.skip("returns expected result for test data", () => {
        expect(part2(testData)).toBe(0);
    });
});
