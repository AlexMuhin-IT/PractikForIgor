import React from 'react';
import './App.css';
import {Header} from "./components/Header";
import {Footer} from "./components/Footer";
import {Body} from './components/Body';

function App() {
    return (
        <div className="App">
            <Header title={'Header'}/>
            <Body title={'Body'}/>
            <Footer title={'Footer'}/>
        </div>
    );
}

export default App;
