import { useState } from 'react';
import './GroupWrapper.scss';

type GroupWrapperProps = {
    title: string,
    children: React.ReactNode,
}

const GroupWrapper = ({ title, children }: GroupWrapperProps) => {
    const [open, setOpen] = useState(false);

    const handleClick = () => {
        setOpen(!open)
    }

    return (
        <div className='group'>
            <div className='group__title' onClick={handleClick}>{`${title} ${open ? '▼' : '▶'}`}</div> 
            {open && <div className='group__children'>{children}</div>}
        </div>
    )
}

export default GroupWrapper;