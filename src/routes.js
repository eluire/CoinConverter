import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Converter from './Converter/Converter'
const Routes = () => {
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/coin_converter" component ={Converter}/>
            </Switch>
        </BrowserRouter>
    )
}

export default Routes;