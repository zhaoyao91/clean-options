# Clean Options

Clean options.

## Introduction

- Ensure options is an object
- Remove undefined fields in options object shallowly

## Installation

```
npm i clean-options
```

## Usage

```ecmascript 6
const clean = require('clean-options')

function say(options) {
  const {
    name = 'Bob'
  } = clean(options)

  console.log(name)
}

say({name: 'Alice'}) // Alice
say({name: undefined}) // Bob
say({}) // Bob
say() // Bob
```

## License

MIT