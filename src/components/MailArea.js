import React from 'react';
import Replies from './replies';

const MailArea = ({ mailtoshow }) => {

    return (
        <div className="mailArea">
        { mailtoshow.length > 0 ? mailtoshow.map( (reply,index) => {
            return <Replies key={index} reply={reply} />
        } ) : "" }
        </div>
    )
}

export default MailArea