import { useState } from "react";
import askChatGPT from "../../hooks/api/getAssistantAdvice";

const Journal = () => {
  const [inputText, setInputText] = useState("");
  const [entries, setEntries] = useState([
    { id: 1, content: "Feeling stressed", chatgptResponse: null }, 
    { id: 2, content: "Ate too much cake", chatgptResponse: null }, 
  ]);

  const handleInputChange = (event) => {
    setInputText(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const inputBody =  { id: entries.length + 1, content: inputText, chatgptResponse: null }
    setEntries(prevEntries => [...prevEntries, inputBody]);
    setInputText("");
    console.log(inputBody)
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={inputText}
          onChange={handleInputChange}
          placeholder="Enter text"
        />
        <button type="submit">Send</button>
      </form>

      <br />

      {entries.length > 0 && (
        <ul>
        {entries.map((entry, index) => (
          <Entry key={index} entry={entry} setEntries={setEntries} />
        ))}
          </ul>
        )}
        
      </div>
    );
  };

const Entry = ({entry, setEntries}) => {
  const handleAskChatGPT = (entryId) => {
    askChatGPT(entry.content, (response) => {
      setEntries((prevEntries) => {
        return prevEntries.map((e) => {
          if (e.id === entryId) {
            return { ...e, chatgptResponse: response };
          }
          return e;
        });
      });
    });
  };
  return (
    <li>
      <div>
        {entry.content}
      </div>
      <button onClick={() => handleAskChatGPT(entry.id)}>Ask ChatGPT</button>
      {entry.chatgptResponse !== null && <p>{entry.chatgptResponse}</p>}
    </li>
  );
};

export default Journal;
