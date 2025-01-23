import BottomNav from "../components/BottomNav";
import GroupSelector from "../components/Groups/GroupSelector";

export default function Groups() {
  return (
    <div className="h-svh bg-slate-800 text-white">
      <div className="flex items-center justify-center bg-slate-700 py-3 shadow-lg sticky top-0">
        <div className="text-3xl">Message</div>
      </div>

      <div className="mx-auto max-w-xl">
        <GroupSelector name="Public Group" />
        <div className="w-full h-24"></div>
      </div>
      <BottomNav />
    </div>
  );
}
