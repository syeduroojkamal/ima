import { Link, useNavigate } from "react-router";

export default function Signup() {
  const navigate = useNavigate();
  function handleSubmit(event) {
    event.preventDefault();

    const formData = new FormData(event.target);
    const name = formData.get("name");
    const email = formData.get("email");
    const password = formData.get("password");

    console.log(`${name} ${email} ${password}`);

    navigate("/chats");
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
        />
        <button className="w-full rounded bg-blue-500 py-2">Sign Up</button>
        <span>
          Already have an Account?{" "}
          <Link to="/login" className="text-blue-500">
            Login
          </Link>
        </span>
      </form>
    </div>
  );
}
