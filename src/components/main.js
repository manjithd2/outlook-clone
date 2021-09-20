import React , {useEffect,useState} from 'react';
import axios from "axios";
import Header from './header';
import Nav from './Nav';
import MailArea from './MailArea';
import MailList from './MailList';
import Calendar from './Calendar';
import  './mail.css'

const Main = () => {

    const [emails, setEmail] = useState({});
    const [activeMail, setActiveMail] = useState({})

    const getData = () => {
        axios.get("./api/emails.json")
        .then((res) => {
            setEmail(res.data.data)
            console.log(res.data.data)
        })
        .catch(err=>console.log(err))

    }
    useEffect(() => {
        getData()
      },[]);

    
    const selectmail = (semail) => {
        setActiveMail(semail)
        // console.log("ssss",semail)
    }

    return (
        <div className="root-wrapper">
            <section className="root-header">
                <Header />
            </section>
            <section className="root-folders">
                <Nav />
            </section>
            <section className="root-maillist">
                <MailList emails={emails} selectmail={selectmail} />
            </section>
            <section className="root-mailbody">
                <MailArea mailtoshow={activeMail} />
            </section>
            <section className="root-calendar">
                <Calendar />
            </section>
        </div>
    )
}

export default Main