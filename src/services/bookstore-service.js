
export default class BookStoreService {

    data = [
        {
            id: 1,
            title: 'Production-Ready Microservices',
            author: 'Susan J. Fowler',
            price: 34,
            coverImage: 'https://images-na.ssl-images-amazon.com/images/I/41yJ75gpV-L._SX218_BO1,204,203,200_QL40_FMwebp_.jpg'
        },
        {
            id: 2,
            title: 'Release it!',
            author: 'Michael T. Nygard',
            price: 43,
            coverImage: 'https://images-na.ssl-images-amazon.com/images/I/414CRjLjwgL._SX218_BO1,204,203,200_QL40_FMwebp_.jpg'
        }
    ]

    getBooks(){
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve(this.data)
            }, 700)
        })
    }
}