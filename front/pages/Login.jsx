const Login = () => {
  return (
    <form action="http://localhost:3000/api/login" method="POST">
      <h1>Faça seu login</h1>
      <input
        type="email"
        id="email"
        name="email"
        placeholder="Digite seu email"
        required
      />
      <input
        type="password"
        id="password"
        name="password"
        placeholder="Digite sua senha"
        required
      />
      <button>Fazer login</button>
    </form>
  );
};

export default Login;
