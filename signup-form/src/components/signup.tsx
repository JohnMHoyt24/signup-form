import React, { useState } from "react";
import "../assets/signup.css";

interface User {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}

const SignupForm: React.FC = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const validate = () => {
    const newErrors: { [key: string]: string } = {};
    if (!firstName) newErrors.firstName = "First name is required";
    if (!lastName) newErrors.lastName = "Last name is required";
    if (!email) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = "Email address is invalid";
    }
    if (!password) {
      newErrors.password = "Password is required";
    } else if (password.length < 6) {
      newErrors.password = "Password must be at least 6 characters long";
    }

    return newErrors;
  }

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    const validationErrors = validate();

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      setErrors({});
      const newUser: User = {
        id: Date.now(),
        firstName,
        lastName,
        email,
        password,
      };
      console.log("Form is valid. New user: ", newUser); 
    }

  }

    return (
      <form className="signup-container">
        <div>
          <input
            type="text"
            id="firstname"
            placeholder="Enter your first name..."
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            className={errors.firstName ? 'invalid-input' : ''}
          />
          {errors.firstName && <p className="error">{errors.firstName}</p>}
        </div>
        <div>
          <input
            type="text"
            id="lastname"
            placeholder="Enter your last name..."
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            className={errors.lastName ? 'invalid-input' : ''}
          />
          {errors.lastName && <p className="error">{errors.lastName}</p>}
        </div>
        <div>
          <input
            type="email"
            id="email"
            placeholder="Enter your email address..."
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className={errors.email ? 'invalid-input' : ''}
          />
          {errors.email && <p className="error">{errors.email}</p>}
        </div>
        <div>
          <input
            type="password"
            id="password"
            placeholder="Create a password..."
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className={errors.password ? 'invalid-input' : ''}
          />
          {errors.password && <p className="error">{errors.password}</p>}
        </div>
        <button type="submit" onClick={handleSubmit}>
          Claim your free trial
        </button>
        <p className="terms-and-services">
          By clicking the button, you are agreeing to our {""}
          <a href="#">Terms and Services</a>
        </p>
      </form>
    );
  };

export default  SignupForm;