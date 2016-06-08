var Calculator = require('../lib/calculator'),
    sinon = require('sinon');

describe('When multiplying nine and three using the calculator', function () {
    var calculator,
        eventEmitterStub,
        callbackSpy,
        clock;

    before(function () {
        calculator = new Calculator();
        clock = sinon.useFakeTimers();
        eventEmitterStub = sinon.stub(calculator, 'emit');
        callbackSpy = sinon.spy();
    });

    it('should emit the event before the callback', function (done) {
        calculator.multiply(9, 3, callbackSpy);
        clock.tick(1000);
        assert.equal(callbackSpy.called, true);
        assert.equal(eventEmitterStub.calledWithExactly('result', 27), true);
        assert.equal(eventEmitterStub.calledBefore(callbackSpy), true);
        done();
    });

    after(function () {
        clock.restore();
    });
});