import { useAppDispatch, useAppSelector } from '../../hooks';
import RowWrapper from './RowWrapper';
import GroupWrapper from './GroupWrapper';
import ColorPicker from './ColorPicker';
import Slider from './Slider';
import Toggle from './Toggle';
import NumberInput from './NumberInput';
import Select from './Select';
import './OptionsBar.scss';

const OptionsBar = () => {
    const checkoutShown = useAppSelector((state) => state.checkout.show);
    const dispatch = useAppDispatch();

    const handleClickShow = (format: string) => {
        dispatch({type: 'checkout/show', payload: true});
        dispatch({type: 'checkout/format', payload: format});
    }

    const handleClickHide = () => {
        dispatch({type: 'checkout/show', payload: false});
    }

    return (
        <section>
            <GroupWrapper title='Important'>
                <RowWrapper title='Name separate' tooltip={true} tooltipText="Separate chatter's name from message text and put it on top.">
                    <Toggle selector='nameSeparate'/>
                </RowWrapper>
                <RowWrapper title='Disable animation' tooltip={false}>
                    <Toggle selector='animationDisabled'/>
                </RowWrapper>
                <RowWrapper title='Disable text shadow' tooltip={true} tooltipText='Subtle dark outline around all text. Might become a hindrance with semi-transparent text colours.'>
                    <Toggle selector='textShadowDisabled'/>
                </RowWrapper>
                <RowWrapper title='Hide message after' tooltip={true} tooltipText='Set to 0s to never hide messages.'>
                    <Slider min={0} max={120} measure='s'  selector='messageHideDelay'/>    
                </RowWrapper>
            </GroupWrapper>

            <GroupWrapper title='Miscellaneous'>
                <RowWrapper title='Background Color' tooltip={true} tooltipText='This background color is for preview purposes only. It will not be shown in your streaming software.'>
                    <ColorPicker selector='backgroundColor'/>
                </RowWrapper>
            </GroupWrapper>

            <GroupWrapper title='Chatter name'>
                <RowWrapper title='Border width' tooltip={true} tooltipText="Affects the whole message when 'Name separate' option is disabled.">
                    <Slider min={0} max={42} measure='px'  selector='nameBorderWidth'/>
                </RowWrapper>
                <RowWrapper title='Border radius' tooltip={true} tooltipText="Affects the whole message when 'Name separate' option is disabled.">
                    <Slider min={0} max={42} measure='px'  selector='nameBorderRadius'/>
                </RowWrapper>
                <RowWrapper title='Border style' tooltip={true} tooltipText="Affects the whole message when 'Name separate' option is disabled.">
                    <Select options={['none', 'hidden', 'dotted', 'dashed', 'solid', 'double', 'groove', 'ridge', 'inset', 'outset']} selector='nameBorderStyle'/>
                </RowWrapper>
                <RowWrapper title='Border color' tooltip={true} tooltipText="Affects the whole message when 'Name separate' option is disabled.">
                    <ColorPicker selector='nameBorderColor'/>
                </RowWrapper>
                <RowWrapper title='Background color' tooltip={true} tooltipText="Affects the whole message when 'Name separate' option is disabled.">
                    <ColorPicker selector='nameBackgroundColor'/>
                </RowWrapper>
                <RowWrapper title='Top position' tooltip={true} tooltipText="For when 'Name separate' is enabled. Move the name up(negative number) and down(positive number).">
                    <NumberInput selector='nameTop'/>
                </RowWrapper>
                <RowWrapper title='Left position' tooltip={true} tooltipText="For when 'Name separate' is enabled. Move the name left(negative number) and right(positive number).">
                    <NumberInput selector='nameLeft'/>
                </RowWrapper>
            </GroupWrapper>

            <GroupWrapper title='Message'>
            <RowWrapper title='Border width' tooltip={true} tooltipText="Only works when 'Name separate' option is enabled.">
                    <Slider min={0} max={42} measure='px'  selector='messageBorderWidth'/>
                </RowWrapper>
                <RowWrapper title='Border radius' tooltip={true} tooltipText="Only works when 'Name separate' option is enabled.">
                    <Slider min={0} max={42} measure='px'  selector='messageBorderRadius'/>
                </RowWrapper>
                <RowWrapper title='Border style' tooltip={true} tooltipText="Only works when 'Name separate' option is enabled.">
                    <Select options={['none', 'hidden', 'dotted', 'dashed', 'solid', 'double', 'groove', 'ridge', 'inset', 'outset']} selector='messageBorderStyle'/>
                </RowWrapper>
                <RowWrapper title='Border color' tooltip={true} tooltipText="Only works when 'Name separate' option is enabled.">
                    <ColorPicker selector='messageBorderColor'/>
                </RowWrapper>
                <RowWrapper title='Background color' tooltip={true} tooltipText="Only works when 'Name separate' option is enabled.">
                    <ColorPicker selector='messageBackgroundColor'/>
                </RowWrapper>
                <RowWrapper title='Text color' tooltip={false}>
                    <ColorPicker selector='textColor'/>
                </RowWrapper>
                <RowWrapper title='Font size' tooltip={false}>
                    <Slider min={12} max={80} measure='px'  selector='fontSize'/>
                </RowWrapper>
            </GroupWrapper>
            
            <div className='checkout-buttons'>
                { !checkoutShown && <button className='button' onClick={() => handleClickShow('css')}>Generate CSS</button> }
                { !checkoutShown && <button className='button' onClick={() => handleClickShow('link')}>Generate Link</button> }
                { checkoutShown && <button className='button' onClick={handleClickHide}>Show chat</button> }
            </div>
        </section>
    )
}

export default OptionsBar;