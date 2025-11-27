const Login = () => {
  return (
    <form>
      <h1>Faça seu login</h1>
      <input
        type="email"
        id="email"
        name="email"
        placeholder="Digite seu email"
      />
      <input
        type="password"
        id="password"
        name="password"
        placeholder="Digite sua senha"
      />
    </form>
  );
};

export default Login;
