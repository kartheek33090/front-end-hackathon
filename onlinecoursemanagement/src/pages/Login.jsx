import { useNavigate } from "react-router-dom";
import "./login.css";

export default function Login() {
  const navigate = useNavigate();

  function handleLogin() {
    navigate("/dashboard");
  }

  return (
    <div className="login-page">
      <div className="login-card">
        <img 
          src="https://images.unsplash.com/photo-1584697964151-9e8b3b6ffbd1"
          className="login-img"
        />
        <h2>Student Login</h2>
        <input type="text" placeholder="Enter Username" />
        <input type="password" placeholder="Enter Password" />
        <button onClick={handleLogin}>Login</button>
      </div>
    </div>
  );
}
