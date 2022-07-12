import React, { useEffect, useRef } from "react";
import "./chatboxBody.css";

function ChatboxBody({ messages }) {
  const messagesEndRef = useRef(null);
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ bottom: 0, behavior: "smooth" });
  }, [messages]);

  return (
    <div className="chatboxBody">
      {messages.map((message) => (
        <p
          className={`chatboxBody__message ${
            message.received && "message__receiver"
          }`}
        >
          <span className="chatboxBody__message__name">{message.name}</span>
          {message.message}
          <span className="chatboxBody__message__timestamp">
            {message.timestamp}
          </span>
        </p>
      ))}
      <div ref={messagesEndRef} />
    </div>
  );
}

export default ChatboxBody;
