import { useState } from 'react';
import { useAppSelector, useAppDispatch } from '../../hooks';
import { SettingsState } from './SettingsSlice';
import './TypingInput.scss'

type TypingInputProps = {
    selector: string,
}

export const NumberInput = ({ selector }: TypingInputProps) => {
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
        <input className='typing-input' type='number' value={inputValue as number} onChange={handleChange}/>
    )
}

export const TextInput = ({ selector }: TypingInputProps) => {
    const value = useAppSelector((state) => state.settings[selector as keyof SettingsState]);
    const dispatch = useAppDispatch();

    const handleChange = (event: any) => {
        dispatch({type: `settings/${selector}`, payload: event.target.value});
    };

    return (
        <input className='typing-input' type='text' value={value as string} onChange={handleChange}/>
    )
}