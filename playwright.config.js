export default {
  testDir: "./tests",
  webServer: {
    command: "npm run start",
    url: "http://127.0.0.1:5173",
    reuseExistingServer: false,
    timeout: 30_000
  },
  use: {
    baseURL: "http://127.0.0.1:5173"
  }
};
