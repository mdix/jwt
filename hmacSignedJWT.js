const crypto   = require('crypto')
const hmac     = crypto.createHmac('sha256', 'secret')
const testData = require('./testdata')

function generateHMACSignedJWT({ header, payload }) {
  const unsignedJWT = testData.unsignedJWT
  hmac.update(unsignedJWT)

  return `${unsignedJWT}.${hmac.digest('base64')}`
}

module.exports = { generateHMACSignedJWT }