import BottomNav from "../components/BottomNav";
import { useNavigate } from "react-router";

import { useEffect, useRef, useState } from "react";
import { Link } from "react-router";

export default function Chats() {
  function UserSelector({ name, id }) {
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

  function Users() {
    const [allUsers, setAllUsers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(undefined);

    useEffect(() => {
      let isMounted = true;
      setLoading(true);

      const fetchAllUsers = async () => {
        try {
          const response = await fetch(
            "http://localhost:3000/api/user/all-users",
            {
              credentials: "include",
            }
          );

          const data = await response.json();

          if (!response.ok) {
            throw new Error(data.message || "All users fetch failed");
          }

          if (isMounted) {
            setAllUsers(data);
            setLoading(false);
          }
        } catch (error) {
          setError(error.message);
          setLoading(false);
        }
      };
      // todo: remove this timeout in production
      setTimeout(fetchAllUsers, 1000);
      return () => {
        isMounted = false;
      };
    }, []);

    const navigate = useNavigate();
    if (error) {
      navigate("/login");
      return (
        <div className="text-center mt-5 text-2xl text-red-500">{error}</div>
      );
    }

    if (loading) {
      return (
        <div className="text-center mt-5 text-2xl animate-bounce">
          Loading...
        </div>
      );
    }

    return (
      <>
        <div className="mx-auto max-w-xl">
          {allUsers.map((user) => {
            return (
              <UserSelector key={user._id} name={user.name} id={user._id} />
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
        <div className="text-3xl">Chats</div>
      </div>
      <Users />
      <BottomNav />
    </div>
  );
}
