import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { Home } from "./pages/Home";
import { Settings } from "./pages/Settings";
import { BuildHistory } from "./pages/BuildHistory";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";

function App() {
    return (
        <BrowserRouter>
            <div className='wrapper flex column'>
                <Header />
                    <Switch>
                        <Route path={'/'} exact component={Home} />
                        <Route path={'/settings'} component={Settings} />
                        <Route path={'/build-history'} component={BuildHistory} />
                    </Switch>
                <Footer/>
            </div >
        </BrowserRouter>
    )
}

export default App;
