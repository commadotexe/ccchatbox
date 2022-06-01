import { useAppSelector } from '../../hooks';
import { rgba2css } from '../../helpers';

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
            text-shadow: ${settings.textShadowDisabled ? 'none' : '0 0 1px #000, 0 0 2px #000'};
            background: ${rgba2css(settings.backgroundColor)};
            font-family: 'Roboto';
            font-weight: 700;
            font-size: ${settings.fontSize};
            line-height: 1.5em;
            color: ${rgba2css(settings.textColor)};
        }

        #log>div {
            display: flex;
            justify-content: flex-start;
            flex-direction: ${settings.metaSeparate ? 'column' : 'row'};
            animation: ${settings.animationDisabled ? '' : 'fadeInRight .3s ease forwards'}, fadeOut 0.5s ease ${settings.messageHideDelay === 0 ? 999999999 : settings.messageHideDelay}s forwards;
            webkit-animation: ${settings.animationDisabled ? '' : 'fadeInRight .3s ease forwards'}, fadeOut 0.5s ease ${settings.messageHideDelay === 0 ? 999999999 : settings.messageHideDelay}s forwards;
            background: ${settings.metaSeparate ? 'none' : rgba2css(settings.messageBackgroundColor)};
            border-style: ${settings.metaSeparate ? 'none' : settings.messageBorderStyle};
            border-color: ${rgba2css(settings.messageBorderColor)};
            border-width: ${settings.messageBorderWidth}px;
            border-radius: ${settings.messageBorderRadius}px;
            padding: ${settings.metaSeparate ? 0 : settings.messagePadding}px;
            margin: ${settings.metaSeparate ? 0 : settings.messageMargin}px;
        }

        .colon {
            display: none;
        }

        #log {
            display: flex;
            flex-direction: column;
            justify-content: end;
            position: absolute;
            bottom: 0;
            left: 0;
            padding: 0 10px 10px;
            width: 100%;
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
            display: block;
            padding-bottom: 0.1em;
        }

        #log .meta {
            width: 35%;
            text-align: right;
            padding-right: 0.5em;
            white-space: nowrap;
            text-overflow: ellipsis;
            overflow: hidden;
            width: ${settings.metaSeparate ? 'fit-content' : '35%'};
            position: ${settings.metaSeparate ? 'relative' : 'static'};
            text-align: ${settings.metaSeparate ? 'left' : 'right'};
            top: ${settings.metaTop}px;
            left: ${settings.metaLeft}px;
            background: ${settings.metaSeparate ? rgba2css(settings.metaBackgroundColor) : 'none'};
            border-style: ${settings.metaSeparate ? settings.metaBorderStyle : 'none'};
            border-color: ${rgba2css(settings.metaBorderColor)};
            border-width: ${settings.metaBorderWidth}px;
            border-radius: ${settings.metaBorderRadius}px;
            padding: ${settings.metaSeparate ? settings.metaPadding + 'px' : '0 0.5em 0.1em 0.5em'};
            margin: ${settings.metaSeparate ? settings.metaMargin : 0}px;
        }

        #log .message {
            word-wrap: break-word;
            width: ${settings.metaSeparate ? 'auto' : '65%'};
            background: ${settings.metaSeparate ? rgba2css(settings.messageBackgroundColor) : 'none'};
            border-style: ${settings.metaSeparate ? settings.messageBorderStyle : 'none'};
            border-color: ${rgba2css(settings.messageBorderColor)};
            border-width: ${settings.messageBorderWidth}px;
            border-radius: ${settings.messageBorderRadius}px;
            padding: ${settings.metaSeparate ? settings.messagePadding + 'px' : '0 0 0.1em 0'};
            margin: ${settings.metaSeparate ? settings.messageMargin : 0}px;
        }

        .badge {
            display: inline-block;
            margin-right: 0.2em;
            position: relative;
            height: 1em;
            vertical-align: middle;
            top: -0.1em;
        }

        .name {
            margin-left: 0.2em;
        }

        @keyframes fadeInRight {
            0% {
                opacity: 0;
                -webkit-transform: translate3d(100%,0,0);
                transform: translate3d(100%,0,0);
            }
            100% {
                opacity: 1;
                -webkit-transform: none;
                transform: none;
            }
        } 

        @keyframes fadeOut {
            0% {opacity:1;}
            100% {opacity:0;}
        }
        `
    )
}

const generateLink = () => {
    const settings = useAppSelector((state) => state.settings);

    return("Nothing to see here for now.")
}

export default generateCheckout;