import './RowWrapper.scss';

type RowWrapperProps = {
    title: string,
    children: React.ReactNode,
    tooltip: boolean,
    tooltipText?: string,
}

const RowWrapper = ({ title, children, tooltip, tooltipText }: RowWrapperProps) => {
    return (
        <div className='row'>
            <div className='row__title'>{title}:
            </div>
            { children }
            {tooltip && <div className='row__tooltip'>
                &#63;
                <div className='tooltiptext'>{tooltipText}</div>
            </div>}
        </div>
    )
}

export default RowWrapper;