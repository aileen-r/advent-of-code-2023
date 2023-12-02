require("node:fs");
const { parse, getFirstAndLastDigits, part1 } = require("./index");

const rawTestData = "1abc2\npqr3stu8vwx\na1b2c3d4e5f\ntreb7uchet";

jest.mock("node:fs", () => ({
    readFileSync: jest.fn().mockReturnValue(rawTestData),
}));

const testData = ["1abc2", "pqr3stu8vwx", "a1b2c3d4e5f", "treb7uchet"];

describe("data parsing", () => {
    it("parses .txt input into array of strings per line", () => {
        const parsedData = parse();
        expect(parsedData).toStrictEqual(testData);
    });
});

describe("getFirstAndLastDigits", () => {
    test("test input expected results", () => {
        const expectedResults = [12, 38, 15, 77];
        testData.forEach((line, idx) => {
            expect(getFirstAndLastDigits(line)).toBe(expectedResults[idx]);
        });
    });
    test("input with adjacent digit chars", () => {
        expect(getFirstAndLastDigits("one111jxlmc7tvklrmhdpsix")).toBe(17);
    });
});

describe("expected results", () => {
    test("part1", () => {
        const testSolution = part1(testData);
        expect(testSolution).toBe(142);
    });
});
