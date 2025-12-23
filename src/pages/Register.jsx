import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div className="auth-page">
      <div className="auth-card">
        <h2>Регистрация</h2>

        <form className="auth-form">
          <input type="text" placeholder="Имя" />
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Пароль" />
          <input type="password" placeholder="Повторите пароль" />

          <button type="submit">Создать аккаунт</button>
        </form>

        <p className="auth-switch">
          Уже есть аккаунт? <Link to="/login">Войти</Link>
        </p>
      </div>
    </div>
  );
};

export default Register;