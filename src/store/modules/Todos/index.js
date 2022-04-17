import axios from "axios"

const state = {
    todos: []

}
const getters = {
    allTodos: state => state.todos

}
const mutations = {
    setTodos: (state, todos) => state.todos = todos
}
const actions = {
    fetchTodos({ commit }) {
        axios.get('https://jsonplaceholder.typicode.com/todos').then((result) => {
            commit('setTodos', result.data)
        }).catch((err) => {
            console.log(err)
        });

    }


}
const modules = {


}
export default {
    state,
    getters,
    mutations,
    actions,
    modules
}