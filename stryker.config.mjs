// stryker.config.mjs
export default {
    mutate: ["src/**/*.js"],
    testRunner: "command",
    commandRunner: {
        command: "npx playwright test --workers=1"
    },
    reporters: ["html", "clear-text", "progress"],
    timeoutMS: 60_000,
    concurrency: 1,
    coverageAnalysis: "off",
    cleanTempDir: false
};