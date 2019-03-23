
const initState = {};
export default function changeCity(state = initState, action){
    switch(action.type){
        case 'SETCITY':
            return state = action.data;
        case 'UPDATECITY':
            return state = action.data;
        default:
            return state;
    }
}