import { useState } from 'react';
import './CycleButton.scss';

type State = {
    label: string,
    action: (...args: any[]) => any | null,
}

type CycleButtonProps = {
    states: State[],
}

const CycleButton = ({ states }: CycleButtonProps) => {
    const [idx, setIdx] = useState(0);

    const handleClick = () => {
        if (states[idx % states.length]) {
            states[idx % states.length].action();
        }
        setIdx(idx + 1);
    };

    return (
        <button onClick={handleClick}>{states[idx % states.length].label}</button>
    )
}

export default CycleButton;