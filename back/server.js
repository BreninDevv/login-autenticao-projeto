import express from "express";
import cors from "cors";

const app = express();

app.use(cors());
app.use(express.json());

app.post("/api/saudacao", (req, res) => {
  const { nome } = req.body;
  if (!nome) {
    return res.status(400).json({ erro: "Nome é obrigatório" });
  }
  return res.json({ mensagem: `Olá, ${nome}! Seja bem-vindo(a).` });
});

app.listen(3000, () => {
  console.log("O servidor está rodando...");
});
