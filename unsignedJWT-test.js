const test = require(`tape`)
const {generateUnsignedJWT, parseUnsignedJWT} = require(`./unsignedJWT`)

const testData = require('./testdata')

test(`generates unsecured JWT`, (t) => {
  t.plan(1)

  t.equal(generateUnsignedJWT({header: testData.header, payload: testData.payload}), testData.unsignedJWT)
})

test(`parses unsecured JWT (header and body)`, (t) => {
  t.plan(2)

  const {header, payload} = parseUnsignedJWT(testData.unsignedJWT)

  t.deepEqual(header, testData.header)
  t.deepEqual(payload, testData.payload)
})
