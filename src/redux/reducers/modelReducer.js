import { ADD_MODEL, UPDATE_MODEL, DELETE_MODEL } from '../actions/modelActions' 
import Models from '../../components/DisplayData/Models';
import f4FData from '../../assets/bd.json';

const initialState = {
    models: Models
  }
  
function models (state = initialState, action) {

    f4FData.map((model) => {
        console.log(model['Performer Earned'])
    })
    switch (action.type) {
      case ADD_MODEL:
        return {
            
            
            /* 
          ...state,
          models: [
            action.payload,
            ...state.todos
          ] */
        }
  
      case UPDATE_MODEL:
        console.log(action)
        return {
            
            
            /* 
          ...state,
          models: state.todos.map((todo) => {
            if (action.payload.id === todo.id) {
              return {
                ...todo,
                checked: !todo.checked
              }
            }
            return todo
          }) */
        }
  
      case DELETE_MODEL:
        return {
            
            
            /* 
          ...state,
          todos: state.todos.filter((todo) => {
            return todo.id !== action.payload.id
          }) */
        }
  
      default:
        return state
    }
  }
  
export default models;