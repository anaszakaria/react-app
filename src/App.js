import React from 'react'
import './assets/css/app.css'
import AppHeader from './components/AppHeader'
import LeftPanel from './components/LeftPanel'
import Welcome from './components/Welcome'

function App() {
    return (
        <div className="App">
            <AppHeader />
            <LeftPanel />
            <section>
                <Welcome title="React JS" />
            </section>
        </div>
    );
}

export default App
