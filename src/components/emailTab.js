import React from 'react';
// import axios from "axios";


const EmailDiv = ({mail, selectmail}) => {
    // console.log(mail)
    return (
        <div className="emailTab" onClick={ () => { selectmail(mail.replies)}}>
            <h4>{mail.from}</h4>
            <p className="emailSub">{mail.subject}</p>
            <p className="emailMessage">{mail.message}</p>
        </div>
    )
  }


export default EmailDiv