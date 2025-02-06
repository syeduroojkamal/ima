import UserSelector from "../components/Chats/UserSelector";
import BottomNav from "../components/BottomNav";
import { useEffect, useRef, useState } from "react";

export default function Chats() {
  const fetched = useRef(false);
  const [allUsers, setAllUsers] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
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

        setAllUsers(data);
      } catch (error) {
        console.log(error.message);
      }
    };
    if (!fetched.current) {
      fetchData();
      fetched.current = true;
    }
  }, []);

  return (
    <div className="h-svh bg-slate-800 text-white">
      <div className="flex items-center justify-center bg-slate-700 py-3 shadow-lg sticky top-0">
        <div className="text-3xl">Messages</div>
      </div>

      <div className="mx-auto max-w-xl">
        {allUsers.map((user) => {
          return <UserSelector key={user._id} name={user.name} id={user._id} />;
        })}
        <div className="w-full h-24"></div>
      </div>

      <BottomNav />
    </div>
  );
}
