const path = require("path");
const nodeExternals = require("webpack-node-externals");

// This helper function is not strictly necessary.
// I just don't like repeating the path.join a dozen times.
function srcPath(subdir) {
    return path.join(__dirname, "src", subdir);
}

const node_path = path.join(__dirname, "node_modules");

module.exports = {
    entry: "./src/cli.ts",
    target: "node",

    // Tell Webpack that we **DON'T** want to do anything to the files
    // in node_modules
    externals: [nodeExternals()],

    // Tell Webpack that we use source maps
    devtool: "inline-source-map",
    resolve: {
        extensions: [".ts"]
    },
    module: {
        rules: [
            {
                // Before we load any files into the TypeScript Transpiler, lint them!
                test: /\.ts$/,
                enforce: "pre",
                use: "tslint-loader"
            },
            {
                // Load them so that we can transpile them
                test: /\.ts$/,
                use: "ts-loader",
                exclude: /node_modules/
            }
        ]
    },
    output: {
        filename: "template.js",
        path: path.resolve(__dirname, "dist")
    }
};
