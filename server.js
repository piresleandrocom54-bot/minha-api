const express = require("express");
const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("API online 🚀");
});

app.post("/comando", (req, res) => {
  const { fov } = req.body;

  res.json({
    status: "ok",
    fovRecebido: fov
  });
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log("Rodando...");
});
