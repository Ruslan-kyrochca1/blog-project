import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

function Header() {
    const navigate = useNavigate()
    const checkLogin = () =>{
        localStorage.getItem("token")? localStorage.removeItem("token"): "";
        navigate("/login")
    }
  return (
    <header>
      <nav>
        <Link to={"/"}>Главная</Link>
        <Link to={"/create"}>Создать пост</Link>
        <button onClick={checkLogin}>Войти/Выйти</button>
      </nav>
    </header>
  )
}

export default Header
