/* eslint-disable @typescript-eslint/no-var-requires */
const nextJest = require('next/jest');

const createJestConfig = nextJest({
    // Provide the path to your Next.js app to load next.config.js and .env files in your test environment
    dir: './',
});

// Add any custom config to be passed to Jest
const customJestConfig = {
    setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
    moduleNameMapper: {
        // Handle module aliases (this will be automatically configured for you soon)
        '^~/(.*)$': '<rootDir>/$1',
        '^@/db/(.*)$': '<rootDir>/database/$1',
        '^@/components/(.*)$': '<rootDir>/src/components/$1',
        '^@/pages/(.*)$': '<rootDir>/src/pages/$1',
        '^@/redux/(.*)$': '<rootDir>/src/redux/$1',
        '^@/utils/(.*)$': '<rootDir>/src/utils/$1',
        '^@/tests/(.*)$': '<rootDir>/src/__tests__/$1',
    },
    modulePathIgnorePatterns: ['<rootDir>/src/__tests__/utils/'],
    testEnvironment: 'jest-environment-jsdom',
};

// createJestConfig is exported this way to ensure that next/jest can load the Next.js config which is async
module.exports = createJestConfig(customJestConfig);
