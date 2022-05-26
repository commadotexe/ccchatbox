import { useState } from 'react';
import { RgbaColorPicker } from 'react-colorful';
import { useAppSelector, useAppDispatch } from '../../hooks';
import { SettingsState } from './SettingsSlice';
import { rgbaColor, rgba2hex } from '../../helpers';
import './ColorPicker.scss';

type ColorPickerProps = {
    selector: string,
}

const ColorPicker = ({ selector }: ColorPickerProps) => {
    const color = useAppSelector((state) => state.settings[selector as keyof SettingsState]) as rgbaColor;
    const dispatch = useAppDispatch();
    const [showPicker, setShowPicker] = useState(false);

    const handleChange = (color: any) => {
        dispatch({type: `settings/${selector}`, payload: color});
    };

    const handleClick = () => {
        setShowPicker(!showPicker);
    };
    
    return (
        <div className='color-picker'>
            <div className='color-picker__preview' onClick={handleClick}>
                <span>{rgba2hex(color)}</span>
                <div style={{backgroundColor: `rgba(${color.r}, ${color.g}, ${color.b}, ${color.a})`}}></div>
            </div>
            {showPicker && <RgbaColorPicker color={color} onChange={handleChange} />}
        </div>
    )
}

export default ColorPicker;