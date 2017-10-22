const urlsafeBase64           = require('urlsafe-base64')
const crypto                  = require('crypto')
const hmac                    = crypto.createHmac('sha256', 'secret')
const { generateUnsignedJWT } = require('./unsignedJWT')

function generateHMACSignedJWT({ header, payload }) {
  const unsignedJWT = generateUnsignedJWT({ header, payload })

  return `${unsignedJWT}.${urlsafeBase64.encode(hmac.update(unsignedJWT).digest(''))}`
}

module.exports = { generateHMACSignedJWT }