export default function SendMessage(props) {
  return (
    <>
      {props.isSender ? (
        <div className="ml-auto mr-4 mt-4 w-fit max-w-xs rounded-2xl bg-blue-500 p-3">
          {props.message}
        </div>
      ) : (
        <div className="bg-g ml-4 mt-4 w-fit max-w-xs rounded-2xl bg-slate-700 p-3">
          {props.message}
        </div>
      )}
    </>
  );
}
