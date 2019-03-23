import { createStore } from 'redux'
import rootReducer from '../reducer'

export default function configureStore(){
    const store = createStore(rootReducer,
        //开发者工具
        window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : undefined
    )
    return store; 
}