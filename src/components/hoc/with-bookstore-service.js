import React from "react";
import { BookstoreServiceConsumer } from "../book-service-context";

const withBookStoreService = () => (Wrapped) => {
    
    return (props) => {
        return (
            <BookstoreServiceConsumer>
                {
                    (bookStoreService) => {
                        return <Wrapped {...props} bookStoreService={bookStoreService}/>;
                    }
                }
            </BookstoreServiceConsumer>
        )
    }
}
export default withBookStoreService;