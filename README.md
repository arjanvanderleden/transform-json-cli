create-aws-lambda-json
======================

Creates aws lambda development json for like events

[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![Version](https://img.shields.io/npm/v/create-aws-lambda-json.svg)](https://npmjs.org/package/create-aws-lambda-json)
[![CircleCI](https://circleci.com/gh/arjanvanderleden/create-aws-lambda-json/tree/master.svg?style=shield)](https://circleci.com/gh/arjanvanderleden/create-aws-lambda-json/tree/master)
[![Downloads/week](https://img.shields.io/npm/dw/create-aws-lambda-json.svg)](https://npmjs.org/package/create-aws-lambda-json)
[![License](https://img.shields.io/npm/l/create-aws-lambda-json.svg)](https://github.com/arjanvanderleden/create-aws-lambda-json/blob/master/package.json)

<!-- toc -->
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->
# Usage
<!-- usage -->
```sh-session
$ npm install -g create-aws-lambda-json
$ create-aws-lambda-json COMMAND
running command...
$ create-aws-lambda-json (-v|--version|version)
create-aws-lambda-json/0.0.1 darwin-x64 node-v12.18.3
$ create-aws-lambda-json --help [COMMAND]
USAGE
  $ create-aws-lambda-json COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`create-aws-lambda-json all`](#create-aws-lambda-json-all)
* [`create-aws-lambda-json help [COMMAND]`](#create-aws-lambda-json-help-command)
* [`create-aws-lambda-json list`](#create-aws-lambda-json-list)
* [`create-aws-lambda-json single TRANSFORM`](#create-aws-lambda-json-single-transform)

## `create-aws-lambda-json all`

runs all transforms on input data

```
USAGE
  $ create-aws-lambda-json all

OPTIONS
  -h, --help     show CLI help
  -i, --in=in    (required) json file: input data to be used for transform
  -o, --out=out  (required) output folder
```

_See code: [src/commands/all.ts](https://github.com/arjanvanderleden/create-aws-lambda-json/blob/v0.0.1/src/commands/all.ts)_

## `create-aws-lambda-json help [COMMAND]`

display help for create-aws-lambda-json

```
USAGE
  $ create-aws-lambda-json help [COMMAND]

ARGUMENTS
  COMMAND  command to show help for

OPTIONS
  --all  see all commands in CLI
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v3.2.0/src/commands/help.ts)_

## `create-aws-lambda-json list`

describe the command here

```
USAGE
  $ create-aws-lambda-json list

OPTIONS
  -h, --help  show CLI help
```

_See code: [src/commands/list.ts](https://github.com/arjanvanderleden/create-aws-lambda-json/blob/v0.0.1/src/commands/list.ts)_

## `create-aws-lambda-json single TRANSFORM`

runs a single transform on input data

```
USAGE
  $ create-aws-lambda-json single TRANSFORM

OPTIONS
  -h, --help     show CLI help
  -i, --in=in    (required) json file: input data to be used for transform
  -o, --out=out  output file name: defaults to writing to console
```

_See code: [src/commands/single.ts](https://github.com/arjanvanderleden/create-aws-lambda-json/blob/v0.0.1/src/commands/single.ts)_
<!-- commandsstop -->
