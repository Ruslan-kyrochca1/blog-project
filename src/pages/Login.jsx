import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  
  const handleLogin = (e) => {
    e.preventDefault();
  
    console.log("Отправляем:", { email, password });
    // {
    //     "email": "eve.holt@reqres.in",
    //     "password": "cityslicka"
    // }
    fetch("https://reqres.in/api/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Ответ сервера:", data);
  
        if (data.token) {
          localStorage.setItem("token", data.token);
          navigate("/");
        } else {
          alert("Ошибка входа: " + (data.error || "Неверные данные"));
        }
      })
      .catch((error) => console.error("Ошибка запроса:", error));
  };
  

  return (
    <form onSubmit={handleLogin}>
      <input
        type="text"
        placeholder="Логин"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Пароль"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button type="submit">Войти</button>
    </form>
  );
}

export default Login;
