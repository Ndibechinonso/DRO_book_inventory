import {combineReducers} from "redux"
import booksReducer from "./books/booksSlice"
import tabFilterReducer from "./tableFilter/tableFilterSlice"

const rootReducer = combineReducers({
books: booksReducer,
tabFilter: tabFilterReducer
})

export default rootReducer