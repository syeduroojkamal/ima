export default function Group() {
  return (
    <div className="h-svh bg-slate-800 text-white">
      <div className="flex items-center bg-slate-700 py-3 shadow-lg">
        <svg
          className="ml-2 w-11 cursor-pointer"
          fill="#ffffff"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g data-name="arrow-ios-back">
            <path d="M13.83 19a1 1 0 0 1-.78-.37l-4.83-6a1 1 0 0 1 0-1.27l5-6a1 1 0 0 1 1.54 1.28L10.29 12l4.32 5.36a1 1 0 0 1-.78 1.64z" />
          </g>
        </svg>
        <img
          className="w-12 mr-3 rounded-full border"
          src="https://images.vexels.com/content/145908/preview/male-avatar-maker-2a7919.png"
          alt="Profile Photo"
        />
        <div className="text-3xl">Saima</div>
        <button popovertarget="sideMenu" className="ml-auto mr-7">
          <svg
            className="w-8"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
          >
            <path
              fill="#ffffff"
              fill-rule="evenodd"
              d="M19 4a1 1 0 01-1 1H2a1 1 0 010-2h16a1 1 0 011 1zm0 6a1 1 0 01-1 1H2a1 1 0 110-2h16a1 1 0 011 1zm-1 7a1 1 0 100-2H2a1 1 0 100 2h16z"
            />
          </svg>
        </button>
      </div>

      <div
        popover
        id="sideMenu"
        className="ml-auto mr-5 mt-20 w-44 bg-slate-700 text-white rounded"
      >
        <div className="cursor-pointer p-2 hover:bg-slate-800 active:bg-slate-800">
          View Profile
        </div>
        <div className="cursor-pointer p-2 hover:bg-slate-800 active:bg-slate-800">
          View Status
        </div>
        <div className="cursor-pointer p-2 hover:bg-slate-800 active:bg-slate-800">
          Block
        </div>
        <div className="cursor-pointer p-2 hover:bg-slate-800 active:bg-slate-800">
          Delete All Chat
        </div>
      </div>

      <div className="flex flex-col">
        <div className="ml-auto mr-4 mt-4 w-fit max-w-xs rounded-2xl bg-blue-500 p-3">
          Sent Message
        </div>
        <div className="bg-g ml-4 mt-4 w-fit max-w-xs rounded-2xl bg-slate-700 p-3">
          Recieved Message
        </div>
      </div>

      <div className="fixed bottom-0 flex h-24 w-full items-end bg-slate-700 p-5">
        <form className="flex w-full items-center gap-3">
          <textarea
            className="scrollbar-none flex-grow resize-none overflow-y-hidden rounded-3xl border-none bg-slate-800 p-3 text-white"
            name=""
            id=""
            cols="30"
            rows="1"
            placeholder="Messaage"
          ></textarea>
          <button className="ml-auto w-14 rounded-full bg-blue-500 p-3">
            <svg
              viewBox="0 0 28 28"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
            >
              <title>ic_fluent_send_28_filled</title>
              <desc>Created with Sketch.</desc>
              <g
                id="🔍-Product-Icons"
                stroke="none"
                stroke-width="1"
                fill="none"
                fill-rule="evenodd"
              >
                <g
                  id="ic_fluent_send_28_filled"
                  fill="#ffffff"
                  fill-rule="nonzero"
                >
                  <path
                    d="M3.78963301,2.77233335 L24.8609339,12.8499121 C25.4837277,13.1477699 25.7471402,13.8941055 25.4492823,14.5168992 C25.326107,14.7744476 25.1184823,14.9820723 24.8609339,15.1052476 L3.78963301,25.1828263 C3.16683929,25.4806842 2.42050372,25.2172716 2.12264586,24.5944779 C1.99321184,24.3238431 1.96542524,24.015685 2.04435886,23.7262618 L4.15190935,15.9983421 C4.204709,15.8047375 4.36814355,15.6614577 4.56699265,15.634447 L14.7775879,14.2474874 C14.8655834,14.2349166 14.938494,14.177091 14.9721837,14.0981464 L14.9897199,14.0353553 C15.0064567,13.9181981 14.9390703,13.8084248 14.8334007,13.7671556 L14.7775879,13.7525126 L4.57894108,12.3655968 C4.38011873,12.3385589 4.21671819,12.1952832 4.16392965,12.0016992 L2.04435886,4.22889788 C1.8627142,3.56286745 2.25538645,2.87569101 2.92141688,2.69404635 C3.21084015,2.61511273 3.51899823,2.64289932 3.78963301,2.77233335 Z"
                    id="🎨-Color"
                  ></path>
                </g>
              </g>
            </svg>
          </button>
        </form>
      </div>
    </div>
  );
}
