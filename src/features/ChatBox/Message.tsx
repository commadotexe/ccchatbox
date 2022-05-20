import { useAppSelector } from '../../hooks';
import './Message.scss'

type MessageProps = {
    name: string,
    color: string,
    badges?: string[],
    message: string,
}

const Message = (props: MessageProps) => {
    const settings = useAppSelector((state) => state.settings);

    const messageStyle = {
        animation: `fadeInRight .3s ease forwards, fadeOut 0.5s ease ${settings.messageHideDelay === 0 ? 999999999 : settings.messageHideDelay}s forwards`,
        WebkitAnimation: `fadeInRight .3s ease forwards, fadeOut 0.5s ease ${settings.messageHideDelay === 0 ? 999999999 : settings.messageHideDelay}s forwards`,
    }

    return (
        <div data-from={props.name} data-id='' style={messageStyle}>
            <span className='meta' style={{color: props.color}}>
                <span className='badges'>
                    {props.badges && props.badges.map((badge, index) =>
                        <img key={index} src={badge} className='badge subscriber-icon'></img>
                    )}
                </span>
                <span className='name'>{props.name}</span>
            </span>

            <span className='message'>
                {props.message}
            </span>
        </div>
    )
}

export default Message;