import React, {Component} from 'react'
import '../apps/App.css'
import {BookContextConsumer} from '../bookContext'
import Books from '../components/Books'

class App extends Component {
    constructor() {
        super()

        this.state = {
            newBook: ''
        }
    }

    handleChange = (event) => {
        const {name, value} = event.target
        this.setState({[name]: value})
    }

    clearForm() {
        this.setState({
            newBook: ''
        })
    }

    render() {
        return (
            <BookContextConsumer>
                {context => (
                    <div className='content'>
                        <h2>Context Practice 2</h2>
                        <div className='form'>
                            <input
                                type='text'
                                name='newBook'
                                placeholder='Name of Book'
                                value={this.state.newBook}
                                onChange={this.handleChange}
                            />
                            <button onClick={() => {
                                context.addBook(this.state.newBook); 
                                this.clearForm()}
                                }>Add</button>
                        </div>
                        <div>
                            <Books />
                        </div>
                    </div>
                )}
            </BookContextConsumer>
        )
    }
}

export default App