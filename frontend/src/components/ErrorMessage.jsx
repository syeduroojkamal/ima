export default function ErrorMessage({ message }) {
  return (
    <>
      <div className=" text-red-500 text-center">Error: {message}</div>
    </>
  );
}
