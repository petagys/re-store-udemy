import React, {Component} from 'react'
import BookListItem from '../book-list-item';
import './book-list.css';
import { booksRequested } from '../../actions';
import {connect} from 'react-redux';
import { booksLoaded } from '../../actions';
import { compose } from '../../utils';
import withBookStoreService from '../hoc';
import Spinner from '../spinner';

class BookList extends Component {

    componentDidMount(){
        const {bookStoreService, booksLoaded, booksRequested} = this.props;
        bookStoreService.getBooks()
        .then((data) => booksLoaded(data));
    }

    componentWillUnmount(){
        this.props.booksRequested()
    }

    render(){
        const {books, loading} = this.props;
        if(loading) {
            return <Spinner />
        }
        return <ul className={'book-list'}>
            {books.map(book => {
                return <li key={book.id}>
                        <BookListItem book={book} />
                    </li>
            })}
        </ul>
    }
}

const mapStateToProps = ({books, loading}) => {
    return {books, loading}
}

const mapDispatchToProps = {
    booksLoaded,
    booksRequested
}

export default compose(
    withBookStoreService(),
    connect(mapStateToProps, mapDispatchToProps))
    (BookList);