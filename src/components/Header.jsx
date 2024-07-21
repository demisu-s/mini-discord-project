import MessageList from "./MessageList";
import Sidebar from "./Sidebar";
import MessageForm from "./MessageForm";

export default function Header({isConnected,username}){

    return (
        <header className="bg-blue-500 text-white p-4 w-full text-center">
          <h1 className="text-3xl font-bold">Mini Discord Clone</h1>
          <p className="text-lg">{username} {isConnected ? "online" : 'offline'}</p>
        </header>
      )
}