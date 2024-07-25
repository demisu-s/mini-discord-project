
import MessageForm from './MessageForm';

export default function MessageList({ messages, isConnected,userList, activeChannel, sendMessage }) {
  
  function handleCLick(){
 console.log("userClicked")
  }

  return (
    <div className="h-[540px] flex flex-col bg-[rgb(78,83,90)] text-white overflow-hidden">
      <div className="flex-1 overflow-y-auto p-0">
        <ul className="list-none p-4 space-y-2">
          {messages.map((msg, index) => (
            <li key={index} >
              <div className="flex items-center mb-1">
               
                <div>
               <button
              className="bg-[#493718] mr-2 text-white w-10 h-10 rounded-full shadow-lg flex items-center justify-center"
              onClick={() => (handleCLick())}
            >
              
               <div
                  className="mt-8 ml-3 w-2 h-2 rounded-full mr-2"
                  style={{ backgroundColor:isConnected ? 'green' : 'red' }}
                ></div> 
            </button>
            </div>
                <strong className="font-bold  text-white mr-2"><span onClick={handleCLick()} className='cursor-pointer underline'>{msg.username} </span></strong>   {msg.message.timestamp} 
              </div>
              <div className="text-sm text-white ml-[58px]">{msg.message.message}</div>
            </li>
          ))}
        </ul>
      </div>
      {activeChannel && (
        <div className="p-4">
          <MessageForm sendMessage={sendMessage} />
        </div>
      )}
    </div>
  );
}
