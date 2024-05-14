import { memo, useState } from 'react';

function MessageInput({ addMessage }) {
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (message.trim()) {
      addMessage(message);
      setMessage('');
    }
  };

  console.log('rendering MessageInput');

  return (
    <form onSubmit={handleSubmit} className="mb-4">
      <textarea
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        className="w-full p-2 border border-gray-300 rounded"
        placeholder="Write your message here..."
      ></textarea>
      <button type="submit" className="mt-2 p-2 bg-blue-500 text-white rounded">
        Add Message
      </button>
    </form>
  );
}

const MemoizedMessageInput = memo(MessageInput);
export default MemoizedMessageInput;
