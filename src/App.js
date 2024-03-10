import React, { useState } from "react";
import "./App.css"; // Import CSS file

function PasswordGenerator() {
  const [passwordLength, setPasswordLength] = useState(8);
  const [includeUppercase, setIncludeUppercase] = useState(true);
  const [includeLowercase, setIncludeLowercase] = useState(true);
  const [includeNumbers, setIncludeNumbers] = useState(true);
  const [includeSymbols, setIncludeSymbols] = useState(true);
  const [password, setPassword] = useState("");

  const generatePassword = () => {
    let characters = "";
    if (includeUppercase) characters += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    if (includeLowercase) characters += "abcdefghijklmnopqrstuvwxyz";
    if (includeNumbers) characters += "0123456789";
    if (includeSymbols) characters += "!@#$%^&*()_+{}|:<>?-=[];,./";

    let generatedPassword = "";
    for (let i = 0; i < passwordLength; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      generatedPassword += characters[randomIndex];
    }
    setPassword(generatedPassword);
  };

  const handlePasswordLengthChange = (event) => {
    const value = parseInt(event.target.value);
    if (value >= 8 && value <= 50) {
      setPasswordLength(value);
    }
  };

  return (
    <div className="password-generator">
      <h1>Password Generator</h1>
      <div>
        <label htmlFor="passwordLength">Password Length (8-50):</label>
        <input
          type="number"
          id="passwordLength"
          value={passwordLength}
          onChange={handlePasswordLengthChange}
        />
      </div>
      <div className="options">
        <label>
          <input
            type="checkbox"
            checked={includeUppercase}
            onChange={(e) => setIncludeUppercase(e.target.checked)}
          />
          Include Uppercase
        </label>
        <label>
          <input
            type="checkbox"
            checked={includeLowercase}
            onChange={(e) => setIncludeLowercase(e.target.checked)}
          />
          Include Lowercase
        </label>
        <label>
          <input
            type="checkbox"
            checked={includeNumbers}
            onChange={(e) => setIncludeNumbers(e.target.checked)}
          />
          Include Numbers
        </label>
        <label>
          <input
            type="checkbox"
            checked={includeSymbols}
            onChange={(e) => setIncludeSymbols(e.target.checked)}
          />
          Include Symbols
        </label>
      </div>
      <button onClick={generatePassword}>Generate Password</button>
      {password && (
        <div className="generated-password">
          <h2>Generated Password:</h2>
          <textarea rows="4" cols="50" value={password} readOnly />
        </div>
      )}
    </div>
  );
}

export default PasswordGenerator;
