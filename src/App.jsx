import React, { useEffect, useState } from 'react';
import { socket } from './libs/socket';
import Sidebar from './components/Sidebar';
import MessageList from './components/MessageList';
import ConnectionForm from '@/components/ConnectionForm';

export default function App() {
  const [isConnected, setIsConnected] = useState(socket.connected);
  const [username, setUsername] = useState('');
  const [messages, setMessages] = useState([]);
  const [channels, setChannels] = useState([]);
  const [activeChannel, setActiveChannel] = useState('welcome');
  const [showChannels, setShowChannels] = useState(false);
  const [showUserList, setShowUserList] = useState(false);
  const [userList, setUserList] = useState([]);

  useEffect(() => {
    socket.on('connect', () => setIsConnected(true));
    socket.on('disconnect', () => setIsConnected(false));

    socket.on('message:channel', (channel, msg) => {
      if (channel === activeChannel) {
        setMessages(prevMessages => [...prevMessages, msg]);
      }
    });

    socket.on('channels', channels => {
      setChannels(channels);
    });

    return () => {
      socket.off('connect');
      socket.off('disconnect');
      socket.off('message:channel');
      socket.off('channels');
    };
  }, [activeChannel]);

  const connect = () => {
    socket.auth = { username };
    socket.connect();
  };

  const joinChannel = channel => {
    setActiveChannel(channel);
    socket.emit('joinChannel', channel);
    socket.emit('message:channel:send', channel, `User ${username} has joined the channel`);
  };

  const sendMessage = message => {
    socket.emit('message:channel:send', activeChannel, message);
  };

  const handleUserListClick = () => {
    const users = ["user1", "user2", "user3"];
    setUserList(users);
    setShowUserList(!showUserList);
  };

  return (
    <div className="h-screen flex flex-col bg-[rgb(78,83,90)]">
      {!isConnected ? (
        <ConnectionForm connect={connect} username={username} setUsername={setUsername} />
      ) : (
        <div className="flex flex-1">
          <Sidebar
            isConnected={isConnected}
            username={username}
            channels={channels}
            onJoinChannel={joinChannel}
            activeChannel={activeChannel}
            showChannels={showChannels}
            setShowChannels={setShowChannels}
          />
          <div className="flex flex-col flex-1">
            <div className="flex bg-[#313438]  text-white h-[60px] items-center p-0 shadow-lg">
              <h1 className="text-xl text-white font-bold ml-4">{activeChannel}</h1>
              <button
                className="bg-[#a6abb5] text-white w-8 h-8 rounded-full shadow-lg flex items-center justify-center ml-auto mr-4"
                onClick={handleUserListClick}
              >
                p
              </button>
               <input className='mr-6 rounded-md border-none bg-[rgb(78,83,90)]'  type='text' value='' placeholder='search' />
            </div>
            <div className="flex flex-1">
              <div className=" ml-0 mb-0 mt-0 mr-0 flex-1 ">
                <MessageList 
                  activeChannel={activeChannel}
                  sendMessage={sendMessage}
                  messages={messages}
                  handleUserListClick={handleUserListClick}
                />
              </div>
              {showUserList && (
                <div className="bg-[#363c43] text-white p-4 w-full lg:w-1/4 ">
                  <h2 className='ml-5 font-bold'>Users</h2>
                  <ul>
                    {userList.map((user, index) => (
                      <li key={index}>{user}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
