import React from 'react';
import { BrowserRouter, Route,Switch } from 'react-router-dom';
import PokemonListComponent from '../components/pokemon-list/PokemonListComponent';
import PokemonDescription from '../components/pokemon-description/PokemonDescription';

class AppRoutes extends React.Component {
    render() {
        return (
            <BrowserRouter>
                <Switch>
                <Route path="/" exact component={PokemonListComponent} />
                    <Route path="/description" component={PokemonDescription} />
                    </Switch>
            </BrowserRouter>
        )
    }
}
export default AppRoutes;