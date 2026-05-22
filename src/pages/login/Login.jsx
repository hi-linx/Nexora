import Input from "../../components/Input"
import Button from "../../components/Button"

import '../../components/Input.css'
import './Login.css'

const Login = () => {
  return (
    <div className="container">
      <h1>Nexora - Seja bem-vindo!</h1>
      <form id="login-form">
        <h2>Login</h2>
        <Input id="username" type="text" name="username" placeholder="Username"/>
        <Input id="password" type="password" name="password" placeholder="password" />
         <div className="action-control">
        <Button id="login-btn" text="Login" />
        <Button id="register-btn" text="Register" link="/register" />
      </div>
      </form>

    </div>
  )
}

export default Login