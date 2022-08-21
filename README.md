# Rust configuration reader action
This action will read the name, version and the latest built crate name. (**THIS IS CALCULATED FROM THE NAME AND VERSION, NOT FROM AN ACTUAL DIR READ**)
# Inputs
- `path`: (Optional, defaults to `Cargo.toml`) The path to `Cargo.toml`

# Outputs
- `version`: The crate version
- `lastBuiltCrateName`: The last built crate version (`{name}-{version}.crate`)
- `crateName`: The name of the crate