import axios from "axios";
// const url = "https://listtimes.onrender.com"
// const API_URL = "/api/todo";
const API_URL = "https://listtimes.onrender.com";

export const fetchTodos = async() => {
  const response = await axios.get(API_URL + '/api/todo');
  return response.data
}

export const removeTodo = async(id) => {
  console.log(id)
  const response = await axios.delete(API_URL + '/api/todo/' + id);
  console.log(response.data);
  return response.data;
}

export const createTodo = async(formData) => {
  const response = await axios.post(API_URL + "/api/todo/", formData);
  console.log(response.data);
  return response.data;
}


// export const updateTodoDB = async(todo) => {
//   console.log(todo);
//   const response = await axios.put(API_URL + '/' + todo._id, 
//     {todo : todo.title, description : todo.description}
//   )
//   console.log(response.data);
//   return response.data;
// }


export const updateTodoDB = async(todo) => {
  console.log(todo);
  const response = await axios.put(API_URL + '/api/todo/' + todo._id, {title : todo.title, description : todo.description});
  console.log(response);
  return response.data
}