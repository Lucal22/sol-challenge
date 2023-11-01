module.exports = {
  coverageDirectory: "coverage",
  collectCoverageFrom: [
    "./src/**/*.ts(x)?",
    "!/src",
    "!./src/*.ts(x)?",
    "!./src/styles/**/*.ts(x)?",
    "!./src/config/*.ts(x)?",
    "!./src/types/*.ts(x)?",
    "!./src/utils/*.ts(x)?",
    "!./src/components/Icons/*.ts(x)?",
  ],
  collectCoverage: true,

  testEnvironment: "jsdom",
  testMatch: ["**/__tests__/**/*.[jt]s?(x)", "**/?(*.)+(spec|test).[tj]s?(x)"],
  testPathIgnorePatterns: ["/node_modules/", "/.next/", "/out/", "/public/"],
  transform: {
    "\\.tsx?$": "ts-jest",
    "\\.jsx?$": "babel-jest",
  },

  setupFilesAfterEnv: ["<rootDir>/.jest/jest-setup.ts"],
  modulePathIgnorePatterns: [
    "<rootDir>/src/styles/global-styles.ts",
    "<rootDir>/src/pages/_app.tsx",
    "<rootDir>/src/pages/_document.tsx",
    "<rootDir>/src/pages/index.tsx",
    "<rootDir>/src/pages/projects/index.tsx",
    "<rootDir>/src/pages/about/index.tsx",
  ],

  moduleNameMapper: {
    "\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$":
      "<rootDir>/src/assets/index.ts",
  },
};
