import { useState } from 'react';
import { RgbaColorPicker } from 'react-colorful';
import { useAppSelector, useAppDispatch } from '../../hooks';
import { SettingsState } from './SettingsSlice';
import { rgbaColor, clamp, rgba2css } from '../../utils/helpers';
import './ColorPicker.scss';

type ColorPickerProps = {
    selector: string,
}

const ColorPicker = ({ selector }: ColorPickerProps) => {
    const color = useAppSelector((state) => state.settings[selector as keyof SettingsState]) as rgbaColor;
    const dispatch = useAppDispatch();
    const [showPicker, setShowPicker] = useState(false);
    const [inputColor, setInputColor] = useState(rgba2smallstring(color));

    const handleChangeInput = (e: any) => {
        const c = e.target.value;
        if (/^r:[\d]{1,3} g:[\d]{1,3} b:[\d]{1,3} a:(0\.)?[\d]{1,3}$/.test(c)) {
            dispatch({type: `settings/${selector}`, payload: {r: clamp(parseInt(c.match(/r:([\d]{1,3})/)[1]), 0, 255), g: clamp(parseInt(c.match(/g:([\d]{1,3})/)[1]), 0, 255), b: clamp(parseInt(c.match(/b:([\d]{1,3})/)[1]), 0, 255), a: clamp(parseFloat(c.match(/a:((0\.)?[\d]{1,3})/)[1]), 0, 1)}});
            setInputColor(c);
        } else if (/^r:[\d]{0,3} g:[\d]{0,3} b:[\d]{0,3} a:(0\.)?[\d]{0,3}$/.test(c)) {
            setInputColor(c);
        }
    }

    const handleChangeColorPicker = (color: any) => {
        dispatch({type: `settings/${selector}`, payload: color});
        setInputColor(rgba2smallstring(color));
    };

    const handleClick = () => {
        setShowPicker(!showPicker);
    };

    return (
        <div className='color-picker'>
            <div className='color-picker__preview' onClick={handleClick}>
                <input type='text' onChange={handleChangeInput} value={inputColor} />
                <div style={{backgroundColor: rgba2css(color)}}></div>
            </div>
            {showPicker && <RgbaColorPicker color={color} onChange={handleChangeColorPicker} />}
        </div>
    )
}

const rgba2smallstring = (c: rgbaColor) => {
    return (JSON.stringify(c).replace(/{?}?"?/g, '').replace(/,/g, ' '));
}

export default ColorPicker;