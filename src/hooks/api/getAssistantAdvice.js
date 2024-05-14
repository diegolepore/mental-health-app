import { useState } from 'react';

const useGetAssistantAdvice = (apiKey) => {
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleSendToChatGPT = async (message, msgs, setMsgs) => {
    setIsLoading(true);
    const prompt = [
      {
        role: "system",
        content: `${message.content}. Provide a helpful message and activities to cope with this situation. Always recommend consulting a professional.`,
      },
    ];

    try {
      const response = await fetch('https://api.openai.com/v1/chat/completions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${apiKey}`,
        },
        body: JSON.stringify({
          model: 'gpt-3.5-turbo',
          messages: prompt,
          max_tokens: 150,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        const updatedMessages = msgs.map((msg) =>
          msg.id === message.id ? { ...msg, response: data.choices[0].message.content } : msg
        );
        setMsgs(updatedMessages);
        setError(null);
      } else {
        setError(data.error.message);
      }
    } catch (error) {
      console.error('Error sending message to ChatGPT:', error);
      setError('An error occurred while communicating with ChatGPT.');
    } finally {
      setIsLoading(false);
    }
  };

  return { handleSendToChatGPT, isLoading, error };
};

export default useGetAssistantAdvice;
