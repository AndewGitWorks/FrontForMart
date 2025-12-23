import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="auth-page">
      <div className="auth-card">
        <h2>Вход</h2>

        <form className="auth-form">
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Пароль" />

          <button type="submit">Войти</button>
        </form>

        <p className="auth-switch">
          Нет аккаунта? <Link to="/register">Зарегистрироваться</Link>
        </p>
      </div>
    </div>
  );
};
export default Login;