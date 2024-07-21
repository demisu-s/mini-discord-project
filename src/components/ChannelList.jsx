export default function ChannelList({ channel, onJoinChannel }) {
  return (
    <li key={channel.name} className="mb-2">
      <button
        onClick={() => onJoinChannel(channel.name)}
        className="p-2 rounded w-full text-left bg-[#42464b] hover:bg-[#4a4e53]"
      >
        #{channel.name}
      </button>
    </li>
  );
}
