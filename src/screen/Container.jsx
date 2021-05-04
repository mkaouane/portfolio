import React from 'react'
import './Container.css'
import Navbar from '../components/Navbar';
import DescCard from '../components/DescCard';
import Character from '../components/Character';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import CardProject from '../components/CardProject';


function Container() {
    return (
        <div className="container">
            <Router>
            <Navbar />
             <Switch>
                 <Route exact path="/" component={DescCard} />
                 <Route exact path="/plop" component={CardProject} />
             </Switch>
             <Character/>
            </Router>
             <ul className="sci">
                 <li><a href=""><img src="images/twitter.png" alt=""/></a></li>
                 <li><a href=""><img src="images/twitter.png" alt=""/></a></li>
                 <li><a href=""><img src="images/twitter.png" alt=""/></a></li>
             </ul>
        </div>
    )
}

export default Container
