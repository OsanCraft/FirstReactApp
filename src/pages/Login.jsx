import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { User, Lock, Mail } from "lucide-react";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Checkbox } from "../components/ui/checkbox";
import { Label } from "../components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";
import { useAuth } from "../contexts/AuthContext";


export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const navigate = useNavigate();
  const { login } = useAuth();

  const handleLogin = () => {
    // SIMPLE demo login logic
    if (email && password) {
      login();
      navigate("/main");
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter" && email && password) {
      handleLogin();
    }
  };

  

  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh', padding: '1rem' }}>
        <div style={{ width: '100%', maxWidth: '28rem', backgroundColor: 'white', border: '2px solid gray', borderRadius: '0.5rem', padding: '1.5rem' }}>
          <h2 style={{ textAlign: 'center', marginBottom: '1.5rem', color: 'black' }}>Login</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <div style={{ position: 'relative' }}>
              <input
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                onKeyPress={handleKeyPress}
                style={{ width: '100%', padding: '0.5rem 1rem 0.5rem 2.5rem', border: '1px solid #ccc', borderRadius: '0.25rem' }}
              />
              <div style={{ position: 'absolute', left: '0.75rem', top: '50%', transform: 'translateY(-50%)', color: 'gray' }}>
                <Mail size={16} />
              </div>
            </div>
            <div style={{ position: 'relative' }}>
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                onKeyPress={handleKeyPress}
                style={{ width: '100%', padding: '0.5rem 1rem 0.5rem 2.5rem', border: '1px solid #ccc', borderRadius: '0.25rem' }}
              />
              <div style={{ position: 'absolute', left: '0.75rem', top: '50%', transform: 'translateY(-50%)', color: 'gray' }}>
                <Lock size={16} />
              </div>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <input
                type="checkbox"
                id="remember"
                checked={rememberMe}
                onChange={(e) => setRememberMe(e.target.checked)}
              />
              <label htmlFor="remember" style={{ fontSize: '0.875rem' }}>Remember me</label>
            </div>
            <button onClick={handleLogin} style={{ width: '100%', padding: '0.5rem', backgroundColor: '#007bff', color: 'white', border: 'none', borderRadius: '0.25rem' }}>Login</button>
            <div style={{ textAlign: 'center', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              <button
                onClick={(e) => { e.preventDefault(); navigate("/forgot-password"); }}
                className="text-sm text-white hover:text-blue-600 hover:underline"
              >
                Forgot Password?
              </button>
              <p style={{ fontSize: '0.875rem' }}>
                Don't have an account?{" "}
                <button
                  onClick={(e) => { e.preventDefault(); navigate("/register"); }}
                  style={{ color: '#007bff', background: 'none', border: 'none', textDecoration: 'underline' }}
                >
                  Register
                </button>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
