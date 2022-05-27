import { useAppSelector } from '../../hooks';
import { rgba2string } from '../../helpers';
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
        marginRight: settings.nameSeparate ? 'auto' : '0',
        width: settings.nameSeparate ? 'fit-content' : '35%',
        position: settings.nameSeparate ? 'relative' : 'static',
        textAlign: settings.nameSeparate ? 'left' : 'right',
        top: `${settings.nameTop}px`,
        left: `${settings.nameLeft}px`,
        background: rgba2string(settings.nameBackgroundColor),
        borderWidth: `${settings.nameSeparate ? settings.nameBorderWidth + 'px' : settings.nameBorderWidth + 'px 0 ' + settings.nameBorderWidth + 'px ' + settings.nameBorderWidth + 'px'}`,
        borderStyle: settings.nameBorderStyle,
        borderColor: rgba2string(settings.nameBorderColor),
        borderRadius: `${settings.nameSeparate ? settings.nameBorderRadius + 'px' : settings.nameBorderRadius + 'px 0 0 ' + settings.nameBorderRadius + 'px'}`,
    }

    const messageStyle: CSS.Properties = {
        display: settings.nameSeparate ? 'inline-block' : 'table-cell',
        width: settings.nameSeparate ? 'auto' : '65%',
        background: settings.nameSeparate ? rgba2string(settings.messageBackgroundColor) : rgba2string(settings.nameBackgroundColor),
        borderWidth: `${settings.nameSeparate ? settings.messageBorderWidth + 'px' : settings.nameBorderWidth + 'px ' + settings.nameBorderWidth + 'px ' + settings.nameBorderWidth + 'px 0'}`,
        borderStyle: settings.nameSeparate ? settings.messageBorderStyle : settings.nameBorderStyle,
        borderColor: settings.nameSeparate ? rgba2string(settings.messageBorderColor) : rgba2string(settings.nameBorderColor),
        borderRadius: `${settings.nameSeparate ? settings.messageBorderRadius + 'px' : '0 ' + settings.nameBorderRadius + 'px ' + settings.nameBorderRadius + 'px 0'}`,
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