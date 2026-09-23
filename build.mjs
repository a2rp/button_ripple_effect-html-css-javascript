import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.dirname(fileURLToPath(import.meta.url));
const output = path.join(root, "dist");
const files = ["index.html", "script.js", "style.css", "style.css.map", "style.scss", "LICENSE", "README.md", "screenshot.png"];

fs.rmSync(output, { recursive: true, force: true });
fs.mkdirSync(output, { recursive: true });

for (const file of files) {
    fs.copyFileSync(path.join(root, file), path.join(output, file));
}

fs.cpSync(path.join(root, "public"), path.join(output, "public"), { recursive: true });
console.log("Static site build completed.");
