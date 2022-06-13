import { useAppDispatch, useAppSelector } from '../../hooks';
import RowWrapper from './RowWrapper';
import GroupWrapper from './GroupWrapper';
import ColorPicker from './ColorPicker';
import Slider from './Slider';
import Toggle from './Toggle';
import CycleButton from './CycleButton';
import Select from './Select';
import generateOutput from '../ChatBox/generateOutput';
import { outputFormat } from '../ChatBox/OutputSlice';
import './OptionsBar.scss';
import { output } from '../../../webpack.config';
import { NumberInput, TextInput } from './TypingInput';

const OptionsBar = () => {
    const settings = useAppSelector((state) => state.settings);
    const metaSeparate = useAppSelector((state) => state.settings.metaSeparate);
    const output = useAppSelector((state) => state.output);
    const dispatch = useAppDispatch();

    const triggerOutputMessage = (format: outputFormat) => {
        dispatch({type: `output/outputTrigger`, payload: true});
        dispatch({type: `output/format`, payload: format});
    }

    const outputToClipboard = () => {
        navigator.clipboard.writeText(generateOutput(output.format, settings));
        dispatch({type: `output/copiedTrigger`, payload: true});
    }

    return (
        <section className='options-bar'>
            <GroupWrapper title='Important'>
                <RowWrapper title='Twitch username' tooltip={true} tooltipText="Required to use the Standalone functionality, skip if planning to use with Streamlabs vidget.">
                    <TextInput selector='twitchUsername'/>
                </RowWrapper>
                <RowWrapper title='Name separate' tooltip={true} tooltipText="Separate chatter's name from message text and put it on top.">
                    <Toggle selector='metaSeparate'/>
                </RowWrapper>
                <RowWrapper title='Disable animation' tooltip={false}>
                    <Toggle selector='animationDisabled'/>
                </RowWrapper>
                <RowWrapper title='Disable text shadow' tooltip={true} tooltipText='Subtle dark outline around all text. Might become a hindrance with semi-transparent text colors.'>
                    <Toggle selector='textShadowDisabled'/>
                </RowWrapper>
                <RowWrapper title='Hide message after' tooltip={false}>
                    <Slider min={1} max={120} measure='s'  selector='messageHideDelay'/>    
                </RowWrapper>
                <RowWrapper title='Always show message' tooltip={false}>
                    <Toggle selector='alwaysShowMessage'/>
                </RowWrapper>
            </GroupWrapper>

            <GroupWrapper title='Miscellaneous'>
                <RowWrapper title='Background Color' tooltip={true} tooltipText='This background color is for preview purposes only. It will not be shown in your streaming software. RGB stands for Red, Green and Blue, values go from 0(no color, black if all are 0) to 255(maximum color, white if all are 255). A stands for Alpha, it controlls opacity, value goes from 0(transparent) to 1(opaque).'>
                    <ColorPicker selector='backgroundColor'/>
                </RowWrapper>
            </GroupWrapper>

            <GroupWrapper title='Message'>
                <RowWrapper title='Background color' tooltip={true} tooltipText='RGB stands for Red, Green and Blue, values go from 0(no color, black if all are 0) to 255(maximum color, white if all are 255). A stands for Alpha, it controlls opacity, value goes from 0(transparent) to 1(opaque).'>
                    <ColorPicker selector='messageBackgroundColor'/>
                </RowWrapper>
                <RowWrapper title='Border style' tooltip={false}>
                    <Select options={['none', 'hidden', 'dotted', 'dashed', 'solid', 'double', 'groove', 'ridge', 'inset', 'outset']} selector='messageBorderStyle'/>
                </RowWrapper>
                <GroupWrapper title='Border sides'>
                    <RowWrapper title='Top' tooltip={true} tooltipText={'Controls whether top edge of the border will be visible.'}>
                        <Toggle selector='messageBorderTop'/>
                    </RowWrapper>
                    <RowWrapper title='Right' tooltip={true} tooltipText={'Controls whether right edge of the border will be visible.'}>
                        <Toggle selector='messageBorderRight'/>
                    </RowWrapper>
                    <RowWrapper title='Bottom' tooltip={true} tooltipText={'Controls whether bottom edge of the border will be visible.'}>
                        <Toggle selector='messageBorderBottom'/>
                    </RowWrapper>
                    <RowWrapper title='Left' tooltip={true} tooltipText={'Controls whether left edge of the border will be visible.'}>
                        <Toggle selector='messageBorderLeft'/>
                    </RowWrapper>
                </GroupWrapper>
                <RowWrapper title='Border color' tooltip={true} tooltipText='RGB stands for Red, Green and Blue, values go from 0(no color, black if all are 0) to 255(maximum color, white if all are 255). A stands for Alpha, it controlls opacity, value goes from 0(transparent) to 1(opaque).'>
                    <ColorPicker selector='messageBorderColor'/>
                </RowWrapper>
                <RowWrapper title='Border width' tooltip={false}>
                    <Slider min={0} max={42} measure='px'  selector='messageBorderWidth'/>
                </RowWrapper>
                <RowWrapper title='Border radius' tooltip={false}>
                    <Slider min={0} max={42} measure='px'  selector='messageBorderRadius'/>
                </RowWrapper>
                <RowWrapper title='Text color' tooltip={true} tooltipText='RGB stands for Red, Green and Blue, values go from 0(no color, black if all are 0) to 255(maximum color, white if all are 255). A stands for Alpha, it controlls opacity, value goes from 0(transparent) to 1(opaque).'>
                    <ColorPicker selector='textColor'/>
                </RowWrapper>
                <RowWrapper title='Font size' tooltip={false}>
                    <Slider min={12} max={80} measure='px'  selector='fontSize'/>
                </RowWrapper>
                <RowWrapper title='Padding' tooltip={true} tooltipText="Space between the box's walls and the message inside it.">
                    <Slider min={0} max={100} measure='px'  selector='messagePadding'/>
                </RowWrapper>
                <RowWrapper title='Margin' tooltip={true} tooltipText="Space between the box containing the message and other boxes.">
                    <Slider min={0} max={100} measure='px'  selector='messageMargin'/>
                </RowWrapper>
            </GroupWrapper>

            {metaSeparate && <GroupWrapper title='Chatter name'>
                <RowWrapper title='Background color' tooltip={true} tooltipText='RGB stands for Red, Green and Blue, values go from 0(no color, black if all are 0) to 255(maximum color, white if all are 255). A stands for Alpha, it controlls opacity, value goes from 0(transparent) to 1(opaque).'>
                    <ColorPicker selector='metaBackgroundColor'/>
                </RowWrapper>
                <RowWrapper title='Border style' tooltip={false}>
                    <Select options={['none', 'hidden', 'dotted', 'dashed', 'solid', 'double', 'groove', 'ridge', 'inset', 'outset']} selector='metaBorderStyle'/>
                </RowWrapper>
                <GroupWrapper title='Border sides'>
                    <RowWrapper title='Top' tooltip={true} tooltipText={'Controls whether top edge of the border will be visible.'}>
                        <Toggle selector='metaBorderTop'/>
                    </RowWrapper>
                    <RowWrapper title='Right' tooltip={true} tooltipText={'Controls whether right edge of the border will be visible.'}>
                        <Toggle selector='metaBorderRight'/>
                    </RowWrapper>
                    <RowWrapper title='Bottom' tooltip={true} tooltipText={'Controls whether bottom edge of the border will be visible.'}>
                        <Toggle selector='metaBorderBottom'/>
                    </RowWrapper>
                    <RowWrapper title='Left' tooltip={true} tooltipText={'Controls whether left edge of the border will be visible.'}>
                        <Toggle selector='metaBorderLeft'/>
                    </RowWrapper>
                </GroupWrapper>
                <RowWrapper title='Border color' tooltip={true} tooltipText='RGB stands for Red, Green and Blue, values go from 0(no color, black if all are 0) to 255(maximum color, white if all are 255). A stands for Alpha, it controlls opacity, value goes from 0(transparent) to 1(opaque).'>
                    <ColorPicker selector='metaBorderColor'/>
                </RowWrapper>
                <RowWrapper title='Border width' tooltip={false}>
                    <Slider min={0} max={42} measure='px'  selector='metaBorderWidth'/>
                </RowWrapper>
                <RowWrapper title='Border radius' tooltip={false}>
                    <Slider min={0} max={42} measure='px'  selector='metaBorderRadius'/>
                </RowWrapper>
                <RowWrapper title='Top position' tooltip={true} tooltipText="For when 'Name separate' is enabled. Move the name up(negative number) and down(positive number).">
                    <Slider min={-60} max={60} measure='px'  selector='metaTop'/>
                </RowWrapper>
                <RowWrapper title='Left position' tooltip={true} tooltipText="For when 'Name separate' is enabled. Move the name left(negative number) and right(positive number).">
                    <Slider min={-120} max={240} measure='px'  selector='metaLeft'/>
                </RowWrapper>
                <RowWrapper title='Padding' tooltip={true} tooltipText="Space between the box's walls and the name inside it.">
                    <Slider min={0} max={100} measure='px'  selector='metaPadding'/>
                </RowWrapper>
                <RowWrapper title='Margin' tooltip={true} tooltipText="Space between the box containing the name and other boxes.">
                    <Slider min={0} max={100} measure='px'  selector='metaMargin'/>
                </RowWrapper>
            </GroupWrapper>}
            
            <div className='checkout-buttons'>
                <CycleButton states={[{label: 'Generate CSS', action: () => triggerOutputMessage('css')}, {label: 'Copy CSS', action: outputToClipboard}]} />
                <CycleButton states={[{label: 'Generate Standalone Link', action: () => triggerOutputMessage('standalone')}, {label: 'Copy Standalone Link', action: outputToClipboard}]} />
                <CycleButton states={[{label: 'Save', action: () => triggerOutputMessage('save')}, {label: 'Copy Save Link', action: outputToClipboard}]} />
            </div>
        </section>
    )
}

export default OptionsBar;