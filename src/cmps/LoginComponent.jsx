import React, { useState } from "react"
import { LoginApi } from "../api/AuthAPI"
import '../Sass/LoginComponent.scss'

export default function LoginComponent() {
    const [credentials, setCredentials] = useState({})
    const login = async () => {
        try {
            let res = await LoginApi(credentials.email, credentials.password)
            console.log(res)
        }
        catch (err) {
            console.log(err)
        }
    }

    return (
          <div className="login-wrapper">
            <h1>LoginComponent</h1>
            <div className="auth-inputs">
              <input
                onChange={(event) =>
                  setCredentials({ ...credentials, email: event.target.value })
                }
                className="common-input"
                placeholder="Enter your Email"
              />
              <input
                onChange={(event) =>
                  setCredentials({ ...credentials, password: event.target.value })
                }
                type="password"
                className="common-input"
                placeholder="Enter your Password"
              />
              <button onClick={login} className="login-btn">
                Log in to LinkedIn
              </button>
            </div>
            
            <div className="divider">
              <span>or</span>
            </div>
            
            <div className="join-now">
              New to LinkedIn? <a href="#">Join now</a>
            </div>
          </div>
      )
    }
