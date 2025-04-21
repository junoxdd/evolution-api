
const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.json({ message: "Evolution API funcionando 🔥" });
});

module.exports = router;
