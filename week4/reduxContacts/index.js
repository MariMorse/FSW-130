const redux = require("redux");

const initialState = {
    count: 0,
    contacts: []
}

function addContact(contact) {
    return {
        type: 'ADD_CONTACT',
        payload: contact
    }
}

function deleteContact(contact) {
    return {
        type: 'DELETE_CONTACT',
        payload: contact
    }
}

function reducer(state = initialState, action) {
    switch(action.type) {
        case 'ADD_CONTACT':
            return {
                ...state,
                contacts: [...state.contacts, action.payload]
            }
        case 'DELETE_CONTACT':
            const updatedContacts = state.contacts.filter(function(contact) {
                if (action.payload.name === contact.name && 
                    action.payload.phone === contact.phone &&
                    action.payload.email === contact.email) {
                    return false
                }
                return true
            })
            return {
                ...state,
                contacts: updatedContacts
            }
        default:
            return state
    }
}

const store = redux.createStore(reducer)

store.subscribe(() => {
    console.log(store.getState())
})

store.dispatch(addContact({
    name: 'Susan Gail',
    phone: '716-226-3030',
    email: 'goingcrazy76@hotmail.com'
}))

store.dispatch(addContact({
    name: 'John Alianello',
    phone: '813-434-5656',
    email: 'johnalianell1@gmail.com'
}))

store.dispatch(addContact({
    name: 'Donna Cummins',
    phone: '352-455-6060',
    email: 'hotmama53@yahoo.com'
}))

store.dispatch(deleteContact({
    name: 'Donald Trump',
    phone: '614-867-5309',
    email: 'TrumpDonald2020@gmail.com'
}))

store.dispatch(deleteContact({
    name: 'Marianne Alianello',
    phone: '614-572-3068',
    email: 'marianne.morse@bryanuniversity.edu'
}))