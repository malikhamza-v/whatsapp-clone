import React, { useEffect, useState } from "react";
import "./chatbox.css";
import ChatboxHeader from "./ChatboxHeader";
import ChatboxBody from "./ChatboxBody";
import InsertEmoticonIcon from "@mui/icons-material/InsertEmoticon";
import SendIcon from "@mui/icons-material/Send";
import MicNoneIcon from "@mui/icons-material/MicNone";
import axios from "../../Module/axios.js";
import { useStateValue } from "../../Module/StateContext";

function Chatbox({ messages, received }) {
  const [input, setInput] = useState("");
  console.log(received);

  const [{ user }, dispatch] = useStateValue();

  const today = new Date();
  const time = today.getHours() + ":" + today.getMinutes();

  const sendMessage = async (e) => {
    e.preventDefault();

    await axios.post("/messages/new", {
      message: input,
      name: user?.email.replace("@gmail.com", ""),
      timestamp: time,
      received: received,
    });
    setInput("");
  };
  return (
    <div className="chatbox">
      <ChatboxHeader />
      <ChatboxBody messages={messages} />
      <div className="chatbox__footer">
        <InsertEmoticonIcon />
        <form>
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            type="text"
            placeholder="Type a message"
          />
          <button type="submit" onClick={sendMessage}>
            <SendIcon />
          </button>
          <MicNoneIcon />
        </form>
      </div>
    </div>
  );
}

export default Chatbox;
