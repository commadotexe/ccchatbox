import { useEffect, useState } from 'react';
import { useAppSelector } from '../../hooks';
import './ChatBox.scss'

import Message from './Message';
import testMesages from './TestMessages';

const ChatBox = () => {
    const settings = useAppSelector((state) => state.settings);

    const [messages, setMessages] = useState([]);

    useEffect(() => {
        const interval = setInterval(() => {
            setMessages((old) => [...old, testMesages[Math.floor(Math.random()*testMesages.length)]]);
        }, 1000);
        return () => clearInterval(interval);
      }, []);

    const chatBoxStyle = {
        background: settings.backgroundColor,
        color: settings.textColor,
        fontSize: `${settings.fontSize}px`,
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