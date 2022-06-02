import { createRoot } from 'react-dom/client';
import { useEffect } from 'react';
import { Provider } from 'react-redux';

import store from './store';
import { useAppDispatch, useAppSelector } from './hooks';
import OptionsBar from './features/OptionsBar';
import ChatBox from './features/ChatBox';
import Nav from './features/Nav';

import './index.scss';

const App = () => {
    const dispatch = useAppDispatch();

    useEffect(() => {
        const queryString = window.location.search;
        const urlParams = new URLSearchParams(queryString);
        const entries = urlParams.entries();

        for(const entry of entries) {
            console.log(`name: ${entry[0]} | value: ${entry[1]}`)
            dispatch({type: `settings/${entry[0]}`, payload: entry[1]});
        }
    }, [])

    return (
        <div>
            {/* <Nav /> */}
            <main>
                <ChatBox />
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