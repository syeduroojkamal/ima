import BottomNav from "../components/BottomNav";
import saveButton from "../assets/save-button.svg";
import editButton from "../assets/edit-button.svg";
import { Link, useNavigate } from "react-router";
import { useState, useRef, useEffect } from "react";

export default function Settings() {
  const navigate = useNavigate();

  const [editName, setEditName] = useState(false);
  const [name, setName] = useState("");

  const fetched = useRef(false);
  const [user, setUser] = useState([]);
  const fetchUserInfo = async () => {
    try {
      const response = await fetch("http://localhost:3000/api/user/info", {
        credentials: "include",
      });
      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "All message fetch failed");
      }

      setUser(data);
      setName(user.name);
    } catch (error) {
      navigate("/login");
      console.log(error.message);
    }
  };

  useEffect(() => {
    if (!fetched.current) {
      fetchUserInfo();
      fetched.current = true;
    }
  }, []);

  useEffect(() => {
    if (user.name) {
      setName(user.name);
    }
  }, [user]);

  function ProfilePhoto() {
    return (
      <div className="m-5">
        <img
          className="w-48 rounded-full border-2 border-dashed p-1"
          src="https://images.vexels.com/content/145908/preview/male-avatar-maker-2a7919.png"
          alt=""
        />

        <img className="ml-auto w-6" src={editButton} alt="" />
      </div>
    );
  }

  function NameElement() {
    function toggleEditName() {
      setEditName((prev) => !prev);
    }

    function editNameOnChange(event) {
      setName(event.target.value);
    }
    return (
      <>
        {editName ? (
          <div className="flex w-full">
            <div>
              <div className="text-gray-400">Name</div>
              <input
                className="text-white bg-slate-600 border-2 border-dashed px-1 "
                type="text"
                value={name}
                name="name"
                onChange={editNameOnChange}
                autoComplete="off"
              />
            </div>
            {/* todo: add prevent default */}
            <button className="ml-auto">
              <img
                className=" w-6"
                onClick={toggleEditName}
                src={saveButton}
                alt="save button"
              />
            </button>
          </div>
        ) : (
          <div className="flex w-full">
            <div>
              <div className="text-gray-400">Name</div>
              <div>{name}</div>
            </div>
            <button className="ml-auto">
              <img
                className="ml-auto w-6"
                onClick={toggleEditName}
                src={editButton}
                alt="edit button"
              />
            </button>
          </div>
        )}
      </>
    );
  }

  function EmailElement() {
    return (
      <div className="w-full">
        <div className="text-gray-400">Email</div>
        <div>{user.email}</div>
      </div>
    );
  }

  function JoinDateElement() {
    return (
      <div className="w-full">
        <div className="text-gray-400">Date joined</div>
        <div>{new Date(user.createdAt).toLocaleDateString("en-GB")}</div>
      </div>
    );
  }

  function ChangePasswordButton() {
    return (
      <button className="w-2/3 max-w-72 bg-blue-500 p-2 text-xl text-center">
        Change Password
      </button>
    );
  }

  function LogoutButton() {
    const logout = async () => {
      try {
        const response = await fetch("http://localhost:3000/api/auth/logout", {
          method: "POST",
          credentials: "include",
        });

        const data = await response.json();

        if (!response.ok) {
          throw new Error(data.message || "logout failed");
        }

        navigate("/login");
        console.log(data.message);
      } catch (error) {
        console(error.message);
      }
    };
    return (
      <button
        className="w-2/3 max-w-72 bg-blue-500 p-2 text-xl text-center active:bg-blue-600"
        onClick={logout}
      >
        Logout
      </button>
    );
  }

  function DeleteUserButton() {
    const deleteUser = async () => {
      try {
        const response = await fetch(
          "http://localhost:3000/api/user/delete-user",
          {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            credentials: "include",
          }
        );

        const data = await response.json();

        if (!response.ok) {
          throw new Error(data.message || "User delete failed");
        }

        navigate("/signup");
        console.log(data.message);
      } catch (error) {
        console.log(error.message);
      }
    };
    return (
      <button
        className="w-2/3 min-w-fit max-w-72 bg-red-500 p-2 text-xl text-center"
        onClick={deleteUser}
      >
        Delete Account
      </button>
    );
  }

  return (
    <div className="h-svh bg-slate-800 text-white">
      <div className="sticky top-0 flex items-center justify-center bg-slate-700 py-3 shadow-lg">
        <div className="text-3xl">Settings</div>
      </div>

      <div className="mx-auto flex max-w-screen-sm flex-col items-center gap-3 px-5 pb-28">
        <ProfilePhoto />
        <NameElement />
        <EmailElement />
        <JoinDateElement />
        <ChangePasswordButton />
        <LogoutButton />
        <DeleteUserButton />
      </div>

      <BottomNav />
    </div>
  );
}
