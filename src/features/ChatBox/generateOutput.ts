import { useAppSelector } from '../../hooks';
import { rgba2css } from '../../utils/helpers';
import { outputFormat } from './OutputSlice';

const generateOutput = (format: outputFormat, settings: any) => {
    switch (format) {
        case 'css':
            return(generateCss(settings));
        case 'standalone':
            return(generateStandalone(settings));
        case 'save':
            return(generateSave(settings));
    }
}

const generateCss = (settings: any) => {
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
            animation: ${settings.animationDisabled ? '' : 'fadeInRight .3s ease forwards'}, fadeOut 0.5s ease ${settings.alwaysShowMessage ? 999999999 : settings.messageHideDelay}s forwards;
            webkit-animation: ${settings.animationDisabled ? '' : 'fadeInRight .3s ease forwards'}, fadeOut 0.5s ease ${settings.alwaysShowMessage ? 999999999 : settings.messageHideDelay}s forwards;
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
            border-width:   ${settings.metaBorderWidth * (settings.metaBorderTop ? 1 : 0)}px 
                            ${settings.metaBorderWidth * (settings.metaBorderRight ? 1 : 0)}px 
                            ${settings.metaBorderWidth * (settings.metaBorderBottom ? 1 : 0)}px 
                            ${settings.metaBorderWidth * (settings.metaBorderLeft ? 1 : 0)}px;
            border-radius: ${settings.metaBorderRadius}px;
            padding: ${settings.metaSeparate ? settings.metaPadding + 'px' : '0 0.5em 0.1em 0.5em'};
            margin: ${settings.metaSeparate ? settings.metaMargin : 0}px;
        }

        #log .message {
            overflow-wrap: anywhere;
            width: ${settings.metaSeparate ? 'fit-content' : '65%'};
            background: ${settings.metaSeparate ? rgba2css(settings.messageBackgroundColor) : 'none'};
            border-style: ${settings.metaSeparate ? settings.messageBorderStyle : 'none'};
            border-color: ${rgba2css(settings.messageBorderColor)};
            border-width:   ${settings.messageBorderWidth * (settings.messageBorderTop ? 1 : 0)}px 
                            ${settings.messageBorderWidth * (settings.messageBorderRight ? 1 : 0)}px 
                            ${settings.messageBorderWidth * (settings.messageBorderBottom ? 1 : 0)}px 
                            ${settings.messageBorderWidth * (settings.messageBorderLeft ? 1 : 0)}px;
            border-radius: ${settings.messageBorderRadius}px;
            padding: ${settings.metaSeparate ? settings.messagePadding + 'px' : '0 0 0.1em 0'};
            margin: ${settings.metaSeparate ? settings.messageMargin : 0}px;
        }

        .emote {
            display: ${settings.hideEmotes ? 'none' : 'inline'};
        }

        .badge {
            display: ${settings.hideBadges ? 'none' : 'inline-block'};
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

const generateStandalone = (settings: any) => {
    if (!settings.twitchUsername) {
        return("Please input your Twitch username in the 'Important' section. Standalone mode needs it to work properly.");
    }
    return('https://commadotexe.github.io/ccchatbox/#/standalone/?' + objectToUrlParams(settings));
}

const generateSave = (settings: any) => {
    return('https://commadotexe.github.io/ccchatbox/?' + objectToUrlParams(settings));
}

const objectToUrlParams = (obj: any) => {
    const ret = Object.entries(obj).map(([key, value]) => {
        const val = typeof value === 'object' ? JSON.stringify(value) : value;
        return(`${key}=${val}`);
    }).join('&');
    return(ret);
}

export default generateOutput;