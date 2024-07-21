import ChannelList from './ChannelList';

export default function Sidebar({ channels, onJoinChannel, setShowChannels, showChannels, activeChannel, username, isConnected }) {
  const ch = "Channel";
  return (
    <div className="w-full lg:w-96 h-auto lg:h-screen bg-white rounded-lg shadow-lg flex-shrink-0">
      <div className="flex h-full flex-col lg:flex-row">
        <div className="bg-[#1d1f21] w-full lg:w-[80px] flex-shrink-0 flex flex-row lg:flex-col items-center p-0">
          <div className='mt-4'>
            <button
              className="relative top-4 bg-[#2a2e36] text-white w-14 h-14 rounded-full shadow-lg flex items-center justify-center"
              onClick={() => setShowChannels()}
            >
              ms
            </button>
            <button
              className="relative top-8 bg-[#2a2e36] text-white w-14 h-14 rounded-full shadow-lg flex items-center justify-center"
              onClick={() => setShowChannels(true)}
            >
              ch
            </button>
            <button
              className="relative top-12 bg-[#2a2e36] text-white w-14 h-14 rounded-full shadow-lg flex items-center justify-center"
              onClick={() => setShowChannels()}
            >
              +
            </button>
          </div>
        </div>
        <div className="flex flex-col bg-[#2a2e36] w-full p-0 text-white">
          <div className="bg-[#1f262f] justify-items-center i h-[60px] shadow-lg ml-0 flex items-center">
            <h2 className="text-xl ml-6 mt-3 font-semibold">{ch}</h2>
          </div>
          <div className="flex-1 overflow-y-auto">
            {showChannels && (
              <ul className="list-none p-4 space-y-4 text-white">
                {channels.slice(0, 5).map(channel => (
                  <ChannelList key={channel.id} channel={channel} onJoinChannel={onJoinChannel} />
                ))}
              </ul>
            )}
          </div>
          <div className="flex h-[60px] items-center bg-[#1f262f]">
            <div
              className="w-3 h-3 ml-4 rounded-full mr-2"
              style={{ backgroundColor: isConnected ? 'green' : 'red' }}
            ></div>
            <span>
              {username} <h4>online</h4>
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}