// import firebase from 'firebase/compat/app'
// import React, { useContext, useEffect, useRef, useState } from 'react'
// import { db } from "../Components/firebase"
// import { Othercontexts } from './Otherprovider'
// import { addDoc, collection } from 'firebase/firestore'

// const Message = () => {
//     const [open, setopen] = useState(false)
//     const [chat, setchat] = useState(false)
//     const [messages, setmessages] = useState([])
//     const [input, setInput] = useState('');
//     const [mail, setmail] = useState('');
//     const { users, auths, allusers } = useContext(Othercontexts)
//     const [user, setuser] = users
//     const [alluser, setalluser] = allusers
//     const [auth, setauth] = auths
//     const messagesEndRef = useRef(null);
//     useEffect(() => {
//         const unsub = db.collection("messages")
//             .orderBy("createdat")
//             .onSnapshot(snap => {
//                 // console.log(snap)
//                 setmessages(snap.docs.map(doc => ({ id: doc.id, ...doc.data() })))
//             })
//         messagesEndRef.current.scrollIntoView({ behavior: "smooth" })
//         return unsub
//     }, [open, input])
//     // console.log(user)
//     const sendmessage = async () => {
//         if (!input.trim()) return
//         const msg = {
//             text: input,
//             createdat: Date.now(),
//             receiver: "",
//             role: user.role,
//             sender: user.mail,
//             username: user.name
//         }
//         await addDoc(collection(db, "messages"), msg)
//         setInput("")
//     }
//     const sendreply = async () => {
//         if (!input.trim()) return
//         const msg = {
//             text: input,
//             createdat: Date.now(),
//             receiver: mail,
//             role: user.role,
//             sender: user.mail,
//             username: user.name
//         }
//         await addDoc(collection(db, "messages"), msg)
//         setInput("")
//     }
//     const handleChatOpen = () => {
//         if (!auth) {
//             alert("Please log in to access the chat!");
//             return;
//         }
//         setopen(true);
//     };
//     console.log(alluser)
//     return (
//         <>
//             <div className={`message`} onClick={handleChatOpen}>
//                 <i className="fa-solid fa-envelope"></i>
//             </div>

//             <div className={`chatbox ${open && user.role == "user" ? "opens" : ""}`}
//             >
//                 <div className='ch1'>
//                     <h1>Lets Chat.. !</h1>
//                 </div>
//                 <div className="chats">
//                     {messages.map((message, index) => (
//                         <p
//                             key={index}
//                             className={message.role === 'user' ? 'userc' : 'authorc'}
//                         >
//                             {message.text}
//                         </p>
//                     ))}
//                     <div ref={messagesEndRef}>
//                     </div>
//                 </div>
//                 <div className='sender'>
//                     <input type="text" placeholder="Type..." value={input} onChange={(e) => setInput(e.target.value)} />
//                     <button onClick={sendmessage}><i className="fa-solid fa-paper-plane"></i></button>
//                 </div>
//                 <div className='minus' onClick={() => setopen(false)}>
//                     <i className="fa-solid fa-minus"></i>
//                 </div>
//             </div>
//             <div className='viewmsg'>
//                 <div className='userchat'>
//                     <div className='minus'><i className="fa-solid fa-minus"></i></div>
//                     <table>
//                         <thead>
//                             <tr>
//                                 <td>No.</td>
//                                 <td>Name</td>
//                                 <td>Email</td>
//                                 <td>Chat</td>
//                             </tr>
//                         </thead>
//                         <tbody>
//                             {alluser.map((val, i) => (
//                                 <tr key={i}><td>{i + 1}</td><td>{val.name}</td><td>{val.mail}</td><td><button onClick={()=>{
//                                     setmail(val.mail)
//                                     setchat(true)
                                    
//                                 }}>Chat</button></td></tr>
//                             ))}
//                         </tbody>
//                     </table>
//                 </div>
//                 <div className={`chatbox ${chat && user.role == "auth" ? "opens" : ""}`}
//             >
//                 <div className='ch1'>
//                     <h1>Lets Chat.. !</h1>
//                 </div>
//                 <div className="chats">
//                     {messages.map((message, index) => (
//                         <p
//                             key={index}
//                             className={message.role === 'auth' ? 'userc' : 'authorc'}
//                         >
//                             {message.mail==mail&&message.text}
//                         </p>
//                     ))}
//                     <div ref={messagesEndRef}>
//                     </div>
//                 </div>
//                 <div className='sender'>
//                     <input type="text" placeholder="Type..." value={input} onChange={(e) => setInput(e.target.value)} />
//                     <button onClick={sendreply}><i className="fa-solid fa-paper-plane"></i></button>
//                 </div>
//                 <div className='minus' onClick={() => setchat(false)}>
//                     <i className="fa-solid fa-minus"></i>
//                 </div>
//             </div>
//             </div>
//         </>
//     )
// }

// export default Message


import firebase from 'firebase/compat/app';
import React, { useContext, useEffect, useRef, useState } from 'react';
import { db } from "../Components/firebase";
import { Othercontexts } from './Otherprovider';
import { addDoc, collection } from 'firebase/firestore';

const Message = () => {
    const [open, setOpen] = useState(false);
    const [chat, setChat] = useState(false);
    const [use, setuse] = useState(false);
    const [messages, setMessages] = useState([]);
    const [input, setInput] = useState('');
    const [mail, setMail] = useState('');
    const { users, auths, allusers } = useContext(Othercontexts);
    const [user] = users;
    const [alluser, setAllUser] = allusers;
    const [auth] = auths;
    const messagesEndRef = useRef(null);

    useEffect(() => {
        const unsub = db.collection("messages")
            .orderBy("createdat")
            .onSnapshot(snap => {
                setMessages(snap.docs.map(doc => ({ id: doc.id, ...doc.data() })));
                messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
            });
        return () => unsub();
    }, [open]);

    const sendMessage = async () => {
        if (!input.trim()) return;

        const msg = {
            text: input,
            createdat: Date.now(),
            receiver: mail,
            role: user.role,
            sender: user.mail,
            username: user.name
        };

        await addDoc(collection(db, "messages"), msg);
        setInput("");
    };

    const handleChatOpen = () => {
        if (!auth) {
            alert("Please log in to access the chat!");
            return;
        }
        setOpen(true);
        setuse(true)
    };

    const handleUserChatOpen = (userMail) => {
        setMail(userMail);
        setChat(true);
    };

    return (
        <>
            <div className={`message`} onClick={handleChatOpen}>
                <i className="fa-solid fa-envelope"></i>
            </div>

            {/* User Chat Box */}
            <div className={`chatbox ${open && user.role === "user" ? "opens" : ""}`}>
                <div className='ch1'>
                    <h1>Lets Chat.. !</h1>
                </div>
                <div className="chats">
                    {messages
                    .filter(val=>val.receiver==user.mail||user.mail==val.sender)
                    .map((message, index) => (
                        <p key={index} className={message.role === 'user' ? 'userc' : 'authorc'}>
                            {message.text}
                        </p>
                    ))}
                    <div ref={messagesEndRef}></div>
                </div>
                <div className='sender'>
                    <input 
                        type="text" 
                        placeholder="Type..." 
                        value={input} 
                        onChange={(e) => setInput(e.target.value)} 
                    />
                    <button onClick={sendMessage}><i className="fa-solid fa-paper-plane"></i></button>
                </div>
                <div className='minus' onClick={() => setOpen(false)}>
                    <i className="fa-solid fa-minus"></i>
                </div>
            </div>

            {/* User List for Auth Users */}
            <div className='viewmsg' style={{display:use&&user.role=="auth"?"flex":"none"}}>
                <div className='userchat'>
                    <div className='minus' onClick={() => setuse(false)}>
                        <i className="fa-solid fa-minus"></i>
                    </div>
                    <table>
                        <thead>
                            <tr>
                                <td>No.</td>
                                <td>Name</td>
                                <td>Email</td>
                                <td>Chat</td>
                            </tr>
                        </thead>
                        <tbody>
                            {alluser
                            .filter(val=>val.mail!==user.mail)
                            .map((val, i) => (
                                <tr key={i}>
                                    <td>{i + 1}</td>
                                    <td>{val.name}</td>
                                    <td>{val.mail}</td>
                                    <td>
                                        <button onClick={() => handleUserChatOpen(val.mail)}>Chat</button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                {/* Author Chat Box */}
                <div className={`chatbox ${chat && user.role === "auth" ? "opens" : ""}`}>
                    <div className='ch1'>
                        <h1>Lets Chat.. !</h1>
                    </div>
                    <div className="chats">
                        {messages
                            .filter(message => message.receiver === mail||message.sender===mail)
                            .map((message, index) => (
                                <p key={index} className={message.role === 'auth' ? 'userc' : 'authorc'}>
                                    {message.text}
                                </p>
                            ))}
                        <div ref={messagesEndRef}></div>
                    </div>
                    <div className='sender'>
                        <input 
                            type="text" 
                            placeholder="Type..." 
                            value={input} 
                            onChange={(e) => setInput(e.target.value)} 
                        />
                        <button onClick={sendMessage}><i className="fa-solid fa-paper-plane"></i></button>
                    </div>
                    <div className='minus' onClick={() => setChat(false)}>
                        <i className="fa-solid fa-minus"></i>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Message;
