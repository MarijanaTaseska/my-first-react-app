import axios from "axios"

const baseURL = 'http://localhost:3002/todos'
export const getTodos = () => {
    return axios.get(baseURL)
    .then(res => res.data
    )
    .catch(err => console.log(err.response))
}

export const addTodo = (description) => {
 const todo = {
    description:description,
    completed:false
 }
 return axios.post(baseURL, todo)
}

export const putTodo = (todo) => {
    return axios.put(`${baseURL}/${todo.id}`, todo)
}

export const deleteTodo = (id) => {
    return axios.delete(`${baseURL}/${id}`)
}