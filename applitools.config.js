require("dotenv").config();

module.exports = {
  apiKey: process.env.APPLITOOLS_API_KEY,
  serverUrl: process.env.APPLITOOLS_SERVER,
  browser: [{ width: 1280, height: 1200, name: "chrome" }],

  batchName: "Layout Test",
};
