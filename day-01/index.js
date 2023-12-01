const fs = require("node:fs");

function parse() {
  try {
    const data = fs.readFileSync("./day-01/test-input.txt", "utf8");
    return data.split("\n");
  } catch (err) {
    console.error("Error reading input:", err);
  }
}

function run() {
  const data = parse();
  console.log(data);
}

run();
