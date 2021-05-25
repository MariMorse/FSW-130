import store from '../redux-contacts/src/store/configureStore'
import {addContact, deleteContact} from '../redux-contacts/src/store/configureStore'

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