import { useState } from "react";

const Root = () => {
  const [showJoinRoom, setShowJoinRoom] = useState(true);

  return (
    <div className="flex flex-col h-screen justify-center items-center">
      <div className="flex flex-col justify-center border-2 p-16 rounded-md shadow-lg space-y-4">
        <h1 className="font-bold text-5xl">Bored Games</h1>
        <button className="bg-green-700 text-white rounded-md shadow-md p-3 hover:bg-green-600 hover:shadow-xl font-bold text-lg">
          Join Room
        </button>
        <button className="bg-blue-700 text-white rounded-md shadow-md p-3 hover:bg-blue-600 hover:shadow-xl font-bold text-lg">
          Create Room
        </button>
      </div>
    </div>
  );
};

export default Root;
