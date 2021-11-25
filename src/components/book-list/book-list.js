import React, { Component } from 'react';
import BookListItem from '../book-list-item';
import { connect } from 'react-redux';

import withBookstoreService from '../hoc';
import { booksLoaded, booksRequested, booksError, bookAddedToCart } from '../../actions';
import { compose } from '../../utils';

import Spinner from '../spinner';
import ErrorIndicator from '../error-indicator';

import './book-list.css';

class BookList extends Component {

  componentDidMount() {
    this.props.fetchBooks();
  }

  render() {
    const { books, loading, error, onAddedToCart } = this.props;

    if (loading) {
      return <Spinner />;
    }

    if (error) {
      return <ErrorIndicator />;
    }

    return (
      <ul className="book-list">
        {
          books.map((book) => {
            return (
              <li key={book.id}><BookListItem onAddedToCart={onAddedToCart} book={book}/></li>
            )
          })
        }
      </ul>
    );
  }
}

const mapStateToProps = ({ books, loading, error }) => {
  return { books, loading, error };
};

const mapDispatchToProps = (dispatch, ownProps) => {
    const {bookStoreService} = ownProps;
    return {
        fetchBooks: () => {
            dispatch(booksRequested());
        bookStoreService.getBooks()
      .then((data) => dispatch(booksLoaded(data)))
      .catch((err) => dispatch(booksError(err)));
        },
        onAddedToCart: (id) => dispatch(bookAddedToCart(id))
    }
}

export default compose(
  withBookstoreService(),
  connect(mapStateToProps, mapDispatchToProps)
)(BookList);
