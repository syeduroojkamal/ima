import { BrowserRouter as Router, Route, Routes } from "react-router";
import Chat from "./pages/Chat";
import Chats from "./pages/Chats";
import Group from "./pages/Group";
import Groups from "./pages/Groups";
import Login from "./pages/Login";
import Settings from "./pages/Settings";
import Signup from "./pages/Signup";

export default function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Chats />} />
          <Route path="/chat" element={<Chat />} />
          <Route path="/chats" element={<Chats />} />
          <Route path="/group" element={<Group />} />
          <Route path="/groups" element={<Groups />} />
          <Route path="/login" element={<Login />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </Router>
    </>
  );
}
