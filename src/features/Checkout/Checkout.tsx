import generateCheckout from './generateCheckout';
import { useState } from 'react';
import { useAppSelector } from '../../hooks';
import './Checkout.scss';

const Checkout = () => {
    const [contentsCopied, setContentsCopied] = useState(false);
    const checkoutState = useAppSelector((state) => state.checkout);

    const handleClickCopied = (e: any) => {
        navigator.clipboard.writeText(document.getElementById('checkout__contents').innerText);
        if (!contentsCopied) {
            setContentsCopied(!contentsCopied);
        }
    }

    return (
        <section className='checkout'>
            <div id='checkout__contents'>{generateCheckout(checkoutState.format)}</div>
            { checkoutState.show && <button className='button' onClick={handleClickCopied} >{contentsCopied ? 'Copied!' : 'Copy to clipboard'}</button> }
        </section>
    );
}

export default Checkout;