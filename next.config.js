
const config = {
  env: {
    otherURL: process.env.baseurl,
  }
}

module.exports = withOffline(config)