import React, { useState } from 'react';
import axios from 'axios';
import { AiOutlineMessage, AiOutlineClose } from 'react-icons/ai';

const Chatbot: React.FC = () => {
  const [message, setMessage] = useState('');
  const [replyList, setReplyList] = useState<{ type: 'user' | 'bot'; text: string }[]>([]);
  const [loading, setLoading] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const sendMessage = async () => {
    if (!message.trim()) return;
    setLoading(true);

    const userMessage = message;
    setReplyList(prev => [...prev, { type: 'user', text: userMessage }]);
    setMessage('');

    try {
      const res = await axios.post('/api/chat', { message: userMessage });
      const botReply = res.data.reply || 'Cevap alınamadı.';
      setReplyList(prev => [...prev, { type: 'bot', text: botReply }]);
    } catch (error: any) {
      const errMsg = error.response?.data?.error || 'Sunucuya bağlanırken hata oluştu.';
      setReplyList(prev => [...prev, { type: 'bot', text: errMsg }]);
    } finally {
      setLoading(false);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  return (
    <>
      <div style={{
        position: 'fixed',
        bottom: 20,
        right: 20,
        zIndex: 9999
      }}>
        <button
          onClick={() => setIsOpen(prev => !prev)}
          style={{
            backgroundColor: '#3276ff',
            color: '#fff',
            border: 'none',
            borderRadius: '50%',
            width: 60,
            height: 60,
            fontSize: 24,
            boxShadow: '0 4px 12px rgba(0,0,0,0.2)',
            cursor: 'pointer',
          }}
          aria-label="Chatbot Aç/Kapa"
        >
          {isOpen ? <AiOutlineClose /> : <AiOutlineMessage />}
        </button>
      </div>

      {isOpen && (
        <div style={{
          position: 'fixed',
          bottom: 90,
          right: 20,
          width: 360,
          maxHeight: '70vh',
          backgroundColor: '#fff',
          borderRadius: 12,
          boxShadow: '0 8px 30px rgba(0,0,0,0.2)',
          display: 'flex',
          flexDirection: 'column',
          zIndex: 9998,
          overflow: 'hidden',
          fontFamily: 'Inter, sans-serif'
        }}>
          <div style={{ padding: 12, borderBottom: '1px solid #eee', fontWeight: 600 }}>
            👋 Furkan AI BOT
          </div>

          <div style={{
            flex: 1,
            overflowY: 'auto',
            padding: 12,
            backgroundColor: '#f9f9f9',
          }}>
            {replyList.map((item, index) => (
              <div
                key={index}
                style={{
                  marginBottom: 10,
                  textAlign: item.type === 'user' ? 'right' : 'left'
                }}
              >
                <span style={{
                  display: 'inline-block',
                  background: item.type === 'user' ? '#3276ff' : '#eee',
                  color: item.type === 'user' ? '#fff' : '#000',
                  padding: '8px 12px',
                  borderRadius: 16,
                  maxWidth: '80%',
                  wordBreak: 'break-word'
                }}>
                  {item.text}
                </span>
              </div>
            ))}
          </div>

          <div style={{
            borderTop: '1px solid #eee',
            padding: 12,
            backgroundColor: '#fff'
          }}>
            <textarea
              rows={2}
              value={message}
              onChange={e => setMessage(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="GPT ile konuş"
              style={{
                width: '100%',
                resize: 'none',
                borderRadius: 8,
                border: '1px solid #ccc',
                padding: 8,
                fontSize: 14,
                boxSizing: 'border-box'
              }}
            />
            <button
              onClick={sendMessage}
              disabled={loading}
              style={{
                marginTop: 8,
                width: '100%',
                padding: 10,
                backgroundColor: loading ? '#90caf9' : '#3276ff',
                color: '#fff',
                border: 'none',
                borderRadius: 6,
                cursor: loading ? 'not-allowed' : 'pointer',
                fontWeight: 600
              }}
            >
              {loading ? 'Gönderiliyor...' : 'Gönder'}
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Chatbot;
