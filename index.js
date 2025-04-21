
const express = require("express");
const app = express();
const routes = require("./routes");
const cors = require("cors");
require("dotenv").config();

app.use(cors());
app.use(express.json({ limit: "50mb" }));
app.use(routes);

const PORT = process.env.PORT || 10000;
app.listen(PORT, () => {
  console.log(`🚀 Servidor rodando na porta ${PORT}`);
});
