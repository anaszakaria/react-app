import { INCREMENT, DECREMENT, RESET } from 'store/actions'

const initialState = {
    user: null,
    count: 0
}

function reducer(state = initialState, action) {
    console.log('reducer', state, action)
    switch(action.type) {
        case INCREMENT:
        return {
            user: null,
            count: state.count + 1
        }
        case DECREMENT:
        return {
            count: state.count - 1
        }
        case RESET:
        return {
            count: 0
        }
        default:
        return state
    }
}

export default reducer
