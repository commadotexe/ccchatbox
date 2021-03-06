import { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { rgba2css } from '../../utils/helpers';
import generateOutput from './generateOutput';
import type * as CSS from 'csstype';
import './ChatBox.scss'

import Message from './Message';
import testMesages from './TestMessages';

export const PreviewChatBox = () => {
    const settings = useAppSelector((state) => state.settings);
    const output = useAppSelector((state) => state.output);
    const dispatch = useAppDispatch();
    const [messages, setMessages] = useState([]);

    useEffect(() => {
        const interval = setInterval(() => {
            setMessages((old) => [...old, testMesages[Math.floor(Math.random()*testMesages.length)]]);
        }, 3000);
        return () => clearInterval(interval);
      }, []);

    useEffect(() => {
        if (output.outputTrigger) {
            setMessages((old) => [...old, {name: 'comma', color: '#787878', message: generateOutput(output.format, settings)}]);
            dispatch({type: `output/outputTrigger`, payload: false});
        }
    }, [output.outputTrigger]);

    useEffect(() => {
        if (output.copiedTrigger) {
            setMessages((old) => [...old, {name: 'comma', color: '#787878', message: 'Copied!'}]);
            dispatch({type: `output/copiedTrigger`, payload: false});
        }
    }, [output.copiedTrigger]);

    const chatBoxStyle: CSS.Properties = {
        background: rgba2css(settings.backgroundColor),
        color: rgba2css(settings.textColor),
        fontSize: `${settings.fontSize}px`,
        textShadow: settings.textShadowDisabled ? 'none' : '0 0 1px #000, 0 0 2px #000',
    }

    return (
        <section className='chat-box' style={chatBoxStyle}>
            <div id='log'>
                {messages.map((m, idx) => <Message key={idx} name={m.name} color={m.color} message={m.message} badges={m.badges} />)}
            </div>
        </section>
    )
}