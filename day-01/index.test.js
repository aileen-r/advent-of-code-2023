require("node:fs");
const {
    parse,
    getFirstAndLastDigits,
    getAllDigitsAndSpelledDigits,
    reducer,
    part1,
    part2,
} = require("./index");

const rawTestData = "1abc2\npqr3stu8vwx\na1b2c3d4e5f\ntreb7uchet";

jest.mock("node:fs", () => ({
    readFileSync: jest.fn().mockReturnValue(rawTestData),
}));

const testData1 = ["1abc2", "pqr3stu8vwx", "a1b2c3d4e5f", "treb7uchet"];
const testData2 = [
    "two1nine",
    "eightwothree",
    "abcone2threexyz",
    "xtwone3four",
    "4nineeightseven2",
    "zoneight234",
    "7pqrstsixteen",
];

describe("data parsing", () => {
    it("parses .txt input into array of strings per line", () => {
        const parsedData = parse();
        expect(parsedData).toStrictEqual(testData1);
    });
});

describe("getFirstAndLastDigits", () => {
    test("test input expected results", () => {
        const expectedResults = [12, 38, 15, 77];
        testData1.forEach((line, idx) => {
            expect(getFirstAndLastDigits(line)).toBe(expectedResults[idx]);
        });
    });
    test("input with adjacent digit chars", () => {
        expect(getFirstAndLastDigits("one111jxlmc7tvklrmhdpsix")).toBe(17);
    });
});

describe("getAllDigitsAndSpelledDigits", () => {
    test("test input expected results", () => {
        const expectedResults = [
            ["2", "1", "9"], // "two1nine"
            ["8", "2", "3"], // "eightwothree"
            ["1", "2", "3"], // "abcone2threexyz"
            ["2", "1", "3", "4"], // "xtwone3four"
            ["4", "9", "8", "7", "2"], // "4nineeightseven2"
            ["1", "8", "2", "3", "4"], // "zoneight234"
            ["7", "6"], // "7pqrstsixteen"
        ];
        testData2.forEach((line, idx) => {
            expect(getAllDigitsAndSpelledDigits(line)).toStrictEqual(
                expectedResults[idx]
            );
        });
    });
    test("reducer", () => {
        const expectedResults = [
            29,
            83, // "eightwothree" - overlapping characters?
            13,
            24, // "xtwone3four" - this could be dodgy
            42,
            14, // "zoneight234" - likewise
            76,
        ];
        testData2.forEach((line, idx) => {
            expect(
                reducer(0, line)
            ).toBe(expectedResults[idx]);
        });
    });
});

describe("expected results", () => {
    test("part1", () => {
        const testSolution = part1(testData1);
        expect(testSolution).toBe(142);
    });

    test("part2", () => {
        const testSolution = part2(testData2);
        expect(testSolution).toBe(281);
    });
});
