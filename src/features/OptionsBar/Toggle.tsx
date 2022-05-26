import { useAppSelector, useAppDispatch } from '../../hooks';
import { SettingsState } from './SettingsSlice';
import './Toggle.scss';

type ToggleProps = {
    selector: string,
}

const Toggle = ({ selector }: ToggleProps) => {
    const value = useAppSelector((state) => state.settings[selector as keyof SettingsState]);
    const dispatch = useAppDispatch();

    const handleChange = () => {
        dispatch({type: `settings/${selector}`, payload: !value});
    };

    return (
        <div className='toggle'>
            <input type="checkbox" checked={value as boolean} />
            <span onClick={handleChange} />
        </div>
    )
}

export default Toggle;