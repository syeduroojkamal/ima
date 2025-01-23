import UserSelector from "../components/Chats/UserSelector";
import BottomNav from "../components/BottomNav";

export default function Chats() {
  return (
    <div className="h-svh bg-slate-800 text-white">
      <div className="flex items-center justify-center bg-slate-700 py-3 shadow-lg sticky top-0">
        <div className="text-3xl">Messages</div>
      </div>

      <div className="mx-auto max-w-xl">
        <UserSelector name="Saima" />
        <UserSelector name="Syed Urooj Kamal" />
        <div className="w-full h-24"></div>
      </div>

      <BottomNav />
    </div>
  );
}
