const sinon = require('sinon');
const Utils = require('./utils');
const { expect } = require('chai');
const sendPaymentRequestToApi = require('./4-payment');

describe('sendPaymentRequestToApi', () => {
  it('sendPaymentRequestToApi calls console.log with the right arguments', () => {
    const overhead = sinon.spy(console);
    const stub = sinon.stub(Utils, 'calculateNumber');

    stub.returns(10);
    sendPaymentRequestToApi(100, 20);
    expect(stub.calledWith('SUM', 100, 20)).to.be.true;
    expect(stub.callCount).to.be.equal(1);
    expect(overhead.log.calledWith('The total is: 10')).to.be.true;
    expect(overhead.log.callCount).to.be.equal(1);
    stub.restore();
    overhead.log.restore();
  });
});
