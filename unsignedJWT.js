function generateUnsignedJWT({ header, payload }) {
  const headerBase64  = new Buffer(JSON.stringify(header)).toString(`base64`)
  const payloadBase64 = new Buffer(JSON.stringify(payload)).toString(`base64`)

  return `${headerBase64}.${payloadBase64}`
}

function parseUnsignedJWT(unsecuredJWT) {
  const headerAndPayload = unsecuredJWT.split(`.`)
  const header           = new Buffer(headerAndPayload[0], `base64`).toString(`utf8`)
  const payload          = new Buffer(headerAndPayload[1], `base64`).toString(`utf8`)

  return { header: JSON.parse(header), payload: JSON.parse(payload) }
}

module.exports = { generateUnsignedJWT, parseUnsignedJWT }