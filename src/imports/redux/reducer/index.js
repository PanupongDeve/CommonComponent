import { combineReducers } from 'redux';
import formReducer from './formReducer';
import languageReducer from './languageReducer';
import exampleStore from './exampleReducer';

const rootReducer = combineReducers({
    lang: languageReducer,
    form: formReducer,
    exampleStore 
});

export default rootReducer;

