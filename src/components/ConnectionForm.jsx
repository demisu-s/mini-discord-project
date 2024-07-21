export default function ConnectionForm({ username, setUsername, connect }) {
  return (
    <div>
      <div className="ml-96 mt-20 mb-4">
        <input
          type="text"
          value={username}
          onChange={e => setUsername(e.target.value)}
          placeholder="Enter your username"
          className="border p-2 rounded mr-2"
        />
        <button onClick={connect} className="bg-blue-500 text-white p-2 rounded">
          Connect
        </button>
      </div>
    </div>
  )
}
