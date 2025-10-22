import React, { useState } from "react";

interface User {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}

const SignupForm: React.FC = ({ errors }) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    const newUser: User = {
      id: Date.now(),
      firstName,
      lastName,
      email,
      password,
    };
    console.log(newUser);
  }

  return (
    <form>
      <div>
        <input
          type="text"
          id="firstName"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          required
        />
      </div>
      <div>
        <input
          type="text"
          id="lastName"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          required
        />
        {}
      </div>
      <div>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>
      <div>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </div>
      <button type="submit" onClick={handleSubmit}>Sign Up</button>
    </form>
  );
}

export default  SignupForm;