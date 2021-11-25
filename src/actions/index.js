
const booksLoaded = (newBooks) => {
    return {
      type: 'BOOKS_LOADED',
      payload: newBooks
    };
  };
  
  const booksRequested = () => {
    return {
      type: 'BOOKS_REQUESTED'
    }
  };
  
  const booksError = (error) => {
    return {
      type: 'BOOKS_ERROR',
      payload: error
    };
  };

  const bookAddedToCart = (id) => {
    return {
      type: 'BOOK_ADDED_TO_CART',
      payload: id
    }
  }

  const bookDeleteFromCart = (id) => {
    return {
      type: 'BOOK_DELETE_FROM_CART',
      payload: id
    }
  }

  const bookDecreseInCart = (id) => {
    return {
      type: 'BOOK_DECREASED_IN_CART',
      payload: id
    }
  }
  export {
    booksLoaded,
    booksRequested,
    booksError,
    bookAddedToCart,
    bookDeleteFromCart,
    bookDecreseInCart
  };
  