import React from 'react';
// import axios from "axios";


const Replies = ({reply}) => {
    return (
        <div className="reply-box">
            <span className="replyfrom">{reply.from}</span>
            <span className="replytime">{reply.time}</span>
            <p>{reply.message}</p>
        </div>
    )
}

export default Replies