import { useEffect, useState } from 'react';
import { useAppSelector } from '../../hooks';
import type * as CSS from 'csstype';
import './ChatBox.scss'

import Message from './Message';
import testMesages from './TestMessages';

const ChatBox = () => {
    const settings = useAppSelector((state) => state.settings);

    const [messages, setMessages] = useState([]);

    useEffect(() => {
        setMessages((old) => [...old, testMesages[Math.floor(Math.random()*testMesages.length)]]);
        setMessages((old) => [...old, testMesages[Math.floor(Math.random()*testMesages.length)]]);
        setMessages((old) => [...old, testMesages[Math.floor(Math.random()*testMesages.length)]]);
        setMessages((old) => [...old, testMesages[Math.floor(Math.random()*testMesages.length)]]);
        setMessages((old) => [...old, testMesages[Math.floor(Math.random()*testMesages.length)]]);
        setMessages((old) => [...old, testMesages[Math.floor(Math.random()*testMesages.length)]]);
        // const interval = setInterval(() => {
        //     setMessages((old) => [...old, testMesages[Math.floor(Math.random()*testMesages.length)]]);
        // }, 3000);
        // return () => clearInterval(interval);
      }, []);

    const chatBoxStyle: CSS.Properties = {
        background: `rgba(${settings.backgroundColor.r}, ${settings.backgroundColor.g}, ${settings.backgroundColor.b}, ${settings.backgroundColor.a})`,
        color: `rgba(${settings.textColor.r}, ${settings.textColor.g}, ${settings.textColor.b}, ${settings.textColor.a})`,
        fontSize: `${settings.fontSize}px`,
        textShadow: `${settings.textShadowDisabled ? 'none' : '0 0 1px #000, 0 0 2px #000'}`,
        borderCollapse: 'separate',
    }

    return (
        <section className='chat-box' style={chatBoxStyle}>
            <div id='log'>
                {messages.map((m, idx) => <Message key={idx} name={m.name} color={m.color} message={m.message} badges={m.badges} />)}
            </div>
        </section>
    )
}

export default ChatBox;