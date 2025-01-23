import { Link, useNavigate } from "react-router";

export default function Login() {
  const navigate = useNavigate();
  function handleSubmit(event) {
    event.preventDefault();

    const formData = new FormData(event.target);
    const email = formData.get("email");
    const password = formData.get("password");

    console.log(`${email} ${password}`);

    navigate("/chats");
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
      </form>
    </div>
  );
}
