import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:3000/api/login", {
        email,
        password,
      });
      console.log(response.data);
      navigate("/salve");
    } catch (error) {
      console.error({ error });
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h1>Faça seu login</h1>
      <input
        type="email"
        id="email"
        name="email"
        placeholder="Digite seu email"
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <input
        type="password"
        id="password"
        name="password"
        placeholder="Digite sua senha"
        onChange={(e) => setPassword(e.target.value)}
        required
      />
      <button>Fazer login</button>
    </form>
  );
};

export default Login;
