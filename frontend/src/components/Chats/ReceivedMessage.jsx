export default function RecievedMessage(props) {
  return (
    <div className="bg-g ml-4 mt-4 w-fit max-w-xs rounded-2xl bg-slate-700 p-3">
      {props.message}
    </div>
  );
}
