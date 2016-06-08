Calculator = require('../lib/calculator');

describe('When substracting six and eight using the calculator', function () {
    var calculator;

    before(function () {
        calculator = new Calculator();
    });

    it('should result in minus two the callback approach', function (done) {
        calculator.substract(6, 8, function(result) {
            assert.equal(result, -2);
            done();
        });
    });
});