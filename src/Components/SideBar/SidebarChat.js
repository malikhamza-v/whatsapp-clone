import React from "react";
import "./sidebarChat.css";
import { Avatar } from "@mui/material";

function SidebarChat() {
  return (
    <div className="sidebarChat">
      <Avatar src="https://i.ibb.co/5rVD398/229054929-887380338881917-2226949515131615391-n.jpg" />
      <div className="sidebarChat__info">
        <h2>Malik Hamza</h2>
        <p>Tell me how can I help you??</p>
      </div>
    </div>
  );
}

export default SidebarChat;
