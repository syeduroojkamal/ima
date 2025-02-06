import ErrorMessage from "../components/ErrorMessage";
import { useState } from "react";
import { Link, useNavigate } from "react-router";

export default function Signup() {
  const navigate = useNavigate();
  const [error, setError] = useState("");

  const signup = async (name, email, password) => {
    const payload = { name, email, password };
    try {
      const response = await fetch("http://localhost:3000/api/auth/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify(payload),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Signup failed");
      }

      navigate("/chats");

      console.log("Signup successful:", data);
      return data;
    } catch (error) {
      setError(error.message);
    }
  };

  function handleSubmit(event) {
    event.preventDefault();

    const formData = new FormData(event.target);
    const name = formData.get("name");
    const email = formData.get("email");
    const password = formData.get("password");

    // client side validation
    if (!name || !email || !password) {
      setError("Fill all input fields");
      return;
    }
    if (password.length < 4) {
      setError("Password must be at least 4 characters long.");
      return;
    }
    // end client side validation

    signup(name, email, password);
  }

  return (
    <div className="flex h-svh justify-center bg-slate-800">
      <form
        onSubmit={handleSubmit}
        className="flex h-svh flex-col items-center justify-center gap-4 text-white w-80"
      >
        <h1 className="mb-8 w-full self-start text-5xl">Sign Up</h1>
        <input
          className="w-full rounded p-2 text-white bg-slate-700"
          type="text"
          name="name"
          placeholder="Name"
          autoComplete="off"
        />
        <input
          className="w-full rounded p-2 text-white bg-slate-700"
          type="email"
          name="email"
          placeholder="Email"
          autoComplete="off"
        />
        <input
          className="w-full rounded p-2 text-white bg-slate-700"
          type="password"
          name="password"
          placeholder="Password"
          autoComplete="new-password"
        />
        <button className="w-full rounded bg-blue-500 py-2">Sign Up</button>
        <span>
          Already have an Account?{" "}
          <Link to="/login" className="text-blue-500">
            Login
          </Link>
        </span>
        {error ? <ErrorMessage message={error} /> : null}
      </form>
    </div>
  );
}
