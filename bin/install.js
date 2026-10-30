#!/usr/bin/env node
// Installs the Marrakech Tailor Made Tours skill for Claude Code.
// Usage: npx github:AyoubF/marrakech-tailor-made-tours [--project]
const fs = require("fs");
const path = require("path");
const os = require("os");

const name = "marrakech-tailor-made-tours";
const source = path.join(__dirname, "..", name);
const project = process.argv.includes("--project");
const base = project ? path.join(process.cwd(), ".claude", "skills") : path.join(os.homedir(), ".claude", "skills");
const dest = path.join(base, name);

if (!fs.existsSync(path.join(source, "SKILL.md"))) {
  console.error("Could not find the skill files. Please try again.");
  process.exit(1);
}
fs.mkdirSync(base, { recursive: true });
fs.rmSync(dest, { recursive: true, force: true });
fs.cpSync(source, dest, { recursive: true });

console.log("\n  Marrakech Tailor Made Tours skill installed");
console.log("  " + dest + "\n");
console.log("  Open Claude Code and type: help me plan a trip to Marrakech");
console.log("  Private journeys: https://marrakechtailormadetours.com/?utm_source=github&utm_medium=npx\n");
