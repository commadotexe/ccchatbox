import { useAppSelector } from '../../hooks';
import { rgba2css } from '../../utils/helpers';
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
        flexDirection: settings.metaSeparate ? 'column' : 'row',
        animation: `${settings.animationDisabled ? '' : 'fadeInRight .3s ease forwards, '}fadeOut 0.5s ease ${settings.alwaysShowMessage ? 999999999 : settings.messageHideDelay}s forwards`,
        WebkitAnimation: `${settings.animationDisabled ? '' : 'fadeInRight .3s ease forwards, '}fadeOut 0.5s ease ${settings.alwaysShowMessage ? 999999999 : settings.messageHideDelay}s forwards`,
        background: settings.metaSeparate ? 'none' : rgba2css(settings.messageBackgroundColor),
        borderStyle: settings.metaSeparate ? 'none' : settings.messageBorderStyle,
        borderColor: rgba2css(settings.messageBorderColor),
        borderWidth: `  ${settings.messageBorderWidth * (settings.messageBorderTop ? 1 : 0)}px 
                        ${settings.messageBorderWidth * (settings.messageBorderRight ? 1 : 0)}px 
                        ${settings.messageBorderWidth * (settings.messageBorderBottom ? 1 : 0)}px 
                        ${settings.messageBorderWidth * (settings.messageBorderLeft ? 1 : 0)}px`,
        borderRadius: `${settings.messageBorderRadius}px`,
        padding: `${settings.metaSeparate ? 0 : settings.messagePadding}px`,
        margin: `${settings.metaSeparate ? 0 : settings.messageMargin}px`,
    }

    const metaStyle: CSS.Properties = {
        color: props.color,
        width: settings.metaSeparate ? 'fit-content' : '35%',
        position: settings.metaSeparate ? 'relative' : 'static',
        textAlign: settings.metaSeparate ? 'left' : 'right',
        top: `${settings.metaTop}px`,
        left: `${settings.metaLeft}px`,
        background: settings.metaSeparate ? rgba2css(settings.metaBackgroundColor) : 'none',
        borderStyle: settings.metaSeparate ? settings.metaBorderStyle : 'none',
        borderColor: rgba2css(settings.metaBorderColor),
        borderWidth: `  ${settings.metaBorderWidth * (settings.metaBorderTop ? 1 : 0)}px 
                        ${settings.metaBorderWidth * (settings.metaBorderRight ? 1 : 0)}px 
                        ${settings.metaBorderWidth * (settings.metaBorderBottom ? 1 : 0)}px 
                        ${settings.metaBorderWidth * (settings.metaBorderLeft ? 1 : 0)}px`,
        borderRadius: `${settings.metaBorderRadius}px`,
        padding: `${settings.metaSeparate ? settings.metaPadding + 'px' : '0 0.5em 0.1em 0.5em'}`,
        margin: `${settings.metaSeparate ? settings.metaMargin : 0}px`,
    }

    const messageStyle: CSS.Properties = {
        width: settings.metaSeparate ? 'fit-content' : '65%',
        background: settings.metaSeparate ? rgba2css(settings.messageBackgroundColor) : 'none',
        borderStyle: settings.metaSeparate ? settings.messageBorderStyle : 'none',
        borderColor: rgba2css(settings.messageBorderColor),
        borderWidth: `  ${settings.messageBorderWidth * (settings.messageBorderTop ? 1 : 0)}px 
                        ${settings.messageBorderWidth * (settings.messageBorderRight ? 1 : 0)}px 
                        ${settings.messageBorderWidth * (settings.messageBorderBottom ? 1 : 0)}px 
                        ${settings.messageBorderWidth * (settings.messageBorderLeft ? 1 : 0)}px`,
        borderRadius: `${settings.messageBorderRadius}px`,
        padding: `${settings.metaSeparate ? settings.messagePadding + 'px' : '0 0 0.1em 0'}`,
        margin: `${settings.metaSeparate ? settings.messageMargin : 0}px`,
    }

    const badgeStyle: CSS.Properties = {
        display: settings.hideBadges ? 'none' : 'inline-block',
    }

    return (
        <div data-from={props.name} data-id='' style={wrapperStyle}>
            <span className='meta' style={metaStyle}>
                <span className='badges'>
                    {props.badges && props.badges.map((badge, index) =>
                        <img key={index} src={badge} className='badge subscriber-icon' style={badgeStyle}></img>
                    )}
                </span>
                <span className='name'>{props.name}</span>
            </span>

            <span className='message' style={messageStyle} dangerouslySetInnerHTML={{__html: props.message}}></span>
        </div>
    )
}

export default Message;