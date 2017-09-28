define(function (require) {
    // Load any app-specific modules
    // with a relative require call,
    // like:
    var messages = require('./messages');
    var test = require('./test');
    console.log(test.suma(1,3));
    // Load library/vendor modules using
    // full IDs, like:
    var print = require('print');

    print(messages.getHello());
});
