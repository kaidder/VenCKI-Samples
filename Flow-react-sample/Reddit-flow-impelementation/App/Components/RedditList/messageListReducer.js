// @flow

import type {MessageType} from './MessageList.actions.js';

export const MessageListReducer = (state: Array<MessageType>, action: {type: string, messages: Array<MessageType>}) => {
    switch(action.type){
        case "RESULT":
            return action.messages;
        default: 
            return state;
    }
}