import { useState } from "react";
import "../styles/font.css";
import "../styles/Authpopup.css";
import Logo from "../assets/Logo.png";
import Flag from "../assets/Pakistan.png";
import Eye from "../assets/Eye.png";

import { auth } from "../firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile
} from "firebase/auth";

export default function AuthPopup({ onClose }) {
  const [showPassword, setShowPassword] = useState(false);
  const [isRegister, setIsRegister] = useState(false);

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleRegister = async () => {
    const email = phone.trim() + "@app.com";

    if (!name || !phone || !password || !confirmPassword) {
      return alert("Please fill all fields");
    }

    if (phone.length < 10) return alert("Enter valid phone number");
    if (password !== confirmPassword) return alert("Passwords do not match");

    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);

      // ✅ Set display name
      await updateProfile(userCredential.user, { displayName: name });

      alert("Account Created 🎉");

      setName(""); setPhone(""); setPassword(""); setConfirmPassword("");
      setIsRegister(false);

      // ✅ Close popup
      onClose();

    } catch (error) {
      console.log(error);
      if (error.code === "auth/email-already-in-use") alert("User already exists");
      else alert(error.message);
    }
  };

  const handleLogin = async () => {
    const email = phone.trim() + "@app.com";

    if (!phone || !password) return alert("Enter phone and password");

    try {
      await signInWithEmailAndPassword(auth, email, password);

      alert("Login Successful 🚀");
      onClose();

    } catch (error) {
      console.log(error);
      if (error.code === "auth/user-not-found") alert("User not found");
      else if (error.code === "auth/wrong-password") alert("Wrong password");
      else alert(error.message);
    }
  };

  return (
    <div className="ths-auth-overlay">
      <div className="ths-auth-modal">
        <span className="ths-auth-close" onClick={onClose}>×</span>
        <img src={Logo} alt="logo" className="ths-auth-logo" />
        <h2 className="ths-auth-title regular">{isRegister ? "Create Account" : "Welcome back!"}</h2>
        <p className="ths-auth-subtitle sans">Login to your account to continue</p>

        <div className="ths-auth-groups">
          {isRegister && (
            <div className="ths-auth-group">
              <label className="sans">Full Name</label>
              <div className="ths-auth-input">
                <input type="text" className="sans" placeholder="Enter your name" value={name} onChange={e => setName(e.target.value)} />
              </div>
            </div>
          )}

          <div className="ths-auth-group">
            <label className="sans">Phone Number</label>
            <div className="ths-auth-input ths-auth-phone">
              <span className="ths-auth-flag"><img src={Flag} alt="" /></span>
              <span className="ths-auth-code sans">+92</span>
              <input type="text" className="sans" placeholder="3XX XXXXXXX" value={phone} onChange={e => setPhone(e.target.value)} />
            </div>
          </div>

          <div className="ths-auth-group">
            <label className="sans">Password</label>
            <div className="ths-auth-input">
              <input className="sans" type={showPassword ? "text" : "password"} placeholder="Enter your password" value={password} onChange={e => setPassword(e.target.value)} />
              <span className="ths-auth-eye" onClick={() => setShowPassword(!showPassword)}>
                <img src={Eye} alt="" />
              </span>
            </div>
          </div>

          {isRegister && (
            <div className="ths-auth-group">
              <label className="sans">Confirm Password</label>
              <div className="ths-auth-input">
                <input className="sans" type={showPassword ? "text" : "password"} placeholder="Confirm your password" value={confirmPassword} onChange={e => setConfirmPassword(e.target.value)} />
              </div>
            </div>
          )}

        </div>

        <button className="ths-auth-btn regular" onClick={isRegister ? handleRegister : handleLogin}>
          {isRegister ? "Create Account" : "Login"}
        </button>

        <p className="ths-auth-signup sans">
          {isRegister ? "Already have an account?" : "Don't have an account?"}
          <span className="regular" onClick={() => setIsRegister(!isRegister)} style={{ cursor: "pointer" }}>
            {isRegister ? " Login" : " Sign Up"}
          </span>
        </p>

      </div>
    </div>
  );
}