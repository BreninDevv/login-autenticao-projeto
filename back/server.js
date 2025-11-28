import express from "express";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const { USUARIO, SENHA } = process.env;

app.post("/api/login", (req, res) => {
  const { email, password } = req.body;

  if (email === USUARIO && password === SENHA) {
    res.json({ message: "Acesso liberado!" });
  } else {
    res.sendStatus(403);
  }
});

app.post("/api/saudacao", (req, res) => {
  const { nome } = req.body;
  if (!nome) {
    return res.status(400).json({ erro: "Nome é obrigatório" });
  } else {
    return res.json({ mensagem: `Olá, ${nome}! Seja bem-vindo(a).` });
  }
});

app.listen(3000, () => {
  console.log("O servidor está rodando...");
});
