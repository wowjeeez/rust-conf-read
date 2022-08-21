const core = require('@actions/core');
const fs = require("fs")


const parser = require('./parser');
const compiler = require('./compiler');

const parse = (input) => compiler.compile(parser.parse(input.toString()))

try {
    const path = core.getInput("path")
    const tomlFile = fs.readFileSync(path).toString()
    const {package} = parse(tomlFile)
    core.setOutput("version", package.version)
    core.setOutput("crateName", package.name)
    core.setOutput("lastBuiltCrateName", `${package.name}-${package.version}.crate`)
} catch (err) {
    core.setFailed(err.message)
}