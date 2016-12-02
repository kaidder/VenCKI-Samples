// @flow
import fetch from 'isomorphic-fetch';

export type MessageType = {
    MessageTitle: string;
    Author: string;
}

export const GetMessageList = (searchStr: string) => {
    return (dispatch: Function) => {
        console.info(`querying for ${searchStr}`);
        let messages: Array<MessageType> = [];

        return fetch(`https://www.reddit.com/r/${searchStr}.json`)
            .then((response) => response.json())
            .then((result) => {

                result.data.children.map(item => {
                    messages.push({
                        MessageTitle: item.data.title,
                        Author: item.data.author
                    });
                });
                console.info(`number of records for the given query ${messages.length}`);
                dispatch({
                    type: 'RESULT',
                    messages
                });
            });
    };
};