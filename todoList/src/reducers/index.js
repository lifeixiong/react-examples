import { combineReducers } from "redux"
import todos from './todos'
import visibilityFitler from './visibilityFilter'

const todoApp = combineReducers({
    todos,
    visibilityFitler
})

export default todoApp