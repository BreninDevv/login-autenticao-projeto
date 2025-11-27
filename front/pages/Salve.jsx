import { useState } from "react";

const Salve = () => {
  const [nome, setNome] = useState("");
  const [mensagem, setMensagem] = useState("");

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
