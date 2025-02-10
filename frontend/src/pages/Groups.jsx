import BottomNav from "../components/BottomNav";
import { useNavigate } from "react-router";
import { useEffect, useRef, useState } from "react";
import { Link } from "react-router";

export default function Groups() {
  let allGroups = [
    { name: "Public", _id: 1 },
    { name: "Sports", _id: 2 },
  ];

  function GroupSelector({ name }) {
    return (
      <Link to="/group" state={{ name }}>
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

  function Groups() {
    return (
      <>
        <div className="mx-auto max-w-xl">
          {allGroups.map((group) => {
            return (
              <GroupSelector key={group._id} name={group.name} id={group._id} />
            );
          })}
          <div className="w-full h-24"></div>
        </div>
      </>
    );
  }

  return (
    <div className="h-svh bg-slate-800 text-white">
      <div className="flex items-center justify-center bg-slate-700 py-3 shadow-lg sticky top-0">
        <div className="text-3xl">Groups</div>
      </div>
      <Groups />
      <BottomNav />
    </div>
  );
}
