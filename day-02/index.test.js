require("node:fs");
const {
    parse,
    splitIntoDraws,
    structureDraw,
    part1,
    part2,
} = require("./index");

const rawTestData = `Game 1: 3 blue, 4 red; 1 red, 2 green, 6 blue; 2 green
Game 2: 1 blue, 2 green; 3 green, 4 blue, 1 red; 1 green, 1 blue
Game 3: 8 green, 6 blue, 20 red; 5 blue, 4 red, 13 green; 5 green, 1 red
Game 4: 1 green, 3 red, 6 blue; 3 green, 6 red; 3 green, 15 blue, 14 red
Game 5: 6 red, 1 blue, 3 green; 2 blue, 1 red, 2 green
`;

jest.mock("node:fs", () => ({
    readFileSync: jest.fn().mockReturnValue(rawTestData),
}));

const testData = [
    "3 blue, 4 red; 1 red, 2 green, 6 blue; 2 green",
    "1 blue, 2 green; 3 green, 4 blue, 1 red; 1 green, 1 blue",
    "8 green, 6 blue, 20 red; 5 blue, 4 red, 13 green; 5 green, 1 red",
    "1 green, 3 red, 6 blue; 3 green, 6 red; 3 green, 15 blue, 14 red",
    "6 red, 1 blue, 3 green; 2 blue, 1 red, 2 green",
];

describe("data parsing", () => {
    it("parses .txt input into array of strings per line", () => {
        const parsedData = parse();
        expect(parsedData).toStrictEqual(testData);
    });
    it("splits line into array of 'draws'", () => {
        const expectedResults = [
            ["3 blue, 4 red", "1 red, 2 green, 6 blue", "2 green"],
            ["1 blue, 2 green", "3 green, 4 blue, 1 red", "1 green, 1 blue"],
            [
                "8 green, 6 blue, 20 red",
                "5 blue, 4 red, 13 green",
                "5 green, 1 red",
            ],
            [
                "1 green, 3 red, 6 blue",
                "3 green, 6 red",
                "3 green, 15 blue, 14 red",
            ],
            ["6 red, 1 blue, 3 green", "2 blue, 1 red, 2 green"],
        ];
        testData.forEach((line, idx) => {
            expect(splitIntoDraws(line)).toStrictEqual(expectedResults.at(idx));
        });
    });
    it.each([
        ["8 green, 6 blue, 20 red", { blue: 6, red: 20, green: 8 }],
        ["5 green, 1 red", { blue: 0, red: 1, green: 5 }],
    ])("structures draw %i", (rawDraw, expected) => {
        expect(structureDraw(rawDraw)).toStrictEqual(expected);
    });
});

describe("part1", () => {
    it("returns expected result for test data", () => {
        expect(part1(testData)).toBe(8);
    });
});
