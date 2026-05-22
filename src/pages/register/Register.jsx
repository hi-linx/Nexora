import Input from "../../components/Input"
import Button from "../../components/Button"

import '../login/Login.css'

const Register = () => {
  return (
    <div>
      <div className="container">
      <h1>Nexora - Seja bem-vindo!</h1>
      <form id="login-form">
        <h2>Register</h2>
        <div className="form-control">
          <Input id="email" type="email" name="email" placeholder="Email" />
          <Input id="username" type="text" name="username" placeholder="Username"/>
          <Input id="password" type="password" name="password" placeholder="Password" />
        </div>
         <div className="action-control">
        <Button id="login-btn" text="Login" link="/"/>
        <Button id="register-btn" text="Register"/>
      </div>
      </form>
    </div>
    </div>
  )
}

export default Register