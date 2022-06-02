import { useState } from 'react';
import { useAppSelector, useAppDispatch } from '../../hooks';
import { SettingsState } from './SettingsSlice';
import './NumberInput.scss';

type NumberInputProps = {
    selector: string,
}

const NumberInput = ({ selector }: NumberInputProps) => {
    const value = useAppSelector((state) => state.settings[selector as keyof SettingsState]);
    const [inputValue, setInputValue] = useState(value);
    const dispatch = useAppDispatch();

    const handleChange = (event: any) => {
        const parsed = parseInt(event.target.value);

        if (!parsed) {
            setInputValue(event.target.value);
            dispatch({type: `settings/${selector}`, payload: 0});
        } else {
            setInputValue(parsed);
            dispatch({type: `settings/${selector}`, payload: parsed});    
        }
    };

    return (
        <div className='number-input'>
            <input type='number' value={inputValue as number} onChange={handleChange}/>
        </div>
    )
}

export default NumberInput;