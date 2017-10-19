const crypto   = require('crypto')
const hmac     = crypto.createHmac('sha256', 'secret')
const testData = require('./testdata')

function generateHMACSignedJWT({ header, payload }) {
  const unsignedJWT = testData.unsignedJWT
  hmac.update(unsignedJWT)

  // it almost fits!!!!! :)
  return `${unsignedJWT}.${new Buffer(hmac.digest()).toString('base64')}`
}

module.exports = { generateHMACSignedJWT }