/**
 This is creating a custom Handlebars runtime, registering our custom helpers
 with it, and then exporting the runtime for use by Webpack.
 https://gist.github.com/impankratov/18e862e9a54d2ce092138e1a7a052c12

 This was a pain in the ass to figure out, as the Handlebars-Loader documentation
 is utter bullshit, and no you can't do half the things it says you can

 ❤️ Jay
 */
const Handlebars = require('handlebars/runtime')

Handlebars.registerHelper('eq', (a, b) => {
  return a === b
})

module.exports = Handlebars
