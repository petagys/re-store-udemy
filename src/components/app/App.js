import React from 'react';
import './app.css';
import withBookStoreService from '../hoc';
import {Route, Switch} from 'react-router-dom';
import {HomePage, CartPage} from '../pages';
import ShopHeader from '../shop-header';

const App = () => {
    return <main role={'main'} className={'container'}>
        <ShopHeader numItems={5} total={120}/>
        <Switch>
            <Route path="/" component={HomePage} exact />
            <Route path='/cart' component={CartPage} />
        </Switch>
    </main>
}
export default withBookStoreService()(App);