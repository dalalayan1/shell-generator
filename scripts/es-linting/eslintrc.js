module.exports = {
  rules: {
    "no-comma-dangle": 1,         // disallow trailing commas in object literals
    "no-cond-assign": 1,          // disallow assignment in conditional expressions
    "no-console": 1,              // disallow use of console (off by default in the node environment)
    "no-constant-condition": 1,   // disallow use of constant expressions in conditions
    "no-control-regex": 1,        // disallow control characters in regular expressions
    "no-debugger": 1,             // disallow use of debugger
    "no-dupe-keys": 1,            // disallow duplicate keys when creating object literals
    "no-empty": 1,                // disallow empty statements
    "no-empty-class": 1,          // disallow the use of empty character classes in regular expressions
    "no-ex-assign": 1,            // disallow assigning to the exception in a catch block
    "no-extra-boolean-cast": 1,   // disallow double-negation boolean casts in a boolean context
    "no-extra-parens": 1,         // disallow unnecessary parentheses (off by default)
    "no-extra-semi": 1,           // disallow unnecessary semicolons
    "no-func-assign": 1,          // disallow overwriting functions written as function declarations
    "no-inner-declarations": 1,   // disallow function or variable declarations in nested blocks
    "no-invalid-regexp": 1,       // disallow invalid regular expression strings in the RegExp constructor
    "no-irregular-whitespace": 1, // disallow irregular whitespace outside of strings and comments
    "no-negated-in-lhs": 1,       // disallow negation of the left operand of an in expression
    "no-obj-calls": 1,            // disallow the use of object properties of the global object (Math and JSON) as functions
    "no-regex-spaces": 1,         // disallow multiple spaces in a regular expression literal
    "no-reserved-keys": 1,        // disallow reserved words being used as object literal keys (off by default)
    "no-sparse-arrays": 1,        // disallow sparse arrays
    "no-unreachable": 1,          // disallow unreachable statements after a return, throw, continue, or break statement
    "use-isnan": 1,               // disallow comparisons with the value NaN
    "valid-jsdoc": 1,             // Ensure JSDoc comments are valid (off by default)
    "valid-typeof": 1             // Ensure that the results of typeof are compared against a valid string
  }
}