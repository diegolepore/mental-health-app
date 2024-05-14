import useGetAssistantAdvice from '../hooks/api/getAssistantAdvice';
import { JournalListItem } from './JournalListItem';

function JournalList({ journalMessages, setJournalMessages }) {
  const apiKey = import.meta.env.VITE_OPENAI_API_KEY;
  const { handleSendToChatGPT, isLoading, error } = useGetAssistantAdvice(apiKey);

  console.log('rendering JournalList');

  return (
    <div>
      {error && <div className="error-message">{error}</div>}
      {isLoading && <div className="loading-message">Loading...</div>}

      {journalMessages.map((message) => (
        <JournalListItem
          key={message.id}
          message={message}
          journalMessages={journalMessages}
          setJournalMessages={setJournalMessages}
          handleSendToChatGPT={() => handleSendToChatGPT(message, journalMessages, setJournalMessages)}
        />
      ))}

    </div>
  );
}

export default JournalList;
