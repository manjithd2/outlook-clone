import React , {useEffect,useState} from 'react';
import axios from "axios";
import EmailDiv from './emailTab';

const MailList = ({ emails , selectmail }) => {
     
      return (
        <div className="emailList">
           {/* { emails && <EmailDiv mail={emails} />} */}
            { 
                emails.length > 0 ? emails.map((email, index) => {
                    return <EmailDiv key={index} mail={email} selectmail={selectmail} />
                }) : ""
            }
        </div>
    )
}

export default MailList