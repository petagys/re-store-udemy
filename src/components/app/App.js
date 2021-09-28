import React from 'react';
import './app.css';
import withBookStoreService from '../hoc';

const App = ({bookStoreService}) => {
    console.log(bookStoreService.getBooks());
    return <div>Test</div>
}
export default withBookStoreService()(App);