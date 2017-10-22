const urlsafeBase64 = require('urlsafe-base64')

function generateUnsignedJWT({ header, payload }) {
  const headerBase64  = urlsafeBase64.encode(new Buffer(JSON.stringify(header)))
  const payloadBase64 = urlsafeBase64.encode(new Buffer(JSON.stringify(payload)))

  return `${headerBase64}.${payloadBase64}`
}

function parseUnsignedJWT(unsecuredJWT) {
  const headerAndPayload = unsecuredJWT.split(`.`)
  const header           = urlsafeBase64.decode(headerAndPayload[0])
  const payload          = urlsafeBase64.decode(headerAndPayload[1])

  return { header: JSON.parse(header), payload: JSON.parse(payload) }
}

module.exports = { generateUnsignedJWT, parseUnsignedJWT }