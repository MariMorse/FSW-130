import React, {Component} from "react"

const {Provider, Consumer} = React.createContext()

class BookContextProvider extends Component {
    constructor() {
        super()

        this.state = {
            books: [
                {book: 'The Story Of A Young Girl'},
                {book: 'Norse Mythology'}
            ]
        }
    }

    addAnimal = (book) => {
        let bookEntry = {
            'book': book
        }

        this.setState({
            books: [...this.state.books, bookEntry]
        })
    }

    render() {
        return (
            <Provider value={{
                book: this.state.books,
                addBook: this.addBook
            }}>
                {this.props.children}
            </Provider>
        )
    }
}

export {BookContextProvider, Consumer as BookContextConsumer}