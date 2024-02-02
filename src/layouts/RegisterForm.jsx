import axios from 'axios'
import React from 'react'
import { useState,useEffect } from 'react'

export default function RegisterForm() {
    const [input , setInput] = useState({
        username: '',
        password: '',
        confirmPassword: '',
        email: ''
    })

    const hdlChange = e => {
        setInput( prv => ( {...prv,[e.target.name] : e.target.value }  ) )
    }

    const hdlSubmit = async e => {
        try {
            e.preventDefault()
            if (input.password != input.confirmPassword) {
                return alert("pass บ่ ตรง กัน")
            }
            const rs = await axios.post('http://localhost:3000/auth/register', input)
            console.log(rs)
            if (rs.status === 200) {
                alert(rs.data)
            }
        } catch (err) {
            console.log(err.message)
        }
        
    }

    return (
        <>
            <div className='flex text-3xl font-bold p-3  justify-center'>
                <h1>Register</h1>
            </div>
            <div className='flex gap-2 border justify-center'>
                <form onSubmit={hdlSubmit}> 
                    <label className="form-control w-full max-w-xs">
                        <div className="label pl-20">
                        </div>

                        <div className="join flex items-center">
                            <label className="btn join-item"><i className="fa-solid fa-user"></i></label>
                            <input className="input input-bordered join-item" placeholder="Username" 
                            name="username" 
                            value={input.username} 
                            onChange={ hdlChange } />
                        </div>

                        <div className="label">
                        </div>

                        <div className="join flex items-center">
                            <label className="btn join-item"><i className="fa-solid fa-envelope"></i></label>
                            <input className="input input-bordered join-item" placeholder="Email" 
                            name="email" 
                            value={input.email}
                            onChange={ hdlChange } />
                        </div>

                        <div className="label">
                        </div>

                        <div className="join flex items-center">
                            <label className="btn join-item"><i className="fa-solid fa-lock"></i></label>
                            <input className="input input-bordered join-item" placeholder="Password" type="password"
                            name="password"
                            value={input.password}
                            onChange={ hdlChange } />
                        </div>

                        <div className="label">
                        </div>

                        <div className="join flex items-center">
                            <label className="btn join-item"><i className="fa-solid fa-unlock"></i></label>
                            <input className="input input-bordered join-item" placeholder="Confirm Password" type="password"
                            name="confirmPassword"
                            value={input.confirmPassword}
                            onChange={ hdlChange } />
                        </div>

                        <div className='label flex'>
                            <div className='flex gap-3'>
                                <a className="link link-hover">Do you want to login?</a>
                                <button className="btn">Register</button>
                            </div>
                        </div>
                    </label>
                </form>
            </div>
            
        </>
    )
}