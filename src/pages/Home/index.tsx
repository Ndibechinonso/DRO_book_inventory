import { useAppSelector } from "../../redux/hooks";
import Table from "../../components/CustomTable/Table";
import { booksTable } from "../../components/CustomTable/tableHeaders";
import { useEffect, useState } from "react";
import { BooksProps } from "../../redux/types";
import { useFetch } from "../../components/CustomHooks";

const Home = () => {
  const {loading, books, characters } = useAppSelector((state) => state.books);
  const {filter} = useAppSelector((state) => state.tabFilter)
const [data, setData] = useState<BooksProps[]>([])

  useEffect(()=>{
    
if(["culture", "charactername"].includes(filter) && !loading){
let filteredBooks = books.filter((book)=> book.characters.includes(characters[0]?.url))
setData(filteredBooks)
}else{
    setData(books)
}
  },[books, characters] )
  return (
    <div className="home">
      <h1 className="home_tittle">My Book Inventory</h1>
        <Table headers={booksTable.columns} data={data} />
    </div>
  );
};

export default Home;
