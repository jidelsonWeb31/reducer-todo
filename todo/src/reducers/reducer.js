export const initialState = {
    
todos: [{
  item: 'Learn about reducers',
  completed: false,
  id: 3892987589,
}]
  
  };

  export const reducer = (state, action) => {
    switch (action.type) {
        
      case "ADD_TODO":
        return {
          ...state,
          todos: [...state.todos, {text: action.text, completed:false}],
        };
        case "CLEAR_ALL":
        return {
          ...state,
          todos: state.todos.filter((t) => {
              return !t.completed
          })
        }
        case "TOGGLE_TODO":
            return{
            todos: state.todos.map((t, idx) => 
            idx === action.idx ? {...t, completed: !t.completed} : t)
            };
      default:
        return state;
    }
  };
