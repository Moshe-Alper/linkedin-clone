import React from "react"
import '../Sass/LoginComponent.scss'
import { LoginApi } from "../api/AuthAPI"

export default function LoginComponent() {
    const login = () => {
        let res = LoginApi()
        console.log(res)
    }

    return (
        <div>
            <h1>Login Component</h1>
            <input className="common-input" placeholder="Enter you Email" />
            <button onClick={login} className="login-btn">Log in to Linkedin</button>
        </div>
    )
}