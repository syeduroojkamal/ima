import { Link } from "react-router";

export default function UserSelector(props) {
  return (
    <Link to="/chat">
      <div className="m-2 flex items-center bg-slate-700 px-3 py-2">
        <img
          className="w-20 rounded-full"
          src="https://images.vexels.com/content/145908/preview/male-avatar-maker-2a7919.png"
          alt="profile photo"
        />
        <div className="ml-3 w-full">
          <div className="flex justify-between">
            <span className="text-xl">{props.name}</span> <span>12:44</span>
          </div>
          <span className="text-blue-500">last message</span>
        </div>
      </div>
    </Link>
  );
}
