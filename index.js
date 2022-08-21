const core = require('@actions/core');
const fs = require("fs")

const toml = require("toml")

try {
    const path = core.getInput("path")
    const tomlFile = fs.readFileSync(path).toString()
    const {package} = toml.parse(tomlFile)
    core.setOutput("version", package.version)
    core.setOutput("crateName", package.name)
    core.setOutput("lastBuiltCrateName", `${package.name}-${package.version}.crate`)
} catch (err) {
    core.setFailed(err.message)
}