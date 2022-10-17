import React, { useEffect, useRef, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { fetchSearchedBooks, fetchCharacters, fetchBooks } from "../../redux/books/booksAsyncThunk";
import { filterProps, TControls } from "./types";
import { filterOptions } from "./tableHeaders";
import { changePageNumber, resetBooks, resetAll } from "../../redux/books/booksSlice";
import {
  updateSearchValue,
  updateFilterParam,
} from "../../redux/tableFilter/tableFilterSlice";
import { resetAllParams } from "../../redux/tableFilter/tableFilterSlice";

// const initialState: filterProps = {
//   search: "",
//   filter: "",
// };

const TableControls = ({ data, disabled }: TControls) => {
  const dispatch = useAppDispatch();
  const { currentPage: page, result } = useAppSelector((state) => state.books);
  // const [formState, setFormState] = useState<filterProps>(initialState);
  const { filter, search } = useAppSelector((state) => state.tabFilter);
  const willUnmountOnce = useRef(true);
  useEffect(() => {
    if (willUnmountOnce.current) {
      willUnmountOnce.current = false;
      return;
    }
    // return () => {
    //   setFormState(initialState);
    // };
  }, []);

  useEffect(()=>{
console.log(filter, "filter");

  }, [filter])
  const filterBooks = (e: React.SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();
    // const { filter, search } = formState;
    dispatch(updateSearchValue(search));
    dispatch(updateFilterParam(filter));
    dispatch(resetBooks())

    if (!["culture", "charactername"].includes(filter)) {
      dispatch(changePageNumber(1));
      dispatch(fetchSearchedBooks({ filter, search, page }));
    } else {
      dispatch(changePageNumber(1));
      dispatch(fetchBooks({page}))
      dispatch(fetchCharacters({ filter, search }));
    }
  };

  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(updateSearchValue(e.target.value))
    // setFormState((prev) => ({ ...prev, search: e.target.value }));
  };
  const changeFilter = (e: React.ChangeEvent<HTMLSelectElement>) => {
    // setFormState((prev) => ({ ...prev, filter: e.target.value }));
    dispatch(updateFilterParam(e.target.value))
  };

  const resetFilters = () =>{
    dispatch(resetAllParams())
    dispatch(resetAll())
  }
  return (
    <div className="table__control">
      <span className="table__control--btn">
        <button>
          Showing {(search && result) ? "results for " : ""}
          <b>{(search && result) ? `${search}` : "All"}</b>
        </button>
       {filter !== "" && <button onClick={() => resetFilters()} className="reset_btn cursor-pointer">Reset Filters</button>}
      </span>
      <div className="select_container">
        <label>Search By</label>
        <select onChange={changeFilter} value={filter}>
          {filterOptions.map((filter, index) => (
            <option key={index} value={filter.value}>
              {filter.name}
            </option>
          ))}
        </select>
      </div>
      <form onSubmit={filterBooks}>
        <div className="table__input">
          <label htmlFor="searchBox"></label>
          <input
            id="searchBox"
            name="search"
            value={search}
            onChange={changeHandler}
            placeholder={`Search ${filter}`}
            disabled={!filter}
          />
          <button className={`cursor-pointer`} disabled={!filter}>Search</button>
        </div>
      </form>
    </div>
  );
}

const MemControls = React.memo(TableControls);
export default MemControls;
