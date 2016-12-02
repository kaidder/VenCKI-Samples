import React from 'react';
import MessageList from './MessageList.jsx';
import Titlebar from './titlebar.jsx';
import MessageInput from './MessageInput.jsx'


export const MessageListContainer = () => {
    return <div>
        <Titlebar></Titlebar>
        <MessageInput></MessageInput>
        <MessageList></MessageList>

    </div>;
};