import {createSlice, PayloadAction} from "@reduxjs/toolkit"
import { fetchBooks, fetchSearchedBooks, fetchCharacters } from "./booksAsyncThunk"
import { IBooksState, BooksProps } from "../types"
import { stat } from "fs"

const initialState: IBooksState = {
    loading: false,
    books: [],
    characters: [],
    error: "",
    currentPage: 1,
    result: false
}

const slice = createSlice({
    name: "books",
    initialState,
    reducers: {
        changePageNumber: (state, action) => {
            state.currentPage = action.payload !== 0 ?  action.payload : state.currentPage + 1
          },
          resetBooks:(state) =>{
            state.books = []    
          },
          resetAll:(state)=>{
            state.books = initialState.books
            state.characters = initialState.characters
            state.currentPage = initialState.currentPage
            state.result = false
          }
    },
    extraReducers(builder) {
builder.addCase(fetchBooks.pending, (state) =>{
    state.loading = true
})
.addCase(fetchBooks.fulfilled, (state, action: PayloadAction<BooksProps[]>) =>{
    state.loading = false;
    state.books = state.books.concat(action.payload)
})
.addCase(fetchBooks.rejected, (state, action) =>{
    state.loading = false
    state.error = action.error.message || "something went wrong"
})
.addCase(fetchSearchedBooks.pending, (state) =>{
    state.loading = true
})
.addCase(fetchSearchedBooks.fulfilled, (state, action: PayloadAction<BooksProps[]>) =>{
    state.loading = false;
    state.books = state.books.concat(action.payload)
    state.result = true
})
.addCase(fetchSearchedBooks.rejected, (state, action) =>{
    state.loading = false
    state.error = action.error.message || "something went wrong"
})
.addCase(fetchCharacters.pending, (state) =>{
    state.loading = true
})
.addCase(fetchCharacters.fulfilled, (state, action: PayloadAction<any>) =>{
    state.characters = action.payload
    state.loading = false
    state.result = true
})
.addCase(fetchCharacters.rejected, (state, action) =>{
    state.loading = false
    state.error = action.error.message || "something went wrong"
})
    }
})

export const {changePageNumber, resetBooks, resetAll} = slice.actions
export default slice.reducer
