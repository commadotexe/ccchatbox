import { useAppSelector, useAppDispatch } from '../../hooks';
import { SettingsState } from './SettingsSlice';
import './Select.scss';

type ToggleProps = {
    options: string[],
    selector: string,
}

const Select = ({ options, selector }: ToggleProps) => {
    const value = useAppSelector((state) => state.settings[selector as keyof SettingsState]);
    const dispatch = useAppDispatch();

    const handleChange = (event: any) => {
        dispatch({type: `settings/${selector}`, payload: event.target.value});
    };

    return (
        <select value={value as string} onChange={handleChange}>
            {options.map((option, idx) => <option key={idx} value={option}>{option}</option>)}
        </select>
    )
}

export default Select;