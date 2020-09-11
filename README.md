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
* [`create-aws-lambda-json hello [FILE]`](#create-aws-lambda-json-hello-file)
* [`create-aws-lambda-json help [COMMAND]`](#create-aws-lambda-json-help-command)

## `create-aws-lambda-json hello [FILE]`

describe the command here

```
USAGE
  $ create-aws-lambda-json hello [FILE]

OPTIONS
  -f, --force
  -h, --help       show CLI help
  -n, --name=name  name to print

EXAMPLE
  $ create-aws-lambda-json hello
  hello world from ./src/hello.ts!
```

_See code: [src/commands/hello.ts](https://github.com/arjanvanderleden/create-aws-lambda-json/blob/v0.0.1/src/commands/hello.ts)_

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
<!-- commandsstop -->
