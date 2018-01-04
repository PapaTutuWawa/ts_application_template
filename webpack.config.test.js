const path = require("path");
const glob = require("glob");
const nodeExternals = require("webpack-node-externals");

let config = require("./webpack.config.js");

const testPath = path.join(__dirname, "tests");
const node_path = path.join(__dirname, "node_modules");

// Modify the output filename
config.output.filename = "test.js";

// No plugins
config.plugins = [];

// We have **MANY** entrypoints
config.entry = glob.sync(path.join(testPath, "**/test_*.ts"));

module.exports = config;
