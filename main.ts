const fs = require("fs");
const path = require("path");

const joke =
  "I asked my coding agent to fix one typo on the login button. It shipped a microservices architecture, a new database, and a 40-file refactor. The typo is still there.";

// The gate allows 1 to 280 Unicode code points, so validate before writing.
const chars = [...joke];
if (chars.length < 1 || chars.length > 280) {
  throw new Error(`joke must be 1-280 characters, got ${chars.length}`);
}

const outDir = "/output";
const outFile = path.join(outDir, "entry.txt");

fs.mkdirSync(outDir, { recursive: true });
fs.writeFileSync(outFile, joke, "utf8");
