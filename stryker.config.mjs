export default {
  mutate: [
    "src/**/*.js",
    "!src/**/*.spec.js",
    "!tests/**/*.js"
  ],

  testRunner: "command",

  commandRunner: {
    command: "npm run test:e2e"
  },

  reporters: ["html", "clear-text", "progress"],

  timeoutMS: 60_000,

  // Bei E2E-Tests bewusst niedrig halten, damit sich lokale Webserver nicht in die Quere kommen.
  concurrency: 1,

  coverageAnalysis: "off"
};
