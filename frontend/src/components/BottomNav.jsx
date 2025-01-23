import { NavLink } from "react-router";
import groupsImg from "../assets/groups.svg";
import messageImg from "../assets/message.svg";
import settingsImg from "../assets/settings.svg";

export default function BottomNav() {
  return (
    <div className="fixed bottom-0 flex h-24 w-full items-end justify-evenly bg-slate-700 p-5">
      <NavLink to="/groups" className="flex flex-col">
        <img className="h-9" src={groupsImg} alt="groups image" />
        <span>Groups</span>
      </NavLink>
      <NavLink to="/chats" className="flex flex-col">
        <img className="h-9" src={messageImg} alt="message image" />
        <span>Message</span>
      </NavLink>
      <NavLink to="/settings" className="flex flex-col">
        <img className="h-9" src={settingsImg} alt="settings image" />

        <span>Settings</span>
      </NavLink>
    </div>
  );
}
