const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;

app.get("/health", (_req, res) => {
  res.json({ ok: true, service: "ci-cd-demo-js", version: "1.0.0" });
});

app.get("/", (_req, res) => {
  res.send("Hello from GitHub Actions CI/CD demo (JS, CommonJS)!");
});

const server = app.listen(PORT, () => {
  console.log(`API running on http://0.0.0.0:${PORT}`);
});

module.exports = { app, server };
