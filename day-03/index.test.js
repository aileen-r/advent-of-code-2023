require("node:fs");
const {
    parse,
    getNumberMatchesFromLine,
    part1,
    part2,
    getAdjacentCoordinates,
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
});

describe("part1", () => {
    test.each([
        [
            "467..114..",
            [
                { index: 0, value: "467" },
                { index: 5, value: "114" },
            ],
        ],
        ["...$.*....", []],
        [
            ".664.598..",
            [
                { index: 1, value: "664" },
                { index: 5, value: "598" },
            ],
        ],
    ])("getNumberMatchesFromLine %s", (line, expected) => {
        expect(getNumberMatchesFromLine(line)).toStrictEqual(expected);
    });

    test.each([
        [
            "467",
            0,
            0,
            10,
            10,
            [
                [0, 3],
                [1, 0],
                [1, 1],
                [1, 2],
                [1, 3],
            ],
        ],
        [
            "592",
            6,
            2,
            10,
            10,
            [
                [5, 1],
                [5, 2],
                [5, 3],
                [5, 4],
                [5, 5],
                [6, 1],
                [6, 5],
                [7, 1],
                [7, 2],
                [7, 3],
                [7, 4],
                [7, 5],
            ],
        ],
        [
            "664",
            9,
            1,
            10,
            10,
            [
                [8, 0],
                [8, 1],
                [8, 2],
                [8, 3],
                [8, 4],
                [9, 0],
                [9, 4],
            ],
        ],
        [
            "696",
            139,
            6,
            140,
            140,
            [
                [138, 5],
                [138, 6],
                [138, 7],
                [138, 8],
                [138, 9],
                [139, 5],
                [139, 9],
            ],
        ],
        [
            "215",
            4,
            137,
            140,
            140,
            [
                [3, 136],
                [3, 137],
                [3, 138],
                [3, 139],
                [4, 136],
                [5, 136],
                [5, 137],
                [5, 138],
                [5, 139],
            ],
        ],
    ])(
        "getAdjacentCoordinates %s",
        (value, lineIdx, stringIdx, linesLength, stringLength, expected) => {
            expect(
                getAdjacentCoordinates(
                    value,
                    lineIdx,
                    stringIdx,
                    linesLength,
                    stringLength
                )
            ).toStrictEqual(expected);
        }
    );

    it.skip("returns expected result for test data", () => {
        expect(part1(testData)).toBe(4361);
    });
});

describe("part2", () => {
    it.skip("returns expected result for test data", () => {
        expect(part2(testData)).toBe(0);
    });
});
