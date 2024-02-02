import React from "react";
import { Link, useNavigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const guestNav = [
    { to : '/' , text: 'Login'},
    { to : '/register' , text: 'Register'},
]

const userNav = [
    { to : '/' , text: 'Home'},
    { to : '/new' , text: 'New todo list'}
]


export default function Header() {
    const { user,logout } = useAuth();
    const finalNav = user?.id ? userNav : guestNav

    const navigate = useNavigate()

    const hldLogout = () =>{
        logout()
        navigate('/')
    }

  return (
    <div className="navbar bg-base-100">
      <div className="flex-1">
        <a className="btn btn-ghost text-xl">daisyUI</a>
      </div>
      <div className="flex-none">
        {user?.id && (
            <p>hello {user.Username}</p>
        )}
        <ul className="menu menu-horizontal px-1">
          {finalNav.map(el=> (
            <li key={el.to} >
                <Link to={el.to}>{el.text}</Link>
            </li>
          ))}
          {user?.id && (
            <li>
                <Link to='#' onClick={hldLogout}>Logout</Link>
            </li>
          )}
        </ul>
      </div>
    </div>
  );
}