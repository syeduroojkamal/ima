import { useEffect, useRef, useState } from "react";
import { useNavigate, useLocation } from "react-router";
import backButtonImg from "../assets/back-button.svg";
import hamburgerMenu from "../assets/hamburger-menu.svg";
import sendButtonImg from "../assets/send-button.svg";

export default function Group() {
  const location = useLocation();
  const { name, id } = location.state || {};
  function Topbar() {
    let profilePhoto =
      "https://images.vexels.com/content/145908/preview/male-avatar-maker-2a7919.png";

    const navigate = useNavigate();
    function handleBackButton() {
      navigate("/groups");
    }
    function HamburgerMenu() {
      return (
        <>
          <button popovertarget="sideMenu" className="ml-auto mr-7">
            <img className="w-8" src={hamburgerMenu} alt="" />
          </button>
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
        </>
      );
    }
    return (
      <div className="flex items-center bg-slate-700 py-3 shadow-lg text-white sticky top-0">
        <img
          className="ml-2 w-11 cursor-pointer"
          src={backButtonImg}
          alt="back button"
          onClick={handleBackButton}
        />
        <div>
          <img
            src={profilePhoto}
            alt="profile photo"
            className="w-12 mr-3 rounded-full border"
          />
        </div>
        <div className="text-3xl">{name}</div>
        <HamburgerMenu />
      </div>
    );
  }

  function Messages() {
    function MessageBubble(props) {
      return (
        <div className="ml-auto mr-4 mt-4 w-fit max-w-xs rounded-2xl bg-blue-500 p-3 text-white">
          {props.message}
        </div>
      );
    }
    return (
      <>
        <MessageBubble message={"Hi " + name} />
        <div className="h-28"></div>
      </>
    );
  }

  function MessageBox() {
    return (
      <div className="fixed bottom-0 flex h-24 w-full items-end bg-slate-700 p-5">
        <form className="flex w-full items-center gap-3">
          <input
            className="scrollbar-none flex-grow resize-none overflow-y-hidden rounded-3xl border-none bg-slate-800 p-3 text-white"
            name="message"
            id="message"
            placeholder="Message"
            autoComplete="off"
          ></input>
          <button className="ml-auto w-14 rounded-full bg-blue-500 p-3">
            <img src={sendButtonImg} alt="" />
          </button>
        </form>
      </div>
    );
  }

  return (
    <>
      <Topbar />
      <Messages />
      <MessageBox />
    </>
  );
}
