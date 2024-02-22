import { useState } from "react";

const SignUpForm = ({ setToken }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const [successMessage, setSuccessMessage] = useState("");

  function validateInputs(username, password) {
    if (username.length >= 8 && password.length >= 8) {
      setError(null);
      return true;
    }

    const suffix = "must be 8 characters long.";
    if (username.length < 8 && password.length < 8) {
      setError(`Username and password ${suffix}`);
    } else if (username.length < 8) {
      setError(`Username ${suffix}`);
    } else {
      setError(`Password ${suffix}`);
    }
    setSuccessMessage("");
    return false;
  }

  async function handleSubmit(event) {
    event.preventDefault();
    try {
      if (!validateInputs(username, password)) return;

      const response = await fetch(
        "https://fsa-jwt-practice.herokuapp.com/signup",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ username, password }),
        }
      );
      const result = await response.json();
      console.log(result);

      setToken(result.token);
      setSuccessMessage(result.message);

      setUsername("");
      setPassword("");
    } catch (error) {
      setError(error.message);
    }
  }

  const usernameErrorClass =
    error && (!username || username.length < 8) ? "error" : "";
  const passwordErrorClass =
    error && (!password || password.length < 8) ? "error" : "";

  return (
    <div>
      <h2>Sign Up!</h2>
      {error && <p>{error}</p>}
      <form onSubmit={handleSubmit}>
        <label>
          Username:{" "}
          <input
            className={usernameErrorClass}
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </label>
        <label>
          Password:{" "}
          <input
            className={passwordErrorClass}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <button>Submit</button>
      </form>
    </div>
  );
}

export default SignUpForm;