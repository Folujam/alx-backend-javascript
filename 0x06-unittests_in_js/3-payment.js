const Utils = require('./utils');
const sendPaymentRequestToApi = (totalAmount, totalShipping) => {
  const total = Utils.calculateNumber('SUM', totalAmount, totalShipping);
  console.log(`The toatal is: ${total}`);
};
module.exports = sendPaymentRequestToApi;
