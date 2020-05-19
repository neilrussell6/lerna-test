const jestNodeConfig = {
  testEnvironment: 'node',
  transform: {
    '^.+\\.js?$': 'babel-jest',
  },
  testMatch: ['<rootDir>/src/**/*.test.js'],
}

module.exports = jestNodeConfig
