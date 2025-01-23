import BottomNav from "../components/BottomNav";
import saveButton from "../assets/save-button.svg";
import editButton from "../assets/edit-button.svg";
import { Link } from "react-router";
import { useState } from "react";

export default function Settings() {
  const [editName, setEditName] = useState(false);
  const [name, setName] = useState("Syed Urooj Kamal");

  function toggleEditName() {
    setEditName((prev) => !prev);
  }

  function editNameOnChange(event) {
    setName(event.target.value);
  }

  return (
    <div className="h-svh bg-slate-800 text-white">
      <div className="sticky top-0 flex items-center justify-center bg-slate-700 py-3 shadow-lg">
        <div className="text-3xl">Settings</div>
      </div>

      <div className="mx-auto flex max-w-screen-sm flex-col items-center gap-3 px-5">
        <div className="m-5">
          <img
            className="w-48 rounded-full border-2 border-dashed p-1"
            src="https://images.vexels.com/content/145908/preview/male-avatar-maker-2a7919.png"
            alt=""
          />

          <img className="ml-auto w-6" src={editButton} alt="" />
        </div>

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

        <div className="w-full">
          <div className="text-gray-400">Email</div>
          <div>syeduroojkamal26@gmail.com</div>
        </div>

        <div className="w-full">
          <div className="text-gray-400">Date joined</div>
          <div>26/01/2024</div>
        </div>

        <button className="w-2/3 max-w-72 bg-blue-500 p-2 text-xl text-center">
          Change Password
        </button>

        <Link
          to="/login"
          className="w-2/3 max-w-72 bg-blue-500 p-2 text-xl text-center"
        >
          Logout
        </Link>
        <Link
          to="/login"
          className="w-2/3 min-w-fit max-w-72 bg-red-500 p-2 text-xl text-center"
        >
          Delete Account
        </Link>
      </div>

      <BottomNav />
    </div>
  );
}
