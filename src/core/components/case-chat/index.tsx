import React from "react";

const CaseChat = ({ message, date }: { message: string; date?: string }) => {
  return (
    <div className="relative bg-gray-100 border border-gray-300 p-3 rounded">
      <span className="w-full overflow-hidden text-clip">{message}</span>
      <span className="absolute bottom-0 right-0 text-sm m-2">{date}</span>
    </div>
  );
};

export default CaseChat;
