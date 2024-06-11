import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { createTodo, fetchTodos, removeTodo, updateTodoDB} from "./todoService";

const initialState = {
  allTodos : [],
  isLoading : true,
  isError : false,
  isSuccess : false,
  edit : {todo : {}, isEdit : false}
}

const todoSlice = createSlice({
  name : "todo",
  initialState,
  reducers : {

    removerFromState : (state, action) => {
      return {
        ...state,
        allTodos : state.allTodos.filter(item => item._id !== action.payload)
      }
    },

    editInState : (state, action) => {
      return {
        ...state,
        edit : {todo : action.payload, isEdit : true}
      }
    }
  },
  extraReducers : builder => {
    builder

    // get all todos
    .addCase(getTodos.pending, (state, action) => {
      state.isLoading = true
      state.isSuccess = false
      state.isError = false
    })
    .addCase(getTodos.fulfilled, (state, action) => {
      state.isLoading = false
      state.isSuccess = true
      state.allTodos = action.payload
      state.isError = false
    })
    .addCase(getTodos.rejected, (state, action) => {
      state.isLoading = false
      state.isSuccess = false
      state.isError = true
    })

    // delete todo
    .addCase(deleteTodo.pending, (state,action) => {
      state.isLoading = true
      state.isError = false
    })
    .addCase(deleteTodo.fulfilled, (state, action) => {
      state.isLoading = false
      state.isSuccess = true
    })
    .addCase(deleteTodo.rejected, (state, action) => {
      state.isLoading = false
      state.isSuccess = false
      state.isError = true
    })

    // add todo
    .addCase(addTodo.pending, (state,action) => {
      state.isLoading = true
      state.isSuccess = false
      state.isError = false
    })
    .addCase(addTodo.fulfilled, (state, action) => {
      state.isLoading = false
      state.isSuccess = true
      state.allTodos = [action.payload, ...state.allTodos]
      state.isError = false
    })
    .addCase(addTodo.rejected, (state, action) => {
      state.isLoading = false
      state.isSuccess = false
      state.isError = true
    })


    // Update Todo
    .addCase(updateTodo.pending, (state,action) => {
      state.isLoading = true
      state.isSuccess = false
      state.isError = false
    })
    .addCase(updateTodo.fulfilled, (state, action) => {
      state.isLoading = false
      state.isSuccess = true
      state.allTodos = state.allTodos.map(item => item._id === action.payload._id ? action.payload : item);
      state.edit = {todo : {}, isEdit : false}
    })
    .addCase(updateTodo.rejected, (state, action) => {
      state.isLoading = false
      state.isSuccess = false
      state.isError = true
    })

  }
});

export const getTodos = createAsyncThunk("GET/TODOS", async() => {
  try {
    return await fetchTodos();
  } catch (error) {
    console.log(error.message);
  }
})


export const deleteTodo = createAsyncThunk("DELETE/TODO", async(id) => {
  try {
    console.log(id)
    return await removeTodo(id);
  } catch (error) {
    console.log(error.message);
  }
})

export const addTodo = createAsyncThunk("ADD/TODO", async(formData) => {
  try {
    return await createTodo(formData);
  } catch (error) {
    console.log(error.message);
  }
})


export const updateTodo = createAsyncThunk("UPDATE/TODO", async(todo) => {
  try {
    return await updateTodoDB(todo);
  } catch (error) {
    console.log(error.message)
  }
})

export const {removerFromState, editInState} = todoSlice.actions;


export default todoSlice.reducer;