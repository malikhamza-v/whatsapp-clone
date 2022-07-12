import React from "react";
import "./chatboxHeader.css";
import SearchIcon from "@mui/icons-material/Search";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import AttachFileIcon from "@mui/icons-material/AttachFile";
import { Avatar, IconButton } from "@mui/material";

function ChatboxHeader() {
  return (
    <div className="chatboxHeader">
      <Avatar src="https://i.ibb.co/5rVD398/229054929-887380338881917-2226949515131615391-n.jpg" />
      <div className="chatboxHeader__info">
        <h3>Malik Hamza</h3>
        <p>Last seen 15 minutes ago</p>
      </div>
      <div className="chatboxHeader__icons">
        <IconButton>
          <SearchIcon />
        </IconButton>
        <IconButton>
          <AttachFileIcon />
        </IconButton>
        <IconButton>
          <MoreVertIcon />
        </IconButton>
      </div>
    </div>
  );
}

export default ChatboxHeader;
