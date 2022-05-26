import { useAppSelector } from '../../hooks';
import type * as CSS from 'csstype';
import './Message.scss'

type MessageProps = {
    name: string,
    color: string,
    badges?: string[],
    message: string,
}

const Message = (props: MessageProps) => {
    const settings = useAppSelector((state) => state.settings);

    const wrapperStyle: CSS.Properties = {
        animation: `${settings.animationDisabled ? '' : 'fadeInRight .3s ease forwards'}, fadeOut 0.5s ease ${settings.messageHideDelay === 0 ? 999999999 : settings.messageHideDelay}s forwards`,
        WebkitAnimation: `${settings.animationDisabled ? '' : 'fadeInRight .3s ease forwards'}, fadeOut 0.5s ease ${settings.messageHideDelay === 0 ? 999999999 : settings.messageHideDelay}s forwards`,
        display: settings.nameSeparate ? 'block' : 'table-row',
    }

    const metaStyle: CSS.Properties = {
        color: props.color,
        display: settings.nameSeparate ? 'block' : 'table-cell',
        position: settings.nameSeparate ? 'relative' : 'static',
        textAlign: settings.nameSeparate ? 'left' : 'right',
        top: `${settings.nameTop}px`,
        left: `${settings.nameLeft}px`,
    }

    const messageStyle: CSS.Properties = {
        display: settings.nameSeparate ? 'block' : 'table-cell',
    }

    return (
        <div data-from={props.name} data-id='' style={wrapperStyle}>
            <span className='meta' style={metaStyle}>
                <span className='badges'>
                    {props.badges && props.badges.map((badge, index) =>
                        <img key={index} src={badge} className='badge subscriber-icon'></img>
                    )}
                </span>
                <span className='name'>{props.name}</span>
            </span>

            <span className='message' style={messageStyle}>
                {props.message}
            </span>
        </div>
    )
}

export default Message;