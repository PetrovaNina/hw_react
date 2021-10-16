import React, {useState} from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import {Home} from "./pages/Home";
import {Settings} from "./pages/Settings";
import {BuildHistory} from "./pages/BuildHistory";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Modal from "./components/modal/Modal";

export default function App() {
    const [open, setOpen] = useState(false);
    const onClick = () => setOpen(true);

    return (
        <BrowserRouter>
            <div className='wrapper flex column'>
                <Header onClick={onClick}/>
                <Switch>
                    <Route path={'/'} exact component={Home}/>
                    <Route path={'/settings'} component={Settings}/>
                    <Route path={'/build-history'} component={BuildHistory}/>
                </Switch>
                <Footer props={footerProps}/>
            </div>
            <Modal open={open}
                   submit={() => setOpen(false)}
                   cancel={() => setOpen(false)}
            />
        </BrowserRouter>
    )
}

const footerProps = {
    footerNavLinks: [
        { id: 'Support', link: '#' },
        { id: 'Learning', link: '#' },
        { id: 'Русская версия', link: '#' }
    ],
    copyright: '© 2021 Nina Petrova'
}