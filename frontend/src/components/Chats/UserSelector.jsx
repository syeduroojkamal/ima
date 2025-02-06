import { Link } from "react-router";

export default function UserSelector({ name, id }) {
  return (
    <Link to="/chat" state={{ name, id }}>
      <div className="m-2 flex items-center bg-slate-700 px-3 py-2 h-20">
        <div className="w-20">
          <img
            className="rounded-full"
            src="https://images.vexels.com/content/145908/preview/male-avatar-maker-2a7919.png"
            alt="profile photo"
          />
        </div>
        <div className="ml-3 w-full">
          <div className="flex justify-between">
            <span className="text-xl">{name}</span> <span>12:44</span>
          </div>
          <span className="text-blue-500">last message</span>
        </div>
      </div>
    </Link>
  );
}
