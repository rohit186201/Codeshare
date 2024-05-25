import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { auth, provider } from "../../firebase";
import "./index.css";

function Index() {
  const history = useHistory();
  const [register, setRegister] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleGoogleSignIN = () => {
    signInWithPopup(auth, provider).then((res) => {
      console.log(res);
    });
  };

  const handleSignIn = (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);
    if (email === "" || password === "") {
      setError("Required field is missing");
      setLoading(false);
    } else {
      signInWithEmailAndPassword(auth, email, password)
        .then((res) => {
          console.log(res);
          setLoading(false);
          history.push('/'); // Navigate to home or another page
        })
        .catch((error) => {
          console.log(error.code);
          setError(error.message);
          setLoading(false);
        });
    }
  };

  const handleRegister = (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);
    if (email === "" || password === "" || username === "") {
      setError("Required field is missing.");
      setLoading(false);
    } else {
      createUserWithEmailAndPassword(auth, email, password)
        .then((res) => {
          console.log(res);
          setLoading(false);
          history.push('/'); // Navigate to home or another page
        })
        .catch((error) => {
          console.log(error);
          setError(error.message);
          setLoading(false);
        });
    }
  };

  return (
    <div className='auth'>
      <div className='auth-container'>
        <p>Add another way to log in using any of the following services.</p>
        <div className="sign-options">
          <div onClick={handleGoogleSignIN} className="single-option">
            <img alt="google" src="https://files.tecnoblog.net/wp-content/uploads/2021/09/logotipo_da_empresa_google.jpg" />
            <p>Login with Google</p>
          </div>
          <div className="single-option">
            <img alt="github" src="https://cdn.pixabay.com/photo/2022/01/30/13/33/github-6980894_1280.png" />
            <p>Login with Github</p>
          </div>
          <div className="single-option">
            <img alt="facebook" src="https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg" />
            <p>Login with Facebook</p>
          </div>
        </div>
        <div className='auth-login'>
          <div className='auth-login-container'>
            {register ? (
              <>
                <div className="input-field">
                  <p>Username</p>
                  <input value={username} onChange={(e) => setUsername(e.target.value)} type="text" />
                </div>
                <div className="input-field">
                  <p>Email</p>
                  <input value={email} onChange={(e) => setEmail(e.target.value)} type="text" />
                </div>
                <div className="input-field">
                  <p>Password</p>
                  <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" />
                </div>
                <button onClick={handleRegister} disabled={loading} style={{ marginTop: "10px" }}>
                  {loading ? "Registering..." : "Register"}
                </button>
              </>
            ) : (
              <>
                <div className="input-field">
                  <p>Email</p>
                  <input value={email} onChange={(e) => setEmail(e.target.value)} type="text" />
                </div>
                <div className="input-field">
                  <p>Password</p>
                  <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" />
                </div>
                <button onClick={handleSignIn} disabled={loading} style={{ marginTop: "10px" }}>
                  {loading ? "Logging in..." : "Login"}
                </button>
              </>
            )}
            <p onClick={() => setRegister(!register)} style={{ marginTop: "10px", textAlign: "center", color: "#0095ff", textDecoration: "underline", cursor: "pointer" }}>
              {register ? "Login" : "Register?"}
            </p>
          </div>
        </div>
        {error !== "" && (
          <p style={{ color: "red", fontSize: "14px" }}>
            {error}
          </p>
        )}
      </div>
    </div>
  );
}

export default Index;
