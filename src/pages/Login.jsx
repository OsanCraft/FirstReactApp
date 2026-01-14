import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { User, Lock } from "lucide-react";
import './login.css';


export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const navigate = useNavigate();

  const handleLogin = () => {
    // SIMPLE demo login logic
    if (username && password) {
      navigate("/main");
    }
  };

  

  return (
    <div className="login-container">
      <div className="night-sky">
        <div className="stars"></div>
        <div className="mountains"></div>
      </div>
      
      <div id="login">
        <h2>Login</h2>

        <div className="input-wrapper">
          <input
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <User className="input-icon" size={18} />
        </div>

        <div className="input-wrapper">
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Lock className="input-icon" size={18} />
        </div>

        <div className="login-options">
          <label className="remember-me">
            <input
              type="checkbox"
              checked={rememberMe}
              onChange={(e) => setRememberMe(e.target.checked)}
            />
            <span>Remember me</span>
          </label>
          <a href="#" className="forgot-password">Forgot Password?</a>
        </div>

        <button onClick={handleLogin} className="login-button">Login</button>

        <p className="register-link">
          Don't have an account? <a href="#">Register</a>
        </p>
      </div>
    </div>
  );
}
