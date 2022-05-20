import { useAppSelector, useAppDispatch } from '../../hooks';
import { SettingsState } from './SettingsSlice';
import './Slider.scss';

type RowWrapperProps = {
    min: number,
    max: number,
    measure: string,
    selector: string,
}

const Slider = ({ min, max, measure, selector }: RowWrapperProps) => {
    const value = useAppSelector((state) => state.settings[selector as keyof SettingsState]);
    const dispatch = useAppDispatch();

    const handleChange = (event: any) => {
        dispatch({type: `settings/${selector}`, payload: parseInt(event.target.value)});
    };

    return (
        <div className='slider'>
            <input type='range' min={min} max={max} value={value} onChange={handleChange}/>
            <div>{`${value}${measure}`}</div>
        </div>
    )
}

export default Slider;