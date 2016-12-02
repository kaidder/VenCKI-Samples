// @flow

import React from 'react';
import { connect } from 'react-redux';
import { GetMessageList } from './MessageList.actions.js';

type MessageListProps = {
    dispatch: () => {};
};

const MessageInput = (props: MessageListProps) => {
    let redditTopicValue;

    const fetchMessageList = () => {
        if (props.dispatch != null) {
            props.dispatch(GetMessageList(redditTopicValue));
        }
    }

    const onRedditTopicChange = (event) => {
        redditTopicValue = event.target.value;
    }

    return <form className="form-inline">
        <div className="form-group">
            <div className="input-group">
                <div className="input-group-addon"> Reddit Topic</div>
                <input className="form-control" onChange={onRedditTopicChange} id="redditTopic" type="text" />
            </div>
            <span>&nbsp;</span>
            <button onClick={fetchMessageList} type="button" className="btn btn-primary">Get Messages</button>

        </div>
    </form>;
};

export default connect()(MessageInput);