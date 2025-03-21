export default function ErrorTest() {
  return (
    <button
      className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
      onClick={() => {
        throw new Error('testing error');
      }}
    >
      Throw Error
    </button>
  );
}
