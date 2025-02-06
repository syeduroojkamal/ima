import ErrorMessage from "../components/ErrorMessage";
import { useState } from "react";
import { Link, useNavigate } from "react-router";

export default function Login() {
  const navigate = useNavigate();
  const [error, setError] = useState("");

  const login = async (email, password) => {
    const payload = { email, password };
    try {
      const response = await fetch("http://localhost:3000/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify(payload),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Login failed");
      }

      navigate("/chats");
    } catch (error) {
      setError(error.message);
    }
  };

  function handleSubmit(event) {
    event.preventDefault();

    const formData = new FormData(event.target);
    const email = formData.get("email");
    const password = formData.get("password");

    // client side validation
    if (!email || !password) {
      setError("Fill all input fields");
      return;
    }
    if (password.length < 4) {
      setError("Password must be at least 4 characters long.");
      return;
    }
    // end client side validation
    login(email, password);
  }

  return (
    <div className="flex h-svh justify-center bg-slate-800">
      <form
        onSubmit={handleSubmit}
        className="flex h-svh w-80 flex-col items-center justify-center gap-4 text-white"
      >
        <h1 className="mb-8 w-full self-start text-5xl">Login</h1>
        <input
          className="w-full rounded bg-slate-700 p-2 text-white"
          type="email"
          name="email"
          placeholder="Email"
          autoComplete="on"
        />
        <input
          className="w-full rounded bg-slate-700 p-2 text-white"
          type="password"
          name="password"
          placeholder="Password"
          autoComplete="off"
        />
        <button className="w-full rounded bg-blue-500 py-2">Login</button>
        <span>
          Click here to{" "}
          <Link to="/signup" className="text-blue-500">
            Sign Up
          </Link>
        </span>
        {error ? <ErrorMessage message={error} /> : null}
      </form>
    </div>
  );
}
