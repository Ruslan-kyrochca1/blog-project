import React, { useEffect, useState } from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom'

function Header() {
  const [theme, setTheme] = useState(()=>{
    return localStorage.getItem("theme") !== "dark"
  })

  const[menuOpen, setMenuOpen] = useState(false)

  const navigate = useNavigate()
  const checkLogin = () =>{
      localStorage.getItem("token")? localStorage.removeItem("token"): "";
      navigate("/login")
  }

    const changeTheme = () => {
      setTheme(prev => !prev)
      localStorage.setItem("theme", theme ? "dark" : "light")

      document.body.classList.toggle("dark-theme", theme);
    }

    useEffect(()=>{
      document.body.classList.toggle("dark-theme", !theme);
    },[])
  return (
    <header>
      <button className={`burger-menu ${menuOpen ? "button-close" : "" }`} onClick={()=>{setMenuOpen(prev => !prev)}}>
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
      </button>
      <nav className={menuOpen ? "nav open" : "nav"}>
        <button onClick={checkLogin} className="button">Войти/Выйти</button>
        <NavLink to={"/"} className="button secondary" onClick={() => setMenuOpen(false)}>Главная</NavLink>
        <NavLink to={"/create"} className="button secondary" onClick={() => setMenuOpen(false)}>Создать пост</NavLink>
        <button onClick={changeTheme} className={theme ? "theme theme-light" : "theme theme-dark"}>
          <div className="object"></div> 
          <div className="could"></div>
        </button>
      </nav>
    </header>
  )
}

export default Header
