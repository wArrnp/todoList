import { createAction ,handleActions } from "redux-actions";
import { Map, List } from "immutable";

const ADD_TODO = 'todo/ADD_TODO';
const REMOVE_TODO = 'todo/REMOVE_TODO';
const CHANGE_TODO = 'todo/CHANGE_TODO';

export const addTodo = createAction(ADD_TODO);
export const removeTodo = createAction(REMOVE_TODO);
export const changeTodo = createAction(CHANGE_TODO);

const initialState = List([

])

export default handleActions({
    [ADD_TODO]: (state, action) => state.push(Map(action.payload)),
    [REMOVE_TODO]: (state, action) => {
        const index = state.findIndex(num => num.get('id') === action.payload.id);

        return state.delete(index);
    },
    [CHANGE_TODO]: (state, action) => {
        const index = state.findIndex(num => num.get('id') === action.payload.id);

        return state.update(index, done => done.set('done', !done.get('done')));
    }
}, initialState)