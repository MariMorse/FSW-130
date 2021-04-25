import React from 'react'
import {BookContextConsumer} from '../bookContext'

function Books() {
    return (
        <BookContextConsumer>
            {context => (
                <div>
                    {context.book.map((item, index) => 
                        <div key={index} className='book'>
                            {item.book}
                        </div>
                    )} 
                </div>
            )}
        </BookContextConsumer>
    )
}

export default Books