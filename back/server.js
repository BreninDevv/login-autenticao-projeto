import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import jwt from "jsonwebtoken";

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const { USUARIO, SENHA, ACCESS_TOKEN_KEY } = process.env;

app.post("/api/login", (req, res) => {
  const { email, password } = req.body;

  if (email !== USUARIO || password !== SENHA) {
    return res.sendStatus(403).json({ error: "E-mail ou senha inválidos." });
  }
  const token = jwt.sign({ email }, ACCESS_TOKEN_KEY, {
    expiresIn: "15m",
  });
  res.json({ token });
});
app.get("/api/validacao", (req, res) => {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];

  if (!token) return res.status(403).json({ error: "Não autorizado." });

  jwt.verify(token, ACCESS_TOKEN_KEY, (err, email) => {
    if (err) return res.status(403).json({ error: "Não autorizado." });
    res.json({ message: "Acesso autorizado", email });
  });
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
