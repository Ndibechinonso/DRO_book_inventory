export type BooksProps = {
  publisher: string;
  name: string;
  isbn: string;
  authors: string[];
  released: string;
  characters: string[];
};
export type CharacterProps = {
  url: string
}
export interface IBooksState{
    loading: boolean;
    searchLoader: boolean;
    books: BooksProps[];
    characters: CharacterProps[];
    error: string;
    currentPage: number;
}
