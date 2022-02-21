import {defaults} from 'jest-config'
module.exports = {
  roots: ["<rootDir>/src"],  
  testEnvironment: 'jsdom',
  moduleFileExtensions: [...defaults.moduleFileExtensions, 'ts', 'tsx'],
  setupFilesAfterEnv: [ require.resolve('regenerator-runtime/runtime') ]
};