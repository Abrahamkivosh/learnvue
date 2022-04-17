const state = {
    todos: [{
            id: 1,
            title: "First Todo"
        },
        {
            id: 2,
            title: "second Todo"
        }
    ]

}
const getters = {
    allTodos: state => state.todos

}
const actions = {

}
const modules = {

}
export default {
    state,
    getters,
    actions,
    modules
}