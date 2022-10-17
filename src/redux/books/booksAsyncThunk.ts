import {createAsyncThunk} from "@reduxjs/toolkit"
import axios from "axios"

export const fetchBooks = createAsyncThunk("books/fetchBooks", async ({page = 1}: {page: number}, thunkApi) =>{    
  const url = `https://www.anapioficeandfire.com/api/books?page=${page}`
   return axios.get(url)
    .then((res) => res.data)
    .catch((err) => console.log(err)
    )
})

export const fetchSearchedBooks = createAsyncThunk("books/fetchSearchedBooks", async ({filter, search, page = 1}: {filter?: string, search?: string, page: number}, thunkApi) =>{    
    const url = `https://www.anapioficeandfire.com/api/books?page=${page}&${filter}=${search}`
   return axios.get(url)
    .then((res) => res.data)
    .catch((err) => console.log(err)
    )
})

export const fetchCharacters = createAsyncThunk("books/fetchCharacters", async ({filter, search}: {filter: string, search: string}) =>{
    const characterFilter = filter === "charactername" ? "name" : "culture"
   return axios.get(`https://www.anapioficeandfire.com/api/characters?${characterFilter}=${search}`)
    .then((res) => res.data)
    .catch((err) => console.log(err)
    )
})
