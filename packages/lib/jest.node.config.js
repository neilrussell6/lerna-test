const jestNodeConfig = {
  testEnvironment: 'node',
  transform: {
    '^.+\\.ts?$': 'ts-jest',
  },
  testMatch: ['<rootDir>/src/**/*.test.ts'],
}

module.exports = jestNodeConfig
