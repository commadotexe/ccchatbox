import { useState, useEffect } from 'react';
import { useAppSelector } from '../../hooks';
import { rgba2css } from '../../utils/helpers';
import { Client } from 'tmi.js';
import { getUserByLogin, getChannelBadges, getGlobalBadges } from '../../utils/twitchHelpers';
import type * as CSS from 'csstype';
import './ChatBox.scss'
import './StandaloneChatbox.scss'

import Message from './Message';
import testMesages from './TestMessages';

const emoteParser = require("tmi-emote-parse");

export const StandaloneChatBox = () => {
    const settings = useAppSelector((state) => state.settings);
    const [messages, setMessages] = useState([]);
    const [user, setUser] = useState(null);
    const [badges, setBadges] = useState(null as any);

    useEffect(() => {
        if (settings.twitchUsername) {
            (async () => {
                const user = await getUserByLogin(settings.twitchUsername);
                const globalBadges = await getGlobalBadges();
                const channelBadges = await getChannelBadges(user.id);
                const args = { 'bttv': {channel: true, global: true}, 'ffz': {channel: true, global: true}, '7tv': {channel: true, global: true} };
                await emoteParser.loadAssets(settings.twitchUsername, user.id, args);

                setUser(user);
                setBadges({...globalBadges, ...channelBadges});
            })();
        }
    }, [settings.twitchUsername]);

    useEffect(() => {
        if (badges) {
            const client = new Client({
                channels: [ settings.twitchUsername ]
            });

            client.connect().catch(console.error);
            client.on('message', (channel, tags, message, self) => {
                let parsedMessage = emoteParser.replaceEmotes(message, tags, channel, self);
                if (settings.hideEmotes) {
                    parsedMessage = parsedMessage.replace(/<img[^>"']*((("[^"]*")|('[^']*'))[^"'>]*)*>/g,'');
                }
                let messageBadges = [] as String[];
                if (tags.badges) {
                    for (let badge in tags.badges) {
                        messageBadges.push(badges[badge].versions[tags.badges[badge]].image_url_1x);
                    }
                }
                setMessages((old) => [...old, {name: tags['display-name'], color: tags['color'], message: parsedMessage, badges: messageBadges}]);
            });
        }
    }, [badges])

    const chatBoxStyle: CSS.Properties = {
        color: rgba2css(settings.textColor),
        fontSize: `${settings.fontSize}px`,
        textShadow: settings.textShadowDisabled ? 'none' : '0 0 1px #000, 0 0 2px #000',
    }

    return (
        <section className='chat-box chat-box--standalone' style={chatBoxStyle}>
            <div id='log' className='log--standalone'>
                {messages.map((m, idx) => <Message key={idx} name={m.name} color={m.color} message={m.message} badges={m.badges} />)}
            </div>
        </section>
    )
}