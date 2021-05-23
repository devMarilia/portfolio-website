import React from 'react'
import { BrowserRouter as Router , Route, Switch} from 'react-router-dom'
import NavMenu from './components/NavMenu/index'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Projects from './pages/Projects'


function App() {
    return (
        <>
            <Router>
                <NavMenu/>

                <Switch>
                    <Route path="/">
                        <Home/>
                    </Route>
                    <Route path="/about">
                        <About/>
                    </Route>
                    <Route path="/projects">
                        <Projects/>
                    </Route>
                    <Route path="/contact">
                        <Contact/>
                    </Route>
                </Switch>
            </Router>
        </>
    )
}

export default App
