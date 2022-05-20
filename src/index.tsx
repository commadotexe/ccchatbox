import { createRoot } from 'react-dom/client';

import store from './store';
import { useAppSelector } from './hooks';
import { Provider } from 'react-redux';
import OptionsBar from './features/OptionsBar';
import ChatBox from './features/ChatBox';
import Checkout from './features/Checkout';
import Nav from './features/Nav';

import './index.scss';

const App = () => {
    const showCheckout = useAppSelector((state) => state.checkout.show);

    return (
        <div>
            {/* <Nav /> */}
            <main>
                {showCheckout ? <Checkout /> : <ChatBox />}
                <OptionsBar />
            </main>
        </div>
    );
}

const container = document.getElementById('root');
const root = createRoot(container!);
root.render(
    <Provider store={store}>
        <App />
    </Provider>
);