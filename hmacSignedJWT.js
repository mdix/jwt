const crypto                  = require('crypto')
const hmac                    = crypto.createHmac('sha256', 'secret')
const { generateUnsignedJWT } = require('./unsignedJWT')

function generateHMACSignedJWT({ header, payload }) {
  const unsignedJWT = generateUnsignedJWT({ header, payload })
  hmac.update(unsignedJWT)

  return `${unsignedJWT}.${hmac.digest('base64')}`
}

module.exports = { generateHMACSignedJWT }