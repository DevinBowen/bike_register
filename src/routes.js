import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './components/Home';
import New from './components/new/New';
import Used from './components/used/Used';

export default (
    <Switch>
        
         <Route exact path='/' component={Home} />
         <Route path='/new' component={New} />
         <Route path='/used' component={Used} />

    </Switch>
)
