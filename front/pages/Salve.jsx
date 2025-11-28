import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const Salve = () => {
  const [nome, setNome] = useState("");
  const [mensagem, setMensagem] = useState("");
  const navigate = useNavigate();

  const enviarNome = async () => {
    if (nome) {
      const resposta = await fetch("http://localhost:3000/api/saudacao", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ nome }),
      });

      const dados = await resposta.json();
      if (resposta.ok) {
        setMensagem(dados.mensagem);
      } else {
        setMensagem(`Erro: ${dados.erro}`);
      }
    }
  };
  useEffect(() => {
    const validarUsuario = async () => {
      const token = localStorage.getItem("token");

      if (!token) navigate("/");

      try {
        const response = await axios.get(
          "http://localhost:3000/api/validacao",
          {
            headers: { Authorization: `bearer ${token}` },
          }
        );
        if (response.status === 403) {
          navigate("/");
        } else {
          console.log(`Acesso autorizado, ${response.data.email.email}!`);
        }
      } catch (error) {
        navigate("/");
        console.error({ error });
      }
    };
    validarUsuario();
  }, []);

  return (
    <>
      <h1>Saudação personalizada</h1>
      <div className="caixa">
        <input
          type="text"
          placeholder="Digite seu nome"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
        />
        <button onClick={enviarNome} disabled={!nome}>
          Enviar
        </button>
      </div>
      {mensagem && <p>{mensagem}</p>}
    </>
  );
};

export default Salve;
