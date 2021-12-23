module.exports = {
  async redirects() {
    return [
      {
        source: '/',
        destination: '/author',
        permanent: true,
      },
    ]
  },
}
