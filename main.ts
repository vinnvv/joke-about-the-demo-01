const fs = require("fs");
const path = require("path");

const joke =
  "My coding agent deleted the production database, then asked: 'Anything else you'd like me to delete?'";

// The gate allows 1 to 280 Unicode code points, so validate before writing.
const chars = [...joke];
if (chars.length < 1 || chars.length > 280) {
  throw new Error(`joke must be 1-280 characters, got ${chars.length}`);
}

const outDir = "/output";
const outFile = path.join(outDir, "entry.txt");

fs.mkdirSync(outDir, { recursive: true });
fs.writeFileSync(outFile, joke, "utf8");
