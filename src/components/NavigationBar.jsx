import React from 'react'
import logo from "../assets/Logo.jpg"
import { Navigate, NavLink, useNavigate } from 'react-router'
const NavigationBar = ({ onLoginClick }) => {
    const navigate = useNavigate();
  return (
    <div className="navigationbar">
        <NavLink to='/'><img onClick={()=>navigate('/', {replace:true})} src={logo} width="100px" alt="" /></NavLink>
        <ul>
            <NavLink to='/'><li>Рецепты</li></NavLink>
            <NavLink to='/Contacts'><li>Полезная информация</li></NavLink>
            <NavLink to='/About'><li>Контакты</li></NavLink>
        </ul>
        <div className='navtools'>
            <button onClick={onLoginClick}>
                Login/Register
            </button>
        </div>
    </div>
  )
}

export default NavigationBar