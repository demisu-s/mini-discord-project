import React, { useState } from 'react';

export default function MessageForm({ sendMessage }) {
  const [message, setMessage] = useState('');

  const handleSend = () => {
    if (message.trim()) {
      sendMessage(message);
      setMessage('');
    }
  };

  return (
    <div className="flex items-center ml-4">
      <input 
        type="text"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Enter your message"
        className="border-none p-2 rounded mr-2 w-3/4 bg-[#42464b] text-white"
      />
      <button
        onClick={handleSend}
        className="bg-blue-500 text-white p-2 rounded"
      >
        Send
      </button>
    </div>
  );
}
