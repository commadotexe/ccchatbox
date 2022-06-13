import { createRoot } from 'react-dom/client';
import { useEffect } from 'react';
import { Provider } from 'react-redux';

import store from './store';
import { useAppDispatch } from './hooks';
import OptionsBar from './features/OptionsBar';
import { PreviewChatBox, StandaloneChatBox } from './features/ChatBox';
import { HashRouter, Routes, Route } from "react-router-dom";
import Nav from './features/Nav';

import './index.scss';

const App = () => {
    const dispatch = useAppDispatch();

    useEffect(() => {
        const queryString = window.location.toString().substring(window.location.toString().indexOf("?") + 1);
        const urlParams = new URLSearchParams(queryString);
        const entries = urlParams.entries();

        for(const entry of entries) {
            dispatch({type: `settings/${entry[0]}`, payload: entry[1]});
        }
    }, [])

    return (
        <HashRouter>
            <Routes>
                <Route path='/' element={
                    <main>
                        <PreviewChatBox />
                        <OptionsBar />
                    </main>
                } />
                <Route path='standalone' element={<StandaloneChatBox />}/>
            </Routes>
        </HashRouter>
    );
}

const container = document.getElementById('root');
const root = createRoot(container!);
root.render(
    <Provider store={store}>
        <App />
    </Provider>
);