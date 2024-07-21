import React from 'react';
import MessageForm from './MessageForm';

export default function MessageList({ messages, activeChannel, sendMessage }) {
  return (
    <div className="h-[540px] flex flex-col bg-[rgb(78,83,90)] text-white overflow-hidden">
      <div className="flex-1 overflow-y-auto p-0">
        <ul className="list-none">
          {messages.map((msg, index) => (
            <li key={index} className="mb-2">
              <strong className='font-bold ml-4 text-[rgb(233,234,236)]'>{msg.username}</strong>: {msg.message}
            </li>
          ))}
        </ul>
      </div>
      <div className="">
        {activeChannel && <MessageForm sendMessage={sendMessage} />}
      </div>
    </div>
  );
}
