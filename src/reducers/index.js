
const initialState = {
    books: [],
    loading: true,
    error: null,
    cartItems: [],
    orderTotal: 0
  };

  const updateOrder = (state, bookId, quantity) => {
    const {books, cartItems} = state;

    const book = books.find(book => book.id === bookId);
    const itemIndex = cartItems.findIndex(({id}) => id === bookId);
    const item = cartItems[itemIndex];
    
    const newItem = updateCartItem(book, item, quantity);
    return {
      ...state,
      cartItems: updateCartItems(cartItems, newItem, itemIndex),
      orderTotal: cartItems.reduce((acc, num) => acc + num.total, 0) + book.price * quantity
    };
  }

  const updateCartItems = (cartItems, item, idx) => {

    if(!item.count){
      return [
      ...cartItems.slice(0, idx),
      ...cartItems.slice(idx + 1)
    ];
    }

    if (idx === -1) {
      return [
        ...cartItems,
        item
      ];
    }
  
    return [
      ...cartItems.slice(0, idx),
      item,
      ...cartItems.slice(idx + 1)
    ];
  };
  
  const updateCartItem = (book, item = {}, quantity) => {
  
    const {
      id = book.id,
      count = 0,
      title = book.title,
      total = 0 } = item;
  
    return {
      id,
      title,
      count: count + quantity,
      total: total + quantity*book.price
    };
  };
  
  const reducer = (state = initialState, action) => {
  
    switch (action.type) {
      case 'BOOKS_REQUESTED':
        return {
          ...state,
          books: [],
          loading: true,
          error: null,
        };
  
      case 'BOOKS_LOADED':
        return {
          ...state,
          books: action.payload,
          loading: false,
          error: null,
        };
  
      case 'BOOKS_ERROR':
        return {
          ...state,
          books: [],
          loading: false,
          error: action.payload,
        };


      case 'BOOK_ADDED_TO_CART':
        return updateOrder(state, action.payload, 1);

      case 'BOOK_DECREASED_IN_CART':
       return updateOrder(state, action.payload, -1);

      case 'BOOK_DELETE_FROM_CART':
        const itemoDelete = state.cartItems.find(({id}) => id === action.payload);
        return updateOrder(state, action.payload, -itemoDelete.count);
  
      default:
        return state;
    }
  };
  
  export default reducer;
  