export default (state = [], payload) => {

    switch(payload.type) {
        case 'add':
            return {
                ...state,
                item: payload.item
            }
        default:
            return state;    
    }
}