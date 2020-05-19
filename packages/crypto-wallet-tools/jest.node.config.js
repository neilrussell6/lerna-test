const jestNodeConfig = {
  testEnvironment: 'node',
  transform: {
    '^.+\\.ts?$': 'ts-jest',
  },
  testMatch: ['<rootDir>/src/**/*.test.js'],
}

module.exports = jestNodeConfig
