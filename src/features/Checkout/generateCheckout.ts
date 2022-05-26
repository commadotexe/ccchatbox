import { useAppSelector } from '../../hooks';
import { rgb2hex } from '../../helpers';

const generateCheckout = (format: string) => {
    return (format == "css" ? generateCss() : generateLink());
}

const generateCss = () => {
    const settings = useAppSelector((state) => state.settings);

    return (
        `
            @import url(https://fonts.googleapis.com/css?family=Roboto:700);

            * {
                box-sizing: border-box;
            }
            
            html, body {
                height: 100%;
                overflow: hidden;
            }
            
            body {
                text-shadow: 0 0 1px #000, 0 0 2px #000;
                background: #${rgb2hex(settings.backgroundColor)};
                font-family: 'Roboto';
                font-weight: 700;
                font-size: ${settings.fontSize};
                line-height: 1.5em;
                color: #${rgb2hex(settings.textColor)};
            }
            
            #log>div {
                animation: ${settings.animationDisabled ? '' : 'fadeInRight .3s ease forwards,'} fadeOut 0.5s ease ${settings.messageHideDelay === 0 ? 999999999 : settings.messageHideDelay}s forwards;
                -webkit-animation: ${settings.animationDisabled ? '' : 'fadeInRight .3s ease forwards,'} fadeOut 0.5s ease ${settings.messageHideDelay === 0 ? 999999999 : settings.messageHideDelay}s forwards;
                display: ${settings.nameSeparate ? 'block' : 'table-row'};
            }
            
            .colon {
                display: none;
            }
            
            #log {
                display: table;
                position: absolute;
                bottom: 0;
                left: 0;
                padding: 0 10px 10px;
                width: 100%;
                table-layout: fixed;
            }
            
            #log>div {
                display: table-row;
            }
            
            #log>div.deleted {
                visibility: hidden;
            }
            
            #log .emote {
                background-repeat: no-repeat;
                background-position: center;
                background-size: contain;
                padding: 0.4em 0.2em;
                position: relative;
            }
            
            #log .emote img {
                display: inline-block;
                height: 1em;
                opacity: 0;
            }
            
            #log .message,#log .meta {
                background: rgba(000, 000, 000, 0.5);
                vertical-align: top;
                display: table-cell;
                display: ${settings.nameSeparate ? 'block' : 'table-cell'};
                padding-bottom: 0.1em;
            }
            
            #log .meta {
                width: 35%;
                text-align: right;
                padding-right: 0.5em;
                white-space: nowrap;
                text-overflow: ellipsis;
                overflow: hidden;
                position: ${settings.nameSeparate ? 'relative' : 'static'};
                text-align: ${settings.nameSeparate ? 'left' : 'right'};
                top: ${settings.nameTop}px;
                left: ${settings.nameLeft}px;
            }
            
            #log .message {
                word-wrap: break-word;
                width: 65%;
            }
            
            .badge {
                display: inline-block;
                margin-right: 0.2em;
                text_color    margin-left: 0.2em;
            }
        `
    )
}

const generateLink = () => {
    const settings = useAppSelector((state) => state.settings);

    return("Nothing to see here for now.")
}

export default generateCheckout;