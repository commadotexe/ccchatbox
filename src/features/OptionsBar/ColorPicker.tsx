import { useState } from 'react';
import { HexColorPicker } from 'react-colorful';
import { useAppSelector, useAppDispatch } from '../../hooks';
import { SettingsState } from './SettingsSlice';
import './ColorPicker.scss';

type ColorPickerProps = {
    selector: string,
}

const ColorPicker = ({ selector }: ColorPickerProps) => {
    const color = useAppSelector((state) => state.settings[selector as keyof SettingsState]);
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
                <span>{color}</span>
                <div style={{backgroundColor: color as string}}></div>{/* dirty */}
            </div>
            {showPicker && <HexColorPicker color={color as string} onChange={handleChange} />}{/* dirty */}
        </div>
    )
}

export default ColorPicker;