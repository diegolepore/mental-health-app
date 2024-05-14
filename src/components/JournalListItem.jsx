export const JournalListItem = ({ message, handleSendToChatGPT }) => {
  return (
    <div key={message.id} className="border p-2 mb-2 rounded">
      <p>{message.content}</p>
      <small>{new Date(message.date).toLocaleString()}</small>
      {message.response ? (
        <div className="mt-2 p-2 bg-gray-100 rounded">
          <p>{message.response}</p>
        </div>
      ) : (
        <button
          onClick={handleSendToChatGPT}
          className="mt-2 p-2 bg-green-500 text-white rounded"
        >
          Send to ChatGPT
        </button>
      )}
    </div>
  );
}
