import { getAuth } from "firebase/auth";
import './App.css';
import app from "./firebase/firebase.init";
import RegisterReactBootstrap from "./components/RegisterReactBootstrap";

const auth = getAuth(app);

const handleRegister=(event)=>{
  event.preventDefault();
  const email = event.target.email.value;
  const password = event.target.password.value;
}

const handleEmailChange = event =>{

}

const handlePasswordChange = event =>{

}

function App() {
  return (
    <div>
      {/* <form onSubmit={handleRegister}>
        <input onBlur={handleEmailChange} type="email" name="email" id="" placeholder="Your Email"/>
        <br />
        <input onBlur={handlePasswordChange} type="password" name="password" id="" placeholder="Your Password"/>
        <br />
        <button type="submit">Register</button>
      </form> */}
      <RegisterReactBootstrap></RegisterReactBootstrap>
    </div>
  );
}

export default App;
