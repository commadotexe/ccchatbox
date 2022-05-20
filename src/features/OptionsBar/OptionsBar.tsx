import { useAppDispatch, useAppSelector } from '../../hooks';
import ColorPicker from './ColorPicker';
import Slider from './Slider';
import RowWrapper from './RowWrapper';
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
            <RowWrapper title='Background Color' tooltip={true} tooltipText='This background color is for preview purposes only. It will not be shown in your streaming software.'>
                <ColorPicker selector='backgroundColor'/>
            </RowWrapper>
            <RowWrapper title='Text Color' tooltip={false}>
                <ColorPicker selector='textColor'/>
            </RowWrapper>
            <RowWrapper title='Font Size' tooltip={false}>
                <Slider min={12} max={80} measure='px'  selector='fontSize'/>
            </RowWrapper>
            <RowWrapper title='Hide message after' tooltip={true} tooltipText='Set to 0s to never hide messages.'>
                <Slider min={0} max={120} measure='s'  selector='messageHideDelay'/>    
            </RowWrapper>
            <div className='checkout-buttons'>
                { !checkoutShown && <button className='button' onClick={() => handleClickShow('css')}>Generate CSS</button> }
                { !checkoutShown && <button className='button' onClick={() => handleClickShow('link')}>Generate Link</button> }
                { checkoutShown && <button className='button' onClick={handleClickHide}>Show chat</button> }
            </div>
        </section>
    )
}

export default OptionsBar;