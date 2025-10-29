module.exports = {
  testEnvironment: "jsdom",
  setupFilesAfterEnv: ["<rootDir>/jest.setup.js"],
  transform: {
    "^.+\\.[tj]sx?$": "babel-jest",
  },
  moduleFileExtensions: ["js", "jsx"],
  transformIgnorePatterns: ["/node_modules/(?!(@nextui-org|@fortawesome)/)"],
};
