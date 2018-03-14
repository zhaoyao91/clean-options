function clean (options) {
  options = Object(options)
  for (let key in options) {
    if (options.hasOwnProperty(key)) {
      if (options[key] === undefined) {
        delete options[key]
      }
    }
  }
  return options
}

module.exports = clean