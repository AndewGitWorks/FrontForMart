import { useState } from "react";

const AuthModal = ({ onClose }) => {
  const [mode, setMode] = useState("login"); // login | register

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div
        className="modal-card"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Крестик */}
        <button className="modal-close" onClick={onClose}>
          ✕
        </button>

        <h2>{mode === "login" ? "Вход" : "Регистрация"}</h2>

        <form className="auth-form">
          {mode === "register" && (
            <input type="text" placeholder="Имя" />
          )}

          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Пароль" />

          {mode === "register" && (
            <input type="password" placeholder="Повторите пароль" />
          )}

          <button type="submit">
            {mode === "login" ? "Войти" : "Создать аккаунт"}
          </button>
        </form>

        <p className="auth-switch">
          {mode === "login" ? (
            <>
              Нет аккаунта?{" "}
              <span onClick={() => setMode("register")}>
                Зарегистрироваться
              </span>
            </>
          ) : (
            <>
              Уже есть аккаунт?{" "}
              <span onClick={() => setMode("login")}>
                Войти
              </span>
            </>
          )}
        </p>
      </div>
    </div>
  );
};

export default AuthModal;