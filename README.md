# npm-publish

A GitHub Action for publishing NPM packages.

## Usage

To use the GitHub Action, add the following to your job:

```yaml
- uses: conventional-actions/npm-publish@v1
```

### Inputs

| Name     | Default  | Description                                                                                                                                                        |
|----------|----------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `access` | N/A      | when publishing scoped packages, the access level defaults to `restricted`. If you want your scoped package to be publicly viewable (and installable) set `public` |
| `tag`    | `latest` | tag of the version                                                                                                                                                 | 

### Outputs

No outputs

### Example

```yaml
on:
  push:
    branches:
      - main

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - id: gorevive
        uses: conventional-actions/npm-publish@v1
```

## License

The scripts and documentation in this project are released under the [MIT License](LICENSE).
