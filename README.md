transform-json-cli
======================

Creates aws lambda development json for like events

[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![Version](https://img.shields.io/npm/v/transform-json-cli.svg)](https://npmjs.org/package/transform-json-cli)
[![CircleCI](https://circleci.com/gh/arjanvanderleden/transform-json-cli/tree/master.svg?style=shield)](https://circleci.com/gh/arjanvanderleden/transform-json-cli/tree/master)
[![Downloads/week](https://img.shields.io/npm/dw/transform-json-cli.svg)](https://npmjs.org/package/transform-json-cli)
[![License](https://img.shields.io/npm/l/transform-json-cli.svg)](https://github.com/arjanvanderleden/transform-json-cli/blob/master/package.json)

<!-- toc -->
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->
# Usage
<!-- usage -->
```sh-session
$ npm install -g transform-json-cli
$ transform-json-cli COMMAND
running command...
$ transform-json-cli (-v|--version|version)
transform-json-cli/0.1.1 darwin-x64 node-v12.18.3
$ transform-json-cli --help [COMMAND]
USAGE
  $ transform-json-cli COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`transform-json-cli all`](#transform-json-cli-all)
* [`transform-json-cli help [COMMAND]`](#transform-json-cli-help-command)
* [`transform-json-cli list`](#transform-json-cli-list)
* [`transform-json-cli single TRANSFORM`](#transform-json-cli-single-transform)

## `transform-json-cli all`

runs all transforms on input data

```
USAGE
  $ transform-json-cli all

OPTIONS
  -h, --help     show CLI help
  -i, --in=in    (required) json file: input data to be used for transform
  -o, --out=out  (required) output folder
```

_See code: [src/commands/all.ts](https://github.com/arjanvanderleden/transform-json-cli/blob/v0.1.1/src/commands/all.ts)_

## `transform-json-cli help [COMMAND]`

display help for transform-json-cli

```
USAGE
  $ transform-json-cli help [COMMAND]

ARGUMENTS
  COMMAND  command to show help for

OPTIONS
  --all  see all commands in CLI
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v3.2.0/src/commands/help.ts)_

## `transform-json-cli list`

describe the command here

```
USAGE
  $ transform-json-cli list

OPTIONS
  -h, --help  show CLI help
```

_See code: [src/commands/list.ts](https://github.com/arjanvanderleden/transform-json-cli/blob/v0.1.1/src/commands/list.ts)_

## `transform-json-cli single TRANSFORM`

runs a single transform on input data

```
USAGE
  $ transform-json-cli single TRANSFORM

OPTIONS
  -h, --help     show CLI help
  -i, --in=in    (required) json file: input data to be used for transform
  -o, --out=out  output file name: defaults to writing to console
```

_See code: [src/commands/single.ts](https://github.com/arjanvanderleden/transform-json-cli/blob/v0.1.1/src/commands/single.ts)_
<!-- commandsstop -->
