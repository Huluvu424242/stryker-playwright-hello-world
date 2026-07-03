// playwright.config.js
export default {
    testDir: "./tests",
    webServer: {
        command: "npm run start -- --port 5174 --strictPort",
        url: "http://127.0.0.1:5174",
        reuseExistingServer: false,
        timeout: 30_000
    },
    use: {
        baseURL: "http://127.0.0.1:5174"
    }
};