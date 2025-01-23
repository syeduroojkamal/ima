import { useRef } from "react";
import { useNavigate } from "react-router";
import backButtonImg from "../assets/back-button.svg";
import sideMenuImg from "../assets/side-menu.svg";
import sendButtonImg from "../assets/send-button.svg";
import RecievedMessage from "../components/Chats/ReceivedMessage";
import SentMessage from "../components/Chats/SentMessage";

export default function Chat() {
  const navigate = useNavigate();
  const refMessageBox = useRef(null);

  function handleBackButton() {
    navigate("/chats");
  }

  function handleSubmit(event) {
    event.preventDefault();

    const formData = new FormData(event.target);
    const message = formData.get("message");

    console.log(message);
    refMessageBox.current.reset();
  }
  return (
    <div className="h-svh bg-slate-800 text-white">
      <div className="flex items-center bg-slate-700 py-3 shadow-lg">
        <img
          className="ml-2 w-11 cursor-pointer"
          src={backButtonImg}
          alt="back button"
          onClick={handleBackButton}
        />
        <img
          className="w-12 mr-3 rounded-full border"
          src="https://images.vexels.com/content/145908/preview/male-avatar-maker-2a7919.png"
          alt="Profile Photo"
        />
        <div className="text-3xl">Saima</div>
        <button popovertarget="sideMenu" className="ml-auto mr-7">
          <img className="w-8" src={sideMenuImg} alt="" />
        </button>
      </div>

      <div
        popover="auto"
        id="sideMenu"
        className="ml-auto mr-5 mt-20 w-44 bg-slate-700 text-white rounded"
      >
        <div className="cursor-pointer p-2 hover:bg-slate-800 active:bg-slate-800">
          View Profile
        </div>
        <div className="cursor-pointer p-2 hover:bg-slate-800 active:bg-slate-800">
          View Status
        </div>
        <div className="cursor-pointer text-red-500 p-2 hover:bg-slate-800 active:bg-slate-800">
          Block
        </div>
        <div className="cursor-pointer text-red-500 p-2 hover:bg-slate-800 active:bg-slate-800">
          Delete All Chat
        </div>
      </div>

      <div className="flex flex-col">
        <SentMessage message="Hi" />
        <RecievedMessage message="How are you" />
      </div>

      <div className="fixed bottom-0 flex h-24 w-full items-end bg-slate-700 p-5">
        <form
          className="flex w-full items-center gap-3"
          ref={refMessageBox}
          onSubmit={handleSubmit}
        >
          <input
            className="scrollbar-none flex-grow resize-none overflow-y-hidden rounded-3xl border-none bg-slate-800 p-3 text-white"
            name="message"
            id="message"
            placeholder="Message"
          ></input>
          <button className="ml-auto w-14 rounded-full bg-blue-500 p-3">
            <img src={sendButtonImg} alt="" />
          </button>
        </form>
      </div>
    </div>
  );
}
