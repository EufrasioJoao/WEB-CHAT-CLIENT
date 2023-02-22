import React from "react";

import { useLocation } from "react-router-dom";
import { ChatRoomHeader } from "./chatroom_header/Index";
import { MessagesContainer } from "./messages_container/Index";

export function ChatRoom() {
    const room = useLocation().state;
    return (
        <div>
            <ChatRoomHeader room={room} />
            <MessagesContainer />
        </div>
    );
}
