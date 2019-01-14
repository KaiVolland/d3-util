module.exports = {
  moduleFileExtensions: [
    'js'
  ],
  moduleDirectories: [
    'node_modules'
  ],
  transformIgnorePatterns: [
    'node_modules/(?!(d3|d3-selection|d3-array|d3-scale|d3-zoom|d3-shape|d3-color|d3-time-format)/)'
  ],
  collectCoverage: true,
  collectCoverageFrom: [
    'src/**/*.js'
  ],
  coverageDirectory: '<rootDir>/coverage'
};
