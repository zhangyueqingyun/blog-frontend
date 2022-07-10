export default {
    moduleFileExtensions: ['vue', 'js', 'json', 'jsx', 'ts', 'tsx', 'node'],
    transform: {
        '^.+\\.vue$': '@vue/vue3-jest',
        '^.+\\.ts$': 'ts-jest',
        '^.+\\.js$': 'babel-jest'
    },
    testEnvironment: 'jsdom',
    moduleNameMapper: {
        "^@/(.*)$": "<rootDir>/src/$1"
    }
}