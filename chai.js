var chai = require('chai');

// Include the stacktrace on failing assertions
chai.config.includeStack = true;

// Set global assertions.
global.expect = chai.expect;
global.AssertionError = chai.AssertionError;
global.Assertion = chai.Assertion;
global.assert = chai.assert;