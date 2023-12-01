require("node:fs");
const {parse, part1} = require("./index");

const rawTestData = "1abc2\npqr3stu8vwx\na1b2c3d4e5f\ntreb7uchet";

jest.mock("node:fs", () => ({
    readFileSync: jest.fn().mockReturnValue(rawTestData)
}))

const testData = ["1abc2", "pqr3stu8vwx", "a1b2c3d4e5f", "treb7uchet"];

describe("data parsing", () => {
    it("parses .txt input into array of strings per line", () => {
        const parsedData = parse();
        expect(parsedData).toStrictEqual(testData);
    });
});
