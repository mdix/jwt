const test                      = require(`tape`)
const { generateHMACSignedJWT } = require(`./hmacSignedJWT`)

const testData = require('./testdata')

test(`generates HMAC secured JWT`, (t) => {
  t.plan(1)

  t.equal(generateHMACSignedJWT({ header: testData.header, payload: testData.payload }), testData.signedJWT)
})