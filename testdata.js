const testData = {
  header: {
    alg: `HS256`
  },
  payload: {
    sub: `user-id-239129382`,
    role: `admin`
  },
  unsignedJWT: `eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1c2VyLWlkLTIzOTEyOTM4MiIsInJvbGUiOiJhZG1pbiJ9`
}

testData.signedJWT = `${testData.unsignedJWT}.0Ph7eDWJK__VBMtSh8VTNtt9rkKIHOysLDEZC-VF9VI`

module.exports = testData
